import Vector from "../../assets/Vector.svg";
import { Link } from "react-router-dom";
// import Login from "../../components/LoginPage"
// import Logo from "../../assets/logo.svg";
// import Buttom from "../Buttom/Buttom";
import "./styles.css";
import Hamburguer from '../../assets/Hamburger-Button.svg'

import React from "react";

const Header = () => {
  return (
    <div className="container" id="header_container">
      <div className="logo_container">
        <img id="vector" src={Vector} alt="" />
        {/* <img id="logo-title" src={Logo} alt="" /> */}
        <h1 id="logo-title">MM SYSTEM'S <br />& <br />SOLUTION</h1>
      </div>
      <div className="nav">
        <nav>
          <ul>
            <li><a href="#section2">About</a></li>
            <li><a href="#section3">Services</a></li>
            <li><a href="#section4">Technologies</a></li>
            <li><a href="#section5">How To</a></li>
          </ul>
        </nav>
      </div>
      <div className="hamburguer">
          <img src={Hamburguer} alt="" />
        </div>
      <div className="button_container">
      <a href="#form"><button className="button button_small">Contact US</button></a>
        <Link to="/login"><button className="button button_small" >Join Hydra</button></Link>
        {/* <Buttom id="contact_buttom" title="Contact US" />
        <Buttom id="join_buttom" title="Join Hydra" /> */}
      </div>
    
    </div>
  );
};

export default Header;
