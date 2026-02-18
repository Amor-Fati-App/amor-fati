import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-oxblood/20 border-t border-white/5 py-16 px-6 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
        <div className="text-center md:text-left">
          <h1 className="font-display text-3xl text-white tracking-widest">
            AMOR FATI
          </h1>
        </div>

        <div className="flex gap-12">
          <div className="flex flex-col gap-4 text-center md:text-left font-sans text-[10px] uppercase tracking-widest text-gray-400">
            <span className="text-gold font-bold mb-2">Explore</span>
            <a
              href="#"
              className="hover:text-white transition-colors"
              rel="nofollow"
            >
              Features
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
              rel="nofollow"
            >
              Pricing
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
              rel="nofollow"
            >
              Manifesto
            </a>
          </div>
          <div className="flex flex-col gap-4 text-center md:text-left font-sans text-[10px] uppercase tracking-widest text-gray-400">
            <span className="text-gold font-bold mb-2">Connect</span>
            <a
              href="#"
              className="hover:text-white transition-colors"
              rel="nofollow"
            >
              Instagram
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
              rel="nofollow"
            >
              TikTok
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
              rel="nofollow"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-20 border-t border-white/5 pt-8">
        <p className="font-sans text-[10px] uppercase text-gray-600 tracking-widest">
          © 2024 Amor Fati. Crafted in the Void.
        </p>
      </div>
    </footer>
  );
}

export default Footer