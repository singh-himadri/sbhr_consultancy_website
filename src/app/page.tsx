import React from "react";
import Link from "next/link";
import HeroSection from "../components/HeroSection";
import Aurora from "../components/Aurora";
import Reveal from "../components/Reveal";
import CountUp from "../components/CountUp";
import TiltCard from "../components/TiltCard";
import CtaBanner from "../components/CtaBanner";
import styles from "./page.module.css";

/* ─────────────────────────────────────────────────────────────
   Precision matching vector — a radar sweeping a candidate pool
   until it locks onto the one profile that fits.
   ───────────────────────────────────────────────────────────── */
function PrecisionVector() {
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
    <svg
      className={styles.precisionSvg}
      viewBox="0 0 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Radar scanning a talent pool and locking onto the matching candidate"
    >
      <defs>
        <linearGradient id="sweepGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1D7DC4" stopOpacity="0.42" />
          <stop offset="100%" stopColor="#1D7DC4" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="matchGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFB74A" />
          <stop offset="100%" stopColor="#E68100" />
        </linearGradient>
        <radialGradient id="fieldGrad">
          <stop offset="0%" stopColor="#EAF4FD" />
          <stop offset="100%" stopColor="#F8FBFE" />
        </radialGradient>
      </defs>

      {/* Field */}
      <circle cx="160" cy="160" r="146" fill="url(#fieldGrad)" />
      <circle cx="160" cy="160" r="146" stroke="#1D7DC4" strokeOpacity="0.16" strokeWidth="1.5" />

      {/* Range rings */}
      <circle cx="160" cy="160" r="104" stroke="#1D7DC4" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4 6" />
      <circle cx="160" cy="160" r="62" stroke="#1D7DC4" strokeOpacity="0.24" strokeWidth="1" strokeDasharray="4 6" />
      <line x1="14" y1="160" x2="306" y2="160" stroke="#1D7DC4" strokeOpacity="0.12" strokeWidth="1" />
      <line x1="160" y1="14" x2="160" y2="306" stroke="#1D7DC4" strokeOpacity="0.12" strokeWidth="1" />

      {/* Rotating sweep wedge */}
      <path
        className={styles.sweep}
        d="M160 160 L306 160 A146 146 0 0 0 262 57 Z"
        fill="url(#sweepGrad)"
      />

      {/* Candidate pool — dots blink softly out of phase */}
      {pool.map((dot, i) => (
        <circle
          key={i}
          className={styles.poolDot}
          cx={dot.cx}
          cy={dot.cy}
          r={dot.r}
          fill="#083A65"
          opacity="0.32"
          style={{ animationDelay: `${i * 0.42}s` }}
        />
      ))}

      {/* Locked match */}
      <circle className={styles.lockRing} cx="160" cy="160" r="34" stroke="#E68100" strokeWidth="1.5" fill="none" />
      <circle cx="160" cy="160" r="27" fill="url(#matchGrad)" />
      <circle cx="160" cy="150" r="8" fill="#FFFFFF" />
      <path
        d="M147 176c0-8 6-13 13-13s13 5 13 13"
        stroke="#FFFFFF"
        strokeWidth="4.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Verified badge */}
      <g className={styles.badgeFloat}>
        <circle cx="242" cy="112" r="19" fill="#FFFFFF" />
        <circle cx="242" cy="112" r="19" stroke="#1D7DC4" strokeOpacity="0.2" strokeWidth="1.5" />
        <path
          d="M234 112.5l5.5 5.5L250 107"
          stroke="#1D7DC4"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Corner reticle marks */}
      <path d="M40 74V44h30" stroke="#E68100" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" />
      <path d="M280 246v30h-30" stroke="#E68100" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   Content
   ───────────────────────────────────────────────────────────── */
const KEY_FACTORS = [
  {
    id: "stat-speed",
    value: 24,
    suffix: "h",
    label: "CV Turnaround",
    desc: "Average speed to present fully vetted candidate profiles.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 7 12 12 15.5 14" />
      </>
    ),
  },
  {
    id: "stat-expert",
    value: 100,
    suffix: "%",
    label: "Multi-Domain Focus",
    desc: "Tailored solutions across HR, CX, BPO, Consulting, and Global Workforce.",
    icon: (
      <>
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </>
    ),
  },
  {
    id: "stat-match",
    value: 98,
    suffix: "%",
    label: "Placement Match",
    desc: "Of candidates pass probation and align with core company values.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12.5l2.6 2.6L16 9.5" />
      </>
    ),
  },
  {
    id: "stat-experience",
    value: 10,
    suffix: "+ Yr",
    label: "Veteran Backbone",
    desc: "Founded on veteran HR leadership and industry-trusted methodologies.",
    icon: (
      <>
        <path d="M12 2l2.9 6.2 6.6.9-4.8 4.7 1.2 6.7L12 17.3 6.1 20.5l1.2-6.7L2.5 9.1l6.6-.9z" />
      </>
    ),
  },
];

