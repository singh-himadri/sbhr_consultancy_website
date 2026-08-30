import React from "react";
import PageHero from "../../../components/PageHero";
import Aurora from "../../../components/Aurora";
import Reveal from "../../../components/Reveal";
import CtaBanner from "../../../components/CtaBanner";
import styles from "../service-detail.module.css";

/* ═══════════════════════════════════════════════════════════
   SVG ILLUSTRATIONS
   ═══════════════════════════════════════════════════════════ */

/** Contact Centre — headset agent with omnichannel wave */
function ContactCentreVector() {
  return (
    <svg className={styles.vectorSvg} viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Contact centre agent with omnichannel connections">
      <defs>
        <linearGradient id="cx-agentGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1D7DC4" />
          <stop offset="100%" stopColor="#083A65" />
        </linearGradient>
        <linearGradient id="cx-bgGrad">
          <stop offset="0%" stopColor="#EAF4FD" />
          <stop offset="100%" stopColor="#F8FBFE" />
        </linearGradient>
        <radialGradient id="cx-waveGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1D7DC4" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#1D7DC4" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Background disk */}
      <circle cx="150" cy="110" r="100" fill="url(#cx-bgGrad)" />
      <circle cx="150" cy="110" r="100" stroke="#1D7DC4" strokeOpacity="0.12" strokeWidth="1.5" />
      {/* Pulse rings */}
      <circle cx="150" cy="110" r="76" stroke="#1D7DC4" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="4 6" className={styles.dashFlow} />
      <circle cx="150" cy="110" r="52" stroke="#1D7DC4" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="3 5" className={styles.dashFlow} style={{ animationDelay: "0.4s" }} />
      {/* Agent icon */}
      <circle cx="150" cy="95" r="18" fill="url(#cx-agentGrad)" />
      <circle cx="150" cy="88" r="7" fill="#FFFFFF" />
      <path d="M139 104c0-6 5-10 11-10s11 4 11 10" fill="#FFFFFF" />
      {/* Headset arc */}
      <path d="M133 88 a18 18 0 0 1 34 0" stroke="#E68100" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <rect x="131" y="86" width="6" height="9" rx="3" fill="#E68100" />
      <rect x="163" y="86" width="6" height="9" rx="3" fill="#E68100" />
      {/* Channel nodes */}
      {[
        { cx: 56, cy: 72, label: "Chat", color: "#1D7DC4", delay: 0 },
        { cx: 244, cy: 72, label: "Email", color: "#E68100", delay: 0.4 },
        { cx: 56, cy: 148, label: "Voice", color: "#3FC4E8", delay: 0.8 },
        { cx: 244, cy: 148, label: "Social", color: "#083A65", delay: 1.2 },
      ].map((n) => (
        <g key={n.label} className={styles.floatNode} style={{ animationDelay: `${n.delay}s` }}>
          <circle cx={n.cx} cy={n.cy} r="20" fill="#FFFFFF" stroke={n.color} strokeOpacity="0.3" strokeWidth="1.5" />
          <circle cx={n.cx} cy={n.cy} r="8" fill={n.color} opacity="0.7" />
          {/* Connector line */}
          <line x1={n.cx < 150 ? n.cx + 20 : n.cx - 20} y1={n.cy} x2={n.cy < 110 ? 140 : 160} y2={n.cy < 110 ? 100 : 120} stroke={n.color} strokeOpacity="0.25" strokeWidth="1" strokeDasharray="4 4" className={styles.dashFlow} />
        </g>
      ))}
      {/* CSAT score badge */}
      <g className={styles.floatBadge}>
        <rect x="108" y="148" width="84" height="30" rx="12" fill="#FFFFFF" stroke="#E68100" strokeOpacity="0.3" strokeWidth="1.5" />
        <rect x="118" y="157" width="28" height="4" rx="2" fill="#E68100" opacity="0.5" />
        <rect x="150" y="157" width="34" height="4" rx="2" fill="#1D7DC4" opacity="0.4" />
        <rect x="118" y="165" width="50" height="4" rx="2" fill="#083A65" opacity="0.15" />
      </g>
    </svg>
  );
}

