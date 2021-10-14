import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.div`color: #010080;`
const Header = styled.p`${tw`text-lg font-bold md:py-3 py-2`}`
const MainContainer = styled.div`${tw`text-left`}`
const SubHeader = styled.p`
    ${tw`text-base mb-2`}
    color:#f58634;
`
const FormContainer = styled.form`
    ${tw`items-center text-base md:w-96 w-80 font-bold`}
`
const InputContainer = styled.div`
    ${tw`mb-2`}
    input{
        ${tw`w-full md:p-2 p-1 border border-blue-900 rounded-lg outline-none`}
    }
    textarea{
        ${tw`w-full md:p-2 p-1 border border-blue-900 rounded-3xl outline-none`}
    }
`
const ButtonContainer = styled.div`
    ${tw`text-right`}
    button{
        ${tw`text-white px-6 py-1 rounded-md font-bold`}
        background-color:#010080;
    }
`


const Help = () => {
    return (
        <Container>
            <Header>HELP</Header>
            <MainContainer>
                <SubHeader>Need help? Chat us now</SubHeader>
                <FormContainer>
                    <InputContainer>
                        <label>Name*</label><br />
                        <input type="text" />  
                    </InputContainer>
                    <InputContainer>
                        <label>Email*</label><br />
                        <input type="email" />  
                    </InputContainer>
                    <InputContainer>
                        <label>Message*</label><br />
                        <textarea name="" id="" cols="20" rows="5"></textarea> 
                    </InputContainer>
                    <ButtonContainer>
                        <button>Submit</button>
                    </ButtonContainer> 
                </FormContainer>
            </MainContainer>
        </Container>
    )
}

export default Help
