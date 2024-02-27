import ArrowBig from "../../assets/arrowbig.svg";
import ArrowSmall from "../../assets/arrow-small-right.svg"
import LineH from "../../assets/line_section_five.svg";
import "./styles.css";

const SectionFive = () => {
  return (
    <div id="section5" className="sectionFive_container">
      <div className="sectionFive_top">
        <div className="sectionFive_text">
          <h2>HOW WE BUILD</h2>
          <div className="h2_img">
            <h2 className="h22">WITH HYDRA VR?</h2>
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

      <div className="sectionFive_Bottom">
        <div className="line_balls">
          <div className="lineH">
            <img src={LineH} alt="" />
          </div>
          <div className="balls_Section_Five">
            <div className="overBall">
              <div>
                <div className="ball_Sec_Five">
                  <h2>01</h2>
                </div>
                <div className="text_ball_Sec_Five">
                  <img src={ArrowSmall} alt="" />
                  <h3>3D Conception & Design</h3>
                </div>
              </div>
            </div>
            <div className="overBall">
              <div>
                <div className="ball_Sec_Five">
                  <h2>02</h2>
                </div>
                <div className="text_ball_Sec_Five">
                  <img src={ArrowSmall} alt="" />
                  <h3>Interaction Design</h3>
                </div>
              </div>
            </div>
            <div className="overBall">
              <div>
                <div className="ball_Sec_Five">
                  <h2>03</h2>
                </div>
                <div className="text_ball_Sec_Five">
                  <img src={ArrowSmall} alt="" />
                  <h3>VR World User Testing</h3>
                </div>
              </div>
            </div>
            <div className="overBall">
              <div>
                <div className="ball_Sec_Five">
                  <h2>04</h2>
                </div>
                <div className="text_ball_Sec_Five">
                  <img src={ArrowSmall} alt="" />
                  <h3>Hydra VR Deploy</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
