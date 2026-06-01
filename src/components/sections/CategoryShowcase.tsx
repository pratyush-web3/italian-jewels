import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { Circle, Gem, Link2, Star } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const categories = [
  { label: "Collane", icon: Circle, href: "/collane" },
  { label: "Anelli", icon: Gem, href: "/anelli" },
  { label: "Bracciali", icon: Link2, href: "/bracciali" },
  { label: "Orecchini", icon: Star, href: "/orecchini" },
];

export default function CategoryShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".cat-item", { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power2.out",
        scrollTrigger: { trigger: ".cat-row", start: "top 85%" }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ backgroundColor: "#0F0F10", padding: "6rem 2rem", borderTop: "1px solid rgba(200,169,107,0.08)", borderBottom: "1px solid rgba(200,169,107,0.08)" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div style={{ fontFamily: "'Jost'", fontSize: "0.6rem", letterSpacing: "0.45em", color: "#C8A96B", textTransform: "uppercase" }}>
            Le Nostre Creazioni
          </div>
        </div>

        <div className="cat-row" style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "0",
        }}>
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <Link key={cat.label} href={cat.href}>
                <div
                  className="cat-item"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "3rem 1rem",
                    borderRight: i < categories.length - 1 ? "1px solid rgba(200,169,107,0.12)" : "none",
                    cursor: "pointer",
                    opacity: 0,
                    transition: "background 0.4s ease",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(200,169,107,0.04)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >
                  <Icon size={28} color="#C8A96B" style={{ marginBottom: "1.25rem", opacity: 0.8 }} />
                  <div style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.4rem",
                    fontWeight: 400,
                    color: "#F7F5F0",
                    letterSpacing: "0.05em",
                    marginBottom: "0.5rem",
                    position: "relative",
                  }}>
                    {cat.label}
                    <span style={{
                      position: "absolute",
                      bottom: "-4px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "0",
                      height: "1px",
                      backgroundColor: "#C8A96B",
                      transition: "width 0.4s ease",
                      display: "block",
                    }}
                    className="cat-underline"
                    />
                  </div>
                  <div style={{ fontFamily: "'Jost'", fontSize: "0.6rem", letterSpacing: "0.2em", color: "#C8A96B", opacity: 0.7, textTransform: "uppercase" }}>
                    Esplora →
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .cat-row { grid-template-columns: repeat(2, 1fr) !important; }
          .cat-item { border-right: 1px solid rgba(200,169,107,0.12) !important; border-bottom: 1px solid rgba(200,169,107,0.12) !important; }
        }
        .cat-item:hover .cat-underline { width: 100% !important; }
      `}</style>
    </section>
  );
}
