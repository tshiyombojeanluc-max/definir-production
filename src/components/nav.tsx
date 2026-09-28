"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

function DefinirMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* D vertical stroke */}
      <rect x="12" y="8" width="7" height="48" fill="#2f5440" />
      {/* D curved back */}
      <path
        d="M19 8 C46 8 52 18 52 32 C52 46 46 56 19 56"
        stroke="#2f5440"
        strokeWidth="7"
        fill="none"
        strokeLinecap="round"
      />
      {/* Inner circle accent */}
      <circle
        cx="36"
        cy="32"
        r="9"
        stroke="#4a7c59"
        strokeWidth="3.5"
        fill="none"
      />
      {/* Arrow pointer */}
      <path
        d="M32 28 L40 32 L32 36"
        stroke="#4a7c59"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#080808]/92 backdrop-blur-sm border-b border-[#1e1e1e]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <DefinirMark className="w-8 h-8 transition-opacity duration-300 group-hover:opacity-80" />
          <div className="flex flex-col">
            <span className="text-[#f0ede6] text-[11px] font-medium tracking-[0.2em] uppercase leading-none">
              Definir
            </span>
            <span className="text-[#7a7570] text-[9px] tracking-[0.25em] uppercase leading-none mt-[2px]">
              Production
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`text-[10px] tracking-[0.25em] uppercase transition-colors duration-300 ${
                  active ? "text-[#f0ede6]" : "text-[#7a7570] hover:text-[#f0ede6]"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* CTA (desktop) */}
        <Link
          href="/contact"
          className="hidden md:block text-[9px] tracking-[0.25em] uppercase px-5 py-2.5 border border-[#2f5440] text-[#4a7c59] hover:bg-[#2f5440] hover:text-[#f0ede6] transition-all duration-300"
        >
          Start a Project
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#f0ede6] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#080808] border-b border-[#1e1e1e]">
          <div className="px-6 py-6 flex flex-col gap-5">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-[10px] tracking-[0.3em] uppercase text-[#7a7570] hover:text-[#f0ede6] transition-colors duration-300"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 text-[9px] tracking-[0.25em] uppercase px-5 py-3 border border-[#2f5440] text-[#4a7c59] text-center hover:bg-[#2f5440] hover:text-[#f0ede6] transition-all duration-300"
            >
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
