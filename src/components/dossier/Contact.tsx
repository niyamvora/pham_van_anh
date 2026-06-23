import styles from "./dossier.module.css";
import { SectionHeader } from "./primitives/SectionHeader";
import { Sheen } from "./primitives/Sheen";
import { SplitReveal } from "./primitives/SplitReveal";
import { EmW } from "./primitives/Highlights";
import { contactLinks } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className={styles.sectionContact}>
      <SectionHeader num="[ 07 ]" label="End of Dossier" />

      <div className={styles.contactGrid}>
        <div data-reveal>
          <SplitReveal as="h2" className={styles.contactH2}>
            Tell me what <Sheen>you&apos;re building.</Sheen>
          </SplitReveal>
          <p className={styles.contactP}>
            Available April — December 2026 for fractional GTM leadership,
            founding BD engagements, and Asia ↔ Europe market entry. I take 2–3
            engagements at a time. The product must be interesting; the buyer
            must be enterprise.
          </p>
          <p className={styles.contactP}>
            <EmW>Currently best fit for:</EmW> European AI scale-ups entering Asia
            · Asian B2B SaaS targeting EU enterprise · Founding-team GTM for
            AI-native products pre-Series A.
          </p>
        </div>

        <div data-reveal className={styles.contactList}>
          {contactLinks.map((link) =>
            link.href ? (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={styles.contactItem}
              >
                <span className={styles.contactItemLabel}>{link.label}</span>
                <span className={styles.contactItemValue}>{link.value}</span>
              </a>
            ) : (
              <div key={link.label} className={styles.contactItem}>
                <span className={styles.contactItemLabel}>{link.label}</span>
                <span className={styles.contactItemValue}>{link.value}</span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
