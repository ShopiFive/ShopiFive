import React from "react";
import Header from "../Header/Header";
import SearchBar from "../Search/SearchBar";
import MissionStatement from "./../MissionStatement/MissionStatement";
export default function MissionStatementPage({onNext}) {
    return (
      <>
        <SearchBar />
        <Header
          titleName="My Business Plan"
          text="Module 1 - Introduction"
          color="subdued"
          showDivider={true}
        />
        <MissionStatement onNext={onNext}/>
      </>
    );
  }