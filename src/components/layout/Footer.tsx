import { Link } from "wouter";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Instagram, Facebook, Pinterest } from "@mui/icons-material";
import { siteConfig } from "@/config/siteConfig";

const collectionLinks = [
  { label: "Collezione Venezia", href: "/collezioni#venezia" },
  { label: "Collezione Firenze", href: "/collezioni#firenze" },
  { label: "Collezione Milano", href: "/collezioni#milano" },
  { label: "Collezione Roma", href: "/collezioni#roma" },
];

const categoryLinks = [
  { label: "Collane", href: "/collane" },
  { label: "Anelli", href: "/anelli" },
  { label: "Bracciali", href: "/bracciali" },
  { label: "Orecchini", href: "/orecchini" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0A0A0B", borderTop: "1px solid rgba(200,169,107,0.2)", paddingTop: "5rem", paddingBottom: "3rem" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "3rem",
          marginBottom: "4rem",
        }}>
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.5rem",
              letterSpacing: "0.2em",
              color: "#C8A96B",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}>
              {siteConfig.companyName}
            </div>
            <div style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              color: "#E7D8BC",
              opacity: 0.6,
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}>
              {siteConfig.tagline}
            </div>
            <p style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.82rem",
              color: "#E7D8BC",
              opacity: 0.65,
              lineHeight: 1.8,
              marginBottom: "1.5rem",
              maxWidth: "240px",
            }}>
              Da oltre un secolo, creiamo gioielli che raccontano storie. Ogni pezzo è un'opera d'arte, realizzata a mano nel cuore di Firenze.
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noopener noreferrer"
                style={{ color: "#C8A96B", transition: "opacity 0.3s", opacity: 0.8 }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "0.8")}
              >
                <Instagram fontSize="small" />
              </a>
              <a href={siteConfig.socialLinks.facebook} target="_blank" rel="noopener noreferrer"
                style={{ color: "#C8A96B", transition: "opacity 0.3s", opacity: 0.8 }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "0.8")}
              >
                <Facebook fontSize="small" />
              </a>
              <a href={siteConfig.socialLinks.pinterest} target="_blank" rel="noopener noreferrer"
                style={{ color: "#C8A96B", transition: "opacity 0.3s", opacity: 0.8 }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "0.8")}
              >
                <Pinterest fontSize="small" />
              </a>
            </div>
          </div>

          {/* Collezioni */}
          <div>
            <div style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.25em",
              color: "#C8A96B",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}>Collezioni</div>
            {collectionLinks.map(link => (
              <Link key={link.href} href={link.href}>
                <div style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.82rem",
                  color: "#E7D8BC",
                  opacity: 0.65,
                  marginBottom: "0.75rem",
                  cursor: "pointer",
                  transition: "color 0.3s, opacity 0.3s",
                }}
                onMouseEnter={e => { (e.currentTarget.style.color = "#C8A96B"); (e.currentTarget.style.opacity = "1"); }}
                onMouseLeave={e => { (e.currentTarget.style.color = "#E7D8BC"); (e.currentTarget.style.opacity = "0.65"); }}
                >
                  {link.label}
                </div>
              </Link>
            ))}
            <div style={{ marginTop: "1rem", borderTop: "1px solid rgba(200,169,107,0.15)", paddingTop: "1rem" }}>
              {categoryLinks.map(link => (
                <Link key={link.href} href={link.href}>
                  <div style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.82rem",
                    color: "#E7D8BC",
                    opacity: 0.65,
                    marginBottom: "0.75rem",
                    cursor: "pointer",
                    transition: "color 0.3s, opacity 0.3s",
                  }}
                  onMouseEnter={e => { (e.currentTarget.style.color = "#C8A96B"); (e.currentTarget.style.opacity = "1"); }}
                  onMouseLeave={e => { (e.currentTarget.style.color = "#E7D8BC"); (e.currentTarget.style.opacity = "0.65"); }}
                  >
                    {link.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Informazioni */}
          <div>
            <div style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.25em",
              color: "#C8A96B",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}>Informazioni</div>
            {[
              { label: "Chi Siamo", href: "/chi-siamo" },
              { label: "Artigianato", href: "/artigianato" },
              { label: "Testimonianze", href: "/testimonianze" },
              { label: "Contatti", href: "/contatti" },
              { label: "Informativa sulla Privacy", href: "/privacy" },
              { label: "Termini di Utilizzo", href: "/termini" },
            ].map(item => (
              <Link key={item.href} href={item.href}>
                <div style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.82rem",
                  color: "#E7D8BC",
                  opacity: 0.65,
                  marginBottom: "0.75rem",
                  cursor: "pointer",
                  transition: "color 0.3s, opacity 0.3s",
                }}
                onMouseEnter={e => { (e.currentTarget.style.color = "#C8A96B"); (e.currentTarget.style.opacity = "1"); }}
                onMouseLeave={e => { (e.currentTarget.style.color = "#E7D8BC"); (e.currentTarget.style.opacity = "0.65"); }}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </div>

          {/* Contatti */}
          <div>
            <div style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.25em",
              color: "#C8A96B",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}>Contatti</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <MapPin size={14} style={{ color: "#C8A96B", marginTop: "2px", flexShrink: 0 }} />
                <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", color: "#E7D8BC", opacity: 0.65, lineHeight: 1.6 }}>
                  {siteConfig.address}
                </span>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                <Phone size={14} style={{ color: "#C8A96B", flexShrink: 0 }} />
                <a href={`tel:${siteConfig.phone}`} style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", color: "#E7D8BC", opacity: 0.65, textDecoration: "none" }}>
                  {siteConfig.phone}
                </a>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                <Mail size={14} style={{ color: "#C8A96B", flexShrink: 0 }} />
                <a href={`mailto:${siteConfig.email}`} style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", color: "#E7D8BC", opacity: 0.65, textDecoration: "none" }}>
                  {siteConfig.email}
                </a>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <Clock size={14} style={{ color: "#C8A96B", marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", color: "#E7D8BC", opacity: 0.65, lineHeight: 1.7 }}>
                    {siteConfig.businessHours.weekdays}
                  </div>
                  <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", color: "#E7D8BC", opacity: 0.65, lineHeight: 1.7 }}>
                    {siteConfig.businessHours.saturday}
                  </div>
                  <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", color: "#E7D8BC", opacity: 0.65, lineHeight: 1.7 }}>
                    {siteConfig.businessHours.sunday}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(200,169,107,0.15)", paddingTop: "2rem" }}>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
          }}>
            <div style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.72rem",
              color: "#E7D8BC",
              opacity: 0.45,
              letterSpacing: "0.05em",
            }}>
              © {siteConfig.foundedYear}–2024 {siteConfig.companyName}. Tutti i diritti riservati.
            </div>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.9rem",
              fontStyle: "italic",
              color: "#C8A96B",
              opacity: 0.7,
            }}>
              Creato con ♦ a Firenze, Italia
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
