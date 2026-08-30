import React from "react";
import PageHero from "../../../components/PageHero";
import Aurora from "../../../components/Aurora";
import Reveal from "../../../components/Reveal";
import CtaBanner from "../../../components/CtaBanner";
import styles from "../service-detail.module.css";

/* ═══════════════════════════════════════════════════════════
   SVG ILLUSTRATIONS
   ═══════════════════════════════════════════════════════════ */

/** Globe with talent pins across geographies */
function GlobalMapVector() {
  return (
    <svg className={styles.vectorSvg} viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Global workforce deployment map">
      <defs>
        <radialGradient id="gw-globeGrad" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#EAF4FD" />
          <stop offset="100%" stopColor="#D0E8F6" />
        </radialGradient>
        <linearGradient id="gw-pinGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E68100" />
          <stop offset="100%" stopColor="#FFB74A" />
        </linearGradient>
      </defs>
      {/* Globe body */}
      <circle cx="150" cy="110" r="96" fill="url(#gw-globeGrad)" stroke="#1D7DC4" strokeOpacity="0.18" strokeWidth="1.5" />
      {/* Latitude lines */}
      {[65, 90, 110, 130, 155].map((y) => {
        const r = Math.sqrt(96 * 96 - (y - 110) * (y - 110));
        return <ellipse key={y} cx="150" cy={y} rx={r} ry={r * 0.3} stroke="#1D7DC4" strokeOpacity="0.12" strokeWidth="1" fill="none" />;
      })}
      {/* Longitude lines */}
      <ellipse cx="150" cy="110" rx="30" ry="96" stroke="#1D7DC4" strokeOpacity="0.1" strokeWidth="1" fill="none" />
      <ellipse cx="150" cy="110" rx="70" ry="96" stroke="#1D7DC4" strokeOpacity="0.1" strokeWidth="1" fill="none" />
      <line x1="150" y1="14" x2="150" y2="206" stroke="#1D7DC4" strokeOpacity="0.1" strokeWidth="1" />
      {/* Location pins */}
      {[
        { cx: 108, cy: 78, delay: 0 },   /* Europe */
        { cx: 190, cy: 88, delay: 0.4 }, /* South Asia */
        { cx: 230, cy: 110, delay: 0.8 }, /* SE Asia */
        { cx: 72, cy: 105, delay: 1.2 },  /* Americas */
        { cx: 155, cy: 140, delay: 1.6 }, /* Middle East */
        { cx: 130, cy: 155, delay: 2.0 }, /* Africa */
      ].map((pin, i) => (
        <g key={i} className={styles.glowDot} style={{ animationDelay: `${pin.delay}s` }}>
          <circle cx={pin.cx} cy={pin.cy} r="10" fill="#FFFFFF" opacity="0.6" />
          <path d={`M${pin.cx} ${pin.cy - 6} a4 4 0 0 1 8 0 c0 3-4 8-4 8s-4-5-4-8z`} fill="url(#gw-pinGrad)" />
        </g>
      ))}
      {/* Connection arc lines between pins */}
      <path d="M108 78 Q150 40 190 88" stroke="#E68100" strokeOpacity="0.25" strokeWidth="1.2" fill="none" strokeDasharray="4 4" className={styles.dashFlow} />
      <path d="M190 88 Q220 70 230 110" stroke="#1D7DC4" strokeOpacity="0.25" strokeWidth="1.2" fill="none" strokeDasharray="4 4" className={styles.dashFlow} style={{ animationDelay: "0.5s" }} />
      <path d="M72 105 Q100 60 108 78" stroke="#3FC4E8" strokeOpacity="0.25" strokeWidth="1.2" fill="none" strokeDasharray="4 4" className={styles.dashFlow} style={{ animationDelay: "1s" }} />
      {/* Badge */}
      <g className={styles.floatBadge}>
        <circle cx="248" cy="54" r="18" fill="#FFFFFF" />
        <circle cx="248" cy="54" r="18" stroke="#E68100" strokeOpacity="0.25" strokeWidth="1.5" />
        <path d="M240 54.5l5 5 10-10" stroke="#E68100" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

/** Employer of Record — compliance shield */
function EORVector() {
  return (
    <svg className={styles.vectorSvg} viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Employer of Record compliance shield">
      <defs>
        <linearGradient id="eor-shieldGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1D7DC4" />
          <stop offset="100%" stopColor="#083A65" />
        </linearGradient>
        <linearGradient id="eor-bgGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#EAF4FD" />
        </linearGradient>
      </defs>
      {/* Background halo */}
      <circle cx="150" cy="100" r="88" fill="#EAF4FD" opacity="0.6" />
      {/* Shield */}
      <path d="M150 18 L218 44 L218 112 C218 148 186 175 150 188 C114 175 82 148 82 112 L82 44 Z" fill="url(#eor-shieldGrad)" />
      <path d="M150 32 L208 52 L208 112 C208 142 180 166 150 176 C120 166 92 142 92 112 L92 52 Z" fill="url(#eor-bgGrad)" opacity="0.2" />
      {/* Checkmark */}
      <path d="M126 100l16 16 32-32" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Country flag strips */}
      {[
        { x: 34, y: 48, c: "#E68100" },
        { x: 234, y: 48, c: "#3FC4E8" },
        { x: 34, y: 142, c: "#1D7DC4" },
        { x: 234, y: 142, c: "#083A65" },
      ].map((flag, i) => (
        <g key={i} className={styles.floatNode} style={{ animationDelay: `${i * 0.35}s` }}>
          <rect x={flag.x} y={flag.y} width="32" height="22" rx="4" fill={flag.c} opacity="0.7" />
          <rect x={flag.x} y={flag.y} width="32" height="7" rx="4" fill="#FFFFFF" opacity="0.3" />
          {/* Arrow to shield */}
          <line x1={flag.x < 150 ? flag.x + 32 : flag.x} y1={flag.y + 11} x2={flag.x < 150 ? 90 : 210} y2={105} stroke={flag.c} strokeOpacity="0.3" strokeWidth="1" strokeDasharray="3 3" className={styles.dashFlow} />
        </g>
      ))}
    </svg>
  );
}

/** Global payroll — multi-currency flow */
function GlobalPayrollVector() {
  const currencies = [
    { symbol: "₹", x: 30, y: 60, delay: 0 },
    { symbol: "$", x: 240, y: 60, delay: 0.4 },
    { symbol: "£", x: 30, y: 145, delay: 0.8 },
    { symbol: "€", x: 240, y: 145, delay: 1.2 },
    { symbol: "¥", x: 135, y: 28, delay: 1.6 },
  ];
  return (
    <svg className={styles.vectorSvg} viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Global payroll multi-currency flow">
      <defs>
        <linearGradient id="pay-hubGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E68100" />
          <stop offset="100%" stopColor="#FFB74A" />
        </linearGradient>
      </defs>
      {/* Central hub */}
      <circle cx="150" cy="110" r="36" fill="url(#pay-hubGrad)" />
      <text x="150" y="106" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700" fontFamily="sans-serif">PAYROLL</text>
      <text x="150" y="120" textAnchor="middle" fill="#FFFFFF" fontSize="9" opacity="0.8" fontFamily="sans-serif">HUB</text>
      {/* Pulse ring */}
      <circle cx="150" cy="110" r="46" stroke="#E68100" strokeOpacity="0.3" strokeWidth="1.5" fill="none" className={styles.pulseRing} style={{ transformOrigin: "150px 110px" }} />
      {/* Currency nodes */}
      {currencies.map((c) => (
        <g key={c.symbol}>
          <circle cx={c.x + 18} cy={c.y + 18} r="22" fill="#FFFFFF" stroke="#1D7DC4" strokeOpacity="0.2" strokeWidth="1.5" className={styles.glowDot} style={{ animationDelay: `${c.delay}s` }} />
          <text x={c.x + 18} y={c.y + 23} textAnchor="middle" fill="#083A65" fontSize="16" fontWeight="700" fontFamily="sans-serif" opacity="0.7">{c.symbol}</text>
          {/* Connector */}
          <line x1={c.x + 18} y1={c.y + 18} x2={150} y2={110} stroke="#1D7DC4" strokeOpacity="0.18" strokeWidth="1" strokeDasharray="4 4" className={styles.dashFlow} style={{ animationDelay: `${c.delay}s` }} />
        </g>
      ))}
      {/* Bottom status bar */}
      <rect x="46" y="190" width="208" height="16" rx="8" fill="#083A65" opacity="0.07" />
      <rect x="46" y="190" width="170" height="16" rx="8" fill="#1D7DC4" opacity="0.2" className={styles.growBar} style={{ transformOrigin: "46px 198px" }} />
      <text x="150" y="202" textAnchor="middle" fill="#083A65" fontSize="8" fontFamily="sans-serif" opacity="0.45">Payroll Processed — 48 Countries</text>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   CONTENT
   ═══════════════════════════════════════════════════════════ */
const SERVICES = [
  {
    id: "gw-eor",
    tag: "Risk-Free Global Expansion",
    title: "Employer of Record (EOR)",
    body: "Expanding into a new country without a local legal entity is now seamless. As your Employer of Record, SBHR assumes full legal employer responsibility in the target country — managing local employment contracts, tax registration, statutory benefits, and payroll compliance — so you can deploy talent globally in days, not months.",
    features: ["Local Entity Management", "Statutory Compliance", "Employment Contracts", "Benefits Administration"],
    icon: (<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></>),
    vector: <EORVector />,
  },
  {
    id: "gw-payroll",
    tag: "Accurate & Timely",
    title: "Global Payroll Management",
    body: "Managing payroll across multiple countries, currencies, and tax jurisdictions is one of the most complex operational challenges for growing organisations. We consolidate this complexity into a single, reliable payroll service — ensuring on-time, accurate pay for your employees worldwide while keeping you fully compliant in every market.",
    features: ["Multi-Country Payroll Processing", "Tax Withholding & Remittance", "Currency Management", "Payroll Reporting & Audit"],
    icon: (<><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></>),
    vector: <GlobalPayrollVector />,
  },
  {
    id: "gw-staffing",
    tag: "Cross-Border Talent Deployment",
    title: "Multi-Country Staffing & Immigration",
    body: "We place talent across geographies — managing work visa applications, immigration compliance, secondment arrangements, and cross-border contractor engagement. Whether you're sending employees abroad or hiring internationally, we handle every regulatory complexity so your people can focus on the work.",
    features: ["Work Visa & Immigration Support", "International Secondments", "Cross-Border Contractor Management", "Global Mobility Advisory"],
    icon: (<><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>),
    vector: <GlobalMapVector />,
  },
];

const PROCESS = [
  { id: "gw-step-1", title: "Market Entry Assessment", desc: "We evaluate the target market's employment law landscape, payroll obligations, and compliance requirements specific to your role types and business structure." },
  { id: "gw-step-2", title: "Entity or EOR Decision", desc: "We help you determine the optimal engagement model — local entity, EOR, or contractor arrangement — based on your timeline, volume, and risk appetite." },
  { id: "gw-step-3", title: "Setup & Onboarding", desc: "We handle all registration, contract preparation, benefit enrolment, and payroll configuration to get your first hire operational fast." },
  { id: "gw-step-4", title: "Ongoing Compliance Management", desc: "We continuously monitor regulatory changes in each country and proactively update your employment practices to maintain full compliance." },
];

export default function GlobalWorkforcePage() {
  return (
    <div className={styles.servicePage}>
      <PageHero
        id="gw-header"
        eyebrow="Global Workforce & Employment Solutions"
        title={
          <>
            Expand Globally.{" "}
            <span className="gradient-text">Hire Without Borders.</span>
          </>
        }
        lede="We enable organisations to expand globally with ease — managing employment compliance, payroll administration, and multi-country workforce operations so you can focus on building great products and delivering exceptional results."
      />

      {SERVICES.map((service, index) => (
        <section className="container" id={service.id} key={service.id}>
          <div className={`${styles.serviceDetail} ${index % 2 === 1 ? styles.reversed : ""}`}>
            <div className={styles.serviceContent}>
              <Reveal variant={index % 2 === 1 ? "right" : "left"}>
                <span className="eyebrow-pill">{service.tag}</span>
              </Reveal>
              <Reveal variant={index % 2 === 1 ? "right" : "left"} delay={90}>
                <h2 className={styles.serviceTitle}>
                  <span className={styles.serviceIcon}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{service.icon}</svg>
                  </span>
                  {service.title}
                </h2>
              </Reveal>
              <Reveal variant={index % 2 === 1 ? "right" : "left"} delay={170}>
                <p className={styles.serviceText}>{service.body}</p>
              </Reveal>
              <ul className={styles.serviceFeatures}>
                {service.features.map((f, i) => (
                  <Reveal as="li" key={f} className={styles.featureItem} variant="up" delay={250 + i * 90}>
                    <span className={styles.featureIcon}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    {f}
                  </Reveal>
                ))}
              </ul>
            </div>
            <Reveal className={styles.vectorContainer} variant={index % 2 === 1 ? "left" : "right"} delay={140}>
              <div className={styles.vectorGlass}>{service.vector}</div>
            </Reveal>
          </div>
        </section>
      ))}

      <section className={`${styles.processSection} aurora-host`} id="gw-process">
        <Aurora variant="cool" />
        <div className="container">
          <Reveal className={styles.sectionHead} variant="up">
            <span className="eyebrow-pill">Our Global Expansion Methodology</span>
            <h2 className={styles.sectionTitle}>
              From Decision to{" "}
              <span className="gradient-text">First Day Deployed</span>
            </h2>
            <p className={styles.sectionLede}>
              Our structured four-phase approach takes you from market entry planning
              to a fully compliant, operational global workforce in record time.
            </p>
          </Reveal>
          <div className={styles.timeline}>
            <span className={styles.timelineRail} aria-hidden="true" />
            {PROCESS.map((step, i) => (
              <Reveal key={step.id} variant="up" delay={i * 120} className={styles.timelineItem}>
                <div className={styles.timelineCard} id={step.id}>
                  <span className={styles.stepNum}>{i + 1}</span>
                  <h4 className={styles.stepTitle}>{step.title}</h4>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        sectionId="gw-cta"
        eyebrow="Go global with confidence"
        title="Ready to Hire Across Borders Without the Complexity?"
        desc="Our global workforce specialists will design the right employment structure for your expansion, handle every compliance detail, and ensure your people are paid accurately and on time — everywhere."
        primary={{ href: "/contact", label: "Plan Your Global Expansion", id: "gw-cta-contact-btn" }}
        secondary={{ href: "/services", label: "Explore All Services", id: "gw-cta-services-btn" }}
      />
    </div>
  );
}
