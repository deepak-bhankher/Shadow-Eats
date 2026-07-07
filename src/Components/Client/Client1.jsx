import { motion } from "framer-motion";

export default function Client1() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
      {/* background image */}
      <img
        src="client.png"
        alt="client"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/55" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 45%, rgba(0,0,0,0.5) 100%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center gap-6 sm:gap-7">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-white/70 text-xs sm:text-sm font-medium tracking-[0.25em] uppercase px-4 py-1.5 rounded-full border border-white/15"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)",
            backdropFilter: "blur(6px)",
          }}
        >
          Client Success
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-white font-semibold leading-tight text-[28px] xs:text-[32px] sm:text-[42px] md:text-[50px] tracking-tight"
        >
          Trusted by Restaurants
          <br />
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
            Across India
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="w-16 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(232,185,95,0.7), transparent)",
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl"
        >
          We've collaborated with numerous restaurants, cafés, and cloud
          kitchens to elevate their menus, strengthen their branding, and
          boost their digital presence.
        </motion.p>
      </div>
    </section>
  );
}