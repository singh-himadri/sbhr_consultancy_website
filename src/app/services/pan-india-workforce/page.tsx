import React from "react";
import PageHero from "../../../components/PageHero";
import Aurora from "../../../components/Aurora";
import Reveal from "../../../components/Reveal";
import CtaBanner from "../../../components/CtaBanner";
import styles from "../service-detail.module.css";

/* ═══════════════════════════════════════════════════════════
   SVG ILLUSTRATIONS
   ═══════════════════════════════════════════════════════════ */

/** Pan-India talent hub network vector */
function IndiaNetworkVector() {
  const hubs = [
    { name: "Delhi NCR", cx: 125, cy: 58, delay: 0 },
    { name: "Kolkata (HQ)", cx: 215, cy: 102, delay: 0.3, isHq: true },
    { name: "Mumbai", cx: 90, cy: 122, delay: 0.6 },
    { name: "Pune", cx: 105, cy: 138, delay: 0.9 },
    { name: "Hyderabad", cx: 148, cy: 136, delay: 1.2 },
    { name: "Bengaluru", cx: 130, cy: 170, delay: 1.5 },
    { name: "Chennai", cx: 162, cy: 176, delay: 1.8 },
  ];

  return (
    <svg className={styles.vectorSvg} viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pan-India talent deployment network map">
      <defs>
        <radialGradient id="piw-mapGrad" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#EAF4FD" />
          <stop offset="100%" stopColor="#D2E8F7" />
        </radialGradient>
        <linearGradient id="piw-pinGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E68100" />
          <stop offset="100%" stopColor="#FFB74A" />
        </linearGradient>
        <linearGradient id="piw-hqGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1D7DC4" />
          <stop offset="100%" stopColor="#083A65" />
        </linearGradient>
      </defs>

      {/* Network field outline */}
      <circle cx="150" cy="110" r="96" fill="url(#piw-mapGrad)" stroke="#1D7DC4" strokeOpacity="0.18" strokeWidth="1.5" />

      {/* Region concentric rings */}
      <circle cx="150" cy="110" r="72" stroke="#1D7DC4" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="150" cy="110" r="44" stroke="#1D7DC4" strokeOpacity="0.1" strokeWidth="1" />

      {/* Inter-hub network flow arcs */}
      <path d="M125 58 Q170 80 215 102" stroke="#E68100" strokeOpacity="0.3" strokeWidth="1.3" fill="none" strokeDasharray="4 4" className={styles.dashFlow} />
      <path d="M125 58 Q100 90 90 122" stroke="#1D7DC4" strokeOpacity="0.3" strokeWidth="1.3" fill="none" strokeDasharray="4 4" className={styles.dashFlow} style={{ animationDelay: "0.4s" }} />
      <path d="M215 102 Q180 120 148 136" stroke="#E68100" strokeOpacity="0.3" strokeWidth="1.3" fill="none" strokeDasharray="4 4" className={styles.dashFlow} style={{ animationDelay: "0.8s" }} />
      <path d="M90 122 Q120 150 130 170" stroke="#3FC4E8" strokeOpacity="0.3" strokeWidth="1.3" fill="none" strokeDasharray="4 4" className={styles.dashFlow} style={{ animationDelay: "1.1s" }} />
      <path d="M148 136 Q140 155 130 170" stroke="#1D7DC4" strokeOpacity="0.25" strokeWidth="1.2" fill="none" strokeDasharray="3 3" className={styles.dashFlow} style={{ animationDelay: "1.4s" }} />
      <path d="M130 170 Q145 174 162 176" stroke="#083A65" strokeOpacity="0.25" strokeWidth="1.2" fill="none" />

      {/* Talent hub node markers */}
      {hubs.map((hub) => (
        <g key={hub.name} className={styles.glowDot} style={{ animationDelay: `${hub.delay}s` }}>
          <circle cx={hub.cx} cy={hub.cy} r={hub.isHq ? 8 : 6} fill="#FFFFFF" stroke={hub.isHq ? "#083A65" : "#1D7DC4"} strokeWidth="1.5" />
          <circle cx={hub.cx} cy={hub.cy} r={hub.isHq ? 4 : 3} fill={hub.isHq ? "url(#piw-hqGrad)" : "url(#piw-pinGrad)"} />
          <text
            x={hub.cx}
            y={hub.cy - (hub.isHq ? 11 : 9)}
            textAnchor="middle"
            fill="#083A65"
            fontSize={hub.isHq ? "8.5" : "7.5"}
            fontWeight={hub.isHq ? "700" : "600"}
            fontFamily="sans-serif"
          >
            {hub.name}
          </text>
        </g>
      ))}

      {/* Verified Pan-India badge */}
      <g className={styles.floatBadge}>
        <rect x="210" y="24" width="76" height="24" rx="12" fill="#FFFFFF" stroke="#E68100" strokeOpacity="0.3" strokeWidth="1.2" />
        <circle cx="222" cy="36" r="4" fill="#E68100" />
        <text x="232" y="39" fill="#083A65" fontSize="8" fontWeight="700" fontFamily="sans-serif">PAN-INDIA</text>
      </g>
    </svg>
  );
}

/** Employer of Record — statutory compliance shield */
function EORVector() {
  return (
    <svg className={styles.vectorSvg} viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Employer of Record statutory compliance shield">
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

      {/* Statutory regulation badges across India */}
      {[
        { x: 30, y: 48, label: "EPFO", c: "#E68100" },
        { x: 232, y: 48, label: "ESIC", c: "#3FC4E8" },
        { x: 30, y: 142, label: "PT / LWF", c: "#1D7DC4" },
        { x: 232, y: 142, label: "LABOR ACT", c: "#083A65" },
      ].map((item, i) => (
        <g key={item.label} className={styles.floatNode} style={{ animationDelay: `${i * 0.35}s` }}>
          <rect x={item.x} y={item.y} width="38" height="22" rx="5" fill="#FFFFFF" stroke={item.c} strokeWidth="1.2" />
          <text x={item.x + 19} y={item.y + 14} textAnchor="middle" fill={item.c} fontSize="7" fontWeight="700" fontFamily="sans-serif">
            {item.label}
          </text>
          {/* Arrow to shield */}
          <line
            x1={item.x < 150 ? item.x + 38 : item.x}
            y1={item.y + 11}
            x2={item.x < 150 ? 90 : 210}
            y2={105}
            stroke={item.c}
            strokeOpacity="0.3"
            strokeWidth="1"
            strokeDasharray="3 3"
            className={styles.dashFlow}
          />
        </g>
      ))}
    </svg>
  );
}

