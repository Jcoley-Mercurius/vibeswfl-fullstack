'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-hidden">
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
          className="px-8 py-4 bg-orange-500 hover:bg-orange-600 active:scale-95 transition-all font-semibold rounded-3xl text-white shadow-xl shadow-orange-500/30"
        >
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-88px)] px-6 text-center relative">
        {/* Subtle background accent */}
        <div className="absolute inset-0 bg-linear-to-br from-orange-500/5 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto z-10">
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
            className="group px-12 py-6 bg-white text-zinc-950 rounded-3xl text-2xl font-semibold hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center gap-4 mx-auto"
          >
            Plan My Vibe
            <span className="text-4xl group-active:rotate-12 transition-transform">🌴</span>
          </button>

          <p className="text-sm text-zinc-500 mt-16 tracking-widest">
            TRUSTED BY LOCALS &amp; VISITORS IN CAPE CORAL • FORT MYERS
          </p>
        </div>
      </main>
    </div>
  );
}