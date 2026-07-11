import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const ACCENT = "#D6ff01";

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
  { left: "1.8%", top: "3.1%" },
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
    swiggy: { accent: "#D6ff01", accent2: "rgba(214,255,1,0.35)" },
    zomato: { accent: "#D6ff01", accent2: "rgba(214,255,1,0.35)" },
    mcdonalds: { accent: "#D6ff01", accent2: "rgba(214,255,1,0.35)" },
    subway: { accent: "#D6ff01", accent2: "rgba(214,255,1,0.35)" },
    kfc: { accent: "#D6ff01", accent2: "rgba(214,255,1,0.35)" },
    dominos: { accent: "#D6ff01", accent2: "rgba(214,255,1,0.35)" },
    startbucks: { accent: "#D6ff01", accent2: "rgba(214,255,1,0.35)" },
    burgerking: { accent: "#D6ff01", accent2: "rgba(214,255,1,0.35)" },
    pizzahut: { accent: "#D6ff01", accent2: "rgba(214,255,1,0.35)" },
    dunkin: { accent: "#D6ff01", accent2: "rgba(214,255,1,0.35)" },
  };
  const toneStyles = toneMap[tone] ?? {
    accent: "#D6ff01",
    accent2: "rgba(214,255,1,0.30)",
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
            "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.90) 55%, rgba(255,255,255,0.85) 100%)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(214,255,1,0.4)",
          boxShadow:
            depth > 0
              ? `0 18px 40px rgba(0,0,0,0.35), 0 0 24px ${toneStyles.accent2}`
              : `0 12px 26px rgba(0,0,0,0.25), 0 0 16px ${toneStyles.accent2}`,
        }}
      />

      <div
        className="absolute inset-x-0 top-0 h-1/2 rounded-t-2xl"
        style={{
          background:
            "radial-gradient(60% 90% at 50% -10%, rgba(214,255,1,0.35) 0%, rgba(255,255,255,0.4) 40%, transparent 70%)",
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        }}
      />

      <div className="relative z-10 w-1/2 h-1/2 flex items-center justify-center">
        {icon}
      </div>
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
        text-sm sm:text-base font-semibold text-black cursor-pointer whitespace-nowrap
        overflow-hidden border border-[#D6ff01]/40
        shadow-[0_10px_26px_rgba(214,255,1,0.25)]
        hover:shadow-[0_14px_32px_rgba(214,255,1,0.4)]
        transition-shadow duration-300"
      style={{
        background:
          hovered && hoverBackground
            ? hoverBackground
            : (background ??
              "linear-gradient(180deg, #D6ff01 0%, #b8dd00 100%)"),
      }}
    >
      <span
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(60% 70% at 50% -10%, rgba(255,255,255,${glowOpacity}) 0%, rgba(255,255,255,${glowOpacity * 0.33}) 45%, transparent 75%)`,
        }}
      />
      <span
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(25% 80% at 6% 50%, rgba(255,255,255,0.15), transparent 70%), radial-gradient(25% 80% at 94% 50%, rgba(255,255,255,0.15), transparent 70%)",
        }}
      />
      <span className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.6)]" />
      <span
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 rounded-b-full"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.18), transparent)",
        }}
      />

      <span className="relative z-10 flex items-center gap-2 sm:gap-2.5">
        {children}
        {withArrow && <AnimatedArrow hovered={hovered} size={16} />}
      </span>
    </motion.button>
  );
}

export default function Home1() {
  const iconSize = useResponsiveIconSize();

  return (
    <section
      data-theme="dark"
      className="relative w-full min-h-screen flex flex-col justify-center pt-24 sm:pt-28 pb-16 sm:pb-24 overflow-hidden"
    >
      {/* background image */}
      <img
        src="bg1.png"
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: "brightness(45%) contrast(120%) saturate(110%)",
          transform: "scale(1.05)",
        }}
      />

      {/* black overlay on top of image — lowered opacity so image peeks through */}
      <div
        className="absolute inset-0"
        style={{
          background: `
      linear-gradient(
        135deg,
        rgba(0,0,0,0.65) 0%,
        rgba(0,0,0,0.45) 45%,
        rgba(0,0,0,0.75) 100%
      )
    `,
        }}
      />

      {/* subtle lime ambient glow behind hero content */}
      <div
  className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
  style={{
    background:
      "radial-gradient(closest-side, rgba(214,255,1,0), transparent 70%)",
  }}
/>

      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-[380px] sm:top-[240px] md:top-[260px] w-full max-w-[95vw] sm:max-w-[110vw] md:w-[1100px] md:max-w-[150vw] h-[220px] sm:h-[630px] md:h-[660px] overflow-hidden pointer-events-none">
        <div className="absolute top-[16px] sm:top-[-120px] md:top-[-150px] left-0 w-full h-[190px] sm:h-[650px] md:h-[650px]">
          <svg
            className="absolute inset-0 w-full h-full opacity-70"
            viewBox="0 0 1100 650"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M20 20 C 20 500, 280 620, 550 620 C 820 620, 1080 500, 1080 20"
              stroke="#D6ff0155"
              strokeWidth="2"
            />
          </svg>
          {(() => {
            const icons = [
              {
                tone: "swiggy",
                icon: (
                  <img
                    src="Swiggy.png"
                    alt="Swiggy"
                    className="w-full h-full object-contain"
                    draggable={false}
                  />
                ),
              },
              {
                tone: "zomato",
                icon: (
                  <img
                    src="zomato.png"
                    alt="Zomato"
                    className="w-full h-full object-contain"
                    draggable={false}
                  />
                ),
              },
              {
                tone: "mcdonalds",
                icon: (
                  <img
                    src="mcd2.png"
                    alt="McDonald's"
                    className="w-full h-full object-contain"
                    draggable={false}
                  />
                ),
              },
              {
                tone: "subway",
                icon: (
                  <img
                    src="Subway.png"
                    alt="subway's"
                    className="w-full h-full object-contain"
                    draggable={false}
                  />
                ),
              },
              {
                tone: "kfc",
                icon: (
                  <img
                    src="kfc.png"
                    alt="KFC"
                    className="w-full h-full object-contain"
                    draggable={false}
                  />
                ),
              },
              {
                tone: "dominos",
                icon: (
                  <img
                    src="dominos.png"
                    alt="Domino's"
                    className="w-full h-full object-contain"
                    draggable={false}
                  />
                ),
              },
              {
                tone: "startbucks",
                icon: (
                  <img
                    src="starbucks.png"
                    alt="starbucks's"
                    className="w-full h-full object-contain"
                    draggable={false}
                  />
                ),
              },
              {
                tone: "burgerking",
                icon: (
                  <img
                    src="burger.png"
                    alt="Burger King"
                    className="w-full h-full object-contain"
                    draggable={false}
                  />
                ),
              },
              {
                tone: "pizzahut",
                icon: (
                  <img
                    src="pizza-hut.png"
                    alt="Pizza Hut"
                    className="w-full h-full object-contain"
                    draggable={false}
                  />
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
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className=" text-white text-xs sm:text-sm font-medium tracking-[0.25em] uppercase px-4 py-1.5 rounded-full border border-[#D6ff01]/30"
          >
            Restaurant Growth Partner Since 2021
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            className="mt-5 sm:mt-7 font-semibold text-white text-center
              text-[26px] leading-[1.15] xs:text-[30px] sm:text-[48px] md:text-[62px] lg:text-[68px]"
          >
            India&rsquo;s #1 Restaurant Menu
            <br className="hidden sm:block" />{" "}
            <span className="inline-flex flex-wrap items-center justify-center gap-x-2 align-middle">
              <span
                className="italic font-light"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  background:
                    "linear-gradient(180deg, #eaff66 0%, #D6ff01 55%, #a8cc00 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  
                }}
              >
                Engineering
              </span>
              <span
                className="font-light italic"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  background:
                    "linear-gradient(180deg, #eaff66 0%, #D6ff01 55%, #a8cc00 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                
                }}
              >
                Company
              </span>
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="mt-5 sm:mt-6 w-16 h-px"
            style={{
              background: "#D6ff01",
              boxShadow: "0 0 12px rgba(214,255,1,0.6)",
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-5 sm:mt-6 px-3 py-1 text-[13px] sm:text-[15px] md:text-base text-white/80 font-medium"
          >
            From brand naming to engineered menus and stunning dine-in & Logo
            designs—your complete Menu Solution.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
