"use client";

import React from "react";

interface ImageSliderProps {
  images?: string[];
  speed?: number;
}

const defaultImages = [
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=320&auto=format&fit=crop&q=50",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=320&auto=format&fit=crop&q=50",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=320&auto=format&fit=crop&q=50",
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=320&auto=format&fit=crop&q=50",
  "https://images.unsplash.com/photo-1524799526615-766a9833dec0?w=320&auto=format&fit=crop&q=50",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=320&auto=format&fit=crop&q=50",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=320&auto=format&fit=crop&q=50",
  "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=320&auto=format&fit=crop&q=50",
];

export function ImageAutoSlider({ images = defaultImages, speed = 22 }: ImageSliderProps) {
  const doubled = [...images, ...images];

  return (
    <div className="w-full overflow-hidden edge-fade" style={{ position: "relative" }}>
      <div
        className="slide-track"
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0,
              width: "260px",
              height: "340px",
              marginRight: "16px",
              overflow: "hidden",
            }}
          >
            <img
              src={src}
              alt={`Model ${(i % images.length) + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.4s ease",
                filter: "grayscale(20%)",
              }}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
