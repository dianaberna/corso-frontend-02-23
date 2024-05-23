import React from 'react';
import "./Logo.css";

const Logo = (props) => {
  return (
    <img src={props.src} alt="Logo" className="Logo" />
  );
}

export default Logo;