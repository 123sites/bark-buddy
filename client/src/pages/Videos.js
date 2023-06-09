import React, { useState, useEffect } from "react";
import "../assets/style.css";

const Videos = () => {
  return (
    <section className="container-fluid">
      <div className="container">
        <div>
          <div className="mt-3 video-container">
            {/* Title */}
            <h2 className="vTitles fw-bold shadow-lg m-0 text-center">
              Helpful YouTube Channels and Videos
            </h2>
            <div className="rounded">
              {/* Information */}
              <h5 className="p-4 shadow-lg fw-bolder lh-base fw-bold text-center">
                These videos and channels will help you in your journey to find
                the right dog for you and your family! Also, there are videos
                that will help you to care for your new pet!
              </h5>
            </div>
          </div>
          {/* Channels */}
          <h2 className="vTitles fw-bold m-0 shadow-lg text-center">
            Channels to Check-out!
          </h2>
          <div className="mb-2">
            <div className="video-container shadow-lg h5 py-3 lh-base text-center justify-content-between">
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
        </div>

        {/* Videos */}
        <div className="video-container">
          <div>
            <h2 className="vTitles fw-bold shadow-lg text-center">
              Helpful Videos!
            </h2>
          </div>

          <div className="container-fluid">
            <div className="row embed-responsive vContainer rounded shadow-lg">
              {/* <div className="embed-responsive vContainer rounded shadow-lg row"> */}
              <div className="row">
                <div className="col video-div">
                  <h2 className="row flex justify-content-center fs-4 fw-bolder">
                    Doggy Daycare #1
                  </h2>
                  <div className="ratio ratio-16x9 ml-2">
                    <div className="ratio ratio-16x9">
                      <iframe
                        src="https://www.youtube.com/embed/JDmNGLPrEG8"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>

                <div className="col video-div">
                  <h2 className="row flex justify-content-center mt-2 fs-4 ml-2 fw-bold">
                    Choosing Your Dog
                  </h2>
                  <div className="ratio ratio-16x9 ml-2">
                    <div className="ratio ratio-16x9">
                      <iframe
                        src="https://www.youtube.com/embed/ASxkyQKZE4k"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col video-div mt-3">
                  <h2 className="row justify-content-center text-center fs-4 fw-bold">
                    Need to Know
                  </h2>
                  <div className="ratio ratio-16x9 ml-2">
                    <div className="ratio ratio-16x9">
                      <iframe
                        src="https://www.youtube.com/embed/peUVLEUj-AM"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>

                <div className="col video-div mt-3">
                  <h2 className="row flex justify-content-center ml-2 fs-4 fw-bold">
                    Dog Care
                  </h2>
                  <div className="ratio ratio-16x9 ml-2">
                    <div className="ratio ratio-16x9">
                      <iframe
                        src="https://www.youtube.com/embed/sKQwL2YYouo"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col video-div mt-3">
                  <h2 className="row flex justify-content-center fs-4 fw-bold">
                    Washing Your Dog
                  </h2>
                  <div className="ratio ratio-16x9 ml-2">
                    <div className="ratio ratio-16x9">
                      <iframe
                        src="https://www.youtube.com/embed/dyBeSS04GC4"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div className="col video-div mt-3 mb-3">
                  <h2 className="row justify-content-center fs-4 fw-bold">
                    Puppy Care
                  </h2>
                  <div className="ratio ratio-16x9 ml-2">
                    <div className="ratio ratio-16x9">
                      <iframe
                        src="https://www.youtube.com/embed/Tn3lZE0rRBs"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;
