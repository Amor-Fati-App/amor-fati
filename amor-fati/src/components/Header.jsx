import React from "react";

const Header = () => {
  return (
    <nav className="fixed w-full z-50 px-8 py-6 mix-blend-difference">
      <div className="max-w-7xl mx-auto flex justify-between items-end border-b border-white/10 pb-4">
        <div className="flex flex-col group cursor-pointer">
          <span className="font-sans text-[10px] tracking-[0.4em] text-gold uppercase mb-1 group-hover:tracking-[0.6em] transition-all">
            Vol. I
          </span>
          <a
            href="#"
            className="font-display text-3xl text-white tracking-wider "
            rel="nofollow"
          >
            Amor <span className="font-script text-4xl text-gold">Fati</span>
          </a>
        </div>

        <div className="hidden md:flex gap-12 font-sans text-xs tracking-[0.2em] font-light text-rose/80 uppercase items-center">
          <a
            href="#tarot"
            className="hover:text-gold transition-colors hover:font-bold"
            rel="nofollow"
          >
            The Spread
          </a>
          <a
            href="#tarot"
            className="hover:text-gold transition-colors hover:font-bold"
            rel="nofollow"
          >
            Features
          </a>{" "}
          <a
            href="#tarot"
            className="hover:text-gold transition-colors hover:font-bold"
            rel="nofollow"
          >
            Journal
          </a>
          <button
            type="button"
            className="font-display italic text-lg text-white hover:text-gold transition-colors border border-white/20 px-6 py-1 rounded-full hover:bg-white/10"
          >
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
