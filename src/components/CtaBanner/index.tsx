import React from "react";
import Link from "next/link";
import Aurora from "../Aurora";
import Reveal from "../Reveal";
import styles from "./CtaBanner.module.css";

interface CtaAction {
  href: string;
  label: string;
  id?: string;
}

interface CtaBannerProps {
  eyebrow: string;
  title: string;
  desc: string;
  primary: CtaAction;
  secondary?: CtaAction;
  sectionId?: string;
}

/**
 * Closing call-to-action: deep navy aurora panel with translucent buttons.
 */
export default function CtaBanner({
  eyebrow,
  title,
  desc,
  primary,
  secondary,
  sectionId,
}: CtaBannerProps) {
  return (
    <section className="container" id={sectionId}>
      <Reveal variant="scale">
        <div className={`${styles.banner} aurora-host grid-overlay grid-overlay-light`}>
          <Aurora variant="dark" />

          <span className="eyebrow-pill eyebrow-pill-light">{eyebrow}</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.desc}>{desc}</p>

          <div className={styles.actions}>
            <Link href={primary.href} className="btn btn-accent btn-lg" id={primary.id}>
              {primary.label}
            </Link>
            {secondary && (
              <Link href={secondary.href} className="btn btn-glass btn-lg" id={secondary.id}>
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
