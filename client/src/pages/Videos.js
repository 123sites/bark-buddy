import React, { useState, useEffect } from "react";

const Videos = () => {
  return (
    <section className="container-fluid">
      <div className="">
        <div className="">
          {/* <div className="videoGallery"> */}
          <div className="mt-3">
            {/* Title */}
            <h2 className="vTitles fw-bold shadow-lg m-0 text-center">
              {/* <h1 className="vTitles fw-bold shadow-lg m-0 text-center"> */}
              Helpful YouTube Channels and Videos
            </h2>
            <div className="vContainer rounded fw-bold">
              {/* Information */}
              <h2 className="fs-5 p-4 shadow-lg lh-base fw-bold text-center">
                These videos and channels will help you in your journey to find
                the right dog for you and your family!
                <br></br>Also, there are videos that will help you to care for
                your new pet!
              </h2>
            </div>
          </div>
          {/* Channels */}
          <h2 className="vTitles fw-bold m-0 shadow-lg text-center">
            Channels to Check-out!
          </h2>
          <div className="mb-2">
            <div className="vContainer shadow-lg h5 py-3 lh-base text-center justify-content-between">
              {/* <div className="vContainer shadow-lg h5 p-3 fw-bold text-center"> */}
              <a
                href="https://www.youtube.com/@purina/videos"
                rel="noreferrer"
                className="videos "
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
        <div>
          <div>
            <h2 className="vTitles fw-bold m-0 shadow-lg text-center">
              Helpful Videos!
            </h2>
          </div>

          <div className="container-fluid">
            <div className="ax-w-screen-xl mx-auto">
              {/* <div className="embed-responsive vContainer rounded shadow-lg row"> */}
              <div className="row flex-direction:row-reverse">
                <div className="col mt-3">
                  <h2 className="row flex justify-content-center fs-4 fw-bolder">
                    Doggy Daycare #1
                  </h2>
                  <div className="overflow-visible">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/JDmNGLPrEG8"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>

                <div className="col mt-3">
                  <h2 className="row flex justify-content-center fs-4 fw-bold">
                    How to Choose the Perfect Dog For You
                  </h2>
                  <div className="d-inline">
                    <div className="">
                      <iframe
                        width="560"
                        height="315"
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
                <div className="col mt-3">
                  <h2 className="row flex justify-content-center fs-4 fw-bold">
                    Things You Need to Know - Dr. Mike
                  </h2>
                  <div className="d-inline">
                    <div className="">
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/peUVLEUj-AM"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>

                <div className="col mt-3">
                  <h2 className="row flex justify-content-center fs-4 fw-bold">
                    Care for Your Dog - Kid Friendly Tutorial
                  </h2>
                  <div className="d-inline">
                    <div className="">
                      <iframe
                        width="560"
                        height="315"
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
                <div className="col mt-3">
                  <h2 className="row flex justify-content-center fs-4 fw-bold">
                    3 Pro Tips When Washing Your Dog
                  </h2>
                  <div className="d-inline">
                    <div className="">
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/dyBeSS04GC4"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div className="col mt-3">
                  <h2 className="row flex justify-content-center fs-4 fw-bold">
                    How to Care For Your New Puppy
                  </h2>
                  <div className="d-inline">
                    <div className="">
                      <iframe
                        width="560"
                        height="315"
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
