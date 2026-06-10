import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Portfolio — définir",
  description: "Selected productions and editorial work from définir.",
};

const projects = [
  {
    id: 1,
    title: "Maison Collective",
    category: "Editorial",
    year: "2024",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=700&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Noir SS25",
    category: "Campaign",
    year: "2025",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Vantage Point",
    category: "Runway",
    year: "2024",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=700&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    title: "Raw Geometry",
    category: "Editorial",
    year: "2025",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=700&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    title: "Studio Blanc",
    category: "Campaign",
    year: "2024",
    image: "https://images.unsplash.com/photo-1524799526615-766a9833dec0?w=700&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    title: "Alter Ego",
    category: "Lookbook",
    year: "2025",
    image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=700&auto=format&fit=crop&q=80",
  },
];


export default function PortfolioPage() {
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
          Selected Work
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
          Our<br /><em>Portfolio</em>
        </h1>
      </section>

      {/* Grid */}
      <section style={{ padding: "7rem 2.5rem", maxWidth: "1400px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "rgba(255,255,255,0.08)",
          }}
          className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              style={{
                background: "#000",
                overflow: "hidden",
                cursor: "pointer",
                position: "relative",
                aspectRatio: "3/4",
              }}
              className="group"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{
                  objectFit: "cover",
                  filter: "grayscale(15%)",
                  transition: "transform 0.6s ease, filter 0.4s ease",
                }}
              />
              {/* Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0,0,0,0.0)",
                  transition: "background 0.4s ease",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "1.8rem",
                }}
              >
                <div style={{ transform: "translateY(4px)", transition: "transform 0.3s ease" }}>
                  <p
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: "0.6rem",
                      fontWeight: 500,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.6)",
                      marginBottom: "0.3rem",
                    }}
                  >
                    {project.category} · {project.year}
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "1.4rem",
                      fontWeight: 300,
                      color: "#fff",
                    }}
                  >
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "6rem 2.5rem",
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300, marginBottom: "2rem" }}>
          Collaborate with us
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
          Start a Project
        </Link>
      </section>
    </>
  );
}
