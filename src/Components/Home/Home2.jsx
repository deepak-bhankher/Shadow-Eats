import { motion } from "framer-motion";
import { FiPackage, FiMapPin, FiSmile } from "react-icons/fi";
import { GiHotMeal } from "react-icons/gi";

const STEPS = [
  {
    number: "01",
    icon: FiMapPin,
    title: "Menu Engineering",
    desc: "Explore hundreds of curated restaurants, filter by cuisine, rating, or delivery time — all tailored to your location.",
  },
  {
    number: "02",
    icon: GiHotMeal,
    title: "Restaurant Name Creator",
    desc: "Choose from rich menus with real photos, detailed descriptions, and live availability. Customize your order exactly how you like it.",
  },
  {
    number: "03",
    icon: FiPackage,
    title: "Logo & Colour Palette",
    desc: "Your restaurant partner prepares the order fresh and packs it in eco-friendly, tamper-proof packaging built to keep every bite perfect.",
  },
  {
    number: "04",
    icon: FiSmile,
    title: "Menu Graphics",
    desc: "Track your rider live on the map. Average delivery in 28 minutes — hot, fresh, and exactly as ordered.",
  },
];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.55, delay, ease: "easeOut" },
  };
}

function StepCard({ step, index }) {
  const Icon = step.icon;
  return (
    <motion.div
      {...fadeUp(index * 0.1)}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="relative flex flex-col h-full gap-5 p-6 sm:p-7 rounded-2xl border border-white/10
        bg-white/[0.04] hover:bg-white/[0.07] hover:border-white/25
        transition-all duration-300"
    >
      {/* top row: icon + number */}
      <div className="flex items-center justify-between">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/15"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 100%)",
          }}
        >
          <Icon size={20} className="text-white" />
        </div>
        <span className="text-white/25 text-xs font-semibold tracking-widest">
          {step.number}
        </span>
      </div>

      <h3 className="text-white font-semibold text-lg sm:text-xl leading-snug">
        {step.title}
      </h3>

      <p className="text-white/45 text-sm leading-relaxed flex-1">
        {step.desc}
      </p>

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="mt-1 self-start px-5 py-2 rounded-lg bg-white text-black font-semibold text-sm
          border border-white hover:bg-black hover:text-white
          shadow-[0_6px_18px_rgba(0,0,0,0.45)] hover:shadow-[0_8px_22px_rgba(255,255,255,0.12)]
          transition-all duration-300 cursor-pointer"
      >
        Explore
      </motion.button>
    </motion.div>
  );
}

export default function Home2() {
  return (
    <section
      data-theme="dark"
      className="relative w-full overflow-hidden py-20 sm:py-28 px-6"
      style={{ background: "#000000" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 flex flex-col items-center gap-4">
          <motion.h2
            {...fadeUp(0.08)}
            className="font-bold text-white text-3xl sm:text-4xl md:text-5xl leading-tight"
          >
            What We Do
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {STEPS.map((step, i) => (
            <StepCard key={i} step={step} index={i} />
          ))}
        </div>

        <motion.p
          {...fadeUp(0.4)}
          className="mt-14 text-center text-white/70 text-base sm:text-lg"
        >
          Everything your restaurant needs to look premium, perform better, and
          sell more.
        </motion.p>
      </div>
    </section>
  );
}
