import React from 'react'
import googlelogo from '../img/googlelogo.png'
import lens from '../img/imagelens.jpg'

const Searchsection = () => {
  return (
    <div>
      <img src= {googlelogo} alt='google'></img>
      <div>
        <form>
          <input type='text' placeholder='googleicon'></input>
          <button type='reset'>
          <img src= {lens} alt='googlelens' style={{height: "60px", borderRadius: "10px"}}></img>
          <img src= {lens} alt='googlelens' style={{height: "60px", borderRadius: "10px"}}></img>
          </button>
        </form>
      </div>
    </div>
    
  )
}

export default Searchsection