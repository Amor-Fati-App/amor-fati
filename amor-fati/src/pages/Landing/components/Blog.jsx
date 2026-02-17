import React from 'react'

const Blog = () => {
  return (
    <section className="py-32 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between mb-16 reveal-view">
                 <div>
                    <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-crimson font-bold mb-2 block">The Library</span>
                    <h2 className="font-display text-4xl md:text-5xl text-white">The <span className="font-script text-6xl text-gold">Grimoire</span></h2>
                </div>
                 <a href="#" className="hidden md:inline-block font-sans text-[10px] uppercase tracking-widest text-white/50 hover:text-gold transition-colors" rel="nofollow">View All Entries -&gt;</a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           
                <article className="group cursor-pointer reveal-view">
                    <div className="relative overflow-hidden aspect-3/4 mb-6 border border-white/10">
                        <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&amp;w=800&amp;auto=format&amp;fit=crop" className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" alt="Crystal ball" />
                        <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 border border-white/10">
                            <span className="font-sans text-[9px] uppercase tracking-widest text-gold">Rituals</span>
                        </div>
                    </div>
                    <div className="pr-4">
                        <span className="font-sans text-[10px] text-white/40 uppercase tracking-widest mb-2 block">Oct 24, 2023</span>
                        <h3 className="font-display text-2xl text-white mb-3 group-hover:text-gold transition-colors">Cleansing Your Deck: A Guide to Consecration</h3>
                        <p className="font-serif text-white/60 text-sm leading-relaxed line-clamp-2">Before you begin your journey with a new deck, you must clear the energies of the past. Here are three methods using smoke, salt, and moonlight.</p>
                    </div>
                </article>

          
                <article className="group cursor-pointer reveal-view transition-all delay-100">
                    <div className="relative overflow-hidden aspect-3/4 mb-6 border border-white/10">
                        <img src="https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?q=80&amp;w=800&amp;auto=format&amp;fit=crop" className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" alt="Eclipse" />
                        <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 border border-white/10">
                            <span className="font-sans text-[9px] uppercase tracking-widest text-gold">Astrology</span>
                        </div>
                    </div>
                    <div className="pr-4">
                        <span className="font-sans text-[10px] text-white/40 uppercase tracking-widest mb-2 block">Nov 12, 2023</span>
                        <h3 className="font-display text-2xl text-white mb-3 group-hover:text-gold transition-colors">Surviving Saturn Return: The Great Reckoning</h3>
                        <p className="font-serif text-white/60 text-sm leading-relaxed line-clamp-2">It arrives in your late twenties, demanding you grow up. It is not a punishment, but a graduation. How to navigate the turbulence.</p>
                    </div>
                </article>

              
                <article className="group cursor-pointer reveal-view transition-all delay-200">
                    <div className="relative overflow-hidden aspect-3/4 mb-6 border border-white/10">
                        <img src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&amp;w=800&amp;auto=format&amp;fit=crop" className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" alt="Hands" />
                        <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 border border-white/10">
                            <span className="font-sans text-[9px] uppercase tracking-widest text-gold">Philosophy</span>
                        </div>
                    </div>
                    <div className="pr-4">
                        <span className="font-sans text-[10px] text-white/40 uppercase tracking-widest mb-2 block">Nov 28, 2023</span>
                        <h3 className="font-display text-2xl text-white mb-3 group-hover:text-gold transition-colors">Amor Fati: Why You Must Love Your Suffering</h3>
                        <p className="font-serif text-white/60 text-sm leading-relaxed line-clamp-2">Nietzsche's concept of 'Love of Fate' is the core of our practice. To not merely bear what is necessary, but earn to love it.</p>
                    </div>
                </article>
            </div>
        </div>
    </section>
  )
}

export default Blog