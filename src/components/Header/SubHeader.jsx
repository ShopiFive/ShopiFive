import React from "react";
import { AlphaCard, Text, Link } from "@shopify/polaris";
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
        </div>
      </AlphaCard>
    </div>
  );
}
