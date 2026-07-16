import { motion } from "framer-motion";
export default function MobileNav({
  navLinks,
  STYLES,
  isOpen,
  closeMenu,
  toggleMenu,
}) {
  return (
    <>
      <motion.nav
        className="fixed top-17 right-0 w-70 h-[calc(100dvh-68px)] bg-gsa-black p-6 border-l border-dashed border-gsa-purple-soft/30 overflow-y-auto"
        initial={{ x: "100%" }}
        animate={isOpen ? { x: 0 } : { x: "100%" }}
        transition={{ duration: 0.3 }}
      >
        <ul className="flex flex-col items-stretch gap-2 list-none">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, x: 20 }}
              animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: i * 0.05 }}
            >
              <a
                href={link.href}
                onClick={closeMenu}
                className={`${STYLES.navLinkBase} ${STYLES.navLinkStandard}`}
              >
                {link.name}
              </a>
            </motion.li>
          ))}
          <motion.li
            initial={{ opacity: 0, x: 20 }}
            animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: navLinks.length * 0.05 }}
          >
            <a
              href="#contactos"
              onClick={closeMenu}
              className={`${STYLES.navLinkBase} ${STYLES.navLinkCTA}`}
            >
              Contactos
            </a>
          </motion.li>
        </ul>
      </motion.nav>

      {/* Hamburger Button */}
      <motion.button
        onClick={toggleMenu}
        className="flex flex-col gap-1.25 cursor-pointer p-1.5 z-1001 bg-transparent border-none"
        aria-label="Menu"
        aria-expanded={isOpen}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.span
          className={STYLES.hamburgerLine}
          animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.1, ease: "linear" }}
        />
        <motion.span
          className={STYLES.hamburgerLine}
          animate={isOpen ? { width: "0" } : { width: "100%" }}
          transition={{ duration: 0.1, ease: "linear" }}
        />
        <motion.span
          className={STYLES.hamburgerLine}
          animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.1, ease: "linear" }}
        />
      </motion.button>

      {/* Mobile menu backdrop */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-999"
          onClick={closeMenu}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </>
  );
}