/** Omnichannel strategy map */
function OmnichannelVector() {
  return (
    <svg className={styles.vectorSvg} viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Omnichannel customer journey map">
      <defs>
        <linearGradient id="cx-journeyGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#E68100" />
          <stop offset="100%" stopColor="#FFB74A" />
        </linearGradient>
      </defs>
      {/* Journey rail */}
      <path d="M30 110 Q80 60 150 110 Q220 160 270 110" stroke="#1D7DC4" strokeOpacity="0.2" strokeWidth="2" fill="none" strokeDasharray="5 5" className={styles.dashFlow} />
      {/* Touchpoints */}
      {[
        { cx: 30, cy: 110, label: "Discover", color: "#1D7DC4", delay: 0 },
        { cx: 95, cy: 75, label: "Engage", color: "#3FC4E8", delay: 0.5 },
        { cx: 150, cy: 110, label: "Convert", color: "#E68100", delay: 1.0 },
        { cx: 205, cy: 145, label: "Retain", color: "#1D7DC4", delay: 1.5 },
        { cx: 270, cy: 110, label: "Advocate", color: "#083A65", delay: 2.0 },
      ].map((tp) => (
        <g key={tp.label} className={styles.glowDot} style={{ animationDelay: `${tp.delay}s` }}>
          <circle cx={tp.cx} cy={tp.cy} r="18" fill="#FFFFFF" stroke={tp.color} strokeOpacity="0.35" strokeWidth="1.5" />
          <circle cx={tp.cx} cy={tp.cy} r="8" fill={tp.color} opacity="0.7" />
        </g>
      ))}
      {/* Progress bar at bottom */}
      <rect x="30" y="190" width="240" height="8" rx="4" fill="#083A65" opacity="0.08" />
      <rect x="30" y="190" width="240" height="8" rx="4" fill="url(#cx-journeyGrad)" className={styles.growBar} style={{ transformOrigin: "30px 194px" }} />
      {/* CSAT chip */}
      <g className={styles.floatBadge}>
        <rect x="105" y="20" width="90" height="32" rx="10" fill="#FFFFFF" stroke="#E68100" strokeOpacity="0.28" strokeWidth="1.2" />
        <rect x="115" y="28" width="26" height="4" rx="2" fill="#E68100" opacity="0.55" />
        <rect x="145" y="28" width="40" height="4" rx="2" fill="#1D7DC4" opacity="0.35" />
        <rect x="115" y="36" width="54" height="4" rx="2" fill="#083A65" opacity="0.12" />
      </g>
    </svg>
  );
}

