import React from "react";
import { Link } from "react-router-dom";
import "../../assets/style.css";
import Logo from "../../images/logo.png";

import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="nav mb-4 py-3">
      <div className="container-fluid flex-row justify-space-between">
        <div>
          <Link className="navbar-brand text-light" to="/">
            <img
              src={Logo}
              className="logo"
              alt="Bark Buddy logo with a glowing heart and paw in the middle"
            ></img>
            <h1 className="name navbar-expand-lg fw-bold ml-5 mt-1">
              Bark Buddy
            </h1>
          </Link>
        </div>

        <div>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="#">Active</a> */}
              <Link className="link m-4 fw-bolder" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link disabled">Disabled</a> */}
              <Link className="link m-4 fw-bolder" to="/Videos">
                Videos
              </Link>
            </li>

            {/* PROFILE TAB */}
            <li className="nav-item dropdown">
              <Link
                className="arrow dropdown-toggle mx-3 fw-bolder"
                to="/me"
                data-bs-toggle="dropdown"
                role="button"
                aria-expanded="false"
              ></Link>
              {/* <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
              >
                Dropdown
              </a> */}
              <ul className="dropdown-menu">
                <li>
                  {/* <a className="dropdown-item" href="#">
                    Action
                  </a> */}
                  <Link className="ddText fw-bolder mx-3" to="/favorites">
                    Favorites
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Donate
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Account Settings
                  </a>
                </li>

                {/* SEARCH TAB */}
                <li>
                  <hr className="dropdown-divider" />{" "}
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
          {/* Not need to be logged-in */}
          {/* <Link className="link m-4 fw-bolder" to="/">
                Home
              </Link> */}
          {/* <Link className="link m-4 fw-bolder" to="/Videos">
            Videos
          </Link> */}
          {/* Need to be logged-in */}
          {/* {Auth.loggedIn() ? (
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
          )} */}
        </div>
      </div>
    </header>
  );
};

export default Header;
