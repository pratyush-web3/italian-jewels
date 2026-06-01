import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function LimitedEdition() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".le-content", { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: ".le-content", start: "top 80%" }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "10rem 2rem",
        overflow: "hidden",
        backgroundColor: "#080808",
      }}
    >
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "url('https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=1400&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.08,
      }} />
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse at center, rgba(200,169,107,0.04) 0%, rgba(8,8,8,0.97) 70%)",
      }} />

      <div className="le-content" style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: "700px", margin: "0 auto", opacity: 0 }}>
        <div style={{
          display: "inline-block",
          border: "1px solid rgba(200,169,107,0.25)",
          padding: "0.6rem 2rem",
          marginBottom: "3rem",
        }}>
          <span style={{
            fontFamily: "'Jost'",
            fontSize: "0.6rem",
            letterSpacing: "0.5em",
            color: "#C8A96B",
            textTransform: "uppercase",
          }}>
            Edizione Limitata
          </span>
        </div>

        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2.5rem, 6vw, 5rem)",
          fontWeight: 300,
          color: "#F7F5F0",
          letterSpacing: "0.02em",
          lineHeight: 1.1,
          marginBottom: "1.5rem",
        }}>
          Collezione Esclusiva
          <br />
          <em style={{ color: "#C8A96B", fontStyle: "italic" }}>Solo 12 Pezzi</em>
        </h2>

        <div style={{
          width: "60px",
          height: "1px",
          backgroundColor: "#C8A96B",
          margin: "0 auto 2.5rem",
        }} />

        <p style={{
          fontFamily: "'Jost'",
          fontSize: "0.9rem",
          color: "#E7D8BC",
          opacity: 0.8,
          lineHeight: 1.9,
          marginBottom: "3rem",
        }}>
          Dodici pezzi unici, numerati e certificati. Ogni gioiello di questa collezione straordinaria è accompagnato da un certificato di autenticità firmato dal Maestro Enzo Ferretti e da una custodia esclusiva in pelle fiorentina. Una volta esauriti, non verranno mai riprodotti.
        </p>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "4rem",
          marginBottom: "3.5rem",
          flexWrap: "wrap",
        }}>
          {["Numerato", "Certificato", "Irripetibile"].map(item => (
            <div key={item} style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "0.8rem",
                fontStyle: "italic",
                color: "#C8A96B",
                marginBottom: "0.25rem",
              }}>
                {item}
              </div>
              <div style={{ width: "20px", height: "1px", backgroundColor: "#C8A96B", margin: "0 auto", opacity: 0.4 }} />
            </div>
          ))}
        </div>

        <Link href="/contatti#contact-form">
          <button
            style={{
              fontFamily: "'Jost'",
              fontSize: "0.72rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#0F0F10",
              background: "#C8A96B",
              border: "none",
              padding: "1.1rem 3rem",
              cursor: "pointer",
              transition: "all 0.4s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "#E7D8BC"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#C8A96B"; }}
          >
            Richiedi Informazioni
          </button>
        </Link>
      </div>
    </section>
  );
}
