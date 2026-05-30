import { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: "Contessa Alessandra Monteverdi",
    city: "Roma",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    review: "Ho indossato gioielli di tutto il mondo, ma quello che Maestro Ferretti ha creato per il mio anniversario di matrimonio non ha paragone. La qualità dell'oro, la precisione nell'incastonatura dei diamanti, e soprattutto l'attenzione con cui hanno ascoltato la nostra storia. Orafi Italiani non vende gioielli — regala emozioni che durano generazioni. Sono tornata tre volte e ogni volta è stata un'esperienza diversa, sempre memorabile.",
  },
  {
    name: "Dott. Federico Bianchi",
    city: "Milano",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    review: "Cercavo qualcosa di veramente esclusivo per la proposta di matrimonio. Il team di Orafi Italiani mi ha guidato attraverso ogni scelta con una competenza e una passione che raramente si trovano. L'anello che hanno creato è esattamente la promessa che volevo fare: perfetto, unico, eterno. Lei ha pianto di gioia. Anch'io, quando nessuno guardava.",
  },
  {
    name: "Signora Chiara Esposito",
    city: "Napoli",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    review: "Mia madre mi aveva parlato di Orafi Italiani per tutta la vita. Quando ho finalmente visitato l'atelier di Firenze, ho capito perché. L'ambiente, le persone, la storia che traspare da ogni angolo. Ho acquistato una collana per mia figlia — ho scelto di trasmetterle non solo un gioiello, ma una tradizione.",
  },
  {
    name: "Marchesa Isabella Valmonte",
    city: "Firenze",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80",
    review: "Sono cliente di Orafi Italiani da trentadue anni. Ho visto l'atelier crescere, ho visto il giovane Enzo prendere il posto del padre, ho visto la qualità mantenersi costantemente straordinaria attraverso i decenni. Non potrei immaginare di rivolgermi ad altri per i gioielli che portano il peso della memoria della mia famiglia.",
  },
  {
    name: "Avv. Lorenzo Conti",
    city: "Torino",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    review: "Un gioiello Orafi Italiani è un investimento, non una spesa. L'ho capito quando, vent'anni dopo l'acquisto del primo pezzo, l'ho fatto valutare: aveva triplicato il suo valore. Ma quello che conta davvero è che mia moglie non lo toglie mai dal polso. Questo vale più di qualsiasi cifra.",
  },
  {
    name: "Sig.ra Beatrice Santoro",
    city: "Venezia",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80",
    review: "Mi hanno regalato un gioiello Orafi Italiani per i miei cinquant'anni. La scatola, il certificato, l'attenzione con cui era stato imballato — tutto sembrava comunicare rispetto. Per me, per l'occasione, per il gioiello stesso. Ho aperto quella scatola e ho pianto. Non dal costo — dalla cura.",
  },
];

function Stars() {
  return (
    <div style={{ display: "flex", gap: "3px", marginBottom: "1.25rem" }}>
      {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="#C8A96B" color="#C8A96B" />)}
    </div>
  );
}

export default function Testimonianze() {
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
      <div style={{ position: "relative", height: "50vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1400&q=80')", backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.3)" }} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 2rem" }}>
          <div style={{ fontFamily: "'Jost'", fontSize: "0.62rem", letterSpacing: "0.4em", color: "#C8A96B", textTransform: "uppercase", marginBottom: "1.5rem" }}>Chi ci ha scelto</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(3rem, 7vw, 5rem)", fontWeight: 300, color: "#F7F5F0", letterSpacing: "0.03em" }}>Testimonianze</h1>
        </div>
      </div>

      {/* Reviews */}
      <section style={{ padding: "8rem 2rem", maxWidth: "1300px", margin: "0 auto" }}>
        <div className="fade-up" style={{ textAlign: "center", marginBottom: "5rem", opacity: 0 }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#F7F5F0", marginBottom: "1.5rem" }}>
            Le Parole di Chi Ci Ha Scelto
          </h2>
          <p style={{ fontFamily: "'Jost'", fontSize: "0.88rem", color: "#E7D8BC", opacity: 0.65, maxWidth: "600px", margin: "0 auto", lineHeight: 1.9 }}>
            Ogni voce qui raccolta appartiene a una storia reale, a un momento reale, a un gioiello che è diventato parte di una vita. Le parole migliori per descrivere il nostro lavoro sono sempre quelle degli altri.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
          {reviews.map(r => (
            <div key={r.name} className="fade-up" style={{
              opacity: 0,
              padding: "2.5rem",
              border: "1px solid rgba(200,169,107,0.1)",
              transition: "border-color 0.4s",
              position: "relative",
            }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(200,169,107,0.3)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(200,169,107,0.1)")}
            >
              <div style={{ position: "absolute", top: "1.5rem", right: "2rem", fontFamily: "'Cormorant Garamond', serif", fontSize: "5rem", color: "#C8A96B", opacity: 0.06, lineHeight: 1, userSelect: "none" }}>"</div>
              <Stars />
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", fontStyle: "italic", color: "#E7D8BC", lineHeight: 1.85, marginBottom: "2rem", position: "relative", zIndex: 1 }}>
                {r.review}
              </p>
              <div style={{ display: "flex", gap: "1rem", alignItems: "center", borderTop: "1px solid rgba(200,169,107,0.12)", paddingTop: "1.25rem" }}>
                <img src={r.img} alt={r.name} style={{ width: "44px", height: "44px", borderRadius: "50%", objectFit: "cover", filter: "brightness(0.85) grayscale(10%)" }} />
                <div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", fontWeight: 500, color: "#F7F5F0" }}>{r.name}</div>
                  <div style={{ fontFamily: "'Jost'", fontSize: "0.62rem", letterSpacing: "0.15em", color: "#C8A96B", textTransform: "uppercase" }}>{r.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
