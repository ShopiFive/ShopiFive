import React, { useState } from "react";
import IntroductionForm from "../components/IntroductionForm/IntroductionForm";
import Finish from "../components/Finish/Finish";
import Q2 from "../components/Question2/Q2";
import BusinessPlanQ3 from "../components/Q3/BusinessPlanQ3";
import MissionStatementPage from "../components/Q3/MissionStatementPage";
import VisionStatementPage from "../components/Q3/VisionStatementPage";
import Complete from "../components/Complete/Complete";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  console.log(formData);

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
      case 2:
        return <Q2 onNext={handleNext} />;
      case 3:
        return <BusinessPlanQ3 onNext={handleNext} />;
      case 4:
        return <MissionStatementPage onNext={handleNext} />;
      case 5:
        return <VisionStatementPage onNext={handleNext} />;
      case 6:
        return <Finish onNext={handleNext} />;
      case 7:
        return <Complete onNext={handleNext} />;
      // Add more cases for other steps
      default:
        return null;
    }
  };

  return <div>{renderStep()}</div>;
}
