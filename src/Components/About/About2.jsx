import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, delay, ease: "easeOut" },
});

const IMAGE_CARDS_TOP = [
  {
    number: "1",
    img: "About1.png",
    title: "Menu Engineering - Dining/Delivery",
    desc: "Shadow Eats designs smart, profit-focused menus for dining and delivery, optimized to perform seamlessly in-restaurant and across platforms like Zomato and Swiggy.",
  },
  {
    number: "2",
    img: "About2.png",
    title: "Onboarding - Zomato & Swiggy",
    desc: "Shadow Eats handles end-to-end registration for Swiggy, Zomato, and FSSAI. Every step is managed to ensure fast approval, full compliance, and a smooth launch.",
  },
  {
    number: "3",
    img: "About3.png",
    title: "Sales Growth - Swiggy & Zomato",
    desc: "Shadow Eats drives sales growth on Swiggy and Zomato through smart pricing, visibility optimization, and performance-driven strategies. Every action is focused on increasing orders, revenue, and repeat customers.",
  },
];

const NAME_PLANNER = {
  number: "4",
  img: "About4.png",
  title: "Menu Graphics Design ",
  desc: "Shadow Eats design attractive dine-in menus that showcase your best dishes, enhancing the dining experience and boosting orders.",
};

const TEXT_CARDS = [
  {
    number: "5",
    img: "About9.png",
    title: "Shadow Eats - Home Pro",
    desc: "Shadow Eats Home Pro helps home chefs transform their kitchens into fully operational cloud kitchens.",
  },
  {
    number: "6",
    img: "About8.png",
    title: "Shadow Eats - Virtual Brands",
    desc: "Shadow Eats – Virtual Brands partners with fine-dine restaurants by offering ready-to-run virtual brand franchises.",
  },
];

function NumberBadge({ n, delay = 0 }) {
  return (
    <motion.span
      {...fadeIn(delay)}
      className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-sm font-bold text-black border border-[#D6ff01]/40"
      style={{
        background:
          "linear-gradient(135deg,  0%, #b8dd00 100%)",
          color:"#ffffff"
      }}
    >
      {n}
    </motion.span>
  );
}

function ImageCard({ card, index }) {
  const base = index * 0.1;
  return (
    <motion.div
      {...fadeUp(base)}
      whileHover={{
        y: -6,
        boxShadow:
          "0 0 0 1px rgba(214,255,1,0.25), 0 20px 40px rgba(0,0,0,0.5)",
      }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-4 p-4 sm:p-5 rounded-2xl border border-white/10 bg-white/[0.03] transition-colors duration-300 hover:bg-white/[0.06] hover:border-[#D6ff01]/25"
    >
      <motion.div
        className="w-full h-44 sm:h-48 rounded-xl overflow-hidden border border-white/10"
        whileHover={{ scale: 1.0 }}
      >
        <motion.img
          src={card.img}
          alt={card.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.06, filter: "brightness(1.1)" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
      <NumberBadge n={card.number} delay={base + 0.1} />
      <motion.h3
        {...fadeUp(base + 0.15)}
        className="text-white font-semibold text-lg sm:text-xl leading-snug"
      >
        {card.title}
      </motion.h3>
      <motion.p
        {...fadeUp(base + 0.22)}
        className="text-white/45 text-sm leading-relaxed"
      >
        {card.desc}
      </motion.p>
    </motion.div>
  );
}

export default function About2() {
  return (
    <section className="bg-black text-white py-20 sm:py-28 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-10 sm:gap-12">
        <motion.h1
          {...fadeUp(0)}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center leading-tight max-w-3xl mx-auto"
        >
          What Shadow Eats Can do for Your Restaurant
        </motion.h1>

        {/* Row 1: cards 1-3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {IMAGE_CARDS_TOP.map((card, i) => (
            <ImageCard key={card.number} card={card} index={i} />
          ))}
        </div>

        {/* Row 2: cards 4, 6, 7 - same style as top row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <ImageCard card={NAME_PLANNER} index={0} />
          {TEXT_CARDS.map((card, i) => (
            <ImageCard key={card.number} card={card} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}