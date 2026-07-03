import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus } from "react-icons/fi";

const FAQS = [
  {
    q: "How can Menu Engineering help increase my dine-in sales?",
    a: "We analyze your best-selling and most profitable dishes, then restructure the layout, pricing, and descriptions so customers naturally gravitate toward high-margin items.",
  },
  {
    q: "Can my delivery menu be customized for local preferences?",
    a: "Yes, we tailor item names, descriptions, and combos based on what performs best in your specific delivery zone and local taste preferences.",
  },
  {
    q: "How can a redesigned dine-in menu help increase table turnover?",
    a: "A clear, well-organized menu helps guests decide faster, reducing decision time and freeing up tables sooner without feeling rushed.",
  },
  {
    q: "Will the menu layout influence which dishes customers order more often?",
    a: "Absolutely. Placement, sizing, and visual hierarchy guide the eye — we use this to spotlight the dishes you want to sell the most.",
  },
  {
    q: "Can the menu be adapted for different outlet sizes or themes?",
    a: "Yes, every menu is custom-built to match your outlet's format, size, and overall brand theme, whether it's a small cloud kitchen or a full dine-in space.",
  },
  {
    q: "Will you help with menu photography or visuals for dine-in menus?",
    a: "Yes, we offer professional food photography and graphic design so your menu visuals match the quality of your food.",
  },
  {
    q: "Can you help with menu descriptions/images that improve online orders?",
    a: "Yes, we write conversion-focused descriptions and pair them with optimized images specifically designed to boost clicks and orders on delivery apps.",
  },
  {
    q: "How do you design menus that reduce cancellations or wrong orders?",
    a: "We use clear naming, accurate descriptions, and structured categories so customers know exactly what they're ordering, reducing confusion and cancellations.",
  },
  {
    q: "How do you manage my cloud presence on delivery platforms?",
    a: "We handle your listings, menu updates, pricing, and visibility optimization across Zomato and Swiggy to keep your cloud presence performing well.",
  },
  {
    q: "Will the Restaurant Name Planner suggest names that are unique and trademarkable?",
    a: "We research existing brands and suggest names that are distinctive and aligned with your concept, though final trademark clearance should be confirmed with a legal professional.",
  },
  {
    q: "How do you ensure my logo and color palette reflect my brand?",
    a: "We start by understanding your restaurant's story, cuisine, and audience, then design a logo and palette that visually communicates that identity consistently.",
  },
  {
    q: "Will Menu Graphics Design make my menu more appealing to customers?",
    a: "Yes, thoughtful layout, typography, and imagery make your menu more inviting and easier to navigate, which directly improves the ordering experience.",
  },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div
      className="rounded-2xl border overflow-hidden transition-all duration-300"
      style={{
        background: isOpen ? "#000000" : "#f7f7f7",
        border: isOpen ? "1px solid #000000" : "1px solid #e5e5e5",
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left cursor-pointer"
      >
        <span
          className="text-sm sm:text-base font-medium leading-snug"
          style={{ color: isOpen ? "#ffffff" : "#111111" }}
        >
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center border"
          style={{
            background: isOpen ? "rgba(255,255,255,0.12)" : "#000000",
            borderColor: isOpen ? "rgba(255,255,255,0.25)" : "#000000",
            color: isOpen ? "#ffffff" : "#ffffff",
          }}
        >
          <FiPlus size={16} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-white/70 text-sm sm:text-base leading-relaxed">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function About4() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative py-20 sm:py-28 px-6 overflow-hidden bg-white">
      <div className="relative max-w-3xl mx-auto flex flex-col items-center gap-10 sm:gap-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black"
        >
          FAQs
        </motion.h1>

        <div className="w-full flex flex-col gap-3 sm:gap-4">
          {FAQS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.3) }}
            >
              <FaqItem
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
