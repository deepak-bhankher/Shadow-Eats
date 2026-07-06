import { motion, useAnimationControls } from "framer-motion";
import { useState, useRef } from "react";
import { FiStar } from "react-icons/fi";
import { RiDoubleQuotesL } from "react-icons/ri";

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
    role: "Owner, Namaste Thali",
    avatar: "video1.mp4",
    stars: 5,
  },
  {
    quote:
      "The way Shadow Eats analyses menu data on Zomato and Swiggy is next level. They don't just design — they engineer menus that perform. Our sales increased simply because the online flow became smarter and more customer-friendly.",
    name: "Manish Khattar",
    role: "Founder, Chaap Chariot",
    avatar: "client-avatar2.png",
    stars: 4,
  },
  {
    quote:
      "Working with Shadow Eats felt like having an in-house growth team. Every recommendation was backed by real data, and the results showed up in our order numbers within weeks.",
    name: "Priya Nair",
    role: "Co-founder, Wokford",
    avatar: "client-avatar3.png",
    stars: 5,
  },
  {
    quote:
      "Our dine-in menu looks premium now and our delivery menu actually converts. Shadow Eats handled both worlds without compromising either one.",
    name: "Rohit Malhotra",
    role: "Director, Truly Ghee",
    avatar: "client-avatar4.png",
    stars: 4,
  },
];

const TRACK = [...TESTIMONIALS, ...TESTIMONIALS];

function TestimonialCard({ item }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      animate={{ y: hovered ? -6 : 0, scale: hovered ? 1.03 : 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex-shrink-0 w-[300px] sm:w-[360px] h-[320px] sm:h-[360px] flex flex-col justify-between gap-6 p-6 sm:p-8 rounded-3xl cursor-pointer"
      style={{
        background: "linear-gradient(145deg, #1a1a1a 0%, #111 100%)",
        border: hovered ? "1px solid rgba(255,255,255,0.35)" : "1px solid rgba(255,255,255,0.07)",
        boxShadow: hovered
          ? "0 0 0 1px rgba(255,255,255,0.12), 0 24px 70px rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.1)"
          : "0 24px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
        transition: "border 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {/* quote icon */}
      <RiDoubleQuotesL size={32} style={{ color: "rgba(255,255,255,0.5)" }} />

      {/* stars */}
      <div className="flex gap-1 -mt-2">
        {Array.from({ length: item.stars }).map((_, i) => (
          <FiStar key={i} size={13} className="fill-white text-white" />
        ))}
      </div>

      <p className="text-white/70 text-sm sm:text-[15px] leading-relaxed flex-1">
        {item.quote}
      </p>

      {/* divider */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
        }}
      />

      <div className="flex items-center gap-3">
        <img
          src={item.avatar}
          alt={item.name}
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover"
          style={{
            border: "2px solid rgba(255,255,255,0.2)",
          }}
        />
        <div className="flex flex-col">
          <span className="text-white font-semibold text-sm sm:text-[15px]">
            {item.name}
          </span>
          <span className="text-white/35 text-xs">{item.role}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Client3() {
  return (
    <section className="bg-black py-20 sm:py-28 overflow-hidden">
      <div className="flex flex-col items-center gap-12 sm:gap-16">
        {/* heading */}
        <motion.div
          {...fadeUp(0)}
          className="flex flex-col items-center gap-3 px-6"
        >
          <span
            className="text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full"
            style={{
              background: "rgba(255,255,255,0.08)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            Client Love
          </span>
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
            What Our Clients Say
          </h1>
          <p className="text-white/40 text-sm sm:text-base text-center max-w-md">
            Real results from real restaurant partners across India
          </p>
        </motion.div>

        {/* marquee track */}
        <motion.div {...fadeUp(0.2)} className="w-full">
          <div className="relative w-full">
            {/* left fade */}
            <div
              className="absolute left-0 top-0 h-full w-16 sm:w-28 z-10 pointer-events-none"
              style={{ background: "linear-gradient(90deg,#000,transparent)" }}
            />
            {/* right fade */}
            <div
              className="absolute right-0 top-0 h-full w-16 sm:w-28 z-10 pointer-events-none"
              style={{ background: "linear-gradient(270deg,#000,transparent)" }}
            />

            <motion.div
              className="flex gap-5 sm:gap-6 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 28,
                ease: "linear",
                repeat: Infinity,
              }}
              style={{ pointerEvents: "none" }}
            >
              {TRACK.map((item, i) => (
                <div key={i} style={{ pointerEvents: "auto" }}>
                  <TestimonialCard item={item} />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
