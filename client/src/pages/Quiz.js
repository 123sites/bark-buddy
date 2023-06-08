import React, { useState } from "react";
import "../assets/quiz.css";

const Quiz = () => {
  const [dogAge, setDogAge] = useState("");
  const [energyLevel, setEnergyLevel] = useState("");
  const [size, setSize] = useState("");
  const [furLength, setFurLength] = useState("");
  const [result, setResult] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all parameters are selected
    if (!dogAge || !energyLevel || !size || !furLength) {
      alert("Please select all parameters.");
      return;
    }

    // Perform logic to determine the dog breed based on the selected parameters
    let dogBreed = "";

    if (dogAge === "puppy" && energyLevel === "energetic") {
      dogBreed = "Border Collie";
    } else if (dogAge === "adult" && size === "medium") {
      dogBreed = "Labrador Retriever";
    } else if (energyLevel === "calm" && furLength === "short") {
      dogBreed = "Bulldog";
    } else if (dogAge === "senior" && size === "large") {
      dogBreed = "Golden Retriever";
    } else {
      dogBreed = "Mixed Breed";
    }

    setResult(dogBreed);
    setIsSubmitted(true);
  };

  const resetQuiz = () => {
    setDogAge("");
    setEnergyLevel("");
    setSize("");
    setFurLength("");
    setResult("");
    setIsSubmitted(false);
    setCurrentStep(1);
  };

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const isLastQuestion = currentStep === 4;

  const shouldShowPrevButton = currentStep > 1;
  const shouldShowFindBreedButton = isLastQuestion && furLength !== "";

  const getPromptMessage = () => {
    if (currentStep === 2 && !dogAge) {
      return "Please select Dog Age";
    } else if (currentStep === 3 && !energyLevel) {
      return "Please select Energy Level";
    } else if (currentStep === 4 && !size) {
      return "Please select Size";
    } else if (currentStep === 4 && !furLength) {
      return "Please select Fur Length";
    } else {
      return "";
    }
  };

  return (
    <div className="form quiz col-12 col-lg-7">
      <h1 className="qTitle">Find Your Perfect Bark Buddy</h1>
      {currentStep === 1 && (
        <form onSubmit={nextStep}>
          <label>
            Dog Age:
            <select value={dogAge} onChange={(e) => setDogAge(e.target.value)}>
              <option value="" className="option-placeholder">
                Select Age
              </option>
              <option value="puppy">Puppy</option>
              <option value="adult">Adult</option>
              <option value="senior">Senior</option>
            </select>
          </label>
          <br />
          <button className="qbtn next-button" type="submit">
            Next
          </button>
        </form>
      )}
      {currentStep === 2 && (
        <form onSubmit={nextStep}>
          <label>
            Energy Level:
            <select
              value={energyLevel}
              onChange={(e) => setEnergyLevel(e.target.value)}
            >
              <option value="" className="option-placeholder">
                Select Energy Level
              </option>
              <option value="energetic">Energetic</option>
              <option value="calm">Calm</option>
              <option value="senior">Senior</option>
            </select>
          </label>
          <br />
          {shouldShowPrevButton && (
            <button className="qbtn prev-button" onClick={prevStep}>
              Previous
            </button>
          )}
          {dogAge ? (
            <button className="qbtn next-button" type="submit">
              Next
            </button>
          ) : (
            <p>Please select Dog Age.</p>
          )}
        </form>
      )}
      {currentStep === 3 && (
        <form onSubmit={nextStep}>
          <label>
            Size:
            <select value={size} onChange={(e) => setSize(e.target.value)}>
              <option value="" className="option-placeholder">
                Select Size
              </option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </label>
          <br />
          {shouldShowPrevButton && (
            <button className="qbtn prev-button" onClick={prevStep}>
              Previous
            </button>
          )}
          {energyLevel ? (
            <button className="qbtn next-button" type="submit">
              Next
            </button>
          ) : (
            <p>Please select Energy Level.</p>
          )}
        </form>
      )}
      {currentStep === 4 && (
        <form onSubmit={handleSubmit}>
          <label>
            Fur Length:
            <select
              value={furLength}
              onChange={(e) => setFurLength(e.target.value)}
            >
              <option value="" className="option-placeholder">
                Select Fur Length
              </option>
              <option value="short">Short</option>
              <option value="medium">Medium</option>
              <option value="long">Long</option>
            </select>
          </label>
          <br />
          {shouldShowPrevButton && (
            <button className="qbtn prev-button" onClick={prevStep}>
              Previous
            </button>
          )}
          {size ? (
            shouldShowFindBreedButton ? (
              <button className="qbtn submit-button" type="submit">
                Find My Dog Breed
              </button>
            ) : (
              <p>Please select Fur Length.</p>
            )
          ) : (
            <p>Please select Size.</p>
          )}
        </form>
      )}
      {isSubmitted && (
        <div className="result-container">
          <h2>Result:</h2>
          <p>You should consider getting a {result}!</p>
          {shouldShowFindBreedButton && (
            <button className="qbtn try-again-button" onClick={resetQuiz}>
              Take Again
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
