import React from "react";
import { AlphaCard, Text, Link, Banner, Button } from "@shopify/polaris";
import "./Header.scss";

export default function SubHeader({ text, link }) {
  return (
    <div className="subheader">
      <AlphaCard>
        <div className="subheader__container">
          <div className="subheader__items">
            <Text as="p">{text}</Text>
          </div>
          <div className="subheader__items">
            <Link url="#">{link}</Link>
          </div>
          <Banner onDismiss={() => {}}>
            <div className="subheader__banner">
              <p className="subheader__bannertext">
                Extend your trial for <i>free</i> up to 3 months by creating a
                business plan.
              </p>
              <Button>Lean More</Button>
            </div>
          </Banner>
        </div>
      </AlphaCard>
    </div>
  );
}
