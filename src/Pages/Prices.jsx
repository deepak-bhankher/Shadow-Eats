import { motion } from "framer-motion";
import { useState } from "react";
import { FiArrowRight, FiCheck, FiX } from "react-icons/fi";
import { PiCrownSimpleFill } from "react-icons/pi";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

const DURATIONS = ["1 mo", "3 mo", "6 mo", "12 mo"];

// Basic plan only ever runs on a single, fixed duration — no toggle needed.
const BASIC_DURATION = "1 Month";

const ACCENT = "#434343";
const ACCENT_TEXT_GRADIENT =
  "linear-gradient(90deg, #ffffff 0%, #a6a6a6 50%, #434343 100%)";


const BASELINE_FEATURES = [
  { label: "Menu Score Update" },
  { label: "Dedicated Account Manager" },
  { label: "Customer Review Management" },
  { label: "Priority Support", badge: { basic: "STANDARD", premium: "FAST" } },
  { label: "Detail Weekly Report" },
  { label: "Details Monthly Report" },
];

// Growth features — availability differs between Basic and Premium.
const GROWTH_FEATURES = [
  { label: "Menu Optimization", basic: true },
  { label: "Profile Enhancement", basic: false },
  { label: "Weekly Consultant Calls", basic: true },
  { label: "Marketing Insights", basic: false },
  { label: "Boosted Promotions", basic: false },
  { label: "Zomato Ad Campaign Management", basic: false },
  { label: "Festival Specific Promotions", basic: false },
  { label: "Custom Campaign Ideas", basic: false },
  { label: "Weekly Menu Insights", basic: true },
  { label: "Target Audience Analysis", basic: true },
  { label: "Analytics and Insights Dashboards", basic: false },
  { label: "Personalized Growth Strategies", basic: true },
  { label: "Daily Monitoring of Progress", basic: false },
];

const WHATSAPP_NUMBER = "911234567890"; // replace with the real business number

