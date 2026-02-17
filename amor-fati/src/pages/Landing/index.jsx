import React, {useEffect} from 'react'
import Header from '../../components/Header'
import Hero from './components/Hero'
import Marque from './components/Marque'
import Oracle from './components/Oracle'
import Features from './components/Features'
import Quote from './components/Quote'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Blog from './components/Blog'
import CTA from './components/CTA'
import Footer from './components/Footer'

const Landing = () => {

  useEffect(() => {
    const script = document.createElement('script')
    script.id = 'landing-js'
    script.src = 'js/landing.js'
    document.body.appendChild(script)

    return () => {
      document.getElementById('landing-js').remove()
    }
   
  }, [])
  
  return (
      <div className='selection:bg-crimson selection:text-white page'>
          <div className="grain-overlay"></div>
          <div className="cursor-dot hidden md:block"></div>
          <div className="cursor-outline hidden md:block"></div>
          <Header />
          <Hero />
          <Marque />
          <Oracle />
          <Features />
          <Quote />
          <Testimonials />
          <Pricing />
          <Blog />
          <CTA />
          <Footer />
    </div>
  )
}

export default Landing