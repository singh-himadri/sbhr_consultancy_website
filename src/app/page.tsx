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
    suffix: "–48h",
    label: "Candidate Delivery SLA",
    desc: "Average turnaround to present pre-vetted talent profiles aligned with client briefs.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 7 12 12 15.5 14" />
      </>
    ),
  },
  {
    id: "stat-established",
    value: 2019,
    suffix: "",
    label: "Est. in Kolkata",
    desc: "Established in 2019, rapidly expanding into a trusted recruiter across Pan-India.",
    icon: (
      <>
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </>
    ),
  },
  {
    id: "stat-experience",
    value: 25,
    suffix: "+ Yrs",
    label: "Leadership Experience",
    desc: "Guided by Co-Founder HR leadership with over two decades of staffing mastery.",
    icon: (
      <>
        <path d="M12 2l2.9 6.2 6.6.9-4.8 4.7 1.2 6.7L12 17.3 6.1 20.5l1.2-6.7L2.5 9.1l6.6-.9z" />
      </>
    ),
  },
  {
    id: "stat-domains",
    value: 12,
    suffix: "+",
    label: "Industry Verticals",
    desc: "Cross-sector placement expertise spanning IT, Engineering, Manufacturing, Finance & Core sectors.",
    icon: (
      <>
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </>
    ),
  },
];


const DOMAINS = [
  "Executive Search",
  "Plant Operations",
  "Cloud Architecture",
  "Fintech Solutions",
  "Customer Experience",
  "Global Logistics",
  "Employer of Record",
  "Renewable Energy",
  "Process Optimisation",
  "EdTech Platforms",
  "React",
  "Civil Construction",
  "HR Strategy",
  "Clinical Trial Ops",
  "Permanent Recruitment",
  "E-Commerce Operations",
  "AWS",
  "Mechanical Systems",
  "Contact Centre Build",
  "Industrial Automation",
  "Global Payroll",
  "Risk & Compliance",
  "Operations Management",
  "Freight & Procurement",
  "DevOps",
  "Hotel Management",
  "Leadership Hiring",
  "Smart Grid Engineering",
  "Node.js",
  "Academic Leadership",
  "Workforce Planning",
  "Smart City Tech",
  "Azure",
  "Motion Graphics",
  "CX Consulting",
  "Biotech R&D",
  "Cross-Border Compliance",
  "Retail Merchandising",
  "Workflow Automation",
  "Embedded Systems",
  "Cybersecurity",
  "Manufacturing Tech",
  "Contract Staffing",
  "Investment Banking",
  "Organisational Design",
  "Warehouse Management",
  "Kubernetes",
  "Luxury Guest Relations",
  "Omnichannel Strategy",
  "CleanTech",
  "Work Visa & Immigration",
  "Curriculum Design",
  "Quality Assurance",
  "Commercial Real Estate",
  "Python",
  "Creative Direction",
  "RPO Solutions",
  "Pharmaceuticals",
  "Digital Transformation",
  "D2C Growth",
  "Machine Learning",
  "CAD/CAM Design",
  "BPO Management",
  "Production Planning",
  "Multi-Country Staffing",
  "Capital Markets",
  "Lean Six Sigma",
  "Inventory Optimisation",
  "Java",
  "F&B Operations",
  "Talent Advisory",
  "Solar & Wind Projects",
  "Compliance Advisory",
  "eLearning Strategy",
  "Data Engineering",
  "BIM Modeling",
  "Voice & Non-Voice",
  "Brand Strategy",
  "Employment Law",
  "Regulatory Affairs",
  "Business Analysis",
  "Category Management",
  "TypeScript",
  "Mechatronics",
  "Campus Recruitment",
  "Safety & HSE",
  "M&A People Integration",
  "Payment Gateways",
  "GCP",
  "Customs Compliance",
  "Customer Success",
  "Hospitality Tech",
  "Secondment Solutions",
  "Energy Storage",
  "Change Management",
  "Institutional Governance",
  "Site Reliability",
  "Transit Planning",
  "Diversity & Inclusion Hiring",
  "UI/UX Design",
  "Compensation & Benefits",
  "Medical Devices",
  "Terraform",
  "Store Operations",
  "CX Technology",
  "Automation Control",
  "Global Mobility",
  "Maintenance Management",
  "ERP Implementation",
  "Wealth Management",
  "L&D Strategy",
  "Last-Mile Delivery",
  "Event & Banquet Ops",
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

const SECTORS = [
  {
    title: "IT & ITES",
    desc: "Software engineering, cloud infrastructure, AI/ML, cybersecurity and managed IT and ITES services.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Engineering",
    desc: "Core mechanical, civil, electrical, structural and R&D engineering domain talent.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: "Industrial Production",
    desc: "Manufacturing leadership, plant operations, quality control and industrial tech.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4H2v16z" />
      </svg>
    ),
  },
  {
    title: "Financial Ecosystems",
    desc: "Fintech, banking, capital markets, risk compliance, payments and advisory.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Supply Chain",
    desc: "Logistics management, procurement, warehouse ops and supply chain alignment.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Hospitality Services",
    desc: "Hotel management, guest relations, corporate hospitality and luxury service ops.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    title: "Energy Infrastructure",
    desc: "Renewables, power generation, grid engineering and sustainable energy projects.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Education Systems",
    desc: "EdTech innovators, institutional leaders, academic administration and learning design.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    title: "Urban Infrastructure",
    desc: "Smart city engineering, commercial real estate, construction and public works.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <line x1="9" y1="6" x2="9" y2="6.01" />
        <line x1="15" y1="6" x2="15" y2="6.01" />
        <line x1="9" y1="10" x2="9" y2="10.01" />
        <line x1="15" y1="10" x2="15" y2="10.01" />
        <line x1="9" y1="14" x2="9" y2="14.01" />
        <line x1="15" y1="14" x2="15" y2="14.01" />
        <line x1="9" y1="18" x2="15" y2="18" />
      </svg>
    ),
  },
  {
    title: "Creative Media",
    desc: "Digital media, advertising design, content production, brand management & entertainment.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    title: "Life Sciences",
    desc: "Pharmaceuticals, biotech R&D, clinical trial management and healthcare administration.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10 2v7.31a2 2 0 0 1-.29.99L4.14 19.4A2 2 0 0 0 5.86 22h12.28a2 2 0 0 0 1.72-2.6l-5.57-9.1a2 2 0 0 1-.29-.99V2" />
        <line x1="8" y1="2" x2="16" y2="2" />
        <line x1="8.5" y1="14" x2="15.5" y2="14" />
      </svg>
    ),
  },
  {
    title: "Retail & E-Commerce",
    desc: "Omnichannel retail leadership, e-commerce ops, merchandising and customer growth.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
];


