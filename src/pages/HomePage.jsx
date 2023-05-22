import React from "react";
import Header from "../components/Header/Header";
import SubHeader from "../components/Header/SubHeader";
import SetupGuide from "../components/SetupGuide/SetupGuide";
import SearchBar from "../components/Search/SearchBar";


export default function HomePage() {
  const setup = [
    { text: "Add your first product" },
    { text: "Name your store" },
    { text: "Customize theme" },
    { text: "Set your shopping rates" },
    { text: "Remove your store password" },
    { text: "Share your products" },
  ];

  return (
    <>
      <SearchBar />
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
      <SetupGuide
        title="Setup Guide"
        description="Your trial ends tomorrow"
        progressText="0 of 6 tasks complete"
        inputs={setup}
      />
    </>
  );
}
