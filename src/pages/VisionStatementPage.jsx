import React from "react";
import Header from "../components/Header/Header";
import SearchBar from "../components/Search/SearchBar";
import VisionStatement from "../components/MissionStatement/VisionStatement";
export default function VisionStatementPage() {
    return (
      <>
        <SearchBar />
        <Header
          titleName="My Business Plan"
          text="Module 1 - Introduction"
          color="subdued"
        />
        <VisionStatement/>
      </>
    );
  }