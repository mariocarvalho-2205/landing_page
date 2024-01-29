import React from 'react'
import '../SectionTwo/styles.css'
import ArrowBig from '../../assets/arrowbig.svg'

const SectionTwo = () => {
  return (
    <div className="sectionTwo">
      <div className="sectionTwo_container">
        <div className="sectionTwo_text">
          <h2>INTRODUCTION</h2>
          <div className="h2_img">
            <h2>TO HYDRA VR</h2>
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

export default SectionTwo