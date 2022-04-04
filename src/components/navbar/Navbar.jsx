import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="myapp__navbar">
      <div className="myapp__navbar-links">
        <div className="myapp__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="myapp__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#cyclingroutsmaps">Cycling Routs and Maps</a></p>
          <p><a href="#publicbike">Public Bike Share System</a></p>
          <p><a href="#register">Register Bike to Reduce Theft</a></p>
          <p><a href="#movinggoods">Moving Goods and Services</a></p>
          {/* <p><a href="#improving">Improving Cycling Network</a></p> */}
          {/* <p><a href="#union">Union-Adanac Corridor</a></p> */}
          <p><a href="#contact">Contact Us</a></p>
          <p><a href="#career">Career</a></p>
        </div>
      </div>
      <div className="myapp__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="myapp__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="myapp__navbar-menu_container scale-up-center">
          <div className="myapp__navbar-menu_container-links">
          <p><a href="#home">Home</a></p>
          <p><a href="#cyclingroutsmaps">Cycling Routs and Maps</a></p>
          <p><a href="#publicbike">Public Bike Share System</a></p>
          <p><a href="#register">Register Bike to Reduce Theft</a></p>
          <p><a href="#movinggoods">Moving Goods and Services</a></p>
          {/* <p><a href="#improveing">Improving Cycling Network</a></p> */}
          {/* <p><a href="#union">Union-Adanac Corridor</a></p> */}
          <p><a href="#contact">Contact Us</a></p>
          <p><a href="#career">Career</a></p>
          </div>
          <div className="myapp__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;