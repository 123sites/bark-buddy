import React from "react";
import "../../assets/style.css";

const Footer = () => {
  return (
    <footer className="text-center mt-5">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/chelwebdeveloper"
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/123sites"
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="mailto:cfreitas12345@gmail.com"
      >
        <i className="fas fa-envelope"></i>
      </a>
      <h4 className="my-3 fw-bold fs-7">
        Made with{" "}
        <span
          className="emoji"
          role="img"
          aria-label="heart"
          aria-hidden="false"
        >
          ❤️
        </span>
        {""}
      </h4>
      <p>
        <span>Copyright © Ani, Chel, Grant, & Mike | ACGM, inc.</span>
      </p>
    </footer>
  );
};

export default Footer;
