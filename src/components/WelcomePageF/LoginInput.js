import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import './LoginPage.css'

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
            <h1 className="secoundry text-3xl font-bold py-5 transition duration-300 ease-in-out items-center animate-bounce text-center">LOGIN</h1>
            <form className="primary1 text-white p-3 text-left rounded-lg">
                <div className="">
                    <label className="text-white">Username/Email</label>
                    <motion.input type="text" name=""  className="w-full rounded-md bg-transparent border-b border-yellow-400 outline-none px-2" placeholder="Username Or Email" variants={textMoverVarient}
                  whileHover="hover" />
                </div>
                <div className="mt-5">
                <label className="text-white">Password</label>
                    <motion.input type="password" name="" className="w-full rounded-md bg-transparent border-b border-yellow-400 outline-none px-2" placeholder="Input Password" variants={textMoverVarient} whileHover="hover" />
                </div>
                <p className="text-white py-4 text-sm"><Link to="">Forget Password?</Link></p>
                <div className="m-auto flex justify-center">
                <Link to="/predict"><motion.button className="py-1 my-3 border border-yellow-400 w-80 secoundry1 hover:bg-transparent text-white rounded-2xl loginbtn" type="button"
                  variants={buttonVarients}
                  whileHover="hover"
                >Login</motion.button></Link>
                </div>
                
                <p className="text-white py-1 text-sm"><Link to="/register">Not registered? Click here</Link></p>
            </form>
        </motion.div>
    )
}

export default LoginInput
