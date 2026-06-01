import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { MessageCircle, Gem, Package } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: MessageCircle,
    title: "Consulenza Privata",
    desc: "Un incontro riservato nell'atelier di Firenze o presso la vostra residenza, con uno dei nostri maestri orafi. Ogni dettaglio, ogni desiderio, preso in considerazione.",
  },
  {
    icon: Gem,
    title: "Creazione Su Misura",
    desc: "Dalla scelta della pietra al disegno finale, ogni aspetto del vostro gioiello esclusivo viene definito insieme a voi. Il risultato sarà unico nel mondo.",
  },
  {
    icon: Package,
    title: "Consegna Riservata",
    desc: "Il vostro gioiello arriva con corriere dedicato, nella sua custodia esclusiva, accompagnato da tutta la documentazione di autenticità e provenienza.",
  },
];

export default function ConciergeService() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".cs-title", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".cs-title", start: "top 85%" }
      });
      gsap.fromTo(".cs-card", { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out",
        scrollTrigger: { trigger: ".cs-grid", start: "top 80%" }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ backgroundColor: "#0F0F10", padding: "8rem 2rem" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <div className="cs-title" style={{ textAlign: "center", marginBottom: "5rem", opacity: 0 }}>
          <div style={{ fontFamily: "'Jost'", fontSize: "0.62rem", letterSpacing: "0.4em", color: "#C8A96B", textTransform: "uppercase", marginBottom: "1.5rem" }}>
            Il Nostro Impegno
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, color: "#F7F5F0", letterSpacing: "0.02em", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Servizio Concierge Gioielli
          </h2>
          <p style={{ fontFamily: "'Jost'", fontSize: "0.9rem", color: "#E7D8BC", opacity: 0.7, lineHeight: 1.9, maxWidth: "600px", margin: "0 auto 2rem" }}>
            Ogni cliente merita un'esperienza irripetibile. Il nostro servizio concierge trasforma ogni acquisto in un momento di puro privilegio, con la stessa cura con cui trattiamo l'oro nelle nostre mani.
          </p>
          <div style={{ width: "60px", height: "1px", backgroundColor: "#C8A96B", margin: "0 auto" }} />
        </div>

        <div className="cs-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginBottom: "4rem" }}>
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="cs-card"
              style={{
                padding: "3rem",
                border: "1px solid rgba(200,169,107,0.1)",
                transition: "border-color 0.4s ease",
                opacity: 0,
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(200,169,107,0.3)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(200,169,107,0.1)")}
            >
              <Icon size={28} color="#C8A96B" style={{ marginBottom: "1.5rem", opacity: 0.8 }} />
              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.6rem",
                fontWeight: 400,
                color: "#F7F5F0",
                marginBottom: "1rem",
                letterSpacing: "0.02em",
              }}>
                {title}
              </h3>
              <p style={{ fontFamily: "'Jost'", fontSize: "0.85rem", color: "#E7D8BC", opacity: 0.7, lineHeight: 1.9 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/contatti#contact-top">
            <button
              style={{
                fontFamily: "'Jost'",
                fontSize: "0.72rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#C8A96B",
                background: "transparent",
                border: "1px solid rgba(200,169,107,0.4)",
                padding: "1rem 2.5rem",
                cursor: "pointer",
                transition: "all 0.4s ease",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "#C8A96B"; e.currentTarget.style.color = "#0F0F10"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#C8A96B"; }}
            >
              Prenota una Consulenza
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
