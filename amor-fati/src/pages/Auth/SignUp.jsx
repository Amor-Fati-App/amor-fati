import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const { error, success, isLoading, handleSignUp, session } = useAuth();

  const navigate = useNavigate()

  if (session) {
    navigate('/app/onboarding')
  }

  const signUp = async (e) => {
    e.preventDefault()

    return handleSignUp({name, email, password})
   
  }
  return (
    <div className="bg-void text-parchment font-sans min-h-screen w-full flex flex-col lg:flex-row antialiased selection:bg-rose selection:text-white">
      <div className="relative w-full lg:w-[55%] h-[35vh] lg:h-screen overflow-hidden order-1 lg:order-1 group">
        <video
          src="https://v3b.fal.media/files/b/0a8efa02/084YOC5MlMD1_GNcDBguj_video.mp4"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        <div className="absolute inset-0 video-overlay z-10 transition-opacity duration-1000"></div>

        <div className="absolute z-20 top-1/2 left-12 lg:left-24 transform -translate-y-1/2 max-w-md hidden lg:block opacity-0 lg:animate-fade-in-slow">
          <div className="w-12 h-px bg-gold/50 mb-6"></div>
          <h2 className="font-display text-4xl leading-tight text-white tracking-wide">
            We meet at last.
          </h2>
          <p className="font-body text-xl text-parchment-dim italic leading-relaxed">
            "The universe is not outside of you. Look inside yourself;
            everything that you want, you already are."
          </p>
          <p className="font-sans text-xs text-gold/60 mt-4 uppercase tracking-widest">
            - Rumi
          </p>
        </div>
      </div>

      <div className="relative w-full lg:w-[45%] lg:h-screen bg-void flex flex-col justify-center items-center px-6 py-12 lg:px-20 order-2 lg:order-2 z-20">
        <div
          className="w-full max-w-md animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="flex items-center gap-3 mb-12 opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
            <i className="ph-fill ph-moon-stars text-gold text-2xl"></i>
            <span className="font-display text-lg tracking-[0.2em] text-white">
              AMOR FATI
            </span>
          </div>
          <div className="mb-10">
            <h1 className="font-display text-3xl lg:text-4xl text-white mb-3">
              Begin the Ritual
            </h1>
            <p className="font-body text-lg text-parchment-dim">
              Create your sanctuary to chart the unseen.
            </p>
          </div>

          <form onSubmit={signUp} className="space-y-6">
            <div className="space-y-2 group">
              <label
                htmlFor="name"
                className="block font-sans text-xs uppercase tracking-widest text-gold-dim group-focus-within:text-gold transition-colors"
              >
                How shall we call you?
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  required
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="w-full bg-input border border-white/10 text-parchment px-4 py-4 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all placeholder-white/10 font-body text-l"
                  placeholder="Your Spirit Name"
                />
                <i className="ph ph-user absolute right-4 top-1/2 -translate-y-1/2 text-white/20"></i>
              </div>
            </div>

            <div className="space-y-2 group">
              <label
                htmlFor="email"
                className="block font-sans text-xs uppercase tracking-widest text-gold-dim group-focus-within:text-gold transition-colors"
              >
                Electronic Essence
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  required
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                  className="w-full bg-input border border-white/10 text-parchment px-4 py-4 focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all placeholder-white/10 font-body text-l"
                  placeholder="name@domain.com"
                />
                <i className="ph ph-envelope-simple absolute right-4 top-1/2 -translate-y-1/2 text-white/20"></i>
              </div>
            </div>
            <div className="space-y-2 group">
              <label
                for="password"
                className="block font-ui text-xs uppercase tracking-widest text-gold-dim group-focus-within:text-gold transition-colors"
              >
                A Secret Key
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  required
                  onChange={e => setPassword(e.target.value)}
                  value={password}
                  className="w-full bg-input border border-white/10 text-parchment px-4 py-4 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all placeholder-white/10 font-body text-lg"
                  placeholder="••••••"
                />
                <i className="ph ph-lock-key absolute right-4 top-1/2 -translate-y-1/2 text-white/20"></i>
              </div>
            </div>
            <div className="flex items-start gap-3 mt-8">
              <input
                type="checkbox"
                id="terms"
                className="custom-checkbox mt-1"
              />
              <label
                for="terms"
                className="text-sm text-parchment-dim leading-relaxed"
              >
                I agree to abide by the{" "}
                <a
                  href="#"
                  className="text-gold hover:text-white transition-colors underline decoration-gold/30 underline-offset-4"
                  rel="nofollow"
                >
                  Sacred Terms
                </a>{" "}
                and acknowledge that my data is merely stardust.
              </label>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="group w-full relative overflow-hidden bg-rose-dark hover:bg-rose text-white px-8 py-4 mt-4 transition-all duration-500 ease-out border border-rose/30 hover:border-rose/60 cursor-pointer"
            >
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:animate-shimmer cursor-pointer"></div>
              <span className="relative flex items-center justify-center gap-3 font-display uppercase tracking-widest text-sm">
                Inscribe Name <i className="ph ph-feather"></i>
              </span>
            </button>
            {error && (
              <p className='text-error font-bold'>{ error }</p>
            )}
            {success && (
              <p className='text-gold'>Success! Check your email to log in.</p>
            )}
          </form>

          <div className="mt-10 text-center border-t border-white/5 pt-8 pb-10">
            <p className="text-parchment-dim text-sm font-sans">
              Already walked this path?{" "}
              <a
                href="/login"
                className="block mt-2 text-gold hover:text-white font-display uppercase tracking-widest text-xs transition-colors"
                rel="nofollow"
              >
                Return to the Circle
              </a>
            </p>
          </div>
        </div>
        <div className="absolute bottom-6 left-0 w-full text-center opacity-30">
          <p className="text-[10px] text-parchment font-ui uppercase tracking-widest">
            Establish. Reflect. Transcend.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
