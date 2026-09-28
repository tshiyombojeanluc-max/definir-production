"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export interface ServiceSection {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  reverse: boolean;
  tags: string[];
}

interface ParallaxItemProps {
  section: ServiceSection;
}

// Each section is its own component so hooks are always called at the top level
function ParallaxItem({ section }: ParallaxItemProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.65], [0, 1]);
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.65],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  );
  const y = useTransform(scrollYProgress, [0, 1], [-40, 0]);

  return (
    <div
      ref={ref}
      className={`min-h-screen flex items-center justify-center px-6 md:px-20 gap-16 md:gap-28 ${
        section.reverse
          ? "flex-col-reverse md:flex-row-reverse"
          : "flex-col md:flex-row"
      }`}
    >
      {/* Text */}
      <motion.div style={{ y }} className="max-w-md flex-shrink-0">
        <p className="text-[#7a7570] text-[10px] font-medium tracking-[0.3em] uppercase mb-6">
          {section.subtitle}
        </p>
        <h2
          className="text-5xl md:text-6xl text-[#f0ede6] mb-6 leading-[1.1]"
          style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
        >
          {section.title}
        </h2>
        <p className="text-[#7a7570] text-sm leading-relaxed mb-8">
          {section.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {section.tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] font-medium px-3 py-1 border border-[#1e1e1e] text-[#7a7570] tracking-[0.2em] uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
        style={{ opacity, clipPath }}
        className="relative flex-shrink-0"
      >
        <div className="relative overflow-hidden w-72 h-72 md:w-[420px] md:h-[420px]">
          <img
            src={section.imageUrl}
            className="w-full h-full object-cover"
            alt={section.title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/70 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-[#2f5440]/30" />
        <div className="absolute top-0 left-0 h-full w-px bg-[#2f5440]/30" />
      </motion.div>
    </div>
  );
}

interface ParallaxScrollFeatureSectionProps {
  sections: ServiceSection[];
}

export function ParallaxScrollFeatureSection({
  sections,
}: ParallaxScrollFeatureSectionProps) {
  return (
    <div className="flex flex-col">
      {sections.map((section) => (
        <ParallaxItem key={section.id} section={section} />
      ))}
    </div>
  );
}
