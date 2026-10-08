"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Icon } from "./Icon";

const NAV_LINKS = [
  { href: "#", label: "Shop", chevron: true },
  { href: "#collections", label: "Collections", chevron: true },
  { href: "#", label: "Wedding", chevron: true },
  { href: "#", label: "Festive", chevron: true },
  { href: "#", label: "Menswear", chevron: true },
  { href: "#heritage", label: "Our Heritage", chevron: false },
  { href: "#", label: "About", chevron: false },
];

const EXTRA_LINKS = [
  { href: "#", label: "Store Locator" },
  { href: "#", label: "Track Order" },
  { href: "#", label: "Help" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <header className="site-header">
        <nav className="wrap nav">
          <a className="logo" href="#">
            <Image
              src="/ksic/assets/ksic_logo.png"
              alt="KSIC Mysore Silk — heritage weaves, 100% pure silk since 1912"
              width={160}
              height={58}
              priority
            />
          </a>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a className="ul" href={link.href}>
                  {link.label}
                  {link.chevron ? <Icon id="i-chev" /> : null}
                </a>
              </li>
            ))}
          </ul>
          <span className="icons">
            <a href="#" aria-label="Search">
              <Icon id="i-search" />
            </a>
            <a href="#" aria-label="Account">
              <Icon id="i-user" />
            </a>
            <a href="#" aria-label="Wishlist">
              <Icon id="i-heart" />
            </a>
            <a href="#" className="cart" aria-label="Cart">
              <Icon id="i-bag" />
              <i>0</i>
            </a>
            <button
              type="button"
              className="menu-btn"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <span />
              <span />
              <span />
            </button>
          </span>
        </nav>
      </header>

      <div className="menu-panel" inert={!menuOpen}>
        <div className="menu-top">
          <Image
            src="/ksic/assets/ksic_logo.png"
            alt="KSIC Mysore Silk — heritage weaves, 100% pure silk since 1912"
            width={140}
            height={46}
          />
          <button
            type="button"
            className="menu-close"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <span />
            <span />
          </button>
        </div>
        <nav className="menu-links" aria-label="Main">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              style={{ ["--i" as string]: i }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="menu-extra">
          {EXTRA_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              style={{ ["--i" as string]: i }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="menu-note">
          Government of Karnataka Initiative · A Heritage Since 1912
        </p>
      </div>
    </>
  );
}
