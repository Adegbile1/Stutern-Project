import React from 'react'
import Menu from './Menu'
import Applauncher from './Applauncher'
import Profilepics from './Profilepics'
import '../styles/appiconstyle.css'

const Header = () => {
  return (
    <div className='navigation'>
        <Menu />
        <Applauncher />
        <Profilepics />
    </div>
  )
}

export default Header