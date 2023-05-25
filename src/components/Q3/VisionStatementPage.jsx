import React from "react";
import Header from "../Header/Header";
import SearchBar from "../Search/SearchBar";
import VisionStatement from "./../MissionStatement/VisionStatement";
export default function VisionStatementPage({onNext}) {
    return (
      <>
        <SearchBar />
        <Header
          titleName="My Business Plan"
          text="Module 1 - Introduction"
          color="subdued"
          showDivider={true}
        />
        <VisionStatement onNext={onNext}/>
      </>
    );
  }