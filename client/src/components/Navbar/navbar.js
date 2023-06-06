import { React, useContext } from "react"; // willis
import Logo from "../../images/logo.png";
import "../../assets/style.css";
import { ThemeContext } from './themeContext'; // willis

export default function Navbar({ handlePageChange, currentPage }) {
  console.log(currentPage);
  const { theme } = useContext(ThemeContext); // willis
  return (

    <nav className="flex items-center md:justify-between flex-wrap p-6 sticky">
      <div className={`Navbar ${theme}`}> {/* willis */}
        <div className="logo-wrapper">
          <div className="flex items-center flex-shrink-0 mr-6">
            {/* <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> */}
            <div>
              <span className="">
                Bark Buddy
              </span>
            </div>
            <div className="block md:hidden">
              <button className="flex items-center px-3 py-2">
                <svg
                  className="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:items-center md:w-auto cursor-pointer">
          <div className="text-lg md:flex-grow">
            <a
              href="#home"
              onClick={() => handlePageChange("Home")}
              className="block mt-4 md:inline-block md:mt-0 text-blueGray nav-link mr-5"
            >
              Trying to find the right dog?
            </a>

            <a
              href="#dog"
              onClick={() => handlePageChange("Dog")}
              className="block mt-4 md:inline-block md:mt-0 text-blueGray nav-link mr-5"
            >
              Pick A Pooch
            </a>

            <a
              href="#login"
              onClick={() => handlePageChange("Login")}
              className="block mt-4 md:inline-block md:mt-0 text-blueGray nav-link mr-5"
            >
              Login
            </a>

            <a
              href="#logout"
              onClick={() => handlePageChange("Logout")}
              className="block mt-4 md:inline-block md:mt-0 text-blueGray nav-link mr-5"
            >
              Logout
            </a>

            <a
              href="#videos"
              onClick={() => handlePageChange("Videos")}
              className="block mt-4 md:inline-block md:mt-0 text-blueGray nav-link mr-5"
            >
              Videos
            </a>

          </div>
        </div>
      </div> {/* willis */}
    </nav>
  );
}



