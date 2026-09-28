import { ParallaxScrollFeatureSection } from "@/components/ui/parallax-scroll-feature-section";
import { FadeIn } from "@/components/ui/fade-in";
import { ShinyButton } from "@/components/ui/shiny-button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Photography, video production, and content creation — Definir Production's three disciplines for documenting culture and preserving heritage.",
};

const SERVICES = [
  {
    id: 1,
    title: "Photography",
    subtitle: "01 · Craft",
    description:
      "We tell stories through images. Not posed portraits or product shots — cultural documentation. Every frame is a chapter of history, an artefact built to outlast the moment it was taken. From community celebrations to archival editorial work, our photography carries the weight of the stories it preserves.",
    imageUrl:
      "https://images.unsplash.com/photo-1741332966416-414d8a5b8887?w=800&auto=format&fit=crop&q=80",
    reverse: false,
    tags: ["Portrait", "Documentary", "Editorial", "Cultural", "Archival"],
  },
  {
    id: 2,
    title: "Video Production",
    subtitle: "02 · Craft",
    description:
      "Visual narratives that connect communities across generations. We produce docuseries, cultural segments, and behind-the-scenes features for streaming platforms, broadcasters, and institutions who want authentic cultural narratives — not manufactured content. Our brief isn't 'make this go viral.' It's 'make this matter.'",
    imageUrl:
      "https://images.unsplash.com/photo-1754769440490-2eb64d715775?q=80&w=1113&auto=format&fit=crop",
    reverse: true,
    tags: ["Docuseries", "Cultural Segments", "BTS Features", "Documentary"],
  },
  {
    id: 3,
    title: "Content Creation",
    subtitle: "03 · Craft",
    description:
      "Purposeful content built to matter decades from now. We create historical explainers, NGO impact stories, heritage campaigns, and archival-quality content for educational publishers, cultural ministries, and purpose-led brands. Our content doesn't expire. It accumulates meaning.",
    imageUrl:
      "https://images.unsplash.com/photo-1758640920659-0bb864175983?w=800&auto=format&fit=crop&q=80",
    reverse: false,
    tags: [
      "Heritage Campaigns",
      "Historical Content",
      "Impact Stories",
      "Educational",
    ],
  },
];

const PROCESS = [
  {
    num: "01",
    title: "Discovery",
    desc: "Understanding the cultural context, the community, and the story that needs to be told. We don't start with a brief — we start with listening.",
  },
  {
    num: "02",
    title: "Documentation",
    desc: "Capturing authentic moments with intention. Every shoot is guided by the question: will this matter in 20 years? If yes, we take it.",
  },
  {
    num: "03",
    title: "Preservation",
    desc: "Delivering archival-quality content that outlasts the project. We produce for the present moment and the historical record simultaneously.",
  },
];

const INDUSTRIES = [
  {
    title: "Arts, Culture & Heritage",
    desc: "Museums, cultural centers, heritage foundations, and festivals — our core. Black History Month, Heritage Day, Independence Day celebrations.",
  },
  {
    title: "Education & Nonprofits",
    desc: "Our intergenerational team makes educational content resonate across age groups. Documentary shorts, NGO impact stories, historical explainers.",
  },
  {
    title: "Media & Entertainment",
    desc: "Streaming platforms and networks that want authentic cultural narratives. Docuseries, cultural segments, behind-the-scenes features.",
  },
  {
    title: "Brands with Purpose",
    desc: "Only if the brand lets us lead with authenticity. Heritage campaigns, cultural activations — never compromising nuance for clicks.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#080808] text-[#f0ede6]">
      {/* ── Page Header ───────────────────────────────────── */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-[#7a7570] text-[9px] tracking-[0.4em] uppercase mb-4">
              What We Do
            </p>
            <h1
              className="text-[clamp(3rem,8vw,6rem)] leading-none text-[#f0ede6]"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
                fontWeight: 300,
              }}
            >
              Our Craft
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-[#7a7570] text-sm mt-6 max-w-xl leading-relaxed border-l border-[#2f5440] pl-5">
              We don&rsquo;t just capture moments. We document culture. Three
              disciplines, one mission: create work that matters long after the
              brief is closed.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Parallax Services ─────────────────────────────── */}
      <div className="border-t border-[#1e1e1e]">
        <ParallaxScrollFeatureSection sections={SERVICES} />
      </div>

      {/* ── Process ───────────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-[#1e1e1e] bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-[#7a7570] text-[9px] tracking-[0.4em] uppercase mb-4">
              How We Work
            </p>
            <h2
              className="text-3xl md:text-4xl text-[#f0ede6] mb-16"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
              }}
            >
              Three steps. One standard.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1e1e1e]">
            {PROCESS.map((step, i) => (
              <FadeIn key={step.num} delay={0.1 * i}>
                <div className="bg-[#0a0a0a] p-10">
                  <span
                    className="block text-[#2f5440] text-4xl mb-6 leading-none"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {step.num}
                  </span>
                  <h3 className="text-[#f0ede6] text-base font-medium mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#7a7570] text-sm leading-relaxed">
                    {step.desc}
                  </p>
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
            <p className="text-[#7a7570] text-[9px] tracking-[0.4em] uppercase mb-4">
              Who We Serve
            </p>
            <h2
              className="text-3xl md:text-4xl text-[#f0ede6] mb-16"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
              }}
            >
              The right clients, not the biggest ones.
            </h2>
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
                  <p className="text-[#7a7570] text-sm leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <div className="mt-6 p-6 border border-[#1e1e1e] bg-[#0f0f0f]">
              <p className="text-[#7a7570] text-[10px] tracking-[0.2em] uppercase mb-1">
                Industries We Avoid
              </p>
              <p className="text-[#4a4540] text-xs leading-relaxed">
                Fast-turnaround commercial advertising · Political campaigns ·
                Anything that requires compromising cultural nuance for clicks.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-[#1e1e1e] text-center">
        <FadeIn>
          <h2
            className="text-3xl md:text-4xl text-[#f0ede6] mb-8"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
            }}
          >
            Have a project that matters?
          </h2>
          <ShinyButton>
            <Link href="/contact" className="block">
              Tell Us About It
            </Link>
          </ShinyButton>
        </FadeIn>
      </section>
    </div>
  );
}
