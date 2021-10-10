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
import LoginInput from './LoginInput'


const LoginPage = () => {
    return (
        <div className=" height1 items-center justify-center bg-white">
            <div className=" grid md:grid-cols-3 items-center justify-center md:pr-20 lg:pr-36 mb-3 md:mb-0">
            <div className="height1 flex flex-nowrap overflow-x-hidden relative col-span-2">       
                   <WelcomeImage images={[image1, image2, image3, image4, image5, image6, image7, image8]}/>
            </div>
            <div className="">   
                    <LoginInput />        
            </div>
                   
            </div>
            <div className="flex items-center justify-between primary font-bold flex-col md:flex-row">
                <Footer />
            </div>
        </div>
    )
}

export default LoginPage