import React, { useState } from 'react';
import ParticleBackground from './components/ParticleBackground';
import ReviewCarousel from './components/ReviewCarousel';
import ChatInterface from './components/ChatInterface';
import ServiceBooking from './components/ServiceBooking';
import AuthModal from './components/AuthModal';
import { AuthProvider, useAuth } from './contexts/AuthContext';

// Navigation Component to access Auth Context
const NavBar: React.FC<{ onAuthClick: () => void }> = ({ onAuthClick }) => {
  const { user, logout } = useAuth();
  
  return (
    <nav className="fixed w-full z-50 top-0 left-0 bg-obsidian/90 backdrop-blur-md border-b border-gold-900/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="./logo.png" 
            alt="Lowkey Luxury" 
            className="h-16 w-auto object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]"
            onError={(e) => {
              // Fallback if image fails to load
              e.currentTarget.style.display = 'none';
              const nextEl = e.currentTarget.nextElementSibling;
              if (nextEl) (nextEl as HTMLElement).style.display = 'block';
            }}
          />
          <div className="hidden font-serif text-2xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600 font-bold">
            LOWKEY LUXURY
          </div>
        </div>

        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-gray-400 font-light">
          <a href="#consult" className="hover:text-gold-400 transition-colors">Architect</a>
          <a href="#services" className="hover:text-gold-400 transition-colors">Tech Stacks</a>
          <a href="#philosophy" className="hover:text-gold-400 transition-colors">Philosophy</a>
          <a href="#reviews" className="hover:text-gold-400 transition-colors">Impact</a>
        </div>
        
        {user ? (
          <div className="flex items-center space-x-4">
             <span className="text-xs text-gold-500 uppercase tracking-wider hidden md:block">
               {user.name}
             </span>
             <button 
               onClick={() => logout()}
               className="px-6 py-2 border border-gray-700 rounded-sm text-xs uppercase tracking-[0.2em] text-gray-400 hover:border-gold-500/50 hover:text-gold-400 transition-all"
             >
               Sign Out
             </button>
          </div>
        ) : (
          <button 
            onClick={onAuthClick}
            className="px-6 py-2 border border-gold-500/50 rounded-sm text-xs uppercase tracking-[0.2em] hover:bg-gold-500 hover:text-black transition-all duration-300"
          >
            Access
          </button>
        )}
      </div>
    </nav>
  );
};

const AppContent: React.FC = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-obsidian text-gold-100 overflow-x-hidden selection:bg-gold-500 selection:text-black">
      <ParticleBackground />
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
      
      <NavBar onAuthClick={() => setIsAuthModalOpen(true)} />

      {/* Hero Section */}
      <header className="relative z-10 pt-44 pb-20 px-6 max-w-7xl mx-auto text-center min-h-[70vh] flex flex-col justify-center">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight animate-fade-in">
          <span className="block text-gray-300">Architects of</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-gold-200 to-gold-600">
            Digital Reality
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-12">
          From bespoke websites to military-grade infrastructure.
          We architect the complete production of your vision, managing your online presence with code that feels like luxury.
        </p>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 space-y-32 pb-20">
        
        {/* Chat Section */}
        <section id="consult" className="scroll-mt-24">
           <div className="text-center mb-10">
             <h2 className="font-serif text-3xl text-gold-200 mb-2">The Solutions Architect</h2>
             <p className="text-sm text-gray-500 uppercase tracking-widest">Discuss Your Stack With AI</p>
           </div>
           <ChatInterface />
        </section>

        {/* Services & Booking Section (New) */}
        <section id="services" className="scroll-mt-24">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gold-200 to-gold-600 mb-4">
              Tech Stack Acquisition
            </h2>
            <div className="h-0.5 w-24 bg-gold-600 mx-auto opacity-50 mb-6"></div>
            <p className="text-gray-400 font-light max-w-xl mx-auto">
              Select your infrastructure. Bespoke websites, secure cloud setups, and automated social ecosystems.
            </p>
          </div>
          <ServiceBooking onRequireAuth={() => setIsAuthModalOpen(true)} />
        </section>

        {/* Philosophy/Info Grid */}
        <section id="philosophy" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Architecture", desc: "We build scalable, resilient systems. Your back-end should be as robust as a bank vault and as fast as thought." },
            { title: "Security", desc: "Digital fortresses. We deploy Cloudflare, SSL, and custom firewalls to ensure your brand is untouchable." },
            { title: "Interface", desc: "Front-end development that transcends utility. We create digital experiences that feel intuitive, seamless, and elite." }
          ].map((item, i) => (
            <div key={i} className="p-8 border border-gold-900/30 bg-black/40 backdrop-blur-sm hover:border-gold-700/50 transition-colors duration-500 group">
              <h3 className="font-serif text-2xl text-gold-400 mb-4 group-hover:text-gold-200 transition-colors">{item.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* Review Carousel */}
        <section id="reviews">
          <ReviewCarousel />
        </section>

        {/* CTA */}
        <section className="text-center py-20 border-t border-gold-900/30">
          <h2 className="font-serif text-4xl mb-8 text-gray-200">Ready to Build?</h2>
          <button 
             onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
             className="px-10 py-4 bg-gold-600 text-black font-bold uppercase tracking-widest text-sm hover:bg-gold-400 transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          >
            Initiate Production
          </button>
        </section>

      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gold-900/20 bg-black py-12 text-center text-gray-600 text-xs uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} Lowkey Luxury. All Rights Reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="hover:text-gold-500 transition-colors">Privacy</a>
          <a href="#" className="hover:text-gold-500 transition-colors">Terms</a>
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;