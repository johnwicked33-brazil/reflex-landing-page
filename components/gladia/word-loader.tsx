"use client";

import React, { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import styles from "./word-loader.module.css";

gsap.registerPlugin(useGSAP);

type WordLoaderProps = {
  words: string[];
  className?: string;
  durationPerWord?: number;
  wordClassName?: string;
};

function joinClasses(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function WordLoader({
  words,
  className,
  durationPerWord = 2.5,
  wordClassName,
}: WordLoaderProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const wordRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useGSAP(
    () => {
      if (!words.length) {
        return;
      }

      const inDuration = 0.45;
      const outDuration = 0.45;
      const holdDuration = Math.max(durationPerWord - inDuration - outDuration, 0.2);
      const activeWords = wordRefs.current.filter(
        (word): word is HTMLSpanElement => word !== null,
      );

      if (!activeWords.length) {
        return;
      }

      gsap.set(activeWords, { autoAlpha: 0, overwrite: true, y: 12 });

      const timeline = gsap.timeline({ repeat: -1 });

      activeWords.forEach((word) => {
        timeline.to(
          word,
          {
            autoAlpha: 1,
            duration: inDuration,
            ease: "power2.out",
            y: 0,
          },
        );

        timeline.to(word, { duration: holdDuration, ease: "none" });

        timeline.to(word, {
          autoAlpha: 0,
          duration: outDuration,
          ease: "power2.in",
          y: -12,
        });

        timeline.set(word, { y: 12 });
      });

      return () => timeline.kill();
    },
    { scope: containerRef, dependencies: [durationPerWord, words.join("|")] },
  );

  return (
    <span ref={containerRef} className={joinClasses(styles.container, className)}>
      <span className={styles.viewport}>
        {words.map((word, index) => (
          <span
            key={`${word}-${index}`}
            ref={(node) => {
              wordRefs.current[index] = node;
            }}
            className={joinClasses(
              styles.word,
              index === 0 ? styles.wordInitial : undefined,
              wordClassName,
            )}
          >
            {word}
          </span>
        ))}
      </span>
    </span>
  );
}
