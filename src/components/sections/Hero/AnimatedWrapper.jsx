import { motion } from "framer-motion";

export default function AnimatedWrapper({ children }) {
  return (
    <div className="hidden md:flex items-center justify-center">
      <motion.div
        className="w-full h-full"
        animate={{ y: [0, -18, 0], rotate: [0, 4, -4, 0] }}
        transition={{
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 9, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
