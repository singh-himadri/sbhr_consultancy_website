"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Jobs", href: "/jobs" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const rafRef = useRef(false);

  useEffect(() => {
    const measure = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;

      // Written straight to a custom property so the rail can update every
      // frame without re-rendering the header.
      headerRef.current?.style.setProperty("--scroll-progress", `${ratio}`);
      setScrolled(window.scrollY > 60);
    };

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = true;
      requestAnimationFrame(() => {
        measure();
        rafRef.current = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <div className={styles.headerSpacer} aria-hidden="true" />

      <header
        ref={headerRef}
        className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
        id="site-header"
      >
        <div className={styles.container}>
          <Link
            href="/"
            className={`${styles.logo} ${scrolled ? styles.logoScrolled : ""}`}
            onClick={closeDrawer}
            id="header-logo-link"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Logo.svg" alt="SBHR Logo" className={styles.logoImg} />
            <span className={styles.brandTitle}>
              <span className={styles.brandName}>
                SB<span className={styles.brandAccent}>HR</span>
              </span>{" "}
              <span className={styles.brandSub}>Consultancy</span>
            </span>
          </Link>

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

          <div className={`${styles.actions} ${scrolled ? styles.actionsScrolled : ""}`}>
            <Link href="/contact" className="btn btn-accent btn-sm" id="header-cta-btn">
              Hire Talent
            </Link>
          </div>

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

        {/* Reading progress for the current page */}
        <span className={styles.progress} aria-hidden="true" />
      </header>

      <div
        className={`${styles.backdrop} ${drawerOpen ? styles.backdropVisible : ""}`}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      <nav
        className={`${styles.drawer} ${drawerOpen ? styles.drawerOpen : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!drawerOpen}
      >
        <div className={styles.drawerNav}>
          {navItems.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.drawerLink} ${pathname === item.href ? styles.drawerLinkActive : ""}`}
              style={{ transitionDelay: drawerOpen ? `${120 + i * 55}ms` : "0ms" }}
              onClick={closeDrawer}
              tabIndex={drawerOpen ? 0 : -1}
              id={`drawer-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <span className={styles.drawerIndex}>0{i + 1}</span>
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="btn btn-accent"
          style={{ width: "100%" }}
          onClick={closeDrawer}
          tabIndex={drawerOpen ? 0 : -1}
          id="drawer-cta-btn"
        >
          Hire Talent
        </Link>
      </nav>
    </>
  );
}
