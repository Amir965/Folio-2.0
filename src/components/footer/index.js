import React from 'react'
import "./footer.css"
import Separator from "../common/separator/index"
const Footer = () => {
  return (
    <div>
      <Separator/>
      <p>
        &copy; {new Date().getFullYear()}. <span>Md Amir Alam</span>. All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;