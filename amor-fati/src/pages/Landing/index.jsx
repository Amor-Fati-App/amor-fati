import React from 'react'
import Header from '../../components/Header'
import Hero from './components/Hero'
import Marque from './components/Marque'

const Landing = () => {
  return (
      <div className='selection:bg-crimson selection:text-white page'>
          <div className="grain-overlay"></div>
          <div className="cursor-dot hidden md:block"></div>
          <div className="cursor-outline hidden md:block"></div>
          <Header />
          <Hero />
          <Marque />
    </div>
  )
}

export default Landing