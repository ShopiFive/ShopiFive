import React from "react";
import Header from "../components/Header/Header";
import HowItWorks from "../components/HowItWorks/HowItWorks";

export default function MyPlanPage() {
  return (
    <>
      <Header
        titleName="My Business Plan"
        text="Subhead here"
        color="subdued"
      />
      <HowItWorks />
    </>
  );
}
