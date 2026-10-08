"use client";

import { useKsicMotion } from "@/hooks/useKsicMotion";
import { Collections } from "./Collections";
import { Craft } from "./Craft";
import { FeaturedProducts } from "./FeaturedProducts";
import { Heritage } from "./Heritage";
import { Hero } from "./Hero";
import { IconSprite } from "./IconSprite";
import { Newsletter } from "./Newsletter";
import { Occasion } from "./Occasion";
import { Services } from "./Services";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { Topbar } from "./Topbar";
import { TrustStrip } from "./TrustStrip";

export function HomePage() {
  useKsicMotion();

  return (
    <>
      <IconSprite />
      <Topbar />
      <SiteHeader />
      <Hero />
      <TrustStrip />
      <Collections />
      <Heritage />
      <Craft />
      <FeaturedProducts />
      <Occasion />
      <Services />
      <Newsletter />
      <SiteFooter />
    </>
  );
}
