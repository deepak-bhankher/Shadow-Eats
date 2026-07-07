import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { GiHamburger } from "react-icons/gi";

function useResponsiveIconSize() {
  const [iconSize, setIconSize] = useState(44);

  useEffect(() => {
    function updateSize() {
      const w = window.innerWidth;
      if (w < 480) setIconSize(32);
      else if (w < 768) setIconSize(38);
      else setIconSize(44);
    }
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return iconSize;
}

const CURVE_POINTS = [
  { left: "1.8%", top: "3.1%" },
  { left: "2.3%", top: "20.4%" },
  { left: "3.7%", top: "35.6%" },
  { left: "5.9%", top: "48.7%" },
  { left: "8.9%", top: "59.8%" },
  { left: "12.5%", top: "69.2%" },
  { left: "16.7%", top: "76.9%" },
  { left: "21.4%", top: "83.1%" },
  { left: "26.6%", top: "87.9%" },
  { left: "32.1%", top: "91.3%" },
  { left: "37.9%", top: "93.7%" },
  { left: "43.9%", top: "95.0%" },
  { left: "50.0%", top: "95.4%" },
  { left: "56.1%", top: "95.0%" },
  { left: "62.1%", top: "93.7%" },
  { left: "67.9%", top: "91.3%" },
  { left: "73.4%", top: "87.9%" },
  { left: "78.6%", top: "83.1%" },
  { left: "83.3%", top: "76.9%" },
  { left: "87.5%", top: "69.2%" },
  { left: "91.1%", top: "59.8%" },
  { left: "94.1%", top: "48.7%" },
  { left: "96.3%", top: "35.6%" },
  { left: "97.7%", top: "20.4%" },
  { left: "98.2%", top: "3.1%" },
  { left: "1.8%", top: "3.1%" }, // loop back to the exact start point
];

function GlassIconCard({
  icon,
  tone = "default",
  style,
  className = "",
  size = 44,
  depth = 0,
  opacity = 1,
  rotate = 0,
}) {
  const toneMap = {
    swiggy: { accent: "#E5E5E5", accent2: "rgba(255,255,255,0.35)" },
    zomato: { accent: "#E5E5E5", accent2: "rgba(255,255,255,0.35)" },
    mcdonalds: { accent: "#E5E5E5", accent2: "rgba(255,255,255,0.35)" },
    kfc: { accent: "#E5E5E5", accent2: "rgba(255,255,255,0.35)" },
    dominos: { accent: "#E5E5E5", accent2: "rgba(255,255,255,0.35)" },
    burgerking: { accent: "#E5E5E5", accent2: "rgba(255,255,255,0.35)" },
    pizzahut: { accent: "#E5E5E5", accent2: "rgba(255,255,255,0.35)" },
    dunkin: { accent: "#E5E5E5", accent2: "rgba(255,255,255,0.35)" },
  };
  const toneStyles = toneMap[tone] ?? {
    accent: "#FFFFFF",
    accent2: "rgba(255,255,255,0.30)",
  };

  return (
    <motion.div
      className={`absolute select-none pointer-events-none flex items-center justify-center rounded-2xl ${className}`}
      style={{
        width: size,
        height: size,
        opacity,
        transform: `translate(-50%, -50%) translateZ(0) rotate(${rotate}deg)`,
        filter: depth > 0 ? "saturate(1.05)" : "saturate(0.95)",
        ...style,
      }}
      initial={false}
      animate={false}
    >
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.08) 55%, rgba(255,255,255,0.03) 100%)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.22)",
          boxShadow:
            depth > 0
              ? `0 18px 40px rgba(0,0,0,0.55), 0 0 28px ${toneStyles.accent2}`
              : `0 12px 26px rgba(0,0,0,0.42), 0 0 18px ${toneStyles.accent2}`,
        }}
      />

      {/* top rim + glow */}
      <div
        className="absolute inset-x-0 top-0 h-1/2 rounded-t-2xl"
        style={{
          background: `radial-gradient(60% 90% at 50% -10%, ${toneStyles.accent2} 0%, rgba(255,255,255,0.15) 40%, transparent 70%)`,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        }}
      />

      {/* glass sheen */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.10) 45%, transparent 70%)",
          mixBlendMode: "screen",
        }}
      />

      {/* icon */}
      <div className="relative z-10">{icon}</div>

      {/* subtle bottom dark fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 rounded-b-2xl"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.42), transparent)",
        }}
      />
    </motion.div>
  );
}

function AnimatedArrow({ hovered, size = 16 }) {
  return (
    <div
      className="relative overflow-hidden"
      style={{ width: size + 1, height: size + 1 }}
    >
      <motion.span
        className="absolute inset-0 flex items-center justify-center"
        animate={
          hovered
            ? { x: size + 1, y: -(size + 1), opacity: 0 }
            : { x: 0, y: 0, opacity: 1 }
        }
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <MdArrowOutward size={size} />
      </motion.span>
      <motion.span
        className="absolute inset-0 flex items-center justify-center"
        animate={
          hovered
            ? { x: 0, y: 0, opacity: 1 }
            : { x: -(size + 1), y: size + 1, opacity: 0 }
        }
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <MdArrowOutward size={size} />
      </motion.span>
    </div>
  );
}

function GlassButtonBase({
  children,
  withArrow,
  background,
  hoverBackground,
  glowOpacity = 0.55,
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.04, y: -3 }}
      whileTap={{ scale: 0.97, y: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="relative px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 flex gap-2 sm:gap-2.5 justify-center items-center rounded-full
        text-sm sm:text-base font-semibold text-white cursor-pointer whitespace-nowrap
        overflow-hidden border border-white/10
        shadow-[0_10px_26px_rgba(0,0,0,0.6)]
        hover:shadow-[0_14px_32px_rgba(0,0,0,0.65)]
        transition-shadow duration-300"
      style={{
        background: hovered && hoverBackground ? hoverBackground : background,
      }}
    >
      {/* Strong top-down vertical glow, centered, falling off sharply */}
      <span
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(60% 70% at 50% -10%, rgba(255,255,255,${glowOpacity}) 0%, rgba(255,255,255,${glowOpacity * 0.33}) 45%, transparent 75%)`,
        }}
      />
      {/* Faint dimmer glows at the left and right edges */}
      <span
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(25% 80% at 6% 50%, rgba(255,255,255,0.12), transparent 70%), radial-gradient(25% 80% at 94% 50%, rgba(255,255,255,0.12), transparent 70%)",
        }}
      />
      {/* Bright rim tracing the rounded top arc specifically */}
      <span className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.5)]" />
      {/* Very dark base toward the bottom for contrast against the glow */}
      <span
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 rounded-b-full"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.45), transparent)",
        }}
      />

      <span className="relative z-10 flex items-center gap-2 sm:gap-2.5">
        {children}
        {withArrow && <AnimatedArrow hovered={hovered} size={16} />}
      </span>
    </motion.button>
  );
}

// ---- Primary: light glass, bright top glow (monochrome) ----
function PrimaryGlassCta({ children, withArrow = false }) {
  return (
    <GlassButtonBase
      withArrow={withArrow}
      background="linear-gradient(135deg, #4a4a4a 0%, #0a0a0a 100%)"
      hoverBackground="linear-gradient(135deg, #1a1a1a 0%, #303030 60%, #000000 100%)"
      glowOpacity={0.75}
    >
      {children}
    </GlassButtonBase>
  );
}

// ---- Secondary: darker glass, dimmer top glow (monochrome) ----
function SecondaryGlassCta({ children, withArrow = false }) {
  return (
    <GlassButtonBase
      withArrow={withArrow}
      background="rgba(255,255,255,0.08)"
      glowOpacity={0.3}
    >
      {children}
    </GlassButtonBase>
  );
}

export default function Home1() {
  const iconSize = useResponsiveIconSize();

  return (
    <section
      data-theme="dark"
      className="relative w-full min-h-screen flex flex-col justify-center pt-24 sm:pt-28 pb-16 sm:pb-24 overflow-hidden"
    >
      <img
        src="/bg1.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* dark overlay for text readability over the image */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.65) 100%)",
        }}
      />

      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-[380px] sm:top-[240px] md:top-[260px] w-full max-w-[95vw] sm:max-w-[110vw] md:w-[1100px] md:max-w-[150vw] h-[220px] sm:h-[630px] md:h-[660px] overflow-hidden pointer-events-none">
        <div className="absolute top-[16px] sm:top-[-120px] md:top-[-150px] left-0 w-full h-[190px] sm:h-[650px] md:h-[650px]">
          <svg
            className="absolute inset-0 w-full h-full opacity-60"
            viewBox="0 0 1100 650"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M20 20 C 20 500, 280 620, 550 620 C 820 620, 1080 500, 1080 20"
              stroke="#FFFFFF55"
              strokeWidth="1"
            />
          </svg>
          {(() => {
            const icons = [
              {
                tone: "swiggy",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 64 64" fill="none">
                    <ellipse cx="32" cy="38" rx="18" ry="20" fill="#FC8019" />
                    <ellipse cx="32" cy="36" rx="11" ry="12" fill="#fff" />
                    <path
                      d="M26 32 Q32 26 38 32 Q32 38 26 32Z"
                      fill="#FC8019"
                    />
                    <circle cx="44" cy="18" r="7" fill="#FC8019" />
                    <circle cx="44" cy="18" r="4" fill="#fff" />
                  </svg>
                ),
              },
              {
                tone: "zomato",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 64 64" fill="none">
                    <rect
                      x="8"
                      y="20"
                      width="48"
                      height="10"
                      rx="5"
                      fill="#E23744"
                    />
                    <rect
                      x="8"
                      y="34"
                      width="48"
                      height="10"
                      rx="5"
                      fill="#E23744"
                    />
                    <text
                      x="32"
                      y="58"
                      textAnchor="middle"
                      fontSize="11"
                      fontWeight="bold"
                      fill="#E23744"
                      fontFamily="Arial"
                    >
                      zomato
                    </text>
                  </svg>
                ),
              },
              {
                tone: "mcdonalds",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 64 64" fill="none">
                    <path
                      d="M10 52 L10 20 Q10 8 20 8 Q28 8 28 20 L28 52"
                      stroke="#FFC72C"
                      strokeWidth="8"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <path
                      d="M54 52 L54 20 Q54 8 44 8 Q36 8 36 20 L36 52"
                      stroke="#FFC72C"
                      strokeWidth="8"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                ),
              },
              {
                tone: "kfc",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="32" r="26" fill="#F40027" />
                    <text
                      x="32"
                      y="38"
                      textAnchor="middle"
                      fontSize="18"
                      fontWeight="900"
                      fill="#fff"
                      fontFamily="Arial"
                    >
                      KFC
                    </text>
                  </svg>
                ),
              },
              {
                tone: "dominos",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 64 64" fill="none">
                    <rect
                      x="6"
                      y="12"
                      width="52"
                      height="40"
                      rx="8"
                      fill="#006491"
                    />
                    <rect
                      x="6"
                      y="12"
                      width="26"
                      height="40"
                      rx="8"
                      fill="#E31837"
                    />
                    <circle cx="19" cy="24" r="4" fill="#fff" />
                    <circle cx="19" cy="40" r="4" fill="#fff" />
                    <circle cx="45" cy="32" r="4" fill="#fff" />
                  </svg>
                ),
              },
              {
                tone: "burgerking",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 64 64" fill="none">
                    <rect
                      x="10"
                      y="14"
                      width="44"
                      height="8"
                      rx="4"
                      fill="#F5A623"
                    />
                    <rect
                      x="10"
                      y="28"
                      width="44"
                      height="8"
                      rx="4"
                      fill="#C8102E"
                    />
                    <rect
                      x="10"
                      y="42"
                      width="44"
                      height="8"
                      rx="4"
                      fill="#F5A623"
                    />
                    <ellipse cx="32" cy="14" rx="22" ry="6" fill="#C8A97A" />
                    <ellipse cx="32" cy="52" rx="22" ry="6" fill="#C8A97A" />
                  </svg>
                ),
              },
              {
                tone: "pizzahut",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 64 64" fill="none">
                    <path
                      d="M32 6 L58 28 Q58 32 32 32 Q6 32 6 28 Z"
                      fill="#EE3124"
                    />
                    <rect
                      x="14"
                      y="32"
                      width="36"
                      height="22"
                      rx="4"
                      fill="#EE3124"
                    />
                    <rect
                      x="20"
                      y="36"
                      width="24"
                      height="6"
                      rx="3"
                      fill="#fff"
                    />
                  </svg>
                ),
              },
              {
                tone: "dunkin",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 64 64" fill="none">
                    <circle
                      cx="32"
                      cy="30"
                      r="20"
                      fill="#FF671F"
                      stroke="#fff"
                      strokeWidth="3"
                    />
                    <circle cx="32" cy="30" r="9" fill="#fff" />
                    <rect
                      x="10"
                      y="44"
                      width="44"
                      height="10"
                      rx="5"
                      fill="#00A0D2"
                    />
                  </svg>
                ),
              },
            ];

            return icons.map((it, iconIdx) => {
              const duration = 10;
              const delay = iconIdx * 1.1;

              return (
                <motion.div
                  key={it.tone}
                  className="absolute left-0 top-0"
                  initial={{ opacity: 0 }}
                  animate={{
                    left: CURVE_POINTS.map((p) => p.left),
                    top: CURVE_POINTS.map((p) => p.top),
                    opacity: CURVE_POINTS.map((_, i) => {
                      const n = CURVE_POINTS.length;
                      const fadeZone = 5;
                      const distFromStart = i;
                      const distFromEnd = n - 1 - i;
                      if (distFromStart < fadeZone)
                        return Math.pow(distFromStart / fadeZone, 1.5);
                      if (distFromEnd < fadeZone)
                        return Math.pow(distFromEnd / fadeZone, 1.5);
                      return 1;
                    }),
                  }}
                  transition={{
                    duration,
                    repeat: Infinity,
                    ease: "linear",
                    delay,
                  }}
                  style={{
                    transform: "translate(-50%, -50%) translateZ(0)",
                    willChange: "transform, left, top, opacity",
                    zIndex: 30,
                  }}
                >
                  <GlassIconCard
                    icon={it.icon}
                    tone={it.tone}
                    size={iconSize}
                    depth={iconIdx % 2 === 0 ? 1 : 0}
                    opacity={1}
                    rotate={0}
                  />
                </motion.div>
              );
            });
          })()}
        </div>
      </div>

      <div className="relative z-10 md:px-10">
        <div className="md:max-w-5xl md:mx-auto px-6 text-center flex flex-col items-center">

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-5 sm:mt-7 font-semibold text-white text-center
              text-[26px] leading-[1.15] xs:text-[30px] sm:text-[48px] md:text-[62px] lg:text-[68px]"
          >
           India’s #1 Restaurant Menu
            <br className="hidden sm:block" />
            {" "}
            <span className="inline-flex flex-wrap items-center justify-center gap-x-2 align-middle">
              <span
                className="italic font-light text-white"
                style={{ fontFamily: "Instrument Serif, serif" }}
              >
                 Engineering Delicious
              </span>
              <motion.span
                initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 200 }}
                whileHover={{ rotate: 8, scale: 1.15 }}
                className="relative inline-flex items-center justify-center w-[32px] h-[32px] sm:w-[50px] sm:h-[50px] md:w-[62px] md:h-[62px]
                  rounded-2xl overflow-hidden border border-white/40
                  shadow-[0_0_28px_rgba(255,255,255,0.45),0_8px_24px_rgba(0,0,0,0.5)]"
                style={{
                  background: "linear-gradient(145deg, rgba(40,40,40,0.7) 0%, rgba(10,10,10,0.8) 100%)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <span className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 80%, rgba(255,255,255,0.45) 0%, transparent 65%)" }} />
                <span className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.06) 45%, transparent 70%)" }} />
                <span className="absolute inset-0 rounded-2xl shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.4)]" />
                <span className="absolute inset-x-0 bottom-0 h-2/5" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)" }} />
                <GiHamburger size={16} className="relative z-10 text-white sm:hidden" />
                <GiHamburger size={26} className="relative z-10 text-white hidden sm:block md:hidden" />
                <GiHamburger size={32} className="relative z-10 text-white hidden md:block" />
              </motion.span>
              <span
                className="font-light italic text-white"
                style={{ fontFamily: "Instrument Serif, serif" }}
              >
                 Company
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-5 sm:mt-7 px-3 py-1 text-[13px] sm:text-[15px] md:text-base text-white/80 font-medium"
          >
          From brand naming to engineered menus and stunning dine-in & Logo designs—your complete Menu Solution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-7 sm:mt-9 flex flex-wrap items-center justify-center gap-3 w-full"
          >
            <PrimaryGlassCta withArrow>
              <Link to="/contact">Explore Restaurants</Link>
            </PrimaryGlassCta>
            <SecondaryGlassCta>
              <Link to="/contact">View Menu</Link>
            </SecondaryGlassCta>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
