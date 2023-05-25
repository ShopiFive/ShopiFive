import React from "react";
import { AlphaCard, Divider, Text } from "@shopify/polaris";
import "./Header.scss";

export default function Header({ titleName, text, color, showDivider }) {
  return (
    <div className="header">
      <AlphaCard>
        <Text variant="heading4xl" as="h1">
          {titleName}
        </Text>
        <p className="header__subtext">{text}</p>
      </AlphaCard>
      {showDivider && <Divider color="subdued" />}
    </div>
  );
}
