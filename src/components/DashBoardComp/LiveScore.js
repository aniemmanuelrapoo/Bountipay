import React from 'react'
import MANU from '../../images/manu.png'
import CHELSE from '../../images/chelse.png'
import ARSE  from '../../images/arsena.png'
import MANCITY from '../../images/mancity.png'
import BARCA from '../../images/barca.png'
import LIVEPOOL from '../../images/liverpool.png'
import ACM from '../../images/acmiland.png'
import MADRED from '../../images/realmad.png'



const LiveScore = () => {
    return (
        <div>
            <p className="primary text-lg font-bold py-4">Live Scores</p>
            <div>
                <div className="flex flex-row flex-nowrap items-center justify-center mb-2">
                  <div>MAN U</div>
                  <img src={MANU} alt="" className="w-9"/>
                  <div><span className="secoundry1 px-2 py-1 rounded-sm text-white text-lg mx-2">2</span>  <span className="text-xl font-extrabold">:</span>  </div>
                  <div><span className="secoundry1 px-2 py-1 rounded-sm text-white text-lg mx-2">3</span>  </div>
                  <img src={CHELSE} alt="" className="w-9" />
                  <div>CHELSEA</div>
                </div>

                <div className="flex flex-row flex-nowrap items-center justify-center mb-2">
                  <div>Arsenal</div>
                  <img src={ARSE} alt="" className="w-9"/>
                  <div><span className="secoundry1 px-2 py-1 rounded-sm text-white text-lg mx-2">2</span>  <span className="text-xl font-extrabold">:</span>  </div>
                  <div><span className="secoundry1 px-2 py-1 rounded-sm text-white text-lg mx-2">3</span>  </div>
                  <img src={LIVEPOOL} alt="" className="w-9" />
                  <div>Liverpool</div>
                </div>

                <div className="flex flex-row flex-nowrap items-center justify-center mb-2">
                  <div>Man City</div>
                  <img src={MANCITY} alt="" className="w-9"/>
                  <div><span className="secoundry1 px-2 py-1 rounded-sm text-white text-lg mx-2">2</span>  <span className="text-xl font-extrabold">:</span>  </div>
                  <div><span className="secoundry1 px-2 py-1 rounded-sm text-white text-lg mx-2">3</span>  </div>
                  <img src={ACM} alt="" className="w-9" />
                  <div>AC Milan</div>
                </div>

                <div className="flex flex-row flex-nowrap items-center justify-center mb-2">
                  <div>Barca</div>
                  <img src={BARCA} alt="" className="w-9"/>
                  <div><span className="secoundry1 px-2 py-1 rounded-sm text-white text-lg mx-2">2</span>  <span className="text-xl font-extrabold">:</span>  </div>
                  <div><span className="secoundry1 px-2 py-1 rounded-sm text-white text-lg mx-2">3</span>  </div>
                  <img src={MADRED} alt="" className="w-9" />
                  <div>Madrid</div>
                </div>

                <div className="flex flex-row flex-nowrap items-center justify-center mb-2">
                  <div>CHELSE</div>
                  <img src={CHELSE} alt="" className="w-9"/>
                  <div><span className="secoundry1 px-2 py-1 rounded-sm text-white text-lg mx-2">2</span>  <span className="text-xl font-extrabold">:</span>  </div>
                  <div><span className="secoundry1 px-2 py-1 rounded-sm text-white text-lg mx-2">3</span>  </div>
                  <img src={ARSE} alt="" className="w-9" />
                  <div>Arsenal</div>
                </div>
            </div>
        </div>
    )
}

export default LiveScore
