import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlphaCard, Button, Text } from "@shopify/polaris";
import "./MyBusinessPlan.scss";
import RadioContainer from "../RadioContainer/RadioContainer";

export default function MyBusinessPlan() {
  const navigate = useNavigate();

  const [openForm, setOpenForm] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const getStartedResponse = [
    { response: "No, I haven't." },
    { response: "Yes, but it's not complete." },
    { response: "Yes, it's complete." },
    { response: "I don't know." },
  ];

  const handleGetStarted = () => {
    setOpenForm(true);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleOnNext = () => {
    navigate("/home/myplan");
  };

  return (
    <>
      <div className="card">
        <AlphaCard>
          <Text variant="headingXl" as="h4">
            How it works:
          </Text>
          <div className="card__content">
            <ul className="card__list">
              <li>Complete your business plan at your pace</li>
              <li>
                Our bite-sized modules make it easy to make progress with 5-10
                minutes a day
              </li>
              <li>Finalise your business plan in as little as 7 days!</li>
            </ul>
            <div className="card__graphic">
              <p>On brand graphic</p>
            </div>
          </div>
          <div className="card__button">
            <Button primary onClick={handleGetStarted}>
              Get Started
            </Button>
          </div>
        </AlphaCard>
      </div>
      {openForm && (
        <div className="card__form">
          <RadioContainer
            title="Have you already created a business plan for your company?"
            inputs={getStartedResponse}
            selectedResponse={selectedOption}
            linkTitle="Cancel"
            selectedOption={selectedOption}
            showBeginButton={true}
            onOptionChange={handleOptionChange}
            onNext={handleOnNext}
          />
        </div>
      )}
    </>
  );
}