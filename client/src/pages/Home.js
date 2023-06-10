import React, { useState, useEffect } from "react";
import { useContext } from "react"; //willis
import { ThemeContext } from "../components/Theme/themeContext"; //willis
import { useQuery } from "@apollo/client";
import manyDogs from "../images/manyDogs.webp";
// import DogQuiz from "../components/DogQuiz/quiz"

const Home = ({ handlePageChange }) => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  const [currentPath, setCurrentPath] = useState("");
  // runs when a component renderes in the browser
  useEffect(() => {
    console.log(currentPath);
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <main>
      <div
        className={`container-fluid mt-4 shadow-lg homeBox-${theme} vContainer-${theme}`}
      >
        <h2
          className={`homeTitle-${theme} fs-2 p-3 mb-0 fw-bolder text-center`}
        >
          What We Are All About!
        </h2>
        <h5 className={`homeText-${theme} fs-4 fw-bold text-center`}>
          We can help you find the right dog for you! Simply take our online
          quiz!
        </h5>
        <h2
          className={`homeTitle-${theme} fs-2 mb-0 mt-4 fw-bolder text-center`}
        >
          Member Benefits!
        </h2>
        <h5 className={`homeText-${theme} fs-4 mb-4 fw-bold text-center`}>
          If you are a member, you can save the dogs you like to your favorites!
        </h5>
        <div className="img-fluid col pb-2">
          <img
            src={manyDogs}
            className={`manyDogs-${theme}`}
            alt="Many dogs all around a Ani."
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
