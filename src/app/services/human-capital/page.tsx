import React from "react";
import PageHero from "../../../components/PageHero";
import Aurora from "../../../components/Aurora";
import Reveal from "../../../components/Reveal";
import CtaBanner from "../../../components/CtaBanner";
import styles from "../service-detail.module.css";

/* ═══════════════════════════════════════════════════════════
   SVG ILLUSTRATIONS
   ═══════════════════════════════════════════════════════════ */

/** Talent radar — recruiter scanning a pool, locking the perfect match */
function TalentRadarVector() {
  const pool = [
    { cx: 92, cy: 96, r: 5 },
    { cx: 236, cy: 84, r: 4 },
    { cx: 60, cy: 190, r: 4 },
    { cx: 262, cy: 206, r: 5 },
    { cx: 118, cy: 252, r: 4 },
    { cx: 214, cy: 258, r: 4 },
    { cx: 168, cy: 62, r: 3.5 },
    { cx: 74, cy: 138, r: 3.5 },
  ];
  return (
    <svg className={styles.vectorSvg} viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Talent radar locking onto the best candidate">
      <defs>
        <linearGradient id="hc-sweepGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1D7DC4" stopOpacity="0.42" />
          <stop offset="100%" stopColor="#1D7DC4" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="hc-matchGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFB74A" />
          <stop offset="100%" stopColor="#E68100" />
        </linearGradient>
        <radialGradient id="hc-fieldGrad">
          <stop offset="0%" stopColor="#EAF4FD" />
          <stop offset="100%" stopColor="#F8FBFE" />
        </radialGradient>
      </defs>
      <circle cx="160" cy="160" r="146" fill="url(#hc-fieldGrad)" />
      <circle cx="160" cy="160" r="146" stroke="#1D7DC4" strokeOpacity="0.16" strokeWidth="1.5" />
      <circle cx="160" cy="160" r="104" stroke="#1D7DC4" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4 6" />
      <circle cx="160" cy="160" r="62" stroke="#1D7DC4" strokeOpacity="0.24" strokeWidth="1" strokeDasharray="4 6" />
      <line x1="14" y1="160" x2="306" y2="160" stroke="#1D7DC4" strokeOpacity="0.12" strokeWidth="1" />
      <line x1="160" y1="14" x2="160" y2="306" stroke="#1D7DC4" strokeOpacity="0.12" strokeWidth="1" />
      <path className={styles.orbitGroup} style={{ transformOrigin: "160px 160px" }} d="M160 160 L306 160 A146 146 0 0 0 262 57 Z" fill="url(#hc-sweepGrad)" />
      {pool.map((dot, i) => (
        <circle key={i} className={styles.glowDot} cx={dot.cx} cy={dot.cy} r={dot.r} fill="#083A65" opacity="0.32" style={{ animationDelay: `${i * 0.42}s` }} />
      ))}
      <circle cx="160" cy="160" r="34" stroke="#E68100" strokeWidth="1.5" fill="none" className={styles.pulseRing} style={{ transformOrigin: "160px 160px" }} />
      <circle cx="160" cy="160" r="27" fill="url(#hc-matchGrad)" />
      <circle cx="160" cy="150" r="8" fill="#FFFFFF" />
      <path d="M147 176c0-8 6-13 13-13s13 5 13 13" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" fill="none" />
      <g className={styles.floatBadge}>
        <circle cx="242" cy="112" r="19" fill="#FFFFFF" />
        <circle cx="242" cy="112" r="19" stroke="#1D7DC4" strokeOpacity="0.2" strokeWidth="1.5" />
        <path d="M234 112.5l5.5 5.5L250 107" stroke="#1D7DC4" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <path d="M40 74V44h30" stroke="#E68100" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" />
      <path d="M280 246v30h-30" stroke="#E68100" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/** Executive search — org chart with a highlighted top node */
function ExecutiveSearchVector() {
  return (
    <svg className={styles.vectorSvg} viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Executive search org chart">
      <defs>
        <linearGradient id="hc-topGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E68100" />
          <stop offset="100%" stopColor="#FFB74A" />
        </linearGradient>
        <linearGradient id="hc-nodeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#EAF4FD" />
        </linearGradient>
      </defs>
      {/* Connector lines */}
      <line x1="150" y1="70" x2="70" y2="130" stroke="#1D7DC4" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="5 5" className={styles.dashFlow} />
      <line x1="150" y1="70" x2="150" y2="130" stroke="#1D7DC4" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="5 5" className={styles.dashFlow} />
      <line x1="150" y1="70" x2="230" y2="130" stroke="#1D7DC4" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="5 5" className={styles.dashFlow} />
      {/* Top node — highlighted executive */}
      <rect x="112" y="22" width="76" height="48" rx="14" fill="url(#hc-topGrad)" />
      <circle cx="150" cy="38" r="8" fill="#FFFFFF" />
      <path d="M140 54c0-5.5 4.5-9 10-9s10 3.5 10 9" fill="#FFFFFF" />
      {/* Star badge */}
      <g className={styles.floatBadge}>
        <circle cx="190" cy="26" r="14" fill="#FFFFFF" />
        <path d="M190 17l2.2 4.5 4.9.7-3.5 3.4.8 4.9-4.4-2.3-4.4 2.3.8-4.9-3.5-3.4 4.9-.7z" fill="#E68100" />
      </g>
      {/* Secondary nodes */}
      {[
        { x: 40, y: 130, delay: 0 },
        { x: 118, y: 130, delay: 0.3 },
        { x: 196, y: 130, delay: 0.6 },
      ].map((n, i) => (
        <g key={i} className={styles.floatNode} style={{ animationDelay: `${n.delay}s` }}>
          <rect x={n.x} y={n.y} width="60" height="38" rx="10" fill="url(#hc-nodeGrad)" stroke="#1D7DC4" strokeOpacity="0.2" strokeWidth="1.2" />
          <circle cx={n.x + 30} cy={n.y + 12} r="6" fill="#083A65" opacity="0.3" />
          <rect x={n.x + 10} y={n.y + 22} width="40" height="4" rx="2" fill="#083A65" opacity="0.15" />
        </g>
      ))}
      {/* Tenure bar strip */}
      {[26, 50, 74, 98, 122].map((x, i) => (
        <rect key={x} className={styles.growBar} x={x + 14} y="186" width="10" height="22" rx="3" fill="#1D7DC4" opacity={0.25 + i * 0.12} style={{ animationDelay: `${i * 0.15}s`, transformOrigin: `${x + 19}px 208px` }} />
      ))}
    </svg>
  );
}

/** RPO funnel — candidate stream → filtered output */
function RPOFunnelVector() {
  const stream = [
    { cx: 108, delay: 0 }, { cx: 132, delay: 0.55 }, { cx: 156, delay: 1.1 },
    { cx: 180, delay: 1.65 }, { cx: 144, delay: 2.2 },
  ];
  return (
    <svg className={styles.vectorSvg} viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="RPO funnel filtering candidates">
      <defs>
        <linearGradient id="hc-funnelGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1D7DC4" stopOpacity="0.24" />
          <stop offset="100%" stopColor="#083A65" stopOpacity="0.42" />
        </linearGradient>
      </defs>
      <rect x="60" y="24" width="180" height="10" rx="5" fill="#083A65" opacity="0.12" />
      {stream.map((dot, i) => (
        <circle key={i} className={styles.streamDot} cx={dot.cx} cy="40" r="6" fill={i % 2 === 0 ? "#1D7DC4" : "#E68100"} style={{ animationDelay: `${dot.delay}s` }} />
      ))}
      <path d="M66 52h168l-56 66v46l-56 22v-68z" fill="url(#hc-funnelGrad)" stroke="#083A65" strokeOpacity="0.35" strokeWidth="1.8" strokeLinejoin="round" />
      <line x1="80" y1="74" x2="220" y2="74" stroke="#FFFFFF" strokeOpacity="0.7" strokeWidth="2" className={styles.dashFlow} />
      <line x1="100" y1="98" x2="200" y2="98" stroke="#FFFFFF" strokeOpacity="0.55" strokeWidth="2" className={styles.dashFlow} style={{ animationDelay: "0.5s" }} />
      <rect x="16" y="66" width="38" height="16" rx="8" fill="#FFFFFF" stroke="#1D7DC4" strokeOpacity="0.24" strokeWidth="1.2" />
      <rect x="24" y="72" width="22" height="4" rx="2" fill="#1D7DC4" opacity="0.55" />
      <rect x="246" y="90" width="38" height="16" rx="8" fill="#FFFFFF" stroke="#E68100" strokeOpacity="0.3" strokeWidth="1.2" />
      <rect x="254" y="96" width="22" height="4" rx="2" fill="#E68100" opacity="0.6" />
      <g className={styles.floatBadge}>
        <circle cx="150" cy="188" r="22" fill="#E68100" />
        <path d="M139 188.5l7 7 14-14" stroke="#FFFFFF" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
      <circle cx="150" cy="188" r="28" stroke="#E68100" strokeOpacity="0.5" strokeWidth="1.5" fill="none" className={styles.pulseRing} style={{ transformOrigin: "150px 188px" }} />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   CONTENT
   ═══════════════════════════════════════════════════════════ */
const SERVICES = [
  {
    id: "permanent",
    tag: "Long-Term Leadership",
    title: "Permanent Recruitment",
    body: "Finding the right permanent hires is a crucial component of any long-term scaling strategy. We align your technical requirements and cultural vision with high-impact candidates — vetted, engaged, and ready to drive growth from day one.",
    features: ["Role Alignment Audits", "Active & Passive Sourcing", "Technical Pre-Screening", "Value-Fit Assessments"],
    icon: (<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>),
    vector: <TalentRadarVector />,
  },
  {
    id: "executive-search",
    tag: "C-Suite & Director Level",
    title: "Executive Search",
    body: "Identifying senior leaders who shape strategy requires a fundamentally different approach. Our executive search practice combines discreet headhunting, rigorous competency mapping, and confidential market intelligence to present only the most qualified leadership candidates.",
    features: ["Confidential Headhunting", "Competency Mapping", "Leadership Assessments", "Onboarding Support"],
    icon: (<><path d="M12 2l2.9 6.2 6.6.9-4.8 4.7 1.2 6.7L12 17.3 6.1 20.5l1.2-6.7L2.5 9.1l6.6-.9z" /></>),
    vector: <ExecutiveSearchVector />,
  },
  {
    id: "contract-rpo",
    tag: "Agile & End-to-End",
    title: "Contract Staffing & RPO",
    body: "Whether you need agile contract resources for a sprint cycle, or a fully managed Recruitment Process Outsourcing solution to scale your entire hiring function, we deliver both with precision and speed.",
    features: ["Contract & Temp Staffing", "Contract-to-Hire Models", "End-to-End RPO", "Vendor Management Systems"],
    icon: (<><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></>),
    vector: <RPOFunnelVector />,
  },
];

const PROCESS = [
  { id: "hc-step-1", title: "Briefing & Role Scoping", desc: "We deep-dive into your technical requirements, team culture, and growth roadmap to define the ideal candidate profile." },
  { id: "hc-step-2", title: "Talent Sourcing", desc: "Multi-channel sourcing across active and passive talent pools using our extensive professional network." },
  { id: "hc-step-3", title: "Pre-Vetting & Assessment", desc: "Technical screens, behavioural interviews, and value-fit assessments ensure only the best candidates reach you." },
  { id: "hc-step-4", title: "Interview Coordination", desc: "We manage the full interview lifecycle, acting as an extension of your HR team to maintain a smooth candidate experience." },
];

export default function HumanCapitalPage() {
  return (
    <div className={styles.servicePage}>
      <PageHero
        id="hc-header"
        eyebrow="Human Capital & Talent Solutions"
        title={
          <>
            Build Teams That{" "}
            <span className="gradient-text">Drive Your Business Forward</span>
          </>
        }
        lede="We enable organisations to build agile, high-performing teams aligned with strategic business objectives — through permanent hiring, executive search, contract staffing, and end-to-end RPO."
      />

      {/* ── Service detail blocks ──────────────────────────── */}
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
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {service.icon}
                    </svg>
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
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
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

      {/* ── Lifecycle ─────────────────────────────────────── */}
      <section className={`${styles.processSection} aurora-host`} id="hc-process">
        <Aurora variant="cool" />
        <div className="container">
          <Reveal className={styles.sectionHead} variant="up">
            <span className="eyebrow-pill">Our Methodology</span>
            <h2 className={styles.sectionTitle}>
              The SBHR <span className="gradient-text">Talent Acquisition Lifecycle</span>
            </h2>
            <p className={styles.sectionLede}>
              A structured, veteran-guided process that delivers precision-matched candidates
              with speed and transparency at every stage.
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
        sectionId="hc-cta"
        eyebrow="Let's find your next hire"
        title="Ready to Build Your High-Performing Team?"
        desc="Connect with our talent specialists and let us source, vet, and deliver the people who will define your organisation's future."
        primary={{ href: "/contact", label: "Request Consultation", id: "hc-cta-contact-btn" }}
        secondary={{ href: "/jobs", label: "Browse Open Jobs", id: "hc-cta-jobs-btn" }}
      />
    </div>
  );
}
