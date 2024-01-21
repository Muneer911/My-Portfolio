import React from 'react'
import {motion} from 'framer-motion';
const variants = {
  open: {
    transition:{
      staggerChildren: 0.1,
    },
    closed: {
      transition:{
        staggerChildren: 0.5,
        staggerDirection: -1,
      }
    }
  }
}
const itemVariants = {
  open: {
    x: 0,
    opacity:1},

    closed: {
      y: 50,
      opacity:0,
    }
  }


export default function Link() {
  const items = [
    "Homepage",
    "About",
    "Portfolio",
    "Contact"
  ];
  return (
    <motion.div className='links' variants={variants} >
      
      {items.map((item)=>{
        return(
          <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.5}}>
            {item}
          </motion.a>
        )
      })}
      
    </motion.div>
  )
  
}
