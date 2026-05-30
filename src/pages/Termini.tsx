import { siteConfig } from "@/config/siteConfig";

export default function Termini() {
  return (
    <div style={{ backgroundColor: "#0F0F10", paddingTop: "80px" }}>
      <div style={{ position: "relative", height: "35vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", backgroundColor: "#0A0A0B", borderBottom: "1px solid rgba(200,169,107,0.1)" }}>
        <div style={{ textAlign: "center", padding: "0 2rem" }}>
          <div style={{ fontFamily: "'Jost'", fontSize: "0.62rem", letterSpacing: "0.4em", color: "#C8A96B", textTransform: "uppercase", marginBottom: "1.5rem" }}>Legale</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 300, color: "#F7F5F0", letterSpacing: "0.03em" }}>Termini di Utilizzo</h1>
        </div>
      </div>

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "6rem 2rem" }}>
        {[
          {
            title: "1. Accettazione dei Termini",
            content: `Accedendo e utilizzando il sito web di ${siteConfig.companyName} ("il Sito"), l'utente accetta di essere vincolato dai presenti Termini di Utilizzo. Se non si accettano questi termini, si prega di non utilizzare il Sito. ${siteConfig.companyName} si riserva il diritto di modificare questi termini in qualsiasi momento, e l'uso continuato del Sito dopo eventuali modifiche costituirà accettazione di tali modifiche.`
          },
          {
            title: "2. Proprietà Intellettuale",
            content: `Tutti i contenuti presenti su questo Sito — inclusi testi, immagini, fotografie, loghi, grafica, design e altri materiali — sono di proprietà di ${siteConfig.companyName} o dei relativi licenziatari e sono protetti dalle leggi italiane e internazionali sul diritto d'autore. È vietata qualsiasi riproduzione, distribuzione, trasmissione o utilizzo non autorizzato di tali materiali senza il preventivo consenso scritto di ${siteConfig.companyName}.`
          },
          {
            title: "3. Utilizzo del Sito",
            content: `L'utente si impegna a utilizzare il Sito esclusivamente per scopi leciti e in conformità con le leggi applicabili. È vietato: utilizzare il Sito in modo da causare danni, interruzioni o compromettere la sicurezza del Sito; raccogliere informazioni sugli utenti senza consenso; trasmettere materiale illegale, offensivo o dannoso; tentare di accedere a aree riservate del Sito senza autorizzazione. ${siteConfig.companyName} si riserva il diritto di terminare l'accesso al Sito in caso di violazione di questi termini.`
          },
          {
            title: "4. Limitazione di Responsabilità",
            content: `Il Sito e i suoi contenuti sono forniti "così come sono" senza garanzie di alcun tipo. ${siteConfig.companyName} non garantisce che il Sito sarà disponibile ininterrottamente, privo di errori o che eventuali difetti saranno corretti. ${siteConfig.companyName} non sarà responsabile per danni diretti, indiretti, accidentali, consequenziali o punitivi derivanti dall'uso o dall'impossibilità di utilizzare il Sito.`
          },
          {
            title: "5. Link a Siti di Terze Parti",
            content: `Il Sito può contenere collegamenti a siti web di terze parti. ${siteConfig.companyName} non ha alcun controllo su tali siti e non è responsabile per i loro contenuti, politiche sulla privacy o pratiche. L'inserimento di tali link non implica alcuna approvazione da parte di ${siteConfig.companyName}. Si consiglia di leggere i termini e le politiche sulla privacy di qualsiasi sito web di terze parti visitato.`
          },
          {
            title: "6. Prodotti e Servizi",
            content: `Le informazioni sui prodotti e servizi presenti nel Sito sono fornite a scopo puramente informativo. I prezzi, la disponibilità e le caratteristiche dei prodotti possono variare. ${siteConfig.companyName} si riserva il diritto di modificare, sospendere o interrompere qualsiasi prodotto o servizio in qualsiasi momento senza preavviso. Per informazioni precise su disponibilità e prezzi, si prega di contattarci direttamente.`
          },
          {
            title: "7. Legge Applicabile e Foro Competente",
            content: `I presenti Termini di Utilizzo sono disciplinati dalla legge italiana. Per qualsiasi controversia derivante dall'utilizzo del Sito o relativa ai presenti Termini, le parti si impegnano a tentare una risoluzione amichevole. In mancanza di accordo, le controversie saranno di competenza esclusiva del Tribunale di Firenze.`
          },
          {
            title: "8. Contatti",
            content: `Per qualsiasi domanda relativa ai presenti Termini di Utilizzo:\n\n${siteConfig.companyName}\n${siteConfig.address}\nEmail: ${siteConfig.email}\nTelefono: ${siteConfig.phone}`
          },
        ].map(section => (
          <div key={section.title} style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", fontWeight: 400, color: "#C8A96B", marginBottom: "1rem", letterSpacing: "0.02em" }}>
              {section.title}
            </h2>
            <div style={{ width: "30px", height: "1px", backgroundColor: "#C8A96B", marginBottom: "1.25rem", opacity: 0.4 }} />
            <p style={{ fontFamily: "'Jost'", fontSize: "0.88rem", color: "#E7D8BC", opacity: 0.75, lineHeight: 2, whiteSpace: "pre-line" }}>
              {section.content}
            </p>
          </div>
        ))}

        <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid rgba(200,169,107,0.1)" }}>
          <p style={{ fontFamily: "'Jost'", fontSize: "0.75rem", color: "#E7D8BC", opacity: 0.45, lineHeight: 1.7 }}>
            Ultima revisione: 1 gennaio 2024. L'uso continuato del sito dopo la pubblicazione di modifiche ai Termini costituisce accettazione di tali modifiche.
          </p>
        </div>
      </div>
    </div>
  );
}
