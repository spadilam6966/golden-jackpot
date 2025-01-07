import React, { useEffect } from 'react';
import './Footer.css'; // If you have custom styles
import GoldenJackpot from './images/GoldenJackpot.jpeg';

const Footer = () => {
  useEffect(() => {
    // Dynamically set the current year in the footer
    document.getElementById('year').innerText = new Date().getFullYear();
  }, []);

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-center align-content-center">
            <div className="title h2 text-uppercase pr-5 font-italic">
              <div
                className="logo"
                style={{ width: '100px', height: '150px' }}
              >
                <img
                  src={GoldenJackpot}
                  alt="Logo"
                  style={{ width: '140px', height: '150px' }}
                />
              </div>
            </div>
            <ul className="footer-links">
              <h6>Quick Links</h6>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/#today_results">Results</a>
              </li>
              <li>
                <a href="/downloadresult.htm">Download results</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; <span id="year"></span> All Rights Reserved.
            </p>
            <p>
            Since 2001 @ Lakshadweep - LAKS - PIN : 682557
            </p>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a className="facebook" href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a className="twitter" href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a className="dribbble" href="#">
                  <i className="fa fa-dribbble"></i>
                </a>
              </li>
              <li>
                <a className="linkedin" href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
