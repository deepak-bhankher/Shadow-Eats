import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const PHONE_NUMBER = "917777024365";
const DEFAULT_MESSAGE = "Hello, is this Shadow Eats?";

export default function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);
  const href = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1, type: "spring", stiffness: 200 }}
      whileTap={{ scale: 0.93 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="fixed bottom-6 right-6 z-[999] flex items-center justify-center cursor-pointer"
      style={{
        borderRadius: 999,
        background: "#25D366",
        boxShadow: hovered
          ? "0 8px 32px rgba(37,211,102,0.6), 0 2px 8px rgba(0,0,0,0.15)"
          : "0 4px 18px rgba(37,211,102,0.45)",
        width: hovered ? "auto" : 52,
        height: 52,
        minWidth: 52,
        padding: hovered ? "0 14px" : "0",
        gap: hovered ? 8 : 0,
        overflow: "hidden",
        transition: "width 0.35s cubic-bezier(0.34,1.56,0.64,1), padding 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease",
      }}
    >
      {/* pulsing ring */}
      <motion.span
        className="absolute inset-0"
        style={{ borderRadius: 999, border: "2.5px solid rgba(37,211,102,0.7)" }}
        animate={{ scale: [1, 1.6], opacity: [0.7, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />
      <motion.span
        className="absolute inset-0"
        style={{ borderRadius: 999, border: "2px solid rgba(37,211,102,0.4)" }}
        animate={{ scale: [1, 2], opacity: [0.4, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
      />

      {/* text — left of icon */}
      <AnimatePresence>
        {hovered && (
          <motion.span
            key="text"
            initial={{ opacity: 0, x: -10, width: 0 }}
            animate={{ opacity: 1, x: 0, width: "auto" }}
            exit={{ opacity: 0, x: -10, width: 0 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 text-white font-semibold text-sm whitespace-nowrap overflow-hidden"
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.2)" }}
          >
            Need Help?
          </motion.span>
        )}
      </AnimatePresence>

      {/* icon — always centered / right on hover */}
      <motion.div
        animate={hovered ? { rotate: [0, -12, 12, -6, 0] } : { rotate: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex items-center justify-center flex-shrink-0"
        style={{ width: 52, height: 52 }}
      >
        <FaWhatsapp size={26} color="#fff" />
      </motion.div>
    </motion.a>
  );
}
