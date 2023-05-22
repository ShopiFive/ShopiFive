import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Box,
    Text,
    LegacyStack,
    RadioButton,
    Divider,
    Button,
    TextField,
    Icon,
} from "@shopify/polaris";
import { MobilePlusMajor } from '@shopify/polaris-icons';
import "./WhatDoYouSellForm.scss";

export default function WhatDoYouSellForm() {
    const navigate = useNavigate();

    const [selectedOption, setSelectedOption] = useState(null);
    const [showNewServiceField, setShowNewServiceField] = useState(false);

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    const inputs = [
        { response: 'Products' },
        { response: 'Services' },
        { response: 'Both' }
    ];

    const selectedResponse = 'Both';

    const selectedInput = selectedOption !== null ? inputs[selectedOption].response : "";

    return (
        <div className="form">
            <Box>
                <div className="form__header">
                    <Text variant="headingXl" as="h4">
                        What do you sell?
                    </Text>
                    <Text variant="subdued">
                        (Selected based on your previous answers)
                    </Text>
                </div>
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
                    <div className="form__footer">
                        <Text variant="headingXl" as="h4" className="form__footer-heading">
                            What kind of services do you sell?
                        </Text>
                        <Divider />
                        <div className="add-service-wrapper">
                            <div className="add-service" onClick={() => setShowNewServiceField(true)}>
                                <Icon source={MobilePlusMajor} />
                                <span>Add another service</span>
                            </div>
                            {showNewServiceField &&
                                <div className="new-service-field">
                                    <TextField placeholder="Type here..." />
                                    <Button plain onClick={() => setShowNewServiceField(false)}>Cancel</Button>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="form__cta">
                        {selectedInput === selectedResponse ? (
                            <>
                                <p className="form__msg">
                                    We recommend creating a new business plan.
                                </p>
                                <Button
                                    primary
                                    onClick={() => {
                                        navigate("/home/myplan/form");
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
