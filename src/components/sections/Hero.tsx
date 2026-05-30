import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { gsap } from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sheenRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // simplified: no mousemove parallax (keep animations smooth and subtle)
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-element",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.3,
        }
      );
      gsap.fromTo(
        ".hero-scroll-indicator",
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 1.8, ease: "power2.out" }
      );

      // Sheen sweep controlled by GSAP for precise timing
      const sheen = sheenRef.current;
      if (sheen) {
        gsap.set(sheen, { xPercent: -8 });
        gsap.to(sheen, {
          xPercent: 8,
          duration: 12,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }

      // spotlight pulse for premium gold feel
      const spotlight = spotlightRef.current;
      if (spotlight) {
        gsap.fromTo(spotlight, { opacity: 0.04, scale: 1 }, { opacity: 0.12, scale: 1.03, duration: 6, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      }

      // Title glow & subtle pulse for premium feel
      const title = containerRef.current?.querySelectorAll('.hero-title');
      const sub = containerRef.current?.querySelectorAll('.hero-sub');
      if (title && title.length) {
        gsap.fromTo(title, { scale: 0.995, y: 6 }, { scale: 1, y: 0, duration: 1.6, ease: 'power3.out', delay: 0.4 });
        gsap.to(title, { textShadow: '0px 8px 32px rgba(200,169,107,0.08)', duration: 2.8, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      }
      if (sub && sub.length) {
        gsap.to(sub, { boxShadow: '0 0 36px rgba(200,169,107,0.12)', duration: 1.6, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.6 });
      }

      // CTA entrance
      gsap.fromTo('.hero-cta', { scale: 0.96, opacity: 0 }, { scale: 1, opacity: 1, stagger: 0.08, duration: 0.6, delay: 1.2, ease: 'back.out(1.2)' });

      // Particles subtle float (reduced count/strength)
      const particles = gsap.utils.toArray<HTMLDivElement>(".hero-particle");
      if (particles.length) {
        particles.forEach((p: any) => {
          gsap.set(p, {
            x: gsap.utils.random(-18, 18),
            y: gsap.utils.random(10, 60),
            opacity: gsap.utils.random(0.06, 0.22),
            scale: gsap.utils.random(0.6, 1.1),
          });
        });
        gsap.to(particles, {
          y: "-=" + 28,
          x: "+=0",
          duration: 8,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          stagger: { each: 0.35, from: "random" },
        });
      }

      // Rare flash / burst for premium effect
      function triggerFlash() {
        const f = flashRef.current;
        if (!f) return;
        const tl = gsap.timeline();
        tl.to(f, { opacity: 1, scale: 1.2, duration: 0.18, ease: "power2.out" })
          .to(f, { opacity: 0, scale: 1.6, duration: 0.9, ease: "power3.out" });

        // quick particle burst
        const burst = gsap.utils.toArray<HTMLDivElement>(".hero-particle").slice(0, 4);
        gsap.to(burst, {
          x: (i: number) => `+=${gsap.utils.random(-60, 60)}`,
          y: (i: number) => `-=${gsap.utils.random(30, 120)}`,
          opacity: 1,
          scale: 1.1,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.02,
          onComplete() {
            gsap.to(burst, { opacity: gsap.utils.random(0.04, 0.14), scale: gsap.utils.random(0.6, 1.0), duration: 1.2 });
          },
        });
      }

      function scheduleFlash() {
        // much rarer, subtler flash
        const delay = gsap.utils.random(28, 60, true);
        gsap.delayedCall(delay, () => {
          triggerFlash();
          scheduleFlash();
        });
      }
      scheduleFlash();

      // no mouse parallax: keep motion smooth and minimal
    }, containerRef.current);
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "#0F0F10",
        perspective: "1400px",
        transformStyle: "preserve-3d",
        WebkitTransformStyle: "preserve-3d",
        WebkitPerspective: "1400px",
        
      }}
    >
      {/* Animated gradient background (replaces static image) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(120deg, #0f1220 0%, #0f2b21 40%, #0f0f10 100%)",
          backgroundSize: "200% 200%",
          animation: "gradientShift 12s ease infinite",
          transform: "scale(1.02)",
        }}
      />
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(15,15,16,0.88) 0%, rgba(15,61,50,0.65) 60%, rgba(15,15,16,0.82) 100%)",
        }}
      />

      {/* Vignette for premium depth */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at center, rgba(0,0,0,0) 30%, rgba(0,0,0,0.6) 100%)",
          mixBlendMode: "multiply",
          pointerEvents: "none",
          zIndex: 6,
        }}
      />

      {/* Soft gold spotlight */}
      <div
        ref={spotlightRef}
        style={{
          position: "absolute",
          left: "50%",
          top: "36%",
          width: "78%",
          height: "58%",
          transform: "translate(-50%, -36%)",
          background: "radial-gradient(circle at 40% 30%, rgba(232,204,136,0.22), rgba(200,169,107,0.06) 25%, transparent 60%)",
          filter: "blur(48px)",
          pointerEvents: "none",
          mixBlendMode: "screen",
          zIndex: 7,
        }}
      />

      {/* Metallic sheen (gold + silver sweep) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          mixBlendMode: "overlay",
          opacity: 0.9,
          overflow: "hidden",
        }}
      >
        <div
          ref={sheenRef}
          data-depth="12"
          style={{
            position: "absolute",
            top: "-40%",
            left: "-60%",
            width: "220%",
            height: "200%",
            background: "linear-gradient(90deg, rgba(200,169,107,0.02) 0%, rgba(255,255,255,0.14) 50%, rgba(192,192,192,0.03) 100%)",
            transform: "rotate(-15deg)",
            filter: "blur(24px)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 30% 20%, rgba(200,169,107,0.05), transparent 20%), radial-gradient(ellipse at 70% 80%, rgba(192,192,192,0.04), transparent 25%)",
          }}
        />
      </div>

      {/* Particles and flash for premium rarity */}
      <div
        ref={particlesRef}
        data-depth="-28"
        style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 9 }}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="hero-particle"
            style={{
              position: "absolute",
              left: `${4 + (i * 7) % 92}%`,
              bottom: `${-8 - (i % 4) * 3}%`,
              width: `${4 + (i % 5)}px`,
              height: `${4 + (i % 5)}px`,
              borderRadius: "50%",
              background: i % 2 === 0 ? "radial-gradient(circle, rgba(200,169,107,0.98), rgba(200,169,107,0.36))" : "radial-gradient(circle, rgba(192,192,192,0.98), rgba(192,192,192,0.3))",
              boxShadow: i % 2 === 0 ? "0 0 8px rgba(200,169,107,0.35)" : "0 0 8px rgba(192,192,192,0.28)",
              filter: "blur(6px)",
              opacity: 0.14,
              transform: "translate3d(0,0,0)",
            }}
          />
        ))}

        {/* simplified: removed sparkles for a cleaner look */}

        <div
          ref={flashRef}
          className="hero-flash"
          style={{
            position: "absolute",
            left: "50%",
            top: "36%",
            width: "36rem",
            height: "20rem",
            transform: "translate(-50%, -50%) scale(1)",
            borderRadius: "50%",
            background: "radial-gradient(ellipse at center, rgba(255,245,210,0.95), rgba(200,169,107,0.25) 30%, transparent 55%)",
            opacity: 0,
            pointerEvents: "none",
            mixBlendMode: "screen",
            filter: "blur(36px)",
            zIndex: 9,
          }}
        />
      </div>

      {/* ring removed for simpler premium look */}

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          maxWidth: "900px",
          padding: "0 2rem",
          transformStyle: "preserve-3d",
          WebkitTransformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <div
          className="hero-element"
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.4em",
            color: "#C8A96B",
            textTransform: "uppercase",
            marginBottom: "2rem",
            opacity: 0,
          }}
        >
          Gioiellieri Artigianali dal 1887 — Firenze, Italia
        </div>

        <h1
          className="hero-element hero-title"
          data-depth="40"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(3rem, 8vw, 6.5rem)",
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: "0.02em",
            color: "#F7F5F0",
            marginBottom: "2rem",
            opacity: 0,
          }}
        >
          Tradizione Italiana,
          <br />
          <em className="hero-sub" data-depth="28" style={{ color: "#C8A96B", fontStyle: "italic" }}>Eleganza Senza Tempo</em>
        </h1>

        <p
          className="hero-element"
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
            fontWeight: 300,
            color: "#E7D8BC",
            lineHeight: 1.8,
            maxWidth: "600px",
            margin: "0 auto 3rem",
            opacity: 0,
          }}
        >
          Gioielli artigianali dal 1887 — creati per chi comprende il valore dell'eterno.
          Ogni pezzo è una promessa incisa nell'oro.
        </p>

        <div
          className="hero-element"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            justifyContent: "center",
            opacity: 0,
          }}
        >
          <Link href="/collezioni">
            <button
              className="hero-cta"
              data-depth="32"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.72rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#C8A96B",
                background: "transparent",
                border: "1px solid rgba(200,169,107,0.6)",
                padding: "1rem 2.5rem",
                cursor: "pointer",
                transition: "all 0.4s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#C8A96B";
                e.currentTarget.style.color = "#0F0F10";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#C8A96B";
              }}
            >
              Scopri le Collezioni
            </button>
          </Link>
          <Link href="/chi-siamo">
            <button
              className="hero-cta"
              data-depth="30"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.72rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#E7D8BC",
                background: "transparent",
                border: "none",
                padding: "1rem 1rem",
                cursor: "pointer",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#C8A96B")}
              onMouseLeave={e => (e.currentTarget.style.color = "#E7D8BC")}
            >
              La Nostra Storia →
            </button>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="hero-scroll-indicator"
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#C8A96B",
          opacity: 0,
          animation: "bounce 2s infinite",
        }}
      >
       
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}

