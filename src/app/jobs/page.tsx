"use client";

import React, { useEffect, useState } from "react";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";
import styles from "./jobs.module.css";

interface JobOpening {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
}

interface ApplyForm {
  name: string;
  email: string;
  resumeUrl: string;
  coverNote: string;
}

interface ApplyErrors {
  name?: string;
  email?: string;
  resumeUrl?: string;
}

const mockJobs: JobOpening[] = [
  {
    id: "senior-dev",
    title: "Senior Fullstack Developer (React & Node)",
    department: "Engineering",
    type: "Full-Time",
    location: "Kolkata / Hybrid",
    description:
      "Looking for an experienced JavaScript engineer to build scale architectures. You will lead client-side UI optimization and Node.js REST API services development.",
  },
  {
    id: "devops-spec",
    title: "Lead DevOps Specialist",
    department: "Engineering",
    type: "Full-Time",
    location: "Remote (India)",
    description:
      "Manage and scale cloud deployments (AWS/Azure). Oversee Kubernetes orchestrations, Terraform IAC workflows, and automated Jenkins/GitHub Actions CI/CD pipelines.",
  },
  {
    id: "uiux-designer",
    title: "Product UI/UX Designer",
    department: "Design",
    type: "Contract",
    location: "Kolkata Office",
    description:
      "Design high-fidelity user workflows, vector layouts, and client dashboards. Maintain clean typography, design systems, and collaborate with product engineering.",
  },
  {
    id: "it-pm",
    title: "Technical IT Project Manager",
    department: "Operations",
    type: "Full-Time",
    location: "Kolkata / Hybrid",
    description:
      "Coordinate agile sprints, align product backlogs, and run scrum ceremonies for key client deployments. Monitor sprint burndowns, scope, and write specs.",
  },
  {
    id: "cloud-arch",
    title: "Azure Cloud Architect",
    department: "Engineering",
    type: "Contract",
    location: "Remote",
    description:
      "Design fault-tolerant, scalable secure architectures on Microsoft Azure. Audit network structures, active directory groups, and database migration pathways.",
  },
];

const EMPTY_FORM: ApplyForm = { name: "", email: "", resumeUrl: "", coverNote: "" };

