import React from "react";
import Vector from "../../assets/vector.svg";
import Facebook from "../../assets/facebook.svg"
import "./styles.css";

const Footer = () => {
  return (
    <div className="footer_Container">
      <div className="footer">
        <div className="footer_logo">
          <img src={Vector} alt="" />
        </div>
        <div className="footer_services">
          <a href=""><h3>About</h3></a>
          <a href=""><h3>Services</h3></a>
          <a href=""><h3>Technologies</h3></a>
          <a href=""><h3>How-To</h3></a>
          <a href=""><h3>Join Hydra</h3></a>
        </div>
        <div className="footer_faq">
          <a href=""><h3>F.A.Q</h3></a>
          <a href=""><h3>Sitemap</h3></a>
          <a href=""><h3>Conditions</h3></a>
          <a href=""><h3>Licences</h3></a>
        </div>
        <div className="footer_socialize">
          <div className="socialize_title">
            <h3>Socialize if Hydra</h3>
          </div>
          <div className="socialize_icons">
            <img src={Facebook} alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
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
