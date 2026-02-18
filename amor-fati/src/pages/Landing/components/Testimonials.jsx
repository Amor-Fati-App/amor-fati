import React from 'react'

const Testimonials = () => {
  return (
    <section className="py-24 bg-oxblood/5 relative overflow-hidden">
   
    <div className="absolute top-0 right-0 w-96 h-96 bg-crimson/5 rounded-full blur-3xl pointer-events-none"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-view">
            <div>
                <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold font-bold mb-2 block">Testimonials</span>
                <h2 className="font-display text-4xl md:text-5xl text-white">Echoes from the <span className="italic text-rose/60">Void</span></h2>
            </div>
            <div className="hidden md:flex gap-4">
                <button className="w-12 h-12 rounded-full border border-white/10 hover:border-gold/50 flex items-center justify-center text-white transition-colors"><i className="ph-light ph-arrow-left"></i></button>
                <button className="w-12 h-12 rounded-full border border-white/10 hover:border-gold/50 flex items-center justify-center text-white transition-colors"><i className="ph-light ph-arrow-right"></i></button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         
            <div className="reveal-view bg-[#0a0505] p-8 border border-white/10 hover:border-crimson/40 transition-colors duration-500 group">
                <div className="mb-6 text-gold/60 text-xs tracking-widest uppercase flex items-center gap-2">
                    <i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i>
                </div>
                <p className="font-display text-xl text-rose-100/80 leading-relaxed italic mb-8">
                    "I used to fear the Death card. Amor Fati taught me it was just a shedding of skin. The journaling prompts are utterly transformative."
                </p>
                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=200&amp;auto=format&amp;fit=crop" className="w-10 h-10 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" alt="User Avatar" />
                    <div>
                        <span className="block font-sans text-xs text-white uppercase tracking-widest">Elara V.</span>
                        <span className="block font-sans text-[10px] text-white/40">Scorpio Sun</span>
                    </div>
                </div>
            </div>

         
            <div className="reveal-view bg-[#0a0505] p-8 border border-white/10 hover:border-crimson/40 transition-colors duration-500 group mt-0 md:mt-12">
                <div className="mb-6 text-gold/60 text-xs tracking-widest uppercase flex items-center gap-2">
                    <i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i>
                </div>
                <p className="font-display text-xl text-rose-100/80 leading-relaxed italic mb-8">
                    "Unlike other apps that feel like games, this feels like a sacred ritual. The AI synthesis of my birth chart with the daily draw is scarily accurate."
                </p>
                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                    <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=200&amp;auto=format&amp;fit=crop" className="w-10 h-10 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" alt="User Avatar" />
                    <div>
                        <span className="block font-sans text-xs text-white uppercase tracking-widest">Marcus T.</span>
                        <span className="block font-sans text-[10px] text-white/40">Capricorn Rising</span>
                    </div>
                </div>
            </div>

        
            <div className="reveal-view bg-[#0a0505] p-8 border border-white/10 hover:border-crimson/40 transition-colors duration-500 group">
                <div className="mb-6 text-gold/60 text-xs tracking-widest uppercase flex items-center gap-2">
                    <i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i>
                </div>
                <p className="font-display text-xl text-rose-100/80 leading-relaxed italic mb-8">
                    "A digital sanctuary. The design is breathtaking, but the content is where the magic lies. I've never felt more connected to my intuition."
                </p>
                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop" className="w-10 h-10 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" alt="User Avatar" />
                    <div>
                        <span className="block font-sans text-xs text-white uppercase tracking-widest">Sarah J.</span>
                        <span className="block font-sans text-[10px] text-white/40">Pisces Moon</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Testimonials