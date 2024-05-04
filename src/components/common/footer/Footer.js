import React from "react";
import { footer } from "../../data/Data";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <button className='btn5'> Contact Us Today</button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo.png' alt='' />
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, hot deals, tutorials, discounts sent straight to your inbox every month</p>
            </div>
          </div>
          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2021 RentUP. Designed By GorkCoder.</span>
        <div className="socialIcons">
          <a href="https://www.facebook.com/profile.php?id=100074467951245&sfnsn=wiwspwa&mibextid=RUbZ1f"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
          <a href="#"><i className="fab fa-google-plus"></i></a>
          <a href="https://www.instagram.com/shubhee_patil?igsh=MTAzMzV4NnRoMnZiMQ=="><i className="fab fa-instagram"></i></a>       
        </div>
        <div className="footerNav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/Contact">Contact-us</a></li>
            <li><a href="/">Our Team</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
