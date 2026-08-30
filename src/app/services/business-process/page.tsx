import React from "react";
import PageHero from "../../../components/PageHero";
import Aurora from "../../../components/Aurora";
import Reveal from "../../../components/Reveal";
import CtaBanner from "../../../components/CtaBanner";
import styles from "../service-detail.module.css";

/* ═══════════════════════════════════════════════════════════
   SVG ILLUSTRATIONS
   ═══════════════════════════════════════════════════════════ */

/** Process pipeline with bottleneck elimination */
function ProcessOptVector() {
  return (
    <svg className={styles.vectorSvg} viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Business process optimisation pipeline">
      <defs>
        <linearGradient id="bpo-pipeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#083A65" />
          <stop offset="50%" stopColor="#1D7DC4" />
          <stop offset="100%" stopColor="#E68100" />
        </linearGradient>
        <linearGradient id="bpo-blockGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#EAF4FD" />
        </linearGradient>
      </defs>
      {/* Main pipeline */}
      <rect x="20" y="100" width="260" height="20" rx="10" fill="#083A65" opacity="0.08" />
      <rect x="20" y="100" width="260" height="20" rx="10" fill="url(#bpo-pipeGrad)" className={styles.growBar} style={{ transformOrigin: "20px 110px" }} />
      {/* Process stages */}
      {[
        { x: 20, label: "Input", efficiency: 55, delay: 0 },
        { x: 90, label: "Process", efficiency: 78, delay: 0.2 },
        { x: 160, label: "Review", efficiency: 92, delay: 0.4 },
        { x: 230, label: "Output", efficiency: 99, delay: 0.6 },
      ].map((stage) => (
        <g key={stage.label}>
          {/* Stage block */}
          <rect x={stage.x} y="48" width="50" height="38" rx="10" fill="url(#bpo-blockGrad)" stroke="#1D7DC4" strokeOpacity="0.2" strokeWidth="1.2" className={styles.floatNode} style={{ animationDelay: `${stage.delay}s` }} />
          <rect x={stage.x + 8} y="57" width="34" height="4" rx="2" fill="#083A65" opacity="0.25" />
          <rect x={stage.x + 12} y="65" width="26" height="4" rx="2" fill="#1D7DC4" opacity="0.35" />
          {/* Efficiency bar */}
          <rect x={stage.x} y="136" width="50" height="5" rx="2.5" fill="#083A65" opacity="0.1" />
          <rect x={stage.x} y="136" width={stage.efficiency * 0.5} height="5" rx="2.5" fill="#E68100" className={styles.growBar} style={{ animationDelay: `${stage.delay + 0.5}s`, transformOrigin: `${stage.x}px 138px` }} />
          <text x={stage.x + 25} y="155" textAnchor="middle" fill="#083A65" fontSize="8" opacity="0.5" fontFamily="sans-serif">{stage.efficiency}%</text>
        </g>
      ))}
      {/* Arrows */}
      {[70, 140, 210].map((x) => (
        <g key={x}>
          <line x1={x} y1="68" x2={x + 20} y2="68" stroke="#1D7DC4" strokeOpacity="0.3" strokeWidth="1.2" className={styles.dashFlow} />
          <polyline points={`${x + 16},64 ${x + 20},68 ${x + 16},72`} stroke="#1D7DC4" strokeOpacity="0.3" strokeWidth="1.2" fill="none" />
        </g>
      ))}
      {/* Badge */}
      <g className={styles.floatBadge}>
        <circle cx="256" cy="42" r="16" fill="#FFFFFF" />
        <circle cx="256" cy="42" r="16" stroke="#E68100" strokeOpacity="0.25" strokeWidth="1.5" />
        <path d="M248 42.5l5 5 10-10" stroke="#E68100" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

/** Automation workflow — nodes connected by animated lines */
function AutomationVector() {
  return (
    <svg className={styles.vectorSvg} viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Workflow automation diagram">
      <defs>
        <linearGradient id="auto-nodeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#EAF4FD" />
        </linearGradient>
        <linearGradient id="auto-activeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1D7DC4" />
          <stop offset="100%" stopColor="#083A65" />
        </linearGradient>
      </defs>
      {/* Central hub */}
      <circle cx="150" cy="110" r="28" fill="url(#auto-activeGrad)" />
      <path d="M143 110l-4-4 8-8 4 4m-4-4 4 4-8 8-4-4" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Spoke nodes */}
      {[
        { cx: 60, cy: 60, label: "Trigger", color: "#E68100", delay: 0 },
        { cx: 240, cy: 60, label: "Logic", color: "#3FC4E8", delay: 0.3 },
        { cx: 60, cy: 160, label: "Action", color: "#1D7DC4", delay: 0.6 },
        { cx: 240, cy: 160, label: "Notify", color: "#083A65", delay: 0.9 },
        { cx: 150, cy: 190, label: "Report", color: "#E68100", delay: 1.2 },
      ].map((node) => (
        <g key={node.label}>
          <line x1={node.cx < 150 ? node.cx + 22 : node.cx === 150 ? 150 : node.cx - 22} y1={node.cy < 110 ? node.cy + 22 : node.cy === 190 ? node.cy - 22 : node.cy} x2={node.cx < 150 ? 124 : node.cx === 150 ? 150 : 176} y2={node.cy < 110 ? 88 : node.cy === 190 ? 138 : 132} stroke={node.color} strokeOpacity="0.25" strokeWidth="1.2" strokeDasharray="4 4" className={styles.dashFlow} style={{ animationDelay: `${node.delay}s` }} />
          <circle cx={node.cx} cy={node.cy} r="20" fill="url(#auto-nodeGrad)" stroke={node.color} strokeOpacity="0.35" strokeWidth="1.5" className={styles.floatNode} style={{ animationDelay: `${node.delay}s` }} />
          <circle cx={node.cx} cy={node.cy} r="8" fill={node.color} opacity="0.65" />
        </g>
      ))}
    </svg>
  );
}

/** Lean Six Sigma — defect reduction chart */
function LeanSigmaVector() {
  const points = [
    [20, 170], [60, 148], [100, 125], [140, 98], [180, 72], [220, 58], [260, 44],
  ];
  const pathD = points.map((p, i) => (i === 0 ? `M${p[0]} ${p[1]}` : `L${p[0]} ${p[1]}`)).join(" ");
  const areaD = `${pathD} L260 195 L20 195 Z`;
  return (
    <svg className={styles.vectorSvg} viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Lean Six Sigma defect reduction trend">
      <defs>
        <linearGradient id="lean-areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1D7DC4" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#1D7DC4" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="lean-lineGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#083A65" />
          <stop offset="100%" stopColor="#E68100" />
        </linearGradient>
      </defs>
      {/* Grid */}
      {[44, 98, 148, 195].map((y) => (
        <line key={y} x1="20" y1={y} x2="260" y2={y} stroke="#083A65" strokeOpacity="0.07" strokeWidth="1" />
      ))}
      {[60, 100, 140, 180, 220, 260].map((x) => (
        <line key={x} x1={x} y1="30" x2={x} y2="195" stroke="#083A65" strokeOpacity="0.07" strokeWidth="1" />
      ))}
      {/* Area fill */}
      <path d={areaD} fill="url(#lean-areaGrad)" className={styles.growBar} style={{ transformOrigin: "20px 195px" }} />
      {/* Trend line */}
      <path d={pathD} stroke="url(#lean-lineGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Data points */}
      {points.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="5" fill="#FFFFFF" stroke="#1D7DC4" strokeWidth="2.5" className={styles.glowDot} style={{ animationDelay: `${i * 0.15}s` }} />
      ))}
      {/* Labels */}
      <text x="20" y="212" fill="#083A65" fontSize="8" opacity="0.4" fontFamily="sans-serif">Start</text>
      <text x="230" y="212" fill="#083A65" fontSize="8" opacity="0.4" fontFamily="sans-serif">Today</text>
      <text x="276" y="48" fill="#E68100" fontSize="9" fontWeight="700" fontFamily="sans-serif">-78%</text>
      {/* Badge */}
      <g className={styles.floatBadge}>
        <rect x="196" y="16" width="68" height="22" rx="8" fill="#FFFFFF" stroke="#E68100" strokeOpacity="0.25" strokeWidth="1.2" />
        <rect x="204" y="24" width="14" height="6" rx="3" fill="#E68100" opacity="0.6" />
        <rect x="222" y="24" width="34" height="6" rx="3" fill="#1D7DC4" opacity="0.3" />
      </g>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   CONTENT
   ═══════════════════════════════════════════════════════════ */
const SERVICES = [
  {
    id: "bpo-process-opt",
    tag: "Efficiency Engineering",
    title: "Process Optimisation & Redesign",
    body: "We conduct end-to-end process analysis to identify inefficiencies, eliminate redundancy, and redesign workflows that maximise throughput and accuracy. Our consultants use proven methodologies to deliver measurable efficiency gains — typically 25–40% — within the first engagement.",
    features: ["Process Mapping & Analysis", "Root Cause Analysis", "Workflow Redesign", "SOP Development"],
    icon: (<><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></>),
    vector: <ProcessOptVector />,
  },
  {
    id: "bpo-automation",
    tag: "Digital Transformation",
    title: "Workflow Automation & Operations Management",
    body: "From ERP implementation to robotic process automation, we help organisations digitise repetitive operations, reduce human error, and free up your teams to focus on higher-value activities. We manage the full implementation lifecycle from design to deployment and ongoing optimisation.",
    features: ["RPA & Intelligent Automation", "ERP Implementation Support", "Digital Operations Design", "Performance KPI Dashboards"],
    icon: (<><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></>),
    vector: <AutomationVector />,
  },
  {
    id: "bpo-lean",
    tag: "Quality & Continuous Improvement",
    title: "Lean Six Sigma & Quality Management",
    body: "We embed a culture of continuous improvement into your operations through Lean and Six Sigma methodologies. Our certified practitioners train your teams, lead improvement projects, and establish quality management systems that sustain efficiency gains long after the engagement ends.",
    features: ["Lean Six Sigma Projects", "Quality Management Systems", "Defect Reduction Programmes", "Continuous Improvement Culture"],
    icon: (<><circle cx="12" cy="12" r="9" /><path d="M8 12.5l2.6 2.6L16 9.5" /></>),
    vector: <LeanSigmaVector />,
  },
];

const PROCESS = [
  { id: "bpo-step-1", title: "Diagnostic Assessment", desc: "We map your current processes, measure baseline performance metrics, and identify the highest-impact improvement opportunities." },
  { id: "bpo-step-2", title: "Solution Design", desc: "Our consultants design the optimised process or automation solution, validated against your operational constraints and goals." },
  { id: "bpo-step-3", title: "Implementation", desc: "We execute the redesign or technology deployment with a dedicated project team and change management support." },
  { id: "bpo-step-4", title: "Stabilisation & Handover", desc: "We monitor the new process, refine based on real data, train your teams, and hand over a fully documented, stable operation." },
];

export default function BusinessProcessPage() {
  return (
    <div className={styles.servicePage}>
      <PageHero
        id="bpo-header"
        eyebrow="Business Process & Operations Management"
        title={
          <>
            Streamline Operations.{" "}
            <span className="gradient-text">Scale with Confidence.</span>
          </>
        }
        lede="We streamline and optimise business processes to improve efficiency, accuracy, and scalability across core operations — from workflow redesign and automation to quality management and Lean Six Sigma implementation."
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

      <section className={`${styles.processSection} aurora-host`} id="bpo-process">
        <Aurora variant="cool" />
        <div className="container">
          <Reveal className={styles.sectionHead} variant="up">
            <span className="eyebrow-pill">Our Methodology</span>
            <h2 className={styles.sectionTitle}>
              The SBHR <span className="gradient-text">Operations Improvement Cycle</span>
            </h2>
            <p className={styles.sectionLede}>
              A structured four-phase approach that moves from insight to implementation,
              delivering sustainable operational improvements your teams can own.
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
        sectionId="bpo-cta"
        eyebrow="Optimise your operations"
        title="Ready to Eliminate Inefficiency and Scale Smarter?"
        desc="Our operations specialists will diagnose your process gaps and design solutions that deliver lasting, measurable improvements."
        primary={{ href: "/contact", label: "Book a Process Audit", id: "bpo-cta-contact-btn" }}
        secondary={{ href: "/services", label: "Explore All Services", id: "bpo-cta-services-btn" }}
      />
    </div>
  );
}
