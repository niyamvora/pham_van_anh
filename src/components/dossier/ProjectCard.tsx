import Link from "next/link";
import styles from "./dossier.module.css";
import { SpotlightCard } from "./primitives/SpotlightCard";
import { CountUp } from "./primitives/CountUp";
import type { Project } from "@/lib/content";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <SpotlightCard className={styles.projectCard}>
      <div className={styles.cardTop}>
        {project.live ? (
          <span className={styles.cardStatus}>
            <span className={styles.cardStatusDot} />
            {project.period}
          </span>
        ) : (
          <span className={styles.cardDate}>{project.period}</span>
        )}
        <span className={styles.cardKind}>{project.kind}</span>
      </div>

      <h3 className={styles.cardTitle}>{project.title}</h3>
      <p className={styles.cardTagline}>{project.tagline}</p>
      <p className={styles.cardDesc}>{project.desc}</p>

      <div className={styles.cardStats}>
        {project.stats.map((stat) => (
          <div key={stat.label}>
            <CountUp text={stat.num} className={styles.statNum} />
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>

      {project.link ? (
        <a
          href={project.link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cardLink}
        >
          <span>{project.link.label}</span>
          <span>↗</span>
        </a>
      ) : project.staticLink ? (
        <div className={styles.cardLinkStatic}>
          <span>{project.staticLink.label}</span>
          <span>{project.staticLink.right}</span>
        </div>
      ) : null}

      {project.caseStudyId && (
        <Link
          href={`/work/${project.caseStudyId}`}
          className={styles.caseStudyBtn}
        >
          <span>Read case study</span>
          <span className={styles.caseStudyBtnArrow}>→</span>
        </Link>
      )}
    </SpotlightCard>
  );
}
