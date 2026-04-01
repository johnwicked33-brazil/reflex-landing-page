"use client";

import { useState } from "react";

import styles from "./gladia.module.css";

import type { GladiaFaqItem } from "@/types/gladia";

type GladiaFaqProps = {
  items: GladiaFaqItem[];
  title: string;
};

export function GladiaFaq({ items, title }: GladiaFaqProps) {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className={styles.faqSection}>
      <div className={`${styles.container} ${styles.faqLayout}`}>
        <div className={styles.faqIntro}>
          <h2 className={styles.faqTitle}>{title}</h2>
        </div>

        <div className={styles.faqList}>
          {items.map((item, index) => {
            const isOpen = index === openIndex;

            return (
              <article
                key={item.question}
                className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ""}`}
              >
                <button
                  className={styles.faqQuestion}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  type="button"
                >
                  <span className={styles.faqQuestionText}>{item.question}</span>
                  <img
                    alt=""
                    className={styles.faqIcon}
                    src="/gladia/assets/66eb1723eead0a69d1c82c06_cheron-down.svg"
                  />
                </button>

                <div className={styles.faqAnswerWrap}>
                  <p className={styles.faqAnswer}>{item.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
