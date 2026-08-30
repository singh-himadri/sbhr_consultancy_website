"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

import logoImg from "../../../public/Logo.svg";

const SERVICE_LINKS = [
  { label: "Human Capital & Talent", href: "/services/human-capital", id: "nav-svc-hc" },
  { label: "Contact Centre & CX", href: "/services/contact-centre", id: "nav-svc-cx" },
  { label: "Business Process & Ops", href: "/services/business-process", id: "nav-svc-bpo" },
  { label: "Consulting & Advisory", href: "/services/consulting-advisory", id: "nav-svc-ca" },
  { label: "Global Workforce", href: "/services/global-workforce", id: "nav-svc-gw" },
];

const navItems = [
  { label: "Home", href: "/" },
  { label: "Jobs", href: "/jobs" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];


export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
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
            <img src={logoImg.src} alt="SBHR Logo" className={styles.logoImg} />
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
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div key={item.href} className={styles.navDropdownWrapper}>
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${pathname.startsWith("/services") ? styles.navLinkActive : ""}`}
                    id="nav-services"
                  >
                    {item.label}
                    <svg className={styles.navChevron} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </Link>
                  <div className={styles.dropdown} role="menu" aria-label="Services submenu">
                    <div className={styles.dropdownInner}>
                      <Link href="/services" className={styles.dropdownAll} id="nav-all-services" role="menuitem">
                        All Services
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                      </Link>
                      <span className={styles.dropdownDivider} aria-hidden="true" />
                      {SERVICE_LINKS.map((svc) => (
                        <Link
                          key={svc.id}
                          href={svc.href}
                          className={`${styles.dropdownItem} ${pathname === svc.href ? styles.dropdownItemActive : ""}`}
                          id={svc.id}
                          role="menuitem"
                        >
                          {svc.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.navLink} ${pathname === item.href ? styles.navLinkActive : ""}`}
                  id={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item.label}
                </Link>
              )
            )}
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
          {navItems.map((item, i) =>
            item.hasDropdown ? (
              <div key={item.href}>
                <button
                  className={`${styles.drawerLink} ${pathname.startsWith("/services") ? styles.drawerLinkActive : ""}`}
                  style={{ transitionDelay: drawerOpen ? `${120 + i * 55}ms` : "0ms", width: "100%", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                  onClick={() => setServicesExpanded((v) => !v)}
                  aria-expanded={servicesExpanded}
                  id="drawer-services-toggle"
                >
                  <span className={styles.drawerIndex}>0{i + 1}</span>
                  {item.label}
                  <svg className={`${styles.drawerChevron} ${servicesExpanded ? styles.drawerChevronOpen : ""}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginLeft: "auto" }}>
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {servicesExpanded && (
                  <div className={styles.drawerSubNav}>
                    <Link href="/services" className={styles.drawerSubLink} onClick={closeDrawer} id="drawer-all-services">All Services</Link>
                    {SERVICE_LINKS.map((svc) => (
                      <Link key={svc.id} href={svc.href} className={`${styles.drawerSubLink} ${pathname === svc.href ? styles.drawerSubLinkActive : ""}`} onClick={closeDrawer} id={`drawer-${svc.id}`}>{svc.label}</Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
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
            )
          )}
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
