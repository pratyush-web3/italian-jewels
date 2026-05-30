import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextField from "@mui/material/TextField";
gsap.registerPlugin(ScrollTrigger);

export default function Newsletter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".nl-content", { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: ".nl-content", start: "top 80%" }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "linear-gradient(135deg, #0F3D32 0%, #092820 50%, #0F0F10 100%)",
        padding: "8rem 2rem",
        borderTop: "1px solid rgba(200,169,107,0.1)",
      }}
    >
      <div className="nl-content" style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center", opacity: 0 }}>
        <div style={{ fontFamily: "'Jost'", fontSize: "0.62rem", letterSpacing: "0.4em", color: "#C8A96B", textTransform: "uppercase", marginBottom: "1.5rem" }}>
          Newsletter Esclusiva
        </div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, color: "#F7F5F0", letterSpacing: "0.02em", marginBottom: "1.5rem", lineHeight: 1.1 }}>
          Entra nel Mondo<br />
          <em style={{ color: "#C8A96B", fontStyle: "italic" }}>Orafi Italiani</em>
        </h2>
        <p style={{ fontFamily: "'Jost'", fontSize: "0.9rem", color: "#E7D8BC", opacity: 0.75, lineHeight: 1.9, marginBottom: "3rem", maxWidth: "500px", margin: "0 auto 3rem" }}>
          Ricevi in anteprima le nostre nuove collezioni esclusive, gli inviti agli eventi privati nell'atelier e le storie che si celano dietro ogni gioiello.
        </p>

        {!submitted ? (
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", maxWidth: "520px", margin: "0 auto 1.5rem" }}>
            <TextField
              type="email"
              placeholder="La tua email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              size="small"
              sx={{
                flex: 1,
                minWidth: "250px",
                "& .MuiOutlinedInput-root": {
                  color: "#F7F5F0",
                  fontFamily: "'Jost', sans-serif",
                  borderRadius: 0,
                  backgroundColor: "rgba(15,15,16,0.5)",
                  "& fieldset": { borderColor: "rgba(200,169,107,0.3)" },
                  "&:hover fieldset": { borderColor: "rgba(200,169,107,0.6)" },
                  "&.Mui-focused fieldset": { borderColor: "#C8A96B" },
                },
                "& .MuiInputBase-input::placeholder": { color: "#E7D8BC", opacity: 0.4 },
              }}
            />
            <button
              onClick={() => email && setSubmitted(true)}
              style={{
                fontFamily: "'Jost'",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#0F0F10",
                background: "#C8A96B",
                border: "none",
                padding: "0 2rem",
                cursor: "pointer",
                transition: "background 0.3s ease",
                minHeight: "40px",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#E7D8BC")}
              onMouseLeave={e => (e.currentTarget.style.background = "#C8A96B")}
            >
              Iscriviti
            </button>
          </div>
        ) : (
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.3rem",
            fontStyle: "italic",
            color: "#C8A96B",
            padding: "1.5rem 2rem",
            border: "1px solid rgba(200,169,107,0.2)",
            maxWidth: "500px",
            margin: "0 auto 1.5rem",
          }}>
            Benvenuto nel mondo Orafi Italiani. A presto.
          </div>
        )}

        <p style={{ fontFamily: "'Jost'", fontSize: "0.65rem", color: "#E7D8BC", opacity: 0.4, letterSpacing: "0.05em" }}>
          Rispettiamo la tua privacy. Nessuno spam, mai.
        </p>
      </div>
    </section>
  );
}
