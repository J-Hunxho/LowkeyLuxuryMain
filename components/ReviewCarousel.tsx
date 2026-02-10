import React, { useState } from 'react';
import { Review } from '../types';

const reviews: Review[] = [
  {
    id: 1,
    clientName: "Alexander V.",
    role: "Founder, Fintech Alpha",
    rating: 5,
    content: "Our legacy system was crumbling. Lowkey Luxury re-architected the entire backend, reducing latency by 90% while we slept.",
    resolution: "Implemented serverless microservices with real-time data streaming.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    clientName: "Isabella R.",
    role: "CEO, Maison Digital",
    rating: 5,
    content: "I needed a website that didn't just look good, but felt expensive. The animations and responsiveness are unlike anything in our sector.",
    resolution: "Deployed a custom Next.js frontend with WebGL shaders and headless CMS.",
    imageUrl: "https://images.unsplash.com/photo-1467232004587-fc74ba697165?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    clientName: "Marcus T.",
    role: "CTO, Nexus Corp",
    rating: 5,
    content: "Security was a major concern for our high-net-worth portal. They locked it down with military-grade precision without sacrificing speed.",
    resolution: "Full Cloudflare Enterprise setup, custom WAF rules, and end-to-end encryption.",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2068&auto=format&fit=crop"
  },
  {
    id: 4,
    clientName: "Sarah J.",
    role: "Director, Art Basel Connect",
    rating: 5,
    content: "We needed to automate our VIP intake. The bot they built handles thousands of inquiries with the tone of a human concierge.",
    resolution: "Engineered a multi-platform NLP bot network integrated with HubSpot.",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
  }
];

const ReviewCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const currentReview = reviews[activeIndex];

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gold-200 to-gold-600 mb-4">
          Case Studies & Impact
        </h2>
        <div className="h-0.5 w-24 bg-gold-600 mx-auto opacity-50"></div>
      </div>

      <div className="relative bg-obsidian/80 backdrop-blur-lg border border-gold-800/40 rounded-xl overflow-hidden shadow-[0_10px_50px_-12px_rgba(212,175,55,0.15)] transition-all duration-500">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
          
          {/* Image Section */}
          <div className="relative h-64 lg:h-full w-full overflow-hidden border-b lg:border-b-0 lg:border-r border-gold-800/30 group">
             <div className="absolute inset-0 bg-gold-900/20 z-10 mix-blend-overlay"></div>
             {currentReview.imageUrl && (
               <img 
                 src={currentReview.imageUrl} 
                 alt="Project Showcase" 
                 className="w-full h-full object-cover transition-transform duration-1000 transform scale-100 group-hover:scale-110 opacity-80"
               />
             )}
             <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent z-20">
               <span className="inline-block px-3 py-1 border border-gold-500/50 text-gold-300 text-[10px] uppercase tracking-widest bg-black/50 backdrop-blur-sm rounded-full">
                 Project Visualization
               </span>
             </div>
          </div>

          {/* Content Section */}
          <div className="p-8 md:p-12 flex flex-col justify-center relative">
            
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 opacity-10 pointer-events-none">
              <svg className="w-24 h-24 text-gold-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21L14.017 18C14.017 16.0547 15.3789 13.6328 17.5898 11.2109C16.2929 11.2109 15.2422 10.3672 15.2422 8.78516C15.2422 7.20312 16.4883 6 18.2578 6C19.9219 6 21.0547 7.23047 21.0547 9.07031C21.0547 12.3359 18.0078 17.6562 14.017 21ZM5 21L5 18C5 16.0547 6.36328 13.6328 8.57422 11.2109C7.27734 11.2109 6.22656 10.3672 6.22656 8.78516C6.22656 7.20312 7.47266 6 9.24219 6C10.9062 6 12.0391 7.23047 12.0391 9.07031C12.0391 12.3359 8.99219 17.6562 5 21Z" />
              </svg>
            </div>

            <div className="flex space-x-1 mb-6">
              {[...Array(currentReview.rating)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            
            <p className="font-serif text-xl md:text-2xl italic text-gray-200 leading-relaxed mb-8 relative z-10">
              "{currentReview.content}"
            </p>

            <div className="bg-gold-900/20 border border-gold-700/20 p-5 rounded-lg mb-8 backdrop-blur-sm">
               <p className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-2 flex items-center">
                 <svg className="w-3 h-3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
                 The Resolution
               </p>
               <p className="text-gray-400 text-sm leading-relaxed">{currentReview.resolution}</p>
            </div>

            <div className="mt-auto">
              <h4 className="font-bold text-gold-100 text-lg">{currentReview.clientName}</h4>
              <p className="text-gold-500/70 text-sm uppercase tracking-wide">{currentReview.role}</p>
            </div>

          </div>
        </div>

        {/* Controls */}
        <button 
          onClick={prevReview}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-gold-900/80 text-gold-100 rounded-full backdrop-blur-md border border-gold-500/30 transition-all z-30"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={nextReview}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-gold-900/80 text-gold-100 rounded-full backdrop-blur-md border border-gold-500/30 transition-all z-30"
        >
           <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {reviews.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`h-1 transition-all duration-300 ${
              idx === activeIndex ? 'w-8 bg-gold-500' : 'w-2 bg-gray-700'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewCarousel;