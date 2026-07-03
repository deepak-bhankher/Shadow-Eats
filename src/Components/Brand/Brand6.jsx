import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus } from "react-icons/fi";

const FAQS = [
  {
    q: "What happens if Shadow Eats decides to open an additional outlet in my location?",
    a: "We coordinate closely with existing franchise partners to ensure fair territory planning and avoid unnecessary overlap that could impact your business.",
  },
  {
    q: "What will be the payment cycle?",
    a: "Payouts follow a fixed monthly cycle, with clear settlement statements shared for every order processed through the platforms.",
  },
  {
    q: "Who pays the Zomato/Swiggy commissions and discounts?",
    a: "Platform commissions and discounts are factored into the pricing structure and managed as part of the overall franchise agreement.",
  },
  {
    q: "Does Shadow Eats charge any additional fees for ads or promotions?",
    a: "Any promotional or ad spend is transparently communicated in advance, with no hidden charges added later.",
  },
  {
    q: "What types of cuisine does Shadow Eats offer in its brands?",
    a: "Our brand portfolio spans North Indian, Chinese, Mughlai, Biryani, and more, giving partners flexibility based on local demand.",
  },
  {
    q: "How can I become a Franchise Partner of Shadow Eats Brands?",
    a: "You can apply through our franchise application process, after which our team reviews your location and profile before moving to onboarding.",
  },
  {
    q: "Can I run my own brand along with Shadow Eats Brands?",
    a: "Yes, many partners operate their own brand alongside a Shadow Eats virtual brand to maximize kitchen utilization.",
  },
  {
    q: "Is the franchise menu fixed, or can we customize it?",
    a: "The core menu is standardized for brand consistency, but we do accommodate limited local customization where it makes sense.",
  },
  {
    q: "What training support is provided by Shadow Eats?",
    a: "We provide hands-on Chef Training Unit sessions covering recipes, plating, and kitchen workflow to ensure consistent quality.",
  },
  {
    q: "What is the duration of the franchise agreement?",
    a: "Franchise agreements are typically structured for a fixed multi-year term, with renewal options discussed closer to expiry.",
  },
  {
    q: "What are the franchise charges?",
    a: "Franchise charges vary based on brand and setup requirements, and are shared in detail during the application and approval stage.",
  },
  {
    q: "Is there a royalty in the franchise model?",
    a: "Yes, a royalty is applicable as part of the ongoing brand usage and support provided throughout the partnership.",
  },
  {
    q: "Why is royalty charged?",
    a: "Royalty covers continued access to the brand, menu updates, marketing support, and platform management provided by Shadow Eats.",
  },
  {
    q: "Does Shadow Eats handle sales growth and management support?",
    a: "Yes, our team actively works on pricing strategy, visibility optimization, and performance tracking to help grow your sales.",
  },
  {
    q: "Does Shadow Eats provide support whenever needed?",
    a: "Yes, ongoing support is available throughout the partnership, from operational queries to platform-related assistance.",
  },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300 h-fit"
      style={{
        background: isOpen ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.05)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: isOpen
          ? "1px solid rgba(255,255,255,0.2)"
          : "1px solid rgba(255,255,255,0.1)",
        boxShadow: isOpen
          ? "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.12)"
          : "0 4px 16px rgba(0,0,0,0.2)",
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left cursor-pointer"
      >
        <span className="text-white text-sm sm:text-base font-medium leading-snug">
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center border border-white/25 text-white"
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
            <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-white/55 text-sm sm:text-base leading-relaxed">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Brand6() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative py-20 sm:py-28 px-6">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="brand_bg.png"
          alt="background"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100%)",
          }}
        />
      </div>
      <div className="relative max-w-5xl mx-auto flex flex-col items-center gap-12 sm:gap-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white"
        >
          FAQs
        </motion.h1>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 items-start">
          {FAQS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.4,
                delay: Math.min((i % 6) * 0.05, 0.3),
              }}
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
