import React from 'react'
import logo from "../../img/logo.png"
import "../../css/Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo' >
          <Link to={"/"}>
            <img src={logo} alt="logo" onClick={<Link to={"/"} />} />
            <h2>Buse Knitting</h2>
          </Link>
        </div>
        <div className='link'>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
