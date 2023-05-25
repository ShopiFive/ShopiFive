import React from "react";
import "./Complete.scss";

import SearchBar from "../Search/SearchBar";
import Header from "../Header/Header";
import CompleteInfo from "./CompleteInfo";

export default function Complete({ onNext }) {
  return (
    <div className="complete">
      <SearchBar />
      <Header
        titleName="My Business Plan"
        text="Module 1 - Complete"
        showDivider={true}
      />
      <CompleteInfo onNext={onNext} />
    </div>
  );
}
