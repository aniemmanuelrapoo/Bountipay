import React from 'react'
import { Link } from 'react-router-dom'

const FAQ = () => {
    return (
        <div className="primary text-2xl p-12">
            <p className="font-bold pb-11">FAQ</p>
            <ul className="list-disc text-left">
                <Link to="/dashboard"><li className="mb-4">HOW DO I START PREDICTING</li></Link>
                <Link to="/dashboard"><li className="mb-4">WHEN WILL MY WITHDRAWER REFLECT</li></Link>
                <Link to="/dashboard"><li className="mb-4">CAN I PREDIT MORE THAN ONE TIMES</li></Link>
            </ul>
        </div>
    )
}

export default FAQ
