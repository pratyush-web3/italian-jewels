import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ArtisanSpotlight() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".as-left", { opacity: 0, x: -50 }, {
        opacity: 1, x: 0, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: ".as-left", start: "top 80%" }
      });
      gsap.fromTo(".as-right", { opacity: 0, x: 50 }, {
        opacity: 1, x: 0, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: ".as-right", start: "top 80%" }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "linear-gradient(135deg, #0F3D32 0%, #092820 60%, #0F0F10 100%)",
        padding: "8rem 2rem",
        borderTop: "1px solid rgba(200,169,107,0.1)",
        borderBottom: "1px solid rgba(200,169,107,0.1)",
      }}
    >
      <div style={{ maxWidth: "1300px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }} className="as-grid">
        {/* Left — image */}
        <div className="as-left" style={{ opacity: 0, position: "relative" }}>
          <img
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Maestro Enzo Ferretti"
            style={{
              width: "100%",
              maxWidth: "420px",
              height: "560px",
              objectFit: "cover",
              objectPosition: "top center",
              filter: "grayscale(20%) brightness(0.85)",
            }}
          />
          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "50%",
            background: "linear-gradient(to top, rgba(15,61,50,0.8) 0%, transparent 100%)",
          }} />
        </div>

        {/* Right — text */}
        <div className="as-right" style={{ opacity: 0 }}>
          <div style={{
            fontFamily: "'Jost'",
            fontSize: "0.6rem",
            letterSpacing: "0.4em",
            color: "#C8A96B",
            textTransform: "uppercase",
            marginBottom: "2rem",
          }}>
            Il Maestro
          </div>

          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
            fontWeight: 300,
            color: "#F7F5F0",
            lineHeight: 1.2,
            marginBottom: "0.5rem",
            letterSpacing: "0.02em",
          }}>
           Giulia Moretti
          </h2>
          <div style={{
            fontFamily: "'Jost'",
            fontSize: "0.72rem",
            letterSpacing: "0.15em",
            color: "#C8A96B",
            textTransform: "uppercase",
            marginBottom: "3rem",
          }}>
            Maestro Orafo dal 1979 — Terza Generazione
          </div>

          <blockquote style={{ marginBottom: "2.5rem" }}>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontStyle: "italic",
              color: "#E7D8BC",
              lineHeight: 1.5,
              borderLeft: "2px solid #C8A96B",
              paddingLeft: "1.5rem",
            }}>
              "Quando prendo l'oro in mano, sento il peso della tradizione. Non lavoro per il presente — creo per l'eternità."
            </p>
          </blockquote>

          <p style={{ fontFamily: "'Jost'", fontSize: "0.88rem", color: "#E7D8BC", opacity: 0.75, lineHeight: 1.9, marginBottom: "1.5rem" }}>
            Da 45 anni, le mani di Enzo Ferretti trasformano metallo grezzo in opere d'arte destinate a durare secoli. Figlio di un maestro orafo e nipote del fondatore, Enzo ha imparato il mestiere nell'atelier di famiglia, assorbendo tradizioni che risalgono all'Italia rinascimentale.
          </p>
          <p style={{ fontFamily: "'Jost'", fontSize: "0.88rem", color: "#E7D8BC", opacity: 0.75, lineHeight: 1.9 }}>
            La sua tecnica di lavorazione a bulino, tramandata invariata dal nonno Salvatore, è considerata patrimonio dell'artigianato italiano. Ogni gioiello che esce dal suo banco porta la firma invisibile di chi sa che la perfezione non si affretta.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .as-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
