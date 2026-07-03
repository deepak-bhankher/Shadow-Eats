import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

// change these two values to your own number and default message
const PHONE_NUMBER = "+91 7777024365"; // country code + number, no + or spaces
const DEFAULT_MESSAGE = "Hello, is this Shadow Eats?";

export default function FloatingWhatsApp() {
  const href = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
    DEFAULT_MESSAGE
  )}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.5, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[999] w-14 h-14 sm:w-16 sm:h-16
        rounded-full flex items-center justify-center cursor-pointer"
      style={{
        background: "#25D366",
        boxShadow: "0 10px 30px rgba(37,211,102,0.45), inset 0 1px 0 rgba(255,255,255,0.25)",
      }}
    >
      {/* pulsing ring */}
      <motion.span
        className="absolute inset-0 rounded-full"
        style={{ background: "#25D366" }}
        animate={{ scale: [1, 1.6], opacity: [0.55, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />
      <FaWhatsapp size={28} className="relative z-10 text-white" />
    </motion.a>
  );
}