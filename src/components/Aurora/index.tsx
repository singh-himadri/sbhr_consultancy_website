import React from "react";

type AuroraVariant = "light" | "dark" | "warm" | "cool";

interface Blob {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  size: string;
  color: string;
  opacity: number;
  duration: number;
  /** Negative delay desynchronises the blobs so they never move in lockstep. */
  delay: number;
}

const PRESETS: Record<AuroraVariant, Blob[]> = {
  light: [
    { top: "-14%", left: "-8%", size: "46vw", color: "#1D7DC4", opacity: 0.3, duration: 24, delay: 0 },
    { top: "8%", right: "-12%", size: "40vw", color: "#E68100", opacity: 0.22, duration: 30, delay: -8 },
    { bottom: "-22%", left: "28%", size: "44vw", color: "#3FC4E8", opacity: 0.24, duration: 27, delay: -15 },
  ],
  cool: [
    { top: "-20%", left: "10%", size: "42vw", color: "#1D7DC4", opacity: 0.24, duration: 26, delay: -4 },
    { bottom: "-18%", right: "-6%", size: "38vw", color: "#3FC4E8", opacity: 0.22, duration: 31, delay: -12 },
  ],
  warm: [
    { top: "-16%", right: "-6%", size: "40vw", color: "#E68100", opacity: 0.2, duration: 25, delay: -3 },
    { bottom: "-20%", left: "-8%", size: "38vw", color: "#1D7DC4", opacity: 0.22, duration: 29, delay: -14 },
  ],
  dark: [
    { top: "-30%", left: "-10%", size: "50vw", color: "#1D7DC4", opacity: 0.5, duration: 23, delay: 0 },
    { top: "-10%", right: "-14%", size: "44vw", color: "#E68100", opacity: 0.34, duration: 28, delay: -9 },
    { bottom: "-40%", left: "35%", size: "46vw", color: "#3FC4E8", opacity: 0.3, duration: 33, delay: -17 },
  ],
};

/**
 * Drifting, blurred colour field rendered behind a section's content.
 * Requires the parent to carry the `aurora-host` class.
 */
export default function Aurora({ variant = "light" }: { variant?: AuroraVariant }) {
  return (
    <div className="aurora-layer" aria-hidden="true">
      {PRESETS[variant].map((blob, i) => (
        <span
          key={i}
          className="aurora-blob"
          style={{
            top: blob.top,
            left: blob.left,
            right: blob.right,
            bottom: blob.bottom,
            width: blob.size,
            height: blob.size,
            background: blob.color,
            opacity: blob.opacity,
            animation: `auroraDrift ${blob.duration}s ease-in-out ${blob.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
