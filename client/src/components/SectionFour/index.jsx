import React from 'react'
import Img4 from '../../assets/img_section_four.png'
import './styles.css'
import Ball from '../../assets/ball.svg'
import Arrow from '../../assets/arrow_down.svg'
import Prop1 from '../../assets/1_icons_sectio_four.png'
import Prop2 from '../../assets/2_icons_sectio_four.png'
import Prop3 from '../../assets/3_icons_sectio_four.png'
import Prop4 from '../../assets/4_icons_sectio_four.png'


const SectionFour = () => {
  return (
    <div id='section4' className="sectionFour">
      <div className="sectionFour_content">
        <div className="sectionFour_text">
          <h2 className='title'>TECHNOLOGIES & HARDWARE</h2>
          <h2 className='subtitle'>USED BY HYDRA VR.</h2>
        </div>
        <img className="img4" src={Img4} alt="" />
        <button className="ball">
          <img className='ball1' src={Ball} alt="" />
          <img className='ball2' src={Arrow} alt="" />
        </button>
      </div>
      <div className="sectionFour_bottom">
        <img src={Prop1} alt="" />
        <img src={Prop2} alt="" />
        <img src={Prop3} alt="" />
        <img src={Prop4} alt="" />
      </div>
    </div>
  )
}

export default SectionFour