import React from "react";
import PageHero from "../../../components/PageHero";
import Aurora from "../../../components/Aurora";
import Reveal from "../../../components/Reveal";
import CtaBanner from "../../../components/CtaBanner";
import styles from "../service-detail.module.css";

/* ═══════════════════════════════════════════════════════════
   SVG ILLUSTRATIONS
   ═══════════════════════════════════════════════════════════ */

/** Strategy compass */
function StrategyVector() {
  return (
    <svg className={styles.vectorSvg} viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Strategic advisory compass">
      <defs>
        <linearGradient id="ca-compassGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EAF4FD" />
          <stop offset="100%" stopColor="#F8FBFE" />
        </linearGradient>
        <linearGradient id="ca-needleGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E68100" />
          <stop offset="100%" stopColor="#FFB74A" />
        </linearGradient>
      </defs>
      {/* Compass body */}
      <circle cx="150" cy="110" r="92" fill="url(#ca-compassGrad)" />
      <circle cx="150" cy="110" r="92" stroke="#1D7DC4" strokeOpacity="0.18" strokeWidth="1.5" />
      <circle cx="150" cy="110" r="68" stroke="#1D7DC4" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="5 8" className={styles.dashFlow} />
      <circle cx="150" cy="110" r="44" stroke="#1D7DC4" strokeOpacity="0.1" strokeWidth="1" />
      {/* Cardinal markers */}
      <text x="150" y="30" textAnchor="middle" fill="#083A65" fontSize="11" fontWeight="700" fontFamily="sans-serif" opacity="0.5">N</text>
      <text x="150" y="200" textAnchor="middle" fill="#083A65" fontSize="11" fontWeight="700" fontFamily="sans-serif" opacity="0.5">S</text>
      <text x="68" y="115" textAnchor="middle" fill="#083A65" fontSize="11" fontWeight="700" fontFamily="sans-serif" opacity="0.5">W</text>
      <text x="232" y="115" textAnchor="middle" fill="#083A65" fontSize="11" fontWeight="700" fontFamily="sans-serif" opacity="0.5">E</text>
      {/* Rotating needle */}
      <g className={styles.orbitGroup} style={{ transformOrigin: "150px 110px", animation: "spinSlow 12s ease-in-out infinite alternate" }}>
        <polygon points="150,46 154,110 150,122 146,110" fill="url(#ca-needleGrad)" />
        <polygon points="150,174 154,110 150,98 146,110" fill="#083A65" opacity="0.3" />
      </g>
      {/* Centre pivot */}
      <circle cx="150" cy="110" r="8" fill="#FFFFFF" stroke="#E68100" strokeWidth="2.5" />
      {/* Advisory tags */}
      {[
        { x: 38, y: 54, label: "Strategy" },
        { x: 202, y: 54, label: "People" },
        { x: 38, y: 158, label: "Process" },
        { x: 202, y: 158, label: "Tech" },
      ].map((tag) => (
        <g key={tag.label} className={styles.floatNode} style={{ animationDelay: `${Math.random() * 2}s` }}>
          <rect x={tag.x} y={tag.y} width="60" height="22" rx="8" fill="#FFFFFF" stroke="#1D7DC4" strokeOpacity="0.2" strokeWidth="1.2" />
          <rect x={tag.x + 8} y={tag.y + 9} width="44" height="4" rx="2" fill="#083A65" opacity="0.2" />
        </g>
      ))}
    </svg>
  );
}

