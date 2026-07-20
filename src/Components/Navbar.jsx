import { useState, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import { CiMenuFries } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Service", path: "/about" },
  { name: "Our Brands", path: "/brands" },
  { name: "Clients", path: "/clients" },
  { name: "Prices", path: "/price" },
  { name: "Contact", path: "/contact" },
];

const PHONE_NUMBER = "+91 95548 24365";
const PHONE_HREF = "tel:+919554824365";

// Pure black / grey combo — no white mixed into backgrounds
const ACCENT = "#434343";
const ACCENT_DARK = "#000000";
const ACCENT_LIGHT = "#b5b5b5";
const ACCENT_GRADIENT = `linear-gradient(180deg, ${ACCENT_DARK} 0%, ${ACCENT} 100%)`;

function NavItem({ label, path }) {
  const { pathname } = useLocation();
  const isActive = pathname === path;
  const [hovered, setHovered] = useState(false);
  const active = hovered || isActive;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative px-2 lg:px-4 py-2 cursor-pointer"
    >
      <motion.span
        animate={{ color: active ? "#ffffff" : "#9a9a9a" }}
        transition={{ duration: 0.2 }}
        className="relative text-[13px] lg:text-sm font-medium tracking-wide whitespace-nowrap"
      >
        {label}
      </motion.span>

      <motion.span
        initial={false}
        animate={{ scaleX: active ? 1 : 0, opacity: active ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute left-1/2 bottom-1 -translate-x-1/2 h-[1.5px] w-[60%] origin-center"
        style={{ background: "#ffffff" }}
      />
    </div>
  );
}

function CtaButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.a
      href={PHONE_HREF}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.04, y: -1 }}
      whileTap={{ scale: 0.97 }}
      className="relative px-5 py-2 flex gap-2 items-center rounded-lg cursor-pointer transition-all duration-300 overflow-hidden"
      style={{
        background: "#000000",
        color: "#ffffff",
        border: `1px solid ${ACCENT}`,
        boxShadow: hovered
          ? "inset 0 1px 0 rgba(60,60,60,0.35)"
          : "0 6px 20px rgba(0,0,0,0.7), inset 0 1px 0 rgba(60,60,60,0.35)",
        transition:
          "background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <span
        className="relative z-10 flex items-center gap-2"
        style={{
          fontFamily:
            "'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif",
          fontSize: "14px",
          fontWeight: 600,
          letterSpacing: "0.03em",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        <motion.span
          animate={
            hovered ? { rotate: [0, -15, 15, -10, 10, 0] } : { rotate: 0 }
          }
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex items-center justify-center"
        >
          <FaPhoneAlt size={13} />
        </motion.span>
        {PHONE_NUMBER}
      </span>
    </motion.a>
  );
}
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-10 pt-4"
      >
        <div
          className={`relative max-w-5xl mx-auto rounded-2xl px-5 overflow-hidden transition-all duration-500 ${
            scrolled
              ? "backdrop-blur-2xl backdrop-saturate-150"
              : "backdrop-blur-lg backdrop-saturate-125"
          }`}
          style={{
            background: scrolled ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0.55)",
            border: "1px solid rgba(67,67,67,0.5)",
            boxShadow: scrolled
              ? "0 12px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(60,60,60,0.3), inset 0 -1px 0 rgba(0,0,0,0.4)"
              : "0 6px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(60,60,60,0.25)",
          }}
        >
          {/* top sheen highlight — dark, no white glow */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-2xl"
            style={{
              background:
                "radial-gradient(60% 100% at 50% 0%, rgba(67,67,67,0.25) 0%, transparent 70%)",
            }}
          />

          <div className="relative flex items-center justify-between h-[62px]">
            {/* Logo */}
            <Link to="/">
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="flex items-center gap-2 cursor-pointer"
              >
                <img
                  src="/shadowLogo.png"
                  alt="Shadow Eats"
                  className="h-8 sm:h-9 md:h-10 w-auto object-contain"
                />
              </motion.div>
            </Link>

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-0.5 list-none m-0 p-0">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.35 }}
                  className="list-none"
                >
                  <Link to={link.path}>
                    <NavItem label={link.name} path={link.path} />
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="hidden md:block"
            >
              <CtaButton />
            </motion.div>

            {/* Hamburger */}
            <motion.button
              whileTap={{ scale: 0.87 }}
              onClick={() => setOpen(!open)}
              className="md:hidden cursor-pointer p-2 rounded-xl text-[#e8e8e8] transition-all duration-300"
              style={{
                background: "rgba(0,0,0,0.6)",
                border: "1px solid rgba(67,67,67,0.5)",
                boxShadow: "inset 0 1px 0 rgba(60,60,60,0.3)",
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? "x" : "m"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="block"
                >
                  {open ? <RxCross1 size={19} /> : <CiMenuFries size={21} />}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-[82px] left-4 right-4 z-40 md:hidden"
          >
            <div
              className="relative rounded-2xl overflow-hidden backdrop-blur-2xl backdrop-saturate-150"
              style={{
                background: "rgba(0,0,0,0.9)",
                border: "1px solid rgba(67,67,67,0.5)",
                boxShadow:
                  "0 24px 60px rgba(0,0,0,0.65), inset 0 1px 0 rgba(60,60,60,0.25)",
              }}
            >
              {/* top sheen highlight — dark */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-1/3"
                style={{
                  background:
                    "radial-gradient(70% 100% at 50% 0%, rgba(67,67,67,0.25) 0%, transparent 70%)",
                }}
              />

              <ul className="relative flex flex-col list-none px-3 py-3 gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.22 }}
                    className="list-none"
                  >
                    <Link to={link.path} onClick={() => setOpen(false)}>
                      <div className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-[#9a9a9a] hover:text-[#e8e8e8] hover:bg-[#1a1a1a] hover:border hover:border-[#434343]/60 transition-all duration-200">
                        <span className="w-1 h-1 rounded-full bg-[#5a5a5a] shrink-0" />
                        {link.name}
                      </div>
                    </Link>
                  </motion.li>
                ))}

                <motion.li
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.22 }}
                  className="list-none mt-1 pt-3 border-t border-[#434343]/30"
                >
                  <a href={PHONE_HREF} onClick={() => setOpen(false)}>
                    <button
                      className="w-full flex justify-center items-center gap-2 py-3 px-6 rounded-xl cursor-pointer text-[#ffffff] transition-all duration-300"
                      style={{
                        background: "#000000",
                        border: `1px solid ${ACCENT}`,
                        boxShadow:
                          "0 6px 18px rgba(0,0,0,0.6), inset 0 1px 0 rgba(60,60,60,0.3)",
                        fontFamily:
                          "'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif",
                        fontSize: "14px",
                        fontWeight: 600,
                        letterSpacing: "0.03em",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      <FaPhoneAlt size={13} />
                      {PHONE_NUMBER}
                    </button>
                  </a>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}