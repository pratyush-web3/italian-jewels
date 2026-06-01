import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const collections = [
  {
    id: "venezia",
    name: "Collezione Venezia",
    year: "2024",
    tagline: "Dove l'acqua incontra l'oro",
    story: [
      "Venezia è la città che sfida la logica. Costruita sull'acqua, sopravvissuta ai secoli, ancora insuperabile nella sua bellezza malinconica e dorata. La Collezione Venezia nasce da quella contraddizione — il prezioso che galleggia sull'effimero, il permanente che sfida il fluire del tempo.",
      "I pezzi di questa collezione si ispirano ai riflessi della laguna all'ora del tramonto, quando l'oro del cielo si mescola all'acquamarina dell'acqua e crea una luce che non ha nome. Ogni gioiello cattura quel momento irripetibile e lo cristallizza in oro 18k e pietre selezionate.",
      "L'aquamarina è la pietra protagonista — il suo azzurro verde evoca immediatamente le acque del Canal Grande, l'aria salmastra, le gondole che scivolano in silenzio sotto i ponti. Accompagnata dall'oro bianco e dai diamanti pav, crea contrasti di luce che cambiano ad ogni movimento.",
    ],
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=80",
    ],
  },
  {
    id: "firenze",
    name: "Collezione Firenze",
    year: "2023",
    tagline: "L'anima del Rinascimento",
    story: [
      "Firenze non è semplicemente una città — è l'idea stessa della bellezza fatta luogo. I Medici, Botticelli, Brunelleschi: tutto ciò che di più bello l'uomo ha mai creato ha un filo invisibile che porta a queste strade, a questo cielo, a questo oro.",
      "La Collezione Firenze omaggia la tradizione orafa rinascimentale, quando i maestri fiorentini erano i più ricercati d'Europa. Utilizziamo tecniche di lavorazione che risalgono al XV secolo — il bulino a mano, la filigrana sottile, l'incastonatura a pavé che cattura la luce come non può fare nessuna macchina.",
      "Ogni pezzo di questa collezione racconta una storia specifica di Firenze: il giallo caldo del Ponte Vecchio, il blu del cuppolone del Brunelleschi contro il cielo di giugno, il verde dei cipressi che punteggiano le colline. L'oro 18k giallo è il protagonista assoluto, con smeraldi e diamanti come accenti.",
    ],
    images: [
      "https://images.unsplash.com/photo-1633810542706-90e5ff7557be?w=600&q=80",
      "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=600&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
    ],
  },
  {
    id: "milano",
    name: "Collezione Milano",
    year: "2024",
    tagline: "Modernità con radici profonde",
    story: [
      "Milano è la città dove l'Italia si misura con il mondo. Elegante, ambiziosa, sempre un passo avanti. La Collezione Milano nasce da questo spirito — contemporanea nelle linee, radicata nella tradizione artigianale che rende ogni pezzo inconfondibilmente italiano.",
      "Le linee sono geometriche, pulite, essenziali. Niente di superfluo, niente di accessorio. Ma ogni pezzo nasconde, se guardato da vicino, una complessità artigianale che solo le mani dei nostri maestri possono produrre. È il paradosso dell'eleganza vera: sembra semplice perché è perfetta.",
      "L'oro bianco è il protagonista, con accenti di oro giallo che ricordano le luci dorate dei Navigli al tramonto. I diamanti taglio princess e i rubini cubici creano contrasti netti, quasi architettonici. Una collezione per chi sa che la vera modernità conosce le proprie radici.",
    ],
    images: [
   "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",
    ],
  },
  {
    id: "roma",
    name: "Collezione Roma",
    year: "2023",
    tagline: "La grandezza di Roma, in oro",
    story: [
      "Roma è eterna perché non si preoccupa del tempo. Ha visto imperi sorgere e cadere, ha visto il mondo cambiare mille volte, ed è ancora lì — imperturbabile, maestosa, assolutamente se stessa. La Collezione Roma eredita quella certezza, quell'audacia.",
      "I gioielli di questa collezione sono i più imponenti che abbiamo mai creato. Non pesanti — imponenti. C'è una differenza sottile ma fondamentale: il peso è fisico, l'imponenza è visiva, emotiva, quasi spirituale. Un anello della Collezione Roma si nota anche in una stanza piena di persone.",
      "L'ispirazione è apertamente classica: i fregi del Colosseo, le volute delle colonne del Foro Romano, i mosaici dorati delle basiliche paleocristiane. L'oro 18k giallo domina, con rubini profondi e granati importati che evocano il porpora imperiale. Una collezione per chi non si accontenta di essere notato — vuole essere ricordato.",
    ],
    images: [
      "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=600&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
    ],
  },
];

export default function Collezioni() {
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
      <div id="top" style={{ position: "relative", height: "70vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", scrollMarginTop: "120px" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1400&q=80')",
          backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.35)"
        }} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 2rem" }}>
          <div style={{ fontFamily: "'Jost'", fontSize: "0.62rem", letterSpacing: "0.4em", color: "#C8A96B", textTransform: "uppercase", marginBottom: "1.5rem" }}>Esclusività e Stile</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(3rem, 7vw, 5rem)", fontWeight: 300, color: "#F7F5F0", letterSpacing: "0.03em" }}>Le Nostre Collezioni</h1>
        </div>
      </div>

      {/* Collections */}
      {collections.map((col, idx) => (
        <section key={col.name} id={col.id} style={{ padding: "8rem 2rem", backgroundColor: idx % 2 === 0 ? "#0F0F10" : "#0A0A0B", scrollMarginTop: "120px" }}>
          <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
            <div className="fade-up" style={{ opacity: 0, marginBottom: "4rem", display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
              <div>
                <div style={{ fontFamily: "'Jost'", fontSize: "0.6rem", letterSpacing: "0.35em", color: "#C8A96B", textTransform: "uppercase", marginBottom: "0.75rem" }}>{col.year}</div>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, color: "#F7F5F0", letterSpacing: "0.02em", lineHeight: 1.1, marginBottom: "0.5rem" }}>{col.name}</h2>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontStyle: "italic", color: "#C8A96B" }}>{col.tagline}</p>
              </div>
              <div style={{ width: "80px", height: "1px", backgroundColor: "#C8A96B" }} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start", marginBottom: "4rem" }} className="col-grid">
              <div className="fade-up" style={{ opacity: 0 }}>
                {col.story.map((para, i) => (
                  <p key={i} style={{ fontFamily: "'Jost'", fontSize: "0.88rem", color: "#E7D8BC", opacity: 0.8, lineHeight: 1.95, marginBottom: "1.5rem" }}>{para}</p>
                ))}
              </div>
              <div className="fade-up" style={{ opacity: 0 }}>
                <img src={col.images[0]} alt={col.name} style={{ width: "100%", height: "420px", objectFit: "cover", filter: "brightness(0.8)", marginBottom: "1rem" }} />
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <img src={col.images[1]} alt={col.name} style={{ width: "100%", height: "200px", objectFit: "cover", filter: "brightness(0.8)" }} />
                  <img src={col.images[2]} alt={col.name} style={{ width: "100%", height: "200px", objectFit: "cover", filter: "brightness(0.8)" }} />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <style>{`
        @media (max-width: 768px) { .col-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
