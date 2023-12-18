import React from "react";
import "./HeroStyle.scss";
import { motion } from "framer-motion";


const SliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-150%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};
const textVariants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

export default function Hero() {
  return (
    <div className="Hero nav__padding">
      <div className="wrapper">
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="Container"
        >
          <motion.h2>RAMEZ THE CREATOR</motion.h2>
          <motion.h1 variants={textVariants}>Front-end developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <a href="#Portfolio">

            <motion.button variants={textVariants}>
              The the latest works
            </motion.button>
            </a>
            <a href="#Contact">
            <motion.button variants={textVariants}>Contact me</motion.button>
            </a>
            
          </motion.div>
        </motion.div>

        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="imgContainer"
        >
          <motion.img
            variants={textVariants}
            src="/public/Hands.png"
            alt="Programming image"
          />
        </motion.div>

        <motion.div
          variants={SliderVariants}
          initial="initial"
          animate="animate"
          className="SlidingTextContainer"
        >
          React Developer
        </motion.div>
      </div>
    </div>
  );
}