function DurationToggle({ value, onChange, premium }) {
  return (
    <div
      className={`grid grid-cols-4 gap-1 p-1 rounded-2xl ${
        premium ? "bg-white/10" : "bg-white/[0.04]"
      }`}
    >
      {DURATIONS.map((d) => {
        const active = d === value;
        return (
          <button
            key={d}
            onClick={() => onChange(d)}
            className={`relative py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-200 ${
              active ? "text-white" : "text-white/45 hover:text-white/70"
            }`}
          >
            {active && (
              <motion.span
                layoutId={`duration-pill-${premium ? "premium" : "basic"}`}
                className="absolute inset-0 rounded-xl"
                style={{ background: ACCENT }}
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative">{d}</span>
          </button>
        );
      })}
    </div>
  );
}

// Basic plan just shows its single fixed duration as a plain pill —
// no interactive toggle since there's nothing to switch between.
function FixedDurationBadge({ value }) {
  return (
    <div className="p-1 rounded-2xl bg-white/[0.04]">
      <div className="py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-center text-black bg-white/90">
        {value}
      </div>
    </div>
  );
}

function FeatureRow({ label, available, badgeText, premium }) {
  return (
    <div className="flex items-center gap-3 py-2">
      {badgeText ? (
        <span
          className="shrink-0 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md"
          style={{
            background: premium ? "rgba(67,67,67,0.35)" : "rgba(255,255,255,0.08)",
            color: premium ? "#ffffff" : "rgba(255,255,255,0.5)",
          }}
        >
          {badgeText}
        </span>
      ) : available ? (
        <FiCheck className="shrink-0" size={17} style={{ color: "#a6a6a6" }} />
      ) : (
        <FiX className="shrink-0 text-white/20" size={17} />
      )}
      <span
        className={`text-[13px] sm:text-sm ${
          available || badgeText ? "text-white/85" : "text-white/30"
        } ${!available && !badgeText ? "" : "font-medium"}`}
      >
        {label}
      </span>
    </div>
  );
}

function PlanCard({ plan }) {
  const isPremium = plan === "premium";
  const [duration, setDuration] = useState("1 mo");
  const activeDuration = isPremium ? duration : BASIC_DURATION;

  const waMessage = encodeURIComponent(
    `Hi Shadow Eats! I'm interested in the ${isPremium ? "Premium" : "Basic"} plan (${activeDuration} plan). Could you share a custom quote?`
  );

  return (
    <motion.div
      {...fadeUp(isPremium ? 0.12 : 0)}
      className={`relative rounded-[28px] p-6 sm:p-8 flex flex-col gap-6 ${
        isPremium ? "lg:-mt-4 lg:mb-4" : ""
      }`}
      style={{
        background: isPremium
          ? "linear-gradient(160deg, rgba(67,67,67,0.28) 0%, rgba(20,20,20,0.95) 55%, rgba(0,0,0,0.98) 100%)"
          : "rgba(255,255,255,0.03)",
        border: isPremium
          ? "1px solid rgba(67,67,67,0.7)"
          : "1px solid rgba(255,255,255,0.08)",
        boxShadow: isPremium
          ? "0 30px 90px rgba(67,67,67,0.25), inset 0 1px 0 rgba(255,255,255,0.08)"
          : "0 20px 60px rgba(0,0,0,0.4)",
      }}
    >
      {isPremium && (
        <span
          className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wide px-4 py-1.5 rounded-full whitespace-nowrap"
          style={{
            background: ACCENT,
            color: "#ffffff",
            boxShadow: "0 8px 24px rgba(67,67,67,0.6)",
          }}
        >
          <PiCrownSimpleFill size={13} />
          Most Popular
        </span>
      )}

      {/* header */}
      <div className="flex flex-col gap-1.5">
        <h3 className="text-white text-xl sm:text-2xl font-bold">
          {isPremium ? "Premium" : "Basic"}
        </h3>
        <p className="text-white/45 text-sm">
          {isPremium
            ? "Everything you need to dominate the market."
            : "Perfect for getting started on platforms."}
        </p>
      </div>

      {/* duration */}
      <div className="flex flex-col gap-3">
        <span className="text-[11px] font-bold uppercase tracking-widest text-white/40">
          Subscription Duration
        </span>
        {isPremium ? (
          <DurationToggle value={duration} onChange={setDuration} premium={isPremium} />
        ) : (
          <FixedDurationBadge value={BASIC_DURATION} />
        )}
      </div>

      {/* CTA */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-semibold text-sm sm:text-base text-white transition-all duration-200 hover:scale-[1.02]"
        style={{
          background: "#0d0d0d",
          border: isPremium
            ? "1px solid rgba(67,67,67,0.7)"
            : "1px solid rgba(255,255,255,0.12)",
          boxShadow: isPremium ? "0 0 0 1px rgba(67,67,67,0.2) inset" : "none",
        }}
      >
        Custom Quote on WhatsApp
        <FiArrowRight
          size={16}
          style={{ color: isPremium ? "#a6a6a6" : "rgba(255,255,255,0.7)" }}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </a>

      {/* divider */}
      <div className="h-px w-full bg-white/10" />

      {/* features */}
      <div className="flex flex-col">
        {BASELINE_FEATURES.map((f) => (
          <FeatureRow
            key={f.label}
            label={f.label}
            available={true}
            badgeText={f.badge ? f.badge[isPremium ? "premium" : "basic"] : null}
            premium={isPremium}
          />
        ))}
        <div className="h-px w-full bg-white/10 my-2" />
        {GROWTH_FEATURES.map((f) => (
          <FeatureRow
            key={f.label}
            label={f.label}
            available={isPremium ? true : f.basic}
            premium={isPremium}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Prices() {
  return (
    <section id="pricing" className="bg-black py-20 sm:py-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-14 sm:gap-20">
        {/* heading */}
        <motion.div {...fadeUp(0)} className="flex flex-col items-center gap-4 text-center">
          <span
            className="text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full"
            style={{
              color: "white",
              border: "1px solid rgba(67,67,67,0.6)",
            }}
          >
            Pricing Plans
          </span>

          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Choose Your{" "}
            <span
             style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: "1.15em",
                backgroundImage:
                  "linear-gradient(90deg, #ffffff 0%, #a6a6a6 50%, #434343 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Growth Plan
            </span>
          </h1>

          <p className="text-white/50 text-sm sm:text-base md:text-lg max-w-xl">
            Supercharge your restaurant's online visibility and performance on{" "}
            <span className="text-[#e23744] font-semibold">Zomato</span> &{" "}
            <span className="text-[#fc8019] font-semibold">Swiggy</span>.
          </p>
        </motion.div>

        {/* plans */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
          <PlanCard plan="basic" />
          <PlanCard plan="premium" />   
        </div>
      </div>
    </section>
  );
}