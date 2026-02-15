import React from "react";

const Hero = () => {
  return (
    <header className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-void">
        <div className="absolute inset-0 bg-linear-to-b from-oxblood/40 via-void to-void z-0"></div>

        <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1741017162002-fac8e37509f9?fm=jpg&amp;q=60&amp;w=3000&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8"
            className="w-full h-full object-cover blur-sm scale-105 animate-pulse-slow"
            alt="atmospheric nebulas and roses"
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <div
          className="mb-4 opacity-0 animate-fade-in-up flex items-center gap-4"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="h-[1px] w-8 bg-gold/50"></span>

          <div className="relative select-none">
            <h1
              className="font-display text-[14vw] md:text-[10rem] -leading-[0.85] text-white mix-blend-overlay opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              AMOR
            </h1>
            <h1
              className="font-script text-[15vw] md:text[11rem] leading-[0.5] text-gradient-gold opacity-0 animate-fade-in-up -mt-2 md:-mt-8 relative z-20 transform -rotate-6 origin-center"
              style={{ animationDelay: "0.6s" }}
            >
              Fati
            </h1>
          </div>
        </div>

        <div
          className="mt-16 max-w-lg opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          <p className="font-display text-2xl md:text-3xl text-rose/90 leading-relaxed">
            Fall in love with your own{" "}
            <span className="font-script text-4xl text-gold">destiny</span>
          </p>
          <p className="font-sans text-xs text-rose/60 mt-4 tracking-widest uppercase font-light">
            The Modern Tarot Journal &amp; Astrological Companion
          </p>
        </div>

        <div
          className="mt-12 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "1.0s" }}
        >
          <a
            href="#tarot"
            className="group relative inline-flex items-center gap-4 px-10 py-4 bg-transparent border border-crimson/40 rounded-full transition-all duration-500 hover:bg-crimson/10 hover:border-gold/60"
            rel="nofollow"
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-white group-hover:text-gold transition-colors">
              Enter the Void
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
