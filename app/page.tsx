'use client';

import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-linear-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-orange-500/30">
            🌴
          </div>
          <h1 className="text-3xl font-bold tracking-tighter">VibeSWFL</h1>
        </div>

        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          <a href="#" className="hover:text-orange-400 transition-colors">Plan My Vibe</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Events</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Deals</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Local AI</a>
        </div>

        <button
          type="button"
          className="hidden md:block px-8 py-4 bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 active:scale-95 transition-all font-semibold rounded-3xl text-white shadow-xl shadow-orange-500/30"
        >
          Get Started
        </button>

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-4xl focus:outline-none"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-zinc-950 z-50 flex flex-col pt-20 px-6">
          <a href="#" className="py-6 text-2xl font-medium border-b border-white/10" onClick={() => setIsMenuOpen(false)}>Plan My Vibe</a>
          <a href="#" className="py-6 text-2xl font-medium border-b border-white/10" onClick={() => setIsMenuOpen(false)}>Events</a>
          <a href="#" className="py-6 text-2xl font-medium border-b border-white/10" onClick={() => setIsMenuOpen(false)}>Deals</a>
          <a href="#" className="py-6 text-2xl font-medium border-b border-white/10" onClick={() => setIsMenuOpen(false)}>Local AI</a>
          <button 
            type="button" 
            onClick={() => setIsMenuOpen(false)} 
            className="mt-8 w-full py-6 bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 rounded-3xl text-2xl font-semibold"
          >
            Get Started
          </button>
        </div>
      )}

      {/* HERO */}
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-88px)] px-6 text-center relative">
        <div className="absolute inset-0 bg-linear-to-br from-orange-500/5 via-transparent to-transparent pointer-events-none" />

        <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium px-6 py-3 rounded-3xl flex items-center gap-2 z-20 shadow-2xl">
          <span className="text-orange-400 text-lg">⚡</span>
          INSTANT AI • LOCAL VIBES
        </div>

        <div className="max-w-4xl mx-auto z-10 pt-12">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
            Your AI Concierge for<br />
            <span className="bg-linear-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Southwest Florida Vibes
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-12">
            Tell us what kind of day you want.<br />
            We&apos;ll build the perfect Southwest Florida experience — instantly.
          </p>

          <button
            type="button"
            onClick={() => alert("🚀 Plan My Vibe coming in Phase 2!")}
            className="group px-14 py-7 bg-white text-zinc-950 rounded-3xl text-2xl font-semibold hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center gap-4 mx-auto"
          >
            Plan My Vibe
            <span className="text-4xl group-active:rotate-12 transition-transform">🌴</span>
          </button>

          <p className="text-sm text-zinc-500 mt-16 tracking-widest">
            TRUSTED BY LOCALS &amp; VISITORS IN CAPE CORAL • FORT MYERS
          </p>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-400 text-xs tracking-widest animate-bounce">
          <span>SCROLL FOR MORE VIBES</span>
          <span className="text-2xl">↓</span>
        </div>
      </main>

      {/* FEATURED VIBES */}
      <section className="py-20 px-6 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tighter text-center mb-4">Find Your Vibe</h2>
          <p className="text-zinc-400 text-center max-w-md mx-auto mb-12">
            Whether you want chill beach days or high-energy adventures — we’ve got the perfect experience waiting.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="bg-zinc-800 rounded-3xl p-6 hover:bg-zinc-700 hover:scale-105 transition-all group">
              <div className="text-5xl mb-6">🏖️</div>
              <h3 className="text-xl font-semibold mb-2">Beach Day</h3>
              <p className="text-zinc-400 text-sm">Sun, sand, and calm waves</p>
            </div>
            <div className="bg-zinc-800 rounded-3xl p-6 hover:bg-zinc-700 hover:scale-105 transition-all group">
              <div className="text-5xl mb-6">🌅</div>
              <h3 className="text-xl font-semibold mb-2">Sunset Cruise</h3>
              <p className="text-zinc-400 text-sm">Golden hour on the water</p>
            </div>
            <div className="bg-zinc-800 rounded-3xl p-6 hover:bg-zinc-700 hover:scale-105 transition-all group">
              <div className="text-5xl mb-6">🍤</div>
              <h3 className="text-xl font-semibold mb-2">Foodie Adventure</h3>
              <p className="text-zinc-400 text-sm">Best local eats &amp; hidden gems</p>
            </div>
            <div className="bg-zinc-800 rounded-3xl p-6 hover:bg-zinc-700 hover:scale-105 transition-all group">
              <div className="text-5xl mb-6">🛶</div>
              <h3 className="text-xl font-semibold mb-2">Nature Escape</h3>
              <p className="text-zinc-400 text-sm">Kayaking &amp; wildlife</p>
            </div>
            <div className="bg-zinc-800 rounded-3xl p-6 hover:bg-zinc-700 hover:scale-105 transition-all group">
              <div className="text-5xl mb-6">🎣</div>
              <h3 className="text-xl font-semibold mb-2">Fishing Trip</h3>
              <p className="text-zinc-400 text-sm">Reel in the big one</p>
            </div>
            <div className="bg-zinc-800 rounded-3xl p-6 hover:bg-zinc-700 hover:scale-105 transition-all group">
              <div className="text-5xl mb-6">🚤</div>
              <h3 className="text-xl font-semibold mb-2">Boat Day</h3>
              <p className="text-zinc-400 text-sm">Water sports &amp; island hopping</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tighter text-center mb-4">How It Works</h2>
          <p className="text-zinc-400 text-center mb-16 max-w-md mx-auto">
            Three simple steps to your perfect Southwest Florida day
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto bg-linear-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-lg shadow-orange-500/40 group-hover:scale-110 transition-all">1️⃣</div>
              <h3 className="text-2xl font-semibold mb-3">Tell Us Your Vibe</h3>
              <p className="text-zinc-400">Answer a few quick questions about what kind of day you want — beach, adventure, foodie, etc.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto bg-linear-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-lg shadow-orange-500/40 group-hover:scale-110 transition-all">2️⃣</div>
              <h3 className="text-2xl font-semibold mb-3">AI Builds It</h3>
              <p className="text-zinc-400">Our AI instantly creates a personalized itinerary with local spots, timings, and hidden gems.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto bg-linear-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-lg shadow-orange-500/40 group-hover:scale-110 transition-all">3️⃣</div>
              <h3 className="text-2xl font-semibold mb-3">Go Enjoy</h3>
              <p className="text-zinc-400">Get your plan instantly — save it, share it, or start your perfect day in Southwest Florida.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - Only Cape Coral & Fort Myers */}
      <section className="py-20 px-6 bg-zinc-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tighter text-center mb-4">Real Vibes, Real People</h2>
          <p className="text-zinc-400 text-center mb-16">Don’t just take our word for it</p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-zinc-800 rounded-3xl p-8">
              <p className="text-lg italic text-zinc-300 mb-8">
                “VibeSWFL planned the perfect sunset cruise for my anniversary. It was spot-on — even found a hidden beach I didn’t know existed!”
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-400 rounded-2xl flex items-center justify-center text-xl">👩‍❤️‍👨</div>
                <div>
                  <p className="font-semibold">Sarah &amp; Mike Thompson</p>
                  <p className="text-orange-400 text-sm">Cape Coral</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-3xl p-8">
              <p className="text-lg italic text-zinc-300 mb-8">
                “Used it for a family day. The AI suggested the best fishing spots and a great lunch stop. Saved us so much time!”
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-400 rounded-2xl flex items-center justify-center text-xl">👨‍👧‍👦</div>
                <div>
                  <p className="font-semibold">The Rodriguez Family</p>
                  <p className="text-orange-400 text-sm">Fort Myers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}