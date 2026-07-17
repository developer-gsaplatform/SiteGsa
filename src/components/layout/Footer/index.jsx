import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const SOCIALS = [
  { icon: faLinkedinIn, href: "/#", label: "LinkedIn" },
  { icon: faGithub, href: "/#", label: "Github" },
  { icon: faTwitter, href: "/#", label: "X (Twitter)" },
];

export default function Footer() {
  const { t } = useTranslation();

  const NAV_LINKS = useMemo(
    () => [
      { label: t("navigation.servicos"), href: "/#servicos" },
      { label: t("navigation.sobre"), href: "/#sobre" },
      { label: t("testimonials.label"), href: "/#testemunhos" },
      { label: t("navigation.eventos"), href: "/#eventos" },
      { label: t("navigation.contactos"), href: "/#contactos" },
    ],
    [t],
  );

  return (
    <footer className="w-full bg-gsa-black border-t border-dashed border-gsa-gray-7 relative z-10">
      <div className="max-w-7xl mx-auto px-[5%]">
        {/* Bloco Principal: Marca, Navegação, Redes Sociais */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 py-14">
          {/* Marca + Tagline */}
          <div className="flex flex-col gap-3 max-w-xs">
            <a
              href="/#inicio"
              className="text-lg font-extrabold text-gsa-white uppercase tracking-[0.06em] flex items-center gap-2.5"
            >
              <img alt="GSA" src="/icon.png" width={28} height={28} />
              GSAPLATFORM
            </a>
            <p className="text-xs text-gsa-gray-5/70 leading-relaxed">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Navegação */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gsa-purple-soft">
              {t("footer.navigation")}
            </span>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs text-gsa-gray-5/70 hover:text-gsa-white transition-colors duration-300 w-max"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Redes Sociais */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gsa-purple-soft">
              {t("footer.followUs")}
            </span>
            <div className="flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center border border-dashed border-gsa-gray-4/30 text-gsa-gray-5/60 hover:text-gsa-purple-soft hover:border-gsa-purple-soft/50 transition-colors duration-300"
                >
                  <FontAwesomeIcon icon={s.icon} className="text-sm" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider decorativo */}
        <div className="flex items-center gap-3">
          <div className="w-1 h-1 rounded-full bg-gsa-purple-soft" />
          <div className="flex-1 h-px bg-gsa-gray-3" />
        </div>

        {/* Linha legal */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 py-5">
          <span className="uppercase tracking-[0.3em] text-gsa-gray-5/70 text-[12px]">
            GSAPlatform · Luanda, AO
          </span>
          <span className="uppercase tracking-[0.3em] text-gsa-gray-5/70 text-[12px]">
            © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}
