import { FadeIn } from "@/components/ui/fade-in";
import { ShinyButton } from "@/components/ui/shiny-button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Definir Production is an intergenerational collective of storytellers, aged 8–50, documenting culture and preserving heritage since March 2024.",
};

const DIFFERENTIATORS = [
  {
    num: "01",
    title: "Intergenerational by Design",
    detail:
      "Most agencies are staffed by 25–35 year olds. Definir is a collective from age 8 to 50. That means we don't guess how different generations think — we have those voices in the room. It keeps our stories authentic and avoids stereotypes.",
  },
  {
    num: "02",
    title: "Storytelling Platform, Not a Marketing Agency",
    detail:
      "Competitors focus on selling products. We focus on documenting culture. Our brief isn't \"make this go viral.\" It's \"make this matter 20 years from now.\" That shift changes the tone, depth, and impact of the work.",
  },
  {
    num: "03",
    title: "Culture First",
    detail:
      "We choose projects based on cultural significance, not ad spend. Black History Month, Nigerian Independence Day, Congo Independence Day, Sarafina, Heritage Day — we prioritize heritage and historical narratives that often get overlooked by mainstream agencies.",
  },
  {
    num: "04",
    title: "We Preserve, Not Just Produce",
    detail:
      "A lot of content is disposable. Our work is archival. We treat each project like it's going into a cultural time capsule for the next generation to learn from.",
  },
  {
    num: "05",
    title: "Community Access & Trust",
    detail:
      "Because we're rooted in the communities we document, we get stories others can't. The trust is already there. We're not outsiders parachuting in for a campaign.",
  },
];

const PORTFOLIO_HIGHLIGHTS = [
  { title: "Black History Month", year: "2024" },
  { title: "Sarafina", year: "2024" },
  { title: "Congo Independence Day", year: "2024" },
  { title: "Heritage Day", year: "2024" },
];

