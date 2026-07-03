import { motion } from "framer-motion";
import { HiLocationMarker } from "react-icons/hi";

export default function Brand4() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center px-6 py-24 sm:py-32 overflow-hidden">
      {/* background image */}
      <img
        src="brand_bg.png"
        alt="image"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/60" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.15) 45%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      <div className="relative w-full max-w-2xl flex flex-col items-center gap-10 sm:gap-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold text-center tracking-tight"
        >
          Chef Training Unit (CTU)
        </motion.h1>

        {/* address card */}
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -4, boxShadow: "0 28px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.12)" }}
          className="w-full rounded-2xl p-px"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 100%)",
          }}
        >
          <div
            className="w-full rounded-2xl px-6 py-5 flex items-center gap-5"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.03) 100%)",
              backdropFilter: "blur(20px)",
            }}
          >
            {/* icon */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border border-white/15"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.04) 100%)",
              }}
            >
              <HiLocationMarker size={22} className="text-white" />
            </motion.div>

            {/* text */}
            <div className="flex flex-col gap-0.5">
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.32, ease: "easeOut" }}
                className="text-white/40 text-xs uppercase tracking-[0.14em]"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
              >
                Training Location · Unit 01
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                className="text-white text-lg sm:text-xl font-semibold tracking-tight"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Hisar, Haryana
              </motion.span>
            </div>

            {/* right badge */}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
              className="ml-auto shrink-0 px-3 py-1 rounded-full text-xs font-medium border border-white/15 text-white/70"
              style={{
                background: "rgba(255,255,255,0.06)",
                fontFamily: "Inter, sans-serif",
                letterSpacing: "0.06em",
              }}
            >
              Active
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
