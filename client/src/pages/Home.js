import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import manyDogs from "../images/manyDogs.webp";
// import DogQuiz from "../components/DogQuiz/quiz"

const Home = ({ handlePageChange }) => {
  const [currentPath, setCurrentPath] = useState("");
  // runs when a component renderes in the browser
  useEffect(() => {
    console.log(currentPath);
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <main>
      <div className="img-fluid col mt-7">
        <img src={manyDogs} className="manyDogs" alt="Many dogs all around a lady." />
        {/* <DogSearch/> */}
      </div>
    </main>
  );
};

export default Home;
