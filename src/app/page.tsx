import { HeroSlideshow } from "@/components/ui/hero-slideshow";
import { TextRotateClient } from "@/components/ui/text-rotate-client";
import Link from "next/link";
import Image from "next/image";

const marqueeWords = [
  "EDITORIAL", "RUNWAY", "COMMERCIAL", "TALENT", "CASTING",
  "PRODUCTION", "CREATIVE DIRECTION", "FASHION WEEK", "CAMPAIGNS",
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        <HeroSlideshow />

        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 1 }} />

        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 1.5rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--sans)",
              fontSize: "0.62rem",
              fontWeight: 500,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.55)",
              marginBottom: "1.8rem",
            }}
          >
            Production &amp; Modeling Agency
          </p>

          <h1
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(3.5rem, 10vw, 9rem)",
              fontWeight: 300,
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              marginBottom: "1.2rem",
              color: "#fff",
            }}
          >
            <em>définir</em>
          </h1>

          <div
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(1rem, 2.5vw, 1.6rem)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "rgba(255,255,255,0.7)",
              marginBottom: "3rem",
              height: "2.5rem",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextRotateClient
              texts={["Editorial Excellence", "Runway Vision", "Commercial Craft", "Talent & Direction"]}
              rotationInterval={2400}
              staggerDuration={0.03}
              staggerFrom="first"
              mainClassName=""
              splitLevelClassName="overflow-hidden"
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-110%", opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 280 }}
            />
          </div>

          <Link
            href="/portfolio"
            style={{
              fontFamily: "var(--sans)",
              fontSize: "0.65rem",
              fontWeight: 500,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#000",
              background: "#fff",
              padding: "0.85rem 2.4rem",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
          >
            Discover Our Work
          </Link>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
            Scroll
          </p>
          <div style={{ width: "1px", height: "40px", background: "rgba(255,255,255,0.2)" }} />
        </div>
      </section>

      {/* ── Marquee strip ── */}
      <section
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "1.1rem 0",
          overflow: "hidden",
        }}
      >
        <div className="marquee-track">
          {[...marqueeWords, ...marqueeWords].map((word, i) => (
            <span
              key={i}
              style={{
                fontFamily: "var(--sans)",
                fontSize: "0.65rem",
                fontWeight: 500,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: i % 2 === 0 ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.25)",
                marginRight: "3rem",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </section>

      {/* ── About strip ── */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "70vh",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
        className="grid-cols-1 md:grid-cols-2"
      >
        <div
          style={{
            padding: "6rem 4rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRight: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <p className="uppercase-label" style={{ color: "rgba(255,255,255,0.35)", marginBottom: "1.5rem" }}>
            Who We Are
          </p>
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(2.4rem, 4vw, 3.8rem)",
              fontWeight: 300,
              lineHeight: 1.1,
              marginBottom: "2rem",
            }}
          >
            Where <em>talent</em> meets<br />vision
          </h2>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.9rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, maxWidth: "440px", marginBottom: "2.5rem" }}>
            définir is a full-service production and modeling agency representing the world's most sought-after talent. We bridge the gap between creative vision and flawless execution — from editorial spreads to major campaign productions.
          </p>
          <Link
            href="/about"
            style={{
              fontFamily: "var(--sans)",
              fontSize: "0.65rem",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#fff",
              textDecoration: "none",
              borderBottom: "1px solid rgba(255,255,255,0.35)",
              paddingBottom: "2px",
              display: "inline-block",
              width: "fit-content",
            }}
          >
            Our Story
          </Link>
        </div>

        <div style={{ position: "relative", overflow: "hidden", minHeight: "400px" }}>
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&auto=format&fit=crop&q=50"
            alt="Production shoot"
            fill
            sizes="50vw"
            style={{ objectFit: "cover", filter: "grayscale(20%)" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.2)" }} />
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          padding: "8rem 2.5rem",
          textAlign: "center",
          background: "#fff",
          color: "#000",
        }}
      >
        <p
          style={{
            fontFamily: "var(--sans)",
            fontSize: "0.65rem",
            fontWeight: 500,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(0,0,0,0.4)",
            marginBottom: "1.5rem",
          }}
        >
          Ready to work together?
        </p>
        <h2
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(2.8rem, 7vw, 6.5rem)",
            fontWeight: 300,
            lineHeight: 1,
            color: "#000",
            marginBottom: "3rem",
          }}
        >
          Let's create<br /><em>something iconic</em>
        </h2>
        <Link
          href="/contact"
          style={{
            fontFamily: "var(--sans)",
            fontSize: "0.65rem",
            fontWeight: 500,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#fff",
            background: "#000",
            padding: "1rem 2.8rem",
            textDecoration: "none",
            display: "inline-block",
            border: "1px solid #000",
            transition: "all 0.2s",
          }}
        >
          Get In Touch
        </Link>
      </section>
    </>
  );
}
