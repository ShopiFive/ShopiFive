import React from "react";
import { Link } from "react-router-dom";
import "./SetupGuide.scss";
import {
  MediaCard,
  Box,
  ProgressBar,
  Text,
  AlphaCard,
  LegacyStack,
  RadioButton,
  Divider,
} from "@shopify/polaris";

import rightarrow from "../../assets/icons/navigate_next_24.svg";

export default function Setup() {
  const inputs = [
    { text: "Add your first product" },
    { text: "Name your store" },
    { text: "Customize theme" },
    { text: "Set your shopping rates" },
    { text: "Remove your store password" },
    { text: "Share your products" },
  ];
  return (
    <Box className="setup">
      <MediaCard title="Setup Guide" description="Your trail ends tomorrow">
        <div className="setup__image" />
      </MediaCard>
      <div className="setup__progress">
        <ProgressBar progress={16} color="primary" />
        <div className="setup__progresstext">
          <Text variant="headingXs" as="h6" color="subdued">
            0 of 6 tasks complete
          </Text>
        </div>
        <div className="setup__guide">
          <AlphaCard>
            <LegacyStack vertical>
              <ul className="setup__inputbox">
                {inputs.map((items, index) => {
                  return (
                    <li className="setup__list" key={index}>
                      <Link className="setup__content">
                        <RadioButton label={items.text} />
                        <img
                          src={rightarrow}
                          alt="Image 1"
                          className="setup__icon"
                        />
                      </Link>
                      <Divider />
                    </li>
                  );
                })}
              </ul>
            </LegacyStack>
          </AlphaCard>
        </div>
      </div>
    </Box>
  );
}
