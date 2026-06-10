"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home",      href: "/" },
  { label: "Services",  href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Models",    href: "/models" },
  { label: "About",     href: "/about" },
  { label: "Contact",   href: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const pathname                = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background:     scrolled ? "rgba(0,0,0,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom:   scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 2.5rem",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* ── Logo ── */}
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
          <Image
            src="/images/logo.png"
            alt="définir Production"
            width={52}
            height={52}
            style={{ borderRadius: "50%", objectFit: "cover", display: "block" }}
            priority
          />
        </Link>

        {/* ── Desktop nav ── */}
        <nav style={{ display: "flex", gap: "2.5rem", alignItems: "center" }} className="hidden md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontFamily:     "var(--sans)",
                fontSize:       "0.65rem",
                fontWeight:     500,
                letterSpacing:  "0.2em",
                textTransform:  "uppercase",
                color:          pathname === l.href ? "#fff" : "rgba(255,255,255,0.45)",
                textDecoration: "none",
                transition:     "color 0.2s",
                borderBottom:   pathname === l.href ? "1px solid #fff" : "1px solid transparent",
                paddingBottom:  "2px",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            style={{
              fontFamily:     "var(--sans)",
              fontSize:       "0.65rem",
              fontWeight:     500,
              letterSpacing:  "0.2em",
              textTransform:  "uppercase",
              color:          "#000",
              background:     "#fff",
              padding:        "0.55rem 1.4rem",
              textDecoration: "none",
              transition:     "opacity 0.2s",
            }}
          >
            Book Now
          </Link>
        </nav>

        {/* ── Mobile toggle ── */}
        <button
          className="md:hidden"
          onClick={() => setOpen((p) => !p)}
          style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", padding: "4px" }}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      {open && (
        <div
          style={{
            background:  "#000",
            borderTop:   "1px solid rgba(255,255,255,0.08)",
            padding:     "2rem 2.5rem",
            display:     "flex",
            flexDirection: "column",
            gap:         "1.75rem",
          }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontFamily:     "var(--serif)",
                fontSize:       "clamp(1.4rem, 6vw, 2rem)",
                fontWeight:     300,
                color:          pathname === l.href ? "#fff" : "rgba(255,255,255,0.5)",
                textDecoration: "none",
                fontStyle:      pathname === l.href ? "italic" : "normal",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
