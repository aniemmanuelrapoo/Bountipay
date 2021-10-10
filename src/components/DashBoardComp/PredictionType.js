import React from 'react'
import { Link } from 'react-router-dom'

const PredictionType = () => {
    return (
        <div className="primary">
            <p className="font-bold text-3xl py-5">CHOOSE PREDICTION TYPE</p>
            <ul className="list-disc text-left text-2xl">
                <Link to="/dashboard"><li className="mb-4 tracking-widest"><span className="text-2xl font-bold">REGULAR PREDICTION (N100)</span> <br /><span className="text-base text-black">Predict score with N100</span></li></Link>
                <Link to="/dashboard"><li className="mb-4 tracking-widest"><span className="text-2xl font-bold">STANDARD PREDICTION (N1000)</span><br /><span className="text-base text-black">Predict score with N1000</span></li></Link>
                <Link to="/dashboard"><li className="mb-4 tracking-widest"><span className="text-2xl font-bold">VIP PREDICTION (N10,000)</span><br /><span className="text-base text-black">Predict score with N10,000</span></li></Link>
                <Link to="/dashboard"><li className="mb-4 tracking-widest"><span className="text-2xl font-bold">VVIP PREDICTION (N100,000)</span><br /><span className="text-base text-black">Predict score with N100,000</span></li></Link>
                <Link to="/dashboard"><li className="tracking-widest"><span className="text-2xl font-bold">CHIEF PREDICTION (N1,000,000)</span><br /><span className="text-base text-black">Predict score with N1,000,000</span></li></Link>
            </ul>
        </div>
    )
}

export default PredictionType
