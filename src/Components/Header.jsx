import "../assets/scss/component/_header.scss";
import { Link } from "react-router-dom";


const Header = () => {
   const toggleNavbar = () => {
    alert("hello");
    let sidebar = document.getElementById("navbar");
    let body2 = document.getElementById("root");
  
    sidebar.classList.add("menu-mobile");
    body2.classList.add("show-overlay");
  };

  const removeToggleNavbar=()=>{
    let sidebar = document.getElementById("navbar");
    let body2 = document.getElementById("root");
  
    sidebar.classList.remove("menu-mobile");
    body2.classList.remove("show-overlay");
  }
  return (
    <div>
      {/* <div className="container"> */}
        <div className="navbar">
          <h1 className="logoname">
            <Link to="/">Bhakti Rane</Link>
          </h1>
          <div onClick={toggleNavbar} className="menu">menu</div>
          <div className="navbar_right" id="navbar">
              <div className="close" onClick={removeToggleNavbar}>close</div>
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
                <a href="#" className="btn btn-resume">
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
