import type { Metadata } from "next";
import { ParallaxScrollFeatureSection } from "@/components/ui/parallax-scroll-feature-section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — définir",
  description: "Talent management, production direction, and creative casting services from définir.",
};

const services = [
  {
    id: 1,
    label: "01 — Talent",
    title: "Talent Management",
    description:
      "We represent a diverse roster of models, artists, and creative professionals. From discovery to career development, we guide talent at every stage — negotiating contracts, securing placements, and building long-term partnerships with the world's leading brands and publications.",
    imageUrl: "/images/service-talent.jpg",
    reverse: false,
  },
  {
    id: 2,
    label: "02 — Production",
    title: "Production Direction",
    description:
      "End-to-end production for editorial shoots, campaigns, lookbooks, and runway presentations. Our production team handles everything from location scouting and casting to crew coordination and post-production — delivering exceptional results on time and on budget.",
    imageUrl: "/images/service-production.jpg",
    reverse: true,
  },
  {
    id: 3,
    label: "03 — Casting",
    title: "Creative Casting",
    description:
      "Strategic casting that brings creative visions to life. We source talent across our global network to find the perfect match for your brand's identity — whether you need high-fashion editorial looks, inclusive commercial appeal, or avant-garde creative profiles.",
    imageUrl: "/images/service-casting.jpg",
    reverse: false,
  },
];


export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          paddingTop: "180px",
          paddingBottom: "80px",
          paddingLeft: "2.5rem",
          paddingRight: "2.5rem",
          maxWidth: "1400px",
          margin: "0 auto",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--sans)",
            fontSize: "0.65rem",
            fontWeight: 500,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
            marginBottom: "2rem",
          }}
        >
          What We Do
        </p>
        <h1
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(3.5rem, 9vw, 8rem)",
            fontWeight: 300,
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
          }}
        >
          Our<br /><em>Services</em>
        </h1>
      </section>

      {/* Parallax services */}
      <ParallaxScrollFeatureSection sections={services} />

      {/* CTA */}
      <section
        style={{
          padding: "6rem 2.5rem",
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300, marginBottom: "2rem" }}>
          Ready to book?
        </h2>
        <Link
          href="/contact"
          style={{
            fontFamily: "var(--sans)",
            fontSize: "0.65rem",
            fontWeight: 500,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#000",
            background: "#fff",
            padding: "0.9rem 2.5rem",
            textDecoration: "none",
            display: "inline-block",
            transition: "opacity 0.2s",
          }}
        >
          Start a Project
        </Link>
      </section>
    </>
  );
}
