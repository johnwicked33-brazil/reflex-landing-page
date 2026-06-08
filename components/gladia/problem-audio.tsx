"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

import styles from "./gladia.module.css";

import { AudioScrubber } from "@/components/ui/waveform";

function joinClasses(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

type ProblemAudioSectionProps = {
  audioSrc: string;
};

type AudioExampleModalTriggerProps = {
  audioSrc: string;
  className?: string;
  label: string;
};

function formatTime(totalSeconds: number) {
  if (!Number.isFinite(totalSeconds) || totalSeconds <= 0) return "0:00";
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function createWaveformSeed(length: number) {
  const values: number[] = [];
  let state = 987654321;
  const next = () => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };

  for (let index = 0; index < length; index += 1) {
    const envelope = 0.24 + Math.sin((index / length) * Math.PI * 5.5) * 0.16;
    const texture = next() * 0.48;
    values.push(Math.max(0.08, Math.min(1, envelope + texture)));
  }
  return values;
}

function AudioPlayer({ audioSrc }: ProblemAudioSectionProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const waveformData = useMemo(() => createWaveformSeed(180), []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTiming = () => {
      setCurrentTime(audio.currentTime || 0);
      setDuration(audio.duration || 0);
    };

    const onEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener("loadedmetadata", updateTiming);
    audio.addEventListener("durationchange", updateTiming);
    audio.addEventListener("timeupdate", updateTiming);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("loadedmetadata", updateTiming);
      audio.removeEventListener("durationchange", updateTiming);
      audio.removeEventListener("timeupdate", updateTiming);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
      return;
    }

    audio.pause();
    setIsPlaying(false);
  };

  const handleSeek = (time: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = time;
    setCurrentTime(time);
  };

  return (
    <div className={styles.problemAudioCard}>
      <div className={styles.problemAudioInner}>
        <div className={styles.problemAudioPlayerRow}>
          <button
            aria-label={isPlaying ? "Pausar audio" : "Reproduzir audio"}
            className={joinClasses(
              styles.problemAudioIconButton,
              isPlaying && styles.problemAudioIconButtonActive,
            )}
            onClick={togglePlayback}
            type="button"
          >
            <span
              aria-hidden
              className={isPlaying ? styles.problemPauseIcon : styles.problemPlayIcon}
            />
          </button>

          <div className={styles.problemWaveformBlock}>
            <AudioScrubber
              barColor="rgba(211, 229, 221, 0.34)"
              barGap={2}
              barRadius={999}
              barWidth={3}
              className={styles.problemWaveform}
              currentTime={currentTime}
              data={waveformData}
              duration={duration || 1}
              fadeEdges={false}
              height={112}
              onSeek={handleSeek}
              showHandle
            />
          </div>
        </div>

        <span className={styles.problemAudioTime}>
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
      </div>

      <audio ref={audioRef} preload="metadata" src={audioSrc} />
    </div>
  );
}

export function AudioExampleModalTrigger({
  audioSrc,
  className,
  label,
}: AudioExampleModalTriggerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const modal =
    isOpen && isMounted
      ? createPortal(
        <div
          aria-modal="true"
          className={styles.audioModalOverlay}
          onClick={() => setIsOpen(false)}
          role="dialog"
        >
          <div
            className={styles.audioModalPanel}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              aria-label="Fechar player de áudio"
              className={styles.audioModalClose}
              onClick={() => setIsOpen(false)}
              type="button"
            >
              ×
            </button>
            <AudioPlayer audioSrc={audioSrc} />
          </div>
        </div>,
        document.body,
      )
      : null;

  return (
    <>
      <button className={className} onClick={() => setIsOpen(true)} type="button">
        {label}
      </button>

      {modal}
    </>
  );
}
