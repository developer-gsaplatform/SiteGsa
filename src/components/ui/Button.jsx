"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  loading = false,
  disabled = false,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center gap-2 px-[26px] py-[13px]  font-bold text-[1rem] cursor-pointer border select-none transition-all duration-[220ms] whitespace-nowrap tracking-[0.12em] uppercase";

  const variants = {
    primary:
      "bg-gsa-purple text-gsa-white border-gsa-purple hover:bg-gsa-purple-deep hover:border-gsa-purple-soft",
    ghost:
      "bg-transparent text-gsa-white border-dashed border-gsa-purple-soft hover:border-solid hover:border-gsa-white hover:bg-gsa-purple-soft/8",
    secondary:
      "bg-gsa-gray-2 text-gsa-white border-gsa-gray-3 hover:border-gsa-purple-soft hover:bg-gsa-gray-3",
    danger:
      "bg-red-600 text-gsa-white border-red-600 hover:bg-red-700 hover:border-red-700",
  };

  const stateClass = disabled || loading ? "opacity-50 cursor-not-allowed" : "";
  const computedClassName = `${baseStyles} ${variants[variant]} ${stateClass} ${className}`;

  const motionProps = {
    whileHover: !disabled && !loading ? { scale: 1.02 } : {},
    whileTap: !disabled && !loading ? { scale: 0.98 } : {},
    transition: { duration: 0.2 },
  };

  const content = loading ? (
    <>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity }}
        className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
      />
      Carregando...
    </>
  ) : (
    children
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={computedClassName}
        {...motionProps}
        pointerEvents={disabled || loading ? "none" : "auto"}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={computedClassName}
      disabled={disabled || loading}
      {...motionProps}
      {...props}
    >
      {content}
    </motion.button>
  );
}
