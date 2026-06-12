"use client"

import { useState, useEffect } from "react"

const slides = [
  { src: "/images/hero/01.jpg", position: "center 18%" },
  { src: "/images/hero/02.jpg", position: "center 18%" },
  { src: "/images/hero/03.jpg", position: "center 18%" },
  { src: "/images/hero/04.jpg", position: "center 18%" },
  { src: "/images/hero/05.jpg", position: "center 18%" },
  { src: "/images/hero/06.jpg", position: "center 18%" },
  { src: "/images/hero/07.jpg", position: "center 18%" },
  { src: "/images/hero/08.jpg", position: "center 18%" },
]

export function HeroSlideshow() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev]       = useState<number | null>(null)

  // Start cycling immediately on mount — no onLoad gate (cached images can silently skip onLoad)
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent(c => {
        setPrev(c)
        return (c + 1) % slides.length
      })
    }, 3200)
    return () => clearInterval(id)
  }, [])

  const preloadIdx = (current + 1) % slides.length

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 1 }}>
      {slides.map((s, i) => {
        const isCurrent = i === current
        const isPrev    = i === prev
        const isPreload = i === preloadIdx

        if (!isCurrent && !isPrev && !isPreload) return null

        return (
          <div
            key={s.src}
            style={{
              position:      "absolute",
              inset:         0,
              opacity:       isCurrent ? 1 : isPrev ? 1 : 0,
              zIndex:        isCurrent ? 2 : isPrev ? 1 : 0,
              transition:    isCurrent && prev !== null ? "opacity 0.65s ease" : "none",
              pointerEvents: isCurrent ? "auto" : "none",
            }}
          >
            <img
              src={s.src}
              alt=""
              aria-hidden
              loading={i === 0 || i === 1 ? "eager" : "lazy"}
              style={{
                width:          "100%",
                height:         "100%",
                objectFit:      "cover",
                objectPosition: s.position,
                display:        "block",
                animation:      isCurrent ? "heroScale 3.5s ease-out forwards" : "none",
              }}
            />
          </div>
        )
      })}

      {/* Darkening overlay — inside slideshow so it sits above images but below page text.
          pointer-events: none so dots remain clickable. */}
      <div
        style={{
          position:      "absolute",
          inset:         0,
          background:    "rgba(0,0,0,0.55)",
          zIndex:        3,
          pointerEvents: "none",
        }}
      />

      {/* Dot indicators — above overlay */}
      <div
        style={{
          position:      "absolute",
          bottom:        "4.5rem",
          right:         "2rem",
          zIndex:        4,
          display:       "flex",
          flexDirection: "column",
          gap:           "6px",
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setPrev(current); setCurrent(i) }}
            aria-label={`Slide ${i + 1}`}
            style={{
              width:      "2px",
              height:     i === current ? "24px" : "8px",
              background: i === current ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.2)",
              border:     "none",
              cursor:     "pointer",
              padding:    0,
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  )
}
