import React from 'react'
import appicon from '../img/applauncher.png'
import '../styles/appiconstyle.css'

function Applauncher() {
    return (
        <div className='appicon'>
            <img src={appicon} alt='appicon' style={{height: "60px", 
      borderRadius: "10px"}}></img>
        </div>
    )
}

export default Applauncher