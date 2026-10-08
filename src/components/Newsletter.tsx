"use client";

import { FormEvent, useState } from "react";
import { Icon } from "./Icon";

export function Newsletter() {
  const [subscribed, setSubscribed] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubscribed(true);
    e.currentTarget.reset();
  };

  return (
    <section className="news">
      <div className="wrap rv">
        <Icon id="i-lotus" className="ic big float" />
        <div>
          <div className="kicker">Stay Connected</div>
          <h3>Be the First to Know</h3>
          <p>
            Get updates on new collections, festive launches and exclusive
            offers.
          </p>
        </div>
        <form data-subscribe="" onSubmit={onSubmit}>
          <input
            type="email"
            placeholder="Enter your email address"
            required
            aria-label="Email address"
          />
          <button className="sweep" type="submit">
            {subscribed ? "Subscribed ✓" : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
}
