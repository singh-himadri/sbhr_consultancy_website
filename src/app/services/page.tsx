import React from "react";
import Link from "next/link";
import PageHero from "../../components/PageHero";
import Aurora from "../../components/Aurora";
import Reveal from "../../components/Reveal";
import TiltCard from "../../components/TiltCard";
import CtaBanner from "../../components/CtaBanner";
import styles from "./services.module.css";

/* ═══════════════════════════════════════════════════════════
   SERVICE PILLARS
   ═══════════════════════════════════════════════════════════ */
const PILLARS = [
  {
    id: "pillar-human-capital",
    linkId: "link-human-capital",
    tag: "01",
    href: "/services/human-capital",
    title: "Human Capital & Talent Solutions",
    desc: "We enable organisations to build agile, high-performing teams that are aligned with strategic business objectives — from permanent hiring and executive search to contract staffing, training, and resume writing.",
    highlights: ["Permanent Recruitment", "Contract Staffing", "Headhunting & Executive Search", "Resume Writing & Training"],
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
    id: "pillar-contact-centre",
    linkId: "link-contact-centre",
    tag: "02",
    href: "/services/contact-centre",
    title: "Contact Centre & Customer Experience Solutions",
    desc: "We design and manage high-performance customer engagement ecosystems that enhance brand perception and drive measurable business outcomes across every customer touchpoint.",
    highlights: ["Contact Centre Build & Setup", "CX Consulting", "BPO Staffing", "Omnichannel Strategy"],
    icon: (
      <>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.84 12 19.79 19.79 0 0 1 1.77 3.4 2 2 0 0 1 3.74 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        <path d="M14.05 2a9 9 0 0 1 8 7.94" />
        <path d="M14.05 6A5 5 0 0 1 18 10" />
      </>
    ),
  },
  {
    id: "pillar-business-process",
    linkId: "link-business-process",
    tag: "03",
    href: "/services/business-process",
    title: "Business Process & Operations Management",
    desc: "We streamline and optimise business processes to improve efficiency, accuracy, and scalability across core operations — from workflow automation to quality management systems.",
    highlights: ["Process Optimisation", "Operations Management", "Workflow Automation", "Lean Six Sigma"],
    icon: (
      <>
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </>
    ),
  },
  {
    id: "pillar-consulting",
    linkId: "link-consulting",
    tag: "04",
    href: "/services/consulting-advisory",
    title: "Consulting & Advisory",
    desc: "We provide strategic advisory services that help organisations navigate workforce challenges, operational complexities, and transformation initiatives with clarity and confidence.",
    highlights: ["HR Strategy & Design", "Digital Transformation", "Compliance Advisory", "Workforce Planning"],
    icon: (
      <>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </>
    ),
  },
  {
    id: "pillar-global-workforce",
    linkId: "link-global-workforce",
    tag: "05",
    href: "/services/global-workforce",
    title: "Global Workforce & Employment Solutions",
    desc: "We enable organisations to expand globally with ease by managing employment contracts, compliance, and workforce administration seamlessly across geographies.",
    highlights: ["Employer of Record", "Global Payroll", "Multi-Country Staffing", "Cross-Border Compliance"],
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </>
    ),
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
            End-to-End <span className="gradient-text">Business Solutions</span> That Drive Growth
          </>
        }
        lede="SBHR Consultancy delivers five integrated service pillars — from talent acquisition and customer experience design to global workforce management and strategic consulting — all built on veteran-led expertise."
      />

      {/* ── Service Pillars Grid ──────────────────────────── */}
      <section className="container" id="services-pillars">
        <Reveal className={styles.sectionHead} variant="up">
          <span className="eyebrow-pill">Five Service Pillars</span>
          <h2 className={styles.sectionTitle}>
            Everything Your Organisation Needs,{" "}
            <span className="gradient-text">Under One Roof</span>
          </h2>
          <p className={styles.sectionLede}>
            Each pillar is a full-service practice with dedicated specialists, proven
            methodologies, and measurable outcomes.
          </p>
        </Reveal>

        <div className={styles.pillarsGrid}>
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.id} variant="up" delay={i * 100}>
              <TiltCard className={styles.pillarTilt} id={pillar.id}>
                <article className={`${styles.pillarCard} glow-border`}>
                  <div className={styles.pillarHeader}>
                    <span className={styles.pillarIconWrap}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        {pillar.icon}
                      </svg>
                    </span>
                    <span className={styles.pillarTag}>{pillar.tag}</span>
                  </div>
                  <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                  <p className={styles.pillarDesc}>{pillar.desc}</p>
                  <ul className={styles.pillarHighlights}>
                    {pillar.highlights.map((h) => (
                      <li key={h} className={styles.highlightChip}>
                        <span className={styles.chipDot} aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={pillar.href}
                    className={styles.pillarLink}
                    id={pillar.linkId}
                  >
                    Learn more
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Why SBHR ──────────────────────────────────────── */}
      <section className={`${styles.whySection} aurora-host`} id="why-sbhr">
        <Aurora variant="cool" />
        <div className="container">
          <Reveal className={styles.sectionHead} variant="up">
            <span className="eyebrow-pill">Why Choose SBHR</span>
            <h2 className={styles.sectionTitle}>
              One Partner. <span className="gradient-text">Infinite Capability.</span>
            </h2>
            <p className={styles.sectionLede}>
              We are more than a staffing agency. We are your strategic partner for building
              resilient, future-ready organisations.
            </p>
          </Reveal>

          <div className={styles.whyGrid}>
            {[
              {
                id: "why-expertise",
                icon: (
                  <>
                    <path d="M12 2l2.9 6.2 6.6.9-4.8 4.7 1.2 6.7L12 17.3 6.1 20.5l1.2-6.7L2.5 9.1l6.6-.9z" />
                  </>
                ),
                title: "25+ Years of Leadership Expertise",
                desc: "Our Co-Founder brings deep domain knowledge across HR, IT staffing, workforce management, and enterprise talent solutions.",
              },
              {
                id: "why-integrated",
                icon: (
                  <>
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </>
                ),
                title: "Integrated Multi-Service Delivery",
                desc: "Combine services across pillars for seamless outcomes — hire talent, optimise their workflows, and manage global compliance all through one relationship.",
              },
              {
                id: "why-speed",
                icon: (
                  <>
                    <circle cx="12" cy="12" r="9" />
                    <polyline points="12 7 12 12 15.5 14" />
                  </>
                ),
                title: "24-48 Hour Candidate SLA",
                desc: "Our pre-vetted candidate database enables our recruiters to share verified candidate profiles within 24 to 48 hours of client brief alignment.",
              },
              {
                id: "why-custom",
                icon: (
                  <>
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9.01" y2="9" />
                  </>
                ),
                title: "Bespoke, Not Templated",
                desc: "Every engagement is designed around your specific organisation — no copy-paste solutions. We invest time to understand your culture, goals, and constraints.",
              },
            ].map((item, i) => (
              <Reveal key={item.id} variant="up" delay={i * 110}>
                <article className={styles.whyCard} id={item.id}>
                  <span className={styles.whyIcon}>
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
                      {item.icon}
                    </svg>
                  </span>
                  <h3 className={styles.whyTitle}>{item.title}</h3>
                  <p className={styles.whyDesc}>{item.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        sectionId="services-cta"
        eyebrow="Ready to get started?"
        title="Transform Your Organisation With SBHR"
        desc="Whether you need to hire, optimise, or expand — our specialists are ready to deliver outcomes that matter."
        primary={{ href: "/contact", label: "Get in Touch", id: "services-cta-contact-btn" }}
        secondary={{ href: "/jobs", label: "Browse Jobs", id: "services-cta-jobs-btn" }}
      />
    </div>
  );
}
