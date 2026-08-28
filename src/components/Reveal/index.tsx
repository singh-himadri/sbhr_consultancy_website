"use client";

import React, { useEffect, useRef } from "react";

export type RevealVariant =
  | "up"
  | "down"
  | "left"
  | "right"
  | "scale"
  | "blur"
  | "fade";

interface RevealProps {
  children: React.ReactNode;
  /** Rendered element. Defaults to a div. */
  as?: React.ElementType;
  variant?: RevealVariant;
  /** Stagger offset in milliseconds. */
  delay?: number;
  /** Fraction of the element that must be visible before revealing. */
  threshold?: number;
  /** Re-hide and replay the animation when scrolled away. */
  repeat?: boolean;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}

/**
 * Reveals its children when they scroll into view. Elements render hidden and
 * transition in via the `.reveal` classes defined in globals.css.
 *
 * The visibility class is toggled straight on the node rather than held in
 * state, so scrolling past a long page never triggers a re-render.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  variant = "up",
  delay = 0,
  threshold = 0.15,
  repeat = false,
  className = "",
  style,
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Older browsers and reduced-motion users get the content immediately.
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      node.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          if (!repeat) observer.unobserve(entry.target);
        } else if (repeat) {
          node.classList.remove("is-visible");
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, repeat]);

  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal reveal-${variant} ${className}`.trim()}
      style={{ ...style, ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
