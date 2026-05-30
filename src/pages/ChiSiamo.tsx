import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Heart, Gem, Users } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

const values = [
  { icon: Award, title: "Tradizione", desc: "Ogni tecnica, ogni strumento, ogni gesto affonda le radici nella tradizione orafa fiorentina del XV secolo. Non rompiamo mai la catena." },
  { icon: Heart, title: "Qualità", desc: "Utilizziamo solo l'oro certificato, le pietre selezionate individualmente, e tecniche che richiedono anni di apprendistato. Nessun compromesso." },
  { icon: Gem, title: "Eleganza", desc: "La bellezza vera non urla. Sussurra. Ogni linea dei nostri gioielli è pensata per essere discreta ma impossibile da ignorare." },
  { icon: Users, title: "Artigianalità", desc: "24 maestri artigiani, ognuno con oltre vent'anni di esperienza. Le loro mani sono l'unica macchina che utilizziamo nella creazione." },
];

const team = [
  { name: "Enzo Ferretti", role: "Maestro Orafo — Terza Generazione", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80" },
  { name: "Sofia Rossetti", role: "Direttrice Creativa", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80" },
  { name: "Marco Gentile", role: "Responsabile Clienti", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80" },
];

const timeline = [
  { year: "1887", title: "La Fondazione", desc: "Salvatore Ferretti apre il primo laboratorio in Via de' Tornabuoni. Subito riconosciuto per la precisione e la finezza del lavoro." },
  { year: "1920", title: "Il Riconoscimento Reale", desc: "Casa Savoia commissiona i gioielli per le nozze del principe. La fama di Orafi Italiani supera i confini della Toscana." },
  { year: "1954", title: "Il Premio Nazionale", desc: "La Camera Nazionale della Moda Artigianale assegna ad Orafi Italiani il riconoscimento di eccellenza artigiana italiana." },
  { year: "1978", title: "Espansione a Milano", desc: "Apertura della prima boutique in Via Montenapoleone. La moda milanese incontra l'oro fiorentino." },
  { year: "1995", title: "La Terza Generazione", desc: "Enzo Ferretti, figlio di Carlo e nipote di Salvatore, prende la guida dell'atelier. Nuova visione, stessa anima." },
  { year: "2024", title: "137 Anni di Eccellenza", desc: "Oltre 12.000 gioielli creati, 4.800 clienti in tutto il mondo. La storia continua." },
];

export default function ChiSiamo() {
  const ref = useRef<HTMLDivElement>(null);

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

  return (
    <div ref={ref} style={{ backgroundColor: "#0F0F10", paddingTop: "80px" }}>
      {/* Hero */}
      <div style={{ position: "relative", height: "60vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1200&q=80')",
          backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.4)"
        }} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 2rem" }}>
          <div style={{ fontFamily: "'Jost'", fontSize: "0.62rem", letterSpacing: "0.4em", color: "#C8A96B", textTransform: "uppercase", marginBottom: "1.5rem" }}>La Nostra Storia</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(3rem, 7vw, 5rem)", fontWeight: 300, color: "#F7F5F0", letterSpacing: "0.03em" }}>Chi Siamo</h1>
        </div>
      </div>

      {/* Story */}
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "8rem 2rem" }}>
        <div className="fade-up" style={{ opacity: 0 }}>
          <p style={{ fontFamily: "'Jost'", fontSize: "0.95rem", color: "#E7D8BC", opacity: 0.8, lineHeight: 2, marginBottom: "2rem" }}>
            Nel 1887, Salvatore Ferretti aprì le porte del suo piccolo laboratorio in Via de' Tornabuoni con una convinzione semplice e radicale: l'oro non va soltanto lavorato, va <em style={{ color: "#C8A96B", fontStyle: "italic" }}>ascoltato</em>. Ogni lingotto parlava a lui con una voce che solo le mani educate sapevano sentire. In pochi anni, quella voce aveva trovato eco nelle corti, nelle residenze nobiliari, nelle chiese dove i suoi ex-voto d'oro brillavano come preghiere solidificate.
          </p>
          <p style={{ fontFamily: "'Jost'", fontSize: "0.95rem", color: "#E7D8BC", opacity: 0.8, lineHeight: 2, marginBottom: "2rem" }}>
            Attraverso due guerre mondiali, Orafi Italiani non chiuse mai le proprie porte. Il figlio Carlo continuò il lavoro del padre con la stessa dedizione, aggiungendo la propria visione — più moderna, aperta alle influenze del dopoguerra e del boom economico, ma mai disposta a cedere sulla qualità dei materiali o sulla cura del gesto artigianale.
          </p>
          <p style={{ fontFamily: "'Jost'", fontSize: "0.95rem", color: "#E7D8BC", opacity: 0.8, lineHeight: 2, marginBottom: "2rem" }}>
            Oggi, alla guida dell'atelier c'è Enzo Ferretti, terza generazione, che ha studiato oreficeria a Firenze, Design del Gioiello a Milano, e ha trascorso due anni nell'atelier di un maestro svizzero che gli ha insegnato a lavorare con la precisione di un orologiaio. Eppure, quando torna al banco dell'atelier di Firenze, usa gli stessi strumenti del nonno.
          </p>
          <p style={{ fontFamily: "'Jost'", fontSize: "0.95rem", color: "#E7D8BC", opacity: 0.8, lineHeight: 2, marginBottom: "2rem" }}>
            La nostra filosofia non è mai cambiata: un gioiello non è un oggetto di lusso. È una promessa. È un momento cristallizzato nell'oro, fatto per essere tramandato. Ogni anello che esce dal nostro atelier porta con sé una storia che non finisce mai — quella di chi lo ha creato e quella di chi lo indosserà per sempre.
          </p>
          <p style={{ fontFamily: "'Jost'", fontSize: "0.95rem", color: "#E7D8BC", opacity: 0.8, lineHeight: 2 }}>
            In 137 anni abbiamo creato oltre 12.000 pezzi, ognuno unico, ognuno irripetibile. Ma la cosa di cui andiamo più fieri non è il numero — è sapere che in questo momento, in qualche casa di Firenze, Roma, Milano, Parigi, New York, una donna sta sfiorando un anello Orafi Italiani e sentendo il peso della storia nelle proprie dita.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section style={{ backgroundColor: "#0A0A0B", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }} className="fade-up">
          <div style={{ fontFamily: "'Jost'", fontSize: "0.62rem", letterSpacing: "0.4em", color: "#C8A96B", textTransform: "uppercase", marginBottom: "1.5rem" }}>La Nostra Missione</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 300, color: "#F7F5F0", lineHeight: 1.4, marginBottom: "2rem" }}>
            "Creare gioielli che superino il tempo e diventino parte della storia<br />
            <em style={{ color: "#C8A96B", fontStyle: "italic" }}>di ogni famiglia che li sceglie."</em>
          </h2>
          <p style={{ fontFamily: "'Jost'", fontSize: "0.9rem", color: "#E7D8BC", opacity: 0.7, lineHeight: 1.9 }}>
            Non misuriamo il successo in vendite o premi — lo misuriamo nei gioielli che vengono tramandati di generazione in generazione, nelle storie che i clienti ci raccontano decenni dopo l'acquisto, nella certezza che ciò che creiamo durerà più a lungo di noi.
          </p>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "8rem 2rem", maxWidth: "1300px", margin: "0 auto" }}>
        <div className="fade-up" style={{ textAlign: "center", marginBottom: "4rem", opacity: 0 }}>
          <div style={{ fontFamily: "'Jost'", fontSize: "0.62rem", letterSpacing: "0.4em", color: "#C8A96B", textTransform: "uppercase", marginBottom: "1.5rem" }}>I Nostri Valori</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#F7F5F0" }}>Ciò in cui Crediamo</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2rem" }}>
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="fade-up" style={{ opacity: 0, padding: "2.5rem", border: "1px solid rgba(200,169,107,0.1)", transition: "border-color 0.4s" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(200,169,107,0.3)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(200,169,107,0.1)")}
            >
              <Icon size={26} color="#C8A96B" style={{ marginBottom: "1.5rem", opacity: 0.8 }} />
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", fontWeight: 400, color: "#F7F5F0", marginBottom: "1rem" }}>{title}</h3>
              <p style={{ fontFamily: "'Jost'", fontSize: "0.83rem", color: "#E7D8BC", opacity: 0.7, lineHeight: 1.9 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section style={{ backgroundColor: "#0A0A0B", padding: "8rem 2rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="fade-up" style={{ textAlign: "center", marginBottom: "4rem", opacity: 0 }}>
            <div style={{ fontFamily: "'Jost'", fontSize: "0.62rem", letterSpacing: "0.4em", color: "#C8A96B", textTransform: "uppercase", marginBottom: "1.5rem" }}>Le Persone</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#F7F5F0" }}>Il Nostro Team</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem" }}>
            {team.map(member => (
              <div key={member.name} className="fade-up" style={{ opacity: 0, textAlign: "center" }}>
                <div style={{ position: "relative", overflow: "hidden", marginBottom: "1.5rem" }}>
                  <img src={member.img} alt={member.name} style={{ width: "100%", height: "340px", objectFit: "cover", objectPosition: "top", filter: "brightness(0.75) grayscale(10%)", transition: "transform 0.5s ease" }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 400, color: "#F7F5F0", marginBottom: "0.5rem" }}>{member.name}</h3>
                <div style={{ fontFamily: "'Jost'", fontSize: "0.65rem", letterSpacing: "0.15em", color: "#C8A96B", textTransform: "uppercase" }}>{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: "8rem 2rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div className="fade-up" style={{ textAlign: "center", marginBottom: "5rem", opacity: 0 }}>
            <div style={{ fontFamily: "'Jost'", fontSize: "0.62rem", letterSpacing: "0.4em", color: "#C8A96B", textTransform: "uppercase", marginBottom: "1.5rem" }}>Il Cammino</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#F7F5F0" }}>La Nostra Storia nel Tempo</h2>
          </div>
          {timeline.map((item, i) => (
            <div key={item.year} className="fade-up" style={{ opacity: 0, display: "flex", gap: "3rem", marginBottom: "3rem", alignItems: "flex-start" }}>
              <div style={{ flexShrink: 0, width: "80px", textAlign: "right" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", fontWeight: 300, color: "#C8A96B" }}>{item.year}</div>
              </div>
              <div style={{ flex: 1, paddingLeft: "2rem", borderLeft: "1px solid rgba(200,169,107,0.2)", paddingBottom: "2rem" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#C8A96B", position: "relative", left: "-2.5rem", top: "8px", marginBottom: "-8px" }} />
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 400, color: "#F7F5F0", marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ fontFamily: "'Jost'", fontSize: "0.85rem", color: "#E7D8BC", opacity: 0.7, lineHeight: 1.8 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
