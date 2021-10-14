/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import WelcomeImage from './WelcomeImage'
import Footer from './Footer'
import image1 from '../../images/489714.png'
import image2 from '../../images/PngItem_1011203.png'
import image3 from '../../images/PngItem_185641.png'
import image4 from '../../images/PngItem_797437.png'
import image5 from '../../images/PngItem_184848.png'
import image6 from '../../images/PngItem_1010934.png'
import image7 from '../../images/PngItem_1486656.png'
import image8 from '../../images/PngItem_5268335.png'
import RegisterInput from './RegisterInput'
import { GeneralContainer, MainContainer, ImageMover, FooterContainer } from './styledCom/styledCom'


const RegisterPage = () => {
    return (
        <GeneralContainer>
            <MainContainer>
            <ImageMover>       
                   <WelcomeImage images={[image1, image2, image3, image4, image5, image6, image7, image8]}/>
            </ImageMover>
            <div>   
                <RegisterInput />          
            </div>    
            </MainContainer>
            <FooterContainer>
                <Footer />
            </FooterContainer>
        </GeneralContainer>
    )
}

export default RegisterPage