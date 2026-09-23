"use client";

import React, { useState, useEffect } from "react";
import styles from "./admin.module.css";
import { JobOpening } from "../jobs/JobsClient";
import logoImg from "../../../public/Logo.svg";


interface AdminClientProps {
  initialJobs: JobOpening[];
}

interface GitHubFileItem {
  name: string;
  path: string;
  sha: string;
  download_url: string;
}

interface ConfirmState {
  isOpen: boolean;
  title: string;
  message: string;
  confirmText: string;
  variant: "danger" | "warning";
  onConfirm: () => void;
}

interface PendingAction {
  type: "save" | "delete";
  job: JobOpening;
}

const DEPARTMENTS = [
  "Creative Media",
  "Education Systems",
  "Energy Infrastructure",
  "Engineering",
  "Financial Ecosystems",
  "Hospitality Services",
  "Industrial Production",
  "IT & ITES",
  "Life Sciences",
  "Retail & E-Commerce",
  "Supply Chain",
  "Urban Infrastructure",
  "Design",
  "Operations",
];

const JOB_TYPES = ["Full-Time", "Contract", "Part-Time", "Remote", "Internship"];

const EMPTY_JOB: JobOpening = {
  id: "",
  title: "",
  department: "IT & ITES",
  type: "Full-Time",
  location: "Kolkata, India (Hybrid)",
  description: "",
  details: "",
  status: "listed",
};

