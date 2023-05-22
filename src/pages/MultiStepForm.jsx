import React, { useState } from "react";
import IntroductionForm from "../components/IntroductionForm/IntroductionForm";

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    businessStructure: "",
  });

  // Function to handle moving to the next step
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  // Function to handle moving to the previous step
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  // Function to handle updating form data
  const updateFormData = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  // Function to handle form submission
  const submitForm = () => {
    // Perform form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      {currentStep === 1 && (
        <IntroductionForm
          formData={formData}
          updateFormData={updateFormData}
          nextStep={nextStep}
        />
      )}
      {/* Add more steps here as needed */}
    </div>
  );
}
