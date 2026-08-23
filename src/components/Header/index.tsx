"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

const navItems = [
  { label: "Home",       href: "/" },
  { label: "Jobs",       href: "/jobs" },
  { label: "Services",   href: "/services" },
  { label: "About Us",   href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname  = usePathname();
  const rafRef    = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (!rafRef.current) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 60);
          rafRef.current = false;
        });
        rafRef.current = true;
      }
    };
    // Initialize state on mount
    setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      {/* ── Top announcement banner ───────────────────── */}
      {/* <div className={styles.banner}>
        <span>SBHR Consultancy expands GCC &amp; offshore IT staffing across India</span>
        <Link href="/contact" className={styles.bannerLink}>Find out more →</Link>
      </div> */}

      {/* Spacer to prevent layout shift and fixed header overlap */}
      <div className={styles.headerSpacer} aria-hidden="true" />

      {/* ── Sticky header ─────────────────────────────── */}
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`} id="site-header">
        <div className={styles.container}>
          
          {/* Logo container — single element that animates position, scale, and transform */}
          <Link
            href="/"
            className={`${styles.logo} ${scrolled ? styles.logoScrolled : ""}`}
            onClick={closeDrawer}
            id="header-logo-link"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Logo.svg" alt="SBHR Logo" className={styles.logoImg} />
            <span className={styles.brandTitle}>
              <span className={styles.brandName}>SB<span className={styles.brandAccent}>HR</span></span> <span className={styles.brandSub}>Consultancy</span>
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <nav
            className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}
            aria-label="Primary navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${pathname === item.href ? styles.navLinkActive : ""}`}
                id={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Action CTA Button */}
          <div className={`${styles.actions} ${scrolled ? styles.actionsScrolled : ""}`}>
            <Link href="/contact" className="btn btn-accent" id="header-cta-btn">
              Hire Talent
            </Link>
          </div>

          {/* Mobile Burger */}
          <button
            className={`${styles.burger} ${drawerOpen ? styles.burgerOpen : ""}`}
            onClick={() => setDrawerOpen((o) => !o)}
            aria-label="Toggle navigation"
            aria-expanded={drawerOpen}
            id="mobile-burger-btn"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile Backdrop */}
      <div
        className={`${styles.backdrop} ${drawerOpen ? styles.backdropVisible : ""}`}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <nav className={`${styles.drawer} ${drawerOpen ? styles.drawerOpen : ""}`} aria-label="Mobile navigation">
        <div className={styles.drawerNav}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.drawerLink} ${pathname === item.href ? styles.drawerLinkActive : ""}`}
              onClick={closeDrawer}
              id={`drawer-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link href="/contact" className="btn btn-primary" style={{ width: "100%", borderRadius: "12px" }} onClick={closeDrawer} id="drawer-cta-btn">
          Hire Talent
        </Link>
      </nav>
    </>
  );
}
