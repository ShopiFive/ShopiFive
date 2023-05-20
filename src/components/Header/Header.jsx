import React from "react";
import { AlphaCard, Divider, Text } from "@shopify/polaris";
import "./Header.scss";

export default function Header({ titleName, text, color }) {
  return (
    <div className="header">
      <AlphaCard>
        <Text variant="heading4xl" as="h1">
          {titleName}
        </Text>
        <Text color={color} as="p">
          {text}
        </Text>
      </AlphaCard>
      <Divider color="subdued" />
    </div>
  );
}
