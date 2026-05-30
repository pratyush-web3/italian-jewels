import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const materials = [
  {
    name: "Oro 18k",
    origin: "Italia · Svizzera",
    desc: "L'oro che utilizziamo è purissimo, estratto in modo responsabile dalle migliori miniere mondiali. Ogni lingotto è certificato e tracciabile.",
    color: "#C8A96B",
  },
  {
    name: "Diamanti",
    origin: "Certificati GIA",
    desc: "Solo diamanti certificati GIA, selezionati uno ad uno per brillantezza, purezza e colore eccezionale. La luce intrappolata nell'eterno.",
    color: "#E8E4DC",
  },
  {
    name: "Smeraldi",
    origin: "Colombia",
    desc: "Smeraldi colombiani di prima qualità, scelti per il loro verde intenso e vivo. Ogni pietra racconta millenni di storia geologica.",
    color: "#2E7D5E",
  },
  {
    name: "Rubini",
    origin: "Myanmar",
    desc: "Rubini birmani, simbolo eterno di passione e potere. Il rosso profondo e insuperabile di pietre rare, selezionate con rigore assoluto.",
    color: "#8B1A2A",
  },
  {
    name: "Zaffiri",
    origin: "Sri Lanka",
    desc: "Zaffiri dello Sri Lanka di colore blu reale, eleganti e senza tempo. Portano con sé la storia di isole antiche e oceani sconfinati.",
    color: "#1A3A6B",
  },
];

export default function PreciousMaterials() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".mat-title", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".mat-title", start: "top 85%" }
      });
      gsap.fromTo(".mat-card", { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: ".mat-grid", start: "top 80%" }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ backgroundColor: "#0F0F10", padding: "8rem 2rem" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <div className="mat-title" style={{ textAlign: "center", marginBottom: "5rem", opacity: 0 }}>
          <div style={{ fontFamily: "'Jost'", fontSize: "0.62rem", letterSpacing: "0.4em", color: "#C8A96B", textTransform: "uppercase", marginBottom: "1.5rem" }}>
            Solo il Meglio
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 3.8rem)", fontWeight: 300, color: "#F7F5F0", letterSpacing: "0.02em", lineHeight: 1.1 }}>
            Materiali Preziosi
          </h2>
          <div style={{ width: "60px", height: "1px", backgroundColor: "#C8A96B", margin: "2rem auto 0" }} />
        </div>

        <div className="mat-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
          {materials.map((mat) => (
            <div
              key={mat.name}
              className="mat-card"
              style={{
                border: "1px solid rgba(200,169,107,0.12)",
                padding: "2.5rem",
                cursor: "default",
                transition: "border-color 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease",
                opacity: 0,
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(200,169,107,0.4)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.4)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(200,169,107,0.12)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{
                width: "40px",
                height: "4px",
                backgroundColor: mat.color,
                marginBottom: "2rem",
                opacity: 0.8,
              }} />
              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "2rem",
                fontWeight: 400,
                color: "#F7F5F0",
                letterSpacing: "0.03em",
                marginBottom: "0.5rem",
              }}>
                {mat.name}
              </h3>
              <div style={{
                fontFamily: "'Jost'",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                color: "#C8A96B",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}>
                {mat.origin}
              </div>
              <p style={{ fontFamily: "'Jost'", fontSize: "0.82rem", color: "#E7D8BC", opacity: 0.7, lineHeight: 1.8 }}>
                {mat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
