import Link from "next/link";
import { ShinyButton } from "@/components/ui/shiny-button";
import { FadeIn } from "@/components/ui/fade-in";
import { Scroller } from "@/components/ui/scroller-1";
import { GallerySection } from "@/components/gallery-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Definir Production — Defining Art Our Way",
  description:
    "An intergenerational collective of storytellers documenting culture, preserving heritage, and connecting communities through photography, video production, and content creation.",
};

const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1741332966416-414d8a5b8887?w=600&auto=format&fit=crop&q=60",
    alt: "Cultural documentation",
  },
  {
    src: "https://images.unsplash.com/photo-1754769440490-2eb64d715775?q=80&w=1113&auto=format&fit=crop",
    alt: "Heritage photography",
  },
  {
    src: "https://images.unsplash.com/photo-1758640920659-0bb864175983?w=600&auto=format&fit=crop&q=60",
    alt: "Community storytelling",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1758367454070-731d3cc11774?w=600&auto=format&fit=crop&q=60",
    alt: "Visual narrative",
  },
  {
    src: "https://images.unsplash.com/photo-1746023841657-e5cd7cc90d2c?w=600&auto=format&fit=crop&q=60",
    alt: "Cultural celebration",
  },
  {
    src: "https://images.unsplash.com/photo-1741715661559-6149723ea89a?w=600&auto=format&fit=crop&q=60",
    alt: "Identity documentation",
  },
  {
    src: "https://images.unsplash.com/photo-1725878746053-407492aa4034?w=600&auto=format&fit=crop&q=60",
    alt: "Archival photography",
  },
  {
    src: "https://images.unsplash.com/photo-1752588975168-d2d7965a6d64?w=600&auto=format&fit=crop&q=60",
    alt: "Heritage preservation",
  },
];

const SERVICES = [
  {
    num: "01",
    title: "Photography",
    desc: "Telling stories through images. Cultural, documentary, archival. Every frame is a chapter of history.",
    tags: ["Portrait", "Documentary", "Editorial", "Cultural"],
  },
  {
    num: "02",
    title: "Video Production",
    desc: "Visual narratives that connect communities across generations. Not advertising — documentation.",
    tags: ["Documentary", "Docuseries", "Cultural Segments", "BTS"],
  },
  {
    num: "03",
    title: "Content Creation",
    desc: "Purposeful content built to matter decades from now. Archival quality, cultural significance.",
    tags: ["Historical", "Heritage", "Identity", "Campaigns"],
  },
];

const DIFFERENTIATORS = [
  {
    num: "01",
    title: "Intergenerational by Design",
    desc: "Our collective spans ages 8–50. We don't guess how different generations think — we have those voices in the room.",
  },
  {
    num: "02",
    title: "Storytelling Platform",
    desc: "We focus on documenting culture, not selling products. Our brief: make this matter 20 years from now.",
  },
  {
    num: "03",
    title: "Culture First",
    desc: "We choose projects based on cultural significance, not ad spend. Black History Month, Heritage Day, Independence Days.",
  },
  {
    num: "04",
    title: "We Preserve",
    desc: "Our work is archival. We treat every project as a cultural time capsule for the next generation to learn from.",
  },
  {
    num: "05",
    title: "Community Access",
    desc: "We're rooted in the communities we document. The trust is already there. We get stories others can't.",
  },
];

const INDUSTRIES = [
  {
    title: "Arts, Culture & Heritage",
    desc: "Museums, cultural centers, heritage foundations, festivals.",
    projects: "Black History Month · Heritage Day · Sarafina · Independence Day",
  },
  {
    title: "Education & Nonprofits",
    desc: "Documentary content that resonates across generations.",
    projects: "Documentary shorts · NGO impact stories · Historical explainers",
  },
  {
    title: "Media & Entertainment",
    desc: "Authentic cultural narratives for streaming and broadcast.",
    projects: "Docuseries · Cultural segments · Behind-the-scenes features",
  },
  {
    title: "Brands with Purpose",
    desc: "Only if the brand lets us lead with authenticity, not sales copy.",
    projects: "Heritage campaigns · Cultural activations · Identity storytelling",
  },
];

