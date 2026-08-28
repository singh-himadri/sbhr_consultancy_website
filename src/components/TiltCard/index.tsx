"use client";

import React, { useCallback, useRef } from "react";
import styles from "./TiltCard.module.css";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  /** Maximum rotation in degrees. */
  intensity?: number;
  id?: string;
}

/**
 * Card that tilts toward the pointer and carries a highlight that tracks the
 * cursor. Falls back to a plain container on touch devices and reduced motion.
 */
export default function TiltCard({
  children,
  className = "",
  intensity = 6,
  id,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);

  const handleMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (e.pointerType !== "mouse") return;
      const node = ref.current;
      if (!node) return;

      if (frame.current !== null) cancelAnimationFrame(frame.current);
      const { clientX, clientY } = e;

      frame.current = requestAnimationFrame(() => {
        const rect = node.getBoundingClientRect();
        const px = (clientX - rect.left) / rect.width;
        const py = (clientY - rect.top) / rect.height;

        node.style.setProperty("--tilt-x", `${(0.5 - py) * intensity * 2}deg`);
        node.style.setProperty("--tilt-y", `${(px - 0.5) * intensity * 2}deg`);
        node.style.setProperty("--spot-x", `${px * 100}%`);
        node.style.setProperty("--spot-y", `${py * 100}%`);
      });
    },
    [intensity]
  );

  const handleLeave = useCallback(() => {
    const node = ref.current;
    if (!node) return;
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    node.style.setProperty("--tilt-x", "0deg");
    node.style.setProperty("--tilt-y", "0deg");
  }, []);

  return (
    <div
      ref={ref}
      id={id}
      className={`${styles.tilt} ${className}`}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      <span className={styles.spotlight} aria-hidden="true" />
      <div className={styles.inner}>{children}</div>
    </div>
  );
}
