import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const languages = [
  { code: "pt", label: "Português", short: "PT", flag: "🇵🇹" },
  { code: "en", label: "English", short: "EN", flag: "🇬🇧" },
];

export default function LanguageSelect() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  const handleSelect = (code) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative inline-block text-left font-semi">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 h-6 px-2.5 border border-dashed border-gsa-purple-soft/30 hover:border-gsa-purple-soft/60 bg-gsa-black/92 text-gsa-white text-[0.72rem] font-semibold uppercase tracking-[0.08em] transition-all duration-200 cursor-pointer select-none"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="text-sm leading-none">{currentLang.flag}</span>
        <span>{currentLang.short}</span>
        <ChevronDown
          size={11}
          className={`text-gsa-gray-5 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute left-0 mt-1.5 w-36 bg-gsa-black border border-gsa-purple-soft/30 shadow-2xl shadow-black z-1000"
          >
            <div className="py-1" role="listbox">
              {languages.map((lang) => {
                const isSelected = lang.code === language;
                return (
                  <button
                    key={lang.code}
                    onClick={() => handleSelect(lang.code)}
                    className={`flex items-center justify-between w-full px-3 py-2 text-left text-[0.72rem] font-semibold uppercase tracking-[0.08em] transition-colors cursor-pointer select-none ${
                      isSelected
                        ? "text-gsa-white bg-gsa-purple/20"
                        : "text-gsa-gray-6 hover:text-gsa-white hover:bg-gsa-purple/10"
                    }`}
                    role="option"
                    aria-selected={isSelected}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-sm">{lang.flag}</span>
                      <span>{lang.label}</span>
                    </span>
                    {isSelected && (
                      <Check size={12} className="text-gsa-purple-soft" />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
