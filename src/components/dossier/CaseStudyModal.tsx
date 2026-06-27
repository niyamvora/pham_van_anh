"use client";

import { useEffect } from "react";
import styles from "./dossier.module.css";
import type { CaseStudy } from "@/lib/caseStudies";

export function CaseStudyModal({
  study,
  onClose,
}: {
  study: CaseStudy | null;
  onClose: () => void;
}) {
  // ESC key closes the modal
  useEffect(() => {
    if (!study) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [study, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    if (study) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [study]);

  if (!study) return null;

  return (
    <div
      className={styles.csModal}
      role="dialog"
      aria-modal="true"
      aria-label={`Case study: ${study.title}`}
    >
      <button
        className={styles.csClose}
        type="button"
        onClick={onClose}
        aria-label="Close case study"
      >
        Close ×
      </button>

      <article className={styles.csInner}>
        {/* Eyebrow */}
        <div className={styles.csEyebrow}>
          <span className={styles.csEyebrowDot} />
          {study.eyebrow}
        </div>

        {/* Title + tagline */}
        <h1 className={styles.csTitle}>{study.title}</h1>
        <p className={styles.csTagline}>{study.tagline}</p>

        {/* Live link (optional) */}
        {study.liveLink && (
          <a
            href={study.liveLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.csLiveLink}
          >
            <span>{study.liveLink.label}</span>
            <span>↗</span>
          </a>
        )}

        {/* Summary */}
        <section className={styles.csSection}>
          <h2 className={styles.csSectionLabel}>Summary</h2>
          <p className={styles.csProse}>{study.summary}</p>
        </section>

        {/* Target user */}
        <section className={styles.csSection}>
          <h2 className={styles.csSectionLabel}>Target user</h2>
          <p className={styles.csProse}>{study.targetUser}</p>
        </section>

        {/* Scope of ownership */}
        <section className={styles.csSection}>
          <h2 className={styles.csSectionLabel}>Scope of ownership</h2>
          <ol className={styles.csList}>
            {study.scope.map((item) => (
              <li key={item.num} className={styles.csListItem}>
                <div className={styles.csListNum}>{item.num}</div>
                <h3 className={styles.csListTitle}>{item.title}</h3>
                <p className={styles.csListBody}>{item.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Hardest problems */}
        <section className={styles.csSection}>
          <h2 className={styles.csSectionLabel}>Hardest problems</h2>
          <ol className={styles.csList}>
            {study.hardestProblems.map((item) => (
              <li key={item.num} className={styles.csListItem}>
                <div className={styles.csListNum}>{item.num}</div>
                <h3 className={styles.csListTitle}>{item.title}</h3>
                <p className={styles.csListBody}>{item.body}</p>
              </li>
            ))}
          </ol>
        </section>
      </article>
    </div>
  );
}
