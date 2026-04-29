import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X, Loader2 } from "lucide-react";

type Message = { role: "user" | "assistant"; content: string };

const CHAT_ENDPOINT = "/api/chat";

const ChatAgent = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "👋 Hi! I'm ACT's assistant. Ask me anything about ACT's services, solutions, or company — I'll answer based on our official information.",
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    const next = [...messages, { role: "user", content: text } as Message];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch(CHAT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next.map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json().catch(() => ({}));
      const reply =
        data?.reply ?? "Sorry, I couldn't generate a response right now.";
      setMessages((m) => [...m, { role: "assistant", content: reply }]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "Network error. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-6 z-[9999] w-[min(92vw,380px)] h-[min(70vh,560px)] flex flex-col rounded-2xl shadow-2xl border border-orange-200 bg-white overflow-hidden animate-in fade-in slide-in-from-bottom-4">
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[hsl(18,97%,57%)] to-[hsl(18,97%,47%)] text-white">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold">
                ACT
              </div>
              <div className="leading-tight">
                <div className="font-semibold text-sm">ACT Assistant</div>
                <div className="text-[11px] opacity-90">Ask about ACT services</div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1 rounded-full hover:bg-white/20 transition"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-gray-50">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  dir="auto"
                  className={`max-w-[85%] px-3 py-2 rounded-2xl text-sm whitespace-pre-wrap break-words ${
                    m.role === "user"
                      ? "bg-[hsl(18,97%,57%)] text-white rounded-br-sm"
                      : "bg-white text-gray-900 border border-gray-200 rounded-bl-sm"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-sm px-3 py-2">
                  <Loader2 className="w-4 h-4 animate-spin text-[hsl(18,97%,57%)]" />
                </div>
              </div>
            )}
          </div>

          <div className="border-t bg-white p-2">
            <div className="flex items-center gap-2">
              <input
                dir="auto"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Type your question…  اكتب سؤالك"
                className="flex-1 px-3 py-2 text-sm bg-gray-100 text-gray-900 placeholder:text-gray-500 rounded-full outline-none focus:ring-2 focus:ring-[hsl(18,97%,57%)]"
              />
              <button
                onClick={send}
                disabled={loading || !input.trim()}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[hsl(18,97%,57%)] text-white disabled:opacity-50 hover:brightness-110 transition"
                aria-label="Send"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="text-center text-[10px] text-gray-400 mt-1.5">
              Powered by <span className="font-semibold text-[hsl(18,97%,57%)]">ACT</span>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full bg-gradient-to-br from-[hsl(18,97%,57%)] to-[hsl(18,97%,45%)] text-white shadow-xl hover:scale-110 active:scale-95 transition-transform flex items-center justify-center ring-4 ring-orange-200/50"
        aria-label="Open ACT chat"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </>
  );
};

export default ChatAgent;
