import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";

const ACCENT = "#D6FF01";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

const SOCIALS = [
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
];

const CONTACTS = [
  {
    icon: FaWhatsapp,
    text: "+91-77770-24-365",
    href: "tel:7777024365",
  },
  {
    icon: HiOutlineMail,
    text: "admin@shadoweats.com",
    href: "mailto:admin@shadoweats.com",
  },
  {
    icon: HiOutlineLocationMarker,
    text: "#117, Lajpat Nagar, Near Burger Singh, Hisar, Haryana, 125001",
    href: null,
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 sm:px-10 pt-16 sm:pt-20 pb-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between gap-12 md:gap-8">
          {/* Left: brand */}
          <motion.div {...fadeUp(0)} className="max-w-md">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Shadow Eats
            </h2>
            <p className="mt-5 text-white/50 text-sm sm:text-base leading-relaxed">
              Shadow Eats is India's fastest-growing restaurant menu engineering
              and branding company, helping food businesses transform their
              identity with smart menus, powerful design, and end-to-end
              solutions. Join us and unlock a world where your menu sells more.
            </p>

            <div className="mt-8 flex items-center gap-3">
              {SOCIALS.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-[#D6FF01] text-black flex items-center justify-center
                      shadow-[0_4px_14px_rgba(214,255,1,0.25)] hover:shadow-[0_6px_20px_rgba(214,255,1,0.45)]
                      transition-shadow duration-300"
                  >
                    <Icon size={16} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right: get in touch */}
          <motion.div {...fadeUp(0.15)} className="md:min-w-[340px]">
            <h3 className="text-xl sm:text-2xl font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D6FF01] inline-block" />
              Get in touch
            </h3>

            <div className="mt-6 flex flex-col gap-5">
              {CONTACTS.map((c, i) => {
                const Icon = c.icon;
                const content = (
                  <>
                    <span className="w-9 h-9 shrink-0 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#D6FF01] group-hover:bg-[#D6FF01]/10 transition-all duration-300">
                      <Icon
                        size={16}
                        className="text-white group-hover:text-[#D6FF01] transition-colors duration-300"
                      />
                    </span>
                    <span className="text-gray-400 group-hover:text-white transition-all cursor-pointer duration-300 text-sm sm:text-base leading-snug">
                      {c.text}
                    </span>
                  </>
                );

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.45, delay: 0.2 + i * 0.08 }}
                  >
                    {c.href ? (
                      <a
                        href={c.href}
                        className="flex items-start gap-3 group hover:text-white transition-colors duration-200"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-start gap-3 group">{content}</div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mt-14 sm:mt-16 h-px w-full bg-gradient-to-r from-transparent via-[#D6FF01]/30 to-transparent origin-left"
        />

        {/* bottom row */}
        <motion.div
          {...fadeUp(0.1)}
          className="mt-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <p className="text-white/40 text-xs sm:text-sm">
            Copyright: © 2026 Shadow Eats India
          </p>

          <p className="text-white/60 text-sm sm:text-base flex items-center gap-1.5">
            Crafted With
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-red-500"
            >
              ❤
            </motion.span>
            In Hisar, India
          </p>

          <Link
            to="/privacy-policy"
            className="text-white/50 hover:text-white text-xs sm:text-sm underline underline-offset-4 transition-colors duration-200"
          >
            Privacy Policy
          </Link>
        </motion.div>
      </div>
    </footer>
  );
}