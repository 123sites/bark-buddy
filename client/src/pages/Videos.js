import React, { useState, useEffect } from "react";

const Videos = () => {
  return (
    <div className="videoGallery">
      <div>
        <div>
          {/* Title */}
          <h1 className="vTitles fw-bold shadow-lg m-0 text-center">
            Helpful YouTube Channels and Videos
          </h1>
          <div className="vContainer rounded fs-5 fw-bold">
            {/* Information */}
            <p className="fw-bold fs-4 p-3 m-0 shadow-lg text-center">
              These videos and channels will help you in your journey to find
              the right dog for you and your family!
              <br></br>Also, there are videos that will help you to care for
              your new pet!
            </p>
          </div>
        </div>
        {/* Channels */}
        <h1 className="vTitles fw-bold m-0 shadow-lg text-center">
          Channels to Check-out!
        </h1>
        <div className="vContainer rounded shadow-lg fs-5 m-0 p-3 fw-bold text-center">
          <a
            href="https://www.youtube.com/@purina/videos"
            rel="noreferrer"
            className="videos"
            target="_blank"
          >
            Purina
          </a>
          <br></br>
          <a
            href="https://www.youtube.com/@americankennelclub/videos"
            rel="noreferrer"
            className="videos"
            target="_blank"
          >
            American Kennel Club
          </a>
          <br></br>
          <a
            href="https://www.youtube.com/@DogPlaygroupStories"
            rel="noreferrer"
            className="videos"
            target="_blank"
          >
            Dog Playgroup Stories
          </a>
          <br></br>
          <a
            href="https://www.youtube.com/@shelterdogsforadoption6619/videos"
            rel="noreferrer"
            className="videos"
            target="_blank"
          >
            Shelter Dogs For Adoption
          </a>
          <br></br>
          <a
            href="https://www.youtube.com/@westminsterkennelclubdogsh8934/videos"
            rel="noreferrer"
            className="videos"
            target="_blank"
          >
            Westminster Kennel Club Dog Show
          </a>
        </div>
      </div>

      {/* Videos */}
      <div>
        <h1 className="vTitles fw-bold m-0 shadow-lg text-center">
          Helpful Videos!
        </h1>
      </div>

      <div className="container">
        <div className="vContainer rounded shadow-lg row">
          <div className="col-6 mt-4">
            <h2 className="row flex justify-content-center fs-4 fw-bolder">
              Doggy Daycare #1
            </h2>
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

          <div className="col-6 mt-4">
            <h2 className="row flex justify-content-center fs-4 fw-bold">
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

          <div className="col-6">
            <h2 className="row flex justify-content-center fs-4 fw-bold">
              Things You Need to Know - Dr. Mike
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

          <div className="col-6">
            <h2 className="row flex justify-content-center fs-4 fw-bold">
              Care for Your Dog - Kid Friendly Tutorial
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

          <div className="col-6 my-4">
            <h2 className="row flex justify-content-center fs-4 fw-bold">
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
          <div className="col-6 my-4">
            <h2 className="row flex justify-content-center fs-4 fw-bold">
              How to Care For Your New Puppy
            </h2>
            <div className="d-inline">
              <div className="px-3">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/Tn3lZE0rRBs"
                  title="YouTube video player"
                  // frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  // allowfullscreen
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
