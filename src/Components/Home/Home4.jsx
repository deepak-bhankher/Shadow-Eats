import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

const image = [
  { img: "home1.png" },
  { img: "home2.png" },
  { img: "home3.png" },
  { img: "home4.png" },
];

// duplicate the array so the marquee loop is seamless
const marqueeImages = [...image, ...image, ...image];

export default function Home4() {
  return (
    <section className="bg-white text-black py-20 sm:py-28 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center px-6">
        {/* In the News */}
        <motion.h1
          {...fadeUp(0)}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black"
        >
          In the News
        </motion.h1>
      </div>

      {/* Marquee */}
      <motion.div {...fadeUp(0.1)} className="mt-12 w-full relative">
        {/* edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 z-10 bg-gradient-to-l from-white to-transparent" />

        <div className="overflow-hidden">
          <motion.div
            className="flex items-center gap-4 sm:gap-6 w-max"
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{ duration: 18, ease: "linear", repeat: Infinity }}
          >
            {marqueeImages.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-center p-6 sm:p-8 rounded-2xl border border-black/10
                  bg-black/[0.03] hover:bg-black/[0.06] hover:border-black/20 transition-all duration-300 shrink-0"
              >
                <img
                  src={item.img}
                  alt={`News logo ${(i % image.length) + 1}`}
                  className="max-h-16 sm:max-h-20 w-auto object-contain opacity-85"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center px-6">
        {/* Let's Connect */}
        <motion.div
          {...fadeUp(0.25)}
          className="mt-20 sm:mt-28 flex flex-col items-center gap-6"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">
            Let's Connect
          </h2>

          <a
            href="tel:7777024365"
            className="group inline-flex items-center gap-3 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full
              border border-black/15 bg-black/[0.03] hover:bg-black hover:border-black
              transition-all duration-300"
          >
            <span className="w-2 h-2 rounded-full bg-black group-hover:bg-white transition-colors duration-300" />
            <span className="text-black group-hover:text-white text-lg sm:text-xl font-medium tracking-wide transition-colors duration-300">
              +91 77770 24365
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
