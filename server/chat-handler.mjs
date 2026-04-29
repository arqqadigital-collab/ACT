// Shared chat handler used by both the Vite dev plugin and the production server.
// The OpenAI API key is read from process.env.OPENAI_API_KEY and never leaves this file.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const KNOWLEDGE_PATH = path.resolve(__dirname, "..", "deatilasandsupport");

let cachedKnowledge = "";
let cachedMtime = 0;

function loadKnowledge() {
  try {
    const stat = fs.statSync(KNOWLEDGE_PATH);
    if (stat.mtimeMs !== cachedMtime) {
      cachedKnowledge = fs.readFileSync(KNOWLEDGE_PATH, "utf8");
      cachedMtime = stat.mtimeMs;
    }
  } catch {
    cachedKnowledge = "";
  }
  return cachedKnowledge;
}

// Simple in-memory rate limiter (per IP).
const bucket = new Map();
const LIMIT = 20;
const WINDOW_MS = 60_000;

function rateLimited(ip) {
  const now = Date.now();
  const entry = bucket.get(ip);
  if (!entry || entry.reset < now) {
    bucket.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > LIMIT;
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
      if (data.length > 64 * 1024) reject(new Error("Body too large"));
    });
    req.on("end", () => resolve(data));
    req.on("error", reject);
  });
}

function send(res, status, body, headers = {}) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    ...headers,
  });
  res.end(typeof body === "string" ? body : JSON.stringify(body));
}

export async function handleChat(req, res) {
  if (req.method !== "POST") {
    return send(res, 405, { error: "Method not allowed" });
  }

  const ip =
    (req.headers["x-forwarded-for"] || "").toString().split(",")[0].trim() ||
    req.socket?.remoteAddress ||
    "unknown";
  if (rateLimited(ip)) {
    return send(res, 429, { error: "Too many requests. Please slow down." });
  }

  let payload;
  try {
    const raw = await readBody(req);
    payload = JSON.parse(raw);
  } catch {
    return send(res, 400, { error: "Invalid JSON body" });
  }

  let messages = payload?.messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return send(res, 400, { error: "messages required" });
  }

  messages = messages.slice(-10).map((m) => ({
    role: m.role === "user" || m.role === "assistant" ? m.role : "user",
    content: String(m.content ?? "").slice(0, 2000),
  }));

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return send(res, 500, {
      error: "Server misconfigured: OPENAI_API_KEY missing",
    });
  }

  const knowledge = loadKnowledge();
  const systemPrompt = `You are ACT's official website assistant.

STRICT RULES:
1. Answer ONLY using facts found in the knowledge base below. Do NOT invent, guess, or use outside knowledge.
2. If the user asks anything not covered by the knowledge base, politely reply (in the user's language) that you can only answer questions about ACT based on the official website content, and suggest contacting ACT directly.
3. LANGUAGE: Detect the user's language automatically and reply in the SAME language — you support every language in the world (Arabic, English, French, Spanish, German, Chinese, Hindi, Russian, Turkish, Urdu, etc.).
4. MIXED LANGUAGES: If the user mixes languages in one message (e.g. Arabic + English together, or "Arabizi"/franco-arabic like "ezayak" or "3ashan"), understand all of it naturally and reply in the dominant language of their message. Keep proper nouns, product names, and technical terms in their original form.
5. Use clear formatting (short paragraphs, bullet points when useful). For Arabic answers, write naturally right-to-left.

===== ACT KNOWLEDGE BASE =====
${knowledge}
===== END KNOWLEDGE BASE =====`;

  try {
    const upstream = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        temperature: 0.2,
        messages: [{ role: "system", content: systemPrompt }, ...messages],
      }),
    });

    if (!upstream.ok) {
      const text = await upstream.text();
      return send(res, 502, { error: "Upstream error", detail: text });
    }

    const data = await upstream.json();
    const reply =
      data?.choices?.[0]?.message?.content ??
      "Sorry, I couldn't generate a response right now.";
    return send(res, 200, { reply });
  } catch (err) {
    return send(res, 500, { error: "Internal error", detail: String(err) });
  }
}
