"use client"

import { useState, useEffect } from "react"

const slides = [
  { src: "/images/hero/01.jpg", position: "center 38%" },
  { src: "/images/hero/02.jpg", position: "center 40%" },
  { src: "/images/hero/03.jpg", position: "center 42%" },
  { src: "/images/hero/04.jpg", position: "center 38%" },
  { src: "/images/hero/05.jpg", position: "center 40%" },
  { src: "/images/hero/06.jpg", position: "center 38%" },
  { src: "/images/hero/07.jpg", position: "center 42%" },
  { src: "/images/hero/08.jpg", position: "center 38%" },
  { src: "/images/hero/09.jpg", position: "center 40%" },
  { src: "/images/hero/10.jpg", position: "center 40%" },
]

function HeroSlide({
  src,
  position,
  active,
  preload,
}: {
  src: string
  position: string
  active: boolean
  preload: boolean
}) {
  const [visible, setVisible] = useState(false)

  if (!active && !preload) return null

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        opacity: active && visible ? 1 : 0,
        transition: "opacity 2s ease",
        animation: active && visible ? "heroZoom 9s ease-in-out forwards" : "none",
        pointerEvents: active ? "auto" : "none",
      }}
    >
      <img
        src={src}
        alt=""
        aria-hidden="true"
        loading={active ? "eager" : "lazy"}
        onLoad={() => setVisible(true)}
        onError={() => setVisible(false)}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: position,
          transform: "scale(1.12)",
          transformOrigin: "center center",
          display: "block",
        }}
      />
    </div>
  )
}

export function HeroSlideshow() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(
      () => setCurrent((i) => (i + 1) % slides.length),
      5500
    )
    return () => clearInterval(id)
  }, [])

  const next = (current + 1) % slides.length

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", background: "#0a0a0a" }}>
      {slides.map((s, i) => (
        <HeroSlide
          key={i}
          src={s.src}
          position={s.position}
          active={i === current}
          preload={i === next}
        />
      ))}

      <div
        style={{
          position: "absolute",
          bottom: "4.5rem",
          right: "2rem",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          gap: "6px",
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: "2px",
              height: i === current ? "24px" : "8px",
              background:
                i === current ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.2)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  )
}
