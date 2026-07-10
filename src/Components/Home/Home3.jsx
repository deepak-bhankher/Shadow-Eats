import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

export default function Home3() {
  return (
    <section className="bg-black text-white py-20 sm:py-28 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* POS section */}
        <motion.h1
          {...fadeUp(0)}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight max-w-2xl"
        >
          POS-Integrated? We Handle That Too!
        </motion.h1>

        <motion.div
          {...fadeUp(0.1)}
          className="mt-10 w-full rounded-3xl overflow-hidden border border-[#D6ff01]/15 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
        >
          <img
            src="bg2.png"
            alt="POS integration"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* flag divider */}
        <motion.img
          {...fadeUp(0.15)}
          src="flag.png"
          alt="flag"
          className="w-8 h-8 sm:w-10 sm:h-10 object-contain mt-14 mb-4"
        />

        {/* Founder note */}
        <motion.h2
          {...fadeUp(0.2)}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4"
        >
          Founder Note
        </motion.h2>

        <motion.div
          {...fadeUp(0.3)}
          className="mt-10 flex flex-col items-center gap-6 max-w-xl"
        >
          <img
            src="aman.png"
            alt="Aman Bhardwaj"
            className="w-40 h-40 rounded-full object-cover border-2 border-[#D6ff01]/40"
            style={{ boxShadow: "0 0 24px rgba(214,255,1,0.15)" }}
          />

          <p className="text-white/70 text-base sm:text-lg leading-relaxed">
            As the founder, my mission is to empower restaurants with smart
            menu engineering and creative design. We're committed to reducing
            your burden, strengthening your brand, and boosting sales—both
            online and offline. Let's craft menus that truly drive growth
            together!
          </p>

          <span className="text-white font-medium text-sm sm:text-base tracking-wide">
            Aman Bhardwaj <span>— Founder & CEO</span>
          </span>
        </motion.div>
      </div>
    </section>
  );
}