/** Digital transformation — legacy to modern stack */
function DigitalTransformVector() {
  return (
    <svg className={styles.vectorSvg} viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Digital transformation journey from legacy to modern">
      <defs>
        <linearGradient id="dt-legacyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#083A65" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#083A65" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="dt-modernGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1D7DC4" />
          <stop offset="100%" stopColor="#3FC4E8" />
        </linearGradient>
      </defs>
      {/* Legacy side */}
      <rect x="14" y="40" width="100" height="140" rx="12" fill="url(#dt-legacyGrad)" />
      {[58, 78, 98, 118, 138].map((y) => (
        <rect key={y} x="24" y={y} width="80" height="8" rx="4" fill="#083A65" opacity="0.18" />
      ))}
      <text x="64" y="170" textAnchor="middle" fill="#083A65" fontSize="9" opacity="0.45" fontFamily="sans-serif">Legacy</text>
      {/* Arrow of transformation */}
      <g className={styles.floatBadge}>
        <rect x="112" y="96" width="76" height="28" rx="10" fill="#E68100" />
        <path d="M124 110l14-6v4h20v-4l14 6-14 6v-4h-20v4z" fill="#FFFFFF" opacity="0.9" />
      </g>
      {/* Modern side */}
      <rect x="186" y="40" width="100" height="140" rx="12" fill="url(#dt-modernGrad)" opacity="0.85" />
      {/* Cloud icon */}
      <path d="M213 95 a16 16 0 0 1 32 0 a10 10 0 0 1-2 20h-28 a10 10 0 0 1-2-20z" fill="#FFFFFF" opacity="0.55" />
      {/* API nodes */}
      {[130, 145, 160].map((y, i) => (
        <rect key={y} x="198" y={y} width="76" height="8" rx="4" fill="#FFFFFF" opacity={0.25 + i * 0.15} className={styles.growBar} style={{ animationDelay: `${i * 0.2}s`, transformOrigin: "198px " + (y + 4) + "px" }} />
      ))}
      <text x="236" y="172" textAnchor="middle" fill="#FFFFFF" fontSize="9" opacity="0.7" fontFamily="sans-serif">Modern</text>
    </svg>
  );
}

