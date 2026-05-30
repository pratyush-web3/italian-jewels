import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 137, suffix: "+", label: "Anni di Esperienza" },
  { value: 12000, suffix: "+", label: "Gioielli Realizzati", format: true },
  { value: 4800, suffix: "+", label: "Clienti Soddisfatti", format: true },
  { value: 24, suffix: "", label: "Artigiani Esperti" },
];

function Counter({ target, suffix, format, start }: { target: number; suffix: string; format: boolean; start: boolean }) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!start || hasRun.current) return;
    hasRun.current = true;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [start, target]);

  const formatted = format ? count.toLocaleString("it-IT") : count.toString();
  return <>{formatted}{suffix}</>;
}

export default function LuxuryStats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: () => setStarted(true),
      });
      gsap.fromTo(".stat-item", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "linear-gradient(135deg, #0F3D32 0%, #0A2820 40%, #0F0F10 100%)",
        padding: "8rem 2rem",
        borderTop: "1px solid rgba(200,169,107,0.1)",
        borderBottom: "1px solid rgba(200,169,107,0.1)",
      }}
    >
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <div style={{ fontFamily: "'Jost'", fontSize: "0.62rem", letterSpacing: "0.4em", color: "#C8A96B", textTransform: "uppercase", marginBottom: "1.5rem" }}>
            I Nostri Numeri
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#F7F5F0", letterSpacing: "0.02em" }}>
            Un'Eredità di Eccellenza
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0" }}>
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="stat-item"
              style={{
                textAlign: "center",
                padding: "2rem",
                borderRight: i < stats.length - 1 ? "1px solid rgba(200,169,107,0.12)" : "none",
                opacity: 0,
              }}
            >
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(3rem, 6vw, 5rem)",
                fontWeight: 300,
                color: "#C8A96B",
                lineHeight: 1,
                marginBottom: "0.75rem",
                letterSpacing: "-0.02em",
              }}>
                <Counter target={stat.value} suffix={stat.suffix} format={!!stat.format} start={started} />
              </div>
              <div style={{
                fontFamily: "'Jost'",
                fontSize: "0.65rem",
                letterSpacing: "0.25em",
                color: "#E7D8BC",
                opacity: 0.7,
                textTransform: "uppercase",
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .stat-item { border-right: none !important; border-bottom: 1px solid rgba(200,169,107,0.12); }
        }
      `}</style>
    </section>
  );
}
