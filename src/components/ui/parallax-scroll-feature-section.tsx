"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface SectionData {
  id: number;
  label: string;
  title: string;
  description: string;
  imageUrl: string;
  reverse: boolean;
}

function ParallaxSection({ section }: { section: SectionData }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.7],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  );
  const translateY = useTransform(scrollYProgress, [0, 1], [-50, 0]);

  return (
    <div
      ref={ref}
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(4rem, 8vw, 7rem) clamp(1.25rem, 4vw, 2.5rem)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
      className={section.reverse ? "service-row-reverse" : "service-row"}
    >
      {/* Text side */}
      <motion.div
        style={{ y: translateY, flexShrink: 0, maxWidth: "min(420px, 100%)" }}
      >
        <p
          style={{
            fontFamily: "var(--sans)",
            fontSize: "0.65rem",
            fontWeight: 500,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.4)",
            marginBottom: "1.5rem",
          }}
        >
          {section.label}
        </p>
        <h2
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(2.4rem, 5vw, 4rem)",
            fontWeight: 300,
            lineHeight: 1.05,
            marginBottom: "1.5rem",
          }}
        >
          {section.title}
        </h2>
        <p
          style={{
            fontFamily: "var(--sans)",
            fontSize: "0.9rem",
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.75,
          }}
        >
          {section.description}
        </p>
        <div
          style={{
            display: "inline-block",
            marginTop: "2.5rem",
            borderBottom: "1px solid rgba(255,255,255,0.4)",
            paddingBottom: "2px",
            fontFamily: "var(--sans)",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "border-color 0.2s",
          }}
        >
          Learn More
        </div>
      </motion.div>

      {/* Image side */}
      <motion.div
        style={{
          opacity,
          clipPath,
          width: "min(420px, 100%)",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: "100%",
            aspectRatio: "4/5",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src={section.imageUrl}
            alt={section.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              filter: "grayscale(15%)",
              display: "block",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}

interface ParallaxScrollProps {
  sections: SectionData[];
}

export function ParallaxScrollFeatureSection({ sections }: ParallaxScrollProps) {
  return (
    <div>
      {sections.map((section) => (
        <ParallaxSection key={section.id} section={section} />
      ))}
    </div>
  );
}
