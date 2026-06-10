"use client"

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { X } from 'lucide-react'

export interface ImageData {
  id: string
  src: string
  alt: string
  title?: string
  description?: string
}

export interface SphereImageGridProps {
  images?: ImageData[]
  containerSize?: number
  sphereRadius?: number
  dragSensitivity?: number
  momentumDecay?: number
  maxRotationSpeed?: number
  baseImageScale?: number
  hoverScale?: number
  perspective?: number
  autoRotate?: boolean
  autoRotateSpeed?: number
  className?: string
}

interface SphericalPosition { theta: number; phi: number; radius: number }

const toRad = (d: number) => d * (Math.PI / 180)
const normalizeAngle = (a: number) => { while (a > 180) a -= 360; while (a < -180) a += 360; return a }
const clampVal = (v: number, max: number) => Math.max(-max, Math.min(max, v))

const SphereImageGrid: React.FC<SphereImageGridProps> = ({
  images = [],
  containerSize = 400,
  sphereRadius,
  dragSensitivity = 0.5,
  momentumDecay = 0.95,
  maxRotationSpeed = 5,
  baseImageScale = 0.12,
  hoverScale = 1.2,
  perspective = 1000,
  autoRotate = false,
  autoRotateSpeed = 0.3,
  className = '',
}) => {
  const actualRadius = sphereRadius || containerSize * 0.5
  const baseImageSize = containerSize * baseImageScale

  const [isMounted, setIsMounted] = useState(false)
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null)

  // All animation state lives in refs — never triggers React re-renders
  const rotationRef = useRef({ x: 15, y: 15 })
  const velocityRef = useRef({ x: 0, y: 0 })
  const isDraggingRef = useRef(false)
  const lastMousePos = useRef({ x: 0, y: 0 })
  const animationFrame = useRef<number | null>(null)
  const imagePositionsRef = useRef<SphericalPosition[]>([])
  // One ref per image element for direct DOM updates
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  const generatePositions = useCallback((): SphericalPosition[] => {
    const goldenRatio = (1 + Math.sqrt(5)) / 2
    const angleIncrement = 2 * Math.PI / goldenRatio
    return images.map((_, i) => {
      const t = i / images.length
      const inclination = Math.acos(1 - 2 * t)
      const azimuth = angleIncrement * i
      let phi = inclination * (180 / Math.PI)
      let theta = (azimuth * (180 / Math.PI)) % 360
      const poleBonus = Math.pow(Math.abs(phi - 90) / 90, 0.6) * 35
      phi = phi < 90 ? Math.max(5, phi - poleBonus) : Math.min(175, phi + poleBonus)
      phi = 15 + (phi / 180) * 150
      theta = (theta + (Math.random() - 0.5) * 20) % 360
      phi = Math.max(0, Math.min(180, phi + (Math.random() - 0.5) * 10))
      return { theta, phi, radius: actualRadius }
    })
  }, [images.length, actualRadius])

  // Directly update each image element's style — no React setState
  const applyPositions = useCallback(() => {
    const rot = rotationRef.current
    const rotXRad = toRad(rot.x)
    const rotYRad = toRad(rot.y)
    const positions = imagePositionsRef.current

    for (let index = 0; index < positions.length; index++) {
      const el = itemRefs.current[index]
      if (!el) continue

      const pos = positions[index]
      const thetaRad = toRad(pos.theta)
      const phiRad = toRad(pos.phi)

      let x = pos.radius * Math.sin(phiRad) * Math.cos(thetaRad)
      let y = pos.radius * Math.cos(phiRad)
      let z = pos.radius * Math.sin(phiRad) * Math.sin(thetaRad)

      const x1 = x * Math.cos(rotYRad) + z * Math.sin(rotYRad)
      z = -x * Math.sin(rotYRad) + z * Math.cos(rotYRad)
      x = x1
      const y2 = y * Math.cos(rotXRad) - z * Math.sin(rotXRad)
      z = y * Math.sin(rotXRad) + z * Math.cos(rotXRad)
      y = y2

      const fadeZoneStart = -10
      const fadeZoneEnd = -30
      const isVisible = z > fadeZoneEnd
      if (!isVisible) {
        el.style.display = 'none'
        continue
      }

      const fadeOpacity = z <= fadeZoneStart
        ? Math.max(0, (z - fadeZoneEnd) / (fadeZoneStart - fadeZoneEnd))
        : 1

      const dist = Math.sqrt(x * x + y * y)
      const distRatio = Math.min(dist / actualRadius, 1)
      const isPole = pos.phi < 30 || pos.phi > 150
      const centerScale = Math.max(0.3, 1 - distRatio * (isPole ? 0.4 : 0.7))
      const depthScale = (z + actualRadius) / (2 * actualRadius)
      const scale = centerScale * Math.max(0.5, 0.8 + depthScale * 0.3)
      const imageSize = baseImageSize * scale
      const zIndex = Math.round(1000 + z)

      el.style.display = 'block'
      el.style.opacity = String(fadeOpacity)
      el.style.zIndex = String(zIndex)
      el.style.width = `${imageSize}px`
      el.style.height = `${imageSize}px`
      el.style.left = `${containerSize / 2 + x}px`
      el.style.top = `${containerSize / 2 + y}px`
      el.style.transform = `translate(-50%, -50%)`
    }
  }, [actualRadius, baseImageSize, containerSize])

  const tick = useCallback(() => {
    if (!isDraggingRef.current) {
      const vel = velocityRef.current
      const newVx = vel.x * momentumDecay
      const newVy = vel.y * momentumDecay
      velocityRef.current = {
        x: (!autoRotate && Math.abs(newVx) < 0.01) ? 0 : newVx,
        y: (!autoRotate && Math.abs(newVy) < 0.01) ? 0 : newVy,
      }
      rotationRef.current = {
        x: normalizeAngle(rotationRef.current.x + clampVal(velocityRef.current.x, maxRotationSpeed)),
        y: normalizeAngle(rotationRef.current.y + clampVal(velocityRef.current.y, maxRotationSpeed) + (autoRotate ? autoRotateSpeed : 0)),
      }
    }
    applyPositions()
    animationFrame.current = requestAnimationFrame(tick)
  }, [applyPositions, momentumDecay, autoRotate, autoRotateSpeed, maxRotationSpeed])

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    isDraggingRef.current = true
    velocityRef.current = { x: 0, y: 0 }
    lastMousePos.current = { x: e.clientX, y: e.clientY }
  }, [])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDraggingRef.current) return
    const dx = e.clientX - lastMousePos.current.x
    const dy = e.clientY - lastMousePos.current.y
    const delta = { x: -dy * dragSensitivity, y: dx * dragSensitivity }
    rotationRef.current = {
      x: normalizeAngle(rotationRef.current.x + clampVal(delta.x, maxRotationSpeed)),
      y: normalizeAngle(rotationRef.current.y + clampVal(delta.y, maxRotationSpeed)),
    }
    velocityRef.current = { x: clampVal(delta.x, maxRotationSpeed), y: clampVal(delta.y, maxRotationSpeed) }
    lastMousePos.current = { x: e.clientX, y: e.clientY }
  }, [dragSensitivity, maxRotationSpeed])

  const handleMouseUp = useCallback(() => { isDraggingRef.current = false }, [])

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const t = e.touches[0]
    isDraggingRef.current = true
    velocityRef.current = { x: 0, y: 0 }
    lastMousePos.current = { x: t.clientX, y: t.clientY }
  }, [])

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDraggingRef.current) return
    e.preventDefault()
    const t = e.touches[0]
    const dx = t.clientX - lastMousePos.current.x
    const dy = t.clientY - lastMousePos.current.y
    const delta = { x: -dy * dragSensitivity, y: dx * dragSensitivity }
    rotationRef.current = {
      x: normalizeAngle(rotationRef.current.x + clampVal(delta.x, maxRotationSpeed)),
      y: normalizeAngle(rotationRef.current.y + clampVal(delta.y, maxRotationSpeed)),
    }
    velocityRef.current = { x: clampVal(delta.x, maxRotationSpeed), y: clampVal(delta.y, maxRotationSpeed) }
    lastMousePos.current = { x: t.clientX, y: t.clientY }
  }, [dragSensitivity, maxRotationSpeed])

  const handleTouchEnd = useCallback(() => { isDraggingRef.current = false }, [])

  useEffect(() => { setIsMounted(true) }, [])

  useEffect(() => {
    imagePositionsRef.current = generatePositions()
  }, [generatePositions])

  useEffect(() => {
    if (!isMounted) return
    animationFrame.current = requestAnimationFrame(tick)
    return () => { if (animationFrame.current) cancelAnimationFrame(animationFrame.current) }
  }, [isMounted, tick])

  useEffect(() => {
    if (!isMounted) return
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('touchmove', handleTouchMove, { passive: false })
    document.addEventListener('touchend', handleTouchEnd)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [isMounted, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd])

  if (!isMounted) return (
    <div className="animate-pulse bg-white/5 rounded-full flex items-center justify-center" style={{ width: containerSize, height: containerSize }}>
      <div style={{ fontFamily: "var(--sans)", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>Loading</div>
    </div>
  )

  if (!images.length) return null

  return (
    <>
      <div
        className={`relative select-none cursor-grab active:cursor-grabbing ${className}`}
        style={{ width: containerSize, height: containerSize, perspective: `${perspective}px` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="relative w-full h-full" style={{ zIndex: 10 }}>
          {images.map((image, index) => (
            <div
              key={image.id}
              ref={(el) => { itemRefs.current[index] = el }}
              className="absolute cursor-pointer select-none"
              style={{ display: 'none' }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  draggable={false}
                  loading={index < 4 ? 'eager' : 'lazy'}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative overflow-hidden"
            style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.1)", maxWidth: "440px", width: "100%" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ aspectRatio: "3/4", position: "relative" }}>
              <img src={selectedImage.src} alt={selectedImage.alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            {(selectedImage.title || selectedImage.description) && (
              <div style={{ padding: "1.5rem" }}>
                {selectedImage.title && (
                  <p style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", fontWeight: 300, color: "#fff", marginBottom: "0.25rem" }}>
                    {selectedImage.title}
                  </p>
                )}
                {selectedImage.description && (
                  <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
                    {selectedImage.description}
                  </p>
                )}
              </div>
            )}
            <button
              onClick={() => setSelectedImage(null)}
              style={{ position: "absolute", top: "12px", right: "12px", width: "32px", height: "32px", background: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
            >
              <X size={14} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default SphereImageGrid