export default function Jobs() {
  const [deptFilter, setDeptFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");

  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [applyForm, setApplyForm] = useState<ApplyForm>(EMPTY_FORM);
  const [applyErrors, setApplyErrors] = useState<ApplyErrors>({});
  const [applySuccess, setApplySuccess] = useState(false);

  const filteredJobs = mockJobs.filter((job) => {
    const matchesDept = deptFilter === "All" || job.department === deptFilter;
    const matchesType = typeFilter === "All" || job.type === typeFilter;
    return matchesDept && matchesType;
  });

  const openApplyModal = (job: JobOpening) => {
    setSelectedJob(job);
    setApplySuccess(false);
    setApplyForm(EMPTY_FORM);
    setApplyErrors({});
  };

  const closeApplyModal = () => setSelectedJob(null);

  // Dismiss the modal with Escape and hold the page still behind it
  useEffect(() => {
    if (!selectedJob) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeApplyModal();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedJob]);

  const handleApplyChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setApplyForm((prev) => ({ ...prev, [name]: value }));

    if (applyErrors[name as keyof ApplyErrors]) {
      setApplyErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tempErrors: ApplyErrors = {};
    let isValid = true;

    if (!applyForm.name.trim()) {
      tempErrors.name = "Full name is required.";
      isValid = false;
    }

    if (!applyForm.email.trim()) {
      tempErrors.email = "Email address is required.";
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(applyForm.email)) {
        tempErrors.email = "Please enter a valid email address.";
        isValid = false;
      }
    }

    if (!applyForm.resumeUrl.trim()) {
      tempErrors.resumeUrl = "Resume link or file details are required.";
      isValid = false;
    }

    setApplyErrors(tempErrors);

    if (isValid) {
      console.log(`Mock Application Submitted for ${selectedJob?.title}:`, applyForm);
      setApplySuccess(true);
    }
  };

  return (
    <div className={styles.jobsPage}>
      <PageHero
        id="jobs-header"
        eyebrow="Open Careers"
        title={
          <>
            Join Elite <span className="gradient-text">Technology Teams</span>
          </>
        }
        lede="Explore active opportunities across engineering, product design, and operations. Apply directly through our secure pipeline."
      />

      {/* ── Filters ──────────────────────────────────────── */}
      <section className="container" id="jobs-filter-section">
        <Reveal variant="up">
          <div className={styles.filterBar}>
            <div className={styles.filterGroup}>
              <div className={styles.filterField}>
                <label htmlFor="dept-select" className={styles.filterLabel}>
                  Department
                </label>
                <select
                  id="dept-select"
                  value={deptFilter}
                  onChange={(e) => setDeptFilter(e.target.value)}
                  className={styles.select}
                >
                  <option value="All">All Departments</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Design">Design</option>
                  <option value="Operations">Operations</option>
                </select>
              </div>

              <div className={styles.filterField}>
                <label htmlFor="type-select" className={styles.filterLabel}>
                  Job Type
                </label>
                <select
                  id="type-select"
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className={styles.select}
                >
                  <option value="All">All Job Types</option>
                  <option value="Full-Time">Full-Time</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>
            </div>

            <span className={styles.countLabel} id="jobs-count-text">
              <span className={styles.countPulse} aria-hidden="true" />
              Showing {filteredJobs.length} active positions
            </span>
          </div>
        </Reveal>
      </section>

      {/* ── Listings ─────────────────────────────────────── */}
      <section className={`container ${styles.grid}`} id="jobs-grid">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, i) => (
            <Reveal key={job.id} variant="up" delay={i * 90}>
              <article className={`${styles.jobCard} glow-border`} id={`job-card-${job.id}`}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.jobTitle}>{job.title}</h3>
                  <div className={styles.tags}>
                    <span className={`${styles.tag} ${styles.tagDept}`}>{job.department}</span>
                    <span className={`${styles.tag} ${styles.tagType}`}>{job.type}</span>
                  </div>
                </div>

                <p className={styles.jobDesc}>{job.description}</p>

                <div className={styles.cardFooter}>
                  <span className={styles.location} id={`job-loc-${job.id}`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {job.location}
                  </span>

                  <button
                    onClick={() => openApplyModal(job)}
                    className="btn btn-primary btn-sm"
                    id={`btn-apply-${job.id}`}
                  >
                    Apply Now
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
              </article>
            </Reveal>
          ))
        ) : (
          <div className={styles.noJobs} id="no-jobs-found">
            <span className={styles.noJobsIcon}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <h3>No Active Positions Match Your Filters</h3>
            <p>Try adjusting your department or job type selectors.</p>
          </div>
        )}
      </section>

      {/* ── Application modal ────────────────────────────── */}
      <div
        className={`${styles.modalOverlay} ${selectedJob ? styles.modalVisible : ""}`}
        onClick={closeApplyModal}
        id="apply-modal-overlay"
      >
        <div
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label={selectedJob ? `Apply for ${selectedJob.title}` : "Application form"}
          id="apply-modal-content"
        >
          <div className={styles.modalHeader}>
            <h3 className={styles.modalTitle}>
              {applySuccess ? "Application Sent" : `Apply: ${selectedJob?.title}`}
            </h3>
            <button
              className={styles.modalClose}
              onClick={closeApplyModal}
              aria-label="Close modal"
              id="btn-close-modal"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className={styles.modalBody}>
            {applySuccess ? (
              <div className={styles.successPanel} id="modal-success-panel">
                <span className={styles.successIcon}>
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline className={styles.checkDraw} points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <h3 className={styles.successHeading}>Thank you for applying!</h3>
                <p className={styles.successText}>
                  Your details for the <strong>{selectedJob?.title}</strong> role have been saved.
                  Our technical staffing recruiters will review your CV profile and connect back
                  shortly.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={closeApplyModal}
                  id="modal-success-close-btn"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className={styles.form} noValidate id="jobs-application-form">
                <div className={styles.formGroup}>
                  <label htmlFor="modal-name" className={styles.label}>
                    Full Name <span className={styles.req}>(required)</span>
                  </label>
                  <input
                    type="text"
                    id="modal-name"
                    name="name"
                    value={applyForm.name}
                    onChange={handleApplyChange}
                    className={`${styles.input} ${applyErrors.name ? styles.inputError : ""}`}
                    placeholder="e.g. Joydeep Sen"
                    required
                  />
                  {applyErrors.name && (
                    <span className={styles.errorText} id="modal-error-name">{applyErrors.name}</span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="modal-email" className={styles.label}>
                    Email Address <span className={styles.req}>(required)</span>
                  </label>
                  <input
                    type="email"
                    id="modal-email"
                    name="email"
                    value={applyForm.email}
                    onChange={handleApplyChange}
                    className={`${styles.input} ${applyErrors.email ? styles.inputError : ""}`}
                    placeholder="e.g. joydeep@gmail.com"
                    required
                  />
                  {applyErrors.email && (
                    <span className={styles.errorText} id="modal-error-email">{applyErrors.email}</span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="modal-resume" className={styles.label}>
                    Resume Link <span className={styles.req}>(required)</span>
                  </label>
                  <input
                    type="text"
                    id="modal-resume"
                    name="resumeUrl"
                    value={applyForm.resumeUrl}
                    onChange={handleApplyChange}
                    className={`${styles.input} ${applyErrors.resumeUrl ? styles.inputError : ""}`}
                    placeholder="e.g. link to Google Drive / LinkedIn PDF"
                    required
                  />
                  {applyErrors.resumeUrl && (
                    <span className={styles.errorText} id="modal-error-resume">{applyErrors.resumeUrl}</span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="modal-cover" className={styles.label}>
                    Brief Cover Note <span className={styles.req}>(optional)</span>
                  </label>
                  <textarea
                    id="modal-cover"
                    name="coverNote"
                    value={applyForm.coverNote}
                    onChange={handleApplyChange}
                    className={styles.textarea}
                    placeholder="Tell us about your technical expertise or scaling alignment..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%" }}
                  id="modal-submit-application-btn"
                >
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