const DOMAINS = [
  /* ── Human Capital & Talent ──────── */
  "Permanent Recruitment",
  "Executive Search",
  "Contract Staffing",
  "RPO Solutions",
  "Talent Advisory",
  "Leadership Hiring",
  "Campus Recruitment",
  "Diversity & Inclusion Hiring",
  /* ── IT & Technology ──────────────── */
  "React",
  "Node.js",
  "AWS",
  "Azure",
  "GCP",
  "Kubernetes",
  "DevOps",
  "Terraform",
  "Python",
  "Java",
  "TypeScript",
  "Cybersecurity",
  "Cloud Architecture",
  "Machine Learning",
  "Data Engineering",
  "Site Reliability",
  /* ── Contact Centre & CX ─────────── */
  "Customer Experience",
  "Contact Centre Build",
  "CX Consulting",
  "Omnichannel Strategy",
  "BPO Management",
  "Voice & Non-Voice",
  "Customer Success",
  "CX Technology",
  /* ── Business Process & Ops ──────── */
  "Process Optimisation",
  "Operations Management",
  "Workflow Automation",
  "Quality Assurance",
  "Lean Six Sigma",
  "Business Analysis",
  "Change Management",
  "ERP Implementation",
  /* ── Consulting & Advisory ────────── */
  "HR Strategy",
  "Workforce Planning",
  "Organisational Design",
  "Digital Transformation",
  "Compliance Advisory",
  "M&A People Integration",
  "Compensation & Benefits",
  "L&D Strategy",
  /* ── Global Workforce ─────────────── */
  "Employer of Record",
  "Global Payroll",
  "Cross-Border Compliance",
  "Work Visa & Immigration",
  "Multi-Country Staffing",
  "Employment Law",
  "Secondment Solutions",
  "Global Mobility",
];

const DIFFERENTIATORS = [
  {
    title: "Selective Sourcing Approach",
    desc: "We work with selective clients to ensure high quality and concentrated effort.",
  },
  {
    title: "Veteran-Guided Sourcing",
    desc: "Our methodologies are guided by recruitment & HR advisory veterans with years of expertise.",
  },
  {
    title: "Kolkata-based, Nationally Connected",
    desc: "Harnessing local market leadership to source top-tier talent nationwide.",
  },
];

