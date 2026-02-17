import React from 'react'

const Pricing = () => {
  return (
    <section id="journal" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
         
            <div className="bg-[#121212] border border-white/10 hover:border-gold/30 hover:bg-[#1a1a1a] p-8 flex flex-col items-center text-center transition-all duration-300 reveal-view shadow-lg">
                <span className="font-display text-xl text-rose/60 mb-4">The Initiate</span>
                <span className="font-sans text-3xl text-white mb-8">Free</span>
                <ul className="font-sans text-[10px] uppercase tracking-widest text-gray-400 space-y-4 mb-10 flex-1">
                    <li>3 Card Spreads</li>
                    <li>Moon Phases</li>
                    <li>Basic Journal</li>
                </ul>
                <button className="w-full py-3 border border-white/20 text-white font-sans text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-colors">Begin</button>
            </div>

            <div className="bg-[#2a0a12] border border-crimson/60 p-10 flex flex-col items-center text-center transform scale-105 shadow-[0_0_50px_rgba(107,24,30,0.3)] relative reveal-view">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold px-4 py-1 shadow-lg">
                    <span className="text-black font-sans text-[9px] uppercase font-bold tracking-widest">Most Beloved</span>
                </div>
                <span className="font-display text-2xl text-gold mb-4">The Mystic</span>
                <span className="font-sans text-4xl text-white mb-8">$12</span>
                <ul className="font-sans text-[10px] uppercase tracking-widest text-gray-300 space-y-4 mb-10 flex-1">
                    <li className="text-white"><i className="ph-fill ph-star text-gold mr-1"></i> Unlimited Spreads</li>
                    <li>Birth Chart Insights</li>
                    <li>AI Synthesis</li>
                    <li>Past Life Regression</li>
                </ul>
                <button className="w-full py-4 bg-gold text-black font-sans text-[10px] uppercase tracking-widest hover:bg-white transition-colors">Join Circle</button>
            </div>

           
            <div className="bg-[#121212] border border-white/10 hover:border-gold/30 hover:bg-[#1a1a1a] p-8 flex flex-col items-center text-center transition-all duration-300 reveal-view shadow-lg">
                <span className="font-display text-xl text-rose/60 mb-4">The High Priestess</span>
                <span className="font-sans text-3xl text-white mb-8">$29</span>
                <ul className="font-sans text-[10px] uppercase tracking-widest text-gray-400 space-y-4 mb-10 flex-1">
                    <li>1-on-1 Readings</li>
                    <li>Physical Deck</li>
                    <li>Secret Community</li>
                </ul>
                <button className="w-full py-3 border border-white/20 text-white font-sans text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-colors">Ascend</button>
            </div>
        </div>
    </section>
  )
}

export default Pricing