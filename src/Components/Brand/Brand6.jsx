import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus } from "react-icons/fi";

const FAQS = [
  {
    q: "What happens if Shadow Eats decides to open an additional outlet in my location?",
    a: "Shadow Eats carefully plans franchise territories to avoid unnecessary overlap. If expansion is required, we work closely with existing partners to ensure fair business opportunities for everyone.",
  },
  {
    q: "What will be the payment cycle?",
    a: "Payments are settled on a fixed weekly or monthly cycle, depending on the platform. Complete settlement reports are shared for full transparency.",
  },
  {
    q: "Who pays the Zomato/Swiggy commissions and discounts?",
    a: "Platform commissions and promotional discounts are managed according to the franchise agreement, ensuring complete transparency in settlements.",
  },
  {
    q: "Does Shadow Eats charge any additional fees for ads or promotions?",
    a: "No hidden charges are applied. Any marketing or promotional campaigns are discussed with partners beforehand and executed only with mutual agreement.",
  },
  {
    q: "What types of cuisine does Shadow Eats offer in its brands?",
    a: "Our brands cover a wide variety of cuisines including North Indian, Chinese, Mughlai, Biryani, Fast Food, Rolls, Pizza, and more, based on market demand.",
  },
  {
    q: "How can I become a Franchise Partner of Shadow Eats Brands?",
    a: "Simply contact our franchise team, share your location details, and complete the application process. Our team will evaluate your location and guide you through onboarding.",
  },
  {
    q: "Can I run my own brand along with Shadow Eats Brands?",
    a: "Yes. Existing restaurant owners can continue operating their own brand while adding Shadow Eats brands to maximize kitchen utilization and revenue.",
  },
  {
    q: "Is the franchise menu fixed, or can we customize it?",
    a: "Our signature menu remains standardized to maintain quality and consistency. However, selected items may be customized based on local customer preferences after approval.",
  },
  {
    q: "What training support is provided by Shadow Eats?",
    a: "We provide complete chef training, recipe guidance, SOPs, kitchen setup assistance, packaging standards, and ongoing operational support.",
  },
  {
    q: "What is the duration of the franchise agreement?",
    a: "The franchise agreement is generally signed for multiple years with renewal options available based on mutual agreement.",
  },
  {
    q: "What are the franchise charges?",
    a: "Franchise investment depends on the selected brand and business model. Our team shares a complete pricing structure during the consultation process.",
  },
    {
    q: "Is there a royalty in the franchise model?",
    a: "Yes. A nominal royalty is charged as per the franchise agreement. This helps us provide continuous brand support, operational guidance, marketing assistance, and business development services.",
  },
  {
    q: "Why is royalty charged?",
    a: "Royalty is charged to maintain brand standards, provide ongoing operational support, marketing strategies, menu updates, technology improvements, and continuous business growth assistance.",
  },
  {
    q: "Does Shadow Eats handle sales growth and management support?",
    a: "Yes. Shadow Eats actively supports franchise partners with sales strategies, online platform optimization, marketing campaigns, operational guidance, and performance monitoring to help maximize business growth.",
  },
  {
    q: "Does Shadow Eats provide support whenever needed?",
    a: "Absolutely. Our dedicated support team is always available to assist franchise partners with operational queries, technical guidance, marketing support, and day-to-day business requirements whenever needed.",
  }
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
