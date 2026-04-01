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
  durationPerWord = 3.5,
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
      gsap.set(activeWords[0], { autoAlpha: 1, overwrite: true, y: 0 });

      const timeline = gsap.timeline({ repeat: -1 });

      activeWords.forEach((currentWord, index) => {
        const nextWord = activeWords[(index + 1) % activeWords.length];

        timeline.to(currentWord, {
          autoAlpha: 0,
          duration: outDuration,
          ease: "power2.in",
          y: -12,
        }, `+=${holdDuration}`);

        timeline.fromTo(
          nextWord,
          { autoAlpha: 0, y: 12 },
          {
            autoAlpha: 1,
            duration: inDuration,
            ease: "power2.out",
            y: 0,
          },
          "<",
        );
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
