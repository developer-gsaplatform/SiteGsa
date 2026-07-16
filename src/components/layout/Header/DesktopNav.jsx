import { motion } from "framer-motion";
export default function DesktopNav({ navLinks, STYLES, linkVariants }) {
  return (
    <nav className="flex items-center gap-1">
      <ul className="flex items-center gap-1 list-none">
        {navLinks.map((link, i) => (
          <motion.li
            key={link.href}
            custom={i}
            variants={linkVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.a
              href={link.href}
              className={`${STYLES.navLinkBase} ${STYLES.navLinkStandard}`}
            >
              {link.name}
            </motion.a>
          </motion.li>
        ))}
        <motion.li
          custom={navLinks.length}
          variants={linkVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.a
            href="#contactos"
            className={`${STYLES.navLinkBase} ${STYLES.navLinkCTA}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contactos
          </motion.a>
        </motion.li>
      </ul>
    </nav>
  );
}
