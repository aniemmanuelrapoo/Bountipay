import { motion } from 'framer-motion'
import React, { useState } from 'react'
import Adds from './Adds'
import FAQ from './FAQ'
import Help from './Help'
import LiveScore from './LiveScore'
import NavBar from './NavBar'
import PredictContent from './PredictContent'
import PredictionType from './PredictionType'
// import PredictContent from './PredictContent'
import ReferAndEarn from './ReferAndEarn'
import RegularPrediction from './RegularPrediction'
import SideBar from './SideBar'
// import Wallet from './Wallet'

const containervarients = {
    hidden:{opacity: 0},
    visible: {opacity: 1,
      transition: {delay: 0.8, duration: 1.3}},
    exit:{x: '-100vw',
      transition: {ease: "easeInOut"}}
}

const DashBoard = () => {
    const [isActive, setIsActive] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(isActive === true){
            setIsActive(false)
        }else{
            setIsActive(true)
        }
       
    }
    return (
        <div>
            <div>
                <NavBar handleSubmit={handleSubmit} />
            </div>
            <div className="grid grid-cols-5">
                <div className={`primary1 text-white height1 flex-col sm:gap-80 gap-72 py-9 px-4 ${isActive ? 'hidden' : 'flex'} shadow-inner`}>
                    <SideBar />
                </div>

                <div className={`${isActive ? 'col-span-5 ' : 'col-span-4'}`}>
                    <div className="flex justify-around items-center text-center">
                        <Adds />
                    </div>

                    <motion.div className="text-center text-sm px-8"
                        variants={containervarients}
                        initial="hidden" 
                        animate="visible"
                        exit="exit"
                    >
                        {/* <PredictContent /> */}
                        {/* <Wallet /> */}
                        {/* <ReferAndEarn /> */}
                        {/* <PredictionType /> */}
                        {/* <RegularPrediction /> */}
                        {/* <FAQ /> */}
                        {/* <Help /> */}
                        <LiveScore />
                    </motion.div>

                    {/* <div>
                        <input type="text" name="" placeholder="Search" className="rounded-2xl border-4 text-center" />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default DashBoard
