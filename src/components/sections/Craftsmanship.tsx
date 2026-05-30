import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Progettazione",
    desc: "Ogni pezzo nasce da un disegno a mano su carta da schizzo. I nostri maestri tracciano linee con la stessa certezza con cui un pittore segna la tela — sapendo già dove si troverà la luce.",
  },
  {
    num: "02",
    title: "Fusione",
    desc: "L'oro viene fuso in crogiuoli d'argilla e lavorato con strumenti antichi che non hanno rivali moderni. Il calore trasforma il metallo; le mani del maestro lo trasformano in arte.",
  },
  {
    num: "03",
    title: "Rifinitura",
    desc: "La finitura a mano conferisce al gioiello la sua personalità definitiva. Ogni superficie riflette ore di pazienza, ogni curva racconta l'attenzione di un artigiano innamorato del proprio mestiere.",
  },
];

export default function Craftsmanship() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".craft-title", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".craft-title", start: "top 80%" }
      });
      gsap.fromTo(".craft-step", { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 0.9, stagger: 0.2, ease: "power3.out",
        scrollTrigger: { trigger: ".craft-steps", start: "top 75%" }
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
        backgroundColor: "#0F0F10",
      }}
    >
      {/* BG image */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "url('https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=1400&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.12,
      }} />
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to right, rgba(15,15,16,0.97) 0%, rgba(15,15,16,0.85) 50%, rgba(15,15,16,0.97) 100%)",
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1300px", margin: "0 auto" }}>
        <div className="craft-title" style={{ textAlign: "center", marginBottom: "6rem", opacity: 0 }}>
          <div style={{ fontFamily: "'Jost'", fontSize: "0.62rem", letterSpacing: "0.4em", color: "#C8A96B", textTransform: "uppercase", marginBottom: "1.5rem" }}>
            Il Processo
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, color: "#F7F5F0", letterSpacing: "0.02em", lineHeight: 1.1 }}>
            L'Arte dell'Artigianato
          </h2>
          <div style={{ width: "60px", height: "1px", backgroundColor: "#C8A96B", margin: "2rem auto 0" }} />
        </div>

        <div className="craft-steps" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem" }}>
          {steps.map((step) => (
            <div key={step.num} className="craft-step" style={{ opacity: 0 }}>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "5rem",
                fontWeight: 300,
                color: "#C8A96B",
                opacity: 0.2,
                lineHeight: 1,
                marginBottom: "1rem",
              }}>
                {step.num}
              </div>
              <div style={{ width: "40px", height: "1px", backgroundColor: "#C8A96B", marginBottom: "1.5rem" }} />
              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.8rem",
                fontWeight: 400,
                color: "#F7F5F0",
                letterSpacing: "0.02em",
                marginBottom: "1rem",
              }}>
                {step.title}
              </h3>
              <p style={{ fontFamily: "'Jost'", fontSize: "0.88rem", color: "#E7D8BC", opacity: 0.75, lineHeight: 1.9 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
