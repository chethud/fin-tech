import { Icon } from "./Icon";
import { Petals } from "./Petals";

export function Occasion() {
  return (
    <section className="occasion">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        data-parallax="0.05"
        src="/ksic/assets/d8_occasion.jpg"
        alt="Rose-pink silk saree with a jasmine garland and a bouquet of white and blush roses"
      />
      <Petals />
      <div className="wrap band-copy rv">
        <div className="kicker">For Every Occasion</div>
        <h2>
          Tradition Woven
          <br />
          Into Life&apos;s Special Moments
        </h2>
        <p>
          From weddings to festive celebrations, find the perfect Mysore silk
          for every milestone.
        </p>
        <a className="btn line sweep nudge" href="#">
          Explore Wedding Collections <Icon id="i-arrow" />
        </a>
      </div>
    </section>
  );
}
