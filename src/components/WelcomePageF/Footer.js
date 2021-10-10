/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import paystack from '../../images/paystack-logo-vector.png'
import flutterwave from '../../images/flutterwave-logo-vector.png'

const Footer = () => {
    return (
        <>
            <div className="flex space-x-7 justify-around md:ml-10">
                <a href="">T&C</a>
                <a href="">Contact</a>
                <a href="">About us</a>
                <a href="">Help</a>
            </div>
            <div className="flex items-center md:mr-10">
                <span className="pr-2">Our payment partners:</span>
                <img src={paystack} alt="" className="w-24 object-cover"  />
                <img src={flutterwave} alt="" className="w-24 object-cover" />
            </div>
        </>
    )
}

export default Footer
