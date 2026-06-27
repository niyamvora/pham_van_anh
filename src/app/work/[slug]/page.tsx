import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/caseStudies";
import styles from "@/components/dossier/dossier.module.css";
import pageStyles from "./page.module.css";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((cs) => cs.id === slug);
  if (!study) return {};
  return {
    title: `${study.title} — Pham Thi Van Anh`,
    description: study.tagline,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((cs) => cs.id === slug);
  if (!study) notFound();

  return (
    <div
      className={`dossier-root ${pageStyles.page}`}
      style={{ "--accent": "#5b9dff" } as CSSProperties}
    >
      <Link href="/#work" className={pageStyles.back}>
        &larr; Back to Work
      </Link>

      <article className={styles.csInner}>
        <div className={styles.csEyebrow}>
          <span className={styles.csEyebrowDot} />
          {study.eyebrow}
        </div>

        <h1 className={styles.csTitle}>{study.title}</h1>
        <p className={styles.csTagline}>{study.tagline}</p>

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

        <section className={styles.csSection}>
          <h2 className={styles.csSectionLabel}>Summary</h2>
          <p className={styles.csProse}>{study.summary}</p>
        </section>

        <section className={styles.csSection}>
          <h2 className={styles.csSectionLabel}>Target user</h2>
          <p className={styles.csProse}>{study.targetUser}</p>
        </section>

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
