import styles from "./dossier.module.css";
import { Sheen } from "./primitives/Sheen";
import { SplitReveal } from "./primitives/SplitReveal";
import { EmW } from "./primitives/Highlights";
import { heroStats } from "@/lib/content";

export function Hero({ statusLabel }: { statusLabel: string }) {
  return (
    <section className={styles.hero}>
      <div data-reveal className={styles.badge}>
        <span className={styles.badgeDot} />
        <span className={styles.badgeText}>{statusLabel}</span>
      </div>

      <SplitReveal as="h1" className={styles.h1}>
        Marketer <Sheen>turned</Sheen> founding GTM.
      </SplitReveal>

      <p data-reveal className={styles.heroSub}>
        Turning ideas into <EmW>shipping, scalable products</EmW> — founding GTM
        on two AI products in production, Master in Management at INSEAD.
      </p>

      <div data-reveal className={styles.ctaRow}>
        <a href="#work" data-magnetic className={styles.btnPrimary}>
          See the work <span className={styles.btnArrow}>→</span>
        </a>
        <a href="#contact" data-magnetic className={styles.btnSecondary}>
          Book a 30-min call <span className={styles.btnArrow}>↗</span>
        </a>
      </div>

      <dl data-reveal className={styles.heroStats}>
        {heroStats.map((stat) => (
          <div key={stat.term}>
            <dt className={styles.heroStatTerm}>{stat.term}</dt>
            <dd className={styles.heroStatDef}>{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
