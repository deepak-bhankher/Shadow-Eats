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
      <div className="absolute inset-0 " />

      <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center gap-4">
        <motion.p
          {...fadeUp(0)}
          className="text-white/60 text-sm sm:text-base tracking-wide"
        >
          Smart Solutions. Stunning Design. Stronger Sales.
        </motion.p>

        <motion.h1
          {...fadeUp(0.1)}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight"
        >
          Build Menu That Drives Revenue
        </motion.h1>
      </div>
    </section>
  );
}