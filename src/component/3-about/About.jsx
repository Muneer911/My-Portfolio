import React from "react";
import "./AboutStyle.scss";
import {motion} from 'framer-motion'
import { js, react, css, sass, html } from "./Icons";

export default function About() {

  return (
    <div className="about">
      <motion.div className="smoothLine"></motion.div>

      <div className="textContaner">
        <h1>About me </h1>
        <p>
        As a self-driven web developer and React front end developer,
        I thrive on tackling challenging projects and am always eager to learn and adapt to new technologies and trends in the ever-evolving world of web development. My attention to detail and commitment to delivering exceptional results sets me apart from the rest.
        </p>
      </div>

      <div className="itemsContainer">
          <a href="">
            <img src={html} alt="" />
          </a>

          <a href="">
            <img src={css} alt="" />
          </a>
        
          <a href="">
            <img src={sass} alt="" />
          </a>  
        
          <a href="">
            <img src={js} alt="" />
          </a>

          <a href="">
            <img src={react} alt="" />
          </a>
      </div>
    </div>
  );
}
