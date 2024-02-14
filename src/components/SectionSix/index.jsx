import React from 'react'
import Line from "../../assets/line_Horizontal.svg"
import './styles.css'

const SectionSix = () => {
  return (
    <div className='sectionSix_Container'>
      <div className='sectionSix_Title_Div'>
        <h2 className='sectionSix_title_H2'>Join Hydra</h2>
        <img src={Line} alt="line_separation" />
        <h3 className='sectionSix_SubTitle_H2'>Let’s Build Your VR Experience</h3>
      </div>
      <div className='sectionSix_form_container'>

        <form className='sectionSix_Form'>
          <input className='input_form firstName' type="text" id='first_name' name='first_name' placeholder='First Name'/>
          <input className='input_form lastName' type="text" id='last_name' name='last_name' placeholder='Last Name'/>
          <input className='input_form email' type="text" id='email' name='email' placeholder='Email'/>
          <input className='input_form phoneNumber' type="text" id='phone_number' name='phone_number' placeholder='Phone Number'/>
          <input className='input_form subject' type="text" id='subject' name='subject' placeholder='Subject'/>
          <textarea className='textarea' name="textarea" id="textarea" cols="30" rows="10" placeholder='Tell Us Something...'></textarea>
          <button className='button button_big'>Send to Hydra</button>

        </form>
      </div>
    </div>
  )
}

export default SectionSix