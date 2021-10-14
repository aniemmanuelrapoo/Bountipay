import React from 'react'
import './DashBoardCss.css'
import MANU from '../../images/manu.png'
import CHELSE from '../../images/chelse.png'
import ARSE  from '../../images/arsena.png'
import MANCITY from '../../images/mancity.png'
import BARCA from '../../images/barca.png'
import AJAX from '../../images/ajax.png'
import LIVEPOOL from '../../images/liverpool.png'
import ACM from '../../images/acmiland.png'
import INTER from '../../images/intermiland.png'
import MADRED from '../../images/realmad.png'
import TUTTH from '../../images/tottham.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import tw from 'twin.macro'

const ScoreContainer = styled.div`
${tw`flex flex-row flex-nowrap items-center justify-center mb-2 lg:text-xl font-medium text-xs sm:text-base`}
color:#010080;
img{
    ${tw`w-9`}
  }
`
const ClubName = styled.div`${tw`sm:w-24 md:w-40 px-6`} width:70px;`
const ClubVerse = styled.span`
  ${tw`px-2 py-1 rounded-sm text-white md:text-lg text-sm mx-2 md:mx-3 lg:mx-5`}
  background-color: #010080;
`
const PredictContainer = styled.div`${tw`px-6`}`
const Header = styled.p`
  ${tw`font-bold text-base md:text-lg md:p-6 p-4`}
  color:#010080;
`
const SearchContainer = styled.div`
  ${tw`flex justify-end mt-2`}
  input{
    ${tw`rounded-2xl border-4 text-center`}
  }
`
const MainContainer = styled.div`
  ${tw`items-center`}
`

const textMoverVarient ={
    hover:{scale: 1.2, color: '#010080', originX: 0,
      transition:{ type: 'spring', stiffness: 300}}
}

const PredictContent = () => {
    return (
        <>
            <Header>Predict Upcoming Matches Score</Header>
            <MainContainer>

                <ScoreContainer>
                  <ClubName>MAN U</ClubName>
                  <img src={MANU} alt="" />
                  <div><ClubVerse>VS</ClubVerse></div>
                  <img src={CHELSE} alt="" />
                  <ClubName>CHELSEA</ClubName>
                  <PredictContainer><motion.span className="secoundry1 predictTag" variants={textMoverVarient}
                  whileHover="hover"><Link to="/predictType">PREDICT</Link></motion.span></PredictContainer>
                </ScoreContainer>

                <ScoreContainer>
                  <ClubName>arsena</ClubName>
                  <img src={ARSE} alt="" />
                  <div><ClubVerse>VS</ClubVerse></div>
                  <img src={MANCITY} alt="" />
                  <ClubName>man city</ClubName>
                  <PredictContainer><motion.span className="secoundry1 predictTag" variants={textMoverVarient}
                  whileHover="hover"><Link to="/predictType">PREDICT</Link></motion.span></PredictContainer>
                </ScoreContainer>

                <ScoreContainer>
                  <ClubName>barca</ClubName>
                  <img src={BARCA} alt="" />
                  <div><ClubVerse>VS</ClubVerse></div>
                  <img src={CHELSE} alt="" />
                  <ClubName>CHELSEA</ClubName>
                  <PredictContainer><motion.span className="secoundry1 predictTag" variants={textMoverVarient}
                  whileHover="hover"><Link to="/predictType">PREDICT</Link></motion.span></PredictContainer>
                </ScoreContainer>

                <ScoreContainer>
                  <ClubName>ajax</ClubName>
                  <img src={AJAX} alt="" />
                  <div><ClubVerse>VS</ClubVerse></div>
                  <img src={LIVEPOOL} alt="" />
                  <ClubName>liverpool</ClubName>
                  <PredictContainer><motion.span className="secoundry1 predictTag" variants={textMoverVarient}
                  whileHover="hover"><Link to="/predictType">PREDICT</Link></motion.span></PredictContainer>
                </ScoreContainer>

                <ScoreContainer>
                  <ClubName>ac milan</ClubName>
                  <img src={ACM} alt="" />
                  <div><ClubVerse>VS</ClubVerse></div>
                  <img src={INTER} alt="" />
                  <ClubName>intermiland</ClubName>
                  <PredictContainer><motion.span className="secoundry1 predictTag" variants={textMoverVarient}
                  whileHover="hover"><Link to="/predictType">PREDICT</Link></motion.span></PredictContainer>
                </ScoreContainer>

                <ScoreContainer>
                  <ClubName>MAN U</ClubName>
                  <img src={MANU} alt="" />
                  <div><ClubVerse>VS</ClubVerse></div>
                  <img src={ARSE} alt="" />
                  <ClubName>arsena</ClubName>
                  <PredictContainer><motion.span className="secoundry1 predictTag" variants={textMoverVarient}
                  whileHover="hover"><Link to="/predictType">PREDICT</Link></motion.span></PredictContainer>
                </ScoreContainer>

                <ScoreContainer>
                  <ClubName>madrid</ClubName>
                  <img src={MADRED} alt="" />
                  <div><ClubVerse>VS</ClubVerse></div>
                  <img src={ACM} alt="" />
                  <ClubName>ac milan</ClubName>
                  <PredictContainer><motion.span className="secoundry1 predictTag" variants={textMoverVarient}
                  whileHover="hover"><Link to="/predictType">PREDICT</Link></motion.span></PredictContainer>
                </ScoreContainer>

                <ScoreContainer>
                  <ClubName>Tortteham</ClubName>
                  <img src={TUTTH} alt="" />
                  <div><ClubVerse>VS</ClubVerse></div>
                  <img src={CHELSE} alt="" />
                  <ClubName>CHELSEA</ClubName>
                  <PredictContainer><motion.span className="secoundry1 predictTag" variants={textMoverVarient}
                  whileHover="hover"><Link to="/predictType">PREDICT</Link></motion.span></PredictContainer>
                </ScoreContainer>
                
                <SearchContainer>
                  <input type="text" name="" placeholder="Search" />
                </SearchContainer>
            </MainContainer>
            
        </>
    )
}

export default PredictContent
