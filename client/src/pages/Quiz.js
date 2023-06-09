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
    <div className="container quiz-container mt-5 rounded shadow-lg">
      <h1 className="container-name row fs-2 mt-2 fw-bolder">
        Find Your Perfect Bark Buddy
      </h1>
      {currentStep === 1 && (
        <form onSubmit={nextStep}>
          <label className="row col-12 mt-4 justify-content-center">
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
          <div>
            <button className="next-button mb-4" type="submit">
              Next
            </button>
          </div>
        </form>
      )}
      {currentStep === 2 && (
        <form onSubmit={nextStep}>
          <label className="row col-12 mt-5 justify-content-center">
            Energy Level:
            <select
              className="col"
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
            <div>
              <button
                className="prev-button col-6 mt-3 mb-4 fw-bolder"
                onClick={prevStep}
              >
                Previous
              </button>
            </div>
          )}
          {dogAge ? (
            <div>
              <button
                className="next-button col-6 mt-3 mb-4 fw-bolder"
                type="submit"
              >
                Next
              </button>
            </div>
          ) : (
            <p className="dog-select-prompt fw-bolder justify-content-center">
              Please select Dog Age.
            </p>
          )}
        </form>
      )}
      {currentStep === 3 && (
        <form onSubmit={nextStep}>
          <label className="row col-12 mt-5 justify-content-center">
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
            <div>
              <button
                className="prev-button col-6 mb-4 fw-bolder"
                onClick={prevStep}
              >
                Previous
              </button>
            </div>
          )}
          {energyLevel ? (
            <div>
              <button
                className="next-button col-6 mb-4 fw-bolder"
                type="submit"
              >
                Next
              </button>
            </div>
          ) : (
            <p>Please select Energy Level.</p>
          )}
        </form>
      )}
      {currentStep === 4 && (
        <form onSubmit={handleSubmit}>
          <label className="row col-12 mt-5 justify-content-center">
            Fur Length:
            <select
              value={furLength}
              onChange={(e) => setFurLength(e.target.value)}
            >
              <option
                value=""
                className="option-placeholder justify-content-center"
              >
                Select Fur Length
              </option>
              <option value="short">Short</option>
              <option value="medium">Medium</option>
              <option value="long">Long</option>
            </select>
          </label>
          <br />
          {shouldShowPrevButton && (
            <div>
              <button
                className="prev-button col-6 mb-4 fw-bolder"
                onClick={prevStep}
              >
                Previous
              </button>
            </div>
          )}
          {size ? (
            shouldShowFindBreedButton ? (
              <div>
                <button
                  className="submit-button col-6 fs-6 mb-4 fw-bolder"
                  type="submit"
                >
                  Find Dog Breed
                </button>
              </div>
            ) : (
              <p className="fw-bolder fs-5">Please select Fur Length.</p>
            )
          ) : (
            <p className="fw-bolder fs-5">Please select Size.</p>
          )}
        </form>
      )}
      {isSubmitted && (
        <div className="result-container">
          <h2>Result:</h2>
          <p>You should consider getting a {result}!</p>
          {shouldShowFindBreedButton && (
            <div>
              <button className="try-again-button" onClick={resetQuiz}>
                Take Again
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
