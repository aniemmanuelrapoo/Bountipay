import React from 'react'
import MANU from '../../images/manu.png'
import CHELSE from '../../images/chelse.png'
import { motion } from 'framer-motion'
import './DashBoardCss.css'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.div`
    color:#010080;
`
const Header = styled.h1`
    ${tw`text-base font-bold py-2`}
`
const ContentContainer = styled.div`
    ${tw`lg:px-48 md:text-lg text-base`}
`
const PredictContainer = styled.div`
    ${tw`flex flex-row flex-nowrap items-center justify-center mb-2`}
    img{
        ${tw`w-9`}
    }
`
const Verses = styled.span`
    ${tw`rounded-md text-white text-sm mx-2`}
    background-color:#f58634;
`
const TableTag = styled.table`
    ${tw`w-full mt-3 border-collapse`}
    tr:nth-child(even){background-color: #f2f2f2;}
    td{
        border: 1px solid #ddd;
        ${tw`py-1 px-0.5`}
    }
    tr:hover {background-color: #ddd;}
`
const ItemNumber = styled.td`
    ${tw`bg-gray-300`}
`
const ItemScore = styled.td`
    ${tw`text-white`}
    background-color:#010080;
`
const FooterContainer = styled.div`
    ${tw`flex justify-end mt-2`}
    input{
        ${tw`rounded-2xl border-4 text-center`}
    }
`
const NextPage = styled.p`
    ${tw`text-center font-bold md:mr-48 mr-12`}
    color:#f58634;
`

const textMoverVarient ={
    hover:{scale: 1.2, color: '#010080', originX: 0,
      transition:{ type: 'spring', stiffness: 300}}
}

const RegularPrediction = () => {
    return (
        <Container>
            <Header>Regular Prediction (N100)</Header>
            <ContentContainer>
                <PredictContainer>
                  <div>MAN U</div>
                  <img src={MANU} alt="" />
                  <div><Verses>VS</Verses></div>
                  <img src={CHELSE} alt="" />
                  <div>CHELSEA</div>
                </PredictContainer>
                <p>Predict the score with N100 <motion.span className="secoundry1 predictTag" variants={textMoverVarient} whileHover="hover">PREDICT</motion.span></p>
            </ContentContainer>

            <TableTag>
                <tr>
                    <ItemNumber>1.</ItemNumber>
                    <td>Emeka</td>
                    <td>PREDICTED</td>
                    <td>MAN U</td>
                    <ItemScore>2</ItemScore>
                    <td>CHELSEA</td>
                    <ItemScore>3</ItemScore>
                </tr>
                <tr>
                    <ItemNumber>2.</ItemNumber>
                    <td>Sogy</td>
                    <td>PREDICTED</td>
                    <td>MAN U</td>
                    <ItemScore>0</ItemScore>
                    <td>CHELSEA</td>
                    <ItemScore>2</ItemScore>
                </tr>
                <tr>
                    <ItemNumber>3.</ItemNumber>
                    <td>Colins</td>
                    <td>PREDICTED</td>
                    <td>MAN U</td>
                    <ItemScore>1</ItemScore>
                    <td>CHELSEA</td>
                    <ItemScore>3</ItemScore>
                </tr>
                <tr>
                    <ItemNumber>4.</ItemNumber>
                    <td>Ebugs</td>
                    <td>PREDICTED</td>
                    <td>MAN U</td>
                    <ItemScore>1</ItemScore>
                    <td>CHELSEA</td>
                    <ItemScore>1</ItemScore>
                </tr>
                <tr>
                    <ItemNumber>5.</ItemNumber>
                    <td>Frank</td>
                    <td>PREDICTED</td>
                    <td>MAN U</td>
                    <ItemScore>2</ItemScore>
                    <td>CHELSEA</td>
                    <ItemScore>2</ItemScore>
                </tr>
                <tr>
                    <ItemNumber>6.</ItemNumber>
                    <td>Sunday</td>
                    <td>PREDICTED</td>
                    <td>MAN U</td>
                    <ItemScore>2</ItemScore>
                    <td>CHELSEA</td>
                    <ItemScore>3</ItemScore>
                </tr>
                <tr>
                    <ItemNumber>7.</ItemNumber>
                    <td>Emeka</td>
                    <td>PREDICTED</td>
                    <td>MAN U</td>
                    <ItemScore>1</ItemScore>
                    <td>CHELSEA</td>
                    <ItemScore>2</ItemScore>
                </tr>
                <tr>
                    <ItemNumber>8.</ItemNumber>
                    <td>Fabulous</td>
                    <td>PREDICTED</td>
                    <td>MAN U</td>
                    <ItemScore>3</ItemScore>
                    <td>CHELSEA</td>
                    <ItemScore>3</ItemScore>
                </tr>
                <tr>
                    <ItemNumber>10.</ItemNumber>
                    <td>Emeka</td>
                    <td>PREDICTED</td>
                    <td>MAN U</td>
                    <ItemScore>1</ItemScore>
                    <td>CHELSEA</td>
                    <ItemScore>0</ItemScore>
                </tr>
                <tr>
                    <ItemNumber>1000.</ItemNumber>
                    <td>Emeka</td>
                    <td>PREDICTED</td>
                    <td>MAN U</td>
                    <ItemScore>2</ItemScore>
                    <td>CHELSEA</td>
                    <ItemScore>3</ItemScore>
                </tr>
            </TableTag>
            <FooterContainer>
                <Link to="/regularPredict"><NextPage>Next page<svg className="sidesvg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg></NextPage></Link>
                <input type="text" name="" placeholder="Search" />
            </FooterContainer>
            
        </Container>
    )
}

export default RegularPrediction