/** CX Technology stack visualisation */
function CXTechVector() {
  const layers = [
    { label: "AI & Analytics", y: 28, w: 180, color: "#083A65" },
    { label: "CRM Platform", y: 62, w: 150, color: "#1D7DC4" },
    { label: "Omnichannel Router", y: 96, w: 200, color: "#3FC4E8" },
    { label: "Agent Desktop", y: 130, w: 140, color: "#E68100" },
    { label: "Knowledge Base", y: 164, w: 120, color: "#FFB74A" },
  ];
  return (
    <svg className={styles.vectorSvg} viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="CX technology stack">
      {layers.map((layer, i) => (
        <g key={layer.label} className={styles.growBar} style={{ animationDelay: `${i * 0.18}s`, transformOrigin: `${(300 - layer.w) / 2}px ${layer.y + 15}px` }}>
          <rect x={(300 - layer.w) / 2} y={layer.y} width={layer.w} height="26" rx="8" fill={layer.color} opacity={0.12 + i * 0.04} />
          <rect x={(300 - layer.w) / 2} y={layer.y} width="4" height="26" rx="2" fill={layer.color} />
          <rect x={(300 - layer.w) / 2 + 12} y={layer.y + 9} width={layer.w * 0.45} height="8" rx="4" fill={layer.color} opacity={0.5} />
        </g>
      ))}
      {/* Connector dots */}
      {[55, 97, 139, 181].map((y, i) => (
        <circle key={y} cx="150" cy={y} r="3" fill="#1D7DC4" opacity="0.4" className={styles.glowDot} style={{ animationDelay: `${i * 0.3}s` }} />
      ))}
      {/* Floating check badge */}
      <g className={styles.floatBadge}>
        <circle cx="256" cy="50" r="18" fill="#FFFFFF" />
        <circle cx="256" cy="50" r="18" stroke="#E68100" strokeOpacity="0.25" strokeWidth="1.5" />
        <path d="M248 50.5l5 5 10-10" stroke="#E68100" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   CONTENT
   ═══════════════════════════════════════════════════════════ */
const SERVICES = [
  {
    id: "cx-contact-centre",
    tag: "Customer-First Infrastructure",
    title: "Contact Centre Design & Build",
    body: "We design and stand up best-in-class contact centres from the ground up — defining the technology stack, staffing model, quality framework, and training methodology to deliver exceptional customer experiences consistently at scale.",
    features: ["Centre Design & Greenfield Setup", "Staffing Model Design", "Quality & Compliance Frameworks", "Technology Selection & Integration"],
    icon: (<><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.84 12 19.79 19.79 0 0 1 1.77 3.4 2 2 0 0 1 3.74 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></>),
    vector: <ContactCentreVector />,
  },
  {
    id: "cx-omnichannel",
    tag: "Seamless Customer Journeys",
    title: "Omnichannel Strategy & CX Consulting",
    body: "Modern customers engage across voice, email, chat, social, and self-service. We map and optimise every touchpoint of your customer journey, ensuring consistent brand experiences that build loyalty and drive measurable CSAT improvements.",
    features: ["Customer Journey Mapping", "Omnichannel Channel Design", "CSAT & NPS Improvement", "Voice of Customer Programmes"],
    icon: (<><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></>),
    vector: <OmnichannelVector />,
  },
  {
    id: "cx-staffing",
    tag: "Expert CX Talent",
    title: "BPO & CX Technology Staffing",
    body: "We recruit and deploy the specialised talent that powers modern customer experience operations — from contact centre agents and team leaders to CX analysts, workforce management specialists, and CX technology architects.",
    features: ["CX Agent Recruitment", "Team Leader & Manager Hiring", "Workforce Management Staffing", "CX Technology Specialists"],
    icon: (<><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>),
    vector: <CXTechVector />,
  },
];

const PROCESS = [
  { id: "cx-step-1", title: "CX Assessment", desc: "We audit your current customer experience, identify friction points, and benchmark against industry best practice." },
  { id: "cx-step-2", title: "Strategy Design", desc: "We co-create a CX roadmap tailored to your brand, customer base, and business goals." },
  { id: "cx-step-3", title: "Build & Implement", desc: "From technology integration to agent training, we execute the strategy with precision and speed." },
  { id: "cx-step-4", title: "Measure & Optimise", desc: "Continuous monitoring of KPIs, CSAT, and operational metrics to drive ongoing improvements." },
];

export default function ContactCentrePage() {
  return (
    <div className={styles.servicePage}>
      <PageHero
        id="cx-header"
        eyebrow="Contact Centre & Customer Experience Solutions"
        title={
          <>
            Transform Every Customer{" "}
            <span className="gradient-text">Interaction Into an Advantage</span>
          </>
        }
        lede="We design and manage high-performance customer engagement ecosystems that enhance brand perception, reduce churn, and drive measurable business outcomes across every channel."
      />

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
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{service.icon}</svg>
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
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
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

      <section className={`${styles.processSection} aurora-host`} id="cx-process">
        <Aurora variant="warm" />
        <div className="container">
          <Reveal className={styles.sectionHead} variant="up">
            <span className="eyebrow-pill">Our CX Methodology</span>
            <h2 className={styles.sectionTitle}>
              The SBHR <span className="gradient-text">CX Transformation Journey</span>
            </h2>
            <p className={styles.sectionLede}>
              A four-phase approach that takes you from diagnosis to a high-performing,
              measurable customer experience operation.
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
        sectionId="cx-cta"
        eyebrow="Elevate your customer experience"
        title="Ready to Build a World-Class CX Operation?"
        desc="Our CX specialists are ready to design, staff, and optimise a contact centre that becomes your most powerful competitive differentiator."
        primary={{ href: "/contact", label: "Start a Conversation", id: "cx-cta-contact-btn" }}
        secondary={{ href: "/services", label: "Explore All Services", id: "cx-cta-services-btn" }}
      />
    </div>
  );
}
