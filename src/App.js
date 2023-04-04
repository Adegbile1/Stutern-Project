
import './App.css';
import React from 'react'
import Header from './components/Header'
import Searchsection from './components/Searchsection'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='headerstyle'>
      <Header />
      <Searchsection />
      <Footer />
    </div>
  )
}

export default App

