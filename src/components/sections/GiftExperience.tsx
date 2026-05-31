import { useEffect, useRef } from "react";
import { Box, Heart, Truck } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Box,
    title: "Cofanetto di Lusso",
    desc: "Ogni gioiello è presentato in un cofanetto artigianale rivestito in velluto color avorio, con il logo impresso in oro a caldo. Un'opera d'arte essa stessa.",
  },
  {
    icon: Heart,
    title: "Messaggio Personalizzato",
    desc: "Includi un messaggio scritto a mano su carta pregiata, redatto dalla nostra calligrafa. Le parole giuste per rendere indimenticabile il momento.",
  },
  {
    icon: Truck,
    title: "Consegna a Domicilio",
    desc: "Il regalo arriva in condizioni perfette, con un imballaggio esterno discreto e curato. Consegna white-glove su appuntamento in tutta Italia e in Europa.",
  },
];

export default function GiftExperience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".ge-left", { opacity: 0, x: -50 }, {
        opacity: 1, x: 0, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: ".ge-left", start: "top 80%" }
      });
      gsap.fromTo(".ge-right", { opacity: 0, x: 50 }, {
        opacity: 1, x: 0, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: ".ge-right", start: "top 80%" }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ backgroundColor: "#0A0A0B", padding: "8rem 2rem" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }} className="ge-grid">
        <div className="ge-left" style={{ opacity: 0 }}>
          <div style={{ position: "relative", overflow: "hidden" }}>
            <img
            src="https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Confezione regalo di lusso"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                filter: "brightness(0.8)"
              }}
            />
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(10,10,11,0.5) 0%, transparent 50%)",
            }} />
          </div>
        </div>

        <div className="ge-right" style={{ opacity: 0 }}>
          <div style={{ fontFamily: "'Jost'", fontSize: "0.62rem", letterSpacing: "0.4em", color: "#C8A96B", textTransform: "uppercase", marginBottom: "1.5rem" }}>
            Un Gesto di Amore
          </div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
            fontWeight: 300,
            color: "#F7F5F0",
            letterSpacing: "0.02em",
            lineHeight: 1.2,
            marginBottom: "2rem",
          }}>
            L'Esperienza Regalo
          </h2>
          <p style={{ fontFamily: "'Jost'", fontSize: "0.88rem", color: "#E7D8BC", opacity: 0.75, lineHeight: 1.9, marginBottom: "3rem" }}>
            Regalare un gioiello Orafi Italiani è regalare un'emozione che dura per sempre. Ogni aspetto della confezione e della consegna è curato nei minimi dettagli per creare un momento irripetibile.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                <div style={{
                  width: "44px",
                  height: "44px",
                  border: "1px solid rgba(200,169,107,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Icon size={18} color="#C8A96B" />
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 400, color: "#F7F5F0", marginBottom: "0.5rem" }}>
                    {title}
                  </h3>
                  <p style={{ fontFamily: "'Jost'", fontSize: "0.82rem", color: "#E7D8BC", opacity: 0.7, lineHeight: 1.8 }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ge-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
