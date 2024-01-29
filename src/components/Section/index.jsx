import React from "react";
import "../Section/styles.css";
import Image from "../../assets/woman.png";
import Arrow from '../../assets/arrow-small-right.svg'
import Location from '../../assets/Location-Icon.svg'
import Phone from '../../assets/phone-call.svg'
import Mail from "../../assets/mail.svg";

const Section = () => {
  return (
    <>
      <section className="section_container">
        <div className="container">
          <div className="text_container">
            <h1>
              <span className="title_span_section">Dive</span> Into The Depths
              <br />
              Of <span className="title_span_section">Virtual Reality</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
              Lectus mauris eros in vitae .
            </p>
            <div className="button_container_section">
              <button className="join_buttom">BUILD YOUR WORLD</button>
              <img src={Arrow} alt="" />
            </div>
          </div>
          <div className="img_container">
            <img src={Image} alt="" />
          </div>
        </div>
        <div className="container_icons">
          <div className="icons">
            <div className="location_container icons_center">
              <img src={Location} alt="" />
              <div className="icons_text">
                <h2>Pay Us a Visit</h2>
                <p>Union St, Seattle, WA 98101, United States</p>
              </div>
            </div>
              <div className="line"></div>
            <div className="call_container icons_center">
              <img src={Phone} alt="" />
              <div className="icons_text">
                <h2>Give Us a Call</h2>
                <p>(110) 1111-1010</p>
              </div>
            </div>
              <div className="line"></div>
            <div className="mail_container icons_center">
              <img src={Mail} alt="" />
              <div className="icons_text">
                <h2>Send Us a Message</h2>
                <p>Contact@HydraVTech.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
