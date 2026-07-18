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

// New color combo
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
      <AnimatePresence>
        {active && (
          <motion.span
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.88 }}
            transition={{ duration: 0.15 }}
            className="absolute inset-0 rounded-lg"
            style={{
              background: ACCENT_GRADIENT,
              border: `1px solid ${ACCENT}`,
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.25), 0 4px 12px rgba(0,0,0,0.25)",
            }}
          />
        )}
      </AnimatePresence>
      <motion.span
        animate={{ color: "#ffffff" }}
        transition={{ duration: 0.2 }}
        className="relative text-[13px] lg:text-sm font-medium tracking-wide whitespace-nowrap"
      >
        {label}
      </motion.span>
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
      className="relative px-5 py-2 flex gap-2 items-center rounded-lg text-sm font-semibold cursor-pointer transition-all duration-300 overflow-hidden"
      style={{
        background: hovered ? ACCENT_DARK : ACCENT_GRADIENT,
        color: hovered ? ACCENT_LIGHT : "#ffffff",
        border: `1px solid ${ACCENT}`,
        boxShadow: hovered
          ? "inset 0 1px 0 rgba(96,125,139,0.25)"
          : "0 6px 20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.25)",
        transition:
          "background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <span className="relative z-10 flex items-center gap-2">
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
            background: scrolled
              ? "linear-gradient(180deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.05) 100%), rgba(10,10,10,0.5)"
              : "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 100%), rgba(10,10,10,0.28)",
            border: "1px solid rgba(255,255,255,0.18)",
            boxShadow: scrolled
              ? "0 12px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(255,255,255,0.04)"
              : "0 6px 24px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.15)",
          }}
        >
          {/* top sheen highlight */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-2xl"
            style={{
              background:
                "radial-gradient(60% 100% at 50% 0%, rgba(255,255,255,0.12) 0%, transparent 70%)",
            }}
          />

          {/* subtle shine sweep — quick, faint, infrequent */}
          <motion.div
            className="pointer-events-none absolute inset-y-0 w-1/4"
            style={{
              background:
                "linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.14) 45%, transparent 90%)",
            }}
            initial={{ left: "-30%" }}
            animate={{ left: "130%" }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              repeatDelay: 6,
              ease: "easeInOut",
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
                  src="shadowLogo.png"
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
              className="md:hidden cursor-pointer p-2 rounded-xl text-white transition-all duration-300"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)",
                border: "1px solid rgba(255,255,255,0.16)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2)",
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
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 100%), rgba(8,8,8,0.82)",
                border: "1px solid rgba(255,255,255,0.16)",
                boxShadow:
                  "0 24px 60px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.16)",
              }}
            >
              {/* top sheen highlight */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-1/3"
                style={{
                  background:
                    "radial-gradient(70% 100% at 50% 0%, rgba(255,255,255,0.12) 0%, transparent 70%)",
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
                      <div className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-white/60 hover:text-white hover:bg-white/8 hover:border hover:border-[#434343]/60 transition-all duration-200">
                        <span className="w-1 h-1 rounded-full bg-white/30 shrink-0" />
                        {link.name}
                      </div>
                    </Link>
                  </motion.li>
                ))}

                <motion.li
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.22 }}
                  className="list-none mt-1 pt-3 border-t border-white/10"
                >
                  <a href={PHONE_HREF} onClick={() => setOpen(false)}>
                    <button
                      className="w-full flex justify-center items-center gap-2 py-3 px-6 rounded-xl cursor-pointer text-sm font-semibold text-white transition-all duration-300"
                      style={{
                        background: ACCENT_GRADIENT,
                        border: `1px solid ${ACCENT}`,
                        boxShadow:
                          "0 6px 18px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.25)",
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