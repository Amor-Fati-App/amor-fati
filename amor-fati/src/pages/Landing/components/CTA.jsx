import React from 'react'

const CTA = () => {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
  
    <div className="absolute inset-0 bg-void">
        <img src="https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?q=80&amp;w=2574&amp;auto=format&amp;fit=crop" className="w-full h-full object-cover opacity-20" alt="Galaxy" />
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black"></div>
    </div>

    <div className="relative z-10 text-center px-6">
        <h2 className="font-display text-5xl md:text-8xl text-white mb-6 reveal-view">
            Your <span className="font-script text-gold">fate</span> is waiting.
        </h2>
        <p className="font-sans text-white/50 tracking-[0.2em] mb-12 uppercase text-xs reveal-view">
            Join 10,000+ souls charting their course through the stars.
        </p>
        
        <div className="reveal-view">
            <a href="#" className="relative inline-flex group items-center justify-center px-12 py-6 overflow-hidden font-display text-xl text-black bg-gold rounded-full transition-all duration-300  hover:bg-white" rel="nofollow">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full  opacity-10"></span>
                <span className="relative flex items-center gap-2">
                    Get Started <i className="ph-bold ph-arrow-right"></i>
                </span>
            </a>
        </div>
    </div>
</section>
  )
}

export default CTA