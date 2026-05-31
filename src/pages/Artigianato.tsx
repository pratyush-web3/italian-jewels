import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Progettazione",
    subtitle: "Il gioiello nasce sulla carta",
    content: [
      "Tutto inizia con un foglio bianco e una matita. I nostri maestri disegnano a mano libera, con la certezza di chi conosce già il risultato prima ancora di posare il primo segno. Il disegno non è solo un progetto tecnico — è la prima conversazione tra l'artigiano e il materiale.",
      "Per ogni pezzo personalizzato, il processo di progettazione include almeno tre incontri con il cliente. Ascoltiamo, chiediamo, interpretiamo. Vogliamo capire non solo cosa si desidera vedere, ma cosa si vuole sentire quando si indossa quel gioiello.",
    ],
    img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
  },
  {
    num: "02",
    title: "Selezione dei Materiali",
    subtitle: "Solo il meglio ha il diritto di diventare arte",
    content: [
      "La selezione dell'oro e delle pietre preziose è un processo che non accettiamo di delegare. Ogni mese, il Maestro Ferretti visita i fornitori certificati a Valenza Po, il cuore dell'oreficeria italiana, e sceglie personalmente i materiali che entreranno nei nostri gioielli.",
      "Per le pietre, il processo è ancora più rigoroso. Collaboriamo con gemologi certificati GIA che ci portano selezioni ristrette di diamanti, smeraldi, rubini e zaffiri. Per ogni pietra che entra nel nostro atelier, ne valutiamo cinquanta. Accettiamo solo quelle che ci fermano il respiro.",
    ],
    img: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
  },
  {
    num: "03",
    title: "Lavorazione a Mano",
    subtitle: "L'oro obbedisce solo alle mani giuste",
    content: [
      "La lavorazione dell'oro è un dialogo fisico, quasi intimo. Il metallo ha una memoria — ricorda ogni pressione, ogni temperatura, ogni gesto. I nostri orafi conoscono questo linguaggio da decenni. Sanno quando l'oro è pronto per essere piegato, quando ha bisogno di riposare, quando la fiamma deve avvicinarsi o allontanarsi.",
      "Utilizziamo tecniche che risalgono al Rinascimento: il bulino a mano, la filigrana traforata, il granulato in stile etrusco, la lavorazione al tornio. Accanto a queste, impieghiamo strumenti moderni di precisione per i controlli dimensionali — ma il tocco finale è sempre umano.",
    ],
    img: "https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    num: "04",
    title: "Controllo Qualità",
    subtitle: "La perfezione non è un obiettivo — è il punto di partenza",
    content: [
      "Prima che un gioiello lasci il nostro atelier, passa attraverso undici punti di controllo separati. Verifichiamo la struttura, la finitura, il posizionamento delle pietre, la tenuta degli incastoni, la luminosità della superficie e la congruenza tra il pezzo finale e il progetto originale.",
      "L'ultimo controllo è il più importante: il gioiello viene indossato da uno dei nostri maestri, osservato alla luce naturale e poi alla luce artificiale, fotografato da ogni angolazione. Solo quando siamo certi che nulla — assolutamente nulla — possa essere migliorato, il gioiello è pronto per essere consegnato.",
    ],
    img: "https://images.pexels.com/photos/10983783/pexels-photo-10983783.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
];

export default function Artigianato() {
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
      <div style={{ position: "relative", height: "70vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
backgroundImage:
  "url('https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.3)"
        }} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 2rem" }}>
          <div style={{ fontFamily: "'Jost'", fontSize: "0.62rem", letterSpacing: "0.4em", color: "#C8A96B", textTransform: "uppercase", marginBottom: "1.5rem" }}>Il Processo</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(3rem, 7vw, 5rem)", fontWeight: 300, color: "#F7F5F0", letterSpacing: "0.03em" }}>L'Artigianato Italiano</h1>
          <p style={{ fontFamily: "'Jost'", fontSize: "0.9rem", color: "#E7D8BC", opacity: 0.7, maxWidth: "500px", margin: "1.5rem auto 0", lineHeight: 1.8 }}>
            Dalla scelta del materiale alla consegna finale: un viaggio che richiede settimane, a volte mesi, e che non accetta scorciatoie.
          </p>
        </div>
      </div>

      {/* Steps */}
      {steps.map((step, idx) => (
        <section key={step.num} style={{ padding: "8rem 2rem", backgroundColor: idx % 2 === 0 ? "#0F0F10" : "#0A0A0B" }}>
          <div style={{ maxWidth: "1300px", margin: "0 auto", display: "grid", gridTemplateColumns: idx % 2 === 0 ? "1fr 1fr" : "1fr 1fr", gap: "6rem", alignItems: "center" }} className="art-grid">
            {idx % 2 === 0 ? (
              <>
                <div className="fade-up" style={{ opacity: 0 }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "7rem", fontWeight: 300, color: "#C8A96B", opacity: 0.12, lineHeight: 1, marginBottom: "-1rem" }}>{step.num}</div>
                  <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#F7F5F0", letterSpacing: "0.02em", marginBottom: "0.5rem" }}>{step.title}</h2>
                  <p style={{ fontFamily: "'Jost'", fontSize: "0.7rem", letterSpacing: "0.15em", color: "#C8A96B", textTransform: "uppercase", marginBottom: "2.5rem" }}>{step.subtitle}</p>
                  {step.content.map((p, i) => (
                    <p key={i} style={{ fontFamily: "'Jost'", fontSize: "0.88rem", color: "#E7D8BC", opacity: 0.8, lineHeight: 1.95, marginBottom: "1.5rem" }}>{p}</p>
                  ))}
                </div>
                <div className="fade-up" style={{ opacity: 0 }}>
                  <img src={step.img} alt={step.title} style={{ width: "100%", height: "500px", objectFit: "cover", filter: "brightness(0.75)" }} />
                </div>
              </>
            ) : (
              <>
                <div className="fade-up" style={{ opacity: 0 }}>
                  <img src={step.img} alt={step.title} style={{ width: "100%", height: "500px", objectFit: "cover", filter: "brightness(0.75)" }} />
                </div>
                <div className="fade-up" style={{ opacity: 0 }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "7rem", fontWeight: 300, color: "#C8A96B", opacity: 0.12, lineHeight: 1, marginBottom: "-1rem" }}>{step.num}</div>
                  <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#F7F5F0", letterSpacing: "0.02em", marginBottom: "0.5rem" }}>{step.title}</h2>
                  <p style={{ fontFamily: "'Jost'", fontSize: "0.7rem", letterSpacing: "0.15em", color: "#C8A96B", textTransform: "uppercase", marginBottom: "2.5rem" }}>{step.subtitle}</p>
                  {step.content.map((p, i) => (
                    <p key={i} style={{ fontFamily: "'Jost'", fontSize: "0.88rem", color: "#E7D8BC", opacity: 0.8, lineHeight: 1.95, marginBottom: "1.5rem" }}>{p}</p>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      ))}

      <style>{`
        @media (max-width: 768px) { .art-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }
      `}</style>
    </div>
  );
}
