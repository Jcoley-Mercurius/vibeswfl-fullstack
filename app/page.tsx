'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">🌴</div>
          <h1 className="text-2xl font-semibold tracking-tight">VibeSWFL</h1>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="hover:text-orange-400 transition-colors">Plan My Vibe</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Events</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Deals</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Local AI</a>
        </div>
        <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 transition-colors rounded-2xl font-medium">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
            Your AI Concierge for<br />
            <span className="text-orange-400">Southwest Florida Vibes</span>
          </h1>
          
          <p className="text-xl text-zinc-400 max-w-md mx-auto mb-10">
            Tell us what kind of day you want. We&apos;ll build the perfect Southwest Florida experience — instantly.
          </p>

          <button 
            onClick={() => alert("Plan My Vibe coming in Phase 2! 🚀")}
            className="px-10 py-5 bg-white text-zinc-950 rounded-3xl text-lg font-semibold hover:scale-105 transition-all flex items-center gap-3 mx-auto"
          >
            Plan My Vibe
            <span className="text-2xl">🌴</span>
          </button>

          <p className="text-sm text-zinc-500 mt-8">
            Trusted by locals &amp; visitors in Cape Coral, Fort Myers, Naples &amp; beyond
          </p>
        </div>
      </main>
    </div>
  );
}