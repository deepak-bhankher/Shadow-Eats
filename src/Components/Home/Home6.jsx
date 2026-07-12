import { useState } from "react";
import { motion } from "framer-motion";
import { MdImage } from "react-icons/md";


 
const GALLERY_ITEMS = [
  { id: "r1a", src: "journy1.png", alt: "Team working together", row: 1, weight: 2 },
  { id: "r1b", src: "journy2.png", alt: "Founders at a client meet", row: 1, weight: 1 },
  { id: "r1c", src: "journy.png", alt: "Team collaborating on laptops", row: 1, weight: 1 },

  { id: "r2a", src: "journy4.png", alt: "Full team group photo", row: 2, weight: 1 },
  { id: "r2b", src: "journy6.png", alt: "Team discussion", row: 2, weight: 1 },
  { id: "r2c", src: "journy5.png", alt: "Working late at the desk", row: 2, weight: 2 },
];

function ImageTile({ item, weightClass = "flex-1" }) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-[18px] sm:rounded-[22px] md:rounded-[26px]
        bg-[#0a0a0a] shadow-[0_14px_36px_rgba(0,0,0,0.14)] ${weightClass}`}
    >
      {!failed && item.src ? (
        <img
          src={item.src}
          alt={item.alt}
          onError={() => setFailed(true)}
          draggable={false}
          className="h-full w-full object-cover hover:scale-105 transition-all duration-300"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#111111] text-white/25">
          <MdImage size={22} />
          <span className="text-[10px] font-medium tracking-wide text-white/30 text-center px-2">
            {item.alt}
          </span>
        </div>
      )}
    </div>
  );
}

function GalleryRow({ items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="flex gap-4 sm:gap-5 h-[190px] xs:h-[220px] sm:h-[280px] md:h-[360px] lg:h-[410px]"
    >
      {items.map((item) => (
        <ImageTile
          key={item.id}
          item={item}
          weightClass={item.weight === 2 ? "flex-[2]" : "flex-1"}
        />
      ))}
    </motion.div>
  );
}

export default function Home6() {
  const row1 = GALLERY_ITEMS.filter((i) => i.row === 1);
  const row2 = GALLERY_ITEMS.filter((i) => i.row === 2);
  const row3 = GALLERY_ITEMS.filter((i) => i.row === 3);

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 md:py-28 overflow-hidden">
      {/* faint texture accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#D6FF01]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-black/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center font-semibold tracking-tight text-[#0a0a0a]
            text-[28px] leading-[1.15] xs:text-[32px] sm:text-[44px] md:text-[54px]"
        >
          Snapshots of Our{" "}
          <span className="relative inline-block whitespace-nowrap">
            <span
              className="absolute inset-x-[-6px] top-[18%] bottom-[6%] -rotate-1 rounded-lg"
              style={{ background: "#0a0a0a" }}
            />
            <span className="relative px-2" style={{ color: "#D6FF01" }}>
              Journey
            </span>
          </span>
        </motion.h2>

        <p className="mx-auto mt-4 max-w-md text-center text-[13px] sm:text-[15px] text-black/50 font-medium">
          A few moments from the studio floor — late nights, client wins, and
          the team behind every menu.
        </p>

        {/* Gallery: mirrored rows, no single hero, no hover animation */}
        <div className="mt-10 sm:mt-14 flex flex-col gap-4 sm:gap-5">
          <GalleryRow items={row1} />
          <GalleryRow items={row2} />
          {row3.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="h-[160px] xs:h-[190px] sm:h-[240px] md:h-[300px] lg:h-[340px]"
            >
              <ImageTile item={row3[0]} weightClass="flex-1 w-full h-full" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}