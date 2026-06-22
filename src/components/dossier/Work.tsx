import styles from "./dossier.module.css";
import { SectionHeader } from "./primitives/SectionHeader";
import { SectionIntro } from "./primitives/SectionIntro";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/lib/content";

export function Work() {
  return (
    <section id="work" className={styles.sectionWork}>
      <SectionHeader num="[ 01 ]" label="Business Project Management" />
      <SectionIntro
        lead="From building ideas "
        sheen="to shipping."
        text="Founding GTM. Growth scaling. Brand repositioning. Four projects where I owned the strategy, the execution, or both — from pre-product to first paying enterprises, and from zero brand to multi-channel community."
        mb={64}
      />
      <div className={styles.workGrid}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