const SERVICES = [
  {
    id: "card-human-capital",
    linkId: "link-human-capital-details",
    href: "/services/human-capital",
    tag: "01",
    title: "Human Capital & Talent Solutions",
    desc: "Build agile, high-performing teams aligned with strategic business objectives through permanent hiring, executive search and talent advisory.",
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

      {/* ── Industry Sectors Grid ─────────────────────────── */}
      <section className={styles.sectorsSection} id="sectors-grid-section">
        <div className="container">
          <Reveal className={styles.sectionHead} variant="up">
            <span className="eyebrow-pill">Expanded Capability</span>
            <h2 className={styles.sectionTitle}>
              Industry Sectors & <span className="gradient-text">Domain Expertise</span>
            </h2>
            <p className={styles.sectionLede}>
              From our recruiting foundation, SBHR Consultancy has expanded across 12+ vital economic sectors, placing top-tier talent in specialized domain functions nationwide.
            </p>
          </Reveal>

          <div className={styles.sectorsGrid}>
            {SECTORS.map((sector, i) => (
              <Reveal key={sector.title} variant="up" delay={i * 65}>
                <TiltCard className={styles.sectorTilt} id={`sector-${sector.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                  <article className={`${styles.sectorCard} glow-border`}>
                    <span className={styles.sectorIcon}>{sector.icon}</span>
                    <h3 className={styles.sectorTitle}>{sector.title}</h3>
                    <p className={styles.sectorDesc}>{sector.desc}</p>
                  </article>
                </TiltCard>
              </Reveal>
            ))}
          </div>
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
              From talent acquisition and customer experience to process optimisation and <br/> pan india
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
