import React from "react";
import PageHero from "../../components/PageHero";
import Aurora from "../../components/Aurora";
import Reveal from "../../components/Reveal";
import TiltCard from "../../components/TiltCard";
import CtaBanner from "../../components/CtaBanner";
import styles from "./about.module.css";

/* ─────────────────────────────────────────────────────────────
   Kolkata roots — an abstract suspension bridge standing in for
   the firm's local anchor and its national reach.
   ───────────────────────────────────────────────────────────── */
function BridgeVector() {
  const suspenders = [100, 120, 140, 160, 180, 200, 220, 240];

  return (
    <svg
      className={styles.bridgeSvg}
      viewBox="0 0 340 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Abstract suspension bridge representing SBHR's Kolkata roots and national reach"
    >
      <defs>
        <linearGradient id="deckGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1D7DC4" stopOpacity="0.25" />
          <stop offset="50%" stopColor="#083A65" />
          <stop offset="100%" stopColor="#1D7DC4" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient id="archGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#083A65" />
          <stop offset="50%" stopColor="#1D7DC4" />
          <stop offset="100%" stopColor="#083A65" />
        </linearGradient>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EAF4FD" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Sky wash + sun */}
      <rect x="0" y="0" width="340" height="180" fill="url(#skyGrad)" rx="16" />
      <circle className={styles.sun} cx="278" cy="52" r="22" fill="#FFB74A" opacity="0.28" />
      <circle cx="278" cy="52" r="11" fill="#E68100" opacity="0.75" />

      {/* Arch */}
      <path
        d="M80 82 Q170 14 260 82"
        stroke="url(#archGrad)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />

      {/* Towers */}
      <line x1="80" y1="82" x2="80" y2="170" stroke="#083A65" strokeWidth="4" strokeLinecap="round" />
      <line x1="260" y1="82" x2="260" y2="170" stroke="#083A65" strokeWidth="4" strokeLinecap="round" />

      {/* Suspenders — draw themselves in sequence */}
      {suspenders.map((x, i) => {
        // Height under the parabolic arch at this x position
        const t = (x - 80) / 180;
        const archY = 82 - 4 * 68 * t * (1 - t);
        return (
          <line
            key={x}
            className={styles.suspender}
            x1={x}
            y1={archY}
            x2={x}
            y2={170}
            stroke={i % 3 === 0 ? "#E68100" : "#1D7DC4"}
            strokeOpacity="0.55"
            strokeWidth="1.5"
            style={{ animationDelay: `${i * 0.16}s` }}
          />
        );
      })}

      {/* Deck */}
      <line x1="20" y1="170" x2="320" y2="170" stroke="url(#deckGrad)" strokeWidth="5" strokeLinecap="round" />

      {/* Traffic pulse travelling the deck */}
      <circle className={styles.traveller} cx="20" cy="170" r="5" fill="#E68100" />

      {/* Tower crown nodes */}
      <circle className={styles.crown} cx="80" cy="82" r="7" fill="#1D7DC4" />
      <circle className={styles.crown} cx="260" cy="82" r="7" fill="#1D7DC4" style={{ animationDelay: "1.1s" }} />
      <circle cx="170" cy="41" r="8" fill="#E68100" />
      <circle cx="170" cy="41" r="3" fill="#FFFFFF" />

      {/* Water */}
      <g className={styles.water}>
        <line x1="40" y1="192" x2="130" y2="192" stroke="#1D7DC4" strokeOpacity="0.28" strokeWidth="3" strokeLinecap="round" />
        <line x1="150" y1="192" x2="230" y2="192" stroke="#1D7DC4" strokeOpacity="0.2" strokeWidth="3" strokeLinecap="round" />
        <line x1="70" y1="208" x2="190" y2="208" stroke="#1D7DC4" strokeOpacity="0.22" strokeWidth="3" strokeLinecap="round" />
        <line x1="210" y1="208" x2="290" y2="208" stroke="#1D7DC4" strokeOpacity="0.16" strokeWidth="3" strokeLinecap="round" />
        <line x1="110" y1="224" x2="240" y2="224" stroke="#1D7DC4" strokeOpacity="0.14" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  );
}

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
    title: "Real-Time Delivery",
    desc: "We run a pre-vetted database of top-tier talent. This enables our recruiters to share fully verified candidate profiles within 24 hours of brief alignment.",
    icon: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
  },
  {
    id: "pillar-connection",
    index: "03",
    title: "Network Integration",
    desc: "Our veterans hold professional ties across major technology centers. This allows us to source top talent at highly competitive cost margins.",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </>
    ),
  },
];

export default function About() {
  return (
    <div className={styles.aboutPage}>
      <PageHero
        id="about-header"
        eyebrow="About Our Firm"
        title={
          <>
            Connecting <span className="gradient-text">Talent</span> and Strategy
          </>
        }
        lede="SBHR Consultancy is a veteran-guided Next-Gen talent recruitment service provider nestled in the heart of Kolkata, West Bengal."
      />

      {/* ── Story ────────────────────────────────────────── */}
      <section className="container" id="story">
        <div className={styles.twoCol}>
          <div className={styles.leftCol}>
            <Reveal variant="left">
              <span className="eyebrow-pill">Who We Are</span>
            </Reveal>
            <Reveal variant="left" delay={90}>
              <h2 className={styles.sectionTitle}>
                A Young Organization Built on{" "}
                <span className="gradient-text">Veteran Foundations</span>
              </h2>
            </Reveal>
            <Reveal variant="left" delay={170}>
              <p className={styles.text}>
                Nestled in the cultural hub of Kolkata, SBHR Consultancy serves both large
                enterprises and growing start-ups across all industry sectors. We combine
                modern, intelligent technology with years of human resources experience to
                help organizations convert human potential into business performance.
              </p>
            </Reveal>
            <Reveal variant="left" delay={250}>
              <p className={styles.text}>
                Our focus is selective. We don&apos;t believe in mass-emailing candidate lists;
                we focus on finding the exact matches. By being selective, we invest productive
                time in understanding your corporate culture, client roster, and engineering
                budgets before presenting candidate options.
              </p>
            </Reveal>
          </div>

          <Reveal className={styles.vectorContainer} variant="scale" delay={140}>
            <div className={styles.vectorGlass}>
              <BridgeVector />
              <span className={styles.vectorCaption}>Rooted in Kolkata · Sourcing nationwide</span>
            </div>
          </Reveal>
        </div>
      </section>

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
                  To be the premier one-stop recruitment service provider for employers,
                  delivering immense value, expert suggestions, and vetted talent to help
                  organizations achieve long-term success.
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
                  To ensure our clients sit back and relax while we do the strategic
                  headhunting, building a professional relationship where client happiness and
                  organizational growth act as our primary success metrics.
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
              We guide our recruitment process using three fundamental parameters to ensure
              high placement satisfaction rates.
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
