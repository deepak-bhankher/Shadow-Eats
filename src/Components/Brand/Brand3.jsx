import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

const CUISINE_IMAGES = [
  "brand7.png",
  "brand8.png",
  "brand9.png",
  "brand10.png",
  "brand11.png",
  "brand12.png",
];

const MARQUEE_IMAGES = [...CUISINE_IMAGES, ...CUISINE_IMAGES, ...CUISINE_IMAGES];

const STATS_LEFT = [
  { label: "Country", value: "India " },
  { label: "States", value: "6" },
  { label: "Cities", value: "25" },
  { label: "Shadow Kitchens", value: "30+" },
];

function StatCard({ label, value, delay = 0, align = "left" }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === "left" ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.03 }}
      className="w-full px-5 py-4 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 flex flex-col gap-1"
      style={{ textAlign: align === "left" ? "left" : "right" }}
    >
      <span
        className="text-white/40 text-xs uppercase tracking-[0.12em]"
        style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
      >
        {label}
      </span>
      <span
        className="text-white text-lg sm:text-xl font-semibold leading-tight"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {value}
      </span>
    </motion.div>
  );
}

export default function Brand3() {
  return (
    <div className="bg-black overflow-hidden">
      {/* Cuisine marquee section */}
      <section className="py-16 sm:py-20">
        <motion.h2
          {...fadeUp(0)}
          className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold text-center px-6"
        >
          North Indian · Chinese · Mughlai · Biryani
        </motion.h2>

        <motion.div {...fadeUp(0.1)} className="mt-10 sm:mt-14 relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 z-10 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 z-10 bg-gradient-to-l from-black to-transparent" />

          <div className="overflow-hidden">
            <motion.div
              className="flex items-center gap-4 sm:gap-6 w-max"
              animate={{ x: ["0%", "-33.333%"] }}
              transition={{ duration: 24, ease: "linear", repeat: Infinity }}
            >
              {MARQUEE_IMAGES.map((img, i) => (
                <div
                  key={i}
                  className="w-[220px] h-[240px] sm:w-[260px] sm:h-[280px] rounded-2xl overflow-hidden border border-white/10
                    shrink-0 shadow-[0_16px_40px_rgba(0,0,0,0.5)] hover:border-white/25 transition-all duration-300"
                >
                  <img
                    src={img}
                    alt={`Cuisine dish ${(i % CUISINE_IMAGES.length) + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Brand presence section */}
      <section className="py-20 sm:py-28 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-14 sm:gap-16">
          <motion.h2
            {...fadeUp(0)}
            className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold text-center"
          >
            Brand Presence
          </motion.h2>

          <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_1.6fr_1fr] items-center gap-10 lg:gap-8">

            {/* left stats */}
            <div className="flex flex-col gap-3">
              {STATS_LEFT.map((s, i) => (
                <StatCard key={s.label} label={s.label} value={s.value} delay={0.1 + i * 0.08} align="left" />
              ))}
            </div>

            {/* center map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-center justify-center py-4"
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(55% 55% at 50% 50%, rgba(255,255,255,0.07) 0%, transparent 70%)",
                }}
              />
              <motion.img
                src="india.png"
                alt="India map - Shadow Eats brand presence"
                className="relative w-full max-w-[300px] sm:max-w-[380px] object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.08)]"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            {/* right stats */}
            <div className="flex flex-col gap-3">
              <StatCard label="Category" value="Internet Restaurant" delay={0.3} align="right" />
              <StatCard label="Brands" value="5" delay={0.38} align="right" />

              {/* big number card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: 0.46, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.03 }}
                className="w-full px-5 py-5 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 flex flex-col gap-1 items-end"
              >
                <span
                  className="text-white/40 text-xs uppercase tracking-[0.12em]"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
                >
                  Outlets
                </span>
               <span
  className="text-white font-bold text-5xl sm:text-6xl leading-none tracking-tight"
  style={{ fontFamily: "Inter, sans-serif" }}
>
  250
  <span
    style={{
      background:"#D6ff01",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    }}
  >
    +
  </span>
</span>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
