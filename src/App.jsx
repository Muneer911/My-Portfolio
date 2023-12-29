import React from "react";
import "./App.scss";
import "./index.scss";
import Navbar from "./component/1-Navbar/Navbar";
import Hero from "./component/2-Hero/Hero";
import Parallax from "./component/4-parallax/Parallax";
import Portfolio from "./component/6-portfolio/Portfolio";
import Contact from "./component/5-contact/Contact";
import About from "./component/3-about/About";

function App() {
  return (
    <>
      <div>
      
        <section id="Homepage">
          <Navbar></Navbar>
          <Hero></Hero>
        </section>
        <section id="About">
          <About></About>
        </section>
        <section>
          <Parallax />
        </section>
        <div id="Portfolio">

        <Portfolio />
        </div>
        <section id="Contact">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
