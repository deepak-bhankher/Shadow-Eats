import { useState } from "react";
import { motion } from "framer-motion";
import { MdImage } from "react-icons/md";

const GALLERY_ITEMS = [
  { id: "main", src: "journy1.png", alt: "Team working together", span: "hero" },
  { id: "m1", src: "journy2.png", alt: "Founders at a client meet", span: "medium" },
  { id: "m2", src: "journy7.png", alt: "Team collaborating on laptops", span: "medium" },
  { id: "s1", src: "journy4.png", alt: "Full team group photo", span: "small" },
  { id: "s2", src: "journy5.png", alt: "Team discussion", span: "small" },
  { id: "s3", src: "journy6.png", alt: "Working late at the desk", span: "small" },
  { id: "s4", src: "journy3.png", alt: "Team celebrating a win", span: "small" },
];

function ImageTile({ item, className = "", isMain = false }) {
  const [failed, setFailed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className={`group relative overflow-hidden rounded-[24px] sm:rounded-[28px] bg-[#0a0a0a] ${className}`}
    >
      {!failed && item.src ? (
        <img
          src={item.src}
          alt={item.alt}
          onError={() => setFailed(true)}
          draggable={false}
          className={`h-full w-full object-cover transition-all duration-500 ease-out group-hover:scale-[1.06] ${
            isMain
              ? "grayscale-[85%] contrast-[1.05] group-hover:grayscale-0"
              : ""
          }`}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#111111] text-white/25">
          <MdImage size={26} />
          <span className="text-[10px] sm:text-[11px] font-medium tracking-wide text-white/30 text-center px-2">
            {item.alt}
          </span>
        </div>
      )}

      {/* dark base wash so lime border reads clean on any photo */}
      <div className="pointer-events-none absolute inset-0 rounded-[24px] sm:rounded-[28px] ring-1 ring-inset ring-white/10 transition-all duration-500 group-hover:ring-2" />

      {/* bottom gradient for legibility if a caption is ever added */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* corner glow accent on hover */}
      <div
        className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
        style={{ background: "#D6FF01" }}
      />
    </motion.div>
  );
}

export default function Home6() {
  const main = GALLERY_ITEMS.find((i) => i.span === "hero");
  const mediums = GALLERY_ITEMS.filter((i) => i.span === "medium");
  const smalls = GALLERY_ITEMS.filter((i) => i.span === "small");

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

        {/* Premium bento grid: 1 hero + 2 medium + 4 small */}
        <div className="mt-10 sm:mt-14 md:grid md:grid-cols-4 md:grid-rows-4 md:gap-5 md:h-[760px] lg:h-[820px]">
          {/* Hero — biggest tile, left column, full height, black & white */}
          {main && (
            <ImageTile
              item={main}
              isMain
              className="mb-4 sm:mb-5 md:mb-0 aspect-[4/5] md:aspect-auto md:h-full
                md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-5"
            />
          )}

          {/* Medium pair — top of right column, full color */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5 md:contents">
            {mediums.map((item) => (
              <ImageTile
                key={item.id}
                item={item}
                className="aspect-[4/3] md:aspect-auto md:h-full
                  md:col-span-1 md:row-start-1 md:row-end-3"
              />
            ))}
          </div>

          {/* Small quad — bottom of right column, full color */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5 md:contents">
            {smalls.map((item) => (
              <ImageTile
                key={item.id}
                item={item}
                className="aspect-square md:aspect-auto md:h-full
                  md:col-span-1 md:row-span-1"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}