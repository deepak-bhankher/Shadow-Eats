import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

const ROW1 = [
  { img: "client-logo1.png", alt: "Veer Ji" },
  { img: "client-logo2.png", alt: "Chutney" },
  { img: "client-logo3.png", alt: "Cunny's Kitchen" },
];

const ROW2 = [
  { img: "client-logo4.png", alt: "Pink Paprika" },
  { img: "client-logo5.png", alt: "The Paneer Junction" },
  { img: "client-logo6.png", alt: "Elite Bake" },
  { img: "client-logo7.png", alt: "Chaiholic" },
];

function LogoCard({ img, alt }) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.05 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="shrink-0 w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-2xl bg-white flex items-center justify-center p-4 sm:p-5
        border border-white/10 shadow-[0_10px_28px_rgba(0,0,0,0.4)] cursor-default"
    >
      <img
        src={img}
        alt={alt}
        className="max-w-full max-h-full object-contain"
      />
    </motion.div>
  );
}

function MarqueeRow({ items, duration = 30 }) {
  const looped = [...items, ...items, ...items];
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 z-10 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 z-10 bg-gradient-to-l from-black to-transparent" />
      <div className="overflow-hidden">
        <motion.div
          className="flex items-center gap-4 sm:gap-6 w-max py-2"
          animate={{ x: ["-33.333%", "0%"] }}
          transition={{ duration, ease: "linear", repeat: Infinity }}
        >
          {looped.map((item, i) => (
            <LogoCard key={i} img={item.img} alt={item.alt} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default function Client2() {
  return (
    <section className="bg-black py-20 sm:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-14 sm:gap-16">
        {/* heading + stat */}
        <div className="flex flex-col items-center gap-4 sm:gap-5 text-center px-6">
          <motion.h1
            {...fadeUp(0)}
            className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold"
          >
            Brands We Work With
          </motion.h1>

          <motion.span
            {...fadeUp(0.1)}
            className="text-white font-bold text-6xl sm:text-7xl md:text-8xl tracking-tight"
          >
            1000+
          </motion.span>

          <motion.p
            {...fadeUp(0.2)}
            className="text-white/50 text-sm sm:text-base md:text-lg"
          >
            Restaurants, cafés, and cloud kitchens
          </motion.p>
        </div>

        {/* Single row — left to right */}
        <motion.div {...fadeUp(0.25)} className="w-full">
          <MarqueeRow items={[...ROW1, ...ROW2]} duration={40} />
        </motion.div>
      </div>
    </section>
  );
}