export default function AdminClient({ initialJobs }: AdminClientProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  const [jobs, setJobs] = useState<JobOpening[]>(initialJobs);
  const [fileShas, setFileShas] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  // Draft Pending Changes (batched before committing to GitHub)
  const [pendingChanges, setPendingChanges] = useState<Record<string, PendingAction>>({});
  const [isCommitting, setIsCommitting] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState<JobOpening>(EMPTY_JOB);
  const [isNew, setIsNew] = useState(true);

  const [confirmState, setConfirmState] = useState<ConfirmState>({
    isOpen: false,
    title: "",
    message: "",
    confirmText: "Confirm",
    variant: "danger",
    onConfirm: () => {},
  });

  const [toast, setToast] = useState<{ type: "success" | "error" | "info"; text: string } | null>(null);

  // Helper to get active GitHub token (env or localStorage)
  const getToken = () => {
    return process.env.NEXT_PUBLIC_GITHUB_TOKEN || localStorage.getItem("sbhr_admin_pat") || "";
  };

  // Ensure token exists, prompting user if missing
  const ensureToken = () => {
    let token = getToken();
    if (!token) {
      const input = prompt(
        "First-time setup: Enter your GitHub Access Token (PAT) to enable publishing directly to GitHub:"
      );
      if (input && input.trim()) {
        token = input.trim();
        localStorage.setItem("sbhr_admin_pat", token);
      }
    }
    return token;
  };

  const handleSetToken = () => {
    const current = localStorage.getItem("sbhr_admin_pat") || "";
    const input = prompt("Enter or update your GitHub Personal Access Token (PAT):", current);
    if (input !== null) {
      const trimmed = input.trim();
      localStorage.setItem("sbhr_admin_pat", trimmed);
      showToast("GitHub Token saved!", "success");
      if (trimmed) fetchJobsFromGitHub(trimmed);
    }
  };

  // Prevent background page scrolling when modal or login overlay is active
  useEffect(() => {
    if (!isAuthenticated || isModalOpen || confirmState.isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isAuthenticated, isModalOpen, confirmState.isOpen]);

  // Check auth on mount
  useEffect(() => {
    const isAuth = sessionStorage.getItem("sbhr_admin_auth") === "true";
    setIsAuthenticated(isAuth);

    const tokenToUse = getToken();
    if (isAuth && tokenToUse) {
      fetchJobsFromGitHub(tokenToUse);
    }
  }, []);

  const showToast = (text: string, type: "success" | "error" | "info" = "info") => {
    setToast({ text, type });
    setTimeout(() => setToast(null), 4000);
  };

  // Login submission
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (usernameInput.trim() === "sbhradmin" && passwordInput.trim() === "sbhrpassword") {
      sessionStorage.setItem("sbhr_admin_auth", "true");
      setIsAuthenticated(true);
      setLoginError("");

      const activeToken = getToken();
      if (activeToken) {
        fetchJobsFromGitHub(activeToken);
      }
    } else {
      setLoginError("Invalid username or password.");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("sbhr_admin_auth");
    setIsAuthenticated(false);
  };

  // Fetch real-time job files from GitHub API
  const fetchJobsFromGitHub = async (tokenToUse: string) => {
    if (!tokenToUse) return;
    setIsLoading(true);
    try {
      const res = await fetch(
        "https://api.github.com/repos/singh-himadri/sbhr_consultancy_website/contents/src/content/jobs",
        {
          headers: {
            Authorization: `token ${tokenToUse}`,
            Accept: "application/vnd.github.v3+json",
          },
        }
      );

      if (!res.ok) {
        if (res.status === 401) {
          throw new Error("Bad credentials");
        }
        throw new Error(`GitHub API Error: ${res.statusText}`);
      }

      const files: GitHubFileItem[] = await res.json();
      const jsonFiles = files.filter((f) => f.name.endsWith(".json"));

      const shas: Record<string, string> = {};
      const loadedJobs: JobOpening[] = [];

      for (const file of jsonFiles) {
        const contentRes = await fetch(file.download_url);
        if (contentRes.ok) {
          const jobData: JobOpening = await contentRes.json();
          if (jobData && jobData.id) {
            shas[jobData.id] = file.sha;
            if (!jobData.status) jobData.status = "listed";
            loadedJobs.push(jobData);
          }
        }
      }

      setJobs(loadedJobs);
      setFileShas(shas);
    } catch (err: any) {
      console.error(err);
      if (err.message === "Bad credentials") {
        showToast("GitHub Token invalid or expired. Click 'Set Token' to update.", "error");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Open modal for new job
  const handleOpenAddModal = () => {
    setIsNew(true);
    setEditingJob({
      ...EMPTY_JOB,
      id: `job-${Date.now().toString(36)}`,
      status: "listed",
    });
    setIsModalOpen(true);
  };

  // Open modal for editing job
  const handleOpenEditModal = (job: JobOpening) => {
    setIsNew(false);
    setEditingJob({ status: job.status || "listed", ...job });
    setIsModalOpen(true);
  };

  // Local Draft: Save or Edit job locally
  const handleSaveJobDraft = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingJob.id.trim() || !editingJob.title.trim()) {
      showToast("Job ID and Title are required.", "error");
      return;
    }

    // Update local jobs list
    setJobs((prev) => {
      const filtered = prev.filter((j) => j.id !== editingJob.id);
      return [editingJob, ...filtered];
    });

    // Queue for GitHub Commit
    setPendingChanges((prev) => ({
      ...prev,
      [editingJob.id]: { type: "save", job: editingJob },
    }));

    setIsModalOpen(false);
    showToast(`Draft saved: "${editingJob.title}". Click "Commit Changes" to push to GitHub.`, "info");
  };

  // Local Draft: Toggle Unlist / Relist status locally
  const handleToggleStatusDraft = (job: JobOpening) => {
    const newStatus = job.status === "unlisted" ? "listed" : "unlisted";
    const updatedJob: JobOpening = { ...job, status: newStatus };

    // Update local jobs list
    setJobs((prev) => prev.map((j) => (j.id === job.id ? updatedJob : j)));

    // Queue for GitHub Commit
    setPendingChanges((prev) => ({
      ...prev,
      [job.id]: { type: "save", job: updatedJob },
    }));

    showToast(
      newStatus === "unlisted"
        ? `Draft: "${job.title}" marked as Unlisted. Click "Commit Changes" to publish.`
        : `Draft: "${job.title}" marked as Listed. Click "Commit Changes" to publish.`,
      "info"
    );
  };

  // Local Draft: Request Delete job locally
  const requestDeleteJobDraft = (job: JobOpening) => {
    setConfirmState({
      isOpen: true,
      title: "Queue Job for Deletion",
      message: `Are you sure you want to queue "${job.title}" for deletion? This change will be committed when you click "Commit Changes".`,
      confirmText: "Queue Deletion",
      variant: "danger",
      onConfirm: () => executeDeleteJobDraft(job),
    });
  };

  // Local Draft: Execute Delete job locally
  const executeDeleteJobDraft = (job: JobOpening) => {
    setConfirmState((prev) => ({ ...prev, isOpen: false }));

    // Remove from local jobs list
    setJobs((prev) => prev.filter((j) => j.id !== job.id));

    // Queue for GitHub Deletion Commit
    setPendingChanges((prev) => ({
      ...prev,
      [job.id]: { type: "delete", job },
    }));

    showToast(`Draft: "${job.title}" queued for deletion. Click "Commit Changes" to publish.`, "info");
  };

  // BATCH COMMIT: Push all pending draft changes to GitHub in 1 SINGLE ATOMIC COMMIT
  const handleCommitAllChanges = async () => {
    const pendingList = Object.values(pendingChanges);
    if (pendingList.length === 0) return;

    const activeToken = ensureToken();
    if (!activeToken) {
      showToast("GitHub Access Token required to commit changes.", "error");
      return;
    }

    setIsCommitting(true);
    showToast(`Committing ${pendingList.length} draft change(s) in 1 single commit...`, "info");

    const repoOwner = "singh-himadri";
    const repoName = "sbhr_consultancy_website";
    const branch = "main";
    const headers = {
      Authorization: `token ${activeToken}`,
      Accept: "application/vnd.github.v3+json",
      "Content-Type": "application/json",
    };

    try {
      // 1. Get latest commit SHA on main branch
      const refRes = await fetch(
        `https://api.github.com/repos/${repoOwner}/${repoName}/git/refs/heads/${branch}`,
        { headers }
      );
      if (!refRes.ok) {
        if (refRes.status === 401) {
          const newToken = prompt("Bad Credentials: Your GitHub Token is invalid or expired. Enter a valid GitHub PAT:");
          if (newToken && newToken.trim()) {
            localStorage.setItem("sbhr_admin_pat", newToken.trim());
          }
          throw new Error("Bad credentials");
        }
        throw new Error("Failed to get latest branch ref");
      }
      const refData = await refRes.json();
      const latestCommitSha = refData.object.sha;

      // 2. Get tree SHA of the latest commit
      const commitRes = await fetch(
        `https://api.github.com/repos/${repoOwner}/${repoName}/git/commits/${latestCommitSha}`,
        { headers }
      );
      if (!commitRes.ok) throw new Error("Failed to get base commit tree");
      const commitData = await commitRes.json();
      const baseTreeSha = commitData.tree.sha;

      // 3. Build Git tree array payload for all modified/deleted jobs
      const treeItems = pendingList.map((action) => {
        const path = `src/content/jobs/${action.job.id}.json`;
        if (action.type === "save") {
          return {
            path,
            mode: "100644",
            type: "blob",
            content: JSON.stringify(action.job, null, 2),
          };
        } else {
          // Deleting file: setting sha to null removes it from Git tree
          return {
            path,
            mode: "100644",
            type: "blob",
            sha: null,
          };
        }
      });

      // 4. Create new Git Tree
      const createTreeRes = await fetch(
        `https://api.github.com/repos/${repoOwner}/${repoName}/git/trees`,
        {
          method: "POST",
          headers,
          body: JSON.stringify({
            base_tree: baseTreeSha,
            tree: treeItems,
          }),
        }
      );
      if (!createTreeRes.ok) throw new Error("Failed to create Git tree");
      const treeData = await createTreeRes.json();
      const newTreeSha = treeData.sha;

      // 5. Create 1 single Git Commit
      const createCommitRes = await fetch(
        `https://api.github.com/repos/${repoOwner}/${repoName}/git/commits`,
        {
          method: "POST",
          headers,
          body: JSON.stringify({
            message: `Admin batch update: ${pendingList.length} job opening(s)`,
            tree: newTreeSha,
            parents: [latestCommitSha],
          }),
        }
      );
      if (!createCommitRes.ok) throw new Error("Failed to create commit");
      const newCommitData = await createCommitRes.json();
      const newCommitSha = newCommitData.sha;

      // 6. Update main branch ref to point to new single commit
      const updateRefRes = await fetch(
        `https://api.github.com/repos/${repoOwner}/${repoName}/git/refs/heads/${branch}`,
        {
          method: "PATCH",
          headers,
          body: JSON.stringify({
            sha: newCommitSha,
            force: false,
          }),
        }
      );
      if (!updateRefRes.ok) throw new Error("Failed to update branch ref");

      // Success! Reset pending drafts and sync GitHub state
      setPendingChanges({});
      showToast(
        `Batch commit successful! 1 commit pushed for ${pendingList.length} change(s). Pipeline triggered once.`,
        "success"
      );

      fetchJobsFromGitHub(activeToken);
    } catch (err: any) {
      console.error("Batch commit failed:", err);
      showToast(`Batch commit failed: ${err.message}`, "error");
    } finally {
      setIsCommitting(false);
    }
  };


  const pendingCount = Object.keys(pendingChanges).length;

  // Render Login View if unauthenticated
  if (!isAuthenticated) {
    return (
      <div className={styles.loginOverlay}>
        <div className={styles.loginCard}>
          <div className={styles.loginBrand}>
            <img src={logoImg.src} alt="SBHR Logo" />
            <h2>SBHR Job Portal Admin</h2>
          </div>
          <p>Enter your credentials to access the job management dashboard.</p>

          {loginError && <div className={styles.errorMsg}>{loginError}</div>}

          <form onSubmit={handleLogin}>
            <div className={styles.formGroup}>
              <label htmlFor="admin-user">Username</label>
              <input
                type="text"
                id="admin-user"
                value={usernameInput}
                onChange={(e) => setUsernameInput(e.target.value)}
                placeholder="username"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="admin-pass">Password</label>
              <div className={styles.passwordWrapper}>
                <input
                  type={showPassword ? "text" : "password"}
                  id="admin-pass"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  className={styles.eyeBtn}
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  title={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <button type="submit" className={styles.btnPrimary}>
              Sign In to Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.adminPage}>
      {/* Top Navigation */}
      <header className={styles.topNav}>
        <div className={styles.navBrand}>
          <img src={logoImg.src} alt="SBHR Logo" />
          <h1>SBHR Admin Portal</h1>
        </div>
        <div className={styles.navActions}>
          {pendingCount > 0 && (
            <button
              onClick={handleCommitAllChanges}
              disabled={isCommitting}
              className={styles.btnCommit}
              title="Push all pending draft changes to GitHub"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                <polyline points="17 21 17 13 7 13 7 21" />
                <polyline points="7 3 7 8 15 8" />
              </svg>
              {isCommitting ? "Pushing..." : `Commit Changes (${pendingCount})`}
            </button>
          )}

          <button onClick={handleSetToken} className={styles.btnSecondary} title="Configure GitHub Access Token">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
            </svg>
            Set Token
          </button>
          <button onClick={handleLogout} className={styles.btnDanger}>
            Logout
          </button>
        </div>
      </header>

      {/* Main Dashboard */}
      <main className={styles.mainContent}>
        {/* Uncommitted Draft Banner */}
        {pendingCount > 0 && (
          <div className={styles.pendingBanner}>
            <div className={styles.pendingBannerText}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              You have <span className={styles.pendingBadge}>{pendingCount} uncommitted change(s)</span> in your draft.
            </div>
            <button
              onClick={handleCommitAllChanges}
              disabled={isCommitting}
              className={styles.btnCommit}
              style={{ animation: "none" }}
            >
              {isCommitting ? "Pushing ..." : "Commit & Push"}
            </button>
          </div>
        )}

        <div className={styles.dashboardHeader}>
          <div className={styles.dashboardTitle}>
            <h2>Manage Job Openings</h2>
            <p>Make local draft edits, then click <strong>Commit Changes</strong> to push to GitHub.</p>
          </div>
          <button onClick={handleOpenAddModal} className={styles.btnPrimary} style={{ width: "auto", padding: "12px 24px" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Add New Job
          </button>
        </div>

        {/* Jobs Table */}
        <div className={styles.tableContainer}>
          <table className={styles.jobsTable}>
            <thead>
              <tr>
                <th>Job Title & ID</th>
                <th>Status</th>
                <th>Department</th>
                <th>Job Type</th>
                <th>Location</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.length > 0 ? (
                jobs.map((job) => {
                  const isUnlisted = job.status === "unlisted";
                  const hasPending = Boolean(pendingChanges[job.id]);
                  return (
                    <tr key={job.id} style={hasPending ? { backgroundColor: "#fefce8" } : undefined}>
                      <td>
                        <div className={styles.jobTitleCell}>
                          {job.title}
                          {hasPending && <span style={{ marginLeft: "8px", fontSize: "0.75rem", color: "#d97706", fontWeight: 700 }}>(Draft)</span>}
                        </div>
                        <div className={styles.jobIdSub}>{job.id}</div>
                      </td>
                      <td>
                        <span className={`${styles.badge} ${isUnlisted ? styles.badgeUnlisted : styles.badgeListed}`}>
                          {isUnlisted ? "○ Unlisted" : "● Listed"}
                        </span>
                      </td>
                      <td>
                        <span className={`${styles.badge} ${styles.badgeDept}`}>{job.department}</span>
                      </td>
                      <td>
                        <span className={`${styles.badge} ${styles.badgeType}`}>{job.type}</span>
                      </td>
                      <td>{job.location}</td>
                      <td>
                        <div className={styles.tableActions}>
                          <button onClick={() => handleOpenEditModal(job)} className={styles.btnSecondary} style={{ padding: "6px 12px" }}>
                            Edit
                          </button>
                          <button
                            onClick={() => handleToggleStatusDraft(job)}
                            className={isUnlisted ? styles.btnSuccess : styles.btnWarning}
                          >
                            {isUnlisted ? "Relist" : "Unlist"}
                          </button>
                          <button onClick={() => requestDeleteJobDraft(job)} className={styles.btnDanger}>
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={6} style={{ textAlign: "center", padding: "40px", color: "#94a3b8" }}>
                    {isLoading ? "Fetching job positions..." : "No job openings found. Click 'Add New Job' to create one."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>

      {/* Add / Edit Job Modal */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3>{isNew ? "Create New Job Opening" : `Edit Job: ${editingJob.title}`}</h3>
              <button onClick={() => setIsModalOpen(false)} className={styles.closeBtn}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSaveJobDraft}>
              <div className={styles.modalBody}>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label>Job Title</label>
                    <input
                      type="text"
                      value={editingJob.title}
                      onChange={(e) => {
                        const titleVal = e.target.value;
                        const generatedSlug = titleVal
                          .toLowerCase()
                          .replace(/[^a-z0-9]+/g, "-")
                          .replace(/(^-|-$)/g, "");
                        setEditingJob((prev) => ({
                          ...prev,
                          title: titleVal,
                          id: isNew ? generatedSlug || prev.id : prev.id,
                        }));
                      }}
                      placeholder="e.g. Senior Full Stack Engineer"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Unique ID (Slug)</label>
                    <input
                      type="text"
                      value={editingJob.id}
                      onChange={(e) => setEditingJob((prev) => ({ ...prev, id: e.target.value }))}
                      placeholder="senior-full-stack-engineer"
                      disabled={!isNew}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Listing Status</label>
                    <select
                      value={editingJob.status || "listed"}
                      onChange={(e) =>
                        setEditingJob((prev) => ({
                          ...prev,
                          status: e.target.value as "listed" | "unlisted",
                        }))
                      }
                    >
                      <option value="listed">Listed (Publicly Visible)</option>
                      <option value="unlisted">Unlisted (Hidden from Public)</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label>Department</label>
                    <select
                      value={editingJob.department}
                      onChange={(e) => setEditingJob((prev) => ({ ...prev, department: e.target.value }))}
                    >
                      {DEPARTMENTS.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label>Job Type</label>
                    <select
                      value={editingJob.type}
                      onChange={(e) => setEditingJob((prev) => ({ ...prev, type: e.target.value }))}
                    >
                      {JOB_TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label>Location</label>
                    <input
                      type="text"
                      value={editingJob.location}
                      onChange={(e) => setEditingJob((prev) => ({ ...prev, location: e.target.value }))}
                      placeholder="e.g. Kolkata, India (Hybrid)"
                      required
                    />
                  </div>

                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label>Short Description (Card Summary)</label>
                    <textarea
                      rows={3}
                      value={editingJob.description}
                      onChange={(e) => setEditingJob((prev) => ({ ...prev, description: e.target.value }))}
                      placeholder="Brief 2-3 line summary shown on job cards..."
                      required
                    />
                  </div>

                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label>Full Details (Markdown / Detailed Description)</label>
                    <textarea
                      rows={8}
                      value={editingJob.details || ""}
                      onChange={(e) => setEditingJob((prev) => ({ ...prev, details: e.target.value }))}
                      placeholder="## Role Overview&#10;Detailed responsibilities and requirements..."
                    />
                  </div>
                </div>
              </div>

              <div className={styles.modalFooter}>
                <button type="button" onClick={() => setIsModalOpen(false)} className={styles.btnSecondary}>
                  Cancel
                </button>
                <button type="submit" className={styles.btnPrimary} style={{ width: "auto" }}>
                  Save to Draft
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Custom Confirmation Modal */}
      {confirmState.isOpen && (
        <div className={styles.modalOverlay} onClick={() => setConfirmState((prev) => ({ ...prev, isOpen: false }))}>
          <div className={styles.confirmCard} onClick={(e) => e.stopPropagation()}>
            <div className={`${styles.confirmIcon} ${confirmState.variant === "danger" ? styles.confirmIconDanger : styles.confirmIconWarning}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>
            <h3>{confirmState.title}</h3>
            <p>{confirmState.message}</p>
            <div className={styles.confirmActions}>
              <button
                type="button"
                onClick={() => setConfirmState((prev) => ({ ...prev, isOpen: false }))}
                className={styles.btnSecondary}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmState.onConfirm}
                className={styles.btnDanger}
                style={{ padding: "8px 16px" }}
              >
                {confirmState.confirmText}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Alert */}
      {toast && (
        <div
          className={`${styles.toast} ${
            toast.type === "success" ? styles.toastSuccess : toast.type === "error" ? styles.toastError : styles.toastInfo
          }`}
        >
          {toast.text}
        </div>
      )}
    </div>
  );
}
