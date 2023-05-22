import React, { useState } from "react";
import { Box, ProgressBar } from "@shopify/polaris";
import { InfoMinor } from "@shopify/polaris-icons";
import "./IntroductionForm.scss";

import Header from "../Header/Header";
import SearchBar from "../Search/SearchBar";
import RadioContainer from "../RadioContainer/RadioContainer";

export default function IntroductionForm({ onNext }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const businessStructureResponse = [
    { response: "Just me (Sole Proprietorship)" },
    { response: "Me and a few others (General Partnership)" },
    {
      response: "Limited Partnership",
      icon: InfoMinor,
      info: "Limited Partnership - A limited partnership is like a team where some people invest money to start a business, but only one person takes the lead and makes important decisions, while the others have less responsibility and only invest money.",
    },
    {
      response: "Incorporated Company",
      icon: InfoMinor,
      info: "Incorporated company - An incorporated company is like a superhero team where all the owners join forces and create a special legal entity for their business, which helps protect their personal assets and gives them the ability to grow and do big things together. ",
    },
  ];

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <SearchBar />
      <Header
        titleName="My Business Plan"
        text="Module 1 - Introduction"
        color="subdued"
      />
      <div className="intro">
        <Box>
          <div className="intro__progressbox">
            <ProgressBar progress={16} color="primary" />
          </div>
          <RadioContainer
            title="How is your business structured?"
            subTitle="(You can always change this later)"
            inputs={businessStructureResponse}
            selectedResponse={selectedOption}
            onOptionChange={handleOptionChange}
            linkTitle="Save and Exit"
            containerClass="intro__radio"
            onNext={onNext}
          />
        </Box>
      </div>
    </>
  );
}
