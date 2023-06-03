import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/style.css';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="brandName nav mb-4 py-3">
      <div className="container-fluid flex-row justify-space-between-lg">
        <div>
          <Link className="navLink" to="/">



            
          </Link>
          <h1 className="name navbar navbar-expand-lg fw-bold ml-5">Bark Buddy</h1>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg m-2 " onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
            <div>
              <Link className="btn btn-lg m-3 fw-bolder" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg my-3 mr-5 ml-3 fw-bolder" to="/signup">
                Signup
              </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
