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
  img: "",
  title: "Restaurant Name Planner",
  desc: "Shadow Eats create memorable, brand aligned restaurant names that resonate with your audience. Every name is designed to reflect your concept and attract diners.",
};

const TEXT_CARDS = [
  {
    number: "5",
    img: "About5.png",
    title: "Logo & Branding Design",
    desc: "Shadow Eats create cohesive logos and colour palettes that capture your brand's personality, ensuring a memorable and consistent visual identity.",
  },
  {
    number: "6",
    img: "About6.png",
    title: "Menu Graphics Design",
    desc: "Shadow Eats design attractive dine-in menus that showcase your best dishes, enhancing the dining experience and boosting orders.",
  },
  {
    number: "7",
    img: "",
    title: "F&B Photoshoot",
    desc: "We set up professional photoshoots for Zomato and Swiggy brand pages, delivering high-quality images and videos optimized for online ordering platforms. Currently available across North India.",
  },
];

const BOTTOM_CARDS = [
  {
    number: "8",
    img: "About6.png",
    title: "Shadow Eats - Home Pro",
    desc: "Shadow Eats Home Pro helps home chefs transform their kitchens into fully operational cloud kitchens.",
  },
  {
    number: "9",
    img: "About7.png",
    title: "Shadow Eats - Virtual Brands",
    desc: "Shadow Eats - Virtual Brands partners with fine-dine restaurants by offering ready-to-run virtual brand franchises.",
  },
];

function NumberBadge({ n, delay = 0 }) {
  return (
    <motion.span
      {...fadeIn(delay)}
      className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-sm font-bold text-white border border-white/20"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)",
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
          "0 0 0 1px rgba(255,255,255,0.15), 0 20px 40px rgba(0,0,0,0.5)",
      }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-4 p-4 sm:p-5 rounded-2xl border border-white/10 bg-white/[0.03] transition-colors duration-300 hover:bg-white/[0.06]"
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

        {/* Card 4: Restaurant Name Planner - horizontal */}
        <motion.div
          {...fadeUp(0.1)}
          whileHover={{
            y: -6,
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.15), 0 24px 48px rgba(0,0,0,0.5)",
          }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row items-stretch gap-5 sm:gap-8 p-4 sm:p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-colors duration-300"
        >
          <div className="w-full lg:w-[55%] h-48 sm:h-64 lg:h-auto rounded-xl overflow-hidden border border-white/10 shrink-0">
            <motion.img
              src={NAME_PLANNER.img}
              alt={NAME_PLANNER.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.06, filter: "brightness(1.1)" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          <div className="flex flex-col justify-center gap-4 lg:py-4">
            <NumberBadge n={NAME_PLANNER.number} delay={0.2} />
            <motion.h3
              {...fadeUp(0.25)}
              className="text-white font-semibold text-xl sm:text-2xl leading-snug"
            >
              {NAME_PLANNER.title}
            </motion.h3>
            <motion.p
              {...fadeUp(0.32)}
              className="text-white/45 text-sm sm:text-base leading-relaxed max-w-md"
            >
              {NAME_PLANNER.desc}
            </motion.p>
          </div>
        </motion.div>

        {/* Row 2: cards 5-7 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {TEXT_CARDS.map((card, i) => (
            <ImageCard key={card.number} card={card} index={i} />
          ))}
        </div>

        {/* Row 3: cards 8-9 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {BOTTOM_CARDS.map((card, i) => (
            <motion.div
              key={card.number}
              {...fadeUp(i * 0.12)}
              whileHover={{
                y: -6,
                boxShadow:
                  "0 0 0 1px rgba(255,255,255,0.15), 0 20px 40px rgba(0,0,0,0.5)",
              }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-4 p-4 sm:p-5 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-colors duration-300"
            >
              <div className="w-full h-56 sm:h-72 rounded-xl overflow-hidden border border-white/10">
                <motion.img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.06, filter: "brightness(1.1)" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <NumberBadge n={card.number} delay={i * 0.12 + 0.1} />
              <motion.h3
                {...fadeUp(i * 0.12 + 0.15)}
                className="text-white font-semibold text-lg sm:text-xl leading-snug"
              >
                {card.title}
              </motion.h3>
              <motion.p
                {...fadeUp(i * 0.12 + 0.22)}
                className="text-white/45 text-sm leading-relaxed"
              >
                {card.desc}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
