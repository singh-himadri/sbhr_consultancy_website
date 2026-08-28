import React from "react";
import PageHero from "../../components/PageHero";
import Aurora from "../../components/Aurora";
import Reveal from "../../components/Reveal";
import CtaBanner from "../../components/CtaBanner";
import styles from "./services.module.css";

/* ═══════════════════════════════════════════════════════════
   VECTOR ILLUSTRATIONS
   ═══════════════════════════════════════════════════════════ */

/** Permanent hire — a vetted profile ringed by orbiting assurance badges. */
function PermanentVector() {
  const tenure = [26, 40, 54, 68, 82];

  return (
    <svg
      className={styles.vectorSvg}
      viewBox="0 0 300 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="A vetted candidate profile encircled by verification badges with growing tenure bars"
    >
      <defs>
        <linearGradient id="permCard" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#EAF4FD" />
        </linearGradient>
        <linearGradient id="permBar" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#1D7DC4" />
          <stop offset="100%" stopColor="#3FC4E8" />
        </linearGradient>
      </defs>

      {/* Orbiting assurance badges */}
      <g className={styles.orbitGroup}>
        <circle cx="150" cy="110" r="88" stroke="#1D7DC4" strokeOpacity="0.18" strokeWidth="1.5" strokeDasharray="5 8" />
        <circle cx="150" cy="22" r="9" fill="#E68100" />
        <circle cx="238" cy="110" r="7" fill="#1D7DC4" />
        <circle cx="150" cy="198" r="7" fill="#083A65" />
        <circle cx="62" cy="110" r="8" fill="#3FC4E8" />
      </g>

      {/* Profile card */}
      <rect x="82" y="46" width="136" height="128" rx="16" fill="url(#permCard)" stroke="#1D7DC4" strokeOpacity="0.22" strokeWidth="1.5" />

      {/* Avatar */}
      <circle cx="150" cy="82" r="19" fill="#083A65" />
      <circle cx="150" cy="76" r="7" fill="#FFFFFF" />
      <path d="M139 94c0-6 5-10 11-10s11 4 11 10" fill="#FFFFFF" />

      {/* Detail lines */}
      <rect x="110" y="110" width="80" height="6" rx="3" fill="#083A65" opacity="0.2" />
      <rect x="122" y="122" width="56" height="5" rx="2.5" fill="#083A65" opacity="0.12" />

      {/* Tenure bars grow on load */}
      {tenure.map((x, i) => (
        <rect
          key={x}
          className={styles.growBar}
          x={x + 76}
          y="136"
          width="8"
          height="24"
          rx="3"
          fill="url(#permBar)"
          style={{ animationDelay: `${i * 0.16}s`, transformOrigin: `${x + 80}px 160px` }}
        />
      ))}

      {/* Verified seal */}
      <g className={styles.sealFloat}>
        <circle cx="214" cy="60" r="17" fill="#E68100" />
        <path d="M206 60.5l5 5 10-10" stroke="#FFFFFF" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
    </svg>
  );
}

/** Contract staffing — cards moving across a sprint board. */
function ContractVector() {
  return (
    <svg
      className={styles.vectorSvg}
      viewBox="0 0 300 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="A sprint board with task cards flowing between columns and a filling progress bar"
    >
      <defs>
        <linearGradient id="sprintFill" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#E68100" />
          <stop offset="100%" stopColor="#FFB74A" />
        </linearGradient>
      </defs>

      {/* Board */}
      <rect x="18" y="20" width="264" height="150" rx="16" fill="#F8FBFE" stroke="#1D7DC4" strokeOpacity="0.18" strokeWidth="1.5" />

      {/* Columns */}
      {[34, 118, 202].map((x, i) => (
        <g key={x}>
          <rect x={x} y="36" width="64" height="118" rx="10" fill="#FFFFFF" stroke="#1D7DC4" strokeOpacity="0.14" strokeWidth="1.2" />
          <rect x={x + 12} y="46" width={i === 1 ? 32 : 40} height="5" rx="2.5" fill="#083A65" opacity="0.22" />
        </g>
      ))}

      {/* Static cards */}
      <rect x="42" y="62" width="48" height="24" rx="7" fill="#083A65" opacity="0.12" />
      <rect x="42" y="92" width="48" height="24" rx="7" fill="#083A65" opacity="0.1" />
      <rect x="210" y="62" width="48" height="24" rx="7" fill="#1D7DC4" opacity="0.22" />

      {/* Cards travelling between columns */}
      <g className={styles.sprintCardA}>
        <rect x="126" y="62" width="48" height="24" rx="7" fill="#E68100" />
        <rect x="134" y="70" width="26" height="4" rx="2" fill="#FFFFFF" opacity="0.85" />
        <rect x="134" y="78" width="16" height="4" rx="2" fill="#FFFFFF" opacity="0.55" />
      </g>

      <g className={styles.sprintCardB}>
        <rect x="126" y="94" width="48" height="24" rx="7" fill="#1D7DC4" />
        <rect x="134" y="102" width="24" height="4" rx="2" fill="#FFFFFF" opacity="0.85" />
        <rect x="134" y="110" width="14" height="4" rx="2" fill="#FFFFFF" opacity="0.55" />
      </g>

      {/* Sprint progress */}
      <rect x="34" y="186" width="232" height="10" rx="5" fill="#083A65" opacity="0.1" />
      <rect className={styles.sprintProgress} x="34" y="186" width="232" height="10" rx="5" fill="url(#sprintFill)" />
      <circle className={styles.sprintDot} cx="34" cy="191" r="7" fill="#FFFFFF" stroke="#E68100" strokeWidth="3" />
    </svg>
  );
}

