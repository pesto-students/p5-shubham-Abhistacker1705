import React from 'react'
import Logo from '../images/LinkShortLogo.png';
import  './Navbar.css'


const Navbar = () => {
  return (
      <nav className='navbar bg-dark navbar-dark d-flex flex-row'>
       <a className='navbar-brand ms-3' href="">
        <img src={Logo} alt="Link Shortener Logo" />
       </a>
       <div className="navbar-nav d-flex flex-row justify-content-between w-25 mb-2">
              <a className="nav-link anchor-nav" href="#">Features</a>
              <a className="nav-link anchor-nav" href="#">Pricing</a>
              <a className="nav-link anchor-nav" href="#">Resources</a>
          </div>

          <div className="navbar-nav d-flex flex-row justify-content-around w-25 mb-2">
          <a className="nav-link anchor-nav" href="#">Login</a>
          <a className="nav-link anchor-nav" href="#">SignUp</a>
          </div>
        </nav>
  )
}

export default Navbar