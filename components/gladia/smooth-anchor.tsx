"use client";

import type { MouseEvent } from "react";

type SmoothAnchorProps = {
  className?: string;
  href: string;
  label: string;
};

const easeInOutCubic = (progress: number) =>
  progress < 0.5
    ? 4 * progress * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 3) / 2;

function externalLinkProps(href: string) {
  return href.startsWith("http")
    ? ({ rel: "noreferrer", target: "_blank" } as const)
    : {};
}

function scrollToHash(hash: string) {
  const target = document.querySelector(hash);

  if (!target) {
    return false;
  }

  const start = window.scrollY;
  const top = target.getBoundingClientRect().top + start;
  const distance = top - start;
  const duration = 900;
  const startedAt = performance.now();

  const step = (now: number) => {
    const elapsed = now - startedAt;
    const progress = Math.min(elapsed / duration, 1);

    window.scrollTo(0, start + distance * easeInOutCubic(progress));

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
  return true;
}

export function SmoothAnchor({ className, href, label }: SmoothAnchorProps) {
  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith("#")) {
      return;
    }

    event.preventDefault();

    if (scrollToHash(href)) {
      window.history.pushState(null, "", href);
    }
  };

  return (
    <a className={className} href={href} onClick={onClick} {...externalLinkProps(href)}>
      {label}
    </a>
  );
}
