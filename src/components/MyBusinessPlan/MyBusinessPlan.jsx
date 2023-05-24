import React, { useState } from "react";
import { AlphaCard, Button, Text } from "@shopify/polaris";
import "./MyBusinessPlan.scss";
import BusinessForm from "../BusinessForm/BusinessForm";
import Graphic from "../../assets/images/simple-graphic.png"

export default function MyBusinessPlan() {
  const [openForm, setOpenForm] = useState(false);

  const getStartedResponse = [
    { response: "No, I haven't." },
    { response: "Yes, but it's not complete." },
    { response: "Yes, it's complete." },
    { response: "I don't know." },
  ];

  const handleButton = () => {
    setOpenForm(true);
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
            <img className="card__graphic" src={Graphic} alt="industries" />
          </div>
          <div className="card__button">
            <Button primary onClick={handleButton}>
              Get Started
            </Button>
          </div>
        </AlphaCard>
      </div>
      {openForm && (
        <div className="card__form">
          <BusinessForm
            title="Have you already created a business plan for your company?"
            inputs={getStartedResponse}
            selectedResponse="No, I haven't."
          />
        </div>
      )}
    </>
  );
}
