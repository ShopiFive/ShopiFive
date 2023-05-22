import React from "react";
import Header from "../components/Header/Header";
import SearchBar from "../components/Search/SearchBar";
import MissionStatement from "../components/MissionStatement/MissionStatement";
export default function MissionStatementPage() {
    return (
      <>
        <SearchBar />
        <Header
          titleName="My Business Plan"
          text="Module 1 - Introduction"
          color="subdued"
        />
        <MissionStatement/>
      </>
    );
  }