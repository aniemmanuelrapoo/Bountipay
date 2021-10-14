import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import UserImg from '../../images/user.png'

const Container = styled.div`
    ${tw`grid grid-cols-2 text-left`}
    color: #010080;
`
const Form = styled.form`
    ${tw`items-center text-sm font-bold`}
`
const Title = styled.h1`
    ${tw`md:text-lg text-base font-bold`}
    color: #010080;
`
const Side = styled.div`
    ${tw`md:px-4 px-2`}
`
const SubTitle = styled.h1`
    ${tw`md:text-base text-sm font-bold`}
    color:#f58634;
`
const InputDiv = styled.div`
    ${tw`mb-1`}
    input{
        ${tw`w-full p-0.5 border-b border-b-blue-900 rounded-lg outline-none md:p-0.5`}
    }
`
const Hint = styled.p`
    ${tw`text-xs`}
    color:#f58634;
`
const UploadImg = styled.h1`
    ${tw`w-40 m-auto text-base font-bold ml-4`}
`
const ButtonTag = styled.div`
    ${tw`text-right mt-2.5`}
    button{
        ${tw`text-white px-6 py-1 rounded-md font-bold`}
        background-color:#010080;
    }
`


const Settings = () => {
    return (
        <div>
             <Title>SETTINGS</Title>
            <Container>
                <Side>
                    <SubTitle>CHANGE PERSONAL DATA</SubTitle>
                    <Form>
                        <InputDiv>
                            <label>Name*</label><br />
                            <input type="text" />  
                        </InputDiv>
                        <InputDiv>
                            <label>Email*</label><br />
                            <input type="email" />  
                        </InputDiv>
                        <InputDiv>
                            <label>Phone*</label><br />
                            <input type="text" />
                        </InputDiv>
                        <InputDiv>
                            <label>State*</label><br />
                            <input type="text" />  
                        </InputDiv>
                        <InputDiv>
                            <label>Country*</label><br />
                            <input type="text" />  
                        </InputDiv>
                        <InputDiv>
                            <label>Gender*</label><br />
                            <input type="text" />  
                        </InputDiv>
                        <InputDiv>
                            <label>Date of Birth*</label><br />
                            <input type="text" />  
                        </InputDiv>
                        <InputDiv>
                            <label>Username*</label><br />
                            <input type="text" />  
                        </InputDiv>
                    </Form>
                </Side>
                <Side>
                    <div className="flex justify-center">
                        <div>
                            <img src={UserImg} alt="" className="w-36" />
                            <UploadImg>Upload Image</UploadImg>
                        </div>
                        
                    </div>
                    <SubTitle>CHANGE PASSWORD DATA</SubTitle>
                    <Hint>*Minimum of 6 characters</Hint>
                    <Hint>*Must contain letters and numbers(no spaces)</Hint>
                    <Form>
                        <InputDiv>
                            <label>Old password*</label><br />
                            <input type="text" />  
                        </InputDiv>
                        <InputDiv>
                            <label>New password*</label><br />
                            <input type="text" />  
                        </InputDiv>
                        <InputDiv>
                            <label>Confirm password*</label><br />
                            <input type="text" />  
                        </InputDiv>
                        <ButtonTag>
                            <button>Save</button>
                        </ButtonTag>
                    </Form>
                </Side>
            </Container>
            
        </div>
    )
}

export default Settings
