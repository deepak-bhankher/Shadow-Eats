import { useState } from "react";
import { motion } from "framer-motion";
import { MdImage } from "react-icons/md";

const OFFICE_PHOTOS = [
  { id: "o1", src: "office-1.jpg", alt: "Team brainstorming session", weight: 2 },
  { id: "o2", src: "office-2.jpg", alt: "Coding at the desk", weight: 1 },
  { id: "o3", src: "office-3.jpg", alt: "Client call in progress", weight: 1 },
  { id: "o4", src: "office-4.jpg", alt: "Design review huddle", weight: 2 },

  { id: "o5", src: "office-5.jpg", alt: "Weekly team stand-up", weight: 1 },
  { id: "o6", src: "office-6.jpg", alt: "Late night deployment", weight: 2 },
  { id: "o7", src: "office-7.jpg", alt: "Whiteboard planning", weight: 2 },
  { id: "o8", src: "office-8.jpg", alt: "Office celebration", weight: 1 },

  { id: "o9", src: "office-9.jpg", alt: "New team member welcome", weight: 2 },
  { id: "o10", src: "office-10.jpg", alt: "Product demo day", weight: 1 },
  { id: "o11", src: "office-11.jpg", alt: "Coffee break chat", weight: 1 },
  { id: "o12", src: "office-12.jpg", alt: "Client site visit", weight: 2 },

  { id: "o13", src: "office-13.jpg", alt: "Pair programming", weight: 2 },
  { id: "o14", src: "office-14.jpg", alt: "Festival decorations at the studio", weight: 1 },
  { id: "o15", src: "office-15.jpg", alt: "Full team photo", weight: 2 },
];

function OfficeTile({ item, className = "" }) {
  const [failed, setFailed] = useState(false);
  const minWidth = item.weight === 2 ? "md:min-w-[260px]" : "md:min-w-[190px]";

  return (
    <div
      className={`relative overflow-hidden rounded-[18px] sm:rounded-[22px] md:rounded-[26px]
        bg-[#141414] ring-1 ring-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.4)] ${minWidth} ${className}`}
    >
      {!failed && item.src ? (
        <img
          src={item.src}
          alt={item.alt}
          onError={() => setFailed(true)}
          draggable={false}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-white/20">
          <MdImage size={22} />
          <span className="px-3 text-center text-[10px] font-medium tracking-wide text-white/25">
            {item.alt}
          </span>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 rounded-[18px] sm:rounded-[22px] md:rounded-[26px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]" />
    </div>
  );
}

function OfficeRow({ items, delay = 0 }) {
  const isOdd = items.length % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className="grid grid-cols-2 gap-4 sm:gap-5
        md:flex md:h-[240px] lg:h-[300px]"
    >
      {items.map((item, i) => (
        <OfficeTile
          key={item.id}
          item={item}
          className={`aspect-[4/3] md:aspect-auto md:h-full ${
            item.weight === 2 ? "md:flex-[1.7]" : "md:flex-[1]"
          } ${isOdd && i === items.length - 1 ? "col-span-2" : ""}`}
        />
      ))}
    </motion.div>
  );
}

export default function Home7() {
  const row1 = OFFICE_PHOTOS.slice(0, 4);
  const row2 = OFFICE_PHOTOS.slice(4, 8);
  const row3 = OFFICE_PHOTOS.slice(8, 12);
  const row4 = OFFICE_PHOTOS.slice(12, 15);

  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0a] py-16 sm:py-20 md:py-28">
      {/* ambient glow accents */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-[#D6FF01]/[0.06] blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-[#D6FF01]/[0.05] blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-white/70 text-xs sm:text-sm font-medium tracking-[0.25em] uppercase px-4 py-1.5 rounded-full border border-white/15"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)",
              backdropFilter: "blur(6px)",
            }}
          >
            Behind The Screens
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mt-5 sm:mt-6 font-semibold tracking-tight text-white
              text-[28px] leading-[1.15] xs:text-[32px] sm:text-[44px] md:text-[54px]"
          >
            Our Office{" "}
            <span
              className="italic font-light"
              style={{
                fontFamily: "'Instrument Serif', serif",
                color: "#D6FF01",
              }}
            >
              Journey
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-md text-[13px] sm:text-[15px] text-white/50 font-medium"
          >
            Real moments from real workdays — no staged shoots, just the team
            building, shipping, and celebrating together.
          </motion.p>
        </div>

        <div className="mt-10 sm:mt-14 flex flex-col gap-4 sm:gap-5">
          <OfficeRow items={row1} delay={0} />
          <OfficeRow items={row2} delay={0.08} />
          <OfficeRow items={row3} delay={0.16} />
          <OfficeRow items={row4} delay={0.24} />
        </div>
      </div>
    </section>
  );
}