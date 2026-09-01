"use client";

import React, { useState } from "react";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";
import styles from "./contact.module.css";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  inquiryType: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
  inquiryType: "Hiring Talent",
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Full name is required.";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required.";
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        tempErrors.email = "Please enter a valid email address.";
        isValid = false;
      }
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message content is required.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Mock Contact Form Submitted:", formData);
      setSubmitted(true);
      setFormData(INITIAL_FORM);
      setErrors({});
    }
  };

  const fieldClass = (field: keyof FormErrors) =>
    `${styles.input} ${errors[field] ? styles.inputError : ""}`;

  return (
    <div className={styles.contactPage}>
      <PageHero
        id="contact-header"
        eyebrow="Get In Touch"
        title={
          <>
            Connect with Our <span className="gradient-text">HR Specialists</span>
          </>
        }
        lede="Have hiring needs or looking for your next technology milestone? Drop us a line. Our consulting team is here to assist."
      />

      <section className={`container ${styles.grid}`} id="contact-grid">
        {/* ── Form ───────────────────────────────────────── */}
        <Reveal variant="up">
          <div className={styles.formCard} id="contact-form-card">
            <div className={styles.formHead}>
              <h2 className={styles.formTitle}>Send a Message</h2>
              <p className={styles.formHint}>We reply to every enquiry within 24 hours.</p>
            </div>

            {submitted && (
              <div className={styles.successMsg} id="contact-success-banner" role="status">
                <span className={styles.successIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline className={styles.checkDraw} points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div>
                  <h3 className={styles.successTitle}>Inquiry Received Successfully!</h3>
                  <p className={styles.successBody}>
                    Thank you for contacting SBHR Consultancy. An HR specialist will review your
                    details and reach out within 24 hours.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className={styles.form} noValidate id="contact-inquiry-form">
              <div className={styles.row}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Your Name <span className={styles.req}>(required)</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={fieldClass("name")}
                    placeholder="e.g. Joydeep Sen"
                    required
                  />
                  {errors.name && (
                    <span className={styles.errorText} id="error-name">{errors.name}</span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Your Email <span className={styles.req}>(required)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={fieldClass("email")}
                    placeholder="e.g. joydeep@company.com"
                    required
                  />
                  {errors.email && (
                    <span className={styles.errorText} id="error-email">{errors.email}</span>
                  )}
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.formGroup}>
                  <label htmlFor="inquiryType" className={styles.label}>
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    <option value="Hiring Talent">Looking to Hire Talent</option>
                    <option value="Looking for Job">Looking for Job Opportunities</option>
                    <option value="General Inquiry">General Business Inquiry</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.label}>
                    Subject <span className={styles.req}>(required)</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={fieldClass("subject")}
                    placeholder="e.g. Scaling Tech Team / Hiring Developers"
                    required
                  />
                  {errors.subject && (
                    <span className={styles.errorText} id="error-subject">{errors.subject}</span>
                  )}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Your Message <span className={styles.req}>(required)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
                  placeholder="Describe your tech requirements, roles needed, or career interests in detail..."
                  required
                />
                {errors.message && (
                  <span className={styles.errorText} id="error-message">{errors.message}</span>
                )}
              </div>

              <button type="submit" className="btn btn-primary btn-lg" id="contact-submit-btn">
                Send Message
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
          </div>
        </Reveal>

        {/* ── Sidebar ────────────────────────────────────── */}
        <div className={styles.sidebar}>
          <Reveal variant="right" delay={120}>
            <div className={styles.infoCard} id="contact-info-card">
              <h2 className={styles.infoTitle}>Contact Information</h2>
              <ul className={styles.infoList}>
                <li className={styles.infoItem}>
                  <span className={styles.iconWrapper}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <span>
                    <span className={styles.infoLabel}>Office Address</span>
                    <span className={styles.infoValue}>Kolkata, West Bengal, India</span>
                  </span>
                </li>

                <li className={styles.infoItem}>
                  <span className={styles.iconWrapper}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  <span>
                    <span className={styles.infoLabel}>Email Inquiries</span>
                    <a
                      href="mailto:info@sbhrconsultancy.in"
                      className={`${styles.infoValue} ${styles.infoLink}`}
                      id="info-email-link"
                    >
                      info@sbhrconsultancy.in
                    </a>
                  </span>
                </li>

                <li className={styles.infoItem}>
                  <span className={styles.iconWrapper}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <span>
                    <span className={styles.infoLabel}>Call Support</span>
                    <a href="tel:+913312345678" className={`${styles.infoValue} ${styles.infoLink}`} id="info-phone-link">
                      +91 (033) 1234-5678
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal variant="right" delay={220}>
            <div className={styles.hoursCard} id="contact-hours-card">
              <h3 className={styles.hoursTitle}>
                <svg className={styles.hoursIcon} width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Office Operating Hours
              </h3>
              <ul className={styles.hoursList}>
                <li className={styles.hoursRow}>
                  <span>Monday - Friday</span>
                  <strong>9:00 AM - 6:00 PM</strong>
                </li>
                <li className={styles.hoursRow}>
                  <span>Saturday</span>
                  <strong>9:00 AM - 1:00 PM</strong>
                </li>
                <li className={styles.hoursRow}>
                  <span>Sunday</span>
                  <strong className={styles.closed}>Closed</strong>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal variant="right" delay={320}>
            <div className={styles.slaCard}>
              <span className={styles.slaPulse} aria-hidden="true" />
              <div>
                <strong className={styles.slaValue}>24h</strong>
                <span className={styles.slaLabel}>Average response time</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
