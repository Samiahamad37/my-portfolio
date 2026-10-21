"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { animate, motion, type AnimationPlaybackControls, useMotionValue, useSpring, useTransform } from "framer-motion";
import { siteConfig } from "@/data/portfolio";

// How long the lanyard strap is above the card (px)
const STRAP = 210;

/**
 * Hanging ID badge for the hero.
 * - Drops in on load and swings into place
 * - Drag / throw it: the strap follows and it swings back on a spring
 * - Hover: 3D tilt + light shine that follows the cursor
 */
export default function IdBadge() {
  // Where the card's top-centre is, relative to its resting point
  const x = useMotionValue(0);
  const y = useMotionValue(-420);

  // Strap geometry, computed from the card position
  // Negative = the strap leans toward the side the card has swung to
  const strapAngle = useTransform(() => -Math.atan2(x.get(), STRAP + y.get()) * (180 / Math.PI));
  const strapLength = useTransform(() => Math.max(40, Math.hypot(x.get(), STRAP + y.get())));
  // The card stays in line with the strap, like a real badge on a kamba
  const cardRotate = useTransform(() => strapAngle.get());

  // Hover tilt
  const tiltX = useSpring(0, { stiffness: 200, damping: 18 });
  const tiltY = useSpring(0, { stiffness: 200, damping: 18 });
  const shineX = useMotionValue(50);
  const shineY = useMotionValue(30);
  const shine = useTransform(
    () => `radial-gradient(circle at ${shineX.get()}% ${shineY.get()}%, rgba(255,255,255,0.28), transparent 55%)`
  );

  const cardRef = useRef<HTMLDivElement>(null);

  // Idle "cheza cheza": a slow pendulum sway that never stops on its own
  const sway = useRef<AnimationPlaybackControls | null>(null);
  const resume = useRef<ReturnType<typeof setTimeout> | null>(null);

  function startSway(delay = 0) {
    if (resume.current) clearTimeout(resume.current);
    resume.current = setTimeout(() => {
      sway.current?.stop();
      // ease gently from wherever it is into the swing
      sway.current = animate(x, [x.get(), 26, -26, 0], {
        duration: 3.2,
        ease: "easeInOut",
        times: [0, 0.25, 0.75, 1],
        repeat: Infinity,
      });
    }, delay);
  }

  function stopSway() {
    if (resume.current) clearTimeout(resume.current);
    sway.current?.stop();
  }

  // Drop in from above with a bouncy swing, then keep swaying
  useEffect(() => {
    x.set(80);
    const a = animate(y, 0, { type: "spring", stiffness: 120, damping: 9, delay: 0.3 });
    const b = animate(x, 0, { type: "spring", stiffness: 60, damping: 4, delay: 0.3 });
    startSway(2600);
    return () => { a.stop(); b.stop(); stopSway(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onPointerMove(e: React.PointerEvent) {
    const r = cardRef.current?.getBoundingClientRect();
    if (!r) return;
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    tiltY.set((px - 0.5) * 22);
    tiltX.set((0.5 - py) * 22);
    shineX.set(px * 100);
    shineY.set(py * 100);
  }

  function onPointerEnter(e: React.PointerEvent) {
    stopSway();
    // the cursor "bumps" the badge in the direction it came from
    const r = cardRef.current?.getBoundingClientRect();
    const fromLeft = r ? e.clientX < r.left + r.width / 2 : true;
    animate(x, x.get() + (fromLeft ? 30 : -30), { type: "spring", stiffness: 90, damping: 6 });
  }

  function onPointerLeave() {
    tiltX.set(0);
    tiltY.set(0);
    startSway(1200);
  }

  return (
    <div className="relative mx-auto flex h-[640px] w-full max-w-sm justify-center select-none" style={{ perspective: 1200 }}>
      {/* Clip at the top */}
      <div className="absolute top-0 z-20 h-5 w-14 rounded-b-lg bg-gradient-to-b from-zinc-500 to-zinc-700 shadow-md" />

      {/* Strap */}
      <motion.div
        className="absolute top-0 z-10 w-6 origin-top"
        style={{ height: strapLength, rotate: strapAngle }}
      >
        <div className="h-full w-full bg-gradient-to-r from-primary/80 via-primary-light to-primary/80 shadow-[0_0_12px_rgba(201,149,106,0.35)]">
          <div className="h-full w-full bg-[repeating-linear-gradient(180deg,transparent_0_14px,rgba(0,0,0,0.12)_14px_16px)]" />
        </div>
      </motion.div>

      {/* Card — dragging moves the top-centre point */}
      <motion.div
        drag
        dragSnapToOrigin
        dragElastic={0.6}
        dragTransition={{ bounceStiffness: 140, bounceDamping: 7 }}
        whileDrag={{ cursor: "grabbing" }}
        onDragStart={stopSway}
        onDragEnd={() => startSway(2200)}
        style={{ x, y, rotate: cardRotate, top: STRAP, transformOrigin: "50% 0%" }}
        className="pointer-events-auto absolute z-30 cursor-grab touch-none"
      >
        {/* Ring that joins strap and card */}
        <div className="mx-auto -mb-2 h-6 w-10 rounded-t-full border-4 border-b-0 border-zinc-400" />

        <motion.div
          ref={cardRef}
          onPointerEnter={onPointerEnter}
          onPointerMove={onPointerMove}
          onPointerLeave={onPointerLeave}
          style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
          className="relative w-[270px] overflow-hidden rounded-2xl border border-white/10 bg-surface-card shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]"
        >
          {/* Slot punched for the clip */}
          <div className="absolute left-1/2 top-3 z-20 h-2 w-12 -translate-x-1/2 rounded-full bg-surface" />

          {/* Header band */}
          <div className="bg-gradient-to-r from-primary to-primary-light px-5 pb-3 pt-7 text-surface">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em]">Developer Pass</p>
            <p className="text-xs font-medium opacity-80">{siteConfig.location}</p>
          </div>

          {/* Photo */}
          <div className="px-5 pt-5">
            <div className="relative mx-auto aspect-square w-40 overflow-hidden rounded-xl ring-2 ring-primary/40">
              <Image
                src={siteConfig.profileImage}
                alt={`${siteConfig.name} — professional headshot`}
                fill
                priority
                draggable={false}
                sizes="160px"
                className="pointer-events-none object-cover object-top"
              />
            </div>
          </div>

          {/* Details */}
          <div className="px-5 pb-5 pt-4 text-center">
            <p className="text-lg font-bold text-white">{siteConfig.name}</p>
            <p className="text-sm text-primary-light">{siteConfig.title}</p>

            <div className="mt-4 grid grid-cols-2 gap-2 text-left text-[11px]">
              <div className="rounded-lg bg-white/[0.04] px-3 py-2">
                <p className="text-zinc-500">Education</p>
                <p className="font-semibold text-zinc-200">BSc ISM · Ardhi</p>
              </div>
              <div className="rounded-lg bg-white/[0.04] px-3 py-2">
                <p className="text-zinc-500">ID No.</p>
                <p className="font-semibold text-zinc-200">SAH-2026</p>
              </div>
            </div>

            {/* Barcode */}
            <div className="mt-4 flex h-8 items-end justify-center gap-[2px] opacity-70">
              {"3142516271828182845904523536".split("").map((n, i) => (
                <span key={i} className="bg-zinc-300" style={{ width: (Number(n) % 3) + 1, height: "100%" }} />
              ))}
            </div>
          </div>

          {/* Shine that follows the cursor */}
          <motion.div className="pointer-events-none absolute inset-0 mix-blend-overlay" style={{ background: shine }} />
        </motion.div>
      </motion.div>

      <p className="pointer-events-auto absolute bottom-0 text-xs text-zinc-500">Grab me and throw ↔</p>
    </div>
  );
}
