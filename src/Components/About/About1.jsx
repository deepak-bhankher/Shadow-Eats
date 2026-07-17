import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

export default function About1() {
  return (
    <section className="relative bg-black text-white min-h-screen w-full flex items-center justify-center px-6 overflow-hidden">
      {/* background image */}
      <img
        src="About_bg.png"
        alt="about"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      {/* dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />

      <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
        <motion.span
          {...fadeUp(0)}
          className="text-white text-xs sm:text-sm font-medium tracking-[0.25em] uppercase px-4 py-1.5 rounded-full border border-[#434343]"
          style={{
            background:
              "linear-gradient(135deg, rgba(67,67,67,0.35) 0%, rgba(0,0,0,0.2) 100%)",
            backdropFilter: "blur(6px)",
          }}
        >
          Smart Solutions · Stunning Design · Stronger Sales
        </motion.span>

        <motion.h1
          {...fadeUp(0.1)}
          className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] tracking-tight"
        >
          Build Menus That
          <br />
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: "1.15em",
              backgroundImage:
                "linear-gradient(90deg, #ffffff 0%, #a6a6a6 50%, #434343 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Drive Revenue
          </span>
        </motion.h1>

        <motion.div
          {...fadeUp(0.25)}
          className="w-16 h-px mt-2"
          style={{
            background:
              "linear-gradient(90deg, transparent, #434343, #ffffff, #434343, transparent)",
          }}
        />
      </div>
    </section>
  );
}