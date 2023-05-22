import React from "react";
import Header from "../components/Header/Header";
import SearchBar from "../components/Search/SearchBar";
import WhatDoYouSellForm from "../components/WhatDoYouSellForm/WhatDoYouSellForm";
export default function BusinessPlanQ3() {
    return (
      <>
        <SearchBar />
        <Header
          titleName="My Business Plan"
          text="Module 1 - Introduction"
          color="subdued"
        />
        <WhatDoYouSellForm/>
      </>
    );
  }