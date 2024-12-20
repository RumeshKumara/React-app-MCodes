// import React from 'react'
import './HeaderContent.css'
import logo from '../../assets/react.svg'
import MenuLink from '../MenuLink/MenuLink'

function HeaderContent() {
  return (
    <div id="navcontent">
      <a href="https://github.com/RumeshKumara?tab=repositories">
        <img src={logo} alt="React" />
        <img src="vite.svg" alt="" />
      </a>
      <div>
        <MenuLink linkname="Home" url="#home" />
        <MenuLink linkname="About" url="#about"/>
        <MenuLink linkname="Contact" url="#contact"/>
        <MenuLink linkname="Login" url="#login"/>
      </div>
    </div>
  )
}

export default HeaderContent