/** Workforce solutions — a funnel filtering a candidate stream. */
function WorkforceVector() {
  const stream = [
    { cx: 108, delay: 0 },
    { cx: 132, delay: 0.55 },
    { cx: 156, delay: 1.1 },
    { cx: 180, delay: 1.65 },
    { cx: 144, delay: 2.2 },
  ];

  return (
    <svg
      className={styles.vectorSvg}
      viewBox="0 0 300 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="A recruitment funnel filtering a stream of candidates down to a verified hire"
    >
      <defs>
        <linearGradient id="funnelGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1D7DC4" stopOpacity="0.24" />
          <stop offset="100%" stopColor="#083A65" stopOpacity="0.42" />
        </linearGradient>
      </defs>

      {/* Intake rail */}
      <rect x="60" y="24" width="180" height="10" rx="5" fill="#083A65" opacity="0.12" />

      {/* Candidate stream falling into the funnel */}
      {stream.map((dot, i) => (
        <circle
          key={i}
          className={styles.streamDot}
          cx={dot.cx}
          cy="40"
          r="6"
          fill={i % 2 === 0 ? "#1D7DC4" : "#E68100"}
          style={{ animationDelay: `${dot.delay}s` }}
        />
      ))}

      {/* Funnel body */}
      <path d="M66 52h168l-56 66v46l-56 22v-68z" fill="url(#funnelGrad)" stroke="#083A65" strokeOpacity="0.35" strokeWidth="1.8" strokeLinejoin="round" />

      {/* Stage separators */}
      <line className={styles.stageLine} x1="80" y1="74" x2="220" y2="74" stroke="#FFFFFF" strokeOpacity="0.7" strokeWidth="2" strokeDasharray="6 6" />
      <line className={styles.stageLine} x1="100" y1="98" x2="200" y2="98" stroke="#FFFFFF" strokeOpacity="0.55" strokeWidth="2" strokeDasharray="6 6" style={{ animationDelay: "0.5s" }} />

      {/* Stage labels as abstract chips */}
      <rect x="16" y="66" width="38" height="16" rx="8" fill="#FFFFFF" stroke="#1D7DC4" strokeOpacity="0.24" strokeWidth="1.2" />
      <rect x="24" y="72" width="22" height="4" rx="2" fill="#1D7DC4" opacity="0.55" />
      <rect x="246" y="90" width="38" height="16" rx="8" fill="#FFFFFF" stroke="#E68100" strokeOpacity="0.3" strokeWidth="1.2" />
      <rect x="254" y="96" width="22" height="4" rx="2" fill="#E68100" opacity="0.6" />

      {/* Verified output */}
      <g className={styles.sealFloat}>
        <circle cx="150" cy="188" r="22" fill="#E68100" />
        <path d="M139 188.5l7 7 14-14" stroke="#FFFFFF" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
      <circle className={styles.outputRing} cx="150" cy="188" r="28" stroke="#E68100" strokeOpacity="0.5" strokeWidth="1.5" fill="none" />
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
    body: "Finding leaders and permanent resources is a crucial component of any long-term scaling strategy. We align your organization's technical requirements and cultural vision with high-impact candidates. We ensure that candidates are vetted, interested, and qualified to drive growth.",
    features: [
      "Role Alignment Audits",
      "Active Passive Sourcing",
      "Technical Pre-Screening",
      "Value-Fit Assessments",
    ],
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    vector: <PermanentVector />,
  },
  {
    id: "contract",
    tag: "Agile Scale",
    title: "Contract Staffing",
    body: "In a rapidly changing business environment, temporary and contract resources keep your projects on track without increasing fixed overhead. We supply top-notch IT developers, DevOps engineers, and UI/UX experts to meet temporary sprints, peak demands, or niche project scopes.",
    features: [
      "Sprint & Project Backfill",
      "Contract-to-Hire Models",
      "Agile Technical Vetting",
      "Compliance Management",
    ],
    icon: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </>
    ),
    vector: <ContractVector />,
  },
  {
    id: "workforce",
    tag: "End-to-End Control",
    title: "Workforce & Recruitment Solutions",
    body: "For organizations with scaling requirements, we provide comprehensive end-to-end recruitment process management. We manage your hiring lifecycle—from job description drafting and candidate portal screening to initial screening rounds and onboarding.",
    features: [
      "Vendor Management",
      "End-to-End RPO Projects",
      "Niche Executive Search",
      "Pre-Onboarding Auditing",
    ],
    icon: (
      <>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </>
    ),
    vector: <WorkforceVector />,
  },
];

