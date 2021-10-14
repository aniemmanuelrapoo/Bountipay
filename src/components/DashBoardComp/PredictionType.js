import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.div`color:#010080;`
const Header = styled.p`
    ${tw`font-bold text-xl md:text-3xl py-5`}
`
const ULContainer = styled.ul`
    ${tw`list-disc text-left md:text-2xl text-lg`}
`
const ListContainer = styled.li`
    ${tw`mb-4 tracking-widest`}
`
const ListSpan = styled.span`${tw`font-bold`}`
const ListSpan2 = styled.span`${tw`md:text-base text-sm text-black`}`

const PredictionType = () => {
    return (
        <Container>
            <Header>CHOOSE PREDICTION TYPE</Header>
            <ULContainer>
                <Link to="/regularPredict"><ListContainer><ListSpan>REGULAR PREDICTION (N100)</ListSpan> <br /><ListSpan2>Predict score with N100</ListSpan2></ListContainer></Link>

                <Link to="/regularPredict"><ListContainer><ListSpan>STANDARD PREDICTION (N1000)</ListSpan><br /><ListSpan2>Predict score with N1000</ListSpan2></ListContainer></Link>

                <Link to="/regularPredict"><ListContainer><ListSpan>VIP PREDICTION (N10,000)</ListSpan><br /><ListSpan2>Predict score with N10,000</ListSpan2></ListContainer></Link>

                <Link to="/regularPredict"><ListContainer><ListSpan>VVIP PREDICTION (N100,000)</ListSpan><br /><ListSpan2>Predict score with N100,000</ListSpan2></ListContainer></Link>

                <Link to="/regularPredict"><ListContainer><ListSpan>CHIEF PREDICTION (N1,000,000)</ListSpan><br /><ListSpan2>Predict score with N1,000,000</ListSpan2></ListContainer></Link>
            </ULContainer>
        </Container>
    )
}

export default PredictionType
