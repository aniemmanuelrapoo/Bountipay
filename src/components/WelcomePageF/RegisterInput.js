import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import tw from 'twin.macro'
import { Header, FormTag, ButtonContainer } from './LoginInput'

const InputContainer = styled.div`
  ${tw`mt-1.5`}
  label{
    ${tw`text-white`}
  }
  input{
    ${tw`w-full bg-transparent border-b border-yellow-400 outline-none px-2`}
  }
  p{
      ${tw`text-sm text-white`}
  }
`

const containerVariants = {
    hidden: {opacity: 0, x: '100vw'},
    visible: {opacity: 1, x: 0,
      transition: {type: 'spring', delay: 0.5}},
    exit:{x: '-100vw', transition: {ease: "easeInOut"}}
  }
  const buttonVarients = {
    hover: {scale: 1.1,textShadow: "0px 0px 8px rgb(255,255,255)", boxShadow: "0px 0px 8px rgb(255,255,255)", transition: {duration: 0.3,yoyo: Infinity}}
  }
  const textMoverVarient ={
    hover:{scale: 1.03, textShadow: "0px 0px 8px rgb(255,255,255)", boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {duration: 0.3, yoyo: 2}}
  }

const RegisterInput = () => {
    return (
        <motion.div className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Header>REGISTER</Header>
            <FormTag>
                <InputContainer>
                <label>Full Name</label>
                    <motion.input type="text" placeholder="Full Name" variants={textMoverVarient} whileHover="hover" />
                </InputContainer>
                <InputContainer>
                <label>Email</label>
                    <motion.input type="email" placeholder="input Email" variants={textMoverVarient} whileHover="hover" />
                </InputContainer>
                <InputContainer>
                <label>Phone Number</label>
                    <motion.input type="text" placeholder="input phone number" variants={textMoverVarient} whileHover="hover" />
                </InputContainer>
                <InputContainer>
                <label>Gender</label>
                    <motion.input type="text" placeholder="input gender" variants={textMoverVarient} whileHover="hover" />
                </InputContainer>
                <InputContainer>
                <label>Date Of Birth</label>
                    <motion.input type="date" placeholder="input date of birth" variants={textMoverVarient} whileHover="hover" />
                </InputContainer>
                <InputContainer>
                <label>Username</label>
                    <motion.input type="text" placeholder="input username" variants={textMoverVarient} whileHover="hover" />
                </InputContainer>
                <InputContainer>
                <label>Password</label>
                    <motion.input type="password" placeholder="input password" variants={textMoverVarient} whileHover="hover" />
                </InputContainer>
                <InputContainer>
                <label>Confirm Password</label>
                    <motion.input type="password" placeholder="confirm password" variants={textMoverVarient} whileHover="hover" />
                    <p>Minimun of 6 characters</p>
                    <p>Must contain letters and numbers(no spaces)</p>
                </InputContainer>
                <ButtonContainer>
                    <Link to="/predict"><motion.button type="button"
                    variants={buttonVarients}
                    whileHover="hover"
                >Register</motion.button></Link>
                </ButtonContainer>
            </FormTag>
        </motion.div>
    )
}

export default RegisterInput
