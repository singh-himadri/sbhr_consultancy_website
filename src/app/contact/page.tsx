"use client";

import React, { useState } from "react";
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

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "Hiring Talent",
  });

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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear validation error when editing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Mock Contact Form Submitted:", formData);
      setSubmitted(true);
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        inquiryType: "Hiring Talent",
      });
      setErrors({});
    }
  };

  return (
    <div className={styles.contactPage}>
      {/* Header */}
      <section className={`container ${styles.header}`} id="contact-header">
        <span className={styles.subtitle}>Get In Touch</span>
        <h1 className={styles.title}>Connect with Our HR Specialists</h1>
        <p className={styles.desc}>
          Have hiring needs or looking for your next technology milestone? Drop us a line. Our consulting team is here to assist.
        </p>
      </section>

      {/* Grid container */}
      <section className={`container ${styles.grid}`} id="contact-grid">
        {/* Form Card */}
        <div className={styles.formCard} id="contact-form-card">
          <h2 className={styles.formTitle}>Send a Message</h2>

          {submitted && (
            <div className={styles.successMsg} id="contact-success-banner">
              <h3 className={styles.successTitle}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Inquiry Received Successfully!
              </h3>
              <p>Thank you for contacting SBHR Consultancy. An HR specialist will review your details and reach out within 24 hours.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className={styles.form} noValidate id="contact-inquiry-form">
            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Your Name (required)
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="e.g. Joydeep Sen"
                  required
                />
                {errors.name && <span className={styles.errorText} id="error-name">{errors.name}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Your Email (required)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="e.g. joydeep@company.com"
                  required
                />
                {errors.email && <span className={styles.errorText} id="error-email">{errors.email}</span>}
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
                  <option value="Looking for Job">Looking for an IT Job</option>
                  <option value="General Inquiry">General Business Inquiry</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>
                  Subject (required)
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="e.g. Scaling Tech Team / Hiring Developers"
                  required
                />
                {errors.subject && <span className={styles.errorText} id="error-subject">{errors.subject}</span>}
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Your Message (required)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                placeholder="Describe your tech requirements, roles needed, or career interests in detail..."
                required
              />
              {errors.message && <span className={styles.errorText} id="error-message">{errors.message}</span>}
            </div>

            <button type="submit" className="btn btn-primary" style={{ alignSelf: "flex-start" }} id="contact-submit-btn">
              Send Message
            </button>
          </form>
        </div>

        {/* Sidebar */}
        <div className={styles.sidebar}>
          {/* Details Card */}
          <div className={styles.infoCard} id="contact-info-card">
            <h2 className={styles.infoTitle}>Contact Information</h2>
            <ul className={styles.infoList}>
              <li className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 className={styles.infoLabel}>Office Address</h4>
                  <p className={styles.infoValue}>Kolkata, West Bengal, India</p>
                </div>
              </li>

              <li className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h4 className={styles.infoLabel}>Email Inquiries</h4>
                  <a href="mailto:info@sbhrconsultancy.in" className={styles.infoValue} style={{ color: "var(--color-accent)" }} id="info-email-link">
                    info@sbhrconsultancy.in
                  </a>
                </div>
              </li>

              <li className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4 className={styles.infoLabel}>Call Support</h4>
                  <a href="tel:+913312345678" className={styles.infoValue} id="info-phone-link">
                    +91 (033) 1234-5678
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Operating Hours Card */}
          <div className={styles.hoursCard} id="contact-hours-card">
            <h3 className={styles.hoursTitle}>
              <svg
                className={styles.hoursIcon}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              Office Operating Hours
            </h3>
            <ul className={styles.hoursList}>
              <li className={styles.hoursRow}>
                <span>Monday - Friday</span>
                <span style={{ fontWeight: 600 }}>9:00 AM - 6:00 PM</span>
              </li>
              <li className={styles.hoursRow}>
                <span>Saturday</span>
                <span style={{ fontWeight: 600 }}>9:00 AM - 1:00 PM</span>
              </li>
              <li className={styles.hoursRow}>
                <span>Sunday</span>
                <span style={{ color: "var(--color-accent)", fontWeight: 600 }}>Closed</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
