import React, { useState, useEffect } from "react";

const Videos = ({ handlePageChange }) => {
  const [currentPath, setCurrentPath] = useState("");
  // runs when a component renderes in the browser
  useEffect(() => {
    console.log(currentPath);
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <div>
      <div>
        <h1 className="subtitle font-bold animate-pulse">
          Helpful YouTube Channels and Videos
        </h1>
        <h2 className="subtitle font-bold">
          These videos and channels will help you in your journey to find the
          right dog for you and your family! Also, there are videos that will
          help you to care for your new pet!
        </h2>
      </div>

      <h1 className="subtitle font-bold">
        Great YouTube Channels to Checkout!
      </h1>

      <tr>
        <td>IPFS Hash # stored on Eth Contract</td>
        <td>
          <a
            href={
              "https://www.youtube.com/@DogPlaygroupStories" +
              this.state.ipfsHash
            }
          >
            Click here to go to home page
          </a>
        </td>
      </tr>

      <div className="videoGallery">
        <div>
          <h2 className="subtitle">Doggy Daycare #1</h2>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/JDmNGLPrEG8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <div>
          <h2 className="subtitle">How to Choose the Perfect Dog For You</h2>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ASxkyQKZE4k"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <div>
          <h2 className="subtitle">
            Owning A Dog - Things You Need to Know - Dr. Mike
          </h2>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/peUVLEUj-AM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <div>
          <h2 className="subtitle">
            How to Care for Your Dog - A Kid Friendly Tutorial
          </h2>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/sKQwL2YYouo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <div>
          <h2 className="subtitle">3 Pro Tips When Washing Your Dog</h2>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dyBeSS04GC4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Videos;
