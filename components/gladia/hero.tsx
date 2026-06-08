"use client";

import Link from "next/link";
import styles from "./gladia.module.css";
import WordLoader from "./word-loader";
import FlowFieldBackground from "@/components/ui/flow-field-background";

import type { GladiaAction, GladiaLink } from "@/types/gladia";

type GladiaHeroProps = {
  actions: GladiaAction[];
  announcement: GladiaLink;
  background: string;
  description: string;
  headerActions?: GladiaAction[];
  nav: GladiaLink[];
  rotatingWords: string[];
  titleLines: string[];
};

function externalLinkProps(href: string) {
  return href.startsWith("http")
    ? ({ rel: "noreferrer", target: "_blank" } as const)
    : {};
}

export function GladiaHero({
  actions,
  announcement,
  description,
  headerActions,
  nav,
  rotatingWords,
  titleLines,
}: GladiaHeroProps) {
  return (
    <section className={styles.heroSection}>
      <header className={styles.navShell}>
        <div className={styles.navInner}>
          <Link className={styles.brand} href="/">
            <span className={styles.brandWordmark}>Rebound</span>
          </Link>

          <nav aria-label="Main navigation" className={styles.navLinks}>
            {nav.map((item) => (
              <a key={item.label} className={styles.navLink} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className={styles.navActions}>
            {(headerActions ?? actions).map((action, index) => (
              <a
                key={action.label}
                className={
                  index === 0 ? styles.navActionDark : styles.navActionLight
                }
                href={action.href}
                {...externalLinkProps(action.href)}
              >
                {action.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <div className={styles.heroBackdrop}>
        <FlowFieldBackground
          className={styles.heroFlowField}
          color="#7ddfb5"
          particleCount={1400}
          speed={0.82}
          trailOpacity={0.08}
        />
      </div>
      <div className={styles.heroOverlay} />
      <div className={styles.heroBottomFade} />

      <div className={styles.heroContent}>
        <a
          className={styles.announcement}
          href={announcement.href}
          {...externalLinkProps(announcement.href)}
        >
          <span className={styles.announcementBadge}>NEW</span>
          <span className={styles.announcementText}>{announcement.label}</span>
          <img
            alt=""
            className={styles.announcementArrow}
            src="/gladia/assets/66eb25762dbc7163e153dc0f_arrow-link.svg"
          />
        </a>

        <div className={styles.heroHeadingWrap}>
          <h1 className={styles.heroTitle}>
            {titleLines.map((line) => (
              <span key={line} className={styles.heroTitleLine}>
                {line}
              </span>
            ))}
            <span className={`${styles.heroTitleLine} ${styles.heroTitleLineRotating}`}>
              <WordLoader
                className={styles.heroWordLoader}
                durationPerWord={2.5}
                wordClassName={styles.heroWordLoaderWord}
                words={rotatingWords}
              />
            </span>
          </h1>

          <p className={styles.heroDescription}>{description}</p>

          <div className={styles.heroActions}>
            {actions.map((action, index) => (
              <a
                key={action.label}
                className={
                  index === 0
                    ? styles.heroPrimaryAction
                    : styles.heroSecondaryAction
                }
                href={action.href}
                {...externalLinkProps(action.href)}
              >
                {action.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
