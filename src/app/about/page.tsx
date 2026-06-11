import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About — définir",
  description: "Learn about définir's story, team, and values.",
};

const team = [
  {
    name: "Elie",
    role: "Founder & Photographer",
    image: "/images/models/team-elie.jpg",
  },
  {
    name: "Gradi",
    role: "Co-founder & Creative Director",
    image: "/images/models/team-gradi.jpg",
  },
  {
    name: "Charles",
    role: "Videographer & Photographer",
    image: "/images/models/team-charles.jpg",
  },
];

const values = [
  {
    num: "I",
    title: "Integrity",
    desc: "We build careers on trust — transparent representation and ethical practice in everything we do.",
  },
  {
    num: "II",
    title: "Excellence",
    desc: "We set the standard. Every production, every placement, every detail — executed to perfection.",
  },
  {
    num: "III",
    title: "Diversity",
    desc: "Our roster reflects the world. We champion underrepresented talent and inclusive casting.",
  },
  {
    num: "IV",
    title: "Vision",
    desc: "We don't follow trends — we shape them. Partnering with boldly creative people and brands.",
  },
];

const timeline = [
  { year: "2013", event: "définir founded in Cape Town, South Africa with a roster of 12 models." },
  { year: "2016", event: "First major fashion week production. Expanded nationally." },
  { year: "2019", event: "Launched full-service production division. 100+ brands served." },
  { year: "2022", event: "Roster exceeds 200 talents. Partnerships with international brands." },
  { year: "2025", event: "Named Agency of the Year by Vogue Business. Continuing to grow." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          paddingTop: "clamp(110px, 14vh, 180px)",
          paddingBottom: "0",
          paddingLeft: "clamp(1.25rem, 4vw, 2.5rem)",
          paddingRight: "clamp(1.25rem, 4vw, 2.5rem)",
          maxWidth: "1400px",
          margin: "0 auto",
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
          Our Story
        </p>
        <h1
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(3.5rem, 9vw, 8rem)",
            fontWeight: 300,
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            marginBottom: "5rem",
          }}
        >
          About<br /><em>définir</em>
        </h1>
      </section>

      {/* Full-width two-image banner */}
      <div style={{ width: "100%", height: "clamp(320px, 60vh, 700px)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <Image
            src="/images/about/hero-1.jpg"
            alt="définir editorial shoot"
            fill
            priority
            sizes="50vw"
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
        </div>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <Image
            src="/images/about/hero-2.jpg"
            alt="définir production shoot"
            fill
            priority
            sizes="50vw"
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
        </div>
      </div>

      {/* Story */}
      <section
        style={{
          padding: "clamp(3.5rem, 7vw, 7rem) clamp(1.25rem, 4vw, 2.5rem)",
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
        className="story-grid"
      >
        <div>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 300, lineHeight: 1.1 }}>
            Built on<br /><em>creative passion</em>
          </h2>
        </div>
        <div>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.95rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.85, marginBottom: "1.5rem" }}>
            Founded in Cape Town, South Africa, définir was built on a simple belief: that the best creative work happens when exceptional talent meets visionary direction. What started as a boutique modeling agency in Cape Town has grown into a force in production and talent management.
          </p>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.95rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.85 }}>
            Today we represent over 200 models, photographers, stylists, and creative directors — shaping campaigns, editorials, and runway presentations for some of the world's most recognized brands.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: "clamp(3.5rem, 7vw, 7rem) clamp(1.25rem, 4vw, 2.5rem)", maxWidth: "1400px", margin: "0 auto", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <p className="uppercase-label" style={{ color: "rgba(255,255,255,0.35)", marginBottom: "4rem" }}>
          Milestones
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {timeline.map((item, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "clamp(60px, 15vw, 120px) 1fr",
                gap: "1.5rem",
                padding: "2rem 0",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                alignItems: "baseline",
              }}
            >
              <span style={{ fontFamily: "var(--serif)", fontSize: "1.1rem", fontWeight: 300, color: "rgba(255,255,255,0.35)" }}>
                {item.year}
              </span>
              <p style={{ fontFamily: "var(--sans)", fontSize: "0.9rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
                {item.event}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: "clamp(3.5rem, 7vw, 7rem) clamp(1.25rem, 4vw, 2.5rem)", maxWidth: "1400px", margin: "0 auto", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <p className="uppercase-label" style={{ color: "rgba(255,255,255,0.35)", marginBottom: "1rem" }}>
          The Team
        </p>
        <h2
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 300,
            marginBottom: "4rem",
          }}
        >
          Meet the people<br />behind définir
        </h2>

        <div style={{ display: "grid" }} className="team-grid">
          {team.map((member) => (
            <div key={member.name}>
              <div
                style={{
                  width: "100%",
                  aspectRatio: "3/4",
                  overflow: "hidden",
                  marginBottom: "1.2rem",
                  position: "relative",
                }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center top",
                    filter: "grayscale(20%)",
                  }}
                />
              </div>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.15rem", fontWeight: 300, marginBottom: "0.3rem" }}>
                {member.name}
              </h3>
              <p style={{ fontFamily: "var(--sans)", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "clamp(3.5rem, 7vw, 7rem) clamp(1.25rem, 4vw, 2.5rem)", maxWidth: "1400px", margin: "0 auto", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <p className="uppercase-label" style={{ color: "rgba(255,255,255,0.35)", marginBottom: "1rem" }}>
          What We Stand For
        </p>
        <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 300, marginBottom: "4rem" }}>
          Our Values
        </h2>

        <div style={{ display: "grid" }} className="values-grid">
          {values.map((v) => (
            <div key={v.num} style={{ background: "#000", padding: "clamp(1.5rem, 3vw, 3rem)" }}>
              <span
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "1rem",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.2)",
                  display: "block",
                  marginBottom: "1.5rem",
                  letterSpacing: "0.15em",
                }}
              >
                {v.num}
              </span>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.7rem", fontWeight: 300, marginBottom: "0.75rem" }}>
                {v.title}
              </h3>
              <p style={{ fontFamily: "var(--sans)", fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.75 }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "clamp(3rem, 6vw, 6rem) clamp(1.25rem, 4vw, 2.5rem)", textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300, marginBottom: "2rem" }}>
          Join the studio
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
          }}
        >
          Get In Touch
        </Link>
      </section>
    </>
  );
}
