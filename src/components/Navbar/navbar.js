import React, { useState } from 'react'
import './navbar.css'
import logo from '../../accets/logo.png'
import contactImg from '../../accets/contact.png'
import menu from '../../accets/menu.png'
import {Link} from 'react-scroll'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo' />
        <div className="desktopMenu">
            <Link  activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItem">Home</Link>
            <Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}  className="desktopMenuItem">About</Link>
            <Link  activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500}  className="desktopMenuItem">Project</Link>
            <Link  activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500}  className="desktopMenuItem">clients</Link>
        </div>
        <button className="desktopMenuBtn" onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior:  'smooth'})
        }}>
            <img src={contactImg} alt="" className="desktopMenuImg" />contact me !</button>

        <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display: showMenu? 'flex': 'none'}}>
            <Link  activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
            <Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}  className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
            <Link  activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500}  className="listItem" onClick={()=>setShowMenu(false)}>Project</Link>
            <Link  activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500}  className="listItem" onClick={()=>setShowMenu(false)}>Clients</Link>
            <Link  activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500}  className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar;