import { useState } from "react";
import { motion } from "framer-motion";
import { DarkSection, SectionBadge, SectionHeading, SectionSub, OrangeBtn, fadeUp } from "../Components/UI";
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from "react-icons/fi";

const CONTACT_INFO = [
  { icon: FiMail, label: "Email Us", value: "hello@shadoweats.com", sub: "We reply within 2 hours" },
  { icon: FiPhone, label: "Call Us", value: "+91 98765 43210", sub: "Mon–Sat, 9am–8pm" },
  { icon: FiMapPin, label: "Visit Us", value: "Mumbai, Maharashtra", sub: "Headquarters" },
  { icon: FiClock, label: "Support Hours", value: "24/7 Available", sub: "For urgent order issues" },
];

function Contact1() {
  return (
    <DarkSection className="pt-32 pb-20 sm:pt-40 sm:pb-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 flex flex-col items-center gap-4">
          <SectionBadge>Get In Touch</SectionBadge>
          <SectionHeading>We'd Love to<br /><span className="text-[#FF6B35]">Hear From You</span></SectionHeading>
          <SectionSub className="max-w-lg">Whether you're a customer, restaurant partner, or investor — our team is ready to help.</SectionSub>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CONTACT_INFO.map((c, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.08)}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl p-6 flex flex-col gap-3 border border-white/10 hover:border-orange-500/30 transition-all duration-300"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "rgba(255,107,53,0.12)", border: "1px solid rgba(255,107,53,0.25)" }}>
                <c.icon size={20} className="text-[#FF6B35]" />
              </div>
              <div>
                <div className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-1">{c.label}</div>
                <div className="text-white font-semibold text-sm">{c.value}</div>
                <div className="text-white/40 text-xs mt-0.5">{c.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </DarkSection>
  );
}

function Contact2() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const inputClass = (field) =>
    `w-full bg-transparent rounded-xl px-4 py-3.5 text-white text-sm outline-none border transition-all duration-300 placeholder:text-white/25 ${
      focused === field ? "border-orange-500/60 shadow-[0_0_0_3px_rgba(255,107,53,0.12)]" : "border-white/12 hover:border-white/20"
    }`;

  return (
    <DarkSection className="py-20 sm:py-28 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Form */}
        <motion.div {...fadeUp(0)} className="rounded-2xl p-8 border border-white/10" style={{ background: "rgba(255,255,255,0.04)" }}>
          <h3 className="text-white font-bold text-2xl mb-2">Send Us a Message</h3>
          <p className="text-white/50 text-sm mb-7">Fill out the form and we'll get back to you within 24 hours.</p>

          {sent && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-5 px-4 py-3 rounded-xl text-sm text-green-400 border border-green-500/30" style={{ background: "rgba(52,211,153,0.08)" }}>
              ✓ Message sent! We'll be in touch soon.
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input required className={inputClass("name")} placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} onFocus={() => setFocused("name")} onBlur={() => setFocused("")} />
              <input required type="email" className={inputClass("email")} placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} onFocus={() => setFocused("email")} onBlur={() => setFocused("")} />
            </div>
            <input required className={inputClass("subject")} placeholder="Subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} onFocus={() => setFocused("subject")} onBlur={() => setFocused("")} />
            <textarea required rows={5} className={inputClass("message") + " resize-none"} placeholder="Your message..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} onFocus={() => setFocused("message")} onBlur={() => setFocused("")} />
            <OrangeBtn className="self-start">
              <FiSend size={15} />
              Send Message
            </OrangeBtn>
          </form>
        </motion.div>

        {/* Map placeholder + extra info */}
        <div className="flex flex-col gap-5">
          <motion.div {...fadeUp(0.1)} className="rounded-2xl overflow-hidden border border-white/10 relative" style={{ height: 280, background: "rgba(255,255,255,0.04)" }}>
            {/* Decorative map placeholder */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "rgba(255,107,53,0.15)", border: "1px solid rgba(255,107,53,0.3)" }}>
                <FiMapPin size={28} className="text-[#FF6B35]" />
              </div>
              <div className="text-white font-semibold">Shadow Eats HQ</div>
              <div className="text-white/40 text-sm">Mumbai, Maharashtra, India</div>
            </div>
            {/* grid lines decoration */}
            <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,107,53,0.5)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </motion.div>

          <motion.div {...fadeUp(0.18)} className="rounded-2xl p-6 border border-white/10 flex flex-col gap-4" style={{ background: "rgba(255,255,255,0.04)" }}>
            <h4 className="text-white font-semibold">Frequently Asked</h4>
            {[
              { q: "How do I become a restaurant partner?", a: "Visit our Brands page and click 'Apply to Partner'. Our team will reach out within 48 hours." },
              { q: "What are your delivery hours?", a: "We operate 24/7 in most cities. Check the app for availability in your area." },
              { q: "How do I track my order?", a: "Real-time GPS tracking is available in the app from the moment your order is confirmed." },
            ].map((faq, i) => (
              <div key={i} className="border-t border-white/8 pt-3">
                <div className="text-white/80 text-sm font-medium mb-1">{faq.q}</div>
                <div className="text-white/45 text-xs leading-relaxed">{faq.a}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </DarkSection>
  );
}

export default function Contact() {
  return (
    <>
      <Contact1 />
      <Contact2 />
    </>
  );
}
