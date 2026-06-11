import type { Metadata } from "next";
import PortfolioClient from "./portfolio-client";

export const metadata: Metadata = {
  title: "Portfolio — définir",
  description: "Selected productions and editorial work from définir.",
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
