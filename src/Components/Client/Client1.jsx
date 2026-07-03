import { motion } from "framer-motion";

export default function Client1() {
  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center px-6 py-24 overflow-hidden">
      {/* background image */}
      <img
        src="client1-bg.png"
        alt=""
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

      <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center gap-5 sm:gap-6">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-white font-semibold leading-tight text-[28px] xs:text-[32px] sm:text-[42px] md:text-[50px] tracking-tight"
        >
          Trusted by Restaurants
          <br />
          Across India
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
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