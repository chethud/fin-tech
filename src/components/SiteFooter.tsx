import Image from "next/image";
import { Icon } from "./Icon";

export function SiteFooter() {
  return (
    <footer>
      <div className="wrap rv">
        <div>
          <a className="logo" href="#">
            <Image
              src="/ksic/assets/ksic_logo.png"
              alt="KSIC Mysore Silk — heritage weaves, 100% pure silk since 1912"
              width={160}
              height={56}
            />
          </a>
        </div>
        <div>
          <h5>Shop</h5>
          <ul>
            <li>Sarees</li>
            <li>Menswear</li>
            <li>Festive</li>
            <li>Wedding</li>
            <li>Gifts</li>
          </ul>
        </div>
        <div>
          <h5>About</h5>
          <ul>
            <li>Our Heritage</li>
            <li>Craftsmanship</li>
            <li>Sustainability</li>
            <li>News & Events</li>
          </ul>
        </div>
        <div>
          <h5>Help</h5>
          <ul>
            <li>Track Order</li>
            <li>Store Locator</li>
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="social">
          <a href="#" aria-label="Facebook">
            <Icon id="i-fb" />
          </a>
          <a href="#" aria-label="Instagram">
            <Icon id="i-ig" />
          </a>
          <a href="#" aria-label="YouTube">
            <Icon id="i-yt" />
          </a>
        </div>
      </div>
      <div className="legal">
        <span>© 2026 KSIC Mysore Silk. All rights reserved.</span>
        <span>Government of Karnataka Initiative · A Heritage Since 1912</span>
      </div>
    </footer>
  );
}
