import React, { useState } from "react";
import "./SetupGuide.scss";
import {
  MediaCard,
  Box,
  ProgressBar,
  Text,
  AlphaCard,
  LegacyStack,
  Divider,
  Icon,
} from "@shopify/polaris";
import {
  ChevronRightMinor,
  CircleTickMinor,
  ChevronDownMinor,
} from "@shopify/polaris-icons";

export default function Setup({
  title,
  description,
  progress,
  progressText,
  inputs,
  containerClassOne,
  containerClassTwo,
}) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="setup">
      <Box>
        <MediaCard title={title} description={description}>
          <div className="setup__image" />
        </MediaCard>
        <div className="setup__progress">
          <ProgressBar progress={progress} color="primary" />
          <div className="setup__progresstext">
            <Text variant="headingXs" as="h6" color="subdued">
              {progressText}
            </Text>
          </div>
          <div className={`setup__guide ${containerClassOne}`}>
            <AlphaCard>
              <LegacyStack vertical>
                <ul className="setup__inputbox">
                  {inputs.map((items, index) => {
                    const isCompleted = items.completed;
                    const isOpen = openIndex === index;

                    return (
                      <li
                        className={`setup__list ${
                          isOpen ? "setup__list--expanded" : ""
                        }`}
                        key={index}
                      >
                        <div className="setup__content">
                          <div
                            className={`setup__textbox ${containerClassTwo}`}
                          >
                            {isCompleted && (
                              <Icon source={CircleTickMinor} color="success" />
                            )}
                            <p>{items.text}</p>
                          </div>
                          {isCompleted ? (
                            <div
                              className="setup__icon"
                              onClick={() => handleToggle(index)}
                            >
                              <Icon
                                source={
                                  isOpen ? ChevronDownMinor : ChevronRightMinor
                                }
                                color="subdued"
                                className={`setup__arrow ${
                                  isOpen ? "expanded" : ""
                                }`}
                              />
                            </div>
                          ) : (
                            <div className="setup__icon">
                              <Icon
                                source={ChevronRightMinor}
                                color="subdued"
                              />
                            </div>
                          )}
                        </div>
                        {isOpen && isCompleted && (
                          <div className="setup__collapsible-msg">
                            <div className="setup__collapsible-header">
                              <p>Last edited 05/20/2023</p>
                              <button className="setup__collapsible-button">
                                Edit
                              </button>
                            </div>
                            <>
                              Paw Print Post will create a world where every pet
                              is celebrated and cherished
                            </>
                          </div>
                        )}
                        <Divider />
                      </li>
                    );
                  })}
                </ul>
              </LegacyStack>
            </AlphaCard>
          </div>
        </div>
      </Box>
    </div>
  );
}