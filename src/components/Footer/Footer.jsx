import "./footer.css";
import Logo from "../../assets/img/FormeaseLogos.png";
import GooglePlay from "../../assets/img/GooglePlayStore.svg";
import AppStore from "../../assets/img/AppStore.svg";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="topContainer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <img src={Logo} alt="" className="logo" />
              <div className="social-links">
                <a href="#">
                  <FaFacebook />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaXTwitter />
                </a>
                <a href="#">
                  <FaLinkedin />
                </a>
              </div>
            </div>
            <div className="footer-mid">
              <div className="footer-col">
                <ul>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Site map</a>
                  </li>
                  <li>
                    <a href="#">Credits</a>
                  </li>
                  <li>
                    <a href="#">Help Center</a>
                  </li>
                  <li>
                    <a href="#">Community Guidelines</a>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <ul>
                  <li>
                    <a href="#">Accessibility</a>
                  </li>
                  <li>
                    <a href="#">Mobile</a>
                  </li>
                  <li>
                    <a href="#">Marketing</a>
                  </li>
                  <li>
                    <a href="#">Advertising</a>
                  </li>
                  <li>
                    <a href="#">Report Issue</a>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <ul>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Trust & Safety</a>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="footer-col">
                <div className="badges">
                  <img src={GooglePlay} alt="" className="footer-img" />
                  <img src={AppStore} alt="" className="footer-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyrights">
          <p>All Trademarks are the property of their respective owners</p>
          <p>All rights reserved @2024</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
