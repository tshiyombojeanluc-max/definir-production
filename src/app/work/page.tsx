import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import { GallerySection } from "@/components/gallery-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Portfolio of Definir Production — Black History Month, Sarafina, Congo Independence Day, and more cultural documentation projects.",
};

const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1741332966416-414d8a5b8887?w=600&auto=format&fit=crop&q=60",
    alt: "Cultural documentation",
  },
  {
    src: "https://images.unsplash.com/photo-1754769440490-2eb64d715775?q=80&w=1113&auto=format&fit=crop",
    alt: "Heritage photography",
  },
  {
    src: "https://images.unsplash.com/photo-1758640920659-0bb864175983?w=600&auto=format&fit=crop&q=60",
    alt: "Community storytelling",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1758367454070-731d3cc11774?w=600&auto=format&fit=crop&q=60",
    alt: "Visual narrative",
  },
  {
    src: "https://images.unsplash.com/photo-1746023841657-e5cd7cc90d2c?w=600&auto=format&fit=crop&q=60",
    alt: "Cultural celebration",
  },
  {
    src: "https://images.unsplash.com/photo-1741715661559-6149723ea89a?w=600&auto=format&fit=crop&q=60",
    alt: "Identity documentation",
  },
  {
    src: "https://images.unsplash.com/photo-1725878746053-407492aa4034?w=600&auto=format&fit=crop&q=60",
    alt: "Archival photography",
  },
  {
    src: "https://images.unsplash.com/photo-1752588975168-d2d7965a6d64?w=600&auto=format&fit=crop&q=60",
    alt: "Heritage preservation",
  },
];

const PROJECTS = [
  {
    title: "Black History Month",
    year: "2024",
    category: "Photography · Video",
    description:
      "A comprehensive visual documentation of Black History Month celebrations — capturing community, pride, and the stories that must be preserved for future generations.",
    image:
      "https://images.unsplash.com/photo-1741332966416-414d8a5b8887?w=800&auto=format&fit=crop&q=80",
    tags: ["Heritage", "Community", "Documentary"],
  },
  {
    title: "Sarafina",
    year: "2024",
    category: "Photography · Content",
    description:
      "Behind-the-scenes and production documentation of the iconic Sarafina theatrical production. A visual archive of a story that defined a generation.",
    image:
      "https://images.unsplash.com/photo-1758640920659-0bb864175983?w=800&auto=format&fit=crop&q=80",
    tags: ["Theatre", "Culture", "Archival"],
  },
  {
    title: "Congo Independence Day",
    year: "2024",
    category: "Video · Photography",
    description:
      "A celebration of Congolese independence, documented across community events, performances, and intimate cultural moments that tell a larger national story.",
    image:
      "https://images.unsplash.com/photo-1746023841657-e5cd7cc90d2c?w=800&auto=format&fit=crop&q=80",
    tags: ["Independence", "Heritage", "Identity"],
  },
];

export default function WorkPage() {
  return (
    <div className="bg-[#080808] text-[#f0ede6]">
      {/* ── Page Header ───────────────────────────────────── */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-[#7a7570] text-[9px] tracking-[0.4em] uppercase mb-4">
              Portfolio
            </p>
            <h1
              className="text-[clamp(3rem,8vw,6rem)] leading-none text-[#f0ede6]"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
                fontWeight: 300,
              }}
            >
              Our Work
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-[#7a7570] text-sm mt-6 max-w-xl leading-relaxed">
              Stories that document culture, celebrate identity, and preserve
              heritage. Each project is built to matter decades from now.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── 3D Gallery ────────────────────────────────────── */}
      <section className="relative h-screen overflow-hidden border-t border-[#1e1e1e]">
        <GallerySection
          images={GALLERY_IMAGES}
          speed={1.0}
          visibleCount={12}
          className="absolute inset-0 w-full h-full"
          fadeSettings={{
            fadeIn: { start: 0.05, end: 0.25 },
            fadeOut: { start: 0.4, end: 0.43 },
          }}
          blurSettings={{
            blurIn: { start: 0.0, end: 0.1 },
            blurOut: { start: 0.4, end: 0.43 },
            maxBlur: 8.0,
          }}
        />

        <div className="absolute inset-0 pointer-events-none flex flex-col justify-end p-10 md:p-16">
          <p className="text-[#f0ede6]/30 text-[9px] tracking-[0.4em] uppercase mb-2">
            Interactive Gallery · Scroll or Use Arrow Keys
          </p>
          <p
            className="text-[#f0ede6]/60 text-xl"
            style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
          >
            Every image, a chapter of history.
          </p>
        </div>
      </section>

      {/* ── Featured Projects ─────────────────────────────── */}
      <section className="py-24 px-6 border-t border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-[#7a7570] text-[9px] tracking-[0.4em] uppercase mb-4">
              Featured Projects
            </p>
            <h2
              className="text-3xl md:text-4xl text-[#f0ede6] mb-16"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
              }}
            >
              Selected works, 2024
            </h2>
          </FadeIn>

          <div className="flex flex-col gap-px bg-[#1e1e1e]">
            {PROJECTS.map((project, i) => (
              <FadeIn key={project.title} delay={0.1 * i}>
                <div className="bg-[#080808] grid grid-cols-1 md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div
                    className={`relative overflow-hidden h-64 md:h-96 ${
                      i % 2 === 1 ? "md:order-2" : ""
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div
                    className={`p-10 md:p-14 flex flex-col justify-center ${
                      i % 2 === 1 ? "md:order-1" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-[#7a7570] text-[9px] tracking-[0.3em] uppercase">
                        {project.year}
                      </span>
                      <span className="w-px h-3 bg-[#2f5440]" />
                      <span className="text-[#7a7570] text-[9px] tracking-[0.2em] uppercase">
                        {project.category}
                      </span>
                    </div>

                    <h3
                      className="text-3xl md:text-4xl text-[#f0ede6] mb-5 leading-tight"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {project.title}
                    </h3>

                    <p className="text-[#7a7570] text-sm leading-relaxed mb-8">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[8px] tracking-[0.2em] uppercase text-[#4a7c59] border border-[#2f5440]/40 px-3 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries ────────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-[#1e1e1e] text-center">
        <FadeIn>
          <p className="text-[#7a7570] text-[9px] tracking-[0.4em] uppercase mb-4">
            Who We Work With
          </p>
          <h2
            className="text-3xl md:text-4xl text-[#f0ede6] mb-4"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
            }}
          >
            Arts · Education · Media · Purpose
          </h2>
          <p className="text-[#7a7570] text-sm max-w-xl mx-auto leading-relaxed mb-12">
            We partner with organizations that value culture as more than a
            trend.
          </p>
          <Link
            href="/contact"
            className="inline-block text-[9px] tracking-[0.3em] uppercase px-8 py-4 border border-[#2f5440] text-[#4a7c59] hover:bg-[#2f5440] hover:text-[#f0ede6] transition-all duration-300"
          >
            Book a Project
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
