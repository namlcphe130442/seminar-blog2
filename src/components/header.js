import React from 'react'
import './header.css'
import Logo from '../images/fabbi.svg';

const Header = () => {
  return (
    <nav>
      <img src={Logo} alt={"Logo"}/>
    </nav>
  )
}

export default Header
