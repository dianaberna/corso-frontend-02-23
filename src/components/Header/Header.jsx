import React from 'react';
import "./Header.css";
import Logo from '../Logo/Logo';
import Menu from './Menu/Menu';


const Header = () => {

  const logo_url = require("../../assets/logo.png")

  return (
    <div className="Header">
        <Logo  src={logo_url}></Logo>
        <Menu></Menu>
    </div>
  );
}

export default Header;