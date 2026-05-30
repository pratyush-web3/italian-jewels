import { siteConfig } from "@/config/siteConfig";

export default function Privacy() {
  return (
    <div style={{ backgroundColor: "#0F0F10", paddingTop: "80px" }}>
      <div style={{ position: "relative", height: "35vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", backgroundColor: "#0A0A0B", borderBottom: "1px solid rgba(200,169,107,0.1)" }}>
        <div style={{ textAlign: "center", padding: "0 2rem" }}>
          <div style={{ fontFamily: "'Jost'", fontSize: "0.62rem", letterSpacing: "0.4em", color: "#C8A96B", textTransform: "uppercase", marginBottom: "1.5rem" }}>Legale</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 300, color: "#F7F5F0", letterSpacing: "0.03em" }}>Informativa sulla Privacy</h1>
        </div>
      </div>

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "6rem 2rem" }}>
        {[
          {
            title: "1. Titolare del Trattamento",
            content: `Il titolare del trattamento dei dati personali è ${siteConfig.companyName}, con sede in ${siteConfig.address}. Per qualsiasi questione relativa al trattamento dei dati personali, è possibile contattarci all'indirizzo email ${siteConfig.email} oppure telefonicamente al numero ${siteConfig.phone}.`
          },
          {
            title: "2. Tipologie di Dati Raccolti",
            content: `Tra i dati personali che questo sito raccoglie, in modo autonomo o tramite terze parti, vi sono: Cookie, Dati di utilizzo, Nome, Cognome, Numero di telefono, Indirizzo email, Indirizzo fisico. I Dati Personali possono essere liberamente forniti dall'Utente, o nel caso dei Dati di Utilizzo, raccolti automaticamente durante l'uso di questo sito. Tutti i Dati richiesti da questo sito sono obbligatori e il mancato conferimento di tali Dati potrebbe rendere impossibile per questo sito fornire i propri servizi.`
          },
          {
            title: "3. Modalità e Luogo del Trattamento dei Dati",
            content: `Il Titolare adotta le opportune misure di sicurezza volte ad impedire l'accesso, la divulgazione, la modifica o la distruzione non autorizzate dei Dati Personali. Il trattamento viene effettuato mediante strumenti informatici e/o telematici, con modalità organizzative e con logiche strettamente correlate alle finalità indicate. I Dati sono trattati presso le sedi operative del Titolare e in ogni altro luogo in cui le parti coinvolte nel trattamento siano localizzate.`
          },
          {
            title: "4. Finalità del Trattamento dei Dati",
            content: `I Dati dell'Utente sono raccolti per consentire al Titolare di fornire i propri servizi, così come per le seguenti finalità: Contatto con l'Utente, Statistica, Visualizzazione di contenuti da piattaforme esterne e Gestione dei contatti e invio di messaggi. Le tipologie di Dati Personali utilizzati per ciascuna finalità sono indicati nelle sezioni specifiche di questo documento.`
          },
          {
            title: "5. Diritti dell'Utente",
            content: `Gli Utenti possono esercitare determinati diritti con riferimento ai Dati trattati dal Titolare. In particolare, l'Utente ha il diritto di: revocare il consenso in ogni momento; opporsi al trattamento dei propri Dati; accedere ai propri Dati; verificare e chiedere la rettificazione; ottenere la limitazione del trattamento dei propri Dati; ottenere la cancellazione o rimozione dei propri Dati Personali; ricevere i propri Dati o farli trasferire ad altro titolare; proporre reclamo all'autorità di controllo della protezione dei dati personali.`
          },
          {
            title: "6. Cookie e Tecnologie di Tracciamento",
            content: `Questo sito utilizza Cookie o altri Identificatori per ricordare le preferenze degli Utenti e ottimizzare l'esperienza di navigazione. La maggior parte dei browser è impostata per accettare i Cookie automaticamente. L'Utente può scegliere di impostare il proprio browser in modo da rifiutare i Cookie o di ricevere un avviso quando vengono inviati al dispositivo. Tuttavia, se i Cookie vengono disabilitati, alcune parti del sito potrebbero non funzionare correttamente.`
          },
          {
            title: "7. Trasferimento dei Dati Fuori dall'Unione Europea",
            content: `Il Titolare è autorizzato a trasferire i Dati verso Paesi al di fuori dell'Unione Europea, nel rispetto delle basi giuridiche definite dal GDPR. Qualsiasi trasferimento avviene in conformità alle norme applicabili sulla protezione dei dati e utilizzando le garanzie appropriate prescritte dal regolamento europeo, come ad esempio clausole contrattuali standard o meccanismi di certificazione.`
          },
          {
            title: "8. Modifiche alla Present Informativa sulla Privacy",
            content: `Il Titolare si riserva il diritto di apportare modifiche alla presente informativa sulla privacy in qualunque momento dandone informazione agli Utenti su questa pagina e, se possibile, su questo sito nonché, qualora tecnicamente e legalmente fattibile, inviando una notifica agli Utenti attraverso uno degli estremi di contatto di cui è in possesso il Titolare. Si prega dunque di consultare periodicamente questa pagina, facendo riferimento alla data di ultima modifica indicata in fondo.`
          },
          {
            title: "9. Contatti",
            content: `Per qualsiasi richiesta relativa al trattamento dei tuoi dati personali o per esercitare i tuoi diritti, puoi contattarci ai seguenti recapiti:\n\n${siteConfig.companyName}\n${siteConfig.address}\nEmail: ${siteConfig.email}\nTelefono: ${siteConfig.phone}`
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
            Ultima modifica: 1 gennaio 2024. Questo documento si riferisce esclusivamente al sito web di {siteConfig.companyName} e non si applica ad altri siti web eventualmente consultabili attraverso i link presenti in esso.
          </p>
        </div>
      </div>
    </div>
  );
}
