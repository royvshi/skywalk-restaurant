import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Experience", "Menu", "Gallery", "Events", "Reviews", "Reserve"];

const FEATURES = [
  {
    icon: "✦",
    title: "Stunning Ambience",
    desc: "Immerse yourself in vibrant lighting, breathtaking décor, and an atmosphere that sets the perfect mood for every occasion.",
  },
  {
    icon: "◈",
    title: "Exquisite Cuisine",
    desc: "From aromatic Indian curries to Indo-Chinese delights, every dish is crafted with passion and served piping hot.",
  },
  {
    icon: "❋",
    title: "Warm Hospitality",
    desc: "Our friendly, attentive staff ensures every visit feels personal, comfortable, and truly unforgettable.",
  },
  {
    icon: "◉",
    title: "Perfect Celebrations",
    desc: "Whether a birthday, anniversary, or corporate gathering — The Sky Walk transforms every event into a cherished memory.",
  },
];

const MENU_CATEGORIES = [
  {
    name: "Indian Cuisine",
    emoji: "🫕",
    items: ["Dal Makhani", "Paneer Tikka Masala", "Butter Chicken", "Biryani Royale"],
    gradient: "from-amber-900/60 to-orange-900/40",
  },
  {
    name: "Chinese",
    emoji: "🥢",
    items: ["Schezwan Noodles", "Manchurian Gravy", "Spring Rolls", "Hakka Fried Rice"],
    gradient: "from-red-900/60 to-rose-900/40",
  },
  {
    name: "Snacks & Starters",
    emoji: "🍢",
    items: ["Crispy Corn", "Loaded Nachos", "Veg Platter", "Cheese Puffs"],
    gradient: "from-yellow-900/60 to-amber-900/40",
  },
  {
    name: "Mocktails & Beverages",
    emoji: "🍹",
    items: ["Sky Sunrise", "Mango Bliss", "Berry Breeze", "Mint Mojito"],
    gradient: "from-teal-900/60 to-emerald-900/40",
  },
];

const EVENTS = [
  { title: "Birthday Parties", icon: "🎂", desc: "Make their special day truly magical with personalized décor and cake ceremonies." },
  { title: "Family Gatherings", icon: "👨‍👩‍👧‍👦", desc: "A warm, spacious venue perfect for bonding over great food and laughter." },
  { title: "Corporate Dinners", icon: "🤝", desc: "Impress clients and colleagues in a sophisticated, professional setting." },
  { title: "Special Occasions", icon: "🥂", desc: "Anniversaries, proposals, or any milestone — we craft bespoke experiences." },
];

const REVIEWS = [
  {
    name: "Priya S.",
    rating: 5,
    text: "The ambience, food and service were truly amazing. The lighting creates such a magical atmosphere — I felt like I was dining in a dream.",
    occasion: "Anniversary Dinner",
  },
  {
    name: "Rahul M.",
    rating: 5,
    text: "Beautifully decorated restaurant with absolutely delicious food. The staff went above and beyond to make our birthday celebration unforgettable.",
    occasion: "Birthday Party",
  },
  {
    name: "Ananya K.",
    rating: 4,
    text: "Perfect place for celebrations with family. The food was served hot and fresh every time. We'll definitely be coming back for every occasion!",
    occasion: "Family Gathering",
  },
];

const GALLERY_ITEMS = [
  { label: "Night Ambience", size: "large", bg: "from-amber-900 to-yellow-900" },
  { label: "Celebration Moments", size: "small", bg: "from-rose-900 to-pink-900" },
  { label: "Vibrant Décor", size: "small", bg: "from-orange-900 to-amber-900" },
  { label: "Exquisite Cuisine", size: "medium", bg: "from-red-900 to-orange-900" },
  { label: "Elegant Interiors", size: "medium", bg: "from-yellow-900 to-amber-800" },
];

