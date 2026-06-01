import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type ProductCategoryPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  sections: Array<{
    title: string;
    content: string;
  }>;
};

export default function ProductCategoryPage({ eyebrow, title, intro, image, sections }: ProductCategoryPageProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".fade-up").forEach(el => {
        gsap.fromTo(el, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" }
        });
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} style={{ backgroundColor: "#0F0F10", paddingTop: "80px" }}>
      <div style={{ position: "relative", height: "62vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('${image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.35)",
        }} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 2rem", maxWidth: "900px" }}>
          <div style={{ fontFamily: "'Jost'", fontSize: "0.62rem", letterSpacing: "0.4em", color: "#C8A96B", textTransform: "uppercase", marginBottom: "1.5rem" }}>{eyebrow}</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(3rem, 7vw, 5rem)", fontWeight: 300, color: "#F7F5F0", letterSpacing: "0.03em", marginBottom: "1.5rem" }}>{title}</h1>
          <p style={{ fontFamily: "'Jost'", fontSize: "0.95rem", color: "#E7D8BC", opacity: 0.75, lineHeight: 1.9 }}>{intro}</p>
        </div>
      </div>

      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "7rem 2rem 9rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
          {sections.map((section) => (
            <article
              key={section.title}
              className="fade-up"
              style={{
                opacity: 0,
                border: "1px solid rgba(200,169,107,0.12)",
                padding: "2.5rem",
                background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0))",
              }}
            >
              <div style={{ fontFamily: "'Jost'", fontSize: "0.62rem", letterSpacing: "0.32em", color: "#C8A96B", textTransform: "uppercase", marginBottom: "1rem" }}>
                Selezione
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 400, color: "#F7F5F0", marginBottom: "1rem" }}>
                {section.title}
              </h2>
              <p style={{ fontFamily: "'Jost'", fontSize: "0.88rem", color: "#E7D8BC", opacity: 0.78, lineHeight: 1.95, margin: 0 }}>
                {section.content}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}