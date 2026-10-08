import { Icon } from "./Icon";

export function TrustStrip() {
  return (
    <section className="strip">
      <div className="wrap" data-stagger="">
        <div>
          <span className="badge">
            <Icon id="i-lotus" />
          </span>
          100+ Years
          <br />
          of Heritage
        </div>
        <div>
          <span className="badge">
            <Icon id="i-mandala" />
          </span>
          Pure
          <br />
          Mysore Silk
        </div>
        <div>
          <span className="badge">
            <Icon id="i-leaf" />
          </span>
          GI Certified
        </div>
        <div>
          <span className="badge">
            <Icon id="i-shield" />
          </span>
          Authentic &
          <br />
          Sustainable
        </div>
      </div>
    </section>
  );
}
