import React from "react";
import Logo from "../../images/logo.png";
import "../../assets/style.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Dog">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Login">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <p className="text-center mt-4 mb-4">Or right-aligned</p>
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="dog">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="login">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Header;

// export default function Navbar({ handlePageChange, currentPage }) {
//   console.log(currentPage);
//   return (
//     <nav className="navbar navbar-expand-lg sticky">
//       <div className="logo-wrapper">
//         <div className="logo flex">
//           {/* <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> */}
//           <div>
//             <img
//               src={Logo}
//               alt="Logo with a glowing paw inside a glowing heart. It says Bark Buddy."
//               className="flex"
//             ></img>
//           </div>

//           <div className="name fw-bold justify-content-center">
//             <span>Bark Buddy</span>
//           </div>
//           <div className="block">
//             <button className="flex">
//               <svg
//                 className="fill-current h-3 w-3"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <title>Menu</title>
//                 <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="cursor-pointer">
//         <div>
//           <a
//             href="#dog"
//             onClick={() => handlePageChange("Dog")}
//             className="nav-link block mt-4 md:inline-block md:mt-0 mr-5 p-3"
//           >
//             Dog
//           </a>

//           <a href="#footer" onClick={() => handlePageChange("Footer")}>
//             Footer
//           </a>

//           <a href="#home" onClick={() => handlePageChange("Home")}>
//             Home
//           </a>

//           <a href="#login" onClick={() => handlePageChange("Login")}>
//             Login
//           </a>

//           <a
//             href="#profile"
//             onClick={() => handlePageChange("Profile")}
//             className="nav-link block mt-4 md:inline-block md:mt-0 mr-5 p-3"
//           >
//             Profile
//           </a>
//           <a
//             href="#signup"
//             onClick={() => handlePageChange("Signup")}
//             className="nav-link block mt-4 md:inline-block md:mt-0 mr-5 p-3"
//           >
//             Signup{" "}
//           </a>
//           <a
//             href="#videos"
//             onClick={() => handlePageChange("Videos")}
//             className="nav-link block mt-4 md:inline-block md:mt-0 mr-5 p-3"
//           >
//             Videos
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// }
