import React from "react";
import Link from "next/link";
import Aurora from "../Aurora";
import CountUp from "../CountUp";
import styles from "./HeroSection.module.css";

/* ─────────────────────────────────────────────────────────────
   Talent Core — animated vector illustration.
   Concentric orbits carry talent nodes around a central hub while
   dashed conduits pulse inward, standing in for the sourcing network.
   ───────────────────────────────────────────────────────────── */
function TalentCore() {
  const orbitNodes = [
    { cx: 230, cy: 40, r: 13, fill: "url(#gradAccent)" },
    { cx: 420, cy: 230, r: 9, fill: "#1D7DC4" },
    { cx: 230, cy: 420, r: 11, fill: "#083A65" },
    { cx: 40, cy: 230, r: 8, fill: "#3FC4E8" },
  ];

  const innerNodes = [
    { cx: 230, cy: 105, r: 9, fill: "#E68100" },
    { cx: 355, cy: 230, r: 7, fill: "#083A65" },
    { cx: 230, cy: 355, r: 8, fill: "#1D7DC4" },
    { cx: 105, cy: 230, r: 7, fill: "#3FC4E8" },
  ];

  return (
    <svg
      className={styles.core}
      viewBox="0 0 460 460"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="gradCore" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1D7DC4" />
          <stop offset="55%" stopColor="#0B4577" />
          <stop offset="100%" stopColor="#062C4E" />
        </linearGradient>
        <linearGradient id="gradAccent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFB74A" />
          <stop offset="100%" stopColor="#E68100" />
        </linearGradient>
        <radialGradient id="gradGlow">
          <stop offset="0%" stopColor="#3FC4E8" stopOpacity="0.35" />
          <stop offset="70%" stopColor="#1D7DC4" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#1D7DC4" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="gradConduit" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E68100" />
          <stop offset="100%" stopColor="#1D7DC4" />
        </linearGradient>
      </defs>

      {/* Ambient glow behind the hub */}
      <circle cx="230" cy="230" r="215" fill="url(#gradGlow)" />

      {/* Outer orbit — slow clockwise */}
      <g className={styles.orbitSlow}>
        <circle
          cx="230"
          cy="230"
          r="190"
          stroke="#1D7DC4"
          strokeOpacity="0.28"
          strokeWidth="1.5"
          strokeDasharray="3 9"
        />
        {orbitNodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.cx} cy={n.cy} r={n.r + 9} fill={n.fill} opacity="0.14" />
            <circle cx={n.cx} cy={n.cy} r={n.r} fill={n.fill} />
            <circle cx={n.cx} cy={n.cy} r={n.r / 2.6} fill="#FFFFFF" opacity="0.9" />
          </g>
        ))}
      </g>

      {/* Mid orbit — counter-rotating for parallax */}
      <g className={styles.orbitReverse}>
        <circle
          cx="230"
          cy="230"
          r="125"
          stroke="#083A65"
          strokeOpacity="0.22"
          strokeWidth="1.5"
          strokeDasharray="8 8"
        />
        {innerNodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.cx} cy={n.cy} r={n.r + 7} fill={n.fill} opacity="0.16" />
            <circle cx={n.cx} cy={n.cy} r={n.r} fill={n.fill} />
          </g>
        ))}
      </g>

      {/* Conduits feeding the hub — dashes travel inward continuously */}
      <g className={styles.conduits} stroke="url(#gradConduit)" strokeWidth="1.6" strokeLinecap="round">
        <line x1="230" y1="118" x2="230" y2="182" />
        <line x1="342" y1="230" x2="278" y2="230" />
        <line x1="230" y1="342" x2="230" y2="278" />
        <line x1="118" y1="230" x2="182" y2="230" />
        <line x1="152" y1="152" x2="196" y2="196" />
        <line x1="308" y1="152" x2="264" y2="196" />
        <line x1="308" y1="308" x2="264" y2="264" />
        <line x1="152" y1="308" x2="196" y2="264" />
      </g>

      {/* Expanding signal rings from the hub */}
      <circle className={styles.pulse1} cx="230" cy="230" r="60" stroke="#1D7DC4" strokeWidth="1.5" />
      <circle className={styles.pulse2} cx="230" cy="230" r="60" stroke="#E68100" strokeWidth="1.5" />
      <circle className={styles.pulse3} cx="230" cy="230" r="60" stroke="#3FC4E8" strokeWidth="1.5" />

      {/* Central hub */}
      <g className={styles.hub}>
        <circle cx="230" cy="230" r="74" fill="#FFFFFF" fillOpacity="0.5" />
        <circle cx="230" cy="230" r="60" fill="url(#gradCore)" />
        <circle
          cx="230"
          cy="230"
          r="70"
          stroke="url(#gradAccent)"
          strokeWidth="2"
          strokeDasharray="46 14"
          className={styles.hubRing}
        />
        {/* Abstract "people connected" glyph */}
        <circle cx="230" cy="212" r="13" fill="#FFFFFF" />
        <path
          d="M204 258c0-14 12-24 26-24s26 10 26 24"
          stroke="#FFFFFF"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="199" cy="222" r="7" fill="#FFB74A" />
        <circle cx="261" cy="222" r="7" fill="#3FC4E8" />
      </g>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   Hero
   ───────────────────────────────────────────────────────────── */
