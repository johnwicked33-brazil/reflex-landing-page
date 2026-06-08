"use client";

import { useMemo, useState, type HTMLAttributes } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

import { cn } from "@/lib/utils";
import styles from "@/components/ui/faq-tabs.module.css";

type FaqItem = {
  answer: string;
  question: string;
};

type FaqCategories = Record<string, string>;
type FaqData = Record<string, FaqItem[]>;

type FAQProps = HTMLAttributes<HTMLElement> & {
  categories: FaqCategories;
  className?: string;
  faqData: FaqData;
  subtitle?: string;
  title?: string;
};

export function FAQ({
  categories,
  className,
  faqData,
  subtitle = "Perguntas frequentes",
  title = "D\u00favidas frequentes",
  ...props
}: FAQProps) {
  const categoryKeys = useMemo(() => Object.keys(categories), [categories]);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categoryKeys[0] ?? "",
  );

  const activeCategory =
    selectedCategory && categories[selectedCategory]
      ? selectedCategory
      : (categoryKeys[0] ?? "");

  return (
    <section
      className={cn(styles.faqSection, className)}
      {...props}
    >
      <FAQHeader subtitle={subtitle} title={title} />

      {categoryKeys.length ? (
        <FAQTabs
          categories={categories}
          selected={activeCategory}
          setSelected={setSelectedCategory}
        />
      ) : null}

      <FAQList faqData={faqData} selected={activeCategory} />
    </section>
  );
}

function FAQHeader({ subtitle, title }: { subtitle: string; title: string }) {
  return (
    <div className={styles.header}>
      {subtitle.trim().length ? (
        <span className={styles.subtitle}>{subtitle}</span>
      ) : null}
      <h2 className={styles.title}>{title}</h2>
      <span className={styles.headerGlow} />
    </div>
  );
}

function FAQTabs({
  categories,
  selected,
  setSelected,
}: {
  categories: FaqCategories;
  selected: string;
  setSelected: (value: string) => void;
}) {
  return (
    <div className={styles.tabs}>
      {Object.entries(categories).map(([key, label]) => (
        <button
          key={key}
          className={cn(
            styles.tabButton,
            selected === key && styles.tabButtonActive,
          )}
          onClick={() => setSelected(key)}
          type="button"
        >
          <span className={styles.tabLabel}>{label}</span>
          <AnimatePresence>
            {selected === key ? (
              <motion.span
                animate={{ y: "0%" }}
                className={styles.tabActiveBg}
                exit={{ y: "100%" }}
                initial={{ y: "100%" }}
                transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              />
            ) : null}
          </AnimatePresence>
        </button>
      ))}
    </div>
  );
}

function FAQList({
  faqData,
  selected,
}: {
  faqData: FaqData;
  selected: string;
}) {
  const questions = faqData[selected] ?? [];

  return (
    <div className={styles.list}>
      <AnimatePresence mode="wait">
        <motion.div
          key={selected}
          animate={{ opacity: 1, y: 0 }}
          className={styles.listInner}
          exit={{ opacity: 0, y: 20 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
        >
          {questions.map((faq) => (
            <FAQItem key={faq.question} answer={faq.answer} question={faq.question} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function FAQItem({ answer, question }: FaqItem) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      className={cn(styles.item, isOpen && styles.itemOpen)}
    >
      <button
        className={styles.itemButton}
        onClick={() => setIsOpen((prev) => !prev)}
        type="button"
      >
        <span className={cn(styles.question, !isOpen && styles.questionClosed)}>
          {question}
        </span>
        <motion.span
          transition={{ duration: 0.2 }}
          variants={{
            closed: { rotate: "0deg" },
            open: { rotate: "45deg" },
          }}
        >
          <Plus className={cn(styles.icon, isOpen && styles.iconOpen)} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            animate={{ height: "auto", opacity: 1 }}
            className={styles.answerWrap}
            exit={{ height: 0, opacity: 0 }}
            initial={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
          >
            <p className={styles.answer}>{answer}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}
