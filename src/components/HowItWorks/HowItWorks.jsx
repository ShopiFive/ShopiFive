import React from "react";
import { AlphaCard, Text } from "@shopify/polaris";
import "./HowItWorks.scss";

export default function HowItWorks() {
  return (
    <div className="card">
      <AlphaCard>
        <Text variant="headingXl" as="h4">
          How it works:
        </Text>
        <div className="card__content">
          <ul className="card__list">
            <li>Complete your business plan at your pace</li>
            <li>
              Our bite-sized modules make it easy to make progress with 5-10
              minutes a day
            </li>
            <li>Finalise your business plan in as little as 7 days!</li>
          </ul>
          <div className="card__graphic">
            <p>On brand graphic</p>
          </div>
        </div>
      </AlphaCard>
    </div>
  );
}
