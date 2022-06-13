import React from 'react'
import "./footer.css"
import FooterSeparator from "../common/separator/footer-separator.js"

const Footer = () => {
  return (
    <div className='footer'>
      <FooterSeparator /> 
      <p>
        &copy; {new Date().getFullYear()}. <span>Md Amir Alam</span>. All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;