"use client";

import React, { useEffect, useState } from "react";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";
import styles from "./jobs.module.css";

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
  details?: string;
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

const EMPTY_FORM: ApplyForm = { name: "", email: "", resumeUrl: "", coverNote: "" };

interface JobsClientProps {
  jobs: JobOpening[];
}

// Simple Markdown to HTML parser for expanded card view
function renderMarkdown(md: string) {
  if (!md) return "";
  
  // Replace HTML characters to prevent XSS
  let html = md
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Bold (**bold**)
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  // Headings (###, ##, #)
  html = html.replace(/^### (.*?)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.*?)$/gm, "<h2>$1</h2>");
  html = html.replace(/^# (.*?)$/gm, "<h1>$1</h1>");

  // Parse Lists (- item or * item)
  const lines = html.split("\n");
  let inList = false;
  const processedLines = lines.map((line) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      const content = trimmed.substring(2);
      let prefix = "";
      if (!inList) {
        inList = true;
        prefix = "<ul>";
      }
      return `${prefix}<li>${content}</li>`;
    } else {
      let suffix = "";
      if (inList) {
        inList = false;
        suffix = "</ul>";
      }
      // Wrap non-empty, non-list, non-header lines in paragraphs
      if (trimmed && !trimmed.startsWith("<h") && !trimmed.startsWith("<ul") && !trimmed.startsWith("</ul")) {
        return `${suffix}<p>${line}</p>`;
      }
      return `${suffix}${line}`;
    }
  });
  
  if (inList) {
    processedLines.push("</ul>");
  }

  return processedLines.join("\n");
}

export default function JobsClient({ jobs }: JobsClientProps) {
  const [deptFilter, setDeptFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");

  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);

  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [applyForm, setApplyForm] = useState<ApplyForm>(EMPTY_FORM);
  const [applyErrors, setApplyErrors] = useState<ApplyErrors>({});
  const [applySuccess, setApplySuccess] = useState(false);

  const filteredJobs = jobs.filter((job) => {
    const matchesDept = deptFilter === "All" || job.department === deptFilter;
    const matchesType = typeFilter === "All" || job.type === typeFilter;
    return matchesDept && matchesType;
  });

  const toggleExpand = (jobId: string) => {
    setExpandedJobId(expandedJobId === jobId ? null : jobId);
  };

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
        <Reveal variant="fade">
          <div className={styles.filterBar}>
            <div className={styles.filterGroup}>
              <div className={styles.filterField}>
                <label htmlFor="dept-select" className={styles.filterLabel}>
                  Department
                </label>
                <select
                  id="dept-select"
                  value={deptFilter}
                  onChange={(e) => {
                    setDeptFilter(e.target.value);
                    setExpandedJobId(null); // Reset expanded card when filters change
                  }}
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
                  onChange={(e) => {
                    setTypeFilter(e.target.value);
                    setExpandedJobId(null); // Reset expanded card when filters change
                  }}
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

      {/* ── Grid Layout of Expanding Cards ────────────────── */}
      <section className={expandedJobId ? "container-wide" : "container"} id="jobs-grid-section">
        {filteredJobs.length > 0 ? (
          <div className={`${styles.layoutContainer} ${expandedJobId ? styles.hasExpanded : ""}`}>
            <div className={styles.jobsList}>
              {filteredJobs.map((job) => {
                const isExpanded = expandedJobId === job.id;
                return (
                  <div
                    key={job.id}
                    className={`${styles.jobCard} ${isExpanded ? styles.expandedCard : ""}`}
                    onClick={() => toggleExpand(job.id)}
                    id={`job-card-${job.id}`}
                  >
                    <div className={styles.cardHeader}>
                      <h4 className={styles.jobTitle}>{job.title}</h4>
                      <div className={styles.tags}>
                        <span className={`${styles.tag} ${styles.tagDept}`}>{job.department}</span>
                        <span className={`${styles.tag} ${styles.tagType}`}>{job.type}</span>
                      </div>
                    </div>

                    <p className={styles.jobDesc}>{job.description}</p>

                    {!isExpanded ? (
                      <div className={styles.cardFooter}>
                        <span className={styles.location}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          {job.location}
                        </span>
                        <span className={styles.viewDetailsText}>
                          View Details
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </span>
                      </div>
                    ) : (
                      <>
                        <div className={styles.expandedContent} onClick={(e) => e.stopPropagation()}>
                          <hr className={styles.divider} />
                          <div className={styles.locationExpanded}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                              <circle cx="12" cy="10" r="3" />
                            </svg>
                            {job.location}
                          </div>
                          
                          <div
                            className={styles.detailsBody}
                            dangerouslySetInnerHTML={{
                              __html: renderMarkdown(job.details || job.description),
                            }}
                          />
                          
                          <div className={styles.cardFooterExpanded}>
                            <button
                              onClick={() => openApplyModal(job)}
                              className="btn btn-primary"
                              id={`apply-btn-${job.id}`}
                            >
                              Apply Now
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                              </svg>
                            </button>
                            <button
                              onClick={() => setExpandedJobId(null)}
                              className={styles.collapseButton}
                              id={`collapse-btn-${job.id}`}
                            >
                              Show Less
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                                <polyline points="18 15 12 9 6 15" />
                              </svg>
                            </button>
                          </div>
                        </div>

                        <div className={styles.desktopActiveCardFooter}>
                          <span className={styles.location}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                              <circle cx="12" cy="10" r="3" />
                            </svg>
                            {job.location}
                          </span>
                          <span className={styles.viewDetailsText}>
                            Selected
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true" style={{ transform: "rotate(180deg)" }}>
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>

            {expandedJobId && (() => {
              const job = filteredJobs.find((j) => j.id === expandedJobId);
              if (!job) return null;
              return (
                <div className={styles.detailsPanel} id="job-details-panel">
                  <div className={styles.detailsHeader}>
                    <div className={styles.detailsHeaderLeft}>
                      <h3 className={styles.detailsTitle}>{job.title}</h3>
                      <div className={styles.tags}>
                        <span className={`${styles.tag} ${styles.tagDept}`}>{job.department}</span>
                        <span className={`${styles.tag} ${styles.tagType}`}>{job.type}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setExpandedJobId(null)}
                      className={styles.closeDetailsButton}
                      aria-label="Close details"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </div>

                  <hr className={styles.divider} />

                  <div className={styles.detailsContent}>
                    <div className={styles.locationExpanded}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {job.location}
                    </div>

                    <div
                      className={styles.detailsBody}
                      dangerouslySetInnerHTML={{
                        __html: renderMarkdown(job.details || job.description),
                      }}
                    />
                  </div>

                  <div className={styles.detailsFooter}>
                    <button
                      onClick={() => openApplyModal(job)}
                      className="btn btn-primary"
                      id={`apply-btn-detail-${job.id}`}
                    >
                      Apply Now
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
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
