import React from "react";
import Link from "next/link";
import HeroSection from "../components/HeroSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* 1. Hero Section (Particles & Grid Cards) */}
      <HeroSection />

      {/* 2. Stats Section */}
      <section className={styles.statsSection} id="stats-section">
        <div className={`container ${styles.statsGrid}`}>
          <div className={styles.statCard} id="stat-speed">
            <span className={styles.statNumber}>24h</span>
            <span className={styles.statLabel}>CV Turnaround</span>
            <span className={styles.statDesc}>
              Average speed to present fully vetted candidate profiles.
            </span>
          </div>
          <div className={styles.statCard} id="stat-expert">
            <span className={styles.statNumber}>100%</span>
            <span className={styles.statLabel}>IT Domain Focus</span>
            <span className={styles.statDesc}>
              Deep consulting alignment in software dev, cloud, and tech roles.
            </span>
          </div>
          <div className={styles.statCard} id="stat-match">
            <span className={styles.statNumber}>98%</span>
            <span className={styles.statLabel}>Placement Match</span>
            <span className={styles.statDesc}>
              Of candidates pass probation and align with core company values.
            </span>
          </div>
          <div className={styles.statCard} id="stat-experience">
            <span className={styles.statNumber}>10+ Yr</span>
            <span className={styles.statLabel}>Veteran Backbone</span>
            <span className={styles.statDesc}>
              Founded on veteran HR leadership and industry-trusted methodologies.
            </span>
          </div>
        </div>
      </section>

      {/* 3. About / Selective Approach Section */}
      <section className="container" id="approach-section">
        <div className={styles.twoCol}>
          <div className={styles.leftCol}>
            <span className={styles.sectionTag}>Why We Are Different</span>
            <h2 className={styles.sectionTitle}>
              We Make It Our Business To Know Your Business
            </h2>
            <p className={styles.textBlock}>
              Unlike generic resume mills, SBHR Consultancy operates as the strategic recruiting arm of your team. We invest productive time in researching your field of work, your client profiles, and internal company culture to guarantee the right fit.
            </p>
            <ul className={styles.featureList}>
              <li className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className={styles.featureText}>
                  <h4>Selective Sourcing Approach</h4>
                  <p>We work with selective clients to ensure high quality and concentrated effort.</p>
                </div>
              </li>
              <li className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className={styles.featureText}>
                  <h4>Veteran-Guided Sourcing</h4>
                  <p>Our methodologies are guided by tech recruitment veterans with years of expertise.</p>
                </div>
              </li>
              <li className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className={styles.featureText}>
                  <h4>Kolkata-based, Nationally Connected</h4>
                  <p>Harnessing local market leadership to source top-tier tech talent nationwide.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.vectorContainer}>
            {/* Custom vector illustration of search, target, and nodes */}
            <svg
              className={styles.vectorImage}
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Staffing vector graphic"
            >
              <rect x="20" y="20" width="160" height="160" rx="20" fill="var(--color-bg-alt)" stroke="var(--color-border)" strokeWidth="2" />
              {/* Interconnecting networking lines */}
              <line x1="50" y1="100" x2="100" y2="60" stroke="var(--color-primary)" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="100" y1="60" x2="150" y2="100" stroke="var(--color-primary)" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="50" y1="100" x2="100" y2="140" stroke="var(--color-primary)" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="100" y1="140" x2="150" y2="100" stroke="var(--color-primary)" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="100" y1="60" x2="100" y2="140" stroke="var(--color-primary)" strokeWidth="2" />
              {/* Nodes */}
              <circle cx="50" cy="100" r="12" fill="var(--color-primary)" />
              <circle cx="100" cy="60" r="16" fill="var(--color-accent)" />
              <circle cx="150" cy="100" r="12" fill="var(--color-primary)" />
              <circle cx="100" cy="140" r="12" fill="var(--color-primary)" />
              {/* Node interior vectors */}
              <circle cx="50" cy="100" r="4" fill="#FFFFFF" />
              <path d="M96 60 H104 M100 56 V64" stroke="#FFFFFF" strokeWidth="2" />
              <circle cx="150" cy="100" r="4" fill="#FFFFFF" />
              <circle cx="100" cy="140" r="4" fill="#FFFFFF" />
              {/* Decorative Target Ring */}
              <circle cx="100" cy="60" r="28" stroke="var(--color-accent)" strokeWidth="1" strokeDasharray="6 3" />
            </svg>
          </div>
        </div>
      </section>

      {/* 4. Services Section */}
      <section className="container" id="services-summary-section">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className={styles.sectionTag}>What We Deliver</span>
          <h2 className={styles.sectionTitle} style={{ marginTop: "0.5rem" }}>
            Comprehensive Talent Sourcing Solutions
          </h2>
          <p className={styles.textBlock} style={{ margin: "1rem auto 0", maxWidth: "600px" }}>
            We provide workforce solutions tailored to your IT scaling roadmap, whether you require immediate project reinforcement or long-term leadership hiring.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard} id="card-perm">
            <div className={styles.serviceIconWrapper}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className={styles.serviceCardTitle}>Permanent Recruitment</h3>
            <p className={styles.serviceCardDesc}>
              Identify and secure long-term tech professionals and leadership whose values and technology skillsets perfectly align with your roadmap.
            </p>
            <Link href="/services#permanent" className={styles.serviceCardLink} id="link-perm-details">
              Read details
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>

          <div className={styles.serviceCard} id="card-contract">
            <div className={styles.serviceIconWrapper}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <h3 className={styles.serviceCardTitle}>Contract Staffing</h3>
            <p className={styles.serviceCardDesc}>
              Access agile temporary staffing resources to accelerate critical sprint cycles, handle peak work periods, or backfill temporary gaps.
            </p>
            <Link href="/services#contract" className={styles.serviceCardLink} id="link-contract-details">
              Read details
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>

          <div className={styles.serviceCard} id="card-workforce">
            <div className={styles.serviceIconWrapper}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </div>
            <h3 className={styles.serviceCardTitle}>Workforce Solutions</h3>
            <p className={styles.serviceCardDesc}>
              Custom end-to-end recruitment process management, vendor control models, and specialized headhunting for critical niche expertise.
            </p>
            <Link href="/services#workforce" className={styles.serviceCardLink} id="link-workforce-details">
              Read details
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Call to Action Banner */}
      <section className="container" id="cta-banner-section">
        <div className={styles.ctaBanner}>
          <h2 className={styles.ctaTitle}>Ready to Accelerate Your Tech Team Scaling?</h2>
          <p className={styles.ctaDesc}>
            Join hands with SBHR Consultancy and let our recruiters source, verify, and align the elite IT specialists you need.
          </p>
          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/contact" className="btn btn-accent" id="cta-banner-btn-hire">
              Request Consultancy
            </Link>
            <Link href="/jobs" className="btn btn-glass" id="cta-banner-btn-jobs">
              Browse Open Jobs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
