import { Icon } from "./Icon";

export function Heritage() {
  return (
    <section className="heritage" id="heritage">
      <div className="copy band-copy rv rv-left">
        <div className="kicker">Our Heritage</div>
        <h2>
          A Royal Legacy
          <br />
          Since 1912
        </h2>
        <p>
          For over a century, KSIC Mysore Silk has carried forward the rich
          weaving traditions of Karnataka, inspired by the royal heritage of
          Mysore.
        </p>
        <a className="btn line sweep nudge" href="#">
          Discover Our Story <Icon id="i-arrow" />
        </a>
      </div>
      <div className="art rv rv-right">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/ksic/assets/d8_heritage.jpg"
          alt="Fanned pale-gold and pink Mysore silk sarees beside a brass bowl of jasmine and rose petals"
        />
      </div>
    </section>
  );
}
