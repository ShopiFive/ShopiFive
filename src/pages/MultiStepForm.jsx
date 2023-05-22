import React, { useState } from "react";
import IntroductionForm from "../components/IntroductionForm/IntroductionForm";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    // Update the form data with the current step's data
    setFormData((prevData) => ({
      ...prevData,
      step1: data,
    }));

    // Proceed to the next step
    setStep((prevStep) => prevStep + 1);
  };

  // Render the appropriate step based on the current step value
  const renderStep = () => {
    switch (step) {
      case 1:
        return <IntroductionForm onNext={handleNext} />;
      // Add more cases for other steps
      default:
        return null;
    }
  };

  return <div>{renderStep()}</div>;
}
