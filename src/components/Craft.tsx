import { Icon } from "./Icon";

export function Craft() {
  return (
    <section className="craft">
      <div className="art">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          data-parallax="0.06"
          src="/ksic/assets/loom.jpg"
          alt="Silk being woven on a traditional loom"
        />
      </div>
      <div className="copy band-copy rv rv-right">
        <div className="kicker">The Art of Mysore Silk</div>
        <h2>
          Crafted by
          <br />
          Generations
        </h2>
        <p>
          From the finest mulberry silk to intricate zari weaves, every KSIC
          creation is a tribute to exceptional craftsmanship and timeless
          beauty.
        </p>
        <a className="btn line sweep nudge" href="#">
          Our Craftsmanship <Icon id="i-arrow" />
        </a>
      </div>
    </section>
  );
}
