import { Link } from "wouter";

export default function NotFound() {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#0F0F10",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      textAlign: "center",
      padding: "2rem",
    }}>
      <div style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(6rem, 15vw, 12rem)",
        fontWeight: 300,
        color: "#C8A96B",
        opacity: 0.1,
        lineHeight: 1,
        marginBottom: "-2rem",
        userSelect: "none",
      }}>
        404
      </div>
      <h1 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(2rem, 5vw, 3.5rem)",
        fontWeight: 300,
        color: "#F7F5F0",
        letterSpacing: "0.03em",
        marginBottom: "1.5rem",
        position: "relative",
        zIndex: 1,
      }}>
        Pagina non trovata
      </h1>
      <p style={{
        fontFamily: "'Jost', sans-serif",
        fontSize: "0.9rem",
        color: "#E7D8BC",
        opacity: 0.65,
        lineHeight: 1.8,
        maxWidth: "420px",
        marginBottom: "3rem",
      }}>
        La pagina che stai cercando non esiste o è stata spostata. Torna alla homepage per continuare la tua esperienza con Orafi Italiani.
      </p>
      <Link href="/">
        <button
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.72rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#0F0F10",
            background: "#C8A96B",
            border: "none",
            padding: "1rem 2.5rem",
            cursor: "pointer",
            transition: "background 0.3s ease",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "#E7D8BC")}
          onMouseLeave={e => (e.currentTarget.style.background = "#C8A96B")}
        >
          Torna alla Home
        </button>
      </Link>
    </div>
  );
}
