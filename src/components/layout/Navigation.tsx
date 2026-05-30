import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Facebook, Instagram } from "@mui/icons-material";
import Drawer from "@mui/material/Drawer";
import { siteConfig } from "@/config/siteConfig";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Chi Siamo", href: "/chi-siamo" },
  { label: "Collezioni", href: "/collezioni" },
  { label: "Artigianato", href: "/artigianato" },
  { label: "Testimonianze", href: "/testimonianze" },
  { label: "Contatti", href: "/contatti" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
  }, [location]);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "all 0.4s ease",
          backgroundColor: scrolled ? "rgba(15,15,16,0.92)" : "rgba(15,15,16,0.6)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: scrolled ? "1px solid rgba(200,169,107,0.2)" : "1px solid transparent",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "80px" }}>
            {/* Logo */}
            <Link href="/">
              <div style={{ cursor: "pointer", textDecoration: "none" }}>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.4rem",
                  fontWeight: 400,
                  letterSpacing: "0.25em",
                  color: "#C8A96B",
                  lineHeight: 1,
                  textTransform: "uppercase",
                }}>
                  {siteConfig.companyName}
                </div>
                <div style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.6rem",
                  letterSpacing: "0.3em",
                  color: "#E7D8BC",
                  opacity: 0.7,
                  textTransform: "uppercase",
                  marginTop: "3px",
                  textAlign: "center",
                }}>
                  est. {siteConfig.foundedYear}
                </div>
              </div>
            </Link>

            {/* Desktop Links */}
            <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }} className="hidden-mobile">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.72rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: location === link.href ? "#C8A96B" : "#E7D8BC",
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                    position: "relative",
                    paddingBottom: "4px",
                    textDecoration: "none",
                  }}
                  className="nav-link"
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setDrawerOpen(true)}
              className="show-mobile"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#C8A96B",
                padding: "8px",
              }}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#0F0F10",
            width: "100%",
            maxWidth: "360px",
            borderLeft: "1px solid rgba(200,169,107,0.2)",
          },
        }}
      >
        <div style={{ padding: "2rem", height: "100%", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3rem" }}>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.2rem",
              letterSpacing: "0.2em",
              color: "#C8A96B",
              textTransform: "uppercase",
            }}>
              {siteConfig.companyName}
            </div>
            <button
              onClick={() => setDrawerOpen(false)}
              style={{ background: "none", border: "none", cursor: "pointer", color: "#C8A96B" }}
            >
              <X size={24} />
            </button>
          </div>

          <div style={{ flex: 1 }}>
            {navLinks.map((link, i) => (
              <Link key={link.href} href={link.href}>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "2rem",
                  fontWeight: 300,
                  color: location === link.href ? "#C8A96B" : "#F7F5F0",
                  padding: "1rem 0",
                  borderBottom: "1px solid rgba(200,169,107,0.1)",
                  cursor: "pointer",
                  transition: "color 0.3s ease",
                  letterSpacing: "0.05em",
                }}>
                  {link.label}
                </div>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: "auto", paddingTop: "2rem" }}>
            <div style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              color: "#C8A96B",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}>
              Seguici
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noopener noreferrer" style={{ color: "#E7D8BC" }}>
                <Instagram fontSize="small" />
              </a>
              <a href={siteConfig.socialLinks.facebook} target="_blank" rel="noopener noreferrer" style={{ color: "#E7D8BC" }}>
                <Facebook fontSize="small" />
              </a>
            </div>
            <div style={{
              marginTop: "2rem",
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.65rem",
              color: "#E7D8BC",
              opacity: 0.5,
              letterSpacing: "0.1em",
            }}>
              est. {siteConfig.foundedYear} — Firenze, Italia
            </div>
          </div>
        </div>
      </Drawer>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background-color: #C8A96B;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .nav-link:hover {
          color: #C8A96B !important;
        }
      `}</style>
    </>
  );
}
