import React from 'react'

const Quote = () => {
  return (
    <section className="relative py-32 flex items-center justify-center">
      <div className="text-center px-6 max-w-3xl reveal-view">
        <i className="ph-fill ph-quotes text-6xl text-white/5 mb-8 inline-block"></i>
        <p className="font-display text-3xl md:text-5xl text-rose-100/90 leading-tight">
          "We are not here to choose our fate, but to
          <span className="font-script text-6xl text-gold block mt-2">
            embrace it"
          </span>
        </p>
      </div>
    </section>
  );
}

export default Quote