import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Text,
  LegacyStack,
  RadioButton,
  Divider,
  Button,
  Icon,
  Tooltip,
} from "@shopify/polaris";
import "./RadioContainer.scss";

export default function RadioContainer({
  title,
  subTitle,
  inputs,
  selectedResponse,
  onOptionChange,
  linkTitle,
  containerClass,
}) {
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    onOptionChange(option);
  };

  const selectedInput =
    selectedOption !== null ? inputs[selectedOption].response : "";

  return (
    <form className={`radio ${containerClass}`}>
      <Box>
        <Text variant="headingXl" as="h4">
          {title}
        </Text>
        <p className="radio__subtitle">{subTitle}</p>
        <LegacyStack vertical>
          <ul className="radio__inputbox">
            {inputs.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <Divider />
                  <li className="radio__list" key={index}>
                    <div className="radio__content">
                      <RadioButton
                        label={item.response}
                        checked={selectedOption === index}
                        onChange={() => handleOptionChange(index)}
                      />
                      {item.icon && (
                        <Tooltip content={item.info}>
                          <span>
                            <Icon source={item.icon} color="base" />
                          </span>
                        </Tooltip>
                      )}
                    </div>
                  </li>
                </React.Fragment>
              );
            })}
          </ul>
          <div className="radio__cta">
            {selectedInput === selectedResponse ? (
              <>
                <p className="radio__msg">
                  We recommend creating a new business plan.
                </p>
                <Button
                  primary
                  onClick={() => {
                    navigate("/home/newplan");
                  }}
                >
                  Begin
                </Button>
              </>
            ) : (
              <Button primary disabled={selectedOption === null}>
                Next
              </Button>
            )}
            <Link className="radio__cancel" to="/home">
              {linkTitle}
            </Link>
          </div>
        </LegacyStack>
      </Box>
    </form>
  );
}
