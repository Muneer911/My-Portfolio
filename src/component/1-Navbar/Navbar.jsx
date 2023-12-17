import React from 'react'
import './NavbarStyle.scss'
import SideBar from '../sideBar/sideBar'


export default function Navbar() {
  return (
    <div className='navbar'>
      
    <SideBar/>
      <div className="wrapper nav__padding">
        
        <span>RAMEZ</span>

        <div className="social">
          <a href="#">
             <img src="/GitHub.png" alt="f-logo"/>
          </a>
          <a href="#">
             <img src="/X.png" alt="X"/>
          </a>
          <a href="#">
             <img src="/Linkedin.png" alt="Linkedin"/>
          </a>
        </div>
      </div>
      
    </div>
  )
}
