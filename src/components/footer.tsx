import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "Services",  href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About",     href: "/about" },
  { label: "Contact",   href: "/contact" },
];

const socials = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn",  href: "#" },
  { label: "Twitter",   href: "#" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#000",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        padding: "5rem 2.5rem 3rem",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "3rem",
            paddingBottom: "4rem",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
          className="grid-cols-1 md:grid-cols-3"
        >
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "inline-block", marginBottom: "1.5rem" }}>
              <Image
                src="/images/logo.png"
                alt="définir Production"
                width={72}
                height={72}
                style={{ borderRadius: "50%", objectFit: "cover", display: "block" }}
              />
            </Link>
            <p
              style={{
                fontFamily: "var(--sans)",
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.7,
                maxWidth: "260px",
              }}
            >
              Premier production and modeling agency. Connecting elite talent with visionary brands.
            </p>
          </div>

          {/* Pages */}
          <div>
            <p className="uppercase-label" style={{ color: "rgba(255,255,255,0.4)", marginBottom: "1.5rem" }}>
              Navigation
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="uppercase-label" style={{ color: "rgba(255,255,255,0.4)", marginBottom: "1.5rem" }}>
              Contact
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              <p style={{ fontFamily: "var(--sans)", fontSize: "0.85rem", color: "rgba(255,255,255,0.6)" }}>
                bookings@dstudio.com
              </p>
              <p style={{ fontFamily: "var(--sans)", fontSize: "0.85rem", color: "rgba(255,255,255,0.6)" }}>
                +1 (212) 555-0199
              </p>
              <p style={{ fontFamily: "var(--sans)", fontSize: "0.85rem", color: "rgba(255,255,255,0.6)" }}>
                New York · Paris · Milan
              </p>
            </div>
            <div style={{ display: "flex", gap: "1.5rem", marginTop: "2rem" }}>
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.45)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "2rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--sans)",
              fontSize: "0.7rem",
              color: "rgba(255,255,255,0.25)",
              letterSpacing: "0.08em",
            }}
          >
            © {new Date().getFullYear()} définir. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "var(--sans)",
              fontSize: "0.7rem",
              color: "rgba(255,255,255,0.25)",
              letterSpacing: "0.08em",
            }}
          >
            Privacy · Terms
          </p>
        </div>
      </div>
    </footer>
  );
}
