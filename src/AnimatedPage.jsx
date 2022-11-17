import {motion} from "framer-motion";
import './Dropdown.css'

import React from 'react'

const animations = {
    initial: {opacity: 0},
    animate: {opacity: 1},
    exit: {opacity: 0},
}

const AnimatedPage = ({children}) => {
  return (
        <motion.div 
        variants={animations} 
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1, ease: "easeOut"}}
        className="motion_design"
        >
        {children}
        </motion.div>
  );
};

export default AnimatedPage
