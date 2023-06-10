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
    // Logo
    <nav
      className={`navbar navbar-expand-lg header sticky-lg-top top-${theme}`}
    >
      <div className="container-fluid">
        {/* DIV 1 */}
        <div className="row col">
          <div className="col-9">
            <Link className="navbar-brand text-light d-inline-flex" to="/">
              <img
                src={Logo}
                className="logo"
                alt="Bark Buddy logo with a dog paw inside the outline of a heart"
              />
              {/* Brand Name  */}
              <h1
                className={`name-${theme} navbar-brand navbar-expand-lg ml-2 fw-bold mb-0`}
              >
                Bark Buddy
              </h1>
            </Link>

            {/* Hamburger */}
            <button
              className="navbar-toggler hamburger d-flex d-lg-none flex-row m-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  {/* Link 1 */}
                  <Link
                    className={`nav-link link ${theme} px-2 text-center fw-bolder`}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                {/* Link 2 */}
                <li className="nav-item">
                  <Link
                    className={`nav-link link ${theme} px-2 text-center fw-bolder`}
                    to="/videos"
                  >
                    {" "}
                    Videos
                  </Link>
                </li>
                {/* Link 3 */}
                <li className="nav-item">
                  <Link
                    className={`nav-link link ${theme} px-2 text-center fw-bolder`}
                    to="/search"
                  >
                    Pick A Pooch
                  </Link>
                </li>
                <li className="nav-item">
                  {/* Link 4 */}
                  <Link
                    className={`nav-link link ${theme} px-2 text-center fw-bolder`}
                    to="/quiz"
                  >
                    Dog Quiz
                  </Link>
                </li>
                {/* Link 5 */}
                <li className="nav-item">
                  <Link
                    className={`nav-link link ${theme} px-2 text-center fw-bolder`}
                    to="/shelter"
                  >
                    Find a Shelter
                  </Link>
                </li>
                {/* Link 6 */}
                <li className="nav-item">
                  <Link
                    className={`nav-link link ${theme} px-2 text-center fw-bolder`}
                    to="/donation"
                  >
                    Shelter Donation
                  </Link>
                </li>
              </ul>
              {/* Profile Dropdown */}
              {Auth.loggedIn() ? (
                <div className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle link d-inline fs-6 fw-bold"
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
                      <Link className="dropdown-item" to="/favorites">
                        Favorites
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/me">
                        Account
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="col d-flex justify-flex-end align-center">
            <div>
              {!Auth.loggedIn() ? (
                <>
                  <Link className="link fw-bolder p-2" to="/login">
                    {/* <Link className={`link-${theme} fw-bolder p-2" to="/login"`}> */}
                    Login
                  </Link>
                  <Link className="link fw-bolder p-2" to="/signup">
                    Signup
                  </Link>
                </>
              ) : (
                ""
              )}
              {Auth.loggedIn() ? (
                <>
                  <Link className={`link ${theme} m-4 fw-bolder`} to="/me">
                    {Auth.getProfile().data.username}'s Profile
                  </Link>
                  <button
                    className="col p-3 logout border-warning fw-bolder"
                    onClick={logout}
                  >
                    {" "}
                    logout
                  </button>
                </>
              ) : (
                ""
              )}

              <div className="d-inline-flex ml-2">
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
        </div>
      </div>
    </nav>
  );
};
export default Header;
