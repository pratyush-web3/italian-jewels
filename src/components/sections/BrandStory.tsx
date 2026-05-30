import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function BrandStory() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".brand-left", { opacity: 0, x: -50 }, {
        opacity: 1, x: 0, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: ".brand-left", start: "top 80%" }
      });
      gsap.fromTo(".brand-right", { opacity: 0, x: 50 }, {
        opacity: 1, x: 0, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: ".brand-right", start: "top 80%" }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ backgroundColor: "#0F0F10", padding: "8rem 2rem", overflow: "hidden" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }} className="brand-grid">
        {/* Left */}
        <div className="brand-left" style={{ opacity: 0, position: "relative" }}>
          <div style={{
            position: "absolute", top: "-2rem", left: "-1rem",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(8rem, 15vw, 14rem)",
            fontWeight: 300,
            color: "#C8A96B",
            opacity: 0.07,
            lineHeight: 1,
            userSelect: "none",
            zIndex: 0,
          }}>137</div>

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.62rem",
              letterSpacing: "0.35em",
              color: "#C8A96B",
              textTransform: "uppercase",
              marginBottom: "2rem",
            }}>
              La Nostra Storia
            </div>

            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 300,
              color: "#F7F5F0",
              lineHeight: 1.2,
              marginBottom: "2.5rem",
              letterSpacing: "0.02em",
            }}>
              Oltre un Secolo di<br />
              <em style={{ color: "#C8A96B", fontStyle: "italic" }}>Eccellenza Artigianale</em>
            </h2>

            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.9rem", color: "#E7D8BC", opacity: 0.8, lineHeight: 1.9, marginBottom: "1.5rem" }}>
              Dal 1887, la famiglia Ferretti plasma l'oro italiano con mani che conoscono la materia come si conosce un volto amato. Ogni pezzo nasce in silenzio, nel vecchio atelier di Via de' Tornabuoni, dove il tempo rallenta e la bellezza diventa permanente.
            </p>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.9rem", color: "#E7D8BC", opacity: 0.8, lineHeight: 1.9, marginBottom: "1.5rem" }}>
              Non produciamo gioielli. Custodiamo storie. Ogni anello, ogni collana porta con sé un'emozione, una promessa, un momento che merita di vivere per sempre.
            </p>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.9rem", color: "#E7D8BC", opacity: 0.8, lineHeight: 1.9, marginBottom: "2.5rem" }}>
              L'artigianalità fiorentina non è una tecnica — è un'eredità. È la certezza che ciò che creiamo oggi sarà tramandato con orgoglio alle generazioni che verranno.
            </p>

            <blockquote style={{
              borderLeft: "2px solid #C8A96B",
              paddingLeft: "1.5rem",
              margin: "2rem 0",
            }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.4rem",
                fontStyle: "italic",
                color: "#C8A96B",
                lineHeight: 1.5,
              }}>
                "Il gioiello perfetto non si crea. Si rivela."
              </p>
              <cite style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                color: "#E7D8BC",
                opacity: 0.6,
                textTransform: "uppercase",
                fontStyle: "normal",
                display: "block",
                marginTop: "0.75rem",
              }}>
                — Salvatore Ferretti, Fondatore
              </cite>
            </blockquote>
          </div>
        </div>

        {/* Right — image */}
        <div className="brand-right" style={{ opacity: 0, position: "relative" }}>
          <div style={{
            position: "absolute",
            top: "-1.5rem",
            right: "-1.5rem",
            width: "60%",
            height: "60%",
            border: "1px solid rgba(200,169,107,0.15)",
            zIndex: 0,
          }} />
          <img
            src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80"
            alt="Artigiano orafo al lavoro"
            style={{
              width: "100%",
              height: "580px",
              objectFit: "cover",
              position: "relative",
              zIndex: 1,
              filter: "brightness(0.85) contrast(1.05)",
            }}
          />
          <div style={{
            position: "absolute",
            bottom: "2rem",
            left: "-2rem",
            zIndex: 2,
            backgroundColor: "#0F0F10",
            border: "1px solid rgba(200,169,107,0.2)",
            padding: "1.5rem 2rem",
          }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem", color: "#C8A96B", lineHeight: 1 }}>137</div>
            <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.65rem", letterSpacing: "0.15em", color: "#E7D8BC", opacity: 0.7, textTransform: "uppercase", marginTop: "0.25rem" }}>Anni di Eccellenza</div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .brand-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
