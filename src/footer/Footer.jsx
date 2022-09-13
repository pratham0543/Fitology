import './footer.css'
import Foot from './FootElements';
const Footer = () => {
  return (
    <div className='footer'>
      <nav className="navbar ">
        <a className="navbar-brand" href="./index.html">
          <h2 className="footer_heading ms-5 mt-4"> <i className="fa-solid fa-dumbbell me-1"></i> FITOLOGY</h2>
        </a>
      </nav>
      <div className='footer-content ms-4 pt-3'>
        <div className='footer_links'>
          <div className="basic-info">
            <ul style={{ listStyle: 'none' }} className="footer-ul">
              <Foot icon="fa-solid fa-location-dot" text="E-15, Block E, New Delhi 110065" />
              <Foot icon="fa-solid fa-envelope" text="fitology@gmail.com" />
              <Foot icon="fa-solid fa-phone" text="9896452130, 9875623145" />
            </ul>
          </div>
          <div className="calculators">
            <p className='footer-link-headings'>Calculators</p>
            <ul style={{ listStyle: 'none' }} className="footer-ul">
              <Foot icon="fa solid fa-heart" text="BMI" />
              <Foot icon="fa-solid fa-heart-circle-check" text="BMR" />
              <Foot icon="fa-solid fa-weight-scale" text="BODY FAT %" />
            </ul>
          </div>
          <div className="features">
            <p className='footer-link-headings'> Features</p>
            <ul style={{ listStyle: 'none' }} className="footer-ul">
              <Foot icon="fa-solid fa-bowl-food" text="Nutrition" />
              <Foot icon="fa-solid fa-person-walking" text="Exercise Tutorials" />
              <Foot icon="fa-brands fa-blogger" text="Blogs" />
            </ul>
          </div>
        </div>
        <div className='personel_plan me-5'>
          <div className="align">
            <h3>Get Personalized Plan</h3>
            <div className="input-group mb-3">
              <input type="text" className="form-control p-2 rounded-start" placeholder="Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
              <button className="btn " type="button" id="button-addon2"><i class="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
        </div>


      </div>

      <hr />
      <div id="copyright text-center">
        <p id="footer-para" className="text-muted text-center">All Rights Reserved | Copyright <i class="fa-regular fa-copyright"></i> <span style={{ color: "var(--purple)" }}>Fitology 2022</span> <i class="fa-solid fa-copyright"></i></p>
      </div>
    </div>)
}
export default Footer;