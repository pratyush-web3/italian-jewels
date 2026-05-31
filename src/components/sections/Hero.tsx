import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { gsap } from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sheenRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const ringContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main content animation
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

      // Sheen sweep
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

      // Spotlight pulse
      const spotlight = spotlightRef.current;
      if (spotlight) {
        gsap.fromTo(spotlight, 
          { opacity: 0.04, scale: 1 }, 
          { opacity: 0.12, scale: 1.03, duration: 6, repeat: -1, yoyo: true, ease: 'sine.inOut' }
        );
      }

      // Title glow pulse
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
      gsap.fromTo('.hero-cta', 
        { scale: 0.96, opacity: 0 }, 
        { scale: 1, opacity: 1, stagger: 0.08, duration: 0.6, delay: 1.2, ease: 'back.out(1.2)' }
      );

      // ===== PREMIUM JEWELRY RINGS ANIMATION =====
      const rings = gsap.utils.toArray<HTMLDivElement>(".premium-ring");
      
      // Rotate main diamond ring
      const mainRing = document.querySelector('.ring-main');
      if (mainRing) {
        gsap.to(mainRing, {
          rotation: 360,
          duration: 45,
          repeat: -1,
          ease: "none",
          transformOrigin: "center center",
        });
      }
      
      // Oscillate gold rings with gemstone shine
      rings.forEach((ring, i) => {
        const direction = i % 2 === 0 ? 1 : -1;
        const duration = 8 + (i * 2);
        
        // Gentle floating motion
        gsap.to(ring, {
          y: direction * 15,
          x: direction * 8,
          duration: duration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.5,
        });
        
        // Subtle scale pulse for gemstone effect
        gsap.to(ring, {
          scale: 1.05,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.3,
        });
      });
      
      // Animate gemstone sparkles on rings
      const sparkles = gsap.utils.toArray<HTMLDivElement>(".ring-sparkle");
      sparkles.forEach((sparkle, i) => {
        gsap.to(sparkle, {
          opacity: 0.3,
          scale: 1.3,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: i * 0.2,
        });
      });
      
      // Rotate outer decorative ring
      const outerRing = document.querySelector('.ring-outer');
      if (outerRing) {
        gsap.to(outerRing, {
          rotation: -360,
          duration: 60,
          repeat: -1,
          ease: "none",
          transformOrigin: "center center",
        });
      }
      
      // Rotate inner decorative ring (opposite direction)
      const innerRing = document.querySelector('.ring-inner');
      if (innerRing) {
        gsap.to(innerRing, {
          rotation: 360,
          duration: 35,
          repeat: -1,
          ease: "none",
          transformOrigin: "center center",
        });
      }

      // Particles float
      const particles = gsap.utils.toArray<HTMLDivElement>(".hero-particle");
      if (particles.length) {
        particles.forEach((p: any) => {
          gsap.set(p, {
            x: gsap.utils.random(-25, 25),
            y: gsap.utils.random(10, 80),
            opacity: gsap.utils.random(0.08, 0.28),
            scale: gsap.utils.random(0.6, 1.2),
          });
        });
        gsap.to(particles, {
          y: "-=" + 35,
          x: "+=5",
          duration: 10,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          stagger: { each: 0.4, from: "random" },
        });
      }
      
      // Gemstone particles (diamond dust)
      const gems = gsap.utils.toArray<HTMLDivElement>(".gem-particle");
      gems.forEach((gem: any) => {
        gsap.to(gem, {
          y: gsap.utils.random(-40, -80),
          x: gsap.utils.random(-20, 20),
          opacity: 0,
          duration: gsap.utils.random(2, 4),
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: gsap.utils.random(0, 3),
        });
      });

      // Rare flash burst
      function triggerFlash() {
        const f = flashRef.current;
        if (!f) return;
        const tl = gsap.timeline();
        tl.to(f, { opacity: 1, scale: 1.3, duration: 0.18, ease: "power2.out" })
          .to(f, { opacity: 0, scale: 1.8, duration: 0.9, ease: "power3.out" });
        
        // Particle burst effect
        const burst = gsap.utils.toArray<HTMLDivElement>(".hero-particle").slice(0, 5);
        gsap.to(burst, {
          x: (i: number) => `+=${gsap.utils.random(-50, 50)}`,
          y: (i: number) => `-=${gsap.utils.random(40, 100)}`,
          opacity: 0.6,
          scale: 1.2,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.03,
          onComplete() {
            gsap.to(burst, { opacity: gsap.utils.random(0.06, 0.18), scale: gsap.utils.random(0.6, 1.0), duration: 1.0 });
          },
        });
      }

      function scheduleFlash() {
        const delay = gsap.utils.random(20, 45, true);
        gsap.delayedCall(delay, () => {
          triggerFlash();
          scheduleFlash();
        });
      }
      scheduleFlash();

      // 3D tilt effect on container hover
      const heroContainer = containerRef.current;
      if (heroContainer) {
        heroContainer.addEventListener("mousemove", (e) => {
          const rect = heroContainer.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          
          gsap.to(".ring-container", {
            rotationY: x * 8,
            rotationX: y * -5,
            duration: 1,
            ease: "power2.out",
          });
        });
        
        heroContainer.addEventListener("mouseleave", () => {
          gsap.to(".ring-container", {
            rotationY: 0,
            rotationX: 0,
            duration: 1.2,
            ease: "elastic.out(1, 0.5)",
          });
        });
      }
      
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
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Animated gradient background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(125deg, #0a0a0f 0%, #0d2a24 35%, #0f0f10 70%, #1a0f0a 100%)",
          backgroundSize: "200% 200%",
          animation: "gradientShift 15s ease infinite",
        }}
      />
      
      {/* Dark overlay for depth */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 30% 40%, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)",
        }}
      />

      {/* Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at center, rgba(0,0,0,0) 35%, rgba(0,0,0,0.65) 100%)",
          pointerEvents: "none",
          zIndex: 6,
        }}
      />

      {/* Gold spotlight */}
      <div
        ref={spotlightRef}
        style={{
          position: "absolute",
          left: "50%",
          top: "35%",
          width: "85%",
          height: "60%",
          transform: "translate(-50%, -35%)",
          background: "radial-gradient(ellipse at 45% 35%, rgba(232,204,136,0.18), rgba(200,169,107,0.05) 30%, transparent 65%)",
          filter: "blur(55px)",
          pointerEvents: "none",
          mixBlendMode: "screen",
          zIndex: 7,
        }}
      />

      {/* ===== PREMIUM JEWELRY RINGS BACKGROUND ===== */}
      <div 
        className="ring-container"
        ref={ringContainerRef}
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          transformStyle: "preserve-3d",
          zIndex: 5,
        }}
      >
        {/* Outer decorative ring */}
        <div className="premium-ring ring-outer" style={{
          position: "absolute",
          width: "85vw",
          height: "85vw",
          maxWidth: "800px",
          maxHeight: "800px",
          borderRadius: "50%",
          border: "1px solid rgba(200,169,107,0.15)",
          boxShadow: "0 0 30px rgba(200,169,107,0.08), inset 0 0 30px rgba(200,169,107,0.05)",
        }}>
          {/* Diamond accent markers on outer ring */}
          {[...Array(12)].map((_, i) => (
            <div
              key={`outer-diamond-${i}`}
              className="ring-sparkle"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "4px",
                height: "4px",
                background: "#C8A96B",
                borderRadius: "50%",
                transform: `rotate(${i * 30}deg) translate(0, -50%)`,
                boxShadow: "0 0 6px rgba(200,169,107,0.8)",
                opacity: 0.4,
              }}
            />
          ))}
        </div>

        {/* Main gemstone ring - rotating */}
        <div className="premium-ring ring-main" style={{
          position: "absolute",
          width: "65vw",
          height: "65vw",
          maxWidth: "600px",
          maxHeight: "600px",
          borderRadius: "50%",
          border: "2px solid rgba(200,169,107,0.25)",
          boxShadow: "0 0 50px rgba(200,169,107,0.12), inset 0 0 40px rgba(200,169,107,0.08)",
          background: "radial-gradient(ellipse at 35% 35%, rgba(200,169,107,0.04), transparent 60%)",
        }}>
          {/* Gemstone highlights on main ring */}
          <div style={{
            position: "absolute",
            top: "-3px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "8px",
            height: "8px",
            background: "radial-gradient(circle, #E8CC88, #C8A96B)",
            borderRadius: "50%",
            boxShadow: "0 0 12px rgba(232,204,136,0.9)",
          }} />
          <div style={{
            position: "absolute",
            bottom: "-3px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "6px",
            height: "6px",
            background: "radial-gradient(circle, #E8CC88, #C8A96B)",
            borderRadius: "50%",
            boxShadow: "0 0 10px rgba(232,204,136,0.7)",
          }} />
          <div style={{
            position: "absolute",
            right: "-3px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "7px",
            height: "7px",
            background: "radial-gradient(circle, #E8CC88, #C8A96B)",
            borderRadius: "50%",
            boxShadow: "0 0 11px rgba(232,204,136,0.8)",
          }} />
          <div style={{
            position: "absolute",
            left: "-3px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "5px",
            height: "5px",
            background: "radial-gradient(circle, #E8CC88, #C8A96B)",
            borderRadius: "50%",
            boxShadow: "0 0 9px rgba(232,204,136,0.6)",
          }} />
        </div>

        {/* Inner rotating ring (opposite direction) */}
        <div className="premium-ring ring-inner" style={{
          position: "absolute",
          width: "40vw",
          height: "40vw",
          maxWidth: "380px",
          maxHeight: "380px",
          borderRadius: "50%",
          border: "1px solid rgba(200,169,107,0.2)",
          boxShadow: "0 0 35px rgba(200,169,107,0.1), inset 0 0 20px rgba(200,169,107,0.06)",
        }}>
          {/* Diamond dust particles on inner ring */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`inner-gem-${i}`}
              className="ring-sparkle"
              style={{
                position: "absolute",
                top: `${30 + Math.sin(i * 45 * Math.PI / 180) * 40}%`,
                left: `${50 + Math.cos(i * 45 * Math.PI / 180) * 40}%`,
                width: "3px",
                height: "3px",
                background: "#E8CC88",
                borderRadius: "50%",
                opacity: 0.3,
                boxShadow: "0 0 4px rgba(232,204,136,0.6)",
              }}
            />
          ))}
        </div>

        {/* Central gemstone glow */}
        <div style={{
          position: "absolute",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(200,169,107,0.12), transparent 70%)",
          filter: "blur(20px)",
        }} />
      </div>

      {/* Metallic sheen overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        mixBlendMode: "overlay",
        opacity: 0.8,
        overflow: "hidden",
      }}>
        <div
          ref={sheenRef}
          style={{
            position: "absolute",
            top: "-40%",
            left: "-60%",
            width: "220%",
            height: "200%",
            background: "linear-gradient(105deg, rgba(200,169,107,0.02) 0%, rgba(255,245,220,0.12) 45%, rgba(192,192,192,0.03) 100%)",
            transform: "rotate(-12deg)",
            filter: "blur(28px)",
          }}
        />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 25% 20%, rgba(200,169,107,0.06), transparent 25%), radial-gradient(ellipse at 75% 85%, rgba(232,204,136,0.04), transparent 30%)",
        }} />
      </div>

      {/* Diamond dust particles */}
      <div ref={particlesRef} style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 9 }}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="hero-particle"
            style={{
              position: "absolute",
              left: `${5 + (i * 9) % 90}%`,
              bottom: `${-5 - (i % 6) * 4}%`,
              width: `${3 + (i % 6)}px`,
              height: `${3 + (i % 6)}px`,
              borderRadius: "50%",
              background: i % 3 === 0 
                ? "radial-gradient(circle, rgba(232,204,136,0.95), rgba(200,169,107,0.4))"
                : i % 3 === 1
                ? "radial-gradient(circle, rgba(192,192,192,0.9), rgba(160,160,160,0.3))"
                : "radial-gradient(circle, rgba(200,169,107,0.85), rgba(200,169,107,0.25))",
              boxShadow: i % 2 === 0 ? "0 0 10px rgba(200,169,107,0.4)" : "0 0 6px rgba(232,204,136,0.3)",
              filter: "blur(4px)",
              opacity: 0.15,
            }}
          />
        ))}
        
        {/* Floating gemstone particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`gem-${i}`}
            className="gem-particle"
            style={{
              position: "absolute",
              left: `${15 + (i * 12) % 70}%`,
              top: `${20 + (i * 8) % 60}%`,
              width: "2px",
              height: "2px",
              background: "#E8CC88",
              borderRadius: "50%",
              opacity: 0.4,
              boxShadow: "0 0 5px rgba(232,204,136,0.7)",
            }}
          />
        ))}

        {/* Flash overlay */}
        <div
          ref={flashRef}
          style={{
            position: "absolute",
            left: "50%",
            top: "35%",
            width: "45rem",
            height: "28rem",
            transform: "translate(-50%, -50%) scale(1)",
            borderRadius: "50%",
            background: "radial-gradient(ellipse at center, rgba(255,245,210,0.9), rgba(200,169,107,0.2) 25%, transparent 50%)",
            opacity: 0,
            pointerEvents: "none",
            mixBlendMode: "screen",
            filter: "blur(42px)",
            zIndex: 9,
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          maxWidth: "900px",
          padding: "0 2rem",
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="hero-element"
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.7rem",
            letterSpacing: "0.45em",
            color: "#C8A96B",
            textTransform: "uppercase",
            marginBottom: "2rem",
            opacity: 0,
          }}
        >
          ✧ Gioiellieri Artigianali dal 1887 — Firenze, Italia ✧
        </div>

        <h1
          className="hero-element hero-title"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(3rem, 8vw, 6.8rem)",
            fontWeight: 300,
            lineHeight: 1.08,
            letterSpacing: "0.02em",
            color: "#F7F5F0",
            marginBottom: "2rem",
            opacity: 0,
          }}
        >
          Tradizione Italiana,
          <br />
          <em className="hero-sub" style={{ color: "#C8A96B", fontStyle: "italic", fontWeight: 400 }}>
            Eleganza Senza Tempo
          </em>
        </h1>

        <p
          className="hero-element"
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
            fontWeight: 300,
            color: "#E7D8BC",
            lineHeight: 1.8,
            maxWidth: "580px",
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
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.72rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#C8A96B",
                background: "transparent",
                border: "1px solid rgba(200,169,107,0.5)",
                padding: "1rem 2.5rem",
                cursor: "pointer",
                transition: "all 0.45s cubic-bezier(0.2, 0.9, 0.4, 1.1)",
                backdropFilter: "blur(4px)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#C8A96B";
                e.currentTarget.style.color = "#0F0F10";
                e.currentTarget.style.borderColor = "#C8A96B";
                e.currentTarget.style.boxShadow = "0 0 25px rgba(200,169,107,0.3)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#C8A96B";
                e.currentTarget.style.borderColor = "rgba(200,169,107,0.5)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Scopri le Collezioni
            </button>
          </Link>
          <Link href="/chi-siamo">
            <button
              className="hero-cta"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.72rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#E7D8BC",
                background: "transparent",
                border: "none",
                padding: "1rem 1.5rem",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = "#C8A96B";
                e.currentTarget.style.transform = "translateX(5px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = "#E7D8BC";
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              La Nostra Storia →
            </button>
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); opacity: 0.6; }
          50% { transform: translateX(-50%) translateY(10px); opacity: 1; }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes ringPulse {
          0%, 100% { box-shadow: 0 0 30px rgba(200,169,107,0.08), inset 0 0 30px rgba(200,169,107,0.05); }
          50% { box-shadow: 0 0 50px rgba(200,169,107,0.15), inset 0 0 50px rgba(200,169,107,0.1); }
        }
        .premium-ring {
          animation: ringPulse 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}