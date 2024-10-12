import React from 'react';
import './Navbar.css';
import logo from '../assets/Logo.svg';
import logo1 from '../assets/search-normal.svg';
import logo2 from '../assets/heart.svg';
import logo3 from '../assets/shopping-bag.svg';
import logo4 from '../assets/profile.svg';
import collapsedIcon from '../assets/collapsed-icon.svg';

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="top-row">
      <img src={collapsedIcon} alt="Collapsed Icon" className="collapsed-icon" />
        <a href="#">
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <h1 className="logo-title">LOGO</h1>
        <div className="language-select">
          <div className="logo-images">
            <img src={logo1} alt="Logo 1" className="small-logo" />
            <img src={logo2} alt="Logo 2" className="small-logo" />
            <img src={logo3} alt="Logo 3" className="small-logo" />
            <img src={logo4} alt="Logo 4" className="small-logo lg1" />
          </div>
          <select className="language-dropdown" defaultValue="eng">
            <option value="eng">ENG</option>
            <option value="es">ESP</option>
            <option value="fr">FR</option>
            <option value="de">DE</option>
          </select>
        </div>
      </div>
      <br />
      <div className="bottom-row">
        {["SHOP", "SKILLS", "STORIES", "ABOUT", "CONTACT US"].map((heading, index) => (
          <h3 key={index}>{heading}</h3>
        ))}
      </div>
    </nav>
      <div class="TwoButton"><span className='span1'>HOME</span><span className='span2'>SHOP</span></div>
    </>
  );
};

export default Navbar;
