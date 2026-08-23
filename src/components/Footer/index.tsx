import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        {/* Brand Column */}
        <div className={styles.brandCol}>
          <Link href="/" className={styles.logo} id="footer-logo-link">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Logo.svg"
              alt="SBHR Logo"
              width={34}
              height={28}
              style={{ height: "28px", width: "auto", objectFit: "contain" }}
            />
            <span className={styles.logoText}>
              SB<span className={styles.logoAccent}>HR</span> <span className={styles.logoSub}>Consultancy</span>
            </span>
          </Link>
          <p className={styles.description}>
            Empowering organizations through smart technology and veteran-guided IT staffing. We deliver candidate matches within 24 hours.
          </p>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className={styles.title}>Navigation</h4>
          <ul className={styles.links}>
            <li>
              <Link href="/" className={styles.link} id="footer-link-home">
                Home
              </Link>
            </li>
            <li>
              <Link href="/jobs" className={styles.link} id="footer-link-jobs">
                Browse Jobs
              </Link>
            </li>
            <li>
              <Link href="/services" className={styles.link} id="footer-link-services">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/about" className={styles.link} id="footer-link-about">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className={styles.link} id="footer-link-contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Services Column */}
        <div>
          <h4 className={styles.title}>Services</h4>
          <ul className={styles.links}>
            <li>
              <Link href="/services#permanent" className={styles.link} id="footer-link-permanent">
                Permanent Recruitment
              </Link>
            </li>
            <li>
              <Link href="/services#contract" className={styles.link} id="footer-link-contract">
                Contract Staffing
              </Link>
            </li>
            <li>
              <Link href="/services#workforce" className={styles.link} id="footer-link-workforce">
                Workforce Solutions
              </Link>
            </li>
            <li>
              <Link href="/services#executive" className={styles.link} id="footer-link-executive">
                Executive Search
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div>
          <h4 className={styles.title}>Get In Touch</h4>
          <ul className={styles.contactInfo}>
            <li className={styles.contactItem}>
              <svg
                className={styles.contactIcon}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Kolkata, West Bengal, India</span>
            </li>
            <li className={styles.contactItem}>
              <svg
                className={styles.contactIcon}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a href="mailto:info@sbhrconsultancy.in" className={styles.link} id="footer-email-link">
                info@sbhrconsultancy.in
              </a>
            </li>
            <li className={styles.contactItem}>
              <svg
                className={styles.contactIcon}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <a href="tel:+913312345678" className={styles.link} id="footer-phone-link">
                +91 (033) 1234-5678
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.copyright}>
          &copy; {currentYear} SBHR Consultancy Pvt Ltd. All rights reserved. Designed for minimal excellence.
        </p>
        <div className={styles.socials}>
          <a href="#" className={styles.socialIcon} aria-label="LinkedIn" id="footer-social-linkedin">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a href="#" className={styles.socialIcon} aria-label="Twitter" id="footer-social-twitter">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
