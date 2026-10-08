"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icon";
import { Petals } from "./Petals";

const DOT_COUNT = 4;

export function Hero() {
  const [activeDot, setActiveDot] = useState(1);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => {
      setActiveDot((prev) => (prev + 1) % DOT_COUNT);
    }, 3200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="hero">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="settle"
        src="/ksic/assets/d8_hero.jpg"
        alt="Rose-pink Mysore silk saree with a gold border on a white plinth beside jasmine and rose petals"
      />
      <Petals />
      <div className="wrap">
        <div className="hero-copy intro">
          <div className="kicker" style={{ ["--i" as string]: 0 }}>
            Karnataka&apos;s Pride
          </div>
          <h1 style={{ ["--i" as string]: 1 }}>
            Mysore Silk{" "}
            <em>
              A Timeless
              <br />
              Heritage
            </em>
          </h1>
          <p style={{ ["--i" as string]: 2 }}>
            Exquisite weaves from the royal land of Mysore.
            <br />
            Tradition, elegance and craftsmanship for generations.
          </p>
          <div style={{ ["--i" as string]: 3 }}>
            <a className="btn solid sweep nudge" href="#collections">
              Explore Collections <Icon id="i-arrow" />
            </a>
          </div>
          <div className="dots" data-dots="" style={{ ["--i" as string]: 4 }}>
            {Array.from({ length: DOT_COUNT }).map((_, i) => (
              <span key={i} className={i === activeDot ? "on" : ""} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
