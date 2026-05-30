import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextField from "@mui/material/TextField";
gsap.registerPlugin(ScrollTrigger);

const benefits = [
  "Anteprime esclusive delle nuove collezioni prima del lancio pubblico",
  "Servizio concierge dedicato per ogni esigenza",
  "Inviti agli eventi privati nell'atelier di Firenze",
  "Accesso prioritario alle edizioni limitate",
  "Consulenza personalizzata con il Maestro Ferretti",
];

export default function MembersClub() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".mc-content", { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: ".mc-content", start: "top 80%" }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: "#0A0A0B", padding: "8rem 2rem", borderTop: "1px solid rgba(200,169,107,0.08)" }}
    >
      <div className="mc-content" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", opacity: 0 }}>
        <div style={{ fontFamily: "'Jost'", fontSize: "0.62rem", letterSpacing: "0.4em", color: "#C8A96B", textTransform: "uppercase", marginBottom: "1.5rem" }}>
          Esclusivo
        </div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, color: "#F7F5F0", letterSpacing: "0.02em", marginBottom: "1.5rem", lineHeight: 1.1 }}>
          Club Privé Orafi Italiani
        </h2>
        <p style={{ fontFamily: "'Jost'", fontSize: "0.9rem", color: "#E7D8BC", opacity: 0.75, lineHeight: 1.9, marginBottom: "3rem", maxWidth: "560px", margin: "0 auto 3rem" }}>
          Un'esperienza riservata ai nostri clienti più esclusivi. L'accesso è su invito, ma puoi richiedere di farne parte lasciandoci la tua email.
        </p>

        <div style={{ textAlign: "left", marginBottom: "3rem", maxWidth: "500px", margin: "0 auto 3rem" }}>
          {benefits.map((b, i) => (
            <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", marginBottom: "1rem" }}>
              <span style={{ color: "#C8A96B", fontSize: "1rem", marginTop: "1px", flexShrink: 0 }}>◆</span>
              <span style={{ fontFamily: "'Jost'", fontSize: "0.85rem", color: "#E7D8BC", opacity: 0.75, lineHeight: 1.7 }}>{b}</span>
            </div>
          ))}
        </div>

        {!submitted ? (
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", maxWidth: "500px", margin: "0 auto" }}>
            <TextField
              type="email"
              placeholder="La tua email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              size="small"
              sx={{
                flex: 1,
                minWidth: "220px",
                "& .MuiOutlinedInput-root": {
                  color: "#F7F5F0",
                  fontFamily: "'Jost', sans-serif",
                  borderRadius: 0,
                  "& fieldset": { borderColor: "rgba(200,169,107,0.3)" },
                  "&:hover fieldset": { borderColor: "rgba(200,169,107,0.6)" },
                  "&.Mui-focused fieldset": { borderColor: "#C8A96B" },
                },
                "& .MuiInputBase-input::placeholder": { color: "#E7D8BC", opacity: 0.4 },
              }}
            />
            <button
              onClick={() => setSubmitted(true)}
              style={{
                fontFamily: "'Jost'",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#0F0F10",
                background: "#C8A96B",
                border: "none",
                padding: "0.8rem 2rem",
                cursor: "pointer",
                transition: "background 0.3s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#E7D8BC")}
              onMouseLeave={e => (e.currentTarget.style.background = "#C8A96B")}
            >
              Richiedi un Invito
            </button>
          </div>
        ) : (
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.3rem",
            fontStyle: "italic",
            color: "#C8A96B",
            padding: "1.5rem",
            border: "1px solid rgba(200,169,107,0.2)",
          }}>
            Grazie. La tua richiesta è stata ricevuta. La contatteremo presto.
          </div>
        )}
      </div>
    </section>
  );
}
