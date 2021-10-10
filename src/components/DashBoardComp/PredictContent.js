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

const textMoverVarient ={
    hover:{scale: 1.2, color: '#010080', originX: 0,
      transition:{ type: 'spring', stiffness: 300}}
}

const PredictContent = () => {
    return (
        <>
            <p className="primary font-bold text-base md:text-lg md:p-6 p-4">Predict Upcoming Matches Score</p>
            <div className="items-center">

                <div className="grid grid-cols-6 gridiv items-center">
                  <div>MAN U</div>
                  <p className="items-end"><img src={MANU} alt="" className="w-9"/></p>
                  <div><span className="primary1 p-1 rounded-md text-white">VS</span></div>
                  <img src={CHELSE} alt="" className="w-9" />
                  <div>CHELSEA</div>
                  <div><motion.span className="secoundry1 text-white p-1 rounded-md" variants={textMoverVarient}
                  whileHover="hover">PREDICT</motion.span></div>
                </div>

                <div className="grid grid-cols-6 gridiv tems-center mt-2">
                  <div>arsena</div>
                  <img src={ARSE} alt="" className="w-9"/>
                  <div><span className="primary1 p-1 rounded-md text-white">VS</span></div>
                  <img src={MANCITY} alt="" className="w-9" />
                  <div>man city</div>
                  <div><motion.span className="secoundry1 text-white p-1 rounded-md" variants={textMoverVarient}
                  whileHover="hover">PREDICT</motion.span></div>
                </div>

                <div className="grid grid-cols-6 gridiv items-center">
                  <div>barca</div>
                  <img src={BARCA} alt="" className="w-9"/>
                  <div><span className="primary1 p-1 rounded-md text-white">VS</span></div>
                  <img src={CHELSE} alt="" className="w-9" />
                  <div>CHELSEA</div>
                  <div><motion.span className="secoundry1 text-white p-1 rounded-md" variants={textMoverVarient}
                  whileHover="hover">PREDICT</motion.span></div>
                </div>

                <div className="grid grid-cols-6 gridiv items-center">
                  <div>ajax</div>
                  <img src={AJAX} alt="" className="w-9"/>
                  <div><span className="primary1 p-1 rounded-md text-white">VS</span></div>
                  <img src={LIVEPOOL} alt="" className="w-9" />
                  <div>liverpool</div>
                  <div><motion.span className="secoundry1 text-white p-1 rounded-md" variants={textMoverVarient}
                  whileHover="hover">PREDICT</motion.span></div>
                </div>
                
                <div className="grid grid-cols-6 gridiv items-center">
                  <div>ac milan</div>
                  <img src={ACM} alt="" className="w-9"/>
                  <div><span className="primary1 p-1 rounded-md text-white">VS</span></div>
                  <img src={INTER} alt="" className="w-9" />
                  <div>intermiland</div>
                  <div><motion.span className="secoundry1 text-white p-1 rounded-md" variants={textMoverVarient}
                  whileHover="hover">PREDICT</motion.span></div>
                </div>

                <div className="grid grid-cols-6 gridiv items-center">
                  <div>MAN U</div>
                  <img src={MANU} alt="" className="w-9"/>
                  <div><span className="primary1 p-1 rounded-md text-white">VS</span></div>
                  <img src={ARSE} alt="" className="w-9" />
                  <div>arsena</div>
                  <div><motion.span className="secoundry1 text-white p-1 rounded-md" variants={textMoverVarient}
                  whileHover="hover">PREDICT</motion.span></div>
                </div>

                <div className="grid grid-cols-6 gridiv items-center">
                  <div>madrid</div>
                  <img src={MADRED} alt="" className="w-9"/>
                  <div><span className="primary1 p-1 rounded-md text-white">VS</span></div>
                  <img src={ACM} alt="" className="w-9" />
                  <div>ac milan</div>
                  <div><motion.span className="secoundry1 text-white p-1 rounded-md" variants={textMoverVarient}
                  whileHover="hover">PREDICT</motion.span></div>
                </div>

                <div className="grid grid-cols-6 gridiv items-center">
                  <div>Tortteham</div>
                  <img src={TUTTH} alt="" className="w-9"/>
                  <div><span className="primary1 p-1 rounded-md text-white">VS</span></div>
                  <img src={CHELSE} alt="" className="w-9" />
                  <div>CHELSEA</div>
                  <div><motion.span className="secoundry1 text-white p-1 rounded-md" variants={textMoverVarient}
                  whileHover="hover">PREDICT</motion.span></div>
                </div>
                <div className="flex justify-end mt-2">
                  <input type="text" name="" placeholder="Search" className="rounded-2xl border-4 text-center" />
                </div>
            </div>
            
        </>
    )
}

export default PredictContent
