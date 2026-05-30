import { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Contessa Alessandra Monteverdi",
    city: "Roma",
    review: "Ho indossato gioielli di tutto il mondo, ma quello che Maestro Ferretti ha creato per il mio anniversario di matrimonio non ha paragone. La qualità dell'oro, la precisione nell'incastonatura dei diamanti, e soprattutto l'attenzione con cui hanno ascoltato la nostra storia. Orafi Italiani non vende gioielli — regala emozioni che durano generazioni.",
  },
  {
    name: "Dott. Federico Bianchi",
    city: "Milano",
    review: "Cercavo qualcosa di veramente esclusivo per la proposta di matrimonio. Il team di Orafi Italiani mi ha guidato attraverso ogni scelta con una competenza e una passione che raramente si trovano. L'anello che hanno creato è esattamente la promessa che volevo fare: perfetto, unico, eterno. Lei ha pianto di gioia. Anch'io.",
  },
  {
    name: "Signora Chiara Esposito",
    city: "Napoli",
    review: "Mia madre mi aveva parlato di Orafi Italiani per tutta la vita. Quando ho finalmente visitato l'atelier di Firenze, ho capito perché. L'ambiente, le persone, la storia che traspare da ogni angolo. Ho acquistato una collana per mia figlia — ho scelto di trasmetterle non solo un gioiello, ma una tradizione. Tornerò certamente.",
  },
];

function Stars() {
  return (
    <div style={{ display: "flex", gap: "4px", marginBottom: "1.5rem" }}>
      {[1,2,3,4,5].map(i => (
        <Star key={i} size={16} fill="#C8A96B" color="#C8A96B" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".test-title", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".test-title", start: "top 85%" }
      });
      gsap.fromTo(".test-card", { opacity: 0, y: 60 }, {
        opacity: 1, y: 0, duration: 0.9, stagger: 0.2, ease: "power3.out",
        scrollTrigger: { trigger: ".test-grid", start: "top 80%" }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ backgroundColor: "#0A0A0B", padding: "8rem 2rem" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <div className="test-title" style={{ textAlign: "center", marginBottom: "5rem", opacity: 0 }}>
          <div style={{ fontFamily: "'Jost'", fontSize: "0.62rem", letterSpacing: "0.4em", color: "#C8A96B", textTransform: "uppercase", marginBottom: "1.5rem" }}>
            Chi ci ha scelto
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 3.8rem)", fontWeight: 300, color: "#F7F5F0", letterSpacing: "0.02em" }}>
            Le Parole dei Nostri Clienti
          </h2>
          <div style={{ width: "60px", height: "1px", backgroundColor: "#C8A96B", margin: "2rem auto 0" }} />
        </div>

        <div className="test-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="test-card"
              style={{
                padding: "2.5rem",
                border: "1px solid rgba(200,169,107,0.1)",
                position: "relative",
                opacity: 0,
                transition: "border-color 0.4s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(200,169,107,0.3)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(200,169,107,0.1)")}
            >
              <div style={{
                position: "absolute",
                top: "1.5rem",
                right: "2rem",
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "5rem",
                color: "#C8A96B",
                opacity: 0.08,
                lineHeight: 1,
                userSelect: "none",
              }}>"</div>

              <Stars />

              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.05rem",
                fontStyle: "italic",
                color: "#E7D8BC",
                lineHeight: 1.8,
                marginBottom: "2rem",
                position: "relative",
                zIndex: 1,
              }}>
                {t.review}
              </p>

              <div style={{ borderTop: "1px solid rgba(200,169,107,0.15)", paddingTop: "1.25rem" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontWeight: 500, color: "#F7F5F0", marginBottom: "0.25rem" }}>
                  {t.name}
                </div>
                <div style={{ fontFamily: "'Jost'", fontSize: "0.65rem", letterSpacing: "0.15em", color: "#C8A96B", textTransform: "uppercase" }}>
                  {t.city}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
