"use client";

import React from "react";
import Link from "next/link";
import styles from "./HeroSection.module.css";

/* ─────────────────────────────────────────────────────────────
   Abstract tech-themed SVG illustration
   No humans. Geometric nodes, flowing curves, network topology.
   ───────────────────────────────────────────────────────────── */
function TechIllustration() {
  return (
    <svg
      className={styles.illustration}
      viewBox="0 0 720 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Background blobs */}
      <ellipse cx="180" cy="240" rx="160" ry="100" fill="#E68100" opacity="0.18" />
      <ellipse cx="540" cy="260" rx="200" ry="120" fill="#083A65" opacity="0.14" />
      <ellipse cx="360" cy="280" rx="120" ry="80"  fill="#c46e00" opacity="0.12" />

      {/* Fluid wave base */}
      <path
        d="M0 280 Q120 220 240 250 Q360 280 480 230 Q600 180 720 220 L720 320 L0 320 Z"
        fill="url(#waveGrad)"
        opacity="0.9"
      />

      {/* Node network */}
      {/* Lines */}
      <line x1="120" y1="180" x2="260" y2="120" stroke="#083A65" strokeWidth="1.5" opacity="0.35" />
      <line x1="260" y1="120" x2="400" y2="160" stroke="#083A65" strokeWidth="1.5" opacity="0.35" />
      <line x1="400" y1="160" x2="560" y2="100" stroke="#E68100" strokeWidth="1.5" opacity="0.4" />
      <line x1="560" y1="100" x2="640" y2="170" stroke="#083A65" strokeWidth="1.5" opacity="0.35" />
      <line x1="260" y1="120" x2="320" y2="200" stroke="#083A65" strokeWidth="1"   opacity="0.25" />
      <line x1="400" y1="160" x2="480" y2="210" stroke="#E68100" strokeWidth="1"   opacity="0.3" />
      <line x1="120" y1="180" x2="80"  y2="100" stroke="#083A65" strokeWidth="1"   opacity="0.2" />

      {/* Node circles */}
      <circle cx="120" cy="180" r="14" fill="#083A65" opacity="0.15" />
      <circle cx="120" cy="180" r="8"  fill="#083A65" opacity="0.7" />
      <circle cx="120" cy="180" r="3"  fill="#FFFFFF" />

      <circle cx="260" cy="120" r="18" fill="#E68100" opacity="0.15" />
      <circle cx="260" cy="120" r="11" fill="#E68100" opacity="0.85" />
      <circle cx="260" cy="120" r="4"  fill="#FFFFFF" />

      <circle cx="400" cy="160" r="14" fill="#083A65" opacity="0.15" />
      <circle cx="400" cy="160" r="8"  fill="#083A65" opacity="0.7" />
      <circle cx="400" cy="160" r="3"  fill="#FFFFFF" />

      <circle cx="560" cy="100" r="20" fill="#E68100" opacity="0.15" />
      <circle cx="560" cy="100" r="12" fill="#E68100" opacity="0.9" />
      <circle cx="560" cy="100" r="5"  fill="#FFFFFF" />

      <circle cx="640" cy="170" r="12" fill="#083A65" opacity="0.15" />
      <circle cx="640" cy="170" r="7"  fill="#083A65" opacity="0.65" />
      <circle cx="640" cy="170" r="3"  fill="#FFFFFF" />

      <circle cx="320" cy="200" r="10" fill="#083A65" opacity="0.5" />
      <circle cx="320" cy="200" r="3"  fill="#FFFFFF" />

      <circle cx="480" cy="210" r="9"  fill="#E68100" opacity="0.55" />
      <circle cx="480" cy="210" r="3"  fill="#FFFFFF" />

      <circle cx="80"  cy="100" r="8"  fill="#083A65" opacity="0.5" />
      <circle cx="80"  cy="100" r="3"  fill="#FFFFFF" />

      {/* Floating label cards */}
      {/* Card 1 — IT Staffing */}
      <rect x="60" y="60" width="120" height="52" rx="10" fill="white" opacity="0.92" />
      <rect x="60" y="60" width="120" height="52" rx="10" fill="none" stroke="#083A65" strokeOpacity="0.12" />
      <text x="75" y="82" fontFamily="sans-serif" fontSize="8" fill="#5A7A94" fontWeight="600">01 · STAFFING</text>
      <text x="75" y="97" fontFamily="sans-serif" fontSize="10" fill="#083A65" fontWeight="800">Permanent Hire</text>

      {/* Card 2 — Contract */}
      <rect x="310" y="50" width="130" height="52" rx="10" fill="#E68100" opacity="0.95" />
      <text x="325" y="72"  fontFamily="sans-serif" fontSize="8"  fill="rgba(255,255,255,0.8)" fontWeight="600">02 · CONTRACT</text>
      <text x="325" y="87"  fontFamily="sans-serif" fontSize="10" fill="#FFFFFF" fontWeight="800">On-Demand Teams</text>

      {/* Card 3 — Executive */}
      <rect x="510" y="38" width="140" height="52" rx="10" fill="white" opacity="0.92" />
      <rect x="510" y="38" width="140" height="52" rx="10" fill="none" stroke="#E68100" strokeOpacity="0.3" />
      <text x="525" y="60"  fontFamily="sans-serif" fontSize="8"  fill="#5A7A94" fontWeight="600">03 · EXECUTIVE</text>
      <text x="525" y="75"  fontFamily="sans-serif" fontSize="10" fill="#083A65" fontWeight="800">C-Suite Search</text>

      {/* Stat badge */}
      <rect x="180" y="190" width="105" height="42" rx="8" fill="#083A65" opacity="0.9" />
      <text x="195" y="208" fontFamily="sans-serif" fontSize="16" fill="#E68100" fontWeight="900">98%</text>
      <text x="195" y="224" fontFamily="sans-serif" fontSize="8"  fill="rgba(255,255,255,0.75)" fontWeight="600">Retention Rate</text>

      <rect x="420" y="195" width="115" height="42" rx="8" fill="#E68100" opacity="0.9" />
      <text x="435" y="213" fontFamily="sans-serif" fontSize="16" fill="#FFFFFF" fontWeight="900">500+</text>
      <text x="435" y="229" fontFamily="sans-serif" fontSize="8"  fill="rgba(255,255,255,0.8)" fontWeight="600">Placements Made</text>

      <defs>
        <linearGradient id="waveGrad" x1="0" y1="0" x2="720" y2="0">
          <stop offset="0%"   stopColor="#EAF0F7" />
          <stop offset="45%"  stopColor="#D8E8F5" />
          <stop offset="100%" stopColor="#EAF0F7" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   Hero Section Component
   ───────────────────────────────────────────────────────────── */
export default function HeroSection() {
  return (
    <section className={styles.heroOuter} aria-label="SBHR Consultancy — IT Staffing & Executive Recruitment">

      {/* Rounded Hero Container — Spectrum.Life style soft card */}
      <div className={styles.heroContainer} id="hero-section">

        {/* Text content */}
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>
            IT staffing &amp; executive recruitment
          </p>

          <h1 className={styles.headline}>
            Full spectrum talent,<em>for high-growth enterprise.</em>
          </h1>

          <p className={styles.sub}>
            Your whole-of-talent digital partner — connecting India's top engineers,
            architects &amp; IT leaders with leading organisations through permanent,
            contract &amp; offshore GCC staffing.
          </p>

          <div className={styles.ctas}>
            <Link href="/contact" className={`btn btn-primary ${styles.ctaMain}`} id="hero-btn-hire">
              Get in touch
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="/services" className="btn btn-outline" id="hero-btn-services">
              Our services
            </Link>
          </div>
        </div>

        {/* Abstract illustration (replaces human photo) */}
        <div className={styles.illustrationWrap}>
          <TechIllustration />
        </div>
      </div>

      {/* Stats strip below the hero card */}
      <div className={styles.statsStrip}>
        {[
          { value: "500+", label: "Placements made" },
          { value: "98%",  label: "90-day retention" },
          { value: "48h",  label: "Candidate SLA" },
          { value: "80+",  label: "Enterprise clients" },
        ].map((stat) => (
          <div key={stat.label} className={styles.statItem}>
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
