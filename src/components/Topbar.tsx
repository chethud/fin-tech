import { Icon } from "./Icon";

export function Topbar() {
  return (
    <div className="topbar">
      <div className="wrap">
        <span>
          <Icon id="i-temple" />
          Government of Karnataka Initiative &nbsp;·&nbsp;{" "}
          <Icon id="i-crown" />
          A Heritage Since 1912
        </span>
        <span className="links">
          <a className="ul" href="#">
            Store Locator
          </a>
          <a className="ul" href="#">
            Track Order
          </a>
          <a className="ul" href="#">
            Help
          </a>
        </span>
      </div>
    </div>
  );
}
