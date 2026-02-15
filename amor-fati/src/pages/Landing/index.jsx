import React from 'react'
import Header from '../../components/Header'

const Landing = () => {
  return (
      <div className='selection:bg-crimson selection:text-white'>
          <div className="grain-overlay"></div>
          <div className="cursor-dot hidden md:block"></div>
          <div className="cursor-outline hidden md:block"></div>
          <Header />
    </div>
  )
}

export default Landing