"use client"

import { useState } from "react"
import { motion } from "motion/react"
import Image from "next/image"
import type { Model } from "@/lib/models-data"

interface ModelCardProps {
  model: Model
  onClick: (model: Model) => void
  index: number
}

export function ModelCard({ model, onClick, index }: ModelCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ cursor: "pointer" }}
      onClick={() => onClick(model)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image wrapper */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          aspectRatio: "2/3",
          background: "#0a0a0a",
        }}
      >
        <Image
          src={model.heroImage}
          alt={model.name}
          fill
          sizes="(max-width: 900px) 50vw, 33vw"
          style={{
            objectFit: "cover",
            objectPosition: "top center",
            transition: "transform 0.7s cubic-bezier(0.25, 0.1, 0.25, 1), filter 0.4s ease",
            transform: hovered ? "scale(1.04)" : "scale(1)",
            filter: hovered ? "grayscale(0%)" : "grayscale(12%)",
          }}
        />

        {/* Hover overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: hovered
              ? "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)"
              : "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)",
            transition: "background 0.4s ease",
          }}
        />

        {/* Category tag */}
        <div
          style={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            fontFamily: "var(--sans)",
            fontSize: "0.58rem",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#000",
            background: "rgba(255,255,255,0.9)",
            padding: "0.25rem 0.6rem",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(-6px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          {model.category}
        </div>

        {/* Bottom info — always visible */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "1.2rem 1.2rem 1rem",
            transform: hovered ? "translateY(0)" : "translateY(4px)",
            transition: "transform 0.3s ease",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--serif)",
              fontSize: "1.15rem",
              fontWeight: 300,
              color: "#fff",
              lineHeight: 1.2,
              marginBottom: "0.25rem",
            }}
          >
            {model.name}
          </h3>
          <p
            style={{
              fontFamily: "var(--sans)",
              fontSize: "0.65rem",
              letterSpacing: "0.12em",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            {model.height}
          </p>
        </div>

        {/* View profile — appears on hover */}
        <div
          style={{
            position: "absolute",
            bottom: "1rem",
            right: "1rem",
            fontFamily: "var(--sans)",
            fontSize: "0.58rem",
            fontWeight: 500,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.6)",
            borderBottom: "1px solid rgba(255,255,255,0.3)",
            paddingBottom: "1px",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateX(0)" : "translateX(8px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          View
        </div>
      </div>
    </motion.div>
  )
}
