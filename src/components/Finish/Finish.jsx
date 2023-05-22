import React from "react";
import "./Finish.scss";
import { ProgressBar } from "@shopify/polaris";

import Header from "../Header/Header";
import SearchBar from "../Search/SearchBar";
import SetupGuide from "../SetupGuide/SetupGuide";

export default function Finish() {
  const module = [
    { text: "Introduction" },
    { text: "Mission Statement" },
    { text: "Vision Statement" },
  ];

  return (
    <>
      <SearchBar />
      <Header
        titleName="My Business Plan"
        text="Module 1 - Company Overview"
        showDivider={false}
      />
      <div className="finish">
        <div className="finish__progressbox">
          <ProgressBar progress={85} color="primary" />
        </div>
      </div>
      <SetupGuide
        title="Module 1"
        description="Started 05/20/2023"
        progress={100}
        progressText="3 of 3 tasks complete"
        inputs={module}
      />
    </>
  );
}
