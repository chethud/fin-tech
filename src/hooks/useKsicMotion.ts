"use client";

import { useEffect } from "react";

export function useKsicMotion() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    document.querySelectorAll<HTMLElement>("[data-stagger]").forEach((group) => {
      const step = parseFloat(group.dataset.stagger || "") || 0.09;
      [...group.children].forEach((child, i) => {
        const el = child as HTMLElement;
        el.classList.add("rv");
        el.style.setProperty("--d", `${i * step}s`);
      });
    });

    document.querySelectorAll(".rv, .draw").forEach((el) => io.observe(el));

    document.querySelectorAll(".intro").forEach((group) => {
      [...group.children].forEach((child, i) => {
        (child as HTMLElement).style.setProperty("--i", String(i));
      });
    });

    const header = document.querySelector(".site-header");
    const onScroll = () => {
      header?.classList.toggle("scrolled", window.scrollY > 24);
    };
    if (header) {
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }

    const layers = [...document.querySelectorAll<HTMLElement>("[data-parallax]")];
    let ticking = false;
    const runParallax = () => {
      layers.forEach((el) => {
        const box = el.parentElement?.getBoundingClientRect();
        if (!box) return;
        const k = parseFloat(el.dataset.parallax || "") || 0.08;
        const shift = (box.top + box.height / 2 - window.innerHeight / 2) * -k;
        el.style.transform = `translate3d(0, ${shift.toFixed(1)}px, 0) scale(1.12)`;
      });
      ticking = false;
    };
    const onParallaxScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(runParallax);
      }
    };
    if (layers.length && !reduce) {
      window.addEventListener("scroll", onParallaxScroll, { passive: true });
      runParallax();
    }

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onParallaxScroll);
    };
  }, []);
}
