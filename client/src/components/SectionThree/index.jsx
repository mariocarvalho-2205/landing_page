import React, { useState, useEffect } from "react";
import "../SectionThree/styles.css";
import ArrowBig from "../../assets/arrowbig.svg";
import Card1 from "../../assets/card1.png";
import "../../../src/index.css";

const SectionThree = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    window.addEventListener("resize", handleResize);

    // Remove o event listener quando o componente for desmontado.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCardChange = (index) => {
    setActiveCard(index);
  };

  return (
    <div id="section3" className="sectionThree_container">
      <div className="sectionThree_top">
        <div className="sectionThree_text">
          <h2>WHY BUILD</h2>
          <div className="h2_img">
            <h2>WITH HYDRA?</h2>
            <img src={ArrowBig} alt="" />
          </div>
        </div>
        <p>
          Vitae sapien pellentesque habitant morbi tristique senectus et netus
          et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
          amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
          aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in.
          Lectus magna fringilla urna porttitor rhoncus vitae.
        </p>
      </div>
      <div className="sectionThree_bottom">
        <div className="card_container">
          {isMobile ? (
            <div className="card slider-item">
              <div className="card1">
                <div className="card_img">
                  <img src={Card1} alt="" />
                </div>
                <div className="card_h2">
                  <h2>SIMULATION 1</h2>
                </div>
                <div className="card_text">
                  <p>
                    Vitae sapien pellentesque habitant morbi nunc. Viverra
                    aliquet porttitor rhoncus libero justo laoreet sit amet
                    vitae.
                  </p>
                </div>
                <div className="card_button">
                  <button className="button button_small">TRY IT NOW</button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div
                className={`card slider-item ${
                  activeCard === 0 ? "active" : ""
                }`}
              >
                <div className="card1">
                  <div className="card_img">
                    <img src={Card1} alt="" />
                  </div>
                  <div className="card_h2">
                    <h2>SIMULATION 1</h2>
                  </div>
                  <div className="card_text">
                    <p>
                      Vitae sapien pellentesque habitant morbi nunc. Viverra
                      aliquet porttitor rhoncus libero justo laoreet sit amet
                      vitae.
                    </p>
                  </div>
                  <div className="card_button">
                    <button className="button button_small">TRY IT NOW</button>
                  </div>
                </div>
              </div>
              <div
                className={`card slider-item ${
                  activeCard === 1 ? "active" : ""
                }`}
              >
                <div className="card1">
                  <div className="card_img">
                    <img src={Card1} alt="" />
                  </div>
                  <div className="card_h2">
                    <h2>SIMULATION 2</h2>
                  </div>
                  <div className="card_text">
                    <p>
                      Vitae sapien pellentesque habitant morbi nunc. Viverra
                      aliquet porttitor rhoncus libero justo laoreet sit amet
                      vitae.
                    </p>
                  </div>
                  <div className="card_button">
                    <button className="button button_small">TRY IT NOW</button>
                  </div>
                </div>
              </div>
              <div
                className={`card slider-item ${
                  activeCard === 2 ? "active" : ""
                }`}
              >
                <div className="card1">
                  <div className="card_img">
                    <img src={Card1} alt="" />
                  </div>
                  <div className="card_h2">
                    <h2>SIMULATION 3</h2>
                  </div>
                  <div className="card_text">
                    <p>
                      Vitae sapien pellentesque habitant morbi nunc. Viverra
                      aliquet porttitor rhoncus libero justo laoreet sit amet
                      vitae.
                    </p>
                  </div>
                  <div className="card_button">
                    <button className="button button_small">TRY IT NOW</button>
                  </div>
                </div>
              </div>
              <div
                className={`card slider-item ${
                  activeCard === 3 ? "active" : ""
                }`}
              >
                <div className="card1">
                  <div className="card_img">
                    <img src={Card1} alt="" />
                  </div>
                  <div className="card_h2">
                    <h2>SIMULATION 4</h2>
                  </div>
                  <div className="card_text">
                    <p>
                      Vitae sapien pellentesque habitant morbi nunc. Viverra
                      aliquet porttitor rhoncus libero justo laoreet sit amet
                      vitae.
                    </p>
                  </div>
                  <div className="card_button">
                    <button className="button button_small">TRY IT NOW</button>
                  </div>
                </div>
              </div>
              <div className={`input_radio_sectionThree ${activeCard === 0? "active_input" : ""}`}>
                <input
                  className="slide_input"
                  name="slide"
                  type="radio"
                  checked={activeCard === 0}
                  onChange={() => handleCardChange(0)}
                />
                <input
                  className="slide_input"
                  name="slide"
                  type="radio"
                  checked={activeCard === 1}
                  onChange={() => handleCardChange(1)}
                />
                <input
                  className="slide_input"
                  name="slide"
                  type="radio"
                  checked={activeCard === 2}
                  onChange={() => handleCardChange(2)}
                />
                <input
                  className="slide_input"
                  name="slide"
                  type="radio"
                  checked={activeCard === 3}
                  onChange={() => handleCardChange(3)}
                />

              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
