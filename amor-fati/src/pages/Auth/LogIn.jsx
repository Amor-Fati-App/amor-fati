import React from "react";

const LogIn = () => {
  return (
    <div className="bg-void text-parchment font-sans min-h-screen w-full overflow-hidden flex flex-col lg:flex-row antialiased selection:bg-rose selection:text-white">
      <div className="relative w-full lg:w-[45%] h-full min-h-screen flex flex-col justify-center items-center px-6 sm:px-12 lg:px-20 z-10 bg-void border-r border-white/5 order-2 lg:order-1">
        <div
          className="w-full max-w-md space-y-10 py-12 lg:py-0 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="lg:hidden flex items-center justify-center mb-8 opacity-60">
            <span className="font-display tracking-[0.3em] text-[10px] text-gold uppercase flex items-center gap-2">
              <i className="ph-fill ph-moon-stars text-lg"></i>
              Amor Fati
            </span>
          </div>

          <div className="space-y-4">
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-rose/90 font-semibold mb-2">
              Reconnection
            </p>
            <h1 className="font-display text-4xl lg:text-5xl text-parchment leading-tight">
              Return to the Circle
            </h1>
            <p className="font-serif text-lg text-white/40 italic leading-relaxed">
              The cards remember you. Resume your path.
            </p>
          </div>

          <form className="space-y-8">
            <div className="group space-y-2">
              <label
                htmlFor="email"
                className="block font-sans text-xs uppercase tracking-widest text-gold-dim group-focus-within:text-gold transition-colors duration-300 ml-1"
              >
                Electronic Essence
              </label>
              <div className="relative flex items-center">
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full bg-input border border-white/10 text-parchment px-4 py-4 pl-4 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/20 transition-all duration-300 placeholder-white/10 font-serif text-lg rounded-sm"
                  placeholder="name@domain.com"
                />
                <i className="ph ph-envelope-simple absolute right-4 text-white/20 transition-colors group-focus-within:text-gold/50"></i>
              </div>
            </div>
            <div className="group space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label
                  htmlFor="password"
                  className="block font-ui text-xs uppercase tracking-widest text-gold-dim group-focus-within:text-gold transition-colors duration-300"
                >
                  A Secret Key
                </label>
                <a
                  href="#"
                  className="font-ui text-[10px] uppercase tracking-widest text-white/30 hover:text-rose transition-colors"
                  rel="nofollow"
                >
                  Forgot Binding?
                </a>
              </div>

              <div className="relative flex items-center">
                <input
                  type="password"
                  id="password"
                  required
                  className="w-full bg-input border border-white/10 text-parchment px-4 py-4 pl-4 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/20 transition-all duration-300 placeholder-white/10 font-serif text-lg rounded-sm"
                  placeholder="••••••"
                />
                <i className="ph ph-lock-key absolute right-4 text-white/20 transition-colors group-focus-within:text-gold/50"></i>
              </div>
            </div>
            <button
              type="submit"
              className="group w-full relative overflow-hidden bg-rose-dark hover:bg-rose text-white px-8 py-5 transition-all duration-500 ease-out border border-white/5 hover:border-rose/40 rounded-sm"
            >
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:animate-shimmer"></div>

              <span className="relative flex items-center justify-center gap-3 font-display uppercase tracking-widest text-sm font-semibold">
                Resume Journey <i className="ph ph-arrow-right text-lg"></i>
              </span>
            </button>
          </form>
          <div className="pt-6 border-t border-white/5 text-center lg:text-left">
            <p className="text-parchment-dim text-sm font-ui">
              Not yet initiated?
              <a
                href="/signup"
                className="inline-block lg:block lg:mt-2 text-gold hover:text-white font-display uppercase tracking-widest text-xs transition-colors border-b border-transparent hover:border-gold/50 pb-0.5 ml-2 lg:ml-0"
                rel="nofollow"
              >
                Begin the Ritual
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full lg:w-[55%] h-[35vh] lg:h-screen overflow-hidden group order-1 lg:order-2">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-80 transition-transform duration-[30s] ease-linear transform scale-100 group-hover:scale-110"
          src="https://v3b.fal.media/files/b/0a8efa02/084YOC5MlMD1_GNcDBguj_video.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>

        <div className="absolute inset-0 bg-rose-dark/10 mix-blend-overlay"></div>

        <div className="absolute inset-0 video-overlay-signin pointer-events-none"></div>

        <div className="absolute top-1/2 right-12 lg:right-36 transform -translate-y-1/2 max-w-lg hidden lg:block opacity-0 animate-[fadeIn_2s_ease-out_1s_forwards] text-right">
          <div className="w-16 h-px bg-gold/50 mb-8 ml-auto"></div>
          <h2 className="font-display text-4xl leading-tight text-white mb-6 tracking-wide drop-shadow-lg">
            Fate is fluid.
          </h2>
          <p className="font-serif text-2xl text-parchment-dim italic leading-relaxed">
            "What is foretold is not a cage, but a key. You have returned to
            turn it."
          </p>
          <p className="font-ui text-xs text-gold/60 mt-6 uppercase tracking-widest pr-1">
            — Oracle
          </p>
        </div>

        <div className="absolute top-8 right-8 lg:top-12 lg:right-12 z-20 opacity-80">
          <span className="font-display tracking-[0.3em] text-[10px] text-gold uppercase flex items-center justify-end gap-2">
            Amor Fati <i className="ph-fill ph-moon-stars text-lg"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
