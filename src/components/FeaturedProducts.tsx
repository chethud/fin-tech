import Image from "next/image";
import { Icon } from "./Icon";

const PRODUCTS = [
  {
    src: "/ksic/assets/prod_red.jpg",
    title: "Classic Zari Saree",
    price: "₹ 24,500",
  },
  {
    src: "/ksic/assets/prod_cream.jpg",
    title: "Temple Border Saree",
    price: "₹ 28,900",
  },
  {
    src: "/ksic/assets/prod_green.jpg",
    title: "Butta Collection",
    price: "₹ 26,800",
  },
  {
    src: "/ksic/assets/prod_purple.jpg",
    title: "Checks & Stripes",
    price: "₹ 25,600",
  },
];

export function FeaturedProducts() {
  return (
    <section className="block">
      <div className="wrap">
        <div className="head rv">
          <div className="kicker">Featured Products</div>
          <a className="more nudge" href="#">
            View All <Icon id="i-arrow" />
          </a>
        </div>
        <div className="prods" data-stagger="">
          {PRODUCTS.map((product) => (
            <article className="lift rv" key={product.title}>
              <div className="zoom">
                <Image
                  src={product.src}
                  alt={product.title}
                  width={400}
                  height={300}
                />
              </div>
              <div className="meta">
                <div>
                  <h4>{product.title}</h4>
                  <div className="price">{product.price}</div>
                </div>
                <a className="add" href="#" aria-label="Add to bag">
                  <Icon id="i-bag" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
