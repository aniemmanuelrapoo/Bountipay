import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.div`color: #010080;`
const Header = styled.div`
    ${tw`lg:text-2xl md:text-xl text-lg font-bold md:p-5 py-3 text-center `}
`
const Grid1Container = styled.div`${tw`text-left md:grid md:grid-cols-2`}`
const Grid1Side = styled.div`${tw`border-r-2 lg:px-8`}`
const Grid1 = styled.div`${tw`flex flex-row text-base lg:text-xl font-bold border-b-2 pb-1`}`
const Grid1sec = styled.div`
    ${tw`flex flex-row text-base lg:text-xl font-bold pb-2`}
    color: #f58634;
`
const Rewards = styled.div`${tw`lg:w-48 w-40`}`
const RewardsDot = styled.div`${tw`lg:w-16 w-14`}`
const RewardsAmount = styled.div`${tw`lg:w-32 w-28`}`
const Grid2Side = styled.div`${tw`md:ml-16 md:mt-5`}`
const DepositContainer = styled.div`
    ${tw`mb-2`}
    button{
        ${tw`text-white px-3 font-bold lg:text-2xl text-lg`}
        background-color: #f58634;
    }
`
const Withdraw = styled.div`
    button{
        ${tw`text-white px-3 font-bold lg:text-2xl text-lg`}
        background-color: #010080;
    }
`
const SectionTwo = styled.div`${tw`font-bold`}`
const FormTag = styled.div`${tw`text-left`}`
const AccName = styled.div`
    input{
        ${tw`w-full md:p-2 p-1 border border-blue-900 rounded-md outline-none`}
    }
`
const AccNoContainer = styled.div`${tw`md:grid md:grid-cols-2 md:gap-12`}`
const AccNoBankName = styled.div`
    ${tw`w-full mt-2`}
    input{
        ${tw`w-full md:p-2 p-1 border border-blue-900 rounded-md outline-none`}
    }
`
const ButtonContainer = styled.div`
    ${tw`text-right mt-6 mb-3`}
    button{
        ${tw`text-white px-6 py-1 rounded-sm font-bold`}
        background-color: #010080;
    }
`

const Wallet1 = () => {
    return (
        <Container>
            <Header>WALLET</Header>
            <Grid1Container>
            <Grid1Side>
                    <Grid1>
                        <Rewards>Rewards</Rewards>
                        <RewardsDot>-</RewardsDot>
                        <RewardsAmount>N2000</RewardsAmount>
                    </Grid1>
                    <Grid1>
                        <Rewards>Referral payment</Rewards>
                        <RewardsDot>-</RewardsDot>
                        <RewardsAmount>N300</RewardsAmount>
                    </Grid1>
                    <Grid1sec>
                        <Rewards>Balance</Rewards>
                        <RewardsDot>-</RewardsDot>
                        <RewardsAmount>N2300</RewardsAmount>
                    </Grid1sec>
                </Grid1Side>
                <Grid2Side>
                    <DepositContainer><button>Deposit</button></DepositContainer>
                    <Withdraw><button>WithDraw</button></Withdraw>
                </Grid2Side>
            </Grid1Container>
            <SectionTwo>
                <Header>BANK</Header>
            <FormTag>
                <AccName>
                    <label>Account Name*</label>
                    <input type="text" />
                </AccName>
                <AccNoContainer>
                    <AccNoBankName>
                        <label>Account No*</label>
                        <input type="text" />
                    </AccNoBankName>
                    <AccNoBankName>
                        <label>Bank Name*</label>
                        <input type="text" />
                    </AccNoBankName>
                </AccNoContainer>
                
                <ButtonContainer>
                    <button>Save</button>
                </ButtonContainer>
            </FormTag>
            </SectionTwo>
        </Container>
    )
}

export default Wallet1
