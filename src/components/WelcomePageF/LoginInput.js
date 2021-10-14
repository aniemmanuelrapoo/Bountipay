import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Header = styled.div`
  ${tw`text-3xl font-bold py-5 transition duration-300 ease-in-out items-center animate-bounce text-center`}
  color: #f58634;
`
export const FormTag = styled.form`
  ${tw`text-white p-3 text-left rounded-lg`}
  background-color:#010080;
`
const InputContainer = styled.div`
  ${tw`mt-5`}
  label{
    ${tw`text-white`}
  }
  input{
    ${tw`w-full bg-transparent border-b border-yellow-400 outline-none px-2`}
  }
`
const ForgetPass = styled.p`${tw`text-white py-4 text-sm`}`
export const ButtonContainer = styled.div`
  ${tw`m-auto flex justify-center`}
  button{
    ${tw`py-1 my-3 border border-yellow-400 w-80 hover:bg-transparent text-white rounded-2xl`}
    background-color: #f58634;
  }
`
const NotReg = styled.p`${tw`text-white py-1 text-sm`}`
const containerVariants = {
    hidden: {opacity: 0, x: '100vw'},
    visible: {opacity: 1, x: 0,
      transition: {type: 'spring', delay: 0.5}},
    exit:{x: '-100vw',
      transition: {ease: "easeInOut"}}
  }

  const buttonVarients = {
    hover: {scale: 1.1, textShadow: "0px 0px 8px rgb(255,255,255)", boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {duration: 0.3, yoyo: Infinity}}
  }
  
  const textMoverVarient ={
    hover:{scale: 1.03, textShadow: "0px 0px 8px rgb(255,255,255)", boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {duration: 0.3, yoyo: 2}}
  }

const LoginInput = () => {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Header>LOGIN</Header>
            <FormTag>
                <InputContainer>
                  <label>Username/Email</label>
                  <motion.input type="text" placeholder="Username Or Email" variants={textMoverVarient}
                  whileHover="hover" />
                </InputContainer>
                <InputContainer>
                  <label>Password</label>
                  <motion.input type="password" placeholder="Input Password" variants={textMoverVarient} whileHover="hover" />
                </InputContainer>
                <ForgetPass><Link to="">Forget Password?</Link></ForgetPass>
                <ButtonContainer>
                  <Link to="/predict"><motion.button type="button"
                  variants={buttonVarients}
                  whileHover="hover"
                >Login</motion.button></Link>
                </ButtonContainer>
                <NotReg><Link to="/register">Not registered? Click here</Link></NotReg>
            </FormTag>
        </motion.div>
    )
}

export default LoginInput
