/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react'

const WelcomeImage = ({ images = [], autoPlay = true, autoPlayTime = 3000, children, ...props }) => {
    const [currentSlid, setCurrentSlid] = useState(0)
    const nextSlid = (slidIndex = currentSlid + 1) => {
        const newSlidIndex = slidIndex >= images.length  ? 0 : slidIndex
            setCurrentSlid(newSlidIndex)
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            nextSlid()
        }, autoPlayTime)

        return () => {
            clearTimeout(timer)
        }
    }, [currentSlid])

    return (
        <>
                {images.map((image, index) => (
                <div key={index} className="h-full width1 flex-shrink-0 bg-center bg-contain bg-no-repeat object-center bg-url transition-all duration-700 ease-in-out" style={{ backgroundImage: `url(${image})`, marginLeft: index === 0 ? `-${currentSlid * 100}%` : undefined}}></div>
                ))}
                
                {/* <div className="w-full h-full absolute top-0 left-0 bg-opacity-75 bg-black"></div> */}
                <IndicatorRapper currentSlid={currentSlid} amountSlides={images.length} nextSlid={nextSlid} />
                
        </>
    )
}

const IndicatorRapper = ({currentSlid, amountSlides, nextSlid}) => {
    const isActive = currentSlid
    return(
        <div className="flex flex-nowrap absolute bottom-14 right-14">
            {Array(amountSlides).fill(1).map((_, i) => <div className={`w-2 rounded-full h-2 bg-black ${isActive === i ? 'opacity-80' : 'opacity-40'} m-5 transition-all duration-700 ease-in-out`} key={i} onClick={() => nextSlid(i)}></div>)}
        </div>
    )
}

export default WelcomeImage

