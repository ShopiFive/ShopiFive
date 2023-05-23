import React from "react";
import Header from "../components/Header/Header";
import MyBusinessPlan from "../components/MyBusinessPlan/MyBusinessPlan";
import SearchBar from "../components/Search/SearchBar";

export default function MyPlanPage() {
  return (
    <>
      <SearchBar />
      <Header
        titleName="My Business Plan"
        text="Subhead here"
        color="subdued"
        showDivider={true}
      />
      <MyBusinessPlan />
    </>
  );
}
