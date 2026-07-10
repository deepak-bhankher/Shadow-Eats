import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});


function About3() {
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
      </div>
    </section>
  );
}
export default About3;