export default function SkyWalk() {
  const [scrollY, setScrollY] = useState(0);
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({ name: "", phone: "", guests: "2", date: "", time: "19:00" });
  const [submitted, setSubmitted] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setNavOpen(false);
  };

  const navBg = scrollY > 60
    ? "bg-black/90 backdrop-blur-xl border-b border-amber-900/30 shadow-2xl"
    : "bg-transparent";

  return (
    <div className="bg-black text-white overflow-x-hidden" style={{ fontFamily: "'Georgia', serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=Jost:wght@200;300;400;500&display=swap');

        * { box-sizing: border-box; }
        
        body { margin: 0; background: #000; }

        .font-display { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-body { font-family: 'Jost', sans-serif; }

        .gold { color: #C9A84C; }
        .gold-light { color: #E8C97A; }

        .btn-gold {
          background: linear-gradient(135deg, #C9A84C 0%, #E8C97A 50%, #C9A84C 100%);
          color: #0a0a0a;
          font-family: 'Jost', sans-serif;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-size: 0.75rem;
          padding: 14px 36px;
          border: none;
          cursor: pointer;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }
        .btn-gold::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s ease;
        }
        .btn-gold:hover::before { left: 100%; }
        .btn-gold:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(201,168,76,0.5);
        }

        .btn-outline {
          background: transparent;
          color: #C9A84C;
          font-family: 'Jost', sans-serif;
          font-weight: 400;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-size: 0.75rem;
          padding: 13px 35px;
          border: 1px solid #C9A84C;
          cursor: pointer;
          transition: all 0.4s ease;
        }
        .btn-outline:hover {
          background: rgba(201,168,76,0.1);
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(201,168,76,0.2);
        }

        .glow-gold { box-shadow: 0 0 40px rgba(201,168,76,0.15), 0 0 80px rgba(201,168,76,0.05); }
        .glow-amber { box-shadow: 0 0 60px rgba(251,191,36,0.1); }

        .glass {
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(201,168,76,0.15);
        }

        .glass-dark {
          background: rgba(0,0,0,0.4);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(201,168,76,0.12);
        }

        .divider {
          width: 60px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #C9A84C, transparent);
          margin: 0 auto;
        }

        .divider-full {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent);
          width: 100%;
        }

        .feature-card {
          transition: all 0.4s ease;
          cursor: default;
        }
        .feature-card:hover {
          transform: translateY(-8px);
          border-color: rgba(201,168,76,0.4) !important;
          box-shadow: 0 20px 60px rgba(201,168,76,0.12);
        }

        .menu-card {
          transition: all 0.5s ease;
          overflow: hidden;
        }
        .menu-card:hover {
          transform: scale(1.02);
          box-shadow: 0 25px 60px rgba(0,0,0,0.5), 0 0 40px rgba(201,168,76,0.1);
        }

        .gallery-item {
          overflow: hidden;
          cursor: pointer;
          position: relative;
        }
        .gallery-item:hover .gallery-overlay { opacity: 1; }
        .gallery-item:hover .gallery-inner { transform: scale(1.08); }

        .gallery-inner {
          transition: transform 0.7s ease;
          width: 100%;
          height: 100%;
        }

        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.5);
          opacity: 0;
          transition: opacity 0.4s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .review-card {
          transition: all 0.4s ease;
        }
        .review-card:hover {
          transform: translateY(-6px);
          border-color: rgba(201,168,76,0.3) !important;
        }

        .hero-particle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          animation: float linear infinite;
        }

        @keyframes float {
          0% { transform: translateY(100vh) scale(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-20px) scale(1); opacity: 0; }
        }

        .fade-in {
          animation: fadeIn 0.8s ease forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .shimmer {
          background: linear-gradient(90deg, #C9A84C 0%, #E8C97A 50%, #C9A84C 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        @keyframes shimmer {
          to { background-position: 200% center; }
        }

        .nav-link {
          font-family: 'Jost', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          cursor: pointer;
          transition: color 0.3s ease;
          position: relative;
          padding-bottom: 4px;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 1px;
          background: #C9A84C;
          transition: width 0.3s ease;
        }
        .nav-link:hover { color: #C9A84C; }
        .nav-link:hover::after { width: 100%; }

        .event-card {
          transition: all 0.4s ease;
          cursor: pointer;
        }
        .event-card:hover {
          transform: translateY(-10px);
          background: rgba(201,168,76,0.08) !important;
          border-color: rgba(201,168,76,0.5) !important;
        }

        .star { color: #C9A84C; }

        input, select {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(201,168,76,0.2);
          color: white;
          font-family: 'Jost', sans-serif;
          font-size: 0.85rem;
          padding: 14px 18px;
          width: 100%;
          outline: none;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          letter-spacing: 0.05em;
        }
        input:focus, select:focus {
          border-color: rgba(201,168,76,0.6);
          box-shadow: 0 0 20px rgba(201,168,76,0.1);
        }
        input::placeholder { color: rgba(255,255,255,0.3); }
        select option { background: #111; color: white; }

        label {
          font-family: 'Jost', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(201,168,76,0.7);
          display: block;
          margin-bottom: 8px;
        }

        .section-tag {
          font-family: 'Jost', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #C9A84C;
          display: block;
          margin-bottom: 16px;
        }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: #C9A84C; border-radius: 2px; }

        .ornament { color: #C9A84C; font-size: 1.2rem; letter-spacing: 0.5em; }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>
            
            {/* Logo */}
            <div onClick={() => scrollTo("home")} style={{ cursor: "pointer" }}>
              <div className="font-display" style={{ fontSize: "1.4rem", fontWeight: 300, letterSpacing: "0.15em", color: "#C9A84C" }}>
                THE SKY WALK
              </div>
              <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.5rem", letterSpacing: "0.4em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", marginTop: 2 }}>
                Elevated Dining
              </div>
            </div>

            {/* Desktop Nav */}
            <div style={{ display: "flex", gap: "36px", alignItems: "center" }} className="hidden-mobile">
              {NAV_LINKS.map(link => (
                <span key={link} className="nav-link" onClick={() => scrollTo(link.toLowerCase())}>
                  {link}
                </span>
              ))}
            </div>

            {/* CTA */}
            <button className="btn-gold hidden-mobile" onClick={() => scrollTo("reserve")} style={{ fontSize: "0.65rem", padding: "10px 24px" }}>
              Reserve Now
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setNavOpen(!navOpen)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "none" }}
              className="mobile-menu-btn"
            >
              <div style={{ width: 24, height: 2, background: "#C9A84C", marginBottom: 5 }} />
              <div style={{ width: 18, height: 2, background: "#C9A84C", marginBottom: 5, marginLeft: "auto" }} />
              <div style={{ width: 24, height: 2, background: "#C9A84C" }} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {navOpen && (
          <div style={{ background: "rgba(0,0,0,0.97)", backdropFilter: "blur(20px)", padding: "32px 40px", borderTop: "1px solid rgba(201,168,76,0.2)" }}>
            {NAV_LINKS.map(link => (
              <div key={link} onClick={() => scrollTo(link.toLowerCase())} className="nav-link" style={{ display: "block", padding: "14px 0", fontSize: "0.8rem" }}>
                {link}
              </div>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="home" style={{ height: "100vh", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        
        {/* Background layers */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 60% 40%, rgba(139,90,43,0.3) 0%, rgba(0,0,0,0) 60%), radial-gradient(ellipse at 20% 80%, rgba(201,168,76,0.1) 0%, transparent 50%), #060606"
        }} />
        
        {/* Bokeh circles */}
        {[...Array(12)].map((_, i) => (
          <div key={i} style={{
            position: "absolute",
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(${i % 2 ? "201,168,76" : "251,191,36"},${0.15 - i * 0.01}) 0%, transparent 70%)`,
            width: `${80 + i * 30}px`,
            height: `${80 + i * 30}px`,
            left: `${(i * 37 + 10) % 100}%`,
            top: `${(i * 23 + 5) % 100}%`,
            transform: "translate(-50%, -50%)",
            animation: `float ${8 + i * 1.5}s ease-in-out infinite alternate`,
            animationDelay: `${i * 0.7}s`,
            pointerEvents: "none",
          }} />
        ))}

        {/* Decorative lines */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "15%", left: "50%", transform: "translateX(-50%)", width: "1px", height: "80px", background: "linear-gradient(180deg, transparent, rgba(201,168,76,0.4), transparent)" }} />
          <div style={{ position: "absolute", bottom: "15%", left: "50%", transform: "translateX(-50%)", width: "1px", height: "80px", background: "linear-gradient(180deg, transparent, rgba(201,168,76,0.4), transparent)" }} />
        </div>

        {/* Content */}
        <div style={{ textAlign: "center", maxWidth: "900px", padding: "0 32px", position: "relative", zIndex: 2 }}>
          <div className="section-tag fade-in" style={{ marginBottom: 24 }}>✦ Gaur City Mall · Greater Noida West ✦</div>
          
          <h1 className="font-display fade-in" style={{
            fontSize: "clamp(3.5rem, 8vw, 7.5rem)",
            fontWeight: 300,
            lineHeight: 1.05,
            letterSpacing: "0.02em",
            marginBottom: 24,
            animationDelay: "0.2s",
          }}>
            Where Dining<br />
            <em className="shimmer" style={{ fontStyle: "italic", fontWeight: 400 }}>Meets the Sky</em>
          </h1>

          <div className="divider fade-in" style={{ animationDelay: "0.4s", marginBottom: 28 }} />

          <p className="font-body fade-in" style={{
            fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
            fontWeight: 300,
            letterSpacing: "0.08em",
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.9,
            maxWidth: "600px",
            margin: "0 auto 48px",
            animationDelay: "0.5s",
          }}>
            Experience premium dining, vibrant ambience, and unforgettable<br />
            celebrations at The Sky Walk.
          </p>

          <div className="fade-in" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", animationDelay: "0.7s" }}>
            <button className="btn-gold" onClick={() => scrollTo("reserve")}>Reserve a Table</button>
            <button className="btn-outline" onClick={() => scrollTo("events")}>Book an Event</button>
          </div>

          <div className="font-body fade-in" style={{ marginTop: 56, color: "rgba(255,255,255,0.35)", fontSize: "0.7rem", letterSpacing: "0.25em", animationDelay: "1s" }}>
            ⭐ 4.4 STARS · 300+ HAPPY GUESTS
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, opacity: 0.5 }}>
          <div className="font-body" style={{ fontSize: "0.55rem", letterSpacing: "0.3em", color: "#C9A84C" }}>SCROLL</div>
          <div style={{ width: 1, height: 50, background: "linear-gradient(180deg, #C9A84C, transparent)", animation: "float 2s ease-in-out infinite" }} />
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="divider-full" />

      {/* ── EXPERIENCE SECTION ── */}
      <section id="experience" style={{ padding: "120px 40px", maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <span className="section-tag">✦ The Sky Walk Experience ✦</span>
          <h2 className="font-display" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 300, letterSpacing: "0.02em", marginBottom: 24 }}>
            An Elevated Dining<br /><em style={{ fontStyle: "italic", color: "#C9A84C" }}>Experience</em>
          </h2>
          <div className="divider" style={{ marginBottom: 28 }} />
          <p className="font-body" style={{ color: "rgba(255,255,255,0.55)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.9, letterSpacing: "0.05em", fontWeight: 300 }}>
            Nestled atop Gaur City Mall, The Sky Walk offers an escape from the ordinary — where every visit becomes a story worth telling.
          </p>
        </div>

        {/* Feature Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
          {FEATURES.map((f, i) => (
            <div key={i} className="glass feature-card" style={{
              padding: "48px 36px",
              textAlign: "center",
              border: "1px solid rgba(201,168,76,0.12)",
            }}>
              <div style={{ fontSize: "2rem", color: "#C9A84C", marginBottom: 20, display: "block" }}>{f.icon}</div>
              <h3 className="font-display" style={{ fontSize: "1.5rem", fontWeight: 400, marginBottom: 16, letterSpacing: "0.05em" }}>
                {f.title}
              </h3>
              <div className="divider" style={{ width: 30, marginBottom: 20 }} />
              <p className="font-body" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.8, fontWeight: 300, fontSize: "0.9rem", letterSpacing: "0.03em" }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider-full" />

      {/* ── MENU ── */}
      <section id="menu" style={{ padding: "120px 40px", background: "linear-gradient(180deg, #000 0%, #0a0800 100%)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <span className="section-tag">✦ Culinary Offerings ✦</span>
            <h2 className="font-display" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 300, letterSpacing: "0.02em", marginBottom: 20 }}>
              A Feast for Every <em style={{ fontStyle: "italic", color: "#C9A84C" }}>Palate</em>
            </h2>
            <div className="divider" />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {MENU_CATEGORIES.map((cat, i) => (
              <div key={i} className={`menu-card glass`} style={{
                border: "1px solid rgba(201,168,76,0.15)",
                position: "relative",
                overflow: "hidden",
              }}>
                <div style={{
                  background: `linear-gradient(135deg, ${cat.gradient.replace("from-", "").replace(" to-", ", ")})`,
                  position: "absolute", inset: 0, opacity: 0.4
                }} />
                <div style={{ position: "relative", padding: "48px 36px" }}>
                  <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>{cat.emoji}</div>
                  <h3 className="font-display" style={{ fontSize: "1.6rem", fontWeight: 400, letterSpacing: "0.05em", marginBottom: 8, color: "#E8C97A" }}>
                    {cat.name}
                  </h3>
                  <div className="divider" style={{ width: 30, margin: "16px 0", opacity: 0.6 }} />
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {cat.items.map((item, j) => (
                      <li key={j} className="font-body" style={{
                        padding: "8px 0",
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                        color: "rgba(255,255,255,0.65)",
                        fontSize: "0.85rem",
                        letterSpacing: "0.05em",
                        fontWeight: 300,
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                      }}>
                        <span style={{ color: "#C9A84C", fontSize: "0.5rem" }}>◆</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 56 }}>
            <p className="font-body" style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.75rem", letterSpacing: "0.2em", marginBottom: 24 }}>
              FULL MENU AVAILABLE AT THE RESTAURANT
            </p>
            <button className="btn-outline" onClick={() => scrollTo("reserve")}>Reserve Your Experience</button>
          </div>
        </div>
      </section>

      <div className="divider-full" />

      {/* ── GALLERY ── */}
      <section id="gallery" style={{ padding: "120px 40px", maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <span className="section-tag">✦ Visual Journey ✦</span>
          <h2 className="font-display" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 300, letterSpacing: "0.02em", marginBottom: 20 }}>
            The <em style={{ fontStyle: "italic", color: "#C9A84C" }}>Sky Walk</em> Story
          </h2>
          <div className="divider" />
        </div>

        {/* Gallery Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gridTemplateRows: "repeat(2, 280px)", gap: 16 }}>
          {/* Large hero item */}
          <div className="gallery-item" style={{ gridColumn: "1 / 7", gridRow: "1 / 3", borderRadius: 2 }}>
            <div className="gallery-inner" style={{ background: `linear-gradient(135deg, #3d2006, #7c4a03, #2a1504)`, height: "100%", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 30%, rgba(201,168,76,0.2), transparent 60%)" }} />
              {/* Faux restaurant visual */}
              <div style={{ textAlign: "center", zIndex: 2 }}>
                <div style={{ fontSize: "5rem", marginBottom: 16 }}>🌃</div>
                <div className="font-display" style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.6)", letterSpacing: "0.2em" }}>Night Ambience</div>
              </div>
              <div style={{ position: "absolute", bottom: 20, left: 24, right: 24, height: 1, background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)" }} />
            </div>
            <div className="gallery-overlay">
              <div className="font-display" style={{ fontSize: "1.5rem", color: "#E8C97A", letterSpacing: "0.1em" }}>Night Ambience</div>
            </div>
          </div>

          {[
            { emoji: "🎉", label: "Celebrations", bg: "linear-gradient(135deg, #3d0618, #8b1a33)" },
            { emoji: "💡", label: "Décor & Lighting", bg: "linear-gradient(135deg, #3d2c00, #8c6400)" },
            { emoji: "🍽️", label: "Exquisite Food", bg: "linear-gradient(135deg, #1a0d00, #5c3000)" },
            { emoji: "✨", label: "Elegant Interiors", bg: "linear-gradient(135deg, #0a1a0a, #1a4a1a)" },
          ].map((item, i) => (
            <div key={i} className="gallery-item" style={{
              gridColumn: i < 2 ? `${7 + i * 3} / ${10 + i * 3}` : `${7 + (i-2) * 3} / ${10 + (i-2) * 3}`,
              gridRow: i < 2 ? "1 / 2" : "2 / 3",
              borderRadius: 2,
            }}>
              <div className="gallery-inner" style={{ background: item.bg, height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "3rem", marginBottom: 8 }}>{item.emoji}</div>
                  <div className="font-display" style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.2em" }}>{item.label}</div>
                </div>
              </div>
              <div className="gallery-overlay">
                <div className="font-display" style={{ fontSize: "1.1rem", color: "#E8C97A", letterSpacing: "0.1em" }}>{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider-full" />

      {/* ── EVENTS ── */}
      <section id="events" style={{ padding: "120px 40px", background: "radial-gradient(ellipse at 50% 0%, rgba(139,90,43,0.12) 0%, #000 60%)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <span className="section-tag">✦ Private Events ✦</span>
            <h2 className="font-display" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 300, letterSpacing: "0.02em", marginBottom: 20 }}>
              Celebrate Life's Finest<br /><em style={{ fontStyle: "italic", color: "#C9A84C" }}>Moments</em>
            </h2>
            <div className="divider" style={{ marginBottom: 28 }} />
            <p className="font-body" style={{ color: "rgba(255,255,255,0.5)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.9, fontWeight: 300, fontSize: "0.9rem" }}>
              The Sky Walk is your perfect venue for celebrations that deserve more than the ordinary.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, marginBottom: 56 }}>
            {EVENTS.map((ev, i) => (
              <div key={i} className="event-card glass" style={{
                padding: "48px 32px",
                textAlign: "center",
                border: "1px solid rgba(201,168,76,0.12)",
              }}>
                <div style={{ fontSize: "2.5rem", marginBottom: 20 }}>{ev.icon}</div>
                <h3 className="font-display" style={{ fontSize: "1.4rem", fontWeight: 400, letterSpacing: "0.05em", marginBottom: 16, color: "#E8C97A" }}>
                  {ev.title}
                </h3>
                <div className="divider" style={{ width: 24, marginBottom: 16 }} />
                <p className="font-body" style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.8, fontWeight: 300, fontSize: "0.85rem" }}>
                  {ev.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <button className="btn-gold" onClick={() => scrollTo("reserve")}>Plan Your Event</button>
          </div>
        </div>
      </section>

      <div className="divider-full" />

      {/* ── REVIEWS ── */}
      <section id="reviews" style={{ padding: "120px 40px", maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <span className="section-tag">✦ Guest Voices ✦</span>
          <h2 className="font-display" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 300, letterSpacing: "0.02em", marginBottom: 20 }}>
            Stories from Our <em style={{ fontStyle: "italic", color: "#C9A84C" }}>Guests</em>
          </h2>
          <div className="divider" style={{ marginBottom: 28 }} />
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
            <div style={{ fontSize: "1.8rem", color: "#C9A84C", letterSpacing: 4 }}>★★★★★</div>
            <div>
              <div className="font-display" style={{ fontSize: "2rem", color: "#C9A84C" }}>4.4</div>
              <div className="font-body" style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.65rem", letterSpacing: "0.2em" }}>300+ REVIEWS</div>
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {REVIEWS.map((rev, i) => (
            <div key={i} className="review-card glass" style={{
              padding: "40px 36px",
              border: "1px solid rgba(201,168,76,0.1)",
              position: "relative",
            }}>
              <div style={{ position: "absolute", top: 24, right: 28, fontSize: "3rem", color: "rgba(201,168,76,0.08)", lineHeight: 1, fontFamily: "Georgia, serif" }}>"</div>
              
              <div style={{ color: "#C9A84C", fontSize: "0.9rem", letterSpacing: 3, marginBottom: 20 }}>
                {"★".repeat(rev.rating)}
              </div>
              
              <p className="font-body" style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.9, fontWeight: 300, fontSize: "0.9rem", marginBottom: 28, fontStyle: "italic" }}>
                "{rev.text}"
              </p>

              <div className="divider" style={{ width: 24, margin: "0 0 20px" }} />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                <div>
                  <div className="font-display" style={{ fontSize: "1.1rem", color: "#E8C97A" }}>{rev.name}</div>
                  <div className="font-body" style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em", marginTop: 4 }}>{rev.occasion}</div>
                </div>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, #C9A84C, #E8C97A)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", color: "#000" }}>
                  {rev.name[0]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider-full" />

      {/* ── RESERVATION ── */}
      <section id="reserve" style={{ padding: "120px 40px", background: "radial-gradient(ellipse at 50% 100%, rgba(139,90,43,0.15) 0%, #000 60%)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span className="section-tag">✦ Reserve Your Table ✦</span>
            <h2 className="font-display" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 300, letterSpacing: "0.02em", marginBottom: 20 }}>
              Your Seat <em style={{ fontStyle: "italic", color: "#C9A84C" }}>Awaits</em>
            </h2>
            <div className="divider" />
          </div>

          <div className="glass" style={{ padding: "56px 56px", border: "1px solid rgba(201,168,76,0.2)" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "48px 0" }}>
                <div style={{ fontSize: "3rem", marginBottom: 20 }}>✦</div>
                <h3 className="font-display" style={{ fontSize: "2rem", color: "#C9A84C", marginBottom: 16 }}>
                  Reservation Received
                </h3>
                <p className="font-body" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.9 }}>
                  Thank you. Our team will confirm your booking shortly.<br />We look forward to welcoming you.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }}>
                  <div>
                    <label>Full Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, marginBottom: 40 }}>
                  <div>
                    <label>Guests</label>
                    <select value={formData.guests} onChange={e => setFormData({...formData, guests: e.target.value})}>
                      {[1,2,3,4,5,6,7,8,"8+"].map(n => <option key={n}>{n}</option>)}
                    </select>
                  </div>
                  <div>
                    <label>Date</label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={e => setFormData({...formData, date: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label>Time</label>
                    <select value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})}>
                      {["12:00","13:00","14:00","15:00","18:00","19:00","20:00","21:00","22:00","23:00"].map(t => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button type="submit" className="btn-gold" style={{ width: "100%", padding: "18px", fontSize: "0.75rem" }}>
                  Reserve Your Table
                </button>
              </form>
            )}
          </div>

          <div style={{ textAlign: "center", marginTop: 32 }}>
            <p className="font-body" style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem", letterSpacing: "0.15em" }}>
              OR CALL US AT{" "}
              <a href="tel:+918800889271" style={{ color: "#C9A84C", textDecoration: "none" }}>088008 89271</a>
            </p>
          </div>
        </div>
      </section>

      <div className="divider-full" />

      {/* ── CONTACT / FOOTER ── */}
      <footer id="contact" style={{ padding: "80px 40px 48px", background: "#030303" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          
          {/* Top row */}
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 60, marginBottom: 64, flexWrap: "wrap" }}>
            
            {/* Brand */}
            <div>
              <div className="font-display" style={{ fontSize: "2rem", fontWeight: 300, letterSpacing: "0.15em", color: "#C9A84C", marginBottom: 8 }}>
                THE SKY WALK
              </div>
              <div className="font-body" style={{ fontSize: "0.6rem", letterSpacing: "0.3em", color: "rgba(255,255,255,0.3)", marginBottom: 24 }}>
                ELEVATED DINING · GAUR CITY MALL
              </div>
              <p className="font-body" style={{ color: "rgba(255,255,255,0.35)", lineHeight: 1.9, fontSize: "0.85rem", maxWidth: "320px" }}>
                Where every meal becomes a memory. Premium dining, vibrant ambience, and warm hospitality await you above the city.
              </p>
            </div>

            {/* Visit */}
            <div>
              <div className="font-body" style={{ fontSize: "0.6rem", letterSpacing: "0.3em", color: "#C9A84C", marginBottom: 24 }}>VISIT US</div>
              <div className="font-body" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 2, fontSize: "0.85rem" }}>
                Gaur City Mall<br />
                Greater Noida West<br />
                Uttar Pradesh, India<br /><br />
                <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem" }}>Open until 12:30 AM</span>
              </div>
            </div>

            {/* Contact */}
            <div>
              <div className="font-body" style={{ fontSize: "0.6rem", letterSpacing: "0.3em", color: "#C9A84C", marginBottom: 24 }}>CONTACT</div>
              <div className="font-body" style={{ lineHeight: 2, fontSize: "0.85rem" }}>
                <a href="tel:+918800889271" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", display: "block" }}>
                  088008 89271
                </a>
                <div style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.75rem", marginTop: 16 }}>
                  Reservations & Events<br />
                  7 Days a Week
                </div>
              </div>
            </div>
          </div>

          <div className="divider-full" style={{ marginBottom: 32 }} />

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <div className="font-body" style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.65rem", letterSpacing: "0.15em" }}>
              © 2025 THE SKY WALK · ALL RIGHTS RESERVED
            </div>
            <div className="font-body" style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.65rem", letterSpacing: "0.15em" }}>
              CRAFTED WITH ✦ FOR ELEVATED EXPERIENCES
            </div>
          </div>
        </div>
      </footer>

      {/* ── Floating Reserve Button ── */}
      {scrollY > 600 && (
        <button
          className="btn-gold"
          onClick={() => scrollTo("reserve")}
          style={{
            position: "fixed",
            bottom: 32,
            right: 32,
            zIndex: 100,
            fontSize: "0.65rem",
            padding: "12px 24px",
            boxShadow: "0 8px 40px rgba(201,168,76,0.4)",
          }}
        >
          ✦ Reserve
        </button>
      )}

      {/* Mobile style overrides */}
      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          section { padding-left: 24px !important; padding-right: 24px !important; }
          footer { padding-left: 24px !important; padding-right: 24px !important; }
          footer > div > div:first-child { grid-template-columns: 1fr !important; gap: 40px !important; }
          .glass[style*="padding: 56px"] { padding: 32px 24px !important; }
          form > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          form > div[style*="grid-template-columns: 1fr 1fr 1fr"] { grid-template-columns: 1fr 1fr !important; }
          div[style*="gridTemplateColumns: repeat(12"] {
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: auto !important;
          }
          div[style*="gridColumn: 1 / 7"] { grid-column: 1 / 3 !important; grid-row: auto !important; }
          div[style*="gridColumn: 7"] { grid-column: auto !important; grid-row: auto !important; }
        }
      `}</style>
    </div>
  );
}