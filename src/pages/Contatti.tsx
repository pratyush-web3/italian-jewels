import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextField from "@mui/material/TextField";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
gsap.registerPlugin(ScrollTrigger);

export default function Contatti() {
  const ref = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ nome: "", email: "", telefono: "", messaggio: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".fade-up").forEach(el => {
        gsap.fromTo(el, { opacity: 0, y: 50 }, {
          opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" }
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const inputSx = {
    width: "100%",
    "& .MuiOutlinedInput-root": {
      color: "#F7F5F0",
      fontFamily: "'Jost', sans-serif",
      fontSize: "0.88rem",
      borderRadius: 0,
      backgroundColor: "rgba(15,15,16,0.5)",
      "& fieldset": { borderColor: "rgba(200,169,107,0.2)" },
      "&:hover fieldset": { borderColor: "rgba(200,169,107,0.5)" },
      "&.Mui-focused fieldset": { borderColor: "#C8A96B" },
    },
    "& .MuiInputLabel-root": { color: "#E7D8BC", opacity: 0.5, fontFamily: "'Jost', sans-serif", fontSize: "0.82rem" },
    "& .MuiInputLabel-root.Mui-focused": { color: "#C8A96B", opacity: 1 },
    "& .MuiInputBase-input": { color: "#F7F5F0" },
  };

  return (
    <div ref={ref} style={{ backgroundColor: "#0F0F10", paddingTop: "80px" }}>
      {/* Hero */}
      <div style={{ position: "relative", height: "50vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1400&q=80')", backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.3)" }} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 2rem" }}>
          <div style={{ fontFamily: "'Jost'", fontSize: "0.62rem", letterSpacing: "0.4em", color: "#C8A96B", textTransform: "uppercase", marginBottom: "1.5rem" }}>Siamo a vostra disposizione</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(3rem, 7vw, 5rem)", fontWeight: 300, color: "#F7F5F0", letterSpacing: "0.03em" }}>Contattaci</h1>
        </div>
      </div>

      <section style={{ padding: "8rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem" }} className="contact-grid">
          {/* Form */}
          <div className="fade-up" style={{ opacity: 0 }}>
            <div style={{ fontFamily: "'Jost'", fontSize: "0.62rem", letterSpacing: "0.35em", color: "#C8A96B", textTransform: "uppercase", marginBottom: "1.5rem" }}>Scriveteci</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem", fontWeight: 300, color: "#F7F5F0", marginBottom: "2.5rem" }}>Invia un Messaggio</h2>

            {!submitted ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                  <TextField label="Nome e Cognome" value={form.nome} onChange={e => setForm({...form, nome: e.target.value})} sx={inputSx} />
                  <TextField label="Email" type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} sx={inputSx} />
                </div>
                <TextField label="Telefono" value={form.telefono} onChange={e => setForm({...form, telefono: e.target.value})} sx={inputSx} />
                <TextField
                  label="Messaggio"
                  multiline
                  rows={5}
                  value={form.messaggio}
                  onChange={e => setForm({...form, messaggio: e.target.value})}
                  sx={inputSx}
                />
                <div>
                  <button
                    onClick={() => form.nome && form.email && setSubmitted(true)}
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
                      transition: "background 0.3s ease",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = "#E7D8BC")}
                    onMouseLeave={e => (e.currentTarget.style.background = "#C8A96B")}
                  >
                    Invia Messaggio
                  </button>
                </div>
              </div>
            ) : (
              <div style={{
                padding: "3rem",
                border: "1px solid rgba(200,169,107,0.2)",
                textAlign: "center",
              }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontStyle: "italic", color: "#C8A96B", marginBottom: "1rem" }}>
                  Grazie per averci contattato.
                </div>
                <p style={{ fontFamily: "'Jost'", fontSize: "0.85rem", color: "#E7D8BC", opacity: 0.7, lineHeight: 1.8 }}>
                  Il vostro messaggio è stato ricevuto. Vi risponderemo entro 24 ore nei giorni lavorativi.
                </p>
              </div>
            )}
          </div>

          {/* Info */}
          <div className="fade-up" style={{ opacity: 0 }}>
            <div style={{ fontFamily: "'Jost'", fontSize: "0.62rem", letterSpacing: "0.35em", color: "#C8A96B", textTransform: "uppercase", marginBottom: "1.5rem" }}>Dove Trovarci</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem", fontWeight: 300, color: "#F7F5F0", marginBottom: "3rem" }}>Informazioni</h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginBottom: "3rem" }}>
              <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                <div style={{ width: "40px", height: "40px", border: "1px solid rgba(200,169,107,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <MapPin size={16} color="#C8A96B" />
                </div>
                <div>
                  <div style={{ fontFamily: "'Jost'", fontSize: "0.65rem", letterSpacing: "0.15em", color: "#C8A96B", textTransform: "uppercase", marginBottom: "0.5rem" }}>Indirizzo</div>
                  <div style={{ fontFamily: "'Jost'", fontSize: "0.88rem", color: "#E7D8BC", opacity: 0.8, lineHeight: 1.7 }}>{siteConfig.address}</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                <div style={{ width: "40px", height: "40px", border: "1px solid rgba(200,169,107,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Phone size={16} color="#C8A96B" />
                </div>
                <div>
                  <div style={{ fontFamily: "'Jost'", fontSize: "0.65rem", letterSpacing: "0.15em", color: "#C8A96B", textTransform: "uppercase", marginBottom: "0.5rem" }}>Telefono</div>
                  <a href={`tel:${siteConfig.phone}`} style={{ fontFamily: "'Jost'", fontSize: "0.88rem", color: "#E7D8BC", opacity: 0.8, textDecoration: "none" }}>{siteConfig.phone}</a>
                </div>
              </div>
              <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                <div style={{ width: "40px", height: "40px", border: "1px solid rgba(200,169,107,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Mail size={16} color="#C8A96B" />
                </div>
                <div>
                  <div style={{ fontFamily: "'Jost'", fontSize: "0.65rem", letterSpacing: "0.15em", color: "#C8A96B", textTransform: "uppercase", marginBottom: "0.5rem" }}>Email</div>
                  <a href={`mailto:${siteConfig.email}`} style={{ fontFamily: "'Jost'", fontSize: "0.88rem", color: "#E7D8BC", opacity: 0.8, textDecoration: "none" }}>{siteConfig.email}</a>
                </div>
              </div>
              <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                <div style={{ width: "40px", height: "40px", border: "1px solid rgba(200,169,107,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Clock size={16} color="#C8A96B" />
                </div>
                <div>
                  <div style={{ fontFamily: "'Jost'", fontSize: "0.65rem", letterSpacing: "0.15em", color: "#C8A96B", textTransform: "uppercase", marginBottom: "0.5rem" }}>Orari</div>
                  <div style={{ fontFamily: "'Jost'", fontSize: "0.88rem", color: "#E7D8BC", opacity: 0.8, lineHeight: 1.8 }}>
                    <div>{siteConfig.businessHours.weekdays}</div>
                    <div>{siteConfig.businessHours.saturday}</div>
                    <div>{siteConfig.businessHours.sunday}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div style={{
              height: "220px",
              backgroundColor: "#0A0A0B",
              border: "1px solid rgba(200,169,107,0.12)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
            }}>
              <MapPin size={28} color="#C8A96B" opacity={0.5} />
              <div style={{ fontFamily: "'Jost'", fontSize: "0.75rem", color: "#E7D8BC", opacity: 0.4, letterSpacing: "0.1em", textAlign: "center" }}>
                Via de' Tornabuoni, 15<br />Firenze, Italia
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }
      `}</style>
    </div>
  );
}
