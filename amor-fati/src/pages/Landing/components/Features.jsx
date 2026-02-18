import React from 'react'

const Features = () => {
  return (
    <section id="features" className="py-32 bg-linear-to-b from-void via-[#150a0a] to-void relative overflow-hidden">
   
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-linear-to-b from-gold/0 via-gold/50 to-gold/0"></div>

    <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
            <h2 data-test='digital-alter' className="font-display text-4xl md:text-5xl text-white mb-2">The Digital Altar</h2>
            <p className="font-script text-3xl text-rose/60">Tools for the internal journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="reveal-view group relative h-96 bg-[#1a0f0f] border border-white/10 hover:border-gold/40 transition-all duration-500 rounded-sm overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&amp;w=800&amp;auto=format&amp;fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" alt="Planetary" />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent"></div>
                
                <div className="absolute inset-0 p-8 flex flex-col items-center text-center justify-end pb-16 z-10">
                    <div className="w-16 h-16 rounded-full bg-void/50 backdrop-blur-md border border-white/10 flex items-center justify-center mb-4 group-hover:border-gold/50 transition-colors">
                        <i className="ph-thin ph-planet text-3xl text-gold"></i>
                    </div>
                    <h3 className="font-display text-2xl text-white mb-2">Planetary Transits</h3>
                    <p className="font-sans text-xs text-rose-100/70 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                        Real-time astrological data superimposed on your readings. Understand the 'Why'.
                    </p>
                </div>
            </div>

 
            <div className="reveal-view group relative h-96 bg-[#1a0f0f] border border-white/10 hover:border-gold/40 transition-all duration-500 rounded-sm overflow-hidden shadow-2xl mt-0 md:-mt-12">
                <img src="https://images.unsplash.com/photo-1483546363825-7ebf25fb7513?fm=jpg&amp;q=60&amp;w=3000&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8am91cm5hbHxlbnwwfHwwfHx8MA%3D%3D" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" alt="Journal" />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent"></div>

                <div className="absolute inset-0 p-8 flex flex-col items-center text-center justify-end pb-16 z-10">
                     <div className="w-16 h-16 rounded-full bg-void/50 backdrop-blur-md border border-white/10 flex items-center justify-center mb-4 group-hover:border-gold/50 transition-colors">
                        <i className="ph-thin ph-pen-nib text-3xl text-gold"></i>
                    </div>
                    <h3 className="font-display text-2xl text-white mb-2">Shadow Work Journal</h3>
                    <p className="font-sans text-xs text-rose-100/70 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                        Prompts derived from Jungian psychology to help you integrate your subconscious.
                    </p>
                </div>
            </div>

          
            <div className="reveal-view group relative h-96 bg-[#1a0f0f] border border-white/10 hover:border-gold/40 transition-all duration-500 rounded-sm overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&amp;w=800&amp;auto=format&amp;fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" alt="Galaxy" />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent"></div>

                <div className="inset-0 p-8 flex flex-col items-center text-center justify-end pb-16 relative z-10">
                     <div className="w-16 h-16 rounded-full bg-void/50 backdrop-blur-md border border-white/10 flex items-center justify-center mb-4 group-hover:border-gold/50 transition-colors">
                        <i className="ph-thin ph-sparkle text-3xl text-gold"></i>
                    </div>
                    <h3 className="font-display text-2xl text-white mb-2">AI Interpretations</h3>
                    <p className="font-sans text-xs text-rose-100/70 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                        Our oracle engine synthesizes card meanings with your custom spread context.
                    </p>
                </div>
            </div>

        </div>
    </div>
</section>
  )
}

export default Features