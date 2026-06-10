"use client"

import { useState, useCallback, useRef } from "react"
import { motion, type PanInfo } from "motion/react"
import Image from "next/image"

export interface StackImage {
  id: number
  src: string
  alt: string
  name?: string
  category?: string
}

interface VerticalImageStackProps {
  images: StackImage[]
}

export function VerticalImageStack({ images }: VerticalImageStackProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const lastNavigationTime = useRef(0)

  const navigate = useCallback(
    (dir: number) => {
      const now = Date.now()
      if (now - lastNavigationTime.current < 400) return
      lastNavigationTime.current = now
      setCurrentIndex((prev) => {
        if (dir > 0) return prev === images.length - 1 ? 0 : prev + 1
        return prev === 0 ? images.length - 1 : prev - 1
      })
    },
    [images.length]
  )

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.y < -50) navigate(1)
    else if (info.offset.y > 50) navigate(-1)
  }

  const getCardStyle = (index: number) => {
    const total = images.length
    let diff = index - currentIndex
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total

    if (diff === 0) return { y: 0, scale: 1, opacity: 1, zIndex: 5, rotateX: 0 }
    if (diff === -1) return { y: -170, scale: 0.82, opacity: 0.55, zIndex: 4, rotateX: 8 }
    if (diff === -2) return { y: -295, scale: 0.68, opacity: 0.25, zIndex: 3, rotateX: 15 }
    if (diff === 1) return { y: 170, scale: 0.82, opacity: 0.55, zIndex: 4, rotateX: -8 }
    if (diff === 2) return { y: 295, scale: 0.68, opacity: 0.25, zIndex: 3, rotateX: -15 }
    return { y: diff > 0 ? 420 : -420, scale: 0.6, opacity: 0, zIndex: 0, rotateX: diff > 0 ? -20 : 20 }
  }

  const isVisible = (index: number) => {
    const total = images.length
    let diff = index - currentIndex
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total
    return Math.abs(diff) <= 2
  }

  const current = images[currentIndex]

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      {/* Card stack */}
      <div
        className="relative flex h-[500px] w-[300px] items-center justify-center"
        style={{ perspective: "1200px" }}
      >
        {images.map((image, index) => {
          if (!isVisible(index)) return null
          const style = getCardStyle(index)
          const isCurrent = index === currentIndex

          return (
            <motion.div
              key={image.id}
              className="absolute cursor-grab active:cursor-grabbing"
              animate={{
                y: style.y,
                scale: style.scale,
                opacity: style.opacity,
                rotateX: style.rotateX,
                zIndex: style.zIndex,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30, mass: 1 }}
              drag={isCurrent ? "y" : false}
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              style={{ transformStyle: "preserve-3d", zIndex: style.zIndex }}
            >
              <div
                className="relative overflow-hidden"
                style={{
                  width: "290px",
                  height: "400px",
                  boxShadow: isCurrent
                    ? "0 30px 60px -12px rgba(0,0,0,0.8)"
                    : "0 10px 30px -10px rgba(0,0,0,0.5)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-transparent z-10" />
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover object-top"
                  draggable={false}
                  priority={isCurrent}
                  sizes="290px"
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 to-transparent z-10" />
                {isCurrent && image.name && (
                  <div className="absolute bottom-4 left-4 z-20">
                    <p
                      style={{
                        fontFamily: "var(--serif)",
                        fontSize: "1.1rem",
                        fontWeight: 300,
                        color: "#fff",
                      }}
                    >
                      {image.name}
                    </p>
                    {image.category && (
                      <p
                        style={{
                          fontFamily: "var(--sans)",
                          fontSize: "0.6rem",
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          color: "rgba(255,255,255,0.5)",
                          marginTop: "2px",
                        }}
                      >
                        {image.category}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Dot nav */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-[6px]">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Image ${i + 1}`}
            style={{
              width: "2px",
              height: i === currentIndex ? "24px" : "8px",
              background: i === currentIndex ? "#fff" : "rgba(255,255,255,0.2)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col items-center">
        <span
          style={{
            fontFamily: "var(--serif)",
            fontSize: "2.5rem",
            fontWeight: 300,
            color: "#fff",
            lineHeight: 1,
          }}
        >
          {String(currentIndex + 1).padStart(2, "0")}
        </span>
        <div style={{ width: "28px", height: "1px", background: "rgba(255,255,255,0.15)", margin: "8px 0" }} />
        <span
          style={{
            fontFamily: "var(--sans)",
            fontSize: "0.75rem",
            color: "rgba(255,255,255,0.3)",
          }}
        >
          {String(images.length).padStart(2, "0")}
        </span>
      </div>

      {/* Drag hint */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        style={{
          fontFamily: "var(--sans)",
          fontSize: "0.58rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.25)",
        }}
      >
        Drag to Browse
      </div>
    </div>
  )
}
