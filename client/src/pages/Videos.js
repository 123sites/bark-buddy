import React, { useState, useEffect } from "react";

const Videos = ({ handlePageChange }) => {
  const [currentPath, setCurrentPath] = useState("");
  // runs when a component renderes in the browser
  useEffect(() => {
    console.log(currentPath);
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <div className="videoGallery">
      <div>
        <div>
        {/* Title */}
        <h1 className="vTitles fw-bold shadow-lg">Helpful YouTube Channels and Videos</h1>
        <div className="vContainer rounded fs-5 fw-bold">
        {/* Information */}
        <p className="fw-bold fs-5 p-3 shadow-lg">
          These videos and channels will help you in your journey to find the
          right dog for you and your family! Also, there are videos that will
          help you to care for your new pet!</p>
        </div>
        </div>
          {/* Channels */}
          <h1 className="vTitles fw-bold shadow-lg">Channels to Check-out!</h1>
          <ul className="vContainer rounded shadow-lg fs-5 fw-bold">
            <li>
              <a
                href="/https://www.youtube.com/@shelterdogsforadoption6619/videos"
                className="videos"
                target="_blank"
              >
                Shelter Dogs For Adoption
              </a>
            </li>
            <li>
              <a
                href="/https://www.youtube.com/@DogPlaygroupStories"
                className="videos"
                target="_blank"
              >
                Dog Playgroup Stories
              </a>
            </li>
            <li>
              <a
                href="/https://www.youtube.com/@americankennelclub/videos"
                className="videos"
                target="_blank"
              >
                American Kennel Club
              </a>
            </li>
            <li>
              <a
                href="/https://www.youtube.com/@purina/videos"
                className="videos"
                target="_blank"
              >
                Purina
              </a>
            </li>
            <li>
              <a
                href="/https://www.youtube.com/@westminsterkennelclubdogsh8934/videos"
                className="videos"
                target="_blank"
              >
                Westminster Kennel Club Dog Show
              </a>
            </li>
          </ul>
      </div>

      {/* Videos */}
      <div>
        <h1 className="vTitles fw-bold shadow-lg">Helpful Videos!</h1>
      </div>

      <div className="container">
        <div className="vContainer rounded shadow-lg">
          <h2 className="row flex justify-content-center fs-3 fw-bolder">
            Doggy Daycare #1
          </h2>
          <div className="d-inline">
            <div className="px-3 pb-5">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/JDmNGLPrEG8"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                // allowFullScreen
              ></iframe>
            </div>
          </div>

          <div>
          <h2 className="row flex justify-content-center fs-3 fw-bold">
              How to Choose the Perfect Dog For You
            </h2>
            <div className="d-inline">
              <div className="px-3">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/ASxkyQKZE4k"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  // allowFullScreen
               ></iframe>
              </div>
            </div>
          </div>

          <div>
          <h2 className="row flex justify-content-center fs-3 fw-bold">
              Owning A Dog - Things You Need to Know - Dr. Mike
            </h2>
            <div className="d-inline">
              <div className="px-3">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/peUVLEUj-AM"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  // allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          <div>
          <h2 className="row flex justify-content-center fs-3 fw-bold">
              How to Care for Your Dog - A Kid Friendly Tutorial
            </h2>
            <div className="d-inline">
              <div className="px-3">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/sKQwL2YYouo"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  // allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          <div>
          <h2 className="row flex justify-content-center fs-3 fw-bold">
              3 Pro Tips When Washing Your Dog
            </h2>
            <div className="d-inline">
              <div className="px-3">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/dyBeSS04GC4"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  // allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
