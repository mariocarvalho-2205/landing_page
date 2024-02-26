import '../SectionThree/styles.css'
import ArrowBig from '../../assets/arrowbig.svg'
import Card1 from '../../assets/card1.png'
import '../../../src/index.css'

const SectionThree = () => {
  return (
    <div id='section3' className="sectionThree_container">
      <div className="sectionThree_top">
        <div className="sectionThree_text">
          <h2>WHY BUILD</h2>
          <div className="h2_img">
            <h2>WITH HYDRA?</h2>
            <img src={ArrowBig} alt="" />
          </div>
        </div>
        <p>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
          nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
          quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
          lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
      </div>
      <div className="sectionThree_bottom">
        <div className="card_container">
          <div className="card">
            <div className='card1'>
              <div className='card_img'>
                <img src={Card1} alt="" />
              </div>
              <div className='card_h2'>
                <h2>SIMULATION</h2>
              </div>
              <div className='card_text'>
                <p>Vitae sapien pellentesque habitant morbi
                  nunc. Viverra aliquet  porttitor rhoncus
                  libero justo laoreet sit amet vitae.</p>
              </div>
              <div className='card_button'>
                <button className='button button_small'>TRY IT NOW</button>
              </div>
            </div>

          </div>
          <div className="card">
            <div className='card1'>
              <div className='card_img'>
                <img src={Card1} alt="" />
              </div>
              <div className='card_h2'>
                <h2>SIMULATION</h2>
              </div>
              <div className='card_text'>
                <p>Vitae sapien pellentesque habitant morbi
                  nunc. Viverra aliquet  porttitor rhoncus
                  libero justo laoreet sit amet vitae.</p>
              </div>
              <div className='card_button'>
                <button className='button button_small'>TRY IT NOW</button>
              </div>
            </div>

          </div>
          <div className="card">
            <div className='card1'>
              <div className='card_img'>
                <img src={Card1} alt="" />
              </div>
              <div className='card_h2'>
                <h2>SIMULATION</h2>
              </div>
              <div className='card_text'>
                <p>Vitae sapien pellentesque habitant morbi
                  nunc. Viverra aliquet  porttitor rhoncus
                  libero justo laoreet sit amet vitae.</p>
              </div>
              <div className='card_button'>
                <button className='button button_small'>TRY IT NOW</button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className='card1'>
              <div className='card_img'>
                <img src={Card1} alt="" />
              </div>
              <div className='card_h2'>
                <h2>SIMULATION</h2>
              </div>
              <div className='card_text'>
                <p>Vitae sapien pellentesque habitant morbi
                  nunc. Viverra aliquet  porttitor rhoncus
                  libero justo laoreet sit amet vitae.</p>
              </div>
              <div className='card_button'>
                <button className='button button_small'>TRY IT NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionThree