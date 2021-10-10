import React from 'react'
import MANU from '../../images/manu.png'
import CHELSE from '../../images/chelse.png'
import { motion } from 'framer-motion'
import './DashBoardCss.css'
import { Link } from 'react-router-dom'

const textMoverVarient ={
    hover:{scale: 1.2, color: '#010080', originX: 0,
      transition:{ type: 'spring', stiffness: 300}}
}

const RegularPrediction = () => {
    return (
        <div className="primary">
            <h1 className="text-base font-bold py-2">Regular Prediction (N100)</h1>
            <div className="px-48 text-lg">
                <div className="flex flex-row flex-nowrap items-center justify-center mb-2">
                  <div>MAN U</div>
                  <img src={MANU} alt="" className="w-9"/>
                  <div><span className="secoundry1 p-1 rounded-md text-white text-sm mx-2">VS</span></div>
                  <img src={CHELSE} alt="" className="w-9" />
                  <div>CHELSEA</div>
                </div>
                <p>Predict the score with N100 <motion.span className="secoundry1 text-white p-1 rounded-md" variants={textMoverVarient} whileHover="hover">PREDICT</motion.span></p>
            </div>

            <table className="table w-full mt-3 border-collapse">
                <tr>
                    <td className="bg-gray-300">1.</td>
                    <td>Emeka</td>
                    <td>PREDICTED</td>
                    <td>MAN U</td>
                    <td className="text-white primary1">2</td>
                    <td>CHELSEA</td>
                    <td className="text-white primary1">3</td>
                </tr>
                <tr>
                    <td className="bg-gray-300">2.</td>
                    <td>Sogy</td>
                    <td>PREDICTED</td>
                    <td>MAN U</td>
                    <td className="text-white primary1">0</td>
                    <td>CHELSEA</td>
                    <td className="text-white primary1">2</td>
                </tr>
                <tr>
                    <td className="bg-gray-300">3.</td>
                    <td>Colins</td>
                    <td>PREDICTED</td>
                    <td>MAN U</td>
                    <td className="text-white primary1">1</td>
                    <td>CHELSEA</td>
                    <td className="text-white primary1">3</td>
                </tr>
                <tr>
                    <td className="bg-gray-300">4.</td>
                    <td>Ebugs</td>
                    <td>PREDICTED</td>
                    <td>MAN U</td>
                    <td className="text-white primary1">1</td>
                    <td>CHELSEA</td>
                    <td className="text-white primary1">1</td>
                </tr>
                <tr>
                    <td className="bg-gray-300">5.</td>
                    <td>Frank</td>
                    <td>PREDICTED</td>
                    <td>MAN U</td>
                    <td className="text-white primary1">2</td>
                    <td>CHELSEA</td>
                    <td className="text-white primary1">2</td>
                </tr>
                <tr>
                    <td className="bg-gray-300">6.</td>
                    <td>Sunday</td>
                    <td>PREDICTED</td>
                    <td>MAN U</td>
                    <td className="text-white primary1">2</td>
                    <td>CHELSEA</td>
                    <td className="text-white primary1">3</td>
                </tr>
                <tr>
                    <td className="bg-gray-300">7.</td>
                    <td>Emeka</td>
                    <td>PREDICTED</td>
                    <td>MAN U</td>
                    <td className="text-white primary1">1</td>
                    <td>CHELSEA</td>
                    <td className="text-white primary1">2</td>
                </tr>
                <tr>
                    <td className="bg-gray-300">8.</td>
                    <td>Fabulous</td>
                    <td>PREDICTED</td>
                    <td>MAN U</td>
                    <td className="text-white primary1">3</td>
                    <td>CHELSEA</td>
                    <td className="text-white primary1">3</td>
                </tr>
                <tr>
                    <td className="bg-gray-300">10.</td>
                    <td>Emeka</td>
                    <td>PREDICTED</td>
                    <td>MAN U</td>
                    <td className="text-white primary1">1</td>
                    <td>CHELSEA</td>
                    <td className="text-white primary1">0</td>
                </tr>
                <tr>
                    <td className="bg-gray-300">1000.</td>
                    <td>Emeka</td>
                    <td>PREDICTED</td>
                    <td>MAN U</td>
                    <td className="text-white primary1">2</td>
                    <td>CHELSEA</td>
                    <td className="text-white primary1">3</td>
                </tr>
            </table>
            <div className="flex justify-end mt-2">
                <Link to="/dashboard"><p className="text-center secoundry font-bold mr-72">Next page</p></Link>
                <input type="text" name="" placeholder="Search" className="rounded-2xl border-4 text-center" />
            </div>
            
        </div>
    )
}

export default RegularPrediction
