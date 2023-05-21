import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Text,
  LegacyStack,
  RadioButton,
  Divider,
  Button,
} from "@shopify/polaris";
import "./BusinessForm.scss";

export default function BusinessForm({ title, inputs, selectedResponse }) {
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const selectedInput =
    selectedOption !== null ? inputs[selectedOption].response : "";

  return (
    <div className="form">
      <Box>
        <Text variant="headingXl" as="h4">
          {title}
        </Text>
        <LegacyStack vertical>
          <ul className="form__inputbox">
            {inputs.map((items, index) => {
              return (
                <React.Fragment key={index}>
                  <Divider />
                  <li className="form__list" key={index}>
                    <div className="form__content">
                      <RadioButton
                        label={items.response}
                        checked={selectedOption === index}
                        onChange={() => handleOptionChange(index)}
                      />
                    </div>
                  </li>
                </React.Fragment>
              );
            })}
          </ul>
          <div className="form__cta">
            {selectedInput === selectedResponse ? (
              <>
                <p className="form__msg">
                  We recommend creating a new business plan.
                </p>
                <Button
                  primary
                  onClick={() => {
                    navigate("/myplan/form");
                  }}
                >
                  Begin
                </Button>
              </>
            ) : (
              <Button primary disabled={!selectedOption}>
                Next
              </Button>
            )}
            <Link className="form__cancel" to="/home">
              Cancel
            </Link>
          </div>
        </LegacyStack>
      </Box>
    </div>
  );
}
