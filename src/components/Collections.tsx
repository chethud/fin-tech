import Image from "next/image";
import { Icon } from "./Icon";

const COLLECTIONS = [
  { src: "/ksic/assets/col_sarees.jpg", label: "Sarees" },
  { src: "/ksic/assets/col_festive.jpg", label: "Festive" },
  { src: "/ksic/assets/col_wedding.jpg", label: "Wedding" },
  { src: "/ksic/assets/col_menswear.jpg", label: "Menswear" },
  { src: "/ksic/assets/col_gifts.jpg", label: "Gifts" },
];

export function Collections() {
  return (
    <section className="block" id="collections">
      <div className="wrap">
        <div className="head rv">
          <div>
            <div className="kicker">Explore Our Collections</div>
            <h2>
              Tradition for
              <br />
              Every Occasion
            </h2>
          </div>
          <a className="more nudge" href="#">
            View All Collections <Icon id="i-arrow" />
          </a>
        </div>
        <div className="cols" data-stagger="">
          {COLLECTIONS.map((item) => (
            <a className="tile lift rv" href="#" key={item.label}>
              <div className="zoom">
                <Image
                  src={item.src}
                  alt={item.label}
                  width={400}
                  height={328}
                />
              </div>
              <div className="row nudge">
                {item.label} <Icon id="i-arrow" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