const SERVICES = [
  {
    id: "card-human-capital",
    linkId: "link-human-capital-details",
    href: "/services/human-capital",
    tag: "01",
    title: "Human Capital & Talent Solutions",
    desc: "Build agile, high-performing teams aligned with strategic business objectives through permanent hiring, executive search, and talent advisory.",
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    id: "card-contact-centre",
    linkId: "link-contact-centre-details",
    href: "/services/contact-centre",
    tag: "02",
    title: "Contact Centre & Customer Experience",
    desc: "Design and manage high-performance customer engagement ecosystems that enhance brand perception and drive measurable business outcomes.",
    icon: (
      <>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.84 12 19.79 19.79 0 0 1 1.77 3.4 2 2 0 0 1 3.74 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        <path d="M14.05 2a9 9 0 0 1 8 7.94" />
        <path d="M14.05 6A5 5 0 0 1 18 10" />
      </>
    ),
  },
  {
    id: "card-business-process",
    linkId: "link-business-process-details",
    href: "/services/business-process",
    tag: "03",
    title: "Business Process & Operations",
    desc: "Streamline and optimise core operations to improve efficiency, accuracy, and scalability through expert process management and automation.",
    icon: (
      <>
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </>
    ),
  },
  {
    id: "card-consulting",
    linkId: "link-consulting-details",
    href: "/services/consulting-advisory",
    tag: "04",
    title: "Consulting & Advisory",
    desc: "Navigate workforce challenges, operational complexities, and transformation initiatives with strategic advisory services backed by seasoned industry veterans.",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </>
    ),
  },
  {
    id: "card-global-workforce",
    linkId: "link-global-workforce-details",
    href: "/services/global-workforce",
    tag: "05",
    title: "Global Workforce & Employment",
    desc: "Expand globally with ease — we manage employment compliance, payroll, and workforce administration across geographies so you can focus on growth.",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </>
    ),
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSection />

      {/* ── Key factors ──────────────────────────────────── */}
      <section className={`${styles.factorsSection} aurora-host`} id="stats-section">
        <Aurora variant="cool" />
        <div className="container">
          <Reveal className={styles.sectionHead} variant="up">
            <span className="eyebrow-pill">The numbers behind the match</span>
            <h2 className={styles.sectionTitle}>Why teams keep coming back</h2>
          </Reveal>

          <div className={styles.factorsGrid}>
            {KEY_FACTORS.map((factor, i) => (
              <Reveal key={factor.id} variant="up" delay={i * 110}>
                <TiltCard className={styles.factorTilt} id={factor.id}>
                  <article className={`${styles.factorCard} glow-border`}>
                    <span className={styles.factorIcon}>
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        {factor.icon}
                      </svg>
                    </span>
                    <span className={styles.factorValue}>
                      <CountUp value={factor.value} suffix={factor.suffix} />
                    </span>
                    <h3 className={styles.factorLabel}>{factor.label}</h3>
                    <p className={styles.factorDesc}>{factor.desc}</p>
                  </article>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Domain marquee ───────────────────────────────── */}
      <section className={styles.marqueeSection} aria-label="Technology domains we staff">
        <div className="container">
          <p className={styles.marqueeCaption}>Domains we source for</p>
        </div>
        <div className={styles.marquee}>
          <div className={styles.marqueeTrack}>
            {[...DOMAINS, ...DOMAINS].map((domain, i) => (
              <span key={i} className={styles.marqueeItem} aria-hidden={i >= DOMAINS.length}>
                <span className={styles.marqueeDot} />
                {domain}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Differentiators ──────────────────────────────── */}
      <section className="container" id="approach-section">
        <div className={styles.twoCol}>
          <div className={styles.leftCol}>
            <Reveal variant="left">
              <span className="eyebrow-pill">Why We Are Different</span>
            </Reveal>
            <Reveal variant="left" delay={90}>
              <h2 className={styles.sectionTitle}>
                We Make It Our Business To{" "}
                <span className="gradient-text">Know Your Business</span>
              </h2>
            </Reveal>
            <Reveal variant="left" delay={170}>
              <p className={styles.textBlock}>
                Unlike generic resume mills, SBHR Consultancy operates as the strategic
                recruiting arm of your team. We invest productive time in researching your
                field of work, your client profiles, and internal company culture to
                guarantee the right fit.
              </p>
            </Reveal>

            <ul className={styles.featureList}>
              {DIFFERENTIATORS.map((item, i) => (
                <Reveal
                  as="li"
                  key={item.title}
                  className={styles.featureItem}
                  variant="left"
                  delay={250 + i * 110}
                >
                  <span className={styles.featureIcon}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className={styles.featureText}>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal className={styles.vectorContainer} variant="scale" delay={150}>
            <div className={styles.vectorGlass}>
              <PrecisionVector />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────── */}
      <section className={`${styles.servicesSection} aurora-host`} id="services-summary-section">
        <Aurora variant="warm" />
        <div className="container">
          <Reveal className={styles.sectionHead} variant="up">
            <span className="eyebrow-pill">What We Deliver</span>
            <h2 className={styles.sectionTitle}>
              Comprehensive <span className="gradient-text">Business Solutions</span> Across Every Domain
            </h2>
            <p className={styles.sectionLede}>
              From talent acquisition and customer experience to process optimisation and global
              workforce management — we deliver end-to-end solutions that power organisational growth.
            </p>
          </Reveal>

          <div className={styles.servicesGrid}>
            {SERVICES.map((service, i) => (
              <Reveal key={service.id} variant="up" delay={i * 130}>
                <TiltCard className={styles.serviceTilt} id={service.id}>
                  <article className={`${styles.serviceCard} glow-border`}>
                    <span className={styles.serviceTag}>{service.tag}</span>
                    <span className={styles.serviceIconWrapper}>
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
                    <h3 className={styles.serviceCardTitle}>{service.title}</h3>
                    <p className={styles.serviceCardDesc}>{service.desc}</p>
                    <Link href={service.href} className={styles.serviceCardLink} id={service.linkId}>
                      Read details
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  </article>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA ──────────────────────────────────── */}
      <CtaBanner
        sectionId="cta-banner-section"
        eyebrow="Let's build your team"
        title="Ready to Accelerate Your Organisation's Talent Scaling?"
        desc="Join hands with SBHR Consultancy and let our recruiters source, verify, and align the elite talent you need."
        primary={{ href: "/contact", label: "Request Consultancy", id: "cta-banner-btn-hire" }}
        secondary={{ href: "/jobs", label: "Browse Open Jobs", id: "cta-banner-btn-jobs" }}
      />
    </div>
  );
}
