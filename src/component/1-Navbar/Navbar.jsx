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
          <a target="_blank" href="https://github.com/Muneer911">
            <img src="/GitHub.png" alt="f-logo" />
          </a>
          <a target="_blank" href="https://twitter.com/muneer9110">
            <img src="/X.png" alt="X-logo" />
          </a>
        </div>
      </div>
    </div>
  );
}
