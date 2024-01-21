import React from "react";
import "./NavbarStyle.scss";
import SideBar from "../sideBar/sideBar";

export default function Navbar() {
  return (
    <div className="navbar">
      <SideBar />
      <div className="wrapper nav__padding">
        <span>MUNEER</span>

        <div className="social">
          <a href="https://github.com/Ramez991">
            <img src="/GitHub.png" alt="f-logo" />
          </a>
          <a href="https://twitter.com/AeMD911">
            <img src="/X.png" alt="X-logo" />
          </a>
          <a href="#">
            <img src="/Linkedin.png" alt="Linkedin-logo" />
          </a>
        </div>
      </div>
    </div>
  );
}
