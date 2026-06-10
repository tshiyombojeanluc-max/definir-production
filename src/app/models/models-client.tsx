"use client"

import { useState, useMemo, useEffect } from "react"
import dynamic from "next/dynamic"
import { models, allPortfolioImages, type Model, type ModelCategory } from "@/lib/models-data"
import { ModelCard } from "@/components/models/model-card"
import { ModelModal } from "@/components/models/model-modal"
import { BecomeModelForm } from "@/components/models/become-model-form"

const SphereImageGrid = dynamic(() => import("@/components/ui/img-sphere"), {
  ssr: false,
  loading: () => (
    <div style={{ width: "min(520px, calc(100vw - 40px))", aspectRatio: "1", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)" }}>
        Loading gallery...
      </p>
    </div>
  ),
})

const CATEGORIES: (ModelCategory | "All")[] = ["All", "Female", "Male", "Fashion", "Editorial", "Commercial"]

const sphereImages = allPortfolioImages.map((img) => ({
  id: img.id,
  src: img.src,
  alt: img.alt,
  title: img.title,
  description: img.description,
}))

export default function ModelsClient() {
  const [activeCategory, setActiveCategory] = useState<ModelCategory | "All">("All")
  const [selectedModel, setSelectedModel] = useState<Model | null>(null)
  const [sphereSize, setSphereSize] = useState(520)

  useEffect(() => {
    const update = () => {
      const size = Math.min(window.innerWidth - 40, 520)
      setSphereSize(size)
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  const filtered = useMemo(
    () => (activeCategory === "All" ? models : models.filter((m) => m.category === activeCategory)),
    [activeCategory]
  )

  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          minHeight: "60vh",
          paddingTop: "72px",
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "clamp(3rem, 5vw, 5rem) clamp(1.25rem, 4vw, 2.5rem)",
            maxWidth: "1400px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <p
            className="uppercase-label"
            style={{ color: "rgba(255,255,255,0.35)", marginBottom: "1.5rem" }}
          >
            Elite Talent
          </p>

          <h1
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(3.5rem, 7vw, 7rem)",
              fontWeight: 300,
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              marginBottom: "2rem",
            }}
          >
            Our<br /><em>Models</em>
          </h1>

          <p
            style={{
              fontFamily: "var(--sans)",
              fontSize: "0.92rem",
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.8,
              maxWidth: "400px",
              marginBottom: "3rem",
            }}
          >
            Discover exceptional talent represented by définir — a curated roster of models who define the intersection of beauty, identity, and creative vision.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button
              onClick={() => document.getElementById("models-grid")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                fontFamily: "var(--sans)",
                fontSize: "0.65rem",
                fontWeight: 500,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#000",
                background: "#fff",
                border: "none",
                padding: "0.85rem 2rem",
                cursor: "pointer",
                transition: "opacity 0.2s",
              }}
            >
              Browse All Models
            </button>
            <button
              onClick={() => document.getElementById("become-model")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                fontFamily: "var(--sans)",
                fontSize: "0.65rem",
                fontWeight: 500,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.65)",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.15)",
                padding: "0.85rem 2rem",
                cursor: "pointer",
                transition: "border-color 0.2s, color 0.2s",
              }}
            >
              Join the Agency
            </button>
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              gap: "clamp(1.5rem, 5vw, 3rem)",
              marginTop: "clamp(2rem, 4vw, 4rem)",
              paddingTop: "2.5rem",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              flexWrap: "wrap",
            }}
          >
            {[
              { v: models.length + "+", l: "Models" },
              { v: "12", l: "Years" },
              { v: "40+", l: "Brands" },
            ].map((s) => (
              <div key={s.l}>
                <p style={{ fontFamily: "var(--serif)", fontSize: "2rem", fontWeight: 300, lineHeight: 1, color: "#fff" }}>
                  {s.v}
                </p>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginTop: "0.25rem" }}>
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ── Models Grid ── */}
      <section
        id="models-grid"
        style={{
          padding: "clamp(3rem, 6vw, 6rem) clamp(1.25rem, 4vw, 2.5rem)",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* Filter tabs */}
        <div
          style={{
            display: "flex",
            gap: "0",
            marginBottom: "clamp(1.5rem, 4vw, 4rem)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            overflowX: "auto",
          }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                fontFamily: "var(--sans)",
                fontSize: "0.65rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: activeCategory === cat ? "#fff" : "rgba(255,255,255,0.35)",
                background: "none",
                border: "none",
                borderBottom: activeCategory === cat ? "1px solid #fff" : "1px solid transparent",
                padding: "0.8rem 1.5rem",
                cursor: "pointer",
                marginBottom: "-1px",
                transition: "color 0.2s",
                whiteSpace: "nowrap",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gap: "1px",
            background: "rgba(255,255,255,0.06)",
          }}
          className="models-cards"
        >
          {filtered.map((model, i) => (
            <div key={model.id} style={{ background: "#000" }}>
              <ModelCard model={model} onClick={setSelectedModel} index={i} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p
            style={{
              textAlign: "center",
              padding: "4rem",
              fontFamily: "var(--sans)",
              fontSize: "0.85rem",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            No models in this category yet.
          </p>
        )}
      </section>

      {/* ── Sphere Gallery ── */}
      <section
        style={{
          padding: "clamp(3rem, 6vw, 6rem) clamp(1.25rem, 4vw, 2.5rem)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          background: "#030303",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <p className="uppercase-label" style={{ color: "rgba(255,255,255,0.3)", marginBottom: "1rem" }}>
          Portfolio Showcase
        </p>
        <h2
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontWeight: 300,
            marginBottom: "1rem",
          }}
        >
          The Work
        </h2>
        <p
          style={{
            fontFamily: "var(--sans)",
            fontSize: "0.85rem",
            color: "rgba(255,255,255,0.4)",
            marginBottom: "3.5rem",
            maxWidth: "420px",
            lineHeight: 1.75,
          }}
        >
          Drag to explore our models' collective portfolio — a constellation of talent, creativity, and craft.
        </p>

        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <SphereImageGrid
            images={sphereImages}
            containerSize={sphereSize}
            sphereRadius={Math.round(sphereSize * 0.385)}
            autoRotate
            autoRotateSpeed={0.18}
            dragSensitivity={0.7}
            baseImageScale={0.13}
          />
        </div>
      </section>

      {/* ── Become a Model ── */}
      <section
        id="become-model"
        style={{
          padding: "clamp(4rem, 8vw, 8rem) clamp(1.25rem, 4vw, 2.5rem)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div
          style={{ display: "grid" }}
          className="apply-grid"
        >
          {/* Left — intro */}
          <div>
            <p className="uppercase-label" style={{ color: "rgba(255,255,255,0.3)", marginBottom: "1.2rem" }}>
              Open Applications
            </p>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2.4rem, 4vw, 3.5rem)",
                fontWeight: 300,
                lineHeight: 1.05,
                marginBottom: "1.5rem",
              }}
            >
              Become a<br /><em>définir</em><br />Model
            </h2>
            <p
              style={{
                fontFamily: "var(--sans)",
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.85,
                marginBottom: "2rem",
              }}
            >
              We are always looking for exceptional new talent to join our roster. We represent models of all backgrounds — what we seek is individuality, presence, and professionalism.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              {[
                "Applications reviewed weekly",
                "Open calls on first Monday of each month",
                "All genders and backgrounds welcome",
                "Experience not required — we train",
              ].map((line) => (
                <div key={line} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(255,255,255,0.35)", marginTop: "6px", flexShrink: 0 }} />
                  <p style={{ fontFamily: "var(--sans)", fontSize: "0.82rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>{line}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div>
            <BecomeModelForm />
          </div>
        </div>
      </section>

      {/* Model modal */}
      <ModelModal model={selectedModel} onClose={() => setSelectedModel(null)} />

    </>
  )
}
