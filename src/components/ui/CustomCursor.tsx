"use client";

import React, { useEffect, useRef, useState } from "react";

export const CustomCursor = () => {
  const dotRef   = useRef<HTMLDivElement>(null);
  const ringRef  = useRef<HTMLDivElement>(null);
  const pos      = useRef({ x: -200, y: -200 });
  const ring     = useRef({ x: -200, y: -200 });
  const raf      = useRef<number>(0);
  const hovering = useRef(false);
  const clicking = useRef(false);

  const [state, setState] = useState<"default" | "hover" | "click">("default");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Don't run on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    // Hide the browser cursor site-wide
    const style = document.createElement("style");
    style.textContent = "*, *::before, *::after { cursor: none !important; }";
    document.head.appendChild(style);

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      // Detect hoverable element under cursor
      const el = e.target as Element | null;
      const isClickable = !!el?.closest(
        "a, button, [role='button'], input, textarea, select, label, [tabindex], [data-hover]"
      );
      if (isClickable !== hovering.current) {
        hovering.current = isClickable;
        setState(clicking.current ? "click" : isClickable ? "hover" : "default");
      }
    };

    const onDown = () => {
      clicking.current = true;
      setState("click");
    };
    const onUp = () => {
      clicking.current = false;
      setState(hovering.current ? "hover" : "default");
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup",   onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    // Smooth ring follow using lerp in rAF loop
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      ring.current.x = lerp(ring.current.x, pos.current.x, 0.12);
      ring.current.y = lerp(ring.current.y, pos.current.y, 0.12);

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup",   onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf.current);
      document.head.removeChild(style);
    };
  }, []); // ← empty deps: only runs once, no re-subscription bugs

  // Derived sizes & colors
  const dotSize  = state === "click" ? 5  : state === "hover" ? 9  : 7;
  const ringSize = state === "click" ? 24 : state === "hover" ? 44 : 32;
  const accent   = state === "hover" || state === "click";

  return (
    <>
      {/* Dot — instant snap */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform select-none"
        style={{ opacity: visible ? 1 : 0, transition: "opacity 0.25s ease" }}
      >
        <div
          style={{
            width:  dotSize,
            height: dotSize,
            borderRadius: "50%",
            background: accent ? "#46B5F1" : "rgba(255,255,255,0.92)",
            boxShadow: accent
              ? "0 0 10px rgba(70,181,241,0.9), 0 0 20px rgba(70,181,241,0.4)"
              : "0 0 6px rgba(255,255,255,0.5)",
            transition: "width 0.15s ease, height 0.15s ease, background 0.15s ease, box-shadow 0.15s ease",
          }}
        />
      </div>

      {/* Ring — smooth lerp follow */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] will-change-transform select-none"
        style={{ opacity: visible ? 1 : 0, transition: "opacity 0.25s ease" }}
      >
        <div
          style={{
            width:  ringSize,
            height: ringSize,
            borderRadius: "50%",
            border: `1.5px solid ${accent ? "rgba(70,181,241,0.65)" : "rgba(255,255,255,0.22)"}`,
            background: accent ? "rgba(70,181,241,0.06)" : "transparent",
            boxShadow: accent ? "0 0 18px rgba(70,181,241,0.12)" : "none",
            transition: "width 0.2s ease, height 0.2s ease, border-color 0.2s ease, background 0.2s ease",
          }}
        />
      </div>
    </>
  );
};
