import React from "react";
import Link from "next/link";
import Aurora from "../Aurora";
import styles from "./Footer.module.css";

import logoImg from "../../../public/Logo.svg";

const NAV_LINKS = [
  { label: "Home", href: "/", id: "footer-link-home" },
  { label: "Browse Jobs", href: "/jobs", id: "footer-link-jobs" },
  { label: "Our Services", href: "/services", id: "footer-link-services" },
  { label: "About Us", href: "/about", id: "footer-link-about" },
  { label: "Contact Us", href: "/contact", id: "footer-link-contact" },
];

const SERVICE_LINKS = [
  { label: "Permanent Recruitment", href: "/services#permanent", id: "footer-link-permanent" },
  { label: "Contract Staffing", href: "/services#contract", id: "footer-link-contract" },
  { label: "Workforce Solutions", href: "/services#workforce", id: "footer-link-workforce" },
  { label: "Executive Search", href: "/services#workforce", id: "footer-link-executive" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${styles.footer} aurora-host grid-overlay grid-overlay-light`}>
      <Aurora variant="dark" />

      <div className={`container ${styles.grid}`}>
        {/* ── Brand ──────────────────────────────────────── */}
        <div className={styles.brandCol}>
          <Link href="/" className={styles.logo} id="footer-logo-link">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoImg.src}
              alt="SBHR Logo"
              width={34}
              height={30}
              style={{ height: "30px", width: "auto", objectFit: "contain" }}
            />
            <span className={styles.logoText}>
              SB<span className={styles.logoAccent}>HR</span>{" "}
              <span className={styles.logoSub}>Consultancy</span>
            </span>
          </Link>

          <p className={styles.description}>
            Empowering organizations through smart technology and veteran-guided IT staffing.
            We deliver candidate matches within 24 hours.
          </p>

          <div className={styles.socials}>
            <a href="#" className={styles.socialIcon} aria-label="LinkedIn" id="footer-social-linkedin">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        {/* ── Navigation ─────────────────────────────────── */}
        <div className={styles.linkCol}>
          <h4 className={styles.title}>Navigation</h4>
          <ul className={styles.links}>
            {NAV_LINKS.map((item) => (
              <li key={item.id}>
                <Link href={item.href} className={styles.link} id={item.id}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Services ───────────────────────────────────── */}
        <div className={styles.linkCol}>
          <h4 className={styles.title}>Services</h4>
          <ul className={styles.links}>
            {SERVICE_LINKS.map((item) => (
              <li key={item.id}>
                <Link href={item.href} className={styles.link} id={item.id}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Contact ────────────────────────────────────── */}
        <div className={styles.linkCol}>
          <h4 className={styles.title}>Get In Touch</h4>
          <ul className={styles.contactInfo}>
            <li className={styles.contactItem}>
              <span className={styles.contactIconWrap}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <span>Kolkata, West Bengal, India</span>
            </li>
            <li className={styles.contactItem}>
              <span className={styles.contactIconWrap}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              <a href="mailto:info@sbhrconsultancy.in" className={styles.link} id="footer-email-link">
                info@sbhrconsultancy.in
              </a>
            </li>
            <li className={styles.contactItem}>
              <span className={styles.contactIconWrap}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <a href="tel:+913312345678" className={styles.link} id="footer-phone-link">
                +91 (033) 1234-5678
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.copyright}>
          &copy; {currentYear} SBHR Consultancy Pvt Ltd. All rights reserved.
        </p>
        <p className={styles.tagline}>Designed for minimal excellence.</p>
      </div>
    </footer>
  );
}
