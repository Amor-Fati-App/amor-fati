import React from "react";

const Oracle = () => {
  return (
    <section id="tarot" className="py-32 px-6 relative max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative h-150 w-full flex items-center justify-center perspective-[1000px] group animate-float">
          <div className="absolute inset-0 bg-crimson/20 blur-[100px] rounded-full mix-blend-screen"></div>

          <div className="absolute w-64 h-96 card-surface rounded-xl transform -rotate-6 translate-x-[-60px] hover:-translate-x-[-80px] transition-all duration-500 overflow-hidden z-0">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
            <img
              src="https://images.unsplash.com/photo-1600429991827-5224817554f8?fm=jpg&amp;q=60&amp;w=3000&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFyb3QlMjBjYXJkc3xlbnwwfHwwfHx8MA%3D%3D"
              className="w-full h-full object-cover opacity-80"
              alt="tarot card back"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <i className="ph-thin ph-moom-stars text-4xl text-white/50"></i>
            </div>
          </div>

          <div className="absolute w-64 h-96 bg-[#1f0b0b] border border-gold/40 rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] z-10 transform rotate-3 hover:scale-105 transition-all duration-500">
            <div className="absolute inset-2 border border-gold/20 rounded-lg flex flex-col items-center justify-between p-6 bg-gradient-to-b from-[#2a1012] to-[#1a0505]">
              <div className="w-full flex justify-between text-gold font-display text-xl">
                <span>VI</span>
                <i className="ph-fill ph-heart"></i>
              </div>
              <div className="text-center relative z-10">
                <div className="w-20 h-20 rounded-full border border-gold/30 flex items-center justify-center mx-auto mb-4 bg-black/30 backdrop-blur-sm">
                  <i className="ph-light ph-users-three text-2xl text-gold"></i>
                </div>
                <h3 className="font-display text-4xl text-white text-center drop-shadow-md">
                  The
                  <br />
                  Lovers
                </h3>
                <p className="font-script text-rose/80 text-2xl mt-2">
                  Duality
                </p>
              </div>
              <div className="w-full flex justify-between text-gold font-display text-xl transform rotate-180">
                <span>VI</span>
                <i className="ph-fill ph-heart"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal-view pl-0 lg:pl-10">
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-crimson font-bold mb-4 block">
            The Practice
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-white mb-8 leading-[0.9]">
            Consult the <br />
            <span className="font-script text-6xl text-gradient-gold ml-8">
              Oracle
            </span>
          </h2>
          <p className="font-display text-xl text-rose/70 leading-relaxed mb-10 border-l border-gold/30 pl-6">
            Tarot is not fortune telling. It is a mirror for the soul. Amor Fati
            combines ancient archetypes with modern journaling to help you fall
            in love with your own narrative.
          </p>

          <div className="grid grid-cols-1 gap-6">
            <div className="gold-border-corner p-6 bg-white/5">
              <div className="flex items-center gap-4 mb-2">
                <i className="ph-light ph-hands-praying text-2xl text-gold"></i>
                <h4 className="font-display text-2xl text-white">Daily Draw</h4>
              </div>
              <p className="font-sans text-xs text-gray-400 font-light leading-relaxed tracking-wide">
                Start your morning with intention. One card to guide your energy
                before the world intrudes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Oracle;
