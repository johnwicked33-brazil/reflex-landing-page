"use client";

import React, {
  MutableRefObject,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { cn } from "@/lib/utils";

type WaveformBaseProps = {
  barColor?: string;
  barGap?: number;
  barHeight?: number;
  barRadius?: number;
  barWidth?: number;
  className?: string;
  fadeEdges?: boolean;
  fadeWidth?: number;
  height?: number | string;
};

export type WaveformProps = WaveformBaseProps & {
  data: number[];
  onBarClick?: (index: number, value: number) => void;
  progress?: number;
  progressBarColor?: string;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

function useElementSize<T extends HTMLElement>(ref: React.RefObject<T | null>) {
  const [size, setSize] = useState({ height: 0, width: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const update = () => {
      setSize({
        height: element.clientHeight,
        width: element.clientWidth,
      });
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref]);

  return size;
}

function normalizeData(data: number[], points: number) {
  if (!data.length || points <= 0) return [];
  if (data.length === points) return data.map((value) => clamp(value, 0, 1));

  const normalized: number[] = [];
  for (let index = 0; index < points; index += 1) {
    const sourceIndex = Math.floor((index / points) * data.length);
    normalized.push(clamp(data[sourceIndex] ?? 0, 0, 1));
  }
  return normalized;
}

export function Waveform({
  data,
  className,
  height = 128,
  barWidth = 4,
  barHeight = 4,
  barGap = 2,
  barRadius = 2,
  barColor = "hsl(var(--foreground))",
  fadeEdges = true,
  fadeWidth = 24,
  onBarClick,
  progress,
  progressBarColor = "#7ddfb5",
}: WaveformProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const visibleBarsRef = useRef<number[]>([]);
  const { width } = useElementSize(wrapperRef);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || width <= 0) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const numericHeight = typeof height === "number" ? height : 128;
    const dpr = window.devicePixelRatio || 1;
    const step = barWidth + barGap;
    const barsCount = Math.max(1, Math.floor((width + barGap) / step));
    const bars = normalizeData(data, barsCount);

    visibleBarsRef.current = bars;

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(numericHeight * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${numericHeight}px`;

    context.setTransform(1, 0, 0, 1, 0, 0);
    context.scale(dpr, dpr);
    context.clearRect(0, 0, width, numericHeight);

    const progressX =
      typeof progress === "number" ? clamp(progress, 0, 1) * width : -1;
    const middleY = numericHeight / 2;

    bars.forEach((value, index) => {
      const x = index * step;
      const amplitude = Math.max(barHeight, value * numericHeight);
      const y = middleY - amplitude / 2;
      const isActive = progressX >= 0 && x + barWidth * 0.5 <= progressX;

      if (fadeEdges) {
        const distanceToEdge = Math.min(x, width - (x + barWidth));
        const fadeFactor = clamp(distanceToEdge / fadeWidth, 0.18, 1);
        context.globalAlpha = fadeFactor;
      } else {
        context.globalAlpha = 1;
      }

      context.fillStyle = isActive ? progressBarColor : barColor;

      const radius = Math.min(barRadius, barWidth / 2, amplitude / 2);
      if (radius > 0 && "roundRect" in context) {
        context.beginPath();
        context.roundRect(x, y, barWidth, amplitude, radius);
        context.fill();
      } else {
        context.fillRect(x, y, barWidth, amplitude);
      }
    });

    context.globalAlpha = 1;
  }, [
    barColor,
    barGap,
    barHeight,
    barRadius,
    barWidth,
    data,
    fadeEdges,
    fadeWidth,
    height,
    progress,
    progressBarColor,
    width,
  ]);

  const handlePointerDown = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (!onBarClick || !visibleBarsRef.current.length) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const pointerX = clamp(event.clientX - bounds.left, 0, bounds.width);
    const step = barWidth + barGap;
    const index = clamp(
      Math.floor(pointerX / step),
      0,
      visibleBarsRef.current.length - 1,
    );
    const value = visibleBarsRef.current[index] ?? 0;
    onBarClick(index, value);
  };

  return (
    <div
      ref={wrapperRef}
      className={cn("relative w-full overflow-hidden", className)}
      style={{ height }}
    >
      <canvas
        ref={canvasRef}
        className="block h-full w-full cursor-pointer touch-none"
        onPointerDown={handlePointerDown}
      />
    </div>
  );
}

export type ScrollingWaveformProps = WaveformBaseProps & {
  barCount?: number;
  speed?: number;
};

export function ScrollingWaveform({
  speed = 50,
  barCount = 60,
  ...props
}: ScrollingWaveformProps) {
  const [data, setData] = useState(() =>
    Array.from({ length: barCount }, () => Math.random() * 0.6 + 0.2),
  );

  useEffect(() => {
    const frameMs = Math.max(20, Math.round(1000 / speed));
    const timer = window.setInterval(() => {
      setData((prev) => {
        const next = prev.slice(1);
        next.push(Math.random() * 0.7 + 0.15);
        return next;
      });
    }, frameMs);

    return () => window.clearInterval(timer);
  }, [speed]);

  return <Waveform data={data} {...props} />;
}

export function StaticWaveform({
  bars = 40,
  seed = 42,
  ...props
}: WaveformBaseProps & { bars?: number; seed?: number }) {
  const data = useMemo(() => {
    return Array.from({ length: bars }, (_, index) => {
      const noise = Math.sin((index + 1) * (seed + 0.618) * 12.9898) * 43758.5453;
      const normalized = noise - Math.floor(noise);
      return 0.15 + normalized * 0.8;
    });
  }, [bars, seed]);

  return <Waveform data={data} {...props} />;
}

export type AudioScrubberProps = WaveformBaseProps & {
  currentTime: number;
  data: number[];
  duration?: number;
  onSeek: (time: number) => void;
  showHandle?: boolean;
};

export function AudioScrubber({
  currentTime,
  data,
  duration = 100,
  onSeek,
  showHandle = true,
  className,
  ...props
}: AudioScrubberProps) {
  const safeDuration = Math.max(duration, 0.1);
  const progress = clamp(currentTime / safeDuration, 0, 1);

  return (
    <div className={cn("relative", className)}>
      <Waveform
        data={data}
        progress={progress}
        onBarClick={(index) => {
          const points = Math.max(data.length - 1, 1);
          const ratio = index / points;
          onSeek(clamp(ratio * safeDuration, 0, safeDuration));
        }}
        {...props}
      />

      {showHandle ? (
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 top-0 w-0.5 bg-white/80"
          style={{ left: `${progress * 100}%` }}
        />
      ) : null}
    </div>
  );
}

export function MicrophoneWaveform({
  active = false,
  fftSize = 256,
  smoothingTimeConstant = 0.8,
  sensitivity = 1,
  onError,
  ...props
}: WaveformBaseProps & {
  active?: boolean;
  fftSize?: number;
  onError?: (error: Error) => void;
  sensitivity?: number;
  smoothingTimeConstant?: number;
}) {
  const [data, setData] = useState<number[]>(Array.from({ length: 64 }, () => 0));

  useEffect(() => {
    if (!active) return;

    let stream: MediaStream | null = null;
    let audioContext: AudioContext | null = null;
    let analyser: AnalyserNode | null = null;
    let raf = 0;

    const start = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        audioContext = new AudioContext();
        analyser = audioContext.createAnalyser();
        analyser.fftSize = fftSize;
        analyser.smoothingTimeConstant = smoothingTimeConstant;

        const source = audioContext.createMediaStreamSource(stream);
        source.connect(analyser);

        const values = new Uint8Array(analyser.frequencyBinCount);
        const update = () => {
          if (!analyser) return;
          analyser.getByteFrequencyData(values);
          const sliceSize = Math.max(1, Math.floor(values.length / 64));
          const next = Array.from({ length: 64 }, (_, index) => {
            const startIndex = index * sliceSize;
            const endIndex = Math.min(values.length, startIndex + sliceSize);
            let sum = 0;
            for (let i = startIndex; i < endIndex; i += 1) sum += values[i];
            const normalized =
              endIndex > startIndex
                ? (sum / (endIndex - startIndex) / 255) * sensitivity
                : 0;
            return clamp(normalized, 0, 1);
          });
          setData(next);
          raf = requestAnimationFrame(update);
        };

        update();
      } catch (error) {
        onError?.(
          error instanceof Error ? error : new Error("Microphone unavailable"),
        );
      }
    };

    start();
    return () => {
      if (raf) cancelAnimationFrame(raf);
      if (analyser) analyser.disconnect();
      if (audioContext) audioContext.close();
      if (stream) stream.getTracks().forEach((track) => track.stop());
    };
  }, [active, fftSize, onError, sensitivity, smoothingTimeConstant]);

  return <Waveform data={data} {...props} />;
}

export function LiveMicrophoneWaveform({
  active = false,
  savedHistoryRef,
  ...props
}: ScrollingWaveformProps & {
  active?: boolean;
  dragOffset?: number;
  enableAudioPlayback?: boolean;
  historySize?: number;
  playbackRate?: number;
  savedHistoryRef?: MutableRefObject<number[]>;
  setDragOffset?: (offset: number) => void;
  updateRate?: number;
}) {
  const [history, setHistory] = useState<number[]>(
    Array.from({ length: 90 }, () => 0.12),
  );

  useEffect(() => {
    if (!savedHistoryRef?.current?.length) return;
    setHistory(savedHistoryRef.current.slice(-150));
  }, [savedHistoryRef]);

  useEffect(() => {
    if (!active) return;
    const timer = window.setInterval(() => {
      setHistory((prev) => {
        const next = prev.slice(-149);
        next.push(Math.random() * 0.7 + 0.15);
        if (savedHistoryRef) savedHistoryRef.current = next;
        return next;
      });
    }, 50);
    return () => window.clearInterval(timer);
  }, [active, savedHistoryRef]);

  return <Waveform data={history} {...props} />;
}

export function RecordingWaveform({
  recording = false,
  onRecordingComplete,
  ...props
}: WaveformBaseProps & {
  onRecordingComplete?: (data: number[]) => void;
  recording?: boolean;
  showHandle?: boolean;
  updateRate?: number;
}) {
  const [recordedData, setRecordedData] = useState<number[]>(
    Array.from({ length: 80 }, () => 0.1),
  );
  const wasRecording = useRef(recording);

  useEffect(() => {
    if (wasRecording.current && !recording) {
      onRecordingComplete?.(recordedData);
    }
    wasRecording.current = recording;
  }, [onRecordingComplete, recordedData, recording]);

  useEffect(() => {
    if (!recording) return;
    const timer = window.setInterval(() => {
      setRecordedData((prev) => {
        const next = prev.slice(-149);
        next.push(Math.random() * 0.75 + 0.1);
        return next;
      });
    }, 50);
    return () => window.clearInterval(timer);
  }, [recording]);

  return <Waveform data={recordedData} {...props} />;
}
