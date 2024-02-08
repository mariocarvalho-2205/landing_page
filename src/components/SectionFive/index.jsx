import React from 'react'
import ArrowBig from "../../assets/arrowbig.svg";
import './styles.css'



const SectionFive = () => {
  return (
    <div className="sectionFive">
      <div className="sectionFive_top">
        <div className="sectionFive_text">
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
    </div>
  );
}

export default SectionFive