const PROCESS = [
  {
    id: "step-1",
    title: "Briefing & Alignment",
    desc: "We connect to detail technical domains, budgets, culture, and project roadmaps.",
  },
  {
    id: "step-2",
    title: "Selective Sourcing",
    desc: "Our recruiters source passive and active talents from our deeply connected IT networks.",
  },
  {
    id: "step-3",
    title: "Pre-Vetting",
    desc: "Candidates undergo technical tests and behavioral value-fit alignment reviews.",
  },
  {
    id: "step-4",
    title: "Coordination",
    desc: "We coordinate interviews and act as an extension of your talent management arm.",
  },
  {
    id: "step-5",
    title: "Onboarding",
    desc: "We audit backgrounds, support negotiation, and help onboard candidates successfully.",
  },
];

export default function Services() {
  return (
    <div className={styles.servicesPage}>
      <PageHero
        id="services-header"
        eyebrow="Our Competencies"
        title={
          <>
            Tailored IT <span className="gradient-text">Staffing & Recruitment</span> Services
          </>
        }
        lede="At SBHR Consultancy, we align talent with opportunity. We leverage our deep IT domain knowledge to offer agile, high-impact workforce models."
      />

      {/* ── Service details ──────────────────────────────── */}
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
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
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
                {service.features.map((feature, i) => (
                  <Reveal
                    as="li"
                    key={feature}
                    className={styles.featureItem}
                    variant="up"
                    delay={250 + i * 90}
                  >
                    <span className={styles.featureIcon}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {feature}
                  </Reveal>
                ))}
              </ul>
            </div>

            <Reveal
              className={styles.vectorContainer}
              variant={index % 2 === 1 ? "left" : "right"}
              delay={140}
            >
              <div className={styles.vectorGlass}>{service.vector}</div>
            </Reveal>
          </div>
        </section>
      ))}

      {/* ── Lifecycle ────────────────────────────────────── */}
      <section className={`${styles.processSection} aurora-host`} id="process">
        <Aurora variant="cool" />
        <div className="container">
          <Reveal className={styles.sectionHead} variant="up">
            <span className="eyebrow-pill">Our Methodology</span>
            <h2 className={styles.sectionTitle}>
              The SBHR <span className="gradient-text">Recruitment Lifecycle</span>
            </h2>
            <p className={styles.sectionLede}>
              We implement a targeted, veteran-guided timeline to screen candidate credentials
              and maintain professional representation.
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
        sectionId="services-cta"
        eyebrow="Domain-led staffing"
        title="Experience Staffing Powered by Domain Expertise"
        desc="Let our veterans source the specific engineering competencies your project needs."
        primary={{ href: "/contact", label: "Get in Touch", id: "services-cta-contact-btn" }}
        secondary={{ href: "/jobs", label: "Browse Jobs", id: "services-cta-jobs-btn" }}
      />
    </div>
  );
}
