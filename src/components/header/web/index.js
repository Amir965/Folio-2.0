import React from 'react'
import "./web.css"
const Web = () => {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#projects">
          <i class="fi fi-rr-edit option-icon"></i>Projects
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
          <i className="fi fi-rs-laptop option-icon"></i>Skills
        </a>
      </div>
      <div className="web-option">
        <a href="#work">
          <i className="fi fi-rs-briefcase option-icon"></i>Work
        </a>
      </div>
      <div className="web-option">
        <a href="#contact">
          <i className="fi fi-br-address-book option-icon"></i>Contact
        </a>
      </div>
    </div>
  );
}

export default Web;