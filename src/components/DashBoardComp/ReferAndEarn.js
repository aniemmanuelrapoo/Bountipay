import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Header = styled.div`
    ${tw`to-black md:text-2xl text-xl font-bold p-6`}
    color:#010080;
`
const Container = styled.div`
    ${tw`lg:px-8 text-left pt-6`}
    color:#010080;
`
const SubHeader = styled.p` ${tw`text-base md:text-xl font-bold pb-11`}`
const FlexContainer = styled.div`${tw`flex flex-row text-base md:text-xl font-bold pb-1`}`
const Referal = styled.div`${tw`md:w-48 w-40 border-b-2`}`
const ReferalDash = styled.div`${tw`md:w-16 w-14`}`
const ReferalNum = styled.div`${tw`md:w-32 w-28`}`
const Referal2 = styled.div`${tw`md:w-48 w-40`}`
const Button = styled.button`
    ${tw`text-white font-bold p-1 rounded-md mt-3 md:text-lg`}
    background-color:#f58634;
`

const ReferAndEarn = () => {
    return (
        <div>
            <Header>Refer and Earn</Header>
            <Container>
                <SubHeader>Refer someone and earn N100 per person.</SubHeader>
                <FlexContainer>
                    <Referal>Referals</Referal>
                    <ReferalDash>-</ReferalDash>
                    <ReferalNum>3</ReferalNum>
                </FlexContainer>
                <FlexContainer>
                    <Referal2>Referral payment</Referal2>
                    <ReferalDash>-</ReferalDash>
                    <ReferalNum>N300</ReferalNum>
                </FlexContainer>
                <div>
                    <Button>Refer Someone</Button>
                </div>
            </Container>
        </div>
    )
}

export default ReferAndEarn
