import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "./../../../config/navigation";
import { useResponsive } from "./../../../hooks/useResponsive";
import { STYLES, linkVariants } from "./../../../config/header";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { isNavMobile } = useResponsive();
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full h-17 flex items-center justify-between px-[5%] z-1000 bg-gsa-black/92 border-b border-dashed border-gsa-purple-soft/30 backdrop-blur-md">
      <Link
        to="/#inicio"
        className=" text-[1.4rem] font-extrabold text-gsa-white flex items-center gap-3 tracking-[0.06em] uppercase"
        aria-label="GSAPLATFORM — Início"
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
  );
}
