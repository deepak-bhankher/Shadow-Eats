import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

const TESTIMONIALS = [
  {
    quote:
      "Shadow Eats completely redefined our online menu. Their team knows exactly how to optimise listings, pricing, and photos for Zomato and Swiggy. After their revamp, our visibility and order conversion shot up instantly.",
    name: "Abhishek Roy",
    avatar: "client-avatar1.png",
  },
  {
    quote:
      "The way Shadow Eats analyses menu data on Zomato and Swiggy is next level. They don't just design — they engineer menus that perform. Our sales increased simply because the online flow became smarter and more customer-friendly.",
    name: "Manish Khattar",
    avatar: "client-avatar2.png",
  },
  {
    quote:
      "Working with Shadow Eats felt like having an in-house growth team. Every recommendation was backed by real data, and the results showed up in our order numbers within weeks.",
    name: "Priya Nair",
    avatar: "client-avatar3.png",
  },
  {
    quote:
      "Our dine-in menu looks premium now and our delivery menu actually converts. Shadow Eats handled both worlds without compromising either one.",
    name: "Rohit Malhotra",
    avatar: "client-avatar4.png",
  },
];

function TestimonialCard({ item, index }) {
  return (
    <motion.div
      {...fadeUp(index * 0.1)}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="relative flex flex-col justify-between gap-8 p-6 sm:p-8 rounded-3xl"
      style={{
        background: "linear-gradient(180deg, #f6f3ea 0%, #efe9db 100%)",
        boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
      }}
    >
      <p className="italic text-[#2b3a55] text-sm sm:text-base leading-relaxed">
        "{item.quote}"
      </p>

      <div className="flex items-center gap-3">
        <img
          src={item.avatar}
          alt={item.name}
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border border-black/10"
        />
        <span className="text-[#2b3a55] font-medium text-sm sm:text-base">
          {item.name}
        </span>
      </div>
    </motion.div>
  );
}

export default function Client3() {
  return (
    <section className="bg-black py-20 sm:py-28 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-12 sm:gap-16">
        <motion.h1
          {...fadeUp(0)}
          className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold text-center"
        >
          What Our Clients Says
        </motion.h1>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {TESTIMONIALS.map((item, i) => (
            <TestimonialCard key={item.name} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}