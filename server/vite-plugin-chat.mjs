// Vite plugin: wires /api/chat into the dev server (and `vite preview`).
// Loads .env so process.env.OPENAI_API_KEY is available locally.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { handleChat } from "./chat-handler.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function loadEnv() {
  const envPath = path.resolve(__dirname, "..", ".env");
  if (!fs.existsSync(envPath)) return;
  const lines = fs.readFileSync(envPath, "utf8").split("\n");
  for (const line of lines) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/i);
    if (!m) continue;
    const [, k, v] = m;
    if (!process.env[k]) process.env[k] = v.replace(/^['"]|['"]$/g, "");
  }
}

export default function chatPlugin() {
  return {
    name: "act-chat-api",
    configureServer(server) {
      loadEnv();
      server.middlewares.use("/api/chat", (req, res, next) => {
        if (req.method === "POST") return handleChat(req, res);
        next();
      });
    },
    configurePreviewServer(server) {
      loadEnv();
      server.middlewares.use("/api/chat", (req, res, next) => {
        if (req.method === "POST") return handleChat(req, res);
        next();
      });
    },
  };
}
