import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

// add as many slide images as you like here
const SLIDES = [
  { img: "brand1.png", alt: "Chaap Chariot dish" },
  { img: "brands.png", alt: "Slide 2" },
  { img: "brands1.png", alt: "Slide 2" },
  { img: "brands2.png", alt: "Slide 2" },
  { img: "brands3.png", alt: "Slide 2" },
];

const BRANDS = [
  { name: "Namaste Thali", img: "brand4.png" },
  { name: "Chaap Chariot", img: "brand5.png" },
  { name: "Wokford", img: "brand6.png" },
  { name: "Truly Ghee", img: "brand1.png" },
  { name: "Paratha Ekdum", img: "brand4.png" },
];

function Slider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + SLIDES.length) % SLIDES.length);
  };

  return (
    <motion.div
      {...fadeUp(0)}
      className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/10
        shadow-[0_24px_70px_rgba(0,0,0,0.6)] aspect-[16/9] sm:aspect-[21/9]"
    >
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.img
          key={index}
          src={SLIDES[index].img}
          alt={SLIDES[index].alt}
          custom={direction}
          initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* subtle top/bottom fade for polish */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10" />

      {/* nav arrows */}
      <button
        onClick={() => go(-1)}
        aria-label="Previous slide"
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full
          flex items-center justify-center text-white cursor-pointer transition-all duration-300
          bg-black/40 hover:bg-black/60 border border-white/20 backdrop-blur-md"
      >
        <FiChevronLeft size={20} />
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Next slide"
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full
          flex items-center justify-center text-white cursor-pointer transition-all duration-300
          bg-black/40 hover:bg-black/60 border border-white/20 backdrop-blur-md"
      >
        <FiChevronRight size={20} />
      </button>

      {/* dots */}
      <div className="absolute bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            aria-label={`Go to slide ${i + 1}`}
            className="cursor-pointer transition-all duration-300 rounded-full"
            style={{
              width: i === index ? 22 : 7,
              height: 7,
              background: i === index ? "#ffffff" : "rgba(255,255,255,0.4)",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Brand2() {
  return (
    <section className="bg-black py-20 sm:py-28 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-14 sm:gap-20">
        <Slider />

        <div>
          <motion.h2
            {...fadeUp(0.1)}
            className="text-white text-2xl sm:text-3xl font-semibold text-center mb-10 sm:mb-12"
          >
            Our Brand
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {BRANDS.map((brand, i) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="aspect-square rounded-2xl overflow-hidden flex items-center justify-center p-4 sm:p-6
                  border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)]
                  hover:border-white/25 hover:shadow-[0_14px_38px_rgba(0,0,0,0.55)]
                  transition-all duration-300"
                style={{ backgroundColor: brand.bg }}
              >
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
