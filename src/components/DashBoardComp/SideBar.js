import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import './DashBoardCss.css'

const textMoverVarient ={
    hover:{scale: 1.3, color: '#f58634', originX: 0,
      transition:{ type: 'spring', stiffness: 400}}
}

const SideBar = () => {
    return (
        <>
            <div>
              <ul>
                <li><Link to="/dashboard"><motion.p className="sidebar" variants={textMoverVarient}
                  whileHover="hover"><svg className="sidesvg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Predict</span></motion.p></Link></li>

                <li><Link to="/dashboard"><motion.p className="sidebar" variants={textMoverVarient}
                  whileHover="hover"><svg className="sidesvg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg><span>Wallet</span></motion.p></Link></li>

                <li><Link to="/dashboard"><motion.p className="sidebar" variants={textMoverVarient}
                  whileHover="hover"><svg className="sidesvg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg><span>Refer and earn</span> </motion.p></Link></li>

                <li><Link to="/dashboard"><motion.p className="sidebar" variants={textMoverVarient}
                  whileHover="hover"><svg className="sidesvg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span>Live scores</span> </motion.p></Link></li>
                </ul>
            </div>
            
            <div>
              <ul>
                <li><Link to="/dashboard"><motion.p className="sidebar" variants={textMoverVarient}
                  whileHover="hover"><svg className="sidesvg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span>Settings</span></motion.p></Link></li>
                <li><Link to="/dashboard"><motion.p className="sidebar" variants={textMoverVarient}
                  whileHover="hover"><svg className="sidesvg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span>Help</span></motion.p></Link></li>
                <li><Link to="/dashboard"><motion.p className="sidebar" variants={textMoverVarient}
                  whileHover="hover"><svg className="sidesvg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg><span>FAQ</span></motion.p></Link></li>
                  </ul>
            </div>
        </>
    )
}

export default SideBar
