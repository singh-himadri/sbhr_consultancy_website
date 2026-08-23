import React from "react";
import Link from "next/link";
import styles from "./services.module.css";

export default function Services() {
  return (
    <div className={styles.servicesPage}>
      {/* Header */}
      <section className={`container ${styles.header}`} id="services-header">
        <span className={styles.subtitle}>Our Competencies</span>
        <h1 className={styles.title}>Tailored IT Staffing & Recruitment Services</h1>
        <p className={styles.desc}>
          At SBHR Consultancy, we align talent with opportunity. We leverage our deep IT domain knowledge to offer agile, high-impact workforce models.
        </p>
      </section>

      {/* Service 1: Permanent Recruitment */}
      <section className="container" id="permanent">
        <div className={styles.serviceDetail}>
          <div className={styles.serviceContent}>
            <span className={styles.subtitle}>Long-Term Leadership</span>
            <h2 className={styles.serviceTitle}>
              <svg
                className={styles.serviceIcon}
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              Permanent Recruitment
            </h2>
            <p className={styles.serviceText}>
              Finding leaders and permanent resources is a crucial component of any long-term scaling strategy. We align your organization's technical requirements and cultural vision with high-impact candidates. We ensure that candidates are vetted, interested, and qualified to drive growth.
            </p>
            <ul className={styles.serviceFeatures}>
              <li className={styles.featureItem}>
                <svg className={styles.featureIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Role Alignment Audits
              </li>
              <li className={styles.featureItem}>
                <svg className={styles.featureIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Active Passive Sourcing
              </li>
              <li className={styles.featureItem}>
                <svg className={styles.featureIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Technical Pre-Screening
              </li>
              <li className={styles.featureItem}>
                <svg className={styles.featureIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Value-Fit Assessments
              </li>
            </ul>
          </div>
          <div className={styles.vectorContainer}>
            <svg
              className={styles.vectorSvg}
              viewBox="0 0 160 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Permanent recruitment schematic"
            >
              <rect x="10" y="10" width="140" height="100" rx="12" fill="var(--color-bg-base)" stroke="var(--color-border)" strokeWidth="2" />
              <circle cx="80" cy="50" r="20" fill="var(--color-primary)" />
              <path d="M60 85 C 60 70, 100 70, 100 85" stroke="var(--color-primary)" strokeWidth="6" strokeLinecap="round" />
              <circle cx="80" cy="50" r="10" fill="#FFFFFF" />
              {/* Outer security badge/nodes indicating permanent trust */}
              <circle cx="35" cy="50" r="8" fill="var(--color-accent)" />
              <circle cx="125" cy="50" r="8" fill="var(--color-accent)" />
              <line x1="43" y1="50" x2="60" y2="50" stroke="var(--color-primary)" strokeWidth="2" strokeDasharray="3 3" />
              <line x1="100" y1="50" x2="117" y2="50" stroke="var(--color-primary)" strokeWidth="2" strokeDasharray="3 3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Service 2: Contract Staffing */}
      <section className="container" id="contract">
        <div className={styles.serviceDetailAlt}>
          <div className={styles.vectorContainer}>
            <svg
              className={styles.vectorSvg}
              viewBox="0 0 160 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Contract staffing visual"
            >
              <rect x="10" y="10" width="140" height="100" rx="12" fill="var(--color-bg-base)" stroke="var(--color-border)" strokeWidth="2" />
              <rect x="35" y="30" width="90" height="60" rx="6" stroke="var(--color-primary)" strokeWidth="2" fill="var(--color-bg-alt)" />
              {/* Horizontal calendar grid slots indicating times/contracts */}
              <line x1="35" y1="50" x2="125" y2="50" stroke="var(--color-primary)" strokeWidth="2" />
              <circle cx="50" cy="65" r="4" fill="var(--color-accent)" />
              <circle cx="70" cy="65" r="4" fill="var(--color-primary)" />
              <circle cx="90" cy="65" r="4" fill="var(--color-primary)" />
              <circle cx="110" cy="65" r="4" fill="var(--color-primary)" />
              <circle cx="50" cy="78" r="4" fill="var(--color-primary)" />
              <circle cx="70" cy="78" r="4" fill="var(--color-primary)" />
              <circle cx="90" cy="78" r="4" fill="var(--color-accent)" />
              <circle cx="110" cy="78" r="4" fill="var(--color-primary)" />
            </svg>
          </div>
          <div className={styles.serviceContent}>
            <span className={styles.subtitle}>Agile Scale</span>
            <h2 className={styles.serviceTitle}>
              <svg
                className={styles.serviceIcon}
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
              Contract Staffing
            </h2>
            <p className={styles.serviceText}>
              In a rapidly changing business environment, temporary and contract resources keep your projects on track without increasing fixed overhead. We supply top-notch IT developers, DevOps engineers, and UI/UX experts to meet temporary sprints, peak demands, or niche project scopes.
            </p>
            <ul className={styles.serviceFeatures}>
              <li className={styles.featureItem}>
                <svg className={styles.featureIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Sprint & Project Backfill
              </li>
              <li className={styles.featureItem}>
                <svg className={styles.featureIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Contract-to-Hire Models
              </li>
              <li className={styles.featureItem}>
                <svg className={styles.featureIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Agile Technical Vetting
              </li>
              <li className={styles.featureItem}>
                <svg className={styles.featureIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Compliance Management
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Service 3: Workforce Solutions */}
      <section className="container" id="workforce">
        <div className={styles.serviceDetail}>
          <div className={styles.serviceContent}>
            <span className={styles.subtitle}>End-to-End Control</span>
            <h2 className={styles.serviceTitle}>
              <svg
                className={styles.serviceIcon}
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
              Workforce & Recruitment Solutions
            </h2>
            <p className={styles.serviceText}>
              For organizations with scaling requirements, we provide comprehensive end-to-end recruitment process management. We manage your hiring lifecycle—from job description drafting and candidate portal screening to initial screening rounds and onboarding.
            </p>
            <ul className={styles.serviceFeatures}>
              <li className={styles.featureItem}>
                <svg className={styles.featureIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Vendor Management
              </li>
              <li className={styles.featureItem}>
                <svg className={styles.featureIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                End-to-End RPO Projects
              </li>
              <li className={styles.featureItem}>
                <svg className={styles.featureIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Niche Executive Search
              </li>
              <li className={styles.featureItem}>
                <svg className={styles.featureIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Pre-Onboarding Auditing
              </li>
            </ul>
          </div>
          <div className={styles.vectorContainer}>
            <svg
              className={styles.vectorSvg}
              viewBox="0 0 160 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Integrated workforce management graphic"
            >
              <rect x="10" y="10" width="140" height="100" rx="12" fill="var(--color-bg-base)" stroke="var(--color-border)" strokeWidth="2" />
              {/* Three column grid showing pipeline stages */}
              <rect x="25" y="30" width="28" height="60" rx="4" fill="var(--color-bg-alt)" stroke="var(--color-primary)" strokeWidth="1.5" />
              <rect x="66" y="30" width="28" height="60" rx="4" fill="var(--color-bg-alt)" stroke="var(--color-primary)" strokeWidth="1.5" />
              <rect x="107" y="30" width="28" height="60" rx="4" fill="var(--color-bg-alt)" stroke="var(--color-primary)" strokeWidth="1.5" />
              {/* Indicators showing motion or pipeline */}
              <circle cx="39" cy="45" r="4" fill="var(--color-primary)" />
              <circle cx="39" cy="60" r="4" fill="var(--color-primary)" />
              <circle cx="80" cy="50" r="5" fill="var(--color-accent)" />
              <path d="M75 75 L85 75" stroke="var(--color-primary)" strokeWidth="2" />
              <path d="M115 45 L125 55" stroke="var(--color-accent)" strokeWidth="2" />
              <path d="M125 45 L115 55" stroke="var(--color-accent)" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </section>

      {/* Recruitment Lifecycle Section */}
      <section className={styles.processSection} id="process">
        <div className="container" style={{ textAlign: "center" }}>
          <span className={styles.subtitle}>Our Methodology</span>
          <h2 className={styles.title} style={{ marginTop: "0.5rem" }}>
            The SBHR Recruitment Lifecycle
          </h2>
          <p className={styles.desc} style={{ margin: "1rem auto 0", maxWidth: "600px" }}>
            We implement a targeted, veteran-guided timeline to screen candidate credentials and maintain professional representation.
          </p>

          <div className={styles.timeline}>
            <div className={styles.timelineCard} id="step-1">
              <div className={styles.stepNum}>1</div>
              <h4 className={styles.stepTitle}>Briefing & Alignment</h4>
              <p className={styles.stepDesc}>
                We connect to detail technical domains, budgets, culture, and project roadmaps.
              </p>
            </div>
            <div className={styles.timelineCard} id="step-2">
              <div className={styles.stepNum}>2</div>
              <h4 className={styles.stepTitle}>Selective Sourcing</h4>
              <p className={styles.stepDesc}>
                Our recruiters source passive and active talents from our deeply connected IT networks.
              </p>
            </div>
            <div className={styles.timelineCard} id="step-3">
              <div className={styles.stepNum}>3</div>
              <h4 className={styles.stepTitle}>Pre-Vetting</h4>
              <p className={styles.stepDesc}>
                Candidates undergo technical tests and behavioral value-fit alignment reviews.
              </p>
            </div>
            <div className={styles.timelineCard} id="step-4">
              <div className={styles.stepNum}>4</div>
              <h4 className={styles.stepTitle}>Coordination</h4>
              <p className={styles.stepDesc}>
                We coordinate interviews and act as an extension of your talent management arm.
              </p>
            </div>
            <div className={styles.timelineCard} id="step-5">
              <div className={styles.stepNum}>5</div>
              <h4 className={styles.stepTitle}>Onboarding</h4>
              <p className={styles.stepDesc}>
                We audit backgrounds, support negotiation, and help onboard candidates successfully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="container" style={{ marginBottom: "4rem" }} id="services-cta">
        <div
          style={{
            background: "linear-gradient(135deg, var(--color-primary) 0%, #031c33 100%)",
            borderRadius: "var(--radius-lg)",
            padding: "4rem 3rem",
            color: "#FFFFFF",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <h2 style={{ color: "#FFFFFF", fontSize: "2.25rem", fontWeight: "800", maxWidth: "600px" }}>
            Experience Staffing Powered by Domain Expertise
          </h2>
          <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "1.05rem", maxWidth: "500px" }}>
            Let our veterans source the specific engineering competencies your project needs.
          </p>
          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
            <Link href="/contact" className="btn btn-accent" id="services-cta-contact-btn">
              Get in Touch
            </Link>
            <Link href="/jobs" className="btn btn-glass" id="services-cta-jobs-btn">
              Browse Jobs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
