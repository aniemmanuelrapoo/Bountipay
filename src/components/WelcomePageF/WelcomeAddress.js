/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import logo from '../../images/Bountipay 17 blue logo.png'
import ball from '../../images/Bountipay 15 blue favicon.png'
import { Link } from 'react-router-dom'
import { motion} from 'framer-motion'
import tw from 'twin.macro'
import styled from 'styled-components'

const Container = styled.div`
  color: #010080;
`
const Header = styled.h1`
  ${tw`font-bold pb-14 text-xl`}
`
const SubHeader = styled.p`
  ${tw`font-light text-3xl`}
`
const ButtonContainer = styled.div`
  ${tw`mt-4 pt-5`}
  button{
    ${tw`rounded-lg text-white px-8 py-1 font-mono text-lg transition duration-300 ease-in-out items-center animate-bounce`}
    background-color:#010080;
  }
  p{
    ${tw`font-bold mt-1`}
    color:#f58634;
  }
`

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
          <Container>
            <Header>Welcome to</Header>
            <img src={logo} alt="" className=" p-8" />
            <SubHeader>PREDICT, WIN, WITHDRAW</SubHeader>
            <div className="App-logo w-20 m-auto">
                <img src={ball} alt=""/>
            </div>
            <ButtonContainer>
                <Link to="/login"><motion.button variants={buttonVarients} whileHover="hover"
                >Join Now</motion.button></Link>
                <motion.p variants={textMoverVarient} whileHover="hover"
                ><Link to="/register">REGISTER</Link></motion.p>
                <motion.p variants={textMoverVarient} whileHover="hover"
                ><Link to="/login">LOGIN</Link></motion.p>
            </ButtonContainer>
            </Container>
        </motion.div>
    )
}

export default WelcomeAddress
