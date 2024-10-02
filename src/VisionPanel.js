import React, { useState } from 'react';
import './VisionPanel.css';

const VisionPanel = () => {
  const steps = [
    {
      title: "Step 1: Collection",
      description: "Gather electronic waste from households, businesses, and organizations to ensure proper disposal."
    },
    {
      title: "Step 2: Sorting & Recycling",
      description: "Separate usable components from hazardous materials and recycle them efficiently."
    },
    {
      title: "Step 3: Repurposing",
      description: "Convert recycled e-waste into raw materials for new electronics and other products."
    },
    {
      title: "Step 4: Reducing Carbon Footprint",
      description: "Reduce the environmental impact by limiting the need for raw material extraction and minimizing e-waste."
    },
    {
      title: "Step 5: Future-Ready Innovations",
      description: "Explore how e-waste can be leveraged for sustainable energy solutions and other future innovations."
    }
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => (prevStep === 0 ? steps.length - 1 : prevStep - 1));
  };

  return (
    <div className="vision-panel">
      <div className="vision-panel-content">
        <h2>{steps[currentStep].title}</h2>
        <p>{steps[currentStep].description}</p>
      </div>
      <div className="vision-panel-controls">
        <button className="previous-button" onClick={handlePreviousStep}>Previous</button>
        <button className="next-button" onClick={handleNextStep}>Next</button>
      </div>
      <div className="step-indicator">
        {steps.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentStep ? 'active' : ''}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default VisionPanel;
