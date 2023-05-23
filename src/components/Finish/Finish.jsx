import React from "react";
import "./Finish.scss";
import { Button, ProgressBar } from "@shopify/polaris";

import Header from "../Header/Header";
import SearchBar from "../Search/SearchBar";
import SetupGuide from "../SetupGuide/SetupGuide";

export default function Finish() {
  const module = [
    { text: "Introduction", completed: true },
    { text: "Mission Statement", completed: true },
    { text: "Vision Statement", completed: true },
  ];

  return (
    <div className="finish">
      <SearchBar />
      <Header
        titleName="My Business Plan"
        text="Module 1 - Company Overview"
        showDivider={false}
      />
      <div className="finish__progressbox">
        <ProgressBar progress={85} color="primary" />
      </div>
      <SetupGuide
        title="Module 1"
        description="Started 05/20/2023"
        progress={100}
        progressText="3 of 3 tasks complete"
        inputs={module}
        containerClassOne={"finish__guide"}
        containerClassTwo={"finish__listbullets"}
        listItemClass={"finish__listitem"}
      />
      <Button primary>Finish</Button>
    </div>
  );
}
