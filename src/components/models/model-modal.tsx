"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { X, MapPin, ArrowUpRight } from "lucide-react"
import type { Model } from "@/lib/models-data"
import Link from "next/link"

interface ModelModalProps {
  model: Model | null
  onClose: () => void
}

export function ModelModal({ model, onClose }: ModelModalProps) {
  useEffect(() => {
    if (model) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [model])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [onClose])

  return (
    <AnimatePresence>
      {model && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "fixed", inset: 0, zIndex: 100,
            background: "rgba(0,0,0,0.92)",
            backdropFilter: "blur(6px)",
            display: "flex", alignItems: "stretch",
            overflowY: "auto",
          }}
          onClick={onClose}
        >
          <motion.div
            key="panel"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{ type: "spring", stiffness: 280, damping: 30 }}
            style={{
              marginLeft: "auto",
              width: "100%",
              maxWidth: "980px",
              minHeight: "100vh",
              background: "#000",
              borderLeft: "1px solid rgba(255,255,255,0.08)",
              display: "grid",
              position: "relative",
            }}
            className="modal-grid"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left — hero image */}
            <div className="modal-img-col">
              <img
                src={model.heroImage}
                alt={model.name}
                fetchPriority="high"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top center",
                  filter: "grayscale(10%)",
                }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.05) 60%, rgba(0,0,0,0.5) 100%)" }} />

              {/* Category badge */}
              <div
                style={{
                  position: "absolute",
                  top: "2rem",
                  left: "2rem",
                  fontFamily: "var(--sans)",
                  fontSize: "0.58rem",
                  fontWeight: 500,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#000",
                  background: "#fff",
                  padding: "0.3rem 0.7rem",
                }}
              >
                {model.category}
              </div>
            </div>

            {/* Right — details */}
            <div style={{ padding: "clamp(2rem, 5vw, 5rem) clamp(1.25rem, 4vw, 3rem) clamp(2rem, 4vw, 4rem)", overflowY: "auto" }}>
              {/* Name */}
              <h2
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                  fontWeight: 300,
                  lineHeight: 1,
                  color: "#fff",
                  marginBottom: "0.4rem",
                }}
              >
                {model.name}
              </h2>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "2.5rem" }}>
                <MapPin size={11} color="rgba(255,255,255,0.35)" />
                <span style={{ fontFamily: "var(--sans)", fontSize: "0.75rem", color: "rgba(255,255,255,0.35)" }}>
                  {model.location} · {model.experience}
                </span>
              </div>

              {/* Quick stats */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "1px",
                  background: "rgba(255,255,255,0.06)",
                  marginBottom: "2.5rem",
                }}
              >
                {[
                  { label: "Campaigns", value: model.stats.campaigns },
                  { label: "Editorials", value: model.stats.editorials },
                  { label: "Runways",    value: model.stats.runways },
                ].map((s) => (
                  <div key={s.label} style={{ background: "#000", padding: "1rem", textAlign: "center" }}>
                    <p style={{ fontFamily: "var(--serif)", fontSize: "1.8rem", fontWeight: 300, color: "#fff", lineHeight: 1, marginBottom: "0.3rem" }}>
                      {s.value}
                    </p>
                    <p style={{ fontFamily: "var(--sans)", fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Measurements */}
              <div style={{ marginBottom: "2.5rem" }}>
                <p className="uppercase-label" style={{ color: "rgba(255,255,255,0.3)", marginBottom: "1rem" }}>
                  Measurements
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}>
                  {[
                    { k: "Height", v: model.height },
                    { k: "Hair",   v: model.hair },
                    { k: "Eyes",   v: model.eyes },
                    { k: "Shoe",   v: model.measurements.shoe },
                    model.measurements.bust  ? { k: "Bust",  v: model.measurements.bust  } : null,
                    model.measurements.waist ? { k: "Waist", v: model.measurements.waist } : null,
                    model.measurements.hips  ? { k: "Hips",  v: model.measurements.hips  } : null,
                    model.measurements.chest ? { k: "Chest", v: model.measurements.chest } : null,
                  ]
                    .filter(Boolean)
                    .map((item) => (
                      <div
                        key={item!.k}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "0.6rem 0",
                          borderBottom: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        <span style={{ fontFamily: "var(--sans)", fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.06em" }}>
                          {item!.k}
                        </span>
                        <span style={{ fontFamily: "var(--sans)", fontSize: "0.8rem", color: "rgba(255,255,255,0.8)" }}>
                          {item!.v}
                        </span>
                      </div>
                    ))}
                </div>
              </div>

              {/* Specialties */}
              <div style={{ marginBottom: "2.5rem" }}>
                <p className="uppercase-label" style={{ color: "rgba(255,255,255,0.3)", marginBottom: "1rem" }}>
                  Specialties
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {model.specialties.map((s) => (
                    <span
                      key={s}
                      style={{
                        fontFamily: "var(--sans)",
                        fontSize: "0.65rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.65)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        padding: "0.3rem 0.75rem",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Biography */}
              <div style={{ marginBottom: "2.5rem" }}>
                <p className="uppercase-label" style={{ color: "rgba(255,255,255,0.3)", marginBottom: "1rem" }}>
                  Biography
                </p>
                <p
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.85,
                  }}
                >
                  {model.biography}
                </p>
              </div>

              {/* Portfolio thumbnails */}
              <div style={{ marginBottom: "3rem" }}>
                <p className="uppercase-label" style={{ color: "rgba(255,255,255,0.3)", marginBottom: "1rem" }}>
                  Portfolio
                </p>
                <div className="modal-portfolio-grid">
                  {model.portfolioImages.map((src, i) => (
                    <div key={i} style={{ aspectRatio: "3/4", overflow: "hidden" }}>
                      <img
                        src={src}
                        alt={`${model.name} ${i + 1}`}
                        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", filter: "grayscale(15%)" }}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  fontFamily: "var(--sans)",
                  fontSize: "0.65rem",
                  fontWeight: 500,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#000",
                  background: "#fff",
                  padding: "1rem",
                  textDecoration: "none",
                  width: "100%",
                  transition: "opacity 0.2s",
                }}
                onClick={onClose}
              >
                Enquire About {model.name.split(" ")[0]}
                <ArrowUpRight size={12} />
              </Link>
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              style={{
                position: "fixed",
                top: "clamp(0.75rem, 2vw, 1.5rem)",
                right: "clamp(0.75rem, 2vw, 1.5rem)",
                zIndex: 110,
                width: "44px",
                height: "44px",
                background: "rgba(0,0,0,0.8)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "border-color 0.2s",
              }}
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
