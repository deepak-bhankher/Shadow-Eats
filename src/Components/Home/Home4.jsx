import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

const images = ["home1.png", "home2.png", "home3.png", "home4.png"];
const marqueeImages = [...images, ...images, ...images];

export default function Home4() {
  return (
    <section className="relative bg-[#000000] text-white py-24 sm:py-32 overflow-hidden">

      {/* subtle radial glow bg */}
      <div
        className="pointer-events-none absolute inset-0"
       
      />

      {/* ── Heading ── */}
      <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center px-6">
        <motion.div {...fadeUp(0)} className="flex flex-col items-center gap-3">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#434343]/60">
            Press &amp; Media
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
            In the News
          </h1>
          <div className="w-8 h-px bg-[#434343] mt-1" />
        </motion.div>
      </div>

      {/* ── Marquee ── */}
      <motion.div {...fadeUp(0.15)} className="relative mt-14 w-full">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 z-10 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 z-10 bg-gradient-to-l from-[#0a0a0a] to-transparent" />

        <div className="overflow-hidden">
          <motion.div
            className="flex items-center gap-4 sm:gap-6 w-max"
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{ duration: 24, ease: "linear", repeat: Infinity }}
          >
            {marqueeImages.map((img, i) => (
              <div
                key={i}
                className="shrink-0 flex items-center justify-center rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#1a1a1a]"
                style={{
                  padding: "22px 32px", 
                   background: "#111111",
  border: "1px solid #434343",
  boxShadow: "0 10px 30px rgba(67,67,67,.18)",
                 
                }}
              >
                <img
                  src={img}
                  alt={`News ${(i % images.length) + 1}`}
                  className="h-12 sm:h-16 w-auto object-contain"
                  style={{ opacity: 0.9 }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* ── Let's Connect ── */}
      <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center px-6">
        <motion.div
          {...fadeUp(0.2)}
          className="mt-24 sm:mt-32 flex flex-col items-center gap-5"
        >
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#434343]/60">
            Get in Touch
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white">
            Let's Connect
          </h2>

          <motion.a
  whileHover={{
    y: -3,
    backgroundColor: "#434343",
    boxShadow: "0 20px 40px rgba(67,67,67,.35)",
  }}
  whileTap={{ scale: 0.97 }}
  transition={{ duration: 0.3 }}
  className="px-12 sm:px-16 py-3.5 sm:py-4 rounded-xl
  text-white
  font-semibold
  text-sm sm:text-base
  cursor-pointer
  bg-[#000000]
  border border-[#434343]
  hover:border-white/20"
  style={{
    fontFamily: "Inter, sans-serif",
    letterSpacing: "0.04em",
    boxShadow: "0 10px 28px rgba(67,67,67,.25)",
  }}
>
  +91 95548-24365
</motion.a>
        </motion.div>
      </div>

    </section>
  );
}