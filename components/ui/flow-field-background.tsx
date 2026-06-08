"use client";

import React, { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

interface NeuralBackgroundProps {
  className?: string;
  color?: string;
  trailOpacity?: number;
  particleCount?: number;
  speed?: number;
}

type ResizeTier = "mobile" | "tablet" | "fullscreen";

type ParticleTargetByTier = Record<ResizeTier, number>;

const PARTICLE_TARGET_BY_TIER: ParticleTargetByTier = {
  mobile: 300,
  tablet: 1400,
  fullscreen: 1400,
};

function getResizeTier(viewportWidth: number): ResizeTier {
  if (viewportWidth < 768) return "mobile";
  if (viewportWidth < 1920) return "tablet";
  return "fullscreen";
}

function getParticleTarget(baseCount: number, tier: ResizeTier) {
  return Math.min(baseCount, PARTICLE_TARGET_BY_TIER[tier]);
}

export default function NeuralBackground({
  className,
  color = "#6366f1",
  trailOpacity = 0.15,
  particleCount = 600,
  speed = 1,
}: NeuralBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = container.clientWidth;
    let height = container.clientHeight;
    let animationFrameId = 0;
    const mouse = { x: -1000, y: -1000 };
    let currentResizeTier = getResizeTier(window.innerWidth);
    let activeParticleCount = getParticleTarget(particleCount, currentResizeTier);
    let particles: Particle[] = [];

    let isInViewport = true;
    let isPageVisible = !document.hidden;
    let prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    class Particle {
      prevX: number;
      prevY: number;
      x: number;
      y: number;
      vx: number;
      vy: number;
      age: number;
      life: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.prevX = this.x;
        this.prevY = this.y;
        this.vx = 0;
        this.vy = 0;
        this.life = Math.random() * 200 + 100;
        this.age = Math.random() * this.life;
      }

      update() {
        const angle =
          (Math.cos(this.x * 0.005) + Math.sin(this.y * 0.005)) * Math.PI;

        this.vx += Math.cos(angle) * 0.2 * speed;
        this.vy += Math.sin(angle) * 0.2 * speed;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const interactionRadius = 150;

        if (distance < interactionRadius) {
          const force = (interactionRadius - distance) / interactionRadius;
          this.vx -= dx * force * 0.05;
          this.vy -= dy * force * 0.05;
        }

        this.prevX = this.x;
        this.prevY = this.y;
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.95;
        this.vy *= 0.95;

        this.age += 1;
        if (this.age > this.life) {
          this.reset();
        }

        let wrapped = false;
        if (this.x < 0) {
          this.x = width;
          wrapped = true;
        }
        if (this.x > width) {
          this.x = 0;
          wrapped = true;
        }
        if (this.y < 0) {
          this.y = height;
          wrapped = true;
        }
        if (this.y > height) {
          this.y = 0;
          wrapped = true;
        }
        if (wrapped) {
          this.prevX = this.x;
          this.prevY = this.y;
        }
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.prevX = this.x;
        this.prevY = this.y;
        this.vx = 0;
        this.vy = 0;
        this.age = 0;
        this.life = Math.random() * 200 + 100;
      }

      draw(context: CanvasRenderingContext2D) {
        const alpha = 1 - Math.abs(this.age / this.life - 0.5) * 2;
        context.globalAlpha = Math.max(alpha, 0.18);
        context.strokeStyle = color;
        context.lineWidth = 1.1;
        context.beginPath();
        context.moveTo(this.prevX, this.prevY);
        context.lineTo(this.x, this.y);
        context.stroke();
        context.fillStyle = color;
        context.fillRect(this.x, this.y, 1.8, 1.8);
      }
    }

    const fitCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    const resetParticles = () => {
      particles = [];
      for (let i = 0; i < activeParticleCount; i += 1) {
        particles.push(new Particle());
      }
    };

    const drawFrame = () => {
      ctx.fillStyle = `rgba(0, 0, 0, ${trailOpacity})`;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw(ctx);
      });

      ctx.globalAlpha = 1;
    };

    const shouldAnimate = () =>
      isInViewport && isPageVisible && !prefersReducedMotion;

    const animate = () => {
      drawFrame();
      animationFrameId = requestAnimationFrame(animate);
    };

    const primeField = () => {
      for (let i = 0; i < 48; i += 1) {
        drawFrame();
      }
    };

    const startAnimation = () => {
      if (animationFrameId || !shouldAnimate()) return;
      animationFrameId = requestAnimationFrame(animate);
    };

    const stopAnimation = () => {
      if (!animationFrameId) return;
      cancelAnimationFrame(animationFrameId);
      animationFrameId = 0;
    };

    const handleResize = () => {
      const nextWidth = container.clientWidth;
      const nextHeight = container.clientHeight;
      const nextTier = getResizeTier(window.innerWidth);
      const sizeChanged = nextWidth !== width || nextHeight !== height;
      const tierChanged = nextTier !== currentResizeTier;
      if (!sizeChanged && !tierChanged) return;

      const prevWidth = width;
      const prevHeight = height;

      width = nextWidth;
      height = nextHeight;

      if (tierChanged) {
        currentResizeTier = nextTier;
        activeParticleCount = getParticleTarget(particleCount, currentResizeTier);
      }

      fitCanvas();

      if (tierChanged) {
        resetParticles();
        primeField();
        return;
      }

      const widthRatio = prevWidth > 0 ? width / prevWidth : 1;
      const heightRatio = prevHeight > 0 ? height / prevHeight : 1;
      particles.forEach((particle) => {
        particle.x *= widthRatio;
        particle.y *= heightRatio;
      });

      drawFrame();
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleVisibilityChange = () => {
      isPageVisible = !document.hidden;
      if (shouldAnimate()) startAnimation();
      else stopAnimation();
    };

    const motionMediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionPreferenceChange = (event: MediaQueryListEvent) => {
      prefersReducedMotion = event.matches;
      if (shouldAnimate()) startAnimation();
      else stopAnimation();
    };

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        isInViewport = entries.some((entry) => entry.isIntersecting);
        if (shouldAnimate()) startAnimation();
        else stopAnimation();
      },
      { threshold: 0.05 },
    );

    fitCanvas();
    resetParticles();
    primeField();

    if (shouldAnimate()) {
      startAnimation();
    }

    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);
    intersectionObserver.observe(container);

    if (typeof motionMediaQuery.addEventListener === "function") {
      motionMediaQuery.addEventListener("change", handleMotionPreferenceChange);
    } else {
      motionMediaQuery.addListener(handleMotionPreferenceChange);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      intersectionObserver.disconnect();

      if (typeof motionMediaQuery.removeEventListener === "function") {
        motionMediaQuery.removeEventListener("change", handleMotionPreferenceChange);
      } else {
        motionMediaQuery.removeListener(handleMotionPreferenceChange);
      }

      stopAnimation();
    };
  }, [color, trailOpacity, particleCount, speed]);

  return (
    <div
      ref={containerRef}
      className={cn("relative h-full w-full overflow-hidden bg-black", className)}
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
