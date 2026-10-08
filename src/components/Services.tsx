import { Icon } from "./Icon";

export function Services() {
  return (
    <section className="services">
      <div className="wrap" data-stagger="">
        <div>
          <Icon id="i-truck" />
          Secure & Reliable
          <br />
          Delivery
        </div>
        <div>
          <Icon id="i-gift" />
          Premium
          <br />
          Packaging
        </div>
        <div>
          <Icon id="i-shield" />
          Certified
          <br />
          Authenticity
        </div>
        <div>
          <Icon id="i-hands" />
          Support
          <br />
          Artisans
        </div>
      </div>
    </section>
  );
}
