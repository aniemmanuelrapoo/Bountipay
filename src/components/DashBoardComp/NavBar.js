import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/Bountipay 17 blue logo.png'
import styled from 'styled-components'
import tw from 'twin.macro'
import DropDown from './DropDown'

const NavContainer = styled.nav`
  ${tw`flex justify-between items-center h-16 relative shadow-lg font-mono px-10`}
  background-color: #010080;
`
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
                <DropDown />
           </NavContainer>
        </>
    )
}

export default NavBar