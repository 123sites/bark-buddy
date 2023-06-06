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
    <div className={`header ${theme}`}>
      {" "}
      {/*willis*/}
      <nav className="top navbar sticky-top mb-4 py-3">
        <div className="container-fluid flex-row justify-space-between">
          <div>
            <Link className="navbar-brand text-light" to="/">
              <img src={Logo} className="logo" alt=""></img>
              <h1 className="name navbar-expand-lg fw-bold ml-5">Bark Buddy</h1>
            </Link>
          </div>
          <div className="row">
            {/* Not logged-in, dog search */}
            <div className="container-fluid row">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2 fs-6 fw-bold text-center"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="search" type="submit">
                  Search for a dog{" "}
                </button>
              </form>

              <ul>
                <li>
                  <Link className="link m-4 fw-bolder" to="/">
                    Home
                  </Link>
                </li>
                {/* Logged-in only, Profile Tab */}
                {/* <a className="nav-link disabled">Disabled</a> */}
              </ul>
              <li className="nav-item dropdown profileTab">
                <a
                  className="nav-link dropdown-toggle tabBox fs-4 fw-bolder"
                  to="/profile"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Profile
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <Link
                      className="dropdown-toggle arrow mx-3 fw-bolder"
                      to="/me"
                      data-bs-toggle="dropdown"
                      role="button"
                      aria-expanded="false"
                    >
                      {/* getProfile()'s Profile */}
                    </Link>
                  </li>
                  <li>
                    {/* <a className="dropdown-item" href="#">
                    Action
                  </a> */}
                    <Link
                      className="dropdown-item ddText fw-bolder mx-3"
                      to="/favorites"
                    >
                      Favorites
                    </Link>
                  </li>
                  <li>
                    {/* <a className="dropdown-item" href="#">
                    Action
                  </a> */}
                    <Link
                      className="dropdown-item ddText fw-bolder mx-3"
                      to="/dog"
                    >
                      Pick A Pooch
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item ddText fw-bolder mx-3"
                      to="/shelter"
                    >
                      Find a Shelter
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item ddText fw-bolder mx-3"
                      to="/donate"
                    >
                      Shelter Donation
                    </Link>
                  </li>
                  <li>
                    <a
                      className="dropdown-item ddText fw-bolder mx-3"
                      to="/profile"
                    >
                      Account Settings
                    </a>
                  </li>
                </ul>
              </li>

              {/* /// Right-side /// */}
              <ul>
                {/* Not logged-in */}
                <li>
                  <Link className="link m-4 fw-bolder" to="/quiz">
                    Dog Quiz
                  </Link>
                </li>
                {/* Not logged-in */}
                <li>
                  <Link className="link m-4 fw-bolder" to="/videos">
                    Videos
                  </Link>
                </li>
              </ul>
              {/* <div className="link m-4 fw-bolder" onClick={signup}>
            signup
          </button>{" "}
          <div className="link m-4 fw-bolder" onClick={login}>
            login
          </button>{" "}  */}
              <div className="link m-4 fw-bolder" onClick={logout}>
                logout
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div>
        <button onClick={toggleTheme}>
          {theme === "light" ? (
            <FontAwesomeIcon icon={faMoon} />
          ) : (
            <FontAwesomeIcon icon={faSun} />
          )}
        </button>
      </div>
    </div> //willis
  );
};

export default Header;

{
  /* Not need to be logged-in */
}
{
  /* <Link className="link m-4 fw-bolder" to="/">
                Home
              </Link> */
}
{
  /* <Link className="link m-4 fw-bolder" to="/Videos">
            Videos
          </Link> */
}
{
  /* Need to be logged-in */
}
{
  /* {Auth.loggedIn() ? (
            <>
              <Link className="mx-3 fw-bolder" to="/favorites">
                Favorites
              </Link>
              <Link className="mx-3 fw-bolder" to="/search">
                Pick A Pooch
              </Link>
              <Link className="mx-3 fw-bolder" to="/quiz">
                Dog Quiz
              </Link>
              <Link className="mx-3 fw-bolder" to="/me">
                Shelter Donation
              </Link>
              <Link className="mx-3 fw-bolder" to="/me">
                Find a Shelter
              </Link>
              <Link className="mx-3 fw-bolder" to="/me">
                {Auth.getProfile().data.username}'s Profile
              </Link>
              <button className="mx-3 fw-bolder" onClick={logout}>
                logout
              </button>
            </>
          ) : (
            <>
              <Link className="link m-4 fw-bolder" to="/search">
                Pick a Pooch
              </Link>
              <Link className="link m-4 fw-bolder" to="/quiz">
                Dog Quiz
              </Link>
              <Link className="link m-4 fw-bolder" to="/videos">
                Videos
              </Link>


              <Link className="link m-4 fw-bolder" to="/me">
                Shelter Donation
              </Link>
              <Link className="link m-4 fw-bolder" to="/me">
                Find a Shelter
              </Link>
              <Link className="link m-2 fw-bolder" to="/login">
                Login
              </Link>
              <Link className="link m-2 fw-bolder" to="/signup">
                signup
              </Link>
            </>
          )} */
}
