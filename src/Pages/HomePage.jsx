import React from "react";
import Header from "../components/Header/Header";
import SubHeader from "../components/Header/SubHeader";
import SetupGuide from "../components/SetupGuide/SetupGuide";

export default function HomePage() {
  return (
    <>
      <Header
        titleName="Home"
        text="Welcome to Shopify, My Store"
        color="subdued"
      />
      <SubHeader
        className="subheader-link"
        text="You have 1 day left of your trial"
        link="Select a Plan"
        color="inerative"
      />
      <SetupGuide />
    </>
  );
}
