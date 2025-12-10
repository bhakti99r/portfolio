import { useState } from "react";
import "../assets/scss/component/_header.scss";
import { Link } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(true);
  };

  const removeToggleNavbar = () => {
    setIsOpen(false);
  };
  return (
    <div>
      {/* <div className="container"> */}
      <div className={`navbar ${isOpen ? "show-overlay" : ""}`}>
        <h1 className="logoname">
          <Link to="/">Bhakti Rane</Link>
        </h1>
        <div onClick={toggleNavbar} className="menu">
          <RiMenu3Line />
        </div>
        <div
          className={`navbar_right ${isOpen ? "menu-mobile" : ""}`}
          id="navbar"
        >
          <div className="close" onClick={removeToggleNavbar}>
            <IoIosClose />
          </div>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
            <li>
              <a
                href="/src/assets/BhaktiRane(Resume).pdf"
                target="_blank"
                className="btn btn-resume"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Header;
