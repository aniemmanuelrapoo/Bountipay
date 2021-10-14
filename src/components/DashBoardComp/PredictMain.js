import { motion } from 'framer-motion'
import Adds from './Adds'
import NavBar from './NavBar'
import PredictContent from './PredictContent'
import SideBar from './SideBar'
import { NavContainer, MainContainer, SidebarContainer, SideMain, AddsContainer } from './styledComponet/styledComponet'

const containervarients = {
    hidden:{opacity: 0},
    visible: {opacity: 1,
      transition: {delay: 0.8, duration: 1.3}},
    exit:{x: '-100vw',
      transition: {ease: "easeInOut"}}
}

const PredictMain = () => {
    return (
        <div>
            <NavContainer>
                <NavBar />
            </NavContainer>
            <MainContainer>
                <SidebarContainer>
                    <SideBar />
                </SidebarContainer>

                <SideMain>
                    <AddsContainer>
                        <Adds />
                    </AddsContainer>

                    <motion.div className="text-center text-sm px-8"
                        variants={containervarients}
                        initial="hidden" 
                        animate="visible"
                        exit="exit"
                    >
                        <PredictContent />
                    </motion.div>
                </SideMain>
            </MainContainer>
        </div>
    )
}

export default PredictMain
