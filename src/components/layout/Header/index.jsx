import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useResponsive } from "./../../../hooks/useResponsive";
import { STYLES, linkVariants } from "./../../../config/header";
import { useLanguage } from "./../../../context/LanguageContext";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import LanguageSelect from "./LanguageSelect";

const languages = [
  { code: "pt", label: "Português", short: "AO", flag: "🇦🇴" },
  { code: "en", label: "English", short: "EN", flag: "🇬🇧" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const { isNavMobile } = useResponsive();
  const { language, setLanguage } = useLanguage();
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = useMemo(
    () => [
      { name: t("navigation.inicio"), href: "/#inicio" },
      { name: t("navigation.sobre"), href: "/#sobre" },
      { name: t("navigation.plataformas"), href: "/#plataformas" },
      { name: t("navigation.servicos"), href: "/#servicos" },
      { name: t("navigation.eventos"), href: "#eventos" },
      { name: t("navigation.estagios"), href: "/#estagios-pro" },
      { name: t("navigation.parceiros"), href: "/#parceiros" },
    ],
    [t],
  );

  return (
    <>
      {/* Top Bar with Language Selector */}
      <div className="fixed top-0 left-0 w-full h-8 flex items-center justify-between px-[5%] z-1000 bg-gsa-black border-b border-dashed border-gsa-purple-soft/20 text-[0.68rem] md:text-[0.72rem] font-semibold tracking-[0.06em] text-gsa-gray-6 uppercase select-none">
        {/* Left side: Languages */}
        <div className="flex items-center gap-1.5shrink-0">
          {isNavMobile ? (
            <LanguageSelect />
          ) : (
            languages.map((lang) => {
              const isSelected = lang.code === language;
              return (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`flex items-center gap-1.5 h-6 px-2.5 transition-all duration-200 border cursor-pointer select-none text-[0.72rem] font-semibold uppercase tracking-[0.08em] ${
                    isSelected
                      ? "border-gsa-purple-soft bg-gsa-purple/20 text-gsa-white"
                      : "border-transparent text-gsa-gray-6 hover:text-gsa-white hover:border-gsa-purple-soft/20 hover:bg-gsa-purple/5"
                  }`}
                  title={lang.label}
                >
                  <span className="text-sm select-none leading-none">
                    {lang.flag}
                  </span>
                  <span className="select-none leading-none">{lang.short}</span>
                </button>
              );
            })
          )}
        </div>

        {/* Right side: Copyright / System text */}
        <div className="truncate pl-4 flex-shrink">
          {isNavMobile
            ? "© 2026 GSAPLATFORM"
            : `© 2026 GSAPLATFORM • ${t("hero.badge")}`}
        </div>
      </div>

      <header className="fixed top-8 left-0 w-full h-17 flex items-center justify-between px-[5%] z-999 bg-gsa-black/92 border-b border-dashed border-gsa-purple-soft/30 backdrop-blur-md">
        <Link
          to="/#inicio"
          className=" text-[1.4rem] font-extrabold text-gsa-white flex items-center gap-3 tracking-[0.06em] uppercase"
          aria-label={`GSAPLATFORM — ${t("navigation.inicio")}`}
        >
          <img alt="GSAPLATFORM" src="/icon.png" width={34} height={34} />
          GSAPLATFORM
        </Link>

        {!isNavMobile && (
          <DesktopNav
            navLinks={navLinks}
            linkVariants={linkVariants}
            STYLES={STYLES}
          />
        )}

        {isNavMobile && (
          <MobileNav
            navLinks={navLinks}
            STYLES={STYLES}
            isOpen={isOpen}
            closeMenu={closeMenu}
            toggleMenu={toggleMenu}
          />
        )}
      </header>
    </>
  );
}
