import { useState, useRef, useEffect, useMemo } from "react";
import { X, Bot, Send, Trash2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { fluxosDeResposta } from "./../../../config/chatbot";

export default function AssistenteGSA() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [hasNotification, setHasNotification] = useState(true);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showChips, setShowChips] = useState(true);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const welcomeMessage = useMemo(() => t("chatbot.welcomeMessage"), [t]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([
          {
            text: welcomeMessage,
            sender: "bot",
          },
        ]);
      }, 300);
    }
  }, [isOpen, messages.length, welcomeMessage]);

  const getBotResponse = (msg) => {
    const normalizarTexto = (texto) => {
      return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
    };

    const msgNormalizada = normalizarTexto(msg);
    for (const fluxo of fluxosDeResposta) {
      const encontrouGatilho = fluxo.gatilhos.some((gatilho) =>
        msgNormalizada.includes(gatilho),
      );
      if (encontrouGatilho) {
        return fluxo.resposta;
      }
    }

    return t("chatbot.defaultResponse");
  };

  const handleSend = (text) => {
    if (!text.trim()) return;

    setShowChips(false);
    setHasNotification(false);
    setMessages((prev) => [...prev, { text, sender: "user" }]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const resposta = getBotResponse(text);
      setMessages((prev) => [...prev, { text: resposta, sender: "bot" }]);
      setIsTyping(false);
    }, 1000 + 500);
  };

  const limparConversa = () => {
    setMessages([
      {
        text: welcomeMessage,
        sender: "bot",
      },
    ]);
    setShowChips(true);
    setInputValue("");
  };

  return (
    <div className="fixed bottom-7 right-7 z-[2000] font-sans-semi">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          if (hasNotification) setHasNotification(false);
        }}
        className="w-[58px] h-[58px] text-white cursor-pointer flex items-center justify-center transition-all duration-200 hover:-translate-y-[2px] relative"
        aria-label="Abrir assistente GSA"
      >
        <img
          src="/icon.png"
          alt="Assistente GSA"
          width={"50px"}
          height={"50px"}
        />
        {hasNotification && (
          <span className="absolute -top-1.25 -right-1.25 w-4 h-4 bg-[#f5f5f0] text-[#5E2D91] text-[0.6rem] font-extrabold flex items-center justify-center ">
            1
          </span>
        )}
      </button>

      <div
        className={`absolute bottom-[70px] right-0 w-[340px] max-w-[calc(100vw-38px)] bg-[#0a0a0a] border border-dashed border-[#9B7BC4] flex flex-col overflow-hidden transition-all duration-250 ease-out origin-bottom-right ${
          isOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="bg-[rgba(94,45,145,0.12)] p-[14px_16px] border-b border-dashed border-gsa-gray-2 flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <div className="w-8 h-8 flex items-center justify-center text-[#9B7BC4]">
              <Bot size={28} strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-[0.9rem] font-extrabold m-0  uppercase tracking-[0.04em] text-[#f5f5f0]">
                {t("chatbot.headerTitle")}
              </h4>
              <div className="text-[0.7rem] text-[#9B7BC4] flex items-center gap-1.25">
                <span className="w-1.25 h-1.25 bg-[#9B7BC4] inline-block animate-pulse rounded-full" />
                {t("chatbot.headerStatus")}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={limparConversa}
              title="Limpar histórico"
              className="bg-transparent border-none text-[#8a8499] cursor-pointer p-1.5 transition-colors hover:text-[#9B7BC4]"
              aria-label="Limpar conversa"
            >
              <Trash2 size={18} strokeWidth={1.8} />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              title="Fechar chat"
              className="bg-transparent border-none text-[#8a8499] cursor-pointer p-1.5 transition-colors hover:text-[#f5f5f0]"
              aria-label="Fechar"
            >
              <X size={20} strokeWidth={1.8} />
            </button>
          </div>
        </div>

        <div className="flex-1 p-[14px] overflow-y-auto flex flex-col gap-[9px] h-[300px] scroll-smooth">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-[10px_13px] max-w-[86%] text-[0.86rem] leading-[1.5] border border-dashed animate-in fade-in slide-in-from-bottom-2 duration-200 ${
                msg.sender === "bot"
                  ? "bg-[rgba(22,17,34,0.6)] text-[#c8c2d8] self-start border-[#3d3858]"
                  : "bg-[#5E2D91] text-white self-end font-medium border-[#5E2D91] border-solid"
              }`}
            >
              {msg.text}
            </div>
          ))}

          {isTyping && (
            <div className="p-[11px_14px] bg-[rgba(22,17,34,0.6)] border border-dashed border-[#3d3858] self-start flex gap-1.25 items-center">
              <span
                className="w-1.25 h-1.25 bg-[#9B7BC4] animate-bounce"
                style={{ animationDelay: "0ms" }}
              />
              <span
                className="w-1.25 h-1.25 bg-[#9B7BC4] animate-bounce"
                style={{ animationDelay: "150ms" }}
              />
              <span
                className="w-1.25 h-1.25 bg-[#9B7BC4] animate-bounce"
                style={{ animationDelay: "300ms" }}
              />
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {showChips && (
          <div className="flex flex-wrap gap-1.25 p-[10px_14px] border-t border-dashed border-gsa-gray-2">
            {t("chatbot.quickChips", { returnObjects: true }).map((chip) => (
              <button
                key={chip}
                onClick={() => handleSend(chip)}
                className="bg-[rgba(22,17,34,0.5)] border border-dashed border-[#3d3858] text-[#a8a2b8] text-[0.74rem] p-[5px_10px] cursor-pointer transition-all duration-200 whitespace-nowrap hover:border-[#9B7BC4] hover:text-[#f5f5f0]"
              >
                {chip}
              </button>
            ))}
          </div>
        )}

        <form
          className="flex border-t border-dashed border-gsa-gray-2"
          onSubmit={(e) => {
            e.preventDefault();
            handleSend(inputValue);
          }}
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={t("chatbot.inputPlaceholder")}
            className="flex-1 p-[13px_16px] bg-transparent border-none text-[#f5f5f0] text-[0.88rem] outline-none placeholder:text-[#5a5470]"
          />
          <button
            type="submit"
            className="p-[0_16px] bg-transparent border-none text-[#9B7BC4] cursor-pointer transition-colors hover:text-[#f5f5f0]"
          >
            <Send size={18} strokeWidth={2} />
          </button>
        </form>
      </div>
    </div>
  );
}
