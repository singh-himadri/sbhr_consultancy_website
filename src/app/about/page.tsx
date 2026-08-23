import React from "react";
import Link from "next/link";
import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.aboutPage}>
      {/* Header */}
      <section className={`container ${styles.header}`} id="about-header">
        <span className={styles.subtitle}>About Our Firm</span>
        <h1 className={styles.title}>Connecting Talent and Strategy</h1>
        <p className={styles.desc}>
          SBHR Consultancy is a veteran-guided Next-Gen talent recruitment service provider nestled in the heart of Kolkata, West Bengal.
        </p>
      </section>

      {/* Story section */}
      <section className="container" id="story">
        <div className={styles.twoCol}>
          <div className={styles.leftCol}>
            <span className={styles.subtitle}>Who We Are</span>
            <h2 className={styles.sectionTitle}>A Young Organization Built on Veteran Foundations</h2>
            <p className={styles.text}>
              Nestled in the cultural hub of Kolkata, SBHR Consultancy serves both large enterprises and growing start-ups across all industry sectors. We combine modern, intelligent technology with years of human resources experience to help organizations convert human potential into business performance.
            </p>
            <p className={styles.text}>
              Our focus is selective. We don't believe in mass-emailing candidate lists; we focus on finding the exact matches. By being selective, we invest productive time in understanding your corporate culture, client roster, and engineering budgets before presenting candidate options.
            </p>
          </div>
          <div className={styles.vectorContainer}>
            <svg
              className={styles.vectorSvg}
              viewBox="0 0 160 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="SBHR Kolkata roots map vector"
            >
              <rect x="10" y="10" width="140" height="100" rx="12" fill="var(--color-bg-base)" stroke="var(--color-border)" strokeWidth="2" />
              {/* Abstract bridge layout representing Howrah Bridge (Kolkata connection) as network vectors */}
              <path d="M20 90 L140 90" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" />
              <path d="M40 90 L40 50 L120 50 L120 90" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" />
              {/* Connecting suspender lines */}
              <line x1="50" y1="50" x2="50" y2="90" stroke="var(--color-accent)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="70" y1="50" x2="70" y2="90" stroke="var(--color-primary)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="90" y1="50" x2="90" y2="90" stroke="var(--color-primary)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="110" y1="50" x2="110" y2="90" stroke="var(--color-accent)" strokeWidth="1" strokeDasharray="3 3" />
              {/* Arched structural line */}
              <path d="M40 50 Q 80 20 120 50" stroke="var(--color-primary)" strokeWidth="3" fill="none" strokeLinecap="round" />
              {/* Abstract nodes floating on top */}
              <circle cx="80" cy="35" r="6" fill="var(--color-accent)" />
              <circle cx="50" cy="50" r="4" fill="var(--color-primary)" />
              <circle cx="110" cy="50" r="4" fill="var(--color-primary)" />
            </svg>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container" id="mission-vision">
        <div className={styles.missionVision}>
          <div className={styles.mvCard} id="card-mission">
            <h3 className={styles.mvCardTitle}>
              <svg
                className={styles.mvCardIcon}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
              Our Mission
            </h3>
            <p className={styles.mvCardDesc}>
              To be the premier one-stop recruitment service provider for employers, delivering immense value, expert suggestions, and vetted talent to help organizations achieve long-term success.
            </p>
          </div>
          <div className={styles.mvCard} id="card-vision">
            <h3 className={styles.mvCardTitle}>
              <svg
                className={styles.mvCardIcon}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              Our Vision
            </h3>
            <p className={styles.mvCardDesc}>
              To ensure our clients sit back and relax while we do the strategic headhunting, building a professional relationship where client happiness and organizational growth act as our primary success metrics.
            </p>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className={styles.pillarsSection} id="pillars">
        <div className="container" style={{ textAlign: "center" }}>
          <span className={styles.subtitle}>Our Framework</span>
          <h2 className={styles.sectionTitle} style={{ marginTop: "0.5rem" }}>
            The Three Pillars of SBHR Sourcing
          </h2>
          <p className={styles.text} style={{ margin: "1rem auto 0", maxWidth: "600px" }}>
            We guide our recruitment process using three fundamental parameters to ensure high placement satisfaction rates.
          </p>

          <div className={styles.pillarsGrid}>
            <div className={styles.pillarCard} id="pillar-selective">
              <div className={styles.pillarIconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className={styles.pillarTitle}>Selective Allocation</h3>
              <p className={styles.pillarDesc}>
                We prioritize quality over quantity. By partner-allocating our time to specific, vetted job scopes, we deliver CV matches with high value-fit alignment.
              </p>
            </div>

            <div className={styles.pillarCard} id="pillar-speed">
              <div className={styles.pillarIconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <h3 className={styles.pillarTitle}>Real-Time Delivery</h3>
              <p className={styles.pillarDesc}>
                We run a pre-vetted database of IT engineering talent. This enables our recruiters to share fully verified candidate profiles within 24 hours of brief alignment.
              </p>
            </div>

            <div className={styles.pillarCard} id="pillar-connection">
              <div className={styles.pillarIconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 11.03a6.48 6.48 0 0 0-4.63-1.93h-1.93l-.77-.77-.77.77h-1.93a6.48 6.48 0 0 0-4.63 1.93" />
                  <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" />
                </svg>
              </div>
              <h3 className={styles.pillarTitle}>Network Integration</h3>
              <p className={styles.pillarDesc}>
                Our veterans hold professional ties across major technology centers. This allows us to source top talent at highly competitive cost margins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="container" style={{ marginBottom: "4rem" }} id="about-cta">
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
            Build Your Core Engineering Team With Us
          </h2>
          <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "1.05rem", maxWidth: "500px" }}>
            Connect with our Kolkata consultants to align your IT staffing roadmap today.
          </p>
          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
            <Link href="/contact" className="btn btn-accent" id="about-cta-contact-btn">
              Talk to Our Consultants
            </Link>
            <Link href="/services" className="btn btn-glass" id="about-cta-services-btn">
              Explore Our Models
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
