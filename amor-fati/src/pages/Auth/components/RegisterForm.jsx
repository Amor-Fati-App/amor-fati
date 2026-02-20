import React from "react";

const RegisterForm = () => {
  return (
    <>
      <div className="mb-8">
        <h2
          id="form-title"
          className="font-display text-4xl text-white mb-2 animate-fade-in"
        >
          Join the Circle
        </h2>
        <p
          id="form-desc"
          className="font-sans text-xs text-white/50 animate-fade-in"
        >
          Create your digital alter
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <button className="social-btn group">
          <i className="ph-fill ph-google-logo text-lg group-hover:text-gold transition-colors"></i>
          <span className="hidden sm:inline">Google</span>
        </button>
        <button className="social-btn group">
          <i className="ph-fill ph-apple-logo text-lg group-hover:text-white transition-colors"></i>
          <span className="hidden sm:inline">Apple</span>
        </button>
      </div>
      <div className="flex items-center gap-4 mb-6">
        <div className="h-px bg-white/10 flex-1"></div>
        <span className="font-sans text-[10px] text-white/30 uppercase tracking-widest">
          Or continue with
        </span>
        <div className="h-px bg-white/10 flex-1"></div>
      </div>

      <form id="auth-form" className="animate-fade-in">
        <div className="input-group">
          <input
            type="email"
            id="email"
            className="auth-input"
            placeholder=" "
            required
            autoComplete="email"
          />
          <label
            htmlFor="email"
            className="absolute left-12 top-4 text-white/30 text-xs pointer-events-none transition-all duration-200"
          >
            Email Address
          </label>
          <i className="ph ph-envelope-simple input-icon text-lg"></i>

          <span
            id="email-error"
            className="hidden absolute right-2 top-4 text-error text-[10px] uppercase font-bold tracking-wider"
          >
            Invalid Email
          </span>
        </div>

        <div className="input-group">
          <input
            type="password"
            id="password"
            className="auth-input"
            placeholder=" "
            required
            autoComplete="current-password"
          />
          <label
            htmlFor="password"
            className="absolute left-12 top-4 text-white/30 text-xs pointer-events-none transition-all duration-200"
          >
            Password
          </label>
          <i className="ph ph-lock-key input-icon text-lg"></i>
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors"
          >
            <i className="ph ph-eye-slash" id="eye-icon"></i>
          </button>
        </div>
        <div id="signup-extras" className="mb-4">
          <div className="input-group">
            <input
              type="password"
              id="confirm-password"
              className="auth-input"
              placeholder=" "
            />
            <i className="ph ph-lock-key input-icon text-lg"></i>
            <label className="absolute left-12 top-4 text-white/30 text-xs pointer-events-none">
              Confirm Password
            </label>
          </div>
        </div>

        <button
          type="submit"
          id="submit-btn"
          className="w-full py-4 bg-gold hover:bg-white hover:text-black text-panel font-sans text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.2)]"
        >
          Inscribe Name
        </button>
      </form>

      <div
        id="error-toast"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-red-900/90 border border-red-500 text-white px-6 py-3 rounded text-xs font-bold uppercase tracking-wide shadow-xl flex items-center gap-3 translate-y-10 opacity-0 transition-all duration-300 pointer-events-none"
      >
        <i className="ph-fill ph-warning-circle"></i>
        <span id="error-msg">Incorrect Credentials</span>
      </div>
    </>
  );
};

export default RegisterForm;
