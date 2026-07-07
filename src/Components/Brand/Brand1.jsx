import { motion } from "framer-motion";
import { GiForkKnifeSpoon } from "react-icons/gi";

export default function Brand1() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-6 overflow-hidden">
      {/* background image */}
      <img
        src="brand.png"
        alt="image"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/55" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center gap-8 sm:gap-10 mt-16 sm:mt-24">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-white/70 text-xs sm:text-sm font-medium tracking-[0.25em] uppercase px-4 py-1.5 rounded-full border border-white/15"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)",
            backdropFilter: "blur(6px)",
          }}
        >
          Franchise Partnership
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="leading-[1.18] text-[28px] xs:text-[32px] sm:text-[42px] md:text-[50px] lg:text-[56px] tracking-tight"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, color: "rgba(255,255,255,0.95)" }}
        >
          Level up your sales with{" "}
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: "1.15em",
              background:
                "linear-gradient(120deg, #f3d98b 0%, #e8b95f 45%, #f3d98b 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Shadow Eats
          </span>{" "}
          Virtual Restaurants by becoming a{" "}
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: "1.15em",
              background:
                "linear-gradient(120deg, #f3d98b 0%, #e8b95f 45%, #f3d98b 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Franchise Partner
          </span>{" "}
          today!
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="w-16 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(232,185,95,0.7), transparent)",
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-white/60 text-sm sm:text-base md:text-lg"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 300, letterSpacing: "0.08em" }}
        >
          India's fastest growing internet restaurant company.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.55, type: "spring", stiffness: 180 }}
          className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center border border-white/30"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.04) 100%)",
            backdropFilter: "blur(10px)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.3), 0 8px 24px rgba(0,0,0,0.4)",
          }}
        >
          <GiForkKnifeSpoon size={26} className="text-white" />
        </motion.div>
      </div>
    </section>
  );
}