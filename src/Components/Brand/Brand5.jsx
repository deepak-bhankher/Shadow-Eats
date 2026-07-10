import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const CRITERIA = [
  { img: "brand13.png", label: "Culinary Excellence" },
  { img: "brand14.png", label: "Location Suitability" },
  { img: "brand15.png", label: "Operational Excellence" },
  { img: "brand16.png", label: "Commitment to Brand" },
  { img: "brand17.png", label: "Customer-Centric" },
];

const BENEFITS = [
  { img: "brand18.png", label: "Established Brand" },
  { img: "brand19.png", label: "Proven Menu" },
  { img: "brand20.png", label: "Higher ROI" },
  { img: "brand21.png", label: "Central Marketing" },
  { img: "brand22.png", label: "Cloud Management" },
];

const PROCESS = [
  { img: "brand23.png", label: "Application & Approval" },
  { img: "brand24.png", label: "Agreement & Legal Review" },
  { img: "brand25.png", label: "Training & Setup" },
  { img: "brand26.png", label: "Marketing & Launch" },
  { img: "brand27.png", label: "Ongoing Support" },
];

function IconCard({ img, label, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, scale: 1.04 }}
      className="flex flex-col items-center gap-4 shrink-0 w-[150px] sm:w-[180px] cursor-default"
    >
      <div
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-white/10"
      >
        <img src={img} alt={label} className="w-full h-full object-cover" />
      </div>
      <span
        className="text-white/60 text-sm sm:text-[15px] text-center leading-snug font-medium"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {label}
      </span>
    </motion.div>
  );
}

function MarqueeRow({ items, direction = 1, duration = 22 }) {
  const looped = [...items, ...items, ...items];
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 z-10 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 z-10 bg-gradient-to-l from-black to-transparent" />
      <div className="overflow-hidden">
        <motion.div
          className="flex items-start gap-6 sm:gap-10 w-max py-3"
          animate={{ x: direction > 0 ? ["-33.333%", "0%"] : ["0%", "-33.333%"] }}
          transition={{ duration, ease: "linear", repeat: Infinity }}
        >
          {looped.map((item, i) => (
            <IconCard key={i} img={item.img} label={item.label} index={i % items.length} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function SectionBlock({ title, children, delay = 0 }) {
  return (
    <div className="flex flex-col gap-8 sm:gap-10">
      <motion.div {...fadeUp(delay)} className="flex flex-col items-center gap-2">
        <motion.h2
          className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold text-center tracking-tight"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {title}
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-px w-12 bg-white/20 origin-center"
        />
      </motion.div>
      {children}
    </div>
  );
}

export default function Brand5() {
  return (
    <section className="bg-black py-20 sm:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col gap-20 sm:gap-28 px-6">

        <SectionBlock title="Franchise Partner Criteria" delay={0}>
          <motion.div {...fadeUp(0.1)}>
            <MarqueeRow items={CRITERIA} direction={1} duration={22} />
          </motion.div>
        </SectionBlock>

        <SectionBlock title="Franchise Partner Benefits" delay={0}>
          <motion.div {...fadeUp(0.1)}>
            <MarqueeRow items={BENEFITS} direction={-1} duration={22} />
          </motion.div>
        </SectionBlock>

        <SectionBlock title="Process" delay={0}>
          <motion.div {...fadeUp(0.1)}>
            <MarqueeRow items={PROCESS} direction={1} duration={22} />
          </motion.div>
        </SectionBlock>

        {/* Aggregator Partners */}
        <SectionBlock title="Aggregator Partners" delay={0}>
          <motion.div
            {...fadeUp(0.1)}
            className="flex flex-wrap items-center justify-center gap-5 sm:gap-8"
          >
            {/* Zomato */}
            <motion.a
              href="https://www.zomato.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -8, scale: 1.04, boxShadow: "0 24px 50px rgba(226,55,68,0.35)" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-36 h-36 sm:w-44 sm:h-44 rounded-xl flex items-center justify-center cursor-pointer"
              style={{
                background: "linear-gradient(145deg, #e84354 0%, #c42d3c 100%)",
                boxShadow: "0 16px 40px rgba(226,55,68,0.25), inset 0 1px 0 rgba(255,255,255,0.15)",
              }}
            >
              <span
                className="text-white font-semibold text-3xl sm:text-3xl tracking-tight"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                zomato
              </span>
            </motion.a>

            {/* Swiggy */}
            <motion.a
              href="https://www.swiggy.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -8, scale: 1.04, boxShadow: "0 24px 50px rgba(252,128,25,0.35)" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl flex flex-col items-center justify-center gap-2 cursor-pointer"
              style={{
                background: "linear-gradient(145deg, #fd8f2c 0%, #e06b0a 100%)",
                boxShadow: "0 16px 40px rgba(252,128,25,0.25), inset 0 1px 0 rgba(255,255,255,0.15)",
              }}
            >
             <img src="Swiggy1.png" alt="swiggy" className="rounded-xl" />
            </motion.a>
          </motion.div>
        </SectionBlock>

      </div>
    </section>
  );
}
