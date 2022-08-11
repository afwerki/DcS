import React from 'react';
import '../styles/Navbar.css'
// import AboutUs from './AboutUs';
const Navbar = () => {
  return (
    <div className='Navbar'>
      <ul>
      <li className='logo'>DataCare Soulutions</li>  
      <li><a href="#home">Home</a></li>
      <li><a href="AboutUs">About Us</a></li>
      <li><a href="#SmartTool">Smart Tools</a></li>
      <li><a href="#Resources">Resources</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#Login">Login</a></li>
</ul>
      </div>
  );
};

export default Navbar;
