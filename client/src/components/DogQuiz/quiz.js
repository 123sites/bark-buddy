// import React, { useState } from 'react';

// const Quiz = () => {
//     const [dogAge, setDogAge] = useState('');
//     const [energyLevel, setEnergyLevel] = useState('');
//     const [size, setSize] = useState('');
//     const [furLength, setFurLength] = useState('');
//     const [result, setResult] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Perform logic to determine the dog breed based on the selected parameters

//         let dogBreed = '';

//         if (dogAge === 'puppy' && energyLevel === 'energetic') {
//             dogBreed = 'Border Collie';
//         } else if (dogAge === 'adult' && size === 'medium') {
//             dogBreed = 'Labrador Retriever';
//         } else if (energyLevel === 'calm' && furLength === 'short') {
//             dogBreed = 'Bulldog';
//         } else if (dogAge === 'senior' && size === 'large') {
//             dogBreed = 'Golden Retriever';
//         } else {
//             dogBreed = 'Mixed Breed';
//         }

//         setResult(dogBreed);
//     };

//     return (
//         <div>
//             <h1>Find Your Perfect Dog Breed</h1>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Dog Age:
//                     <select value={dogAge} onChange={(e) => setDogAge(e.target.value)}>
//                         <option value="">Select Age</option>
//                         <option value="puppy">Puppy</option>
//                         <option value="adult">Adult</option>
//                         <option value="senior">Senior</option>
//                     </select>
//                 </label>
//                 <br />
//                 <label>
//                     Energy Level:
//                     <select
//                         value={energyLevel}
//                         onChange={(e) => setEnergyLevel(e.target.value)}
//                     >
//                         <option value="">Select Energy Level</option>
//                         <option value="energetic">Energetic</option>
//                         <option value="calm">Calm</option>
//                         <option value="senior">Senior</option>
//                     </select>
//                 </label>
//                 <br />
//                 <label>
//                     Size:
//                     <select value={size} onChange={(e) => setSize(e.target.value)}>
//                         <option value="">Select Size</option>
//                         <option value="small">Small</option>
//                         <option value="medium">Medium</option>
//                         <option value="large">Large</option>
//                     </select>
//                 </label>
//                 <br />
//                 <label>
//                     Fur Length:
//                     <select
//                         value={furLength}
//                         onChange={(e) => setFurLength(e.target.value)}
//                     >
//                         <option value="">Select Fur Length</option>
//                         <option value="short">Short</option>
//                         <option value="medium">Medium</option>
//                         <option value="long">Long</option>
//                     </select>
//                 </label>
//                 <br />
//                 <button type="submit">Find My Dog Breed</button>
//             </form>
//             {result && (
//                 <div>
//                     <h2>Result:</h2>
//                     <p>You should consider getting a {result}!</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Quiz;


import React, { useState } from 'react';



const Quiz = () => {
    const [dogAge, setDogAge] = useState('');
    const [energyLevel, setEnergyLevel] = useState('');
    const [size, setSize] = useState('');
    const [furLength, setFurLength] = useState('');
    const [result, setResult] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if all parameters are selected
        if (!dogAge || !energyLevel || !size || !furLength) {
            alert('Please select all parameters.');
            return;
        }

        // Perform logic to determine the dog breed based on the selected parameters
        let dogBreed = '';

        if (dogAge === 'puppy' && energyLevel === 'energetic') {
            dogBreed = 'Border Collie';
        } else if (dogAge === 'adult' && size === 'medium') {
            dogBreed = 'Labrador Retriever';
        } else if (energyLevel === 'calm' && furLength === 'short') {
            dogBreed = 'Bulldog';
        } else if (dogAge === 'senior' && size === 'large') {
            dogBreed = 'Golden Retriever';
        } else {
            dogBreed = 'Mixed Breed';
        }

        setResult(dogBreed);
        setIsSubmitted(true);
    };

    const resetQuiz = () => {
        setDogAge('');
        setEnergyLevel('');
        setSize('');
        setFurLength('');
        setResult('');
        setIsSubmitted(false);
    };

    return (
        <div>
            <h1>Find Your Perfect Bark Buddy</h1>
            {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                    <label>
                        Dog Age:
                        <select
                            value={dogAge}
                            onChange={(e) => setDogAge(e.target.value)}
                        >
                            <option value="">Select Age</option>
                            <option value="puppy">Puppy</option>
                            <option value="adult">Adult</option>
                            <option value="senior">Senior</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        Energy Level:
                        <select
                            value={energyLevel}
                            onChange={(e) => setEnergyLevel(e.target.value)}
                        >
                            <option value="">Select Energy Level</option>
                            <option value="energetic">Energetic</option>
                            <option value="calm">Calm</option>
                            <option value="senior">Senior</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        Size:
                        <select value={size} onChange={(e) => setSize(e.target.value)}>
                            <option value="">Select Size</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        Fur Length:
                        <select
                            value={furLength}
                            onChange={(e) => setFurLength(e.target.value)}
                        >
                            <option value="">Select Fur Length</option>
                            <option value="short">Short</option>
                            <option value="medium">Medium</option>
                            <option value="long">Long</option>
                        </select>
                    </label>
                    <br />
                    <button type="submit">Find My Dog Breed</button>
                </form>
            ) : (
                <div>
                    <h2>Result:</h2>
                    <p>You should consider getting a {result}!</p>
                    <button onClick={resetQuiz}>Try Again</button>
                </div>
            )}
        </div>
    );
};

export default Quiz;