export default function AboutPage() {
  return (
    <div className="bg-[#080808] text-[#f0ede6]">
      {/* ── Opening Statement ─────────────────────────────── */}
      <section
        className="min-h-screen flex flex-col justify-center px-6 pt-24"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 30% 50%, #0d1f17 0%, #080808 70%)",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-[#7a7570] text-[9px] tracking-[0.4em] uppercase mb-8">
              Who We Are
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1
              className="text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.05] text-[#f0ede6] mb-10"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
                fontWeight: 300,
              }}
            >
              We&rsquo;re not a
              <br />
              marketing agency.
              <br />
              <span className="text-[#4a7c59]">We&rsquo;re storytellers.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[#7a7570] text-base leading-relaxed max-w-lg border-l-2 border-[#2f5440] pl-6">
              Definir Production is an intergenerational collective of
              storytellers, photographers, and filmmakers — ranging in age from
              8 to 50. Founded on 30 March 2024, our mission is to document
              culture, preserve heritage, and create work that matters long
              after the brief is closed.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── The Collective ────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <p className="text-[#7a7570] text-[9px] tracking-[0.4em] uppercase mb-4">
                The Collective
              </p>
              <h2
                className="text-3xl md:text-4xl text-[#f0ede6] mb-6"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                }}
              >
                Ages 8 to 50.
                <br />
                One vision.
              </h2>
              <p className="text-[#7a7570] text-sm leading-relaxed mb-6">
                Definir Production was born from a simple belief: authentic
                stories require authentic storytellers. Our collective spans
                generations because the communities we document span
                generations. When we tell a story about heritage, we want every
                age group represented in how we see it.
              </p>
              <p className="text-[#7a7570] text-sm leading-relaxed">
                We define our art our way. No compromises, no trend-chasing, no
                culture washing. Just honest, archival-quality documentation of
                the world as it is — and as it should be remembered.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} direction="left">
            <div className="grid grid-cols-2 gap-px bg-[#1e1e1e]">
              <div className="bg-[#0f0f0f] p-8 text-center">
                <p
                  className="text-[#f0ede6] text-5xl mb-2"
                  style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
                >
                  8–50
                </p>
                <p className="text-[#7a7570] text-[9px] tracking-[0.2em] uppercase">
                  Age Range
                </p>
              </div>
              <div className="bg-[#0f0f0f] p-8 text-center">
                <p
                  className="text-[#f0ede6] text-5xl mb-2"
                  style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
                >
                  2024
                </p>
                <p className="text-[#7a7570] text-[9px] tracking-[0.2em] uppercase">
                  Founded
                </p>
              </div>
              <div className="bg-[#0f0f0f] p-8 text-center">
                <p
                  className="text-[#f0ede6] text-5xl mb-2"
                  style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
                >
                  3
                </p>
                <p className="text-[#7a7570] text-[9px] tracking-[0.2em] uppercase">
                  Core Disciplines
                </p>
              </div>
              <div className="bg-[#0f0f0f] p-8 text-center">
                <p
                  className="text-[#f0ede6] text-5xl mb-2"
                  style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
                >
                  ∞
                </p>
                <p className="text-[#7a7570] text-[9px] tracking-[0.2em] uppercase">
                  Stories to Tell
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── What Sets Us Apart ────────────────────────────── */}
      <section className="py-24 px-6 border-t border-[#1e1e1e] bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-[#7a7570] text-[9px] tracking-[0.4em] uppercase mb-4">
              What Makes Us Different
            </p>
            <h2
              className="text-3xl md:text-4xl text-[#f0ede6] mb-16"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
              }}
            >
              Five pillars.
            </h2>
          </FadeIn>

          <div className="flex flex-col gap-px bg-[#1e1e1e]">
            {DIFFERENTIATORS.map((d, i) => (
              <FadeIn key={d.num} delay={0.08 * i}>
                <div className="bg-[#0a0a0a] p-8 md:p-12 flex flex-col md:flex-row gap-6 md:gap-16">
                  <span
                    className="text-[#2f5440] text-3xl flex-shrink-0 leading-none"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {d.num}
                  </span>
                  <div>
                    <h3
                      className="text-[#f0ede6] text-xl mb-4"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {d.title}
                    </h3>
                    <p className="text-[#7a7570] text-sm leading-relaxed max-w-2xl">
                      {d.detail}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio Highlights ──────────────────────────── */}
      <section className="py-24 px-6 border-t border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-[#7a7570] text-[9px] tracking-[0.4em] uppercase mb-4">
              Selected Works
            </p>
            <h2
              className="text-3xl md:text-4xl text-[#f0ede6] mb-12"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
              }}
            >
              The stories we&rsquo;ve told.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1e1e1e]">
            {PORTFOLIO_HIGHLIGHTS.map((p, i) => (
              <FadeIn key={p.title} delay={0.1 * i}>
                <div className="bg-[#080808] p-8 text-center">
                  <p className="text-[#7a7570] text-[9px] tracking-[0.3em] uppercase mb-3">
                    {p.year}
                  </p>
                  <p
                    className="text-[#f0ede6] text-lg leading-tight"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {p.title}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <div className="mt-8 text-center">
              <Link
                href="/work"
                className="text-[9px] tracking-[0.3em] uppercase text-[#4a7c59] hover:text-[#f0ede6] transition-colors duration-300 pb-px border-b border-[#4a7c59]/40 hover:border-[#f0ede6]/40"
              >
                View Full Portfolio
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Tagline + CTA ─────────────────────────────────── */}
      <section
        className="py-32 px-6 border-t border-[#1e1e1e] text-center"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, #0d1f17 0%, #080808 70%)",
        }}
      >
        <FadeIn>
          <blockquote
            className="text-[clamp(1.5rem,4vw,3rem)] text-[#f0ede6] mb-4 max-w-3xl mx-auto leading-tight"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontWeight: 300,
            }}
          >
            &ldquo;Unlike traditional agencies, Definir Production is an
            intergenerational collective creating cultural stories that last —
            not just campaigns that trend.&rdquo;
          </blockquote>
          <p className="text-[#4a4540] text-[9px] tracking-[0.3em] uppercase mb-12">
            Definir Production
          </p>
          <ShinyButton>
            <Link href="/contact" className="block">
              Work With Us
            </Link>
          </ShinyButton>
        </FadeIn>
      </section>
    </div>
  );
}
