import styles from "./dossier.module.css";
import { SpotlightCard } from "./primitives/SpotlightCard";
import type { Campaign } from "@/lib/content";

export function CampaignCard({ campaign }: { campaign: Campaign }) {
  return (
    <SpotlightCard className={styles.campaignCard}>
      <div className={styles.campaignTop}>
        <span className={styles.campaignYear}>{campaign.year}</span>
        <span
          className={`${styles.campaignTag} ${
            campaign.tagAccent ? styles.campaignTagAccent : ""
          }`}
        >
          {campaign.tag}
        </span>
      </div>
      <h3 className={styles.campaignTitle}>{campaign.title}</h3>
      <p className={styles.campaignDesc}>{campaign.desc}</p>
      <span className={styles.campaignCta}>Read brief →</span>
    </SpotlightCard>
  );
}
