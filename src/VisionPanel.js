import React, { useState } from 'react';
import './VisionPanel.css';
import image1 from './1st.jpg';
import image2 from './2nd.jpg';
import image3 from './3rd.jpg';
import image4 from './4th.jpg';
import image5 from './5th.jpg';

const VisionPanel = () => {
  const images = [image1, image2, image3, image4, image5];
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
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="vision-panel" style={{ backgroundImage: `url(${images[currentStep]})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <div className="vision-panel-content">
        <h2>{steps[currentStep].title}</h2>
        <p>{steps[currentStep].description}</p>
        {/* Removed the image element */}
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