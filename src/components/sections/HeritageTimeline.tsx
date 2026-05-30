import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { year: "1887", title: "L'Atelier Nasce", desc: "Salvatore Ferretti apre il primo laboratorio orafo in Via de' Tornabuoni, Firenze." },
  { year: "1920", title: "L'Oro del Re", desc: "Prima commessa reale: la Corte di Casa Savoia sceglie Orafi Italiani per il corredo nuziale." },
  { year: "1954", title: "Il Premio d'Oro", desc: "Riconosciuti come miglior bottega artigiana d'Italia dalla Camera Nazionale della Moda." },
  { year: "1978", title: "Apertura Milano", desc: "Inaugurazione della prima boutique in Via Montenapoleone, cuore del lusso milanese." },
  { year: "1995", title: "La Terza Generazione", desc: "Enzo Ferretti prende le redini dell'atelier, portando nuova visione senza tradire le radici." },
  { year: "2024", title: "137 Anni di Eccellenza", desc: "Oltre 12.000 gioielli creati nel mondo. L'eredità continua, una pietra alla volta." },
];

export default function HeritageTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".ht-title", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".ht-title", start: "top 85%" }
      });
      gsap.fromTo(".ht-node", { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: "power2.out",
        scrollTrigger: { trigger: ".ht-track", start: "top 80%" }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ backgroundColor: "#0A0A0B", padding: "8rem 0" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 2rem" }}>
        <div className="ht-title" style={{ textAlign: "center", marginBottom: "5rem", opacity: 0 }}>
          <div style={{ fontFamily: "'Jost'", fontSize: "0.62rem", letterSpacing: "0.4em", color: "#C8A96B", textTransform: "uppercase", marginBottom: "1.5rem" }}>
            La Nostra Storia
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 3.8rem)", fontWeight: 300, color: "#F7F5F0", letterSpacing: "0.02em" }}>
            Un'Eredità nel Tempo
          </h2>
        </div>
      </div>

      <div className="ht-track hide-scrollbar" style={{ overflowX: "auto", paddingBottom: "2rem" }}>
        <div style={{ display: "flex", alignItems: "flex-start", minWidth: "max-content", padding: "0 4rem", gap: "0", position: "relative" }}>
          {/* Horizontal line */}
          <div style={{
            position: "absolute",
            top: "24px",
            left: "4rem",
            right: "4rem",
            height: "1px",
            backgroundColor: "rgba(200,169,107,0.25)",
          }} />

          {milestones.map((m, i) => (
            <div
              key={m.year}
              className="ht-node"
              style={{
                width: "240px",
                flexShrink: 0,
                paddingRight: "2rem",
                opacity: 0,
                position: "relative",
              }}
            >
              {/* Dot */}
              <div style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "#C8A96B",
                marginBottom: "2rem",
                border: "2px solid #0A0A0B",
                boxShadow: "0 0 0 4px rgba(200,169,107,0.2)",
                flexShrink: 0,
              }} />

              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "2.2rem",
                fontWeight: 300,
                color: "#C8A96B",
                lineHeight: 1,
                marginBottom: "0.75rem",
                letterSpacing: "0.05em",
              }}>
                {m.year}
              </div>
              <div style={{
                fontFamily: "'Jost'",
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                color: "#E7D8BC",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
                fontWeight: 500,
              }}>
                {m.title}
              </div>
              <p style={{ fontFamily: "'Jost'", fontSize: "0.78rem", color: "#E7D8BC", opacity: 0.6, lineHeight: 1.7 }}>
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
