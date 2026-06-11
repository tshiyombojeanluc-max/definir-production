"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Africa Day",
    category: "Editorial",
    year: "2025",
    cover: "/images/projects/africa-day/1.jpg",
    images: [
      "/images/projects/africa-day/1.jpg",
      "/images/projects/africa-day/2.jpg",
      "/images/projects/africa-day/3.jpg",
      "/images/projects/africa-day/4.jpg",
    ],
  },
  {
    id: 2,
    title: "Black Revolution",
    category: "Campaign",
    year: "2025",
    cover: "/images/projects/black-revo/1.jpg",
    images: [
      "/images/projects/black-revo/1.jpg",
      "/images/projects/black-revo/2.jpg",
      "/images/projects/black-revo/3.jpg",
      "/images/projects/black-revo/4.jpg",
      "/images/projects/black-revo/5.jpg",
      "/images/projects/black-revo/6.jpg",
      "/images/projects/black-revo/7.jpg",
      "/images/projects/black-revo/8.jpg",
    ],
  },
  {
    id: 3,
    title: "Night in Lagos",
    category: "Editorial",
    year: "2025",
    cover: "/images/projects/night-in-lagos/1.jpg",
    images: [
      "/images/projects/night-in-lagos/1.jpg",
      "/images/projects/night-in-lagos/2.jpg",
      "/images/projects/night-in-lagos/3.jpg",
      "/images/projects/night-in-lagos/4.jpg",
      "/images/projects/night-in-lagos/5.jpg",
      "/images/projects/night-in-lagos/6.jpg",
    ],
  },
]

type Project = (typeof projects)[0]

export default function PortfolioClient() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const openProject = (project: Project) => {
    setActiveProject(project)
    setActiveIndex(0)
  }

  const closeProject = () => {
    setActiveProject(null)
    setActiveIndex(0)
  }

  useEffect(() => {
    if (!activeProject) return
    document.body.style.overflow = "hidden"
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeProject()
      if (e.key === "ArrowLeft")
        setActiveIndex((i) => (i === 0 ? activeProject.images.length - 1 : i - 1))
      if (e.key === "ArrowRight")
        setActiveIndex((i) => (i === activeProject.images.length - 1 ? 0 : i + 1))
    }
    window.addEventListener("keydown", handleKey)
    return () => {
      window.removeEventListener("keydown", handleKey)
      document.body.style.overflow = ""
    }
  }, [activeProject])

  return (
    <>
      {/* Hero */}
      <section
        style={{
          paddingTop: "clamp(110px, 14vh, 180px)",
          paddingBottom: "clamp(3rem, 5vw, 80px)",
          paddingLeft: "clamp(1.25rem, 4vw, 2.5rem)",
          paddingRight: "clamp(1.25rem, 4vw, 2.5rem)",
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
      <section
        style={{
          padding: "clamp(3.5rem, 7vw, 7rem) clamp(1.25rem, 4vw, 2.5rem)",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div
          style={{ display: "grid", gap: "1px", background: "rgba(255,255,255,0.08)" }}
          className="portfolio-grid"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => openProject(project)}
              style={{
                background: "#000",
                overflow: "hidden",
                cursor: "pointer",
                position: "relative",
                aspectRatio: "3/4",
              }}
            >
              <Image
                src={project.cover}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{
                  objectFit: "cover",
                  filter: "grayscale(15%)",
                  transition: "transform 0.6s ease, filter 0.4s ease",
                }}
              />
              {/* Gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to bottom, transparent 45%, rgba(0,0,0,0.75) 100%)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "1.8rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: "0.6rem",
                    fontWeight: 500,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.6)",
                    marginBottom: "0.35rem",
                  }}
                >
                  {project.category} · {project.year}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    gap: "0.75rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)",
                      fontWeight: 300,
                      color: "#fff",
                      lineHeight: 1.1,
                    }}
                  >
                    {project.title}
                  </h3>
                  <span
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: "0.58rem",
                      color: "rgba(255,255,255,0.45)",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      flexShrink: 0,
                    }}
                  >
                    {project.images.length} photos
                  </span>
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
        <h2
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontWeight: 300,
            marginBottom: "2rem",
          }}
        >
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

      {/* ── Gallery Lightbox ── */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 200,
              background: "rgba(0,0,0,0.97)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Header bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "1rem clamp(1rem, 3vw, 2rem)",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                flexShrink: 0,
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: "0.55rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.35)",
                    marginBottom: "0.2rem",
                  }}
                >
                  {activeProject.category} · {activeProject.year}
                </p>
                <h2
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
                    fontWeight: 300,
                    color: "#fff",
                    lineHeight: 1.1,
                  }}
                >
                  {activeProject.title}
                </h2>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
                <span
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: "0.7rem",
                    color: "rgba(255,255,255,0.35)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {activeIndex + 1} / {activeProject.images.length}
                </span>
                <button
                  onClick={closeProject}
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    flexShrink: 0,
                  }}
                  aria-label="Close gallery"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Main image area */}
            <div
              style={{
                flex: 1,
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={closeProject}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`img-${activeIndex}`}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.28 }}
                  style={{ position: "absolute", inset: 0 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    src={activeProject.images[activeIndex]}
                    alt={`${activeProject.title} — photo ${activeIndex + 1}`}
                    fill
                    priority
                    sizes="100vw"
                    style={{ objectFit: "contain" }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Prev arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setActiveIndex((i) =>
                    i === 0 ? activeProject.images.length - 1 : i - 1
                  )
                }}
                style={{
                  position: "absolute",
                  left: "clamp(0.75rem, 2vw, 1.75rem)",
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 10,
                  width: "44px",
                  height: "44px",
                  background: "rgba(0,0,0,0.55)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Next arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setActiveIndex((i) =>
                    i === activeProject.images.length - 1 ? 0 : i + 1
                  )
                }}
                style={{
                  position: "absolute",
                  right: "clamp(0.75rem, 2vw, 1.75rem)",
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 10,
                  width: "44px",
                  height: "44px",
                  background: "rgba(0,0,0,0.55)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Thumbnails strip */}
            <div
              style={{
                display: "flex",
                gap: "4px",
                padding: "0.65rem clamp(1rem, 3vw, 2rem)",
                borderTop: "1px solid rgba(255,255,255,0.07)",
                overflowX: "auto",
                flexShrink: 0,
                WebkitOverflowScrolling: "touch",
              }}
            >
              {activeProject.images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  style={{
                    flexShrink: 0,
                    width: "54px",
                    height: "72px",
                    position: "relative",
                    overflow: "hidden",
                    border: i === activeIndex ? "2px solid #fff" : "2px solid transparent",
                    padding: 0,
                    cursor: "pointer",
                    opacity: i === activeIndex ? 1 : 0.45,
                    transition: "opacity 0.2s, border-color 0.2s",
                    background: "#111",
                  }}
                  aria-label={`Go to photo ${i + 1}`}
                >
                  <Image
                    src={src}
                    alt={`${activeProject.title} thumbnail ${i + 1}`}
                    fill
                    sizes="54px"
                    style={{ objectFit: "cover" }}
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
