import logo from './logo.png'
import './style.css'
function Footer() {
  return (
    <div className="footer">

      <div>
        <h3>Abstract</h3>
        <h5>Branches</h5>
      </div>

      <div>
        <h3>Resources</h3>
        <h5>Blog</h5>
        <h5>Help Center</h5>
        <h5>Release Notes</h5>
        <h5>Status</h5>
      </div>

      <div>
        <h3>Community</h3>
        <h5>Twitter</h5>
        <h5>LinkedIn</h5>
        <h5>Facebook</h5>
        <h5>Dribble</h5>
        <h5>Podcast</h5>
      </div>

      <div>
        <h3>Company</h3>
        <h5>About Us</h5>
        <h5>Careers</h5>
        <h5>Legal</h5>

        <h4>Contact Us</h4>
        <h5>info@abstract.com</h5>
      </div>

      <div className='end-item'>
        <img src={logo} alt="...loading" />
        <h5>&copy; Copyright 2022</h5>
        <h5>Abstract Studio Design , Inc.</h5>
        <h5>All rights reserved</h5>
      </div>


    </div>
  );
}

export default Footer;
