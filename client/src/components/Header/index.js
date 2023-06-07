import React, { useContext } from "react"; //willis
import { Link } from "react-router-dom";
import "../../assets/style.css";
import Logo from "../../images/logo.png";
import Auth from "../../utils/auth";
import { ThemeContext } from "../Theme/themeContext"; //willis
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"; //willis
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //willis

const Header = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <nav className={`navbar navbar-expand-lg top header ${theme}`}>
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">
          <img src={Logo} className="logo" alt=""></img>
          <h1 className="name navbar-expand-lg ml-2 fw-bold">Bark Buddy</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="d-inline-block collapse navbar-collapse justify-content-center"
          id="navbarScroll"
        >
          <ul className="navbar-nav my-lg-0 navbar-nav-scroll">
            {/* <ul className="navbar-nav me-auto mx-3 my-lg-0 navbar-nav-scroll"> */}
            <li className="nav-item">
              <Link className="nav-link link text-center fw-bolder" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link link text-center fw-bolder"
                to="/videos"
              >
                Videos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link link text-center fw-bolder"
                to="/search"
              >
                Pick A Pooch
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link text-center fw-bolder" to="/quiz">
                Dog Quiz
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link link text-center fw-bolder"
                to="/shelter"
              >
                Find a Shelter
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link link text-center fw-bolder"
                to="/donation"
              >
                Shelter Donation
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link link fw-bold fs-6 dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Profile
              </a>

              <ul className="dropdown-menu">
                <li>
                  {" "}
                  <Link
                    className="dropdown-item ddText fw-bolder mx-3"
                    to="/favorites"
                  >
                    Favorites
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    className="dropdown-item ddText mx-3 fw-bolder"
                    to="/me"
                  >
                    {/* {Auth.getProfile().data.username}'s Profile */}
                    Account
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="d-inline-flex mr-5 align-items-center justify-content:flex-end">
          <div>
            <Link className="link btn-lg m-2 fw-bolder" to="/login">
              Login
            </Link>
          </div>

          <div>
            <Link className="link btn-lg my-3 mr-1 ml-3 fw-bolder" to="/signup">
              Signup
            </Link>
          </div>
          <div className="link col-1 mr-5 pr-5 fw-bolder" onClick={logout}>
            {" "}
            logout
          </div>
          <div className="d-inline-block pl-3 ml-4">
            <button onClick={toggleTheme}>
              {theme === "light" ? (
                <FontAwesomeIcon icon={faMoon} />
              ) : (
                <FontAwesomeIcon icon={faSun} />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
