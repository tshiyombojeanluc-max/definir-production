"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { ShinyButton } from "@/components/ui/shiny-button";

const PROJECT_TYPES = [
  "Photography",
  "Video Production",
  "Content Creation",
  "Full Cultural Campaign",
  "Documentary",
  "Heritage Project",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: send to an API route or service
    setSubmitted(true);
  };

  return (
    <div className="bg-[#080808] text-[#f0ede6]">
      {/* ── Header ────────────────────────────────────────── */}
      <section
        className="pt-40 pb-20 px-6"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 50%, #0d1f17 0%, #080808 70%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-[#7a7570] text-[9px] tracking-[0.4em] uppercase mb-4">
              Get In Touch
            </p>
            <h1
              className="text-[clamp(2.5rem,7vw,5.5rem)] leading-none text-[#f0ede6]"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
                fontWeight: 300,
              }}
            >
              Let&rsquo;s Tell Your
              <br />
              Story Together
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-[#7a7570] text-sm mt-6 max-w-md leading-relaxed">
              Tell us about your project. We&rsquo;ll get back to you within 48
              hours with our thoughts on how we can help document, preserve, and
              share your story.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Form + Info ───────────────────────────────────── */}
      <section className="py-16 px-6 border-t border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            <FadeIn>
              {submitted ? (
                <div className="py-20 text-center">
                  <p
                    className="text-[#4a7c59] text-5xl mb-6"
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontStyle: "italic",
                    }}
                  >
                    Thank you.
                  </p>
                  <p className="text-[#7a7570] text-sm leading-relaxed max-w-sm mx-auto">
                    We&rsquo;ve received your message and will be in touch
                    within 48 hours. In the meantime, explore{" "}
                    <a
                      href="/work"
                      className="text-[#f0ede6] hover:text-[#b8965a] transition-colors"
                    >
                      our work
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Name row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[#7a7570] text-[9px] tracking-[0.3em] uppercase">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={form.firstName}
                        onChange={handleChange}
                        className="bg-transparent border-b border-[#1e1e1e] focus:border-[#2f5440] text-[#f0ede6] text-sm py-3 outline-none transition-colors duration-300 placeholder:text-[#3a3a3a]"
                        placeholder="Your first name"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[#7a7570] text-[9px] tracking-[0.3em] uppercase">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={form.lastName}
                        onChange={handleChange}
                        className="bg-transparent border-b border-[#1e1e1e] focus:border-[#2f5440] text-[#f0ede6] text-sm py-3 outline-none transition-colors duration-300 placeholder:text-[#3a3a3a]"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[#7a7570] text-[9px] tracking-[0.3em] uppercase">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="bg-transparent border-b border-[#1e1e1e] focus:border-[#2f5440] text-[#f0ede6] text-sm py-3 outline-none transition-colors duration-300 placeholder:text-[#3a3a3a]"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[#7a7570] text-[9px] tracking-[0.3em] uppercase">
                      Phone{" "}
                      <span className="text-[#3a3a3a] normal-case tracking-normal">
                        (optional)
                      </span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="bg-transparent border-b border-[#1e1e1e] focus:border-[#2f5440] text-[#f0ede6] text-sm py-3 outline-none transition-colors duration-300 placeholder:text-[#3a3a3a]"
                      placeholder="+27 ..."
                    />
                  </div>

                  {/* Project type */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[#7a7570] text-[9px] tracking-[0.3em] uppercase">
                      Project Type *
                    </label>
                    <select
                      name="projectType"
                      required
                      value={form.projectType}
                      onChange={handleChange}
                      className="bg-[#080808] border-b border-[#1e1e1e] focus:border-[#2f5440] text-[#f0ede6] text-sm py-3 outline-none transition-colors duration-300 cursor-pointer appearance-none"
                    >
                      <option value="" disabled className="text-[#3a3a3a]">
                        Select a service
                      </option>
                      {PROJECT_TYPES.map((t) => (
                        <option key={t} value={t} className="bg-[#0f0f0f]">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[#7a7570] text-[9px] tracking-[0.3em] uppercase">
                      Tell Us About Your Project *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className="bg-transparent border-b border-[#1e1e1e] focus:border-[#2f5440] text-[#f0ede6] text-sm py-3 outline-none transition-colors duration-300 resize-none placeholder:text-[#3a3a3a]"
                      placeholder="Tell us about the story you want to tell, the community involved, the timeline, and what matters most to you about this project…"
                    />
                  </div>

                  <div className="mt-2">
                    <ShinyButton>Submit Inquiry</ShinyButton>
                  </div>
                </form>
              )}
            </FadeIn>
          </div>

          {/* Contact info sidebar */}
          <div className="lg:col-span-4 lg:col-start-9">
            <FadeIn delay={0.2}>
              <div className="sticky top-28 flex flex-col gap-10">
                {/* Direct contact */}
                <div>
                  <p className="text-[#7a7570] text-[9px] tracking-[0.4em] uppercase mb-5">
                    Direct Contact
                  </p>
                  <div className="flex flex-col gap-4">
                    <div>
                      <p className="text-[#4a4540] text-[9px] tracking-[0.2em] uppercase mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:assistant.definir@gmail.com"
                        className="text-[#f0ede6] text-sm hover:text-[#b8965a] transition-colors duration-300"
                      >
                        assistant.definir@gmail.com
                      </a>
                    </div>
                    <div>
                      <p className="text-[#4a4540] text-[9px] tracking-[0.2em] uppercase mb-1">
                        Phone
                      </p>
                      <a
                        href="tel:0745761648"
                        className="block text-[#f0ede6] text-sm hover:text-[#f0ede6]/70 transition-colors duration-300"
                      >
                        074 576 1648
                      </a>
                      <a
                        href="tel:0671057588"
                        className="block text-[#f0ede6] text-sm hover:text-[#f0ede6]/70 transition-colors duration-300"
                      >
                        067 105 7588
                      </a>
                    </div>
                  </div>
                </div>

                {/* What to expect */}
                <div className="border-t border-[#1e1e1e] pt-8">
                  <p className="text-[#7a7570] text-[9px] tracking-[0.4em] uppercase mb-5">
                    What to Expect
                  </p>
                  <ul className="flex flex-col gap-4">
                    {[
                      "Response within 48 hours",
                      "Cultural context conversation",
                      "Proposal with scope + timeline",
                      "No upfront fees to evaluate",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="w-px h-3 bg-[#2f5440] flex-shrink-0 mt-1.5" />
                        <span className="text-[#7a7570] text-xs leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Industries */}
                <div className="border-t border-[#1e1e1e] pt-8">
                  <p className="text-[#7a7570] text-[9px] tracking-[0.4em] uppercase mb-5">
                    Best Fit For
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Arts & Culture",
                      "Education",
                      "Media",
                      "Heritage",
                      "Nonprofits",
                      "Purpose Brands",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="text-[8px] tracking-[0.15em] uppercase text-[#4a7c59] border border-[#2f5440]/30 px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
