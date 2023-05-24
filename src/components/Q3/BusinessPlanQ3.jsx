import React from "react";
import Header from "../Header/Header";
import SearchBar from "../Search/SearchBar";
import WhatDoYouSellForm from "./../WhatDoYouSellForm/WhatDoYouSellForm";
export default function BusinessPlanQ3({onNext}) {
    return (
      <>
        <SearchBar />
        <Header
          titleName="My Business Plan"
          text="Module 1 - Introduction"
          color="subdued"
          showDivider={true}
        />
        <WhatDoYouSellForm onNext={onNext}/>
      </>
    );
  }