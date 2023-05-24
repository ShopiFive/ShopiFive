import React, { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Box,
    Text,
    LegacyStack,
    RadioButton,
    Divider,
    ProgressBar,
    Button,
    TextField,
    Icon,
    Select
} from "@shopify/polaris";
import { MobilePlusMajor } from '@shopify/polaris-icons';
import "./WhatDoYouSellForm.scss";

export default function WhatDoYouSellForm({onNext}) {
    const navigate = useNavigate();


    const [selectedOption, setSelectedOption] = useState(null);
    const [showNewServiceField, setShowNewServiceField] = useState(false);
    const [selectedService, setSelectedService] = useState();


    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };


    const handleServiceChange = useCallback((value) => setSelectedService(value), []);


    const inputs = [
        { response: 'Products' },
        { response: 'Services' },
        { response: 'Both' }
    ];


    const serviceOptions = [
        { label: 'Education', value: 'education' },
        { label: 'Clothing', value: 'clothing' },
        { label: 'Footware', value: 'footware' },
        { label: 'Software', value: 'software' },
        { label: 'Technology', value: 'technology' },
        { label: 'Retail', value: 'retail' },
        { label: 'Cosmetics', value: 'cosmetics' },
        { label: 'Health & Wellness', value: 'health_wellness' },
        { label: 'Fitness', value: 'fitness' },
        { label: 'Travel & Hospitality', value: 'travel_hospitality' },
        { label: 'Food', value: 'food' },
        { label: 'Accessories', value: 'accessories' },
        { label: 'Toys', value: 'toys' },
        { label: 'Arts & Crafts', value: 'arts_crafts' },
        { label: 'Furniture', value: 'furniture' },
    ];


    const selectedResponse = 'Both';


    const selectedInput = selectedOption !== null ? inputs[selectedOption].response : "";

    return (
        <div className="form">
            <Box>
                <div className="form__progressbox">
                    <ProgressBar progress={50} color="primary" />
                </div>
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
                            What kind of services/products do you sell?
                        </Text>
                        <Divider />
                        <div className="add-service-wrapper">
                            <Select
                                placeholder='Search or select a service'
                                options={serviceOptions}
                                onChange={handleServiceChange}
                                value={selectedService}
                            />
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
                            <Button primary disabled={!selectedService && !showNewServiceField} onClick={onNext}>
                                Next
                            </Button>
                        <Link className="form__cancel" to="/home">
                            Save and Exit
                        </Link>
                    </div>
                </LegacyStack>
            </Box>
        </div>
    );
}
