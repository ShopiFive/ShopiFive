import React from "react";
import "./SetupGuide.scss";
import { MediaCard, Box, ProgressBar, Text } from "@shopify/polaris";

export default function Setup() {
  return (
    <Box className="setup">
      <MediaCard title="Setup Guide" description="Your trail ends tomorrow">
        <div className="setup__image" />
      </MediaCard>
      <div className="setup__progress">
        <ProgressBar progress={16} />
      </div>
    </Box>
  );
}
