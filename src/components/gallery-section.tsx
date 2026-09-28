"use client";

import dynamic from "next/dynamic";

const InfiniteGallery = dynamic(
  () => import("@/components/ui/3d-gallery-photography"),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 flex items-center justify-center bg-[#080808]">
        <span className="text-[#4a4540] text-[10px] tracking-[0.3em] uppercase">
          Loading gallery…
        </span>
      </div>
    ),
  }
);

type ImageItem = string | { src: string; alt?: string };

interface FadeSettings {
  fadeIn: { start: number; end: number };
  fadeOut: { start: number; end: number };
}

interface BlurSettings {
  blurIn: { start: number; end: number };
  blurOut: { start: number; end: number };
  maxBlur: number;
}

interface GallerySectionProps {
  images: ImageItem[];
  speed?: number;
  visibleCount?: number;
  className?: string;
  fadeSettings?: FadeSettings;
  blurSettings?: BlurSettings;
}

export function GallerySection(props: GallerySectionProps) {
  return <InfiniteGallery {...props} />;
}
