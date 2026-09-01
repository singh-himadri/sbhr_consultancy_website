import React from "react";
import PageHero from "../../components/PageHero";
import Aurora from "../../components/Aurora";
import Reveal from "../../components/Reveal";
import TiltCard from "../../components/TiltCard";
import CtaBanner from "../../components/CtaBanner";
import styles from "./about.module.css";

const SNAPSHOTS = [
  {
    num: "2019",
    label: "Established Year",
    desc: "Founded in Kolkata, West Bengal with a vision for recruitment excellence.",
  },
  {
    num: "25+ Yrs",
    label: "Leadership Tenure",
    desc: "Co-Founder HR & talent acquisition domain mastery.",
  },
  {
    num: "24–48h",
    label: "Candidate SLA",
    desc: "Average turnaround to present fully vetted candidate profiles.",
  },
  {
    num: "12+",
    label: "Industry Domains",
    desc: "Cross-sector placement expertise across IT, Engineering, Manufacturing, Finance, & Core sectors.",
  },
];

const PILLARS = [
  {
    id: "pillar-selective",
    index: "01",
    title: "Selective Allocation",
    desc: "We prioritize quality over quantity. By partner-allocating our time to specific, vetted job scopes, we deliver CV matches with high value-fit alignment.",
    icon: (
      <>
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </>
    ),
  },
  {
    id: "pillar-speed",
    index: "02",
    title: "Real-Time Delivery (24–48h)",
    desc: "We maintain a robust, pre-vetted database of top-tier talent. This enables our recruiters to share fully verified candidate profiles within 24 to 48 hours.",
    icon: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
  },
  {
    id: "pillar-connection",
    index: "03",
    title: "Network Integration",
    desc: "Our veterans hold strong professional ties across major technology centers and industry verticals, sourcing top talent with high retention rates.",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </>
    ),
  },
];

const COMPETENCIES = [
  "Executive Headhunting",
  "Permanent Recruitment",
  "Contract Staffing",
  "Workforce Planning",
  "B2B Strategic Sourcing",
  "Multi-Sector Placement",
];

