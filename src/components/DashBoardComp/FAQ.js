import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import tw from 'twin.macro'

const FAQContainer = styled.div`
    ${tw`md:text-2xl text-lg md:p-12 p-6`}
    color: #010080;
`
const SubHeader = styled.p`${tw`font-bold pb-11 text-2xl`}`
const FAQListContainer = styled.ul`
    ${tw`list-disc text-left`}
    li{
        ${tw`mb-4`}
    }
`


const FAQ = () => {
    return (
        <FAQContainer>
            <SubHeader>FAQ</SubHeader>
            <FAQListContainer>
                <Link to="/FAQ"><li>HOW DO I START PREDICTING</li></Link>
                <Link to="/FAQ"><li>WHEN WILL MY WITHDRAWER REFLECT</li></Link>
                <Link to="/FAQ"><li>CAN I PREDIT MORE THAN ONE TIMES</li></Link>
            </FAQListContainer>
        </FAQContainer>
    )
}

export default FAQ
