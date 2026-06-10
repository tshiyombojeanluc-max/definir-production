import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "définir — Production & Modeling Agency",
  description:
    "définir is a premier production and modeling agency connecting elite talent with brands for editorial, commercial, and runway work.",
  openGraph: {
    title: "définir — Production & Modeling Agency",
    description:
      "Premier production and modeling agency — editorial, commercial, runway.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
