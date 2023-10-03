// import React,{ useEffect, useRef, useState } from "react";
import React from "react";
import "./contact.css";
import Separator from "../../common/separator/index";
import SocialContact from "../../common/social-contact/index";
// import gsap, { Elastic } from 'gsap';

const Contact = () => {
  // const buttonRef = useRef(null);
  // const [isButtonLoading, setIsButtonLoading] = useState(false);

  // useEffect(() => {
  //   const button = buttonRef.current;
  //   const duration = 3000;

  //   const svgPath = {
  //     y: 20,
  //     smoothing: 0,
  //   };

  //   button.style.setProperty('--duration', duration);



  //   const handleButtonClick = () => {
  //     if (!isButtonLoading) {
  //       setIsButtonLoading(true);

  //       gsap.to(svgPath, {
  //         smoothing: 0.3,
  //         duration: duration * 0.065 / 1000,
  //       });

  //       gsap.to(svgPath, {
  //         y: 12,
  //         duration: duration * 0.265 / 1000,
  //         delay: duration * 0.065 / 1000,
  //         ease: Elastic.easeOut.config(1.12, 0.4),
  //       });

  //       setTimeout(() => {
          
  //       }, duration / 2);
  //     }
  //   };

  //   button.addEventListener('click', handleButtonClick);

    
  //   return () => {
  //     button.removeEventListener('click', handleButtonClick);
  //   };
  // }, [isButtonLoading]);
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch? Contact me on any of the platform.</p>
          <SocialContact />
        </div>
        <div className="download">
          <a download href={require("../../../assets/Resume.pdf")}>
            
            <i class="fi fi-rs-cloud-download download-icon"/>
            Download Resume
          </a>
        </div>
        {/* <div className="container">
          <a download href={require("../../../assets/Resume.pdf")}  className={`button ${isButtonLoading ? 'loading' : ''}`} ref={buttonRef}>
        <ul>
            <li>&#68;ownload CV</li>
            <li>&#68;ownloading</li>
            <li>&#68;onloaded</li>
        </ul>
        <div>
              
              <svg viewBox="0 0 24 24"><path d="M 4,12 C 4,12 12,20 12,20 C 12,20 20,12 20,12"></path></svg>
        </div>
    </a>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
