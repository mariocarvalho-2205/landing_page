import React from 'react'
import '../SectionTwo/styles.css'
import '../../index.css'
import ArrowBig from '../../assets/arrowbig.svg'
import Image2 from '../../assets/image2.png'

const SectionTwo = () => {
  return (
    <div id='section2' className="sectionTwo_container">
      <div className="sectionTwo_top">
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
      <div className="section2_botton">
        <div className="img2_container">
          <img src={Image2} alt="" />
        </div>
        <div className='section2_text'>
          <h2>ABOUT</h2>
          <h2>HYDRA VR</h2>
          <p>Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi n tempor.</p>
          <button className='button button_big'>LET’S GET IN TOUCH</button>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo