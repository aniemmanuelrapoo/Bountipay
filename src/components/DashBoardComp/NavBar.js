import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/Bountipay 17 blue logo.png'
import styled from 'styled-components'
import tw from 'twin.macro'

const NavContainer = styled.nav`
  ${tw`flex justify-between items-center h-16 relative shadow-lg font-mono px-10`}
  background-color: #010080;
`

const svgVarients = {
    hidden:{ rotate: -180 },
    visible: {rotate: 0, transition: { duration: 2 }}
  }
  
  const pathVarients = {
    hidden: {opacity: 0, pathLength: 0},
    visible: {opacity: 1, pathLength: 1,
      transition: {duration: 3, ease: "easeInOut"}}
  }

const NavBar = () => {
    return (
        <>
            <NavContainer role="navigation">
                <div className="">
                    <Link to="/"><img src={logo} alt="" className="w-28 bg-white" /></Link>
                </div>    
                <motion.div className="pr-8" initial={{ y: 10}} 
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2, type:"spring", stiffness: 120 }}>
                    <Link className="p-4 text-xl text-white" to="/" >DASHBOARD</Link>
                </motion.div>

                <Link to="/"><div className="px-4 cursor-pointer">
                    <motion.svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" variants={svgVarients} initial="hidden" animate="visible"><motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" variants={pathVarients} /></motion.svg>
                </div></Link>
           </NavContainer>
        </>
    )
}

export default NavBar