export default function Home() {
  return (
    <div className="bg-[#080808] text-[#f0ede6]">
      {/* ── Hero ──────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, #0d1f17 0%, #080808 70%)",
        }}
      >
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#f0ede6 1px, transparent 1px), linear-gradient(90deg, #f0ede6 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Brand label */}
          <p className="text-[#7a7570] text-[9px] tracking-[0.4em] uppercase mb-8">
            Definir Production · Est. 30 March 2024
          </p>

          {/* Main heading */}
          <h1
            className="text-[clamp(3rem,9vw,7rem)] leading-[1.0] text-[#f0ede6] mb-8"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontWeight: 300,
            }}
          >
            Defining Art
            <br />
            Our Way
          </h1>

          {/* Tagline */}
          <p className="text-[#7a7570] text-sm md:text-base max-w-lg mx-auto leading-relaxed mb-12">
            An intergenerational collective of storytellers.
            <br />
            We document culture. We preserve heritage.
            <br />
            We connect communities.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ShinyButton>
              <Link href="/work" className="block">
                View Our Work
              </Link>
            </ShinyButton>
            <Link
              href="/contact"
              className="text-[9px] tracking-[0.3em] uppercase px-8 py-3.5 border border-[#2f5440] text-[#4a7c59] hover:bg-[#2f5440] hover:text-[#f0ede6] transition-all duration-300"
            >
              Start a Project
            </Link>
          </div>

          {/* Services micro-label */}
          <div className="mt-16 flex items-center justify-center gap-6">
            {["Photography", "Video Production", "Content Creation"].map(
              (s, i) => (
                <span key={s} className="flex items-center gap-3">
                  {i > 0 && (
                    <span className="w-px h-3 bg-[#2f5440] inline-block" />
                  )}
                  <span className="text-[#4a4540] text-[9px] tracking-[0.2em] uppercase">
                    {s}
                  </span>
                </span>
              )
            )}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[#4a4540] text-[8px] tracking-[0.4em] uppercase">
            Scroll
          </span>
          <div
            className="w-px h-8 bg-[#2f5440]"
            style={{ animation: "scroll-bounce 1.5s ease-in-out infinite" }}
          />
        </div>
      </section>

      {/* ── 3D Gallery ────────────────────────────────────── */}
      <section className="relative h-screen overflow-hidden">
        <GallerySection
          images={GALLERY_IMAGES}
          speed={1.2}
          visibleCount={12}
          className="absolute inset-0 w-full h-full"
          fadeSettings={{
            fadeIn: { start: 0.05, end: 0.25 },
            fadeOut: { start: 0.4, end: 0.43 },
          }}
          blurSettings={{
            blurIn: { start: 0.0, end: 0.1 },
            blurOut: { start: 0.4, end: 0.43 },
            maxBlur: 8.0,
          }}
        />

        {/* Text overlay */}
        <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-10 md:p-16">
          <div />
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[#f0ede6]/40 text-[9px] tracking-[0.4em] uppercase mb-2">
                Scroll · Arrow Keys · Touch
              </p>
              <h2
                className="text-[clamp(2.5rem,7vw,5.5rem)] text-[#f0ede6] leading-none"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                  fontWeight: 300,
                }}
              >
                The Work
              </h2>
            </div>
            <Link
              href="/work"
              className="pointer-events-auto text-[9px] tracking-[0.3em] uppercase px-6 py-3 border border-[#f0ede6]/20 text-[#f0ede6]/60 hover:border-[#f0ede6]/60 hover:text-[#f0ede6] transition-all duration-300 hidden md:block"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* ── Manifesto ─────────────────────────────────────── */}
      <section className="py-32 md:py-48 px-6 border-t border-[#1e1e1e]">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-[#7a7570] text-[9px] tracking-[0.4em] uppercase mb-8">
              Our Belief
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <blockquote
              className="text-[clamp(2rem,6vw,5rem)] text-[#f0ede6] leading-[1.1] mb-12"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
                fontWeight: 300,
              }}
            >
              &ldquo;Make this matter
              <br />
              20 years from now.&rdquo;
            </blockquote>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="max-w-2xl border-l-2 border-[#2f5440] pl-6">
              <p className="text-[#7a7570] text-sm leading-relaxed">
                Unlike traditional agencies, Definir Production is an
                intergenerational collective creating cultural stories that
                last — not just campaigns that trend. Competitors focus on
                selling products. We focus on documenting culture.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Services Teaser ───────────────────────────────── */}
      <section className="py-24 px-6 border-t border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
              <div>
                <p className="text-[#7a7570] text-[9px] tracking-[0.4em] uppercase mb-3">
                  Our Craft
                </p>
                <h2
                  className="text-3xl md:text-4xl text-[#f0ede6]"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontStyle: "italic",
                  }}
                >
                  Three disciplines.
                  <br />
                  One mission.
                </h2>
              </div>
              <Link
                href="/services"
                className="text-[9px] tracking-[0.3em] uppercase text-[#4a7c59] hover:text-[#f0ede6] transition-colors duration-300 pb-px border-b border-[#4a7c59]/40 hover:border-[#f0ede6]/40"
              >
                View All Services
              </Link>
            </div>
          </FadeIn>

          {/* Mobile: Scroller; Desktop: 3-col grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-px bg-[#1e1e1e]">
            {SERVICES.map((s) => (
              <FadeIn key={s.num} delay={0.1 * parseInt(s.num)}>
                <div className="bg-[#080808] p-10 flex flex-col gap-6">
                  <span className="text-[#2f5440] text-[10px] tracking-[0.3em] uppercase">
                    {s.num}
                  </span>
                  <h3
                    className="text-2xl text-[#f0ede6]"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-[#7a7570] text-sm leading-relaxed flex-1">
                    {s.desc}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[8px] tracking-[0.2em] uppercase text-[#4a4540] border border-[#1e1e1e] px-2 py-0.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Mobile scroller */}
          <div className="md:hidden">
            <Scroller overflow="x" height="auto" withButtons childrenContainerClassName="gap-4">
              {SERVICES.map((s) => (
                <div
                  key={s.num}
                  className="bg-[#0f0f0f] border border-[#1e1e1e] p-8 w-72 flex-shrink-0 flex flex-col gap-5"
                >
                  <span className="text-[#2f5440] text-[10px] tracking-[0.3em] uppercase">
                    {s.num}
                  </span>
                  <h3
                    className="text-xl text-[#f0ede6]"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-[#7a7570] text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </Scroller>
          </div>
        </div>
      </section>

      {/* ── What Sets Us Apart ────────────────────────────── */}
      <section className="py-24 px-6 border-t border-[#1e1e1e] bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-[#7a7570] text-[9px] tracking-[0.4em] uppercase mb-3">
              What Sets Us Apart
            </p>
            <h2
              className="text-3xl md:text-4xl text-[#f0ede6] mb-16"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
              }}
            >
              Five reasons we&rsquo;re different.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1e1e1e]">
            {DIFFERENTIATORS.map((d, i) => (
              <FadeIn key={d.num} delay={0.08 * i}>
                <div className="bg-[#0a0a0a] p-8 flex gap-5">
                  <span
                    className="text-[#2f5440] text-xs mt-0.5 flex-shrink-0"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {d.num}
                  </span>
                  <div>
                    <h3 className="text-[#f0ede6] text-sm font-medium mb-2">
                      {d.title}
                    </h3>
                    <p className="text-[#7a7570] text-xs leading-relaxed">
                      {d.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries ────────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-[#7a7570] text-[9px] tracking-[0.4em] uppercase mb-3">
              Industries We Serve
            </p>
            <h2
              className="text-3xl md:text-4xl text-[#f0ede6] mb-4"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
              }}
            >
              We partner with organizations
              <br />
              that value culture as more than a trend.
            </h2>
            <p className="text-[#7a7570] text-sm mb-16 max-w-xl">
              Our work best serves arts, education, media, and purpose-led brands
              looking to document history and connect with communities.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1e1e1e]">
            {INDUSTRIES.map((ind, i) => (
              <FadeIn key={ind.title} delay={0.1 * i}>
                <div className="bg-[#080808] p-10">
                  <h3
                    className="text-xl text-[#f0ede6] mb-3"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {ind.title}
                  </h3>
                  <p className="text-[#7a7570] text-sm leading-relaxed mb-4">
                    {ind.desc}
                  </p>
                  <p className="text-[#4a4540] text-[10px] tracking-[0.15em]">
                    {ind.projects}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Strip ─────────────────────────────────────── */}
      <section
        className="py-32 px-6 border-t border-[#1e1e1e] text-center"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, #0d1f17 0%, #080808 70%)",
        }}
      >
        <FadeIn>
          <p className="text-[#7a7570] text-[9px] tracking-[0.4em] uppercase mb-6">
            Ready to Begin
          </p>
          <h2
            className="text-[clamp(2rem,5vw,4rem)] text-[#f0ede6] mb-10 max-w-2xl mx-auto leading-tight"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontWeight: 300,
            }}
          >
            Let&rsquo;s tell your story together.
          </h2>
          <ShinyButton>
            <Link href="/contact" className="block">
              Start a Project
            </Link>
          </ShinyButton>
        </FadeIn>
      </section>
    </div>
  );
}
