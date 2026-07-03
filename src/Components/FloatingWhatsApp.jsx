import { motion } from "framer-motion";
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
      className="fixed bottom-6 right-6 z-[999] flex items-center cursor-pointer"
      style={{
        borderRadius: 50,
        background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
        boxShadow: hovered
          ? "0 16px 40px rgba(37,211,102,0.55), 0 2px 8px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.22)"
          : "0 8px 28px rgba(37,211,102,0.38), inset 0 1px 0 rgba(255,255,255,0.18)",
        transition: "box-shadow 0.3s ease",
        padding: hovered ? "12px 22px 12px 16px" : "14px",
        minWidth: hovered ? 160 : 52,
        height: 52,
        overflow: "hidden",
        transitionProperty: "padding, min-width",
        transitionDuration: "0.35s",
        transitionTimingFunction: "cubic-bezier(0.34,1.56,0.64,1)",
      }}
    >
      {/* dual pulsing rings */}
      <motion.span
        className="absolute inset-0"
        style={{ borderRadius: 50, border: "2px solid rgba(37,211,102,0.6)" }}
        animate={{ scale: [1, 1.55], opacity: [0.6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />
      <motion.span
        className="absolute inset-0"
        style={{ borderRadius: 50, border: "2px solid rgba(37,211,102,0.4)" }}
        animate={{ scale: [1, 1.9], opacity: [0.4, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
      />

      {/* icon with subtle bounce on hover */}
      <motion.div
        animate={hovered ? { rotate: [0, -12, 12, -6, 0] } : { rotate: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex-shrink-0"
      >
        <FaWhatsapp size={26} className="text-white drop-shadow" />
      </motion.div>

      {/* expanding text */}
      <motion.span
        initial={false}
        animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -8 }}
        transition={{ duration: 0.25, delay: hovered ? 0.1 : 0 }}
        className="relative z-10 ml-2.5 text-white font-semibold text-sm whitespace-nowrap tracking-wide"
        style={{ textShadow: "0 1px 4px rgba(0,0,0,0.18)" }}
      >
        Need Help?
      </motion.span>
    </motion.a>
  );
}