const HEADLINE_WORDS = [
  { text: "Full", accent: false },
  { text: "spectrum", accent: false },
  { text: "talent,", accent: false },
  { text: "for", accent: true },
  { text: "high-growth", accent: true },
  { text: "enterprise.", accent: true },
];

const STATS = [
  { value: 500, suffix: "+", label: "Placements made" },
  { value: 98, suffix: "%", label: "90-day retention" },
  { value: 24, suffix: "h", label: "Candidate SLA" },
  { value: 360, suffix: "°", label: "Consulting approach" },
];

export default function HeroSection() {
  return (
    <section
      className={`${styles.heroOuter} aurora-host`}
      aria-label="SBHR Consultancy — Human Capital & Executive Recruitment"
    >
      <Aurora variant="light" />

      <div className={`${styles.heroContainer} grid-overlay`} id="hero-section">
        <div className={styles.heroGrid}>
          {/* ── Copy ─────────────────────────────────────── */}
          <div className={styles.heroContent}>
            <span className={`eyebrow-pill ${styles.eyebrow}`}>
              Human capital &amp; executive recruitment
            </span>

            <h1 className={styles.headline}>
              {HEADLINE_WORDS.map((word, i) => (
                <span key={i} className={styles.wordMask}>
                  <span
                    className={`${styles.word} ${word.accent ? styles.wordAccent : ""}`}
                    style={{ animationDelay: `${120 + i * 85}ms` }}
                  >
                    {word.text}
                  </span>
                </span>
              ))}
            </h1>

            <p className={styles.sub}>
              Your whole-of-talent partner — connecting India&apos;s top professionals,
              industry leaders &amp; domain experts with leading organisations through permanent,
              contract &amp; global workforce solutions.
            </p>

            <div className={styles.ctas}>
              <Link href="/contact" className="btn btn-primary btn-lg" id="hero-btn-hire">
                Get in touch
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path
                    d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link href="/services" className="btn btn-outline btn-lg" id="hero-btn-services">
                Our services
              </Link>
            </div>

            <div className={styles.trustRow}>
              <span className={styles.trustItem}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Kolkata based, nationally connected
              </span>
              <span className={styles.trustDivider} aria-hidden="true" />
              <span className={styles.trustItem}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Vetted profiles within 24 hours
              </span>
            </div>
          </div>

          {/* ── Vector visual ────────────────────────────── */}
          <div className={styles.visual}>
            <div className={styles.coreWrap}>
              <TalentCore />
            </div>

            {/* Translucent chips orbiting the illustration */}
            <div className={`${styles.chip} ${styles.chipOne}`}>
              <span className={styles.chipIndex}>01</span>
              <span className={styles.chipMeta}>Staffing</span>
              <strong className={styles.chipTitle}>Permanent Hire</strong>
            </div>

            <div className={`${styles.chip} ${styles.chipTwo} ${styles.chipAccent}`}>
              <span className={styles.chipIndex}>02</span>
              <span className={styles.chipMeta}>Contract</span>
              <strong className={styles.chipTitle}>On-Demand Teams</strong>
            </div>

            <div className={`${styles.chip} ${styles.chipThree}`}>
              <span className={styles.chipIndex}>03</span>
              <span className={styles.chipMeta}>Executive</span>
              <strong className={styles.chipTitle}>C-Suite Search</strong>
            </div>

            <div className={`${styles.badge} ${styles.badgeOne}`}>
              <strong>98%</strong>
              <span>Retention rate</span>
            </div>

            <div className={`${styles.badge} ${styles.badgeTwo}`}>
              <strong>500+</strong>
              <span>Placements made</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats strip ────────────────────────────────── */}
      <div className={styles.statsStrip}>
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={styles.statItem}
            style={{ animationDelay: `${700 + i * 110}ms` }}
          >
            <span className={styles.statValue}>
              <CountUp value={stat.value} suffix={stat.suffix} />
            </span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
