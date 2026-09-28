import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand block */}
          <div className="md:col-span-5">
            <p
              className="text-[#f0ede6] mb-2 leading-none"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.5rem",
                fontStyle: "italic",
              }}
            >
              Definir Production
            </p>
            <p className="text-[#7a7570] text-[10px] tracking-[0.25em] uppercase mb-6">
              Defining Art Our Way · Est. 2024
            </p>
            <p className="text-[#7a7570] text-sm leading-relaxed max-w-xs">
              An intergenerational collective of storytellers. We document
              culture, preserve heritage, and connect communities through
              photography, video, and content creation.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <p className="text-[#7a7570] text-[9px] tracking-[0.3em] uppercase mb-5">
              Navigate
            </p>
            <div className="flex flex-col gap-3">
              {["Work", "Services", "About", "Contact"].map((link) => (
                <Link
                  key={link}
                  href={`/${link.toLowerCase()}`}
                  className="text-[#7a7570] hover:text-[#f0ede6] text-sm transition-colors duration-300"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <p className="text-[#7a7570] text-[9px] tracking-[0.3em] uppercase mb-5">
              Craft
            </p>
            <div className="flex flex-col gap-3">
              {["Photography", "Video Production", "Content Creation"].map(
                (s) => (
                  <span key={s} className="text-[#7a7570] text-sm">
                    {s}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <p className="text-[#7a7570] text-[9px] tracking-[0.3em] uppercase mb-5">
              Contact
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:assistant.definir@gmail.com"
                className="text-[#7a7570] hover:text-[#b8965a] text-xs transition-colors duration-300 break-all"
              >
                assistant.definir@gmail.com
              </a>
              <a
                href="tel:0745761648"
                className="text-[#7a7570] hover:text-[#f0ede6] text-xs transition-colors duration-300"
              >
                074 576 1648
              </a>
              <a
                href="tel:0671057588"
                className="text-[#7a7570] hover:text-[#f0ede6] text-xs transition-colors duration-300"
              >
                067 105 7588
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-8 border-t border-[#1e1e1e] gap-4">
          <p className="text-[#4a4540] text-[10px] tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} Definir Production. All rights
            reserved.
          </p>
          <p
            className="text-[#4a4540] text-xs italic"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            &ldquo;Make this matter 20 years from now.&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
