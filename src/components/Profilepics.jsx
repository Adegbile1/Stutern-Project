import React from 'react'
import Ade from '../img/araire.jpg'
import '../styles/profilepics.css'
const Profilepics = () => {
  return (
    <div className='Profilepictures'>
        <img src= {Ade} alt='Araire' style={{height: "60px", 
      borderRadius: "10px"}}></img>
    </div>
  )
}

export default Profilepics