export default function About() {
  return (
    <div className={styles.aboutPage}>
      <PageHero
        id="about-header"
        eyebrow="About Our Firm"
        title={
          <>
            Empowering Growth Through <span className="gradient-text">Strategic Talent Acquisition</span>
          </>
        }
        lede="SBHR Consultancy is a veteran-guided recruitment and human capital partner established in Kolkata, delivering elite talent across 12+ industry verticals Pan-India."
      />

      {/* ── Company Story & Snapshot ─────────────────────── */}
      <section className="container" id="story">
        <div className={styles.twoCol}>
          <div className={styles.leftCol}>
            <Reveal variant="left">
              <span className="eyebrow-pill">Who We Are</span>
            </Reveal>
            <Reveal variant="left" delay={90}>
              <h2 className={styles.sectionTitle}>
                Established in 2019, Driven by{" "}
                <span className="gradient-text">Veteran Excellence</span>
              </h2>
            </Reveal>
            <Reveal variant="left" delay={170}>
              <p className={styles.text}>
                Founded in 2019 in the cultural and economic hub of Kolkata, SBHR Consultancy set out with a clear mission: to connect ambitious organizations with properly skilled human resources. Within a short span, we gathered the deep trust of clients and candidates alike through our solid database, pervasive culture, and unparallel work ethics.
              </p>
            </Reveal>
            <Reveal variant="left" delay={250}>
              <p className={styles.text}>
                While our roots lie in specialized IT staffing, SBHR Consultancy has rapidly evolved into a trusted multi-sector recruitment partner. Today, we cater to 12+ major industry domains including Engineering, Financial Ecosystems, Healthcare, Supply Chain, Industrial Production, and Energy Infrastructure across India.
              </p>
            </Reveal>
          </div>

          <Reveal className={styles.vectorContainer} variant="scale" delay={140}>
            <div className={styles.snapshotGrid}>
              {SNAPSHOTS.map((s, i) => (
                <div key={s.label} className={styles.snapshotCard} id={`snapshot-${i}`}>
                  <span className={styles.snapshotNum}>{s.num}</span>
                  <h3 className={styles.snapshotLabel}>{s.label}</h3>
                  <p className={styles.snapshotDesc}>{s.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Co-Founder Executive Spotlight ─────────────────── */}
      {/*<section className={styles.founderSection} id="leadership">*/}
      {/*  <div className="container">*/}
      {/*    <Reveal variant="up">*/}
      {/*      <div className={styles.founderCard}>*/}
      {/*        <div className={styles.founderHeaderBar}>*/}
      {/*          <div className={styles.founderTitleGroup}>*/}
      {/*            <span className={styles.founderRoleBadge}>Executive Leadership</span>*/}
      {/*            <h3 className={styles.founderTitle}>Co-Founder Spotlight</h3>*/}
      {/*          </div>*/}
      {/*          <div className={styles.founderExpBadge}>*/}
      {/*            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">*/}
      {/*              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />*/}
      {/*            </svg>*/}
      {/*            25+ Years Experience*/}
      {/*          </div>*/}
      {/*        </div>*/}

      {/*        <div className={styles.quoteBox}>*/}
      {/*          <p className={styles.quoteText}>*/}
      {/*            &ldquo;We believe that poor human resources can cause the downfall of even a very reputed company. Our commitment is delivering pre-vetted, domain-expert leaders and staff within 24 to 48 hours.&rdquo;*/}
      {/*          </p>*/}
      {/*        </div>*/}

      {/*        <p className={styles.founderBio}>*/}
      {/*          The mastermind guiding SBHR Consultancy brings over 25 years of extensive experience in the human resource department of top enterprise organizations. Throughout a distinguished career, our Co-Founder has focused on workforce management, employee engagement, B2B talent ecosystems, and executive headhunting. This widespread domain expertise guarantees that every client requirement is met with precision and speed.*/}
      {/*        </p>*/}

      {/*        <div className={styles.competenciesGroup}>*/}
      {/*          <span className={styles.competenciesLabel}>Core Leadership Focus Areas</span>*/}
      {/*          <div className={styles.pillsWrap}>*/}
      {/*            {COMPETENCIES.map((c) => (*/}
      {/*              <span key={c} className={styles.expertisePill}>*/}
      {/*                <span className={styles.pillDot} aria-hidden="true" />*/}
      {/*                {c}*/}
      {/*              </span>*/}
      {/*            ))}*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </Reveal>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/* ── Mission & Vision ─────────────────────────────── */}
      <section className={`${styles.mvSection} aurora-host`} id="mission-vision">
        <Aurora variant="cool" />
        <div className="container">
          <div className={styles.missionVision}>
            <Reveal variant="up">
              <article className={`${styles.mvCard} glow-border`} id="card-mission">
                <span className={`${styles.mvIcon} ${styles.mvIconTarget}`}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </span>
                <h3 className={styles.mvCardTitle}>Our Mission</h3>
                <p className={styles.mvCardDesc}>
                  To become the most trusted recruiting firm in the country by going the extra mile for our respected clients and candidates. We maintain sharp vigilance on client needs, prioritize quality, and utilize innovative methodologies to select domain potential talent.
                </p>
              </article>
            </Reveal>

            <Reveal variant="up" delay={120}>
              <article className={`${styles.mvCard} glow-border`} id="card-vision">
                <span className={`${styles.mvIcon} ${styles.mvIconEye}`}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </span>
                <h3 className={styles.mvCardTitle}>Our Vision</h3>
                <p className={styles.mvCardDesc}>
                  To emerge as one of the premier IT and multi-sector staffing companies Pan-India through utmost professionalism, deep recruitment expertise, and uncompromised commitment to organizational growth.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Pillars ──────────────────────────────────────── */}
      <section className={styles.pillarsSection} id="pillars">
        <div className="container">
          <Reveal className={styles.sectionHead} variant="up">
            <span className="eyebrow-pill">Our Framework</span>
            <h2 className={styles.sectionTitle}>
              The Three Pillars of <span className="gradient-text">SBHR Sourcing</span>
            </h2>
            <p className={styles.sectionLede}>
              We guide our recruitment process using three fundamental parameters to ensure high placement satisfaction rates.
            </p>
          </Reveal>

          <div className={styles.pillarsGrid}>
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.id} variant="up" delay={i * 130}>
                <TiltCard className={styles.pillarTilt} id={pillar.id}>
                  <article className={`${styles.pillarCard} glow-border`}>
                    <span className={styles.pillarIndex}>{pillar.index}</span>
                    <span className={styles.pillarIconWrapper}>
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
                    <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                    <p className={styles.pillarDesc}>{pillar.desc}</p>
                  </article>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        sectionId="about-cta"
        eyebrow="Start the conversation"
        title="Build Your Core Talent Ecosystem With Us"
        desc="Connect with our Kolkata consultants to align your human capital roadmap today."
        primary={{ href: "/contact", label: "Talk to Our Consultants", id: "about-cta-contact-btn" }}
        secondary={{ href: "/services", label: "Explore Our Models", id: "about-cta-services-btn" }}
      />
    </div>
  );
}
