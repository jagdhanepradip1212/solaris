import React from "react";
import "../Navigation/navbar.css";
import { Link } from "react-router-dom";
import logo from "../../images/manipal-hospitals.png";

const Navbar = () => {
  return (
    <div className="maindiv">
      <img src={logo} alt="Logo" className="navbar-logo" style={{width:"200px", height:"50px"}} />
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/doctors">Doctors</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
   
    </div>
    
  );
};

export default Navbar;
