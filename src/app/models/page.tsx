import type { Metadata } from "next"
import ModelsClient from "./models-client"

export const metadata: Metadata = {
  title: "Models — définir | Elite Talent Roster",
  description:
    "Discover définir's exceptional roster of models for editorial, commercial, fashion, and runway work. Representing elite talent from Cape Town, South Africa and beyond.",
  openGraph: {
    title: "Models — définir | Elite Talent Roster",
    description:
      "Exceptional talent represented by définir — editorial, commercial, fashion, and runway models worldwide.",
    type: "website",
  },
  keywords: [
    "modeling agency",
    "fashion models",
    "commercial models",
    "editorial models",
    "runway models",
    "talent agency",
    "définir models",
  ],
}

export default function ModelsPage() {
  return <ModelsClient />
}
