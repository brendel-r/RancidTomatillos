import React from "react";
import './Header.css'
import logo from '../recLogo-transparent.png'

function Header () {
return (
  <header className="header">
    <img className="rancid-logo" src={logo} alt="Rancid Tomatillos"/>
  </header>
)

}

export default Header;