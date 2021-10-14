import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import './LoginPage.css'

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
            <h1 className="text-white text-3xl font-bold py-4 transition duration-300 ease-in-out items-center animate-bounce">REGISTER</h1>
            <form className="primary1 text-white p-3 text-left rounded-lg">
                <div className="">
                    <label className="text-white">Full Name</label>
                    <motion.input type="text" name="" className="w-full rounded-md bg-transparent border-b border-yellow-400 outline-none px-2" placeholder="Full Name" variants={textMoverVarient} whileHover="hover" />
                </div>
                <div className="mt-1">
                <label className="text-white">Email</label>
                    <motion.input type="email" name="" className="w-full rounded-md bg-transparent border-b border-yellow-400 outline-none px-2" placeholder="input Email" variants={textMoverVarient} whileHover="hover" />
                </div>
                <div className="mt-1">
                <label className="text-white">Phone Number</label>
                    <motion.input type="text" name="" className="w-full rounded-md bg-transparent border-b border-yellow-400 outline-none px-2" placeholder="input phone number" variants={textMoverVarient} whileHover="hover" />
                </div>
                <div className="mt-1">
                <label className="text-white">Gender</label>
                    <motion.input type="text" name="" className="w-full rounded-md bg-transparent border-b border-yellow-400 outline-none px-2" placeholder="input gender" variants={textMoverVarient} whileHover="hover" />
                </div>
                <div className="mt-1">
                <label className="text-white">Date Of Birth</label>
                    <motion.input type="date" name="" className="w-full rounded-md bg-transparent border-b border-yellow-400 outline-none px-2 text-white" placeholder="input date of birth" variants={textMoverVarient} whileHover="hover" />
                </div>
                <div className="mt-1">
                <label className="text-white">Username</label>
                    <motion.input type="text" name="" className="w-full rounded-md bg-transparent border-b border-yellow-400 outline-none px-2" placeholder="input username" variants={textMoverVarient} whileHover="hover" />
                </div>
                <div className="mt-1">
                <label className="text-white">Password</label>
                    <motion.input type="password" name="" className="w-full rounded-md bg-transparent border-b border-yellow-400 outline-none px-2" placeholder="input password" variants={textMoverVarient} whileHover="hover" />
                </div>
                <div className="mt-1">
                <label className="text-white">Confirm Password</label>
                    <motion.input type="password" name="" className="w-full rounded-md bg-transparent border-b border-yellow-400 outline-none px-2" placeholder="confirm password" variants={textMoverVarient} whileHover="hover" />
                    <p className="text-white text-sm">Minimun of 6 characters</p>
                    <p className="text-white text-sm">Must contain letters and numbers(no spaces)</p>
                </div>
                <div className="m-auto flex justify-center">
                    <Link to="/predict"><motion.button className="py-1 mt-3 border border-yellow-400 w-80 secoundry1 hover:bg-transparent text-white rounded-2xl loginbtn" type="button"
                    variants={buttonVarients}
                    whileHover="hover"
                >Register</motion.button></Link>
                </div>
                
            </form>
        </motion.div>
    )
}

export default RegisterInput
