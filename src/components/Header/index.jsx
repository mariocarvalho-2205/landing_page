import Vector from "../../assets/Vector.svg";
import Logo from "../../assets/logo.svg";
import Buttom from "../Buttom/Buttom";
import "./styles.css";

import React from "react";

const Header = () => {
  return (
    <div className="container">
      <div className="logo_container">
        <img id="vector" src={Vector} alt="" />
        {/* <img id="logo-title" src={Logo} alt="" /> */}
        <h1 id="logo-title">MM SYSTEM'S <br />& <br />SOLUTION</h1>
      </div>
      <div className="nav">
        <nav>
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Technologies</li>
            <li>How To</li>
          </ul>
        </nav>
      </div>
      <div className="button_container">
        <button className="button button_small">Contact US</button>
        <button className="button button_small">Join Hydra</button>
        {/* <Buttom id="contact_buttom" title="Contact US" />
        <Buttom id="join_buttom" title="Join Hydra" /> */}
      </div>
    </div>
  );
};

export default Header;
