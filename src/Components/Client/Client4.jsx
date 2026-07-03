import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { FiPlay, FiPause } from "react-icons/fi";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

const REELS = [
  { name: "Namaste Thali", thumb: "reel1.png", video: "reel1.mp4" },
  { name: "Chaap Chariot", thumb: "reel2.png", video: "reel2.mp4" },
  { name: "Wokford", thumb: "reel3.png", video: "reel3.mp4" },
  { name: "Truly Ghee", thumb: "reel4.png", video: "reel4.mp4" },
  { name: "Paratha Ekdum", thumb: "reel5.png", video: "reel5.mp4" },
  { name: "Veer Ji", thumb: "reel6.png", video: "reel6.mp4" },
  { name: "Baraamda", thumb: "reel7.png", video: "reel7.mp4" },
  { name: "Dimsum Box", thumb: "reel8.png", video: "reel8.mp4" },
];

function ReelCard({ reel, index }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);

  const toggle = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <motion.div
      {...fadeUp(index * 0.06)}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={toggle}
      className="relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer group
        border border-white/10
        shadow-[0_16px_48px_rgba(0,0,0,0.6)]
        hover:shadow-[0_0_0_1.5px_rgba(255,255,255,0.35),0_24px_64px_rgba(255,255,255,0.07)]
        hover:border-white/30
        transition-all duration-300"
    >
      {/* thumbnail shown until video plays */}
      {!playing && (
        <img
          src={reel.thumb}
          alt={reel.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* video */}
      <video
        ref={videoRef}
        src={reel.video}
        loop
        playsInline
        muted
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          playing ? "opacity-100" : "opacity-0"
        }`}
        onEnded={() => setPlaying(false)}
      />

      {/* cinematic top gradient */}
      <div className="absolute inset-x-0 top-0 h-2/5 bg-gradient-to-b from-black/80 via-black/30 to-transparent pointer-events-none" />
      {/* bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

      {/* restaurant name tag — bottom left */}
      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-end justify-between pointer-events-none">
        <div className="flex flex-col gap-0.5">
          <span className="text-white font-bold text-sm sm:text-[15px] leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            {reel.name}
          </span>
          <span className="text-white/50 text-[10px] sm:text-xs font-medium tracking-wide uppercase">
            Restaurant Partner
          </span>
        </div>

        {/* shorts badge */}
        <span
          className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
          style={{
            background: "rgba(255,255,255,0.12)",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          Short
        </span>
      </div>

      {/* play / pause button */}
      <AnimatePresence>
        {(hovered || !playing) && (
          <motion.div
            key="ctrl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center
                border border-white/20 backdrop-blur-md"
              style={{
                background: "rgba(255,255,255,0.13)",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.3), 0 8px 32px rgba(0,0,0,0.4)",
              }}
            >
              {playing ? (
                <FiPause size={20} className="text-white" />
              ) : (
                <FiPlay size={20} className="text-white translate-x-[2px]" />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* playing indicator — top right dot */}
      {playing && (
        <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(255,0,0,0.8)] animate-pulse" />
      )}
    </motion.div>
  );
}

export default function Client4() {
  return (
    <section className="bg-black py-20 sm:py-28 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12 sm:gap-16">
        <motion.div {...fadeUp(0)} className="flex flex-col items-center gap-3">
          <span
            className="text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full"
            style={{
              background: "rgba(255,255,255,0.08)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            Partner Shorts
          </span>
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
            Reels From Our Restaurant Partners
          </h1>
          <p className="text-white/40 text-sm sm:text-base text-center max-w-md">
            Tap any card to play a short from our partner restaurants
          </p>
        </motion.div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5">
          {REELS.map((reel, i) => (
            <ReelCard key={reel.name} reel={reel} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