/** HR strategy — people-centred org chart with radar */
function HRStrategyVector() {
  return (
    <svg className={styles.vectorSvg} viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="HR strategy and workforce planning diagram">
      <defs>
        <linearGradient id="hr-radarGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E68100" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#FFB74A" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      {/* Radar polygon background */}
      <polygon points="150,20 230,70 260,160 150,200 40,160 70,70" fill="url(#hr-radarGrad)" stroke="#E68100" strokeOpacity="0.2" strokeWidth="1.2" />
      <polygon points="150,50 210,85 230,155 150,180 70,155 90,85" fill="none" stroke="#1D7DC4" strokeOpacity="0.15" strokeWidth="1" />
      <polygon points="150,80 190,100 200,145 150,160 100,145 110,100" fill="none" stroke="#083A65" strokeOpacity="0.12" strokeWidth="1" />
      {/* Axes */}
      {[[150, 20], [230, 70], [260, 160], [150, 200], [40, 160], [70, 70]].map(([x, y], i) => (
        <line key={i} x1={150} y1={110} x2={x} y2={y} stroke="#083A65" strokeOpacity="0.1" strokeWidth="1" />
      ))}
      {/* Score polygon */}
      <polygon points="150,42 220,82 238,152 150,188 62,152 80,82" fill="#1D7DC4" fillOpacity="0.1" stroke="#1D7DC4" strokeOpacity="0.35" strokeWidth="1.5" className={styles.pulseRing} style={{ transformOrigin: "150px 110px" }} />
      {/* Dimension labels */}
      {[
        { x: 150, y: 14, label: "Culture" },
        { x: 256, y: 66, label: "Growth" },
        { x: 268, y: 164, label: "Rewards" },
        { x: 150, y: 208, label: "Inclusion" },
        { x: 28, y: 164, label: "Talent" },
        { x: 44, y: 66, label: "L&D" },
      ].map((d) => (
        <text key={d.label} x={d.x} y={d.y} textAnchor="middle" fill="#083A65" fontSize="8.5" fontWeight="600" fontFamily="sans-serif" opacity="0.55">{d.label}</text>
      ))}
      {/* Centre */}
      <circle cx="150" cy="110" r="6" fill="#E68100" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   CONTENT
   ═══════════════════════════════════════════════════════════ */
const SERVICES = [
  {
    id: "ca-strategy",
    tag: "Workforce Strategy",
    title: "HR Strategy & Workforce Planning",
    body: "We partner with executive teams to design people strategies that are tightly aligned with business objectives. From organisational design and workforce planning to succession planning and compensation benchmarking, we provide the strategic scaffolding for sustainable growth.",
    features: ["Organisational Design", "Workforce Planning", "Succession Planning", "Compensation Benchmarking"],
    icon: (<><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></>),
    vector: <HRStrategyVector />,
  },
  {
    id: "ca-digital",
    tag: "Future of Work",
    title: "Digital Transformation Advisory",
    body: "Navigating digital transformation requires both technology expertise and deep people understanding. We guide organisations through the people, process, and technology dimensions of transformation — ensuring adoption, minimising disruption, and maximising ROI on digital investments.",
    features: ["Digital Readiness Assessment", "Change Management", "Technology Adoption Programmes", "M&A People Integration"],
    icon: (<><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></>),
    vector: <DigitalTransformVector />,
  },
  {
    id: "ca-compliance",
    tag: "Risk & Compliance",
    title: "Compliance Advisory & Regulatory Guidance",
    body: "Employment law and regulatory compliance complexity is growing. Our advisors ensure your HR practices, employment contracts, and workforce policies are fully compliant with applicable laws — reducing your legal exposure while giving your people clarity and confidence.",
    features: ["Employment Law Advisory", "HR Policy Development", "Compliance Audits", "Risk Assessment & Mitigation"],
    icon: (<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></>),
    vector: <StrategyVector />,
  },
];

const PROCESS = [
  { id: "ca-step-1", title: "Discovery & Diagnosis", desc: "We conduct structured interviews, surveys, and data reviews to understand your organisation's current state and challenges." },
  { id: "ca-step-2", title: "Strategic Framework Design", desc: "We synthesise findings into a practical advisory framework with clear priorities, actions, and success metrics." },
  { id: "ca-step-3", title: "Implementation Support", desc: "Advisory is only valuable when it translates to action — we stay engaged through execution to guide decisions in real time." },
  { id: "ca-step-4", title: "Review & Iterate", desc: "We measure outcomes against the original objectives and refine the strategy as your organisation evolves." },
];

export default function ConsultingAdvisoryPage() {
  return (
    <div className={styles.servicePage}>
      <PageHero
        id="ca-header"
        eyebrow="Consulting & Advisory"
        title={
          <>
            Strategic Guidance for{" "}
            <span className="gradient-text">Confident Decisions</span>
          </>
        }
        lede="We provide strategic advisory services that help organisations navigate workforce challenges, operational complexities, and transformation initiatives — backed by veteran-led expertise and a commitment to practical, measurable outcomes."
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

      <section className={`${styles.processSection} aurora-host`} id="ca-process">
        <Aurora variant="cool" />
        <div className="container">
          <Reveal className={styles.sectionHead} variant="up">
            <span className="eyebrow-pill">Our Advisory Approach</span>
            <h2 className={styles.sectionTitle}>
              Practical Strategy, <span className="gradient-text">Real Results</span>
            </h2>
            <p className={styles.sectionLede}>
              We don't just write reports — we embed with your leadership and stay engaged
              until the strategy becomes a lived reality in your organisation.
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
        sectionId="ca-cta"
        eyebrow="Talk to our advisors"
        title="Navigate Complexity With Confidence"
        desc="Our veteran consultants will cut through the noise and provide the strategic clarity your organisation needs to move forward decisively."
        primary={{ href: "/contact", label: "Request Advisory Session", id: "ca-cta-contact-btn" }}
        secondary={{ href: "/services", label: "Explore All Services", id: "ca-cta-services-btn" }}
      />
    </div>
  );
}
