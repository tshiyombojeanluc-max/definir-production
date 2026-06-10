"use client";

import dynamic from "next/dynamic";

const TextRotate = dynamic(
  () => import("@/components/ui/text-rotate").then((m) => ({ default: m.TextRotate })),
  {
    ssr: false,
    loading: () => (
      <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "rgba(255,255,255,0.7)" }}>
        Editorial Excellence
      </span>
    ),
  }
);

export function TextRotateClient(props: React.ComponentProps<typeof TextRotate>) {
  return <TextRotate {...props} />;
}
