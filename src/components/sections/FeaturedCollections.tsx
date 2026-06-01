import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const collections = [
  {
    name: "Collezione Venezia",
    year: "2024",
    desc: "Ispirata ai riflessi della laguna, oro e acquamarina in perfetta armonia.",
    img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",
    href: "/collezioni#venezia",
  },
  {
    name: "Collezione Firenze",
    year: "2023",
    desc: "L'eleganza rinascimentale reinterpretata in oro 18k e diamanti naturali.",
    img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
    href: "/collezioni#firenze",
  },
  {
    name: "Collezione Milano",
    year: "2024",
    desc: "Design contemporaneo con l'anima dell'artigianato tradizionale italiano.",
    img: "https://images.unsplash.com/photo-1633810542706-90e5ff7557be?w=600&q=80",
    href: "/collezioni#milano",
  },
  {
    name: "Collezione Roma",
    year: "2023",
    desc: "Grandiosità imperiale tradotta in gioielli di rara bellezza e portamento.",
    img: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=600&q=80",
    href: "/collezioni#roma",
  },
];

export default function FeaturedCollections() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".fc-title", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".fc-title", start: "top 85%" }
      });
      gsap.fromTo(".fc-card", { opacity: 0, y: 60 }, {
        opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: ".fc-grid", start: "top 80%" }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ backgroundColor: "#0A0A0B", padding: "8rem 2rem" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <div className="fc-title" style={{ textAlign: "center", marginBottom: "5rem", opacity: 0 }}>
          <div style={{ fontFamily: "'Jost'", fontSize: "0.62rem", letterSpacing: "0.4em", color: "#C8A96B", textTransform: "uppercase", marginBottom: "1.5rem" }}>
            Esclusività e Artigianalità
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 3.8rem)", fontWeight: 300, color: "#F7F5F0", letterSpacing: "0.02em", lineHeight: 1.1 }}>
            Le Nostre Collezioni
          </h2>
          <div style={{ width: "60px", height: "1px", backgroundColor: "#C8A96B", margin: "2rem auto 0" }} />
        </div>

        <div className="fc-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}>
          {collections.map((col) => (
            <Link key={col.name} href={col.href}>
              <div
                className="fc-card"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  opacity: 0,
                  aspectRatio: "3/4",
                }}
              >
                <img
                  src={col.img}
                  alt={col.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.7s ease",
                    filter: "brightness(0.7)",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.08)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                />
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(15,15,16,0.9) 0%, rgba(15,15,16,0.2) 50%, transparent 100%)",
                  transition: "opacity 0.4s ease",
                }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "2rem" }}>
                  <div style={{ fontFamily: "'Jost'", fontSize: "0.6rem", letterSpacing: "0.3em", color: "#C8A96B", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                    {col.year}
                  </div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 400, color: "#F7F5F0", marginBottom: "0.5rem", letterSpacing: "0.02em" }}>
                    {col.name}
                  </h3>
                  <p style={{ fontFamily: "'Jost'", fontSize: "0.78rem", color: "#E7D8BC", opacity: 0.8, lineHeight: 1.7, marginBottom: "1rem" }}>
                    {col.desc}
                  </p>
                  <span style={{ fontFamily: "'Jost'", fontSize: "0.65rem", letterSpacing: "0.2em", color: "#C8A96B", textTransform: "uppercase" }}>
                    Scopri →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