/** Pan-India multi-state payroll flow */
function PanIndiaPayrollVector() {
  const complianceNodes = [
    { label: "EPF", sub: "12%", x: 32, y: 58, delay: 0 },
    { label: "ESIC", sub: "Statutory", x: 236, y: 58, delay: 0.4 },
    { label: "PT / LWF", sub: "State Tax", x: 32, y: 142, delay: 0.8 },
    { label: "TDS", sub: "Tax Deduct", x: 236, y: 142, delay: 1.2 },
    { label: "Gratuity", sub: "Benefit", x: 135, y: 26, delay: 1.6 },
  ];

  return (
    <svg className={styles.vectorSvg} viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pan-India multi-state statutory payroll flow">
      <defs>
        <linearGradient id="pay-hubGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E68100" />
          <stop offset="100%" stopColor="#FFB74A" />
        </linearGradient>
      </defs>
      {/* Central hub */}
      <circle cx="150" cy="110" r="36" fill="url(#pay-hubGrad)" />
      <text x="150" y="103" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="800" fontFamily="sans-serif">₹</text>
      <text x="150" y="117" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="700" fontFamily="sans-serif">PAYROLL</text>
      <text x="150" y="127" textAnchor="middle" fill="#FFFFFF" fontSize="8" opacity="0.85" fontFamily="sans-serif">HUB</text>

      {/* Pulse ring */}
      <circle cx="150" cy="110" r="46" stroke="#E68100" strokeOpacity="0.3" strokeWidth="1.5" fill="none" className={styles.pulseRing} style={{ transformOrigin: "150px 110px" }} />

      {/* Statutory nodes */}
      {complianceNodes.map((n) => (
        <g key={n.label}>
          <circle cx={n.x + 18} cy={n.y + 18} r="22" fill="#FFFFFF" stroke="#1D7DC4" strokeOpacity="0.25" strokeWidth="1.5" className={styles.glowDot} style={{ animationDelay: `${n.delay}s` }} />
          <text x={n.x + 18} y={n.y + 16} textAnchor="middle" fill="#083A65" fontSize="9" fontWeight="700" fontFamily="sans-serif">{n.label}</text>
          <text x={n.x + 18} y={n.y + 25} textAnchor="middle" fill="#1D7DC4" fontSize="6.5" fontWeight="600" fontFamily="sans-serif">{n.sub}</text>
          {/* Connector */}
          <line x1={n.x + 18} y1={n.y + 18} x2={150} y2={110} stroke="#1D7DC4" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="4 4" className={styles.dashFlow} style={{ animationDelay: `${n.delay}s` }} />
        </g>
      ))}

      {/* Bottom status bar */}
      <rect x="36" y="190" width="228" height="18" rx="9" fill="#083A65" opacity="0.07" />
      <rect x="36" y="190" width="190" height="18" rx="9" fill="#1D7DC4" opacity="0.2" className={styles.growBar} style={{ transformOrigin: "36px 199px" }} />
      <text x="150" y="202" textAnchor="middle" fill="#083A65" fontSize="8" fontWeight="600" fontFamily="sans-serif" opacity="0.65">
        Payroll Processed — Pan-India Across 28 States &amp; UTs
      </text>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   CONTENT
   ═══════════════════════════════════════════════════════════ */
const SERVICES = [
  {
    id: "piw-eor",
    tag: "Risk-Free Pan-India Expansion",
    title: "Employer of Record (EOR)",
    body: "Expanding into new states or metropolitan hubs without setting up separate legal branch entities is now seamless. As your Employer of Record, SBHR assumes statutory employer responsibility across India — handling state-specific employment contracts, Shops & Establishments registrations, statutory benefits (PF, ESI, Gratuity), and professional tax compliance — so you can deploy talent nationwide in days, not months.",
    features: ["Multi-State Entity Compliance", "Statutory Benefits (PF, ESI, Gratuity)", "State-Specific Contracts", "Pan-India Onboarding"],
    icon: (<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></>),
    vector: <EORVector />,
  },
  {
    id: "piw-payroll",
    tag: "Accurate & Timely",
    title: "Pan-India Payroll Management",
    body: "Managing payroll across multiple Indian states with varying Professional Tax slabs, Labour Welfare Fund rules, and statutory deductions is an operational bottleneck. We unify multi-state payroll into a single, automated and auditable pipeline — ensuring accurate, on-time salary disbursements across all 28 states and union territories.",
    features: ["Pan-India Multi-State Payroll", "PF, ESI, PT & TDS Remittance", "Labor Welfare Fund Compliance", "State-Wise Payroll Audits"],
    icon: (<><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></>),
    vector: <PanIndiaPayrollVector />,
  },
  {
    id: "piw-staffing",
    tag: "Nationwide Talent Deployment",
    title: "Multi-State Staffing & Deputation",
    body: "We source and mobilize talent across key industrial and metropolitan centers nationwide — managing inter-state mobility, compliant deputation arrangements, local labor law adherence, and project-based contract staff. Whether establishing tech hubs in Bengaluru or scaling industrial plants in Gujarat and West Bengal, we manage workforce operations end-to-end.",
    features: ["Interstate Talent Mobilization", "Contract & Deputation Staffing", "Multi-Location Sourcing", "State Labor Law Advisory"],
    icon: (<><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>),
    vector: <IndiaNetworkVector />,
  },
];

const PROCESS = [
  { id: "piw-step-1", title: "State Regulatory Assessment", desc: "We evaluate state-specific labor laws, Shops & Establishments norms, and statutory obligations for your required roles." },
  { id: "piw-step-2", title: "Deployment Model Strategy", desc: "We establish the ideal staffing structure — direct contract, EOR deputation, or permanent placement — tailored to your operational timeline." },
  { id: "piw-step-3", title: "Onboarding & Statutory Setup", desc: "We manage candidate verification, state-compliant contracts, PF/ESI/PT registration, and payroll enrollment swiftly." },
  { id: "piw-step-4", title: "Ongoing Multi-State Governance", desc: "We continuously track labor code notifications and state amendments across India to maintain total compliance." },
];

export default function PanIndiaWorkforcePage() {
  return (
    <div className={styles.servicePage}>
      <PageHero
        id="piw-header"
        eyebrow="Pan-India Workforce & Employment Solutions"
        title={
          <>
            Expand Across India.{" "}
            <span className="gradient-text">Hire Without Boundaries.</span>
          </>
        }
        lede="We enable organisations to scale seamlessly across India — managing state-level employment compliance, multi-state payroll administration, and nationwide workforce operations so you can focus on driving business results."
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

      <section className={`${styles.processSection} aurora-host`} id="piw-process">
        <Aurora variant="cool" />
        <div className="container">
          <Reveal className={styles.sectionHead} variant="up">
            <span className="eyebrow-pill">Our Nationwide Deployment Methodology</span>
            <h2 className={styles.sectionTitle}>
              From Client Brief to{" "}
              <span className="gradient-text">First Day Deployed</span>
            </h2>
            <p className={styles.sectionLede}>
              Our structured four-phase approach takes you from state-level requirement mapping
              to a fully compliant, operational workforce anywhere in India in record time.
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
        sectionId="piw-cta"
        eyebrow="Scale across India with confidence"
        title="Ready to Expand Pan-India Without Operational Hurdles?"
        desc="Our multi-state workforce specialists will structure your staffing model, manage statutory compliance across states, and ensure error-free on-time payroll delivery across India."
        primary={{ href: "/contact", label: "Plan Your Pan-India Expansion", id: "piw-cta-contact-btn" }}
        secondary={{ href: "/services", label: "Explore All Services", id: "piw-cta-services-btn" }}
      />
    </div>
  );
}
