import React,{useState} from 'react'
import "./header.css"
import Mobile from './mobile';
import Web from './web';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleLogoClick = () => {
      window.scrollTo(0, 0);
    };
    window.onscroll = function () {
      setIsOpen(false);
    };
  return (
    <div className="header">
      <div onClick={handleLogoClick}> 
        {/* Amir! */}
        <img
          src={require("../../assets/icons/logo.png")}
          alt="Amir"
          style={{width:"100px"}}
        />
      </div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={() => setIsOpen(!isOpen)}>
            {/* <i className="fi fi-rr-align-center menu-icon"></i> */}
            <img src={require("../../assets/icons/menus.png")} alt="menu" className='menu-icon' style={{width:"30px"}}/>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;