import React from "react";
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
  Icon,
} from "@shopify/polaris";
import { ChevronRightMinor } from "@shopify/polaris-icons";

export default function Setup({ title, description, progressText, inputs }) {
  return (
    <Box className="setup">
      <MediaCard title={title} description={description}>
        <div className="setup__image" />
      </MediaCard>
      <div className="setup__progress">
        <ProgressBar progress={16} color="primary" />
        <div className="setup__progresstext">
          <Text variant="headingXs" as="h6" color="subdued">
            {progressText}
          </Text>
        </div>
        <div className="setup__guide">
          <AlphaCard>
            <LegacyStack vertical>
              <ul className="setup__inputbox">
                {inputs.map((items, index) => {
                  return (
                    <li className="setup__list" key={index}>
                      <div className="setup__content">
                        <RadioButton label={items.text} />
                        <div className="setup__icon">
                          <Icon source={ChevronRightMinor} color="subdued" />
                        </div>
                      </div>
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
