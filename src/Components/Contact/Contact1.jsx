import { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const glassInput =
  "w-full px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl text-white text-sm sm:text-base placeholder:text-white/30 outline-none transition-all duration-300 bg-white/[0.06] border border-white/10 focus:border-white/25 focus:bg-white/[0.09]";

function FormField({ label, children, delay = 0 }) {
  return (
    <motion.div
      {...fadeUp(delay)}
      className="flex flex-col gap-2.5"
    >
      <label className="text-white/60 text-xs uppercase tracking-[0.1em] font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
        {label}<span className="text-white/30 ml-0.5">*</span>
      </label>
      {children}
    </motion.div>
  );
}

export default function Contact1() {
  const [form, setForm] = useState({ name: "", email: "", contact: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-black">
      {/* Hero */}
      <section className="relative w-full min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
        <img src="contact_bg.png" alt="contact" className="absolute inset-0 w-full h-full object-cover grayscale" />
        <div className="absolute inset-0 bg-black/60" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.85) 100%)" }}
        />

        <div className="relative max-w-2xl mx-auto flex flex-col items-center text-center gap-4 sm:gap-5">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="text-white font-semibold leading-tight text-[26px] xs:text-[30px] sm:text-[38px] md:text-[46px] tracking-tight"
          >
            Let's make something
            <br />
            <span style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontStyle: "italic", fontSize: "1.08em" }}>
              awesome together
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
            className="text-white/55 text-sm sm:text-base leading-relaxed max-w-md"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 300, letterSpacing: "0.02em" }}
          >
            Drop us a line, or give us a heads up if you're interested in joining us
          </motion.p>
        </div>
      </section>

      {/* Form */}
      <section className="px-6 py-16 sm:py-20">
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto flex flex-col gap-6 sm:gap-7">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7">
            <FormField label="Name" delay={0.1}>
              <input
                type="text" name="name" value={form.name}
                onChange={handleChange} placeholder="Your Name" required
                className={glassInput}
              />
            </FormField>

            <FormField label="Email" delay={0.15}>
              <input
                type="email" name="email" value={form.email}
                onChange={handleChange} placeholder="example@email.com" required
                className={glassInput}
              />
            </FormField>
          </div>

          <FormField label="Contact Number" delay={0.2}>
            <input
              type="tel" name="contact" value={form.contact}
              onChange={handleChange} placeholder="Your Contact Number" required
              className={glassInput}
            />
          </FormField>

          <FormField label="Your Message" delay={0.25}>
            <textarea
              name="message" value={form.message}
              onChange={handleChange} placeholder="Your Message Here" required rows={6}
              className="w-full px-5 sm:px-6 py-4 sm:py-5 rounded-2xl text-white text-sm sm:text-base
                placeholder:text-white/30 outline-none transition-all duration-300 resize-none
                bg-white/[0.06] border border-white/10 focus:border-white/25 focus:bg-white/[0.09]"
            />
          </FormField>

          <motion.div {...fadeUp(0.3)} className="flex justify-center mt-2">
            <motion.button
              type="submit"
              whileHover={{ y: -3, boxShadow: "0 20px 40px rgba(255,255,255,0.15), inset 0 1px 0 rgba(255,255,255,0.8)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="px-12 sm:px-16 py-3.5 sm:py-4 rounded-xl text-white hover:bg-white hover:text-black transition-all duration-300  font-semibold text-sm sm:text-base cursor-pointer "
              style={{
                fontFamily: "Inter, sans-serif",
                boxShadow: "0 10px 28px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.9)",
                letterSpacing: "0.04em",
              }}
            >
              {submitted ? "✓ Thank You!" : "Submit Form"}
            </motion.button>
          </motion.div>

        </form>
      </section>
    </div>
  );
}
