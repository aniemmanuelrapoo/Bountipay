import React from 'react'
import MANU from '../../images/manu.png'
import CHELSE from '../../images/chelse.png'
import ARSE  from '../../images/arsena.png'
import MANCITY from '../../images/mancity.png'
import BARCA from '../../images/barca.png'
import LIVEPOOL from '../../images/liverpool.png'
import ACM from '../../images/acmiland.png'
import MADRED from '../../images/realmad.png'
import styled from 'styled-components'
import tw from 'twin.macro'

const Header = styled.p`
  ${tw`text-lg font-bold py-4`}
  color: #010080;
`
const ScoreContainer = styled.div`
${tw`flex flex-row flex-nowrap items-center justify-center mb-2`}
img{
    ${tw`w-9`}
  }
`
const ClubName = styled.div`${tw`w-16`}`
const ClubScore = styled.span`
  ${tw`px-2 py-1 rounded-sm text-white text-lg mx-2`}
  background-color: #f58634;
`
const ClubDot = styled.span`
  ${tw`text-xl font-extrabold`}
`


const LiveScore = () => {
    return (
        <div>
            <Header>Live Scores</Header>
                <ScoreContainer>
                  <ClubName>MAN U</ClubName>
                  <img src={MANU} alt="" />
                  <div><ClubScore>2</ClubScore>  <ClubDot>:</ClubDot> </div>
                  <div><ClubScore>3</ClubScore></div>
                  <img src={CHELSE} alt="" />
                  <ClubName>CHELSEA</ClubName>
                </ScoreContainer>

                <ScoreContainer>
                  <ClubName>Arsenal</ClubName>
                  <img src={ARSE} alt="" />
                  <div><ClubScore>2</ClubScore>  <ClubDot>:</ClubDot>  </div>
                  <div><ClubScore>3</ClubScore></div>
                  <img src={LIVEPOOL} alt="" />
                  <ClubName>Liverpool</ClubName>
                </ScoreContainer>

                <ScoreContainer>
                  <ClubName>Man City</ClubName>
                  <img src={MANCITY} alt=""/>
                  <div><ClubScore>2</ClubScore>  <ClubDot>:</ClubDot>  </div>
                  <div><ClubScore>3</ClubScore></div>
                  <img src={ACM} alt=""  />
                  <ClubName>AC Milan</ClubName>
                </ScoreContainer>

                <ScoreContainer>
                  <ClubName>Barcelona</ClubName>
                  <img src={BARCA} alt="" />
                  <div><ClubScore>2</ClubScore>  <ClubDot>:</ClubDot>  </div>
                  <div><ClubScore>3</ClubScore></div>
                  <img src={MADRED} alt="" />
                  <ClubName>Madrid</ClubName>
                </ScoreContainer>

                <ScoreContainer>
                  <ClubName>CHELSE</ClubName>
                  <img src={CHELSE} alt="" />
                  <div><ClubScore>2</ClubScore>  <ClubDot>:</ClubDot>  </div>
                  <div><ClubScore>3</ClubScore></div>
                  <img src={ARSE} alt="" />
                  <ClubName>Arsenal</ClubName>
                </ScoreContainer>
        </div>
    )
}

export default LiveScore
