import React from "react";
import Vector from "../../assets/vector.svg";
import Facebook from "../../assets/facebook.svg";
import Twitter from "../../assets/twitter.svg";
import Linkedin from "../../assets/linkedin.svg";
import Youtube from "../../assets/youtube.svg";
import Instagram from "../../assets/instagram.svg";
import Pinterest from "../../assets/pinterest.svg";
import Border from "../../assets/border.svg"

import "./styles.css";

const Footer = () => {
  return (
    <div className="footer_Container">
      <div className="footer">
        <div className="footer_logo footer_div">
          <img src={Vector} alt="" />
        </div>
        <div className="border_img">
          <img src={Border} alt="" />
        </div>
        <div className="footer_services footer_div">
          <a href="">
            <h3>About</h3>
          </a>
          <a href="">
            <h3>Services</h3>
          </a>
          <a href="">
            <h3>Technologies</h3>
          </a>
          <a href="">
            <h3>How-To</h3>
          </a>
          <a href="">
            <h3>Join Hydra</h3>
          </a>
        </div>
        <div className="border_img">
          <img src={Border} alt="" />
        </div>
        <div className="footer_faq footer_div">
          <a href="">
            <h3>F.A.Q</h3>
          </a>
          <a href="">
            <h3>Sitemap</h3>
          </a>
          <a href="">
            <h3>Conditions</h3>
          </a>
          <a href="">
            <h3>Licences</h3>
          </a>
        </div>
        <div className="border_img">
          <img src={Border} alt="" />
        </div>
        <div className="footer_socialize footer_div">
          <div className="socialize_title">
            <h3>Socialize if Hydra</h3>
          </div>
          <div className="socialize_icons">
            <img src={Facebook} alt="" />
            <img src={Twitter} alt="" />
            <img src={Linkedin} alt="" />
            <img src={Youtube} alt="" />
            <img src={Instagram} alt="" />
            <img src={Pinterest} alt="" />
          </div>
          <div className="socialize_buttom">
            <button className="button button_big">Build Your World</button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright">
        <h3>Copyright</h3>
      </div>
    </div>
  );
};

export default Footer;
