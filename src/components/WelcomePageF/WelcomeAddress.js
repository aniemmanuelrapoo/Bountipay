/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import logo from '../../images/Bountipay 17 blue logo.png'
import ball from '../../images/Bountipay 15 blue favicon.png'
import { Link } from 'react-router-dom'
import { motion} from 'framer-motion'

const buttonVarients = {
    hover: {scale: 1.1, textShadow: "0px 0px 8px rgb(255,255,255)", boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: { duration: 0.3, yoyo: Infinity }}
  }
const containervarients = {
    hidden:{opacity: 0},
    visible: {opacity: 1,
      transition: {delay: 1.0, duration: 1.5}},
    exit:{x: '-100vw',
      transition: {ease: "easeInOut"}}
}
  
  const textMoverVarient ={
    hover:{scale: 1.1, color: '#010080', originX: 0,
      transition:{ type: 'spring', stiffness: 300}}
  }

const WelcomeAddress = () => {
    return (
        <motion.div className="text-center"
            variants={containervarients}
            initial="hidden" 
            animate="visible"
            exit="exit"
        >
             <h1 className="primary font-light text-3xl">Welcome to</h1>
            <img src={logo} alt="" className=" p-8" />
            <p className="font-bold primary pb-14 text-xl">PREDICT, WIN, WITHDRAW</p>
            <div className="App-logo w-20 m-auto">
                <img src={ball} alt=""/>
            </div>
            <div className="mt-4 pt-5">
                <motion.button className="primary1 rounded-lg text-white px-8 py-1 font-mono text-lg transition duration-300 ease-in-out items-center animate-bounce"
                    variants={buttonVarients}
                    whileHover="hover"
                ><Link to="/login">Join Now</Link></motion.button>
                <motion.p className="secoundry font-bold mt-1"
                  variants={textMoverVarient}
                  whileHover="hover"
                ><Link to="/register">REGISTER</Link></motion.p>
                <motion.p className="secoundry font-bold"
                  variants={textMoverVarient}
                  whileHover="hover"
                ><Link to="/login">LOGIN</Link></motion.p>
            </div>
        </motion.div>
    )
}

export default WelcomeAddress
