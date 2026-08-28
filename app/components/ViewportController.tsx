"use client";

import { useEffect } from "react";

export default function ViewportController() {
  useEffect(() => {
    const root = document.documentElement;
    const viewport = window.visualViewport;

    if (!viewport) return;

    let frame = 0;

    const updateViewport = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        root.style.setProperty("--app-height", `${viewport.height}px`);
        root.style.setProperty("--app-top", `${viewport.offsetTop}px`);
      });
    };

    updateViewport();
    viewport.addEventListener("resize", updateViewport);
    viewport.addEventListener("scroll", updateViewport);
    window.addEventListener("orientationchange", updateViewport);

    return () => {
      cancelAnimationFrame(frame);
      viewport.removeEventListener("resize", updateViewport);
      viewport.removeEventListener("scroll", updateViewport);
      window.removeEventListener("orientationchange", updateViewport);
    };
  }, []);

  return null;
}
