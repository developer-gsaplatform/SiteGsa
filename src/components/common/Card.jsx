import { motion } from "framer-motion";
import { memo } from "react";

const Card = memo(function Card({
  children,
  className = "",
  animated = true,
  hoverEffect = "scale",
  onClick = null,
}) {
  const hoverVariants = {
    scale: { y: -5, boxShadow: "0 20px 40px rgba(94, 45, 145, 0.2)" },
    lift: { y: -8 },
    glow: { boxShadow: "0 0 20px rgba(155, 123, 196, 0.5)" },
  };

  const baseClass =
    "bg-[#0a0a0a] border border-gsa-gray-2 transition-all duration-200";

  if (!animated) {
    return (
      <div className={`${baseClass} ${className}`} onClick={onClick}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={`${baseClass} ${className}`}
      whileHover={hoverVariants[hoverEffect] || hoverVariants.scale}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
});

Card.displayName = "Card";

export default Card;
