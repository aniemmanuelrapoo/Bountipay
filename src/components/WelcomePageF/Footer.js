import React from 'react'
import paystack from '../../images/paystack-logo-vector.png'
import flutterwave from '../../images/flutterwave-logo-vector.png'
import styled from 'styled-components'
import tw from 'twin.macro'
import { Link } from 'react-router-dom'

const SectionOne = styled.div`${tw`flex space-x-7 justify-around md:ml-10`}`
const SectionTwo = styled.div`
    ${tw`flex items-center md:mr-10`}
    img{
        ${tw`w-24 object-cover`}
    }
    span{
        ${tw`pr-2`}
    }
`

const Footer = () => {
    return (
        <>
            <SectionOne>
                <Link to="/">T&C</Link>
                <Link to="/">Contact</Link>
                <Link to="/">About us</Link>
                <Link to="/">Help</Link>
            </SectionOne>
            <SectionTwo>
                <span>Our payment partners:</span>
                <img src={paystack} alt="" />
                <img src={flutterwave} alt="" />
            </SectionTwo>
        </>
    )
}

export default Footer
