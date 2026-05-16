'use client';

import { useState } from 'react';

interface Itinerary {
  id: string;
  title: string;
  date: string;
  highlights: string[];
  note: string;
  savedAt: string;
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMyTripsOpen, setIsMyTripsOpen] = useState(false);
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [savedTrips, setSavedTrips] = useState<Itinerary[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('vibeTrips');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const [vibeType, setVibeType] = useState('');
  const [groupSize, setGroupSize] = useState('2');
  const [timeOfDay, setTimeOfDay] = useState('morning');

  const saveToLocalStorage = (trips: Itinerary[]) => {
    localStorage.setItem('vibeTrips', JSON.stringify(trips));
    setSavedTrips(trips);
  };

  const handlePlanMyVibe = () => {
    setIsModalOpen(true);
    setItinerary(null);
    setVibeType('');
  };

  const generateItinerary = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1800));

    const vibeNames: { [key: string]: string } = {
      beach: "Beach Day Bliss",
      adventure: "Adventure Escape",
      foodie: "Foodie Adventure",
      romantic: "Romantic Sunset",
      family: "Family Fun Day",
      relax: "Pure Relaxation"
    };

    const title = vibeType ? vibeNames[vibeType] || "Your Perfect Day" : "Your Perfect Cape Coral Day";

    const newItinerary: Itinerary = {
      id: Date.now().toString(),
      title,
      date: "Saturday, May 23",
      highlights: [
        `Morning: ${vibeType === 'beach' ? 'Kayak through mangroves at Matlacha' : vibeType === 'adventure' ? 'Paddleboard tour in Cape Coral' : 'Coffee at a waterfront café'}`,
        `Lunch: ${vibeType === 'foodie' ? 'Hidden waterfront gem in Fort Myers' : 'Fresh seafood at a local spot'}`,
        `Afternoon: ${groupSize === '1' || groupSize === '2' ? 'Private sunset cruise' : 'Family-friendly beach activities'}`,
        `Evening: ${timeOfDay === 'evening' ? 'Live music & bonfire on the beach' : 'Stargazing on the pier'}`
      ],
      note: `Personalized for ${groupSize} people • ${vibeType || 'relaxed'} vibe • ${timeOfDay} start • Cape Coral / Fort Myers area`,
      savedAt: new Date().toISOString()
    };

    setItinerary(newItinerary);
    setIsLoading(false);
  };

  const saveCurrentTrip = () => {
    if (!itinerary) return;
    const updatedTrips = [...savedTrips, itinerary];
    saveToLocalStorage(updatedTrips);
    alert('✅ Saved to My Trips!');
  };

  const deleteTrip = (id: string) => {
    const updated = savedTrips.filter(t => t.id !== id);
    saveToLocalStorage(updated);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* NAVIGATION */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-linear-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-orange-500/30">🌴</div>
          <h1 className="text-3xl font-bold tracking-tighter">VibeSWFL</h1>
        </div>

        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          <a href="#" className="hover:text-orange-400 transition-colors" onClick={handlePlanMyVibe}>Plan My Vibe</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Events</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Deals</a>
          <a href="#" className="hover:text-orange-400 transition-colors" onClick={() => setIsMyTripsOpen(true)}>My Trips</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Local AI</a>
        </div>

        <button type="button" className="hidden md:block px-8 py-4 bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 active:scale-95 transition-all font-semibold rounded-3xl text-white shadow-xl shadow-orange-500/30">Get Started</button>

        <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-4xl focus:outline-none">{isMenuOpen ? '✕' : '☰'}</button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-zinc-950 z-50 flex flex-col pt-20 px-6">
          <a href="#" className="py-6 text-2xl font-medium border-b border-white/10" onClick={() => { setIsMenuOpen(false); handlePlanMyVibe(); }}>Plan My Vibe</a>
          <a href="#" className="py-6 text-2xl font-medium border-b border-white/10" onClick={() => setIsMenuOpen(false)}>Events</a>
          <a href="#" className="py-6 text-2xl font-medium border-b border-white/10" onClick={() => setIsMenuOpen(false)}>Deals</a>
          <a href="#" className="py-6 text-2xl font-medium border-b border-white/10" onClick={() => { setIsMenuOpen(false); setIsMyTripsOpen(true); }}>My Trips</a>
          <a href="#" className="py-6 text-2xl font-medium border-b border-white/10" onClick={() => setIsMenuOpen(false)}>Local AI</a>
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
            onClick={handlePlanMyVibe}
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
          <p className="text-zinc-400 text-center max-w-md mx-auto mb-12">Whether you want chill beach days or high-energy adventures — we’ve got the perfect experience waiting.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="bg-zinc-800 rounded-3xl p-6 hover:bg-zinc-700 hover:scale-105 transition-all group"><div className="text-5xl mb-6">🏖️</div><h3 className="text-xl font-semibold mb-2">Beach Day</h3><p className="text-zinc-400 text-sm">Sun, sand, and calm waves</p></div>
            <div className="bg-zinc-800 rounded-3xl p-6 hover:bg-zinc-700 hover:scale-105 transition-all group"><div className="text-5xl mb-6">🌅</div><h3 className="text-xl font-semibold mb-2">Sunset Cruise</h3><p className="text-zinc-400 text-sm">Golden hour on the water</p></div>
            <div className="bg-zinc-800 rounded-3xl p-6 hover:bg-zinc-700 hover:scale-105 transition-all group"><div className="text-5xl mb-6">🍤</div><h3 className="text-xl font-semibold mb-2">Foodie Adventure</h3><p className="text-zinc-400 text-sm">Best local eats &amp; hidden gems</p></div>
            <div className="bg-zinc-800 rounded-3xl p-6 hover:bg-zinc-700 hover:scale-105 transition-all group"><div className="text-5xl mb-6">🛶</div><h3 className="text-xl font-semibold mb-2">Nature Escape</h3><p className="text-zinc-400 text-sm">Kayaking &amp; wildlife</p></div>
            <div className="bg-zinc-800 rounded-3xl p-6 hover:bg-zinc-700 hover:scale-105 transition-all group"><div className="text-5xl mb-6">🎣</div><h3 className="text-xl font-semibold mb-2">Fishing Trip</h3><p className="text-zinc-400 text-sm">Reel in the big one</p></div>
            <div className="bg-zinc-800 rounded-3xl p-6 hover:bg-zinc-700 hover:scale-105 transition-all group"><div className="text-5xl mb-6">🚤</div><h3 className="text-xl font-semibold mb-2">Boat Day</h3><p className="text-zinc-400 text-sm">Water sports &amp; island hopping</p></div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tighter text-center mb-4">How It Works</h2>
          <p className="text-zinc-400 text-center mb-16 max-w-md mx-auto">Three simple steps to your perfect Southwest Florida day</p>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center group"><div className="w-16 h-16 mx-auto bg-linear-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-lg shadow-orange-500/40 group-hover:scale-110 transition-all">1️⃣</div><h3 className="text-2xl font-semibold mb-3">Tell Us Your Vibe</h3><p className="text-zinc-400">Answer a few quick questions about what kind of day you want</p></div>
            <div className="text-center group"><div className="w-16 h-16 mx-auto bg-linear-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-lg shadow-orange-500/40 group-hover:scale-110 transition-all">2️⃣</div><h3 className="text-2xl font-semibold mb-3">AI Builds It</h3><p className="text-zinc-400">Our AI instantly creates a personalized itinerary with local spots</p></div>
            <div className="text-center group"><div className="w-16 h-16 mx-auto bg-linear-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-lg shadow-orange-500/40 group-hover:scale-110 transition-all">3️⃣</div><h3 className="text-2xl font-semibold mb-3">Go Enjoy</h3><p className="text-zinc-400">Get your plan instantly — save it or start your perfect day</p></div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS / REVIEWS */}
      <section className="py-20 px-6 bg-zinc-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tighter text-center mb-4">Real Vibes, Real People</h2>
          <p className="text-zinc-400 text-center mb-16">Don’t just take our word for it</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-zinc-800 rounded-3xl p-8">
              <p className="text-lg italic text-zinc-300 mb-8">“VibeSWFL planned the perfect sunset cruise for my anniversary. It was spot-on — even found a hidden beach I didn’t know existed!”</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-400 rounded-2xl flex items-center justify-center text-xl">👩‍❤️‍👨</div>
                <div>
                  <p className="font-semibold">Sarah &amp; Mike Thompson</p>
                  <p className="text-orange-400 text-sm">Cape Coral</p>
                </div>
              </div>
            </div>
            <div className="bg-zinc-800 rounded-3xl p-8">
              <p className="text-lg italic text-zinc-300 mb-8">“Used it for a family day. The AI suggested the best fishing spots and a great lunch stop. Saved us so much time!”</p>
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

      {/* FINAL CTA */}
      <section className="py-24 px-6 bg-linear-to-br from-zinc-900 to-black text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-none mb-6">
            Ready to Find<br />Your Perfect Vibe?
          </h2>
          <p className="text-2xl text-zinc-400 mb-10">
            Tell us what kind of day you want.<br />
            Our AI will build it instantly.
          </p>
          <button
            type="button"
            onClick={handlePlanMyVibe}
            className="group px-16 py-8 bg-white text-zinc-950 rounded-3xl text-3xl font-semibold hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center gap-5 mx-auto"
          >
            Plan My Vibe
            <span className="text-5xl group-active:rotate-12 transition-transform">🌴</span>
          </button>
          <p className="text-zinc-500 mt-12 text-sm tracking-widest">
            Instant • Free • Made for Cape Coral &amp; Fort Myers
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-16 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-linear-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center text-3xl">🌴</div>
              <h1 className="text-3xl font-bold tracking-tighter">VibeSWFL</h1>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Your AI concierge for Southwest Florida.<br />
              Instant plans. Real local vibes.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-orange-400">Quick Links</h4>
            <div className="flex flex-col gap-3 text-sm text-zinc-400">
              <a href="#" className="hover:text-orange-400 transition-colors">Plan My Vibe</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Events</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Deals</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Local AI</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-orange-400">Company</h4>
            <div className="flex flex-col gap-3 text-sm text-zinc-400">
              <a href="#" className="hover:text-orange-400 transition-colors">About Us</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Contact</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Blog</a>
            </div>
          </div>
          <div className="text-sm text-zinc-500">
            <p className="mb-2">© 2026 VibeSWFL. All rights reserved.</p>
            <p className="mb-6 text-orange-400">A product of Mercurius Solutions</p>
            <p className="text-xs">Built with ❤️ in Cape Coral, Florida</p>
          </div>
        </div>
      </footer>

      {/* PLAN MY VIBE MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-100">
          <div className="bg-zinc-900 rounded-3xl max-w-lg w-full mx-4 p-8 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold">Plan My Vibe</h2>
              <button onClick={() => { setIsModalOpen(false); setItinerary(null); }} className="text-4xl leading-none text-zinc-400 hover:text-white">✕</button>
            </div>

            {!itinerary ? (
              <div className="space-y-8">
                <div>
                  <p className="font-medium mb-3">What kind of vibe are you feeling?</p>
                  <div className="grid grid-cols-3 gap-3">
                    {['beach','adventure','foodie','romantic','family','relax'].map((type) => (
                      <button key={type} onClick={() => setVibeType(type)} className={`p-4 rounded-2xl text-sm font-medium transition-all ${vibeType === type ? 'bg-orange-500 text-white' : 'bg-zinc-800 hover:bg-zinc-700'}`}>
                        {type === 'beach' && '🏖️ Beach'}{type === 'adventure' && '🛶 Adventure'}{type === 'foodie' && '🍤 Foodie'}{type === 'romantic' && '🌅 Romantic'}{type === 'family' && '👨‍👧‍👦 Family'}{type === 'relax' && '🌴 Relax'}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-medium mb-2">How many people?</p>
                  <input type="range" min="1" max="10" value={groupSize} onChange={(e) => setGroupSize(e.target.value)} className="w-full accent-orange-500" />
                  <p className="text-center text-sm text-zinc-400 mt-1">{groupSize} people</p>
                </div>

                <div>
                  <p className="font-medium mb-3">Preferred start time?</p>
                  <div className="flex gap-3">
                    <button onClick={() => setTimeOfDay('morning')} className={`flex-1 py-4 rounded-2xl ${timeOfDay === 'morning' ? 'bg-orange-500' : 'bg-zinc-800'}`}>Morning</button>
                    <button onClick={() => setTimeOfDay('afternoon')} className={`flex-1 py-4 rounded-2xl ${timeOfDay === 'afternoon' ? 'bg-orange-500' : 'bg-zinc-800'}`}>Afternoon</button>
                    <button onClick={() => setTimeOfDay('evening')} className={`flex-1 py-4 rounded-2xl ${timeOfDay === 'evening' ? 'bg-orange-500' : 'bg-zinc-800'}`}>Evening</button>
                  </div>
                </div>

                <button onClick={generateItinerary} disabled={!vibeType || isLoading} className="w-full py-6 bg-white text-zinc-950 rounded-3xl text-xl font-semibold hover:scale-105 transition-all disabled:opacity-50">
                  {isLoading ? 'AI is thinking...' : 'Generate My Perfect Day 🌴'}
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <h3 className="text-3xl font-semibold">{itinerary.title}</h3>
                <p className="text-orange-400">{itinerary.date}</p>
                <div className="space-y-4">
                  {itinerary.highlights.map((item, i) => (
                    <div key={i} className="bg-zinc-800 rounded-3xl p-5 flex gap-5 items-start">
                      <span className="text-4xl shrink-0">🌴</span>
                      <div className="pt-1"><p className="font-medium text-lg">{item}</p></div>
                    </div>
                  ))}
                </div>

                <div className="rounded-3xl overflow-hidden border border-orange-500/30">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112000!2d-81.95!3d26.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db1f3c5f5f5f5f%3A0x5f5f5f5f5f5f5f5f!2sCape%20Coral%2C%20FL!5e0!3m2!1sen!2sus!4v1740000000000" width="100%" height="260" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>

                <div className="bg-orange-500/10 border border-orange-500/30 rounded-3xl p-6 text-sm flex justify-between items-center">
                  <div>
                    <p className="font-semibold">Estimated time: 8 hours</p>
                    <p className="text-orange-400">Cost range: $80–$250 per person</p>
                  </div>
                  <button onClick={saveCurrentTrip} className="px-6 py-3 bg-white text-zinc-950 rounded-3xl text-sm font-semibold">Save to My Trips</button>
                </div>

                <button onClick={() => setItinerary(null)} className="w-full py-4 bg-orange-500 hover:bg-orange-600 rounded-3xl font-semibold">Start Over</button>
              </div>
            )}

            <button onClick={() => { setIsModalOpen(false); setItinerary(null); }} className="mt-6 text-zinc-400 hover:text-white text-sm w-full">Close</button>
          </div>
        </div>
      )}

      {/* MY TRIPS MODAL */}
      {isMyTripsOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-100">
          <div className="bg-zinc-900 rounded-3xl max-w-lg w-full mx-4 p-8 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold">My Trips</h2>
              <button onClick={() => setIsMyTripsOpen(false)} className="text-4xl leading-none text-zinc-400 hover:text-white">✕</button>
            </div>

            {savedTrips.length === 0 ? (
              <p className="text-zinc-400 text-center py-12">No trips saved yet.<br />Generate one and click &quot;Save to My Trips&quot;!</p>
            ) : (
              <div className="space-y-4">
                {savedTrips.map((trip) => (
                  <div key={trip.id} className="bg-zinc-800 rounded-3xl p-6">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">{trip.title}</h3>
                        <p className="text-orange-400 text-sm">{trip.date}</p>
                      </div>
                      <button onClick={() => deleteTrip(trip.id)} className="text-red-400 text-sm">Delete</button>
                    </div>
                    <p className="text-xs text-zinc-400 mt-4 line-clamp-2">{trip.note}</p>
                  </div>
                ))}
              </div>
            )}

            <button onClick={() => setIsMyTripsOpen(false)} className="mt-8 w-full py-4 bg-zinc-800 hover:bg-zinc-700 rounded-3xl font-medium">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}