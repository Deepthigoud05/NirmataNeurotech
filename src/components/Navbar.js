import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/logo.png"; 

function Navbar() {
  return (
    <nav className="navbar">
     
      <Link to="/" className="logo">
        <img src={Logo} alt="Nirmata Neurotech Logo" className="logo-img" />
      </Link>

      
      <ul>
        <li><Link to="/" className="active">Home</Link></li>
        <li><Link to="/challenge">Challenge</Link></li>
        <li><Link to="/solution">Our Solution</Link></li>
        <li><Link to="/userjourney">User Journey</Link></li>
        <li><Link to="/benefits">Benefits</Link></li>
        <li><Link to="/nextsteps">Next Steps</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;







