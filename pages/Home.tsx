
import React from 'react';
import { Language } from '../types';
import { SERVICE_REFERRALS } from '../constants';
import { Link } from 'react-router-dom';

const QuickAction = ({ icon, title, desc, to, color }: { icon: string, title: string, desc: string, to: string, color: string }) => (
  <Link to={to} className="flex flex-col items-center p-6 bg-white rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-green-600 group">
    <div className={`w-20 h-20 ${color} rounded-3xl flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <h3 className="font-bold text-gray-900 text-lg mb-1">{title}</h3>
    <p className="text-gray-500 text-xs text-center">{desc}</p>
  </Link>
);

const Home: React.FC<{ language: Language }> = () => {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 african-pattern pointer-events-none"></div>

      {/* Sync Status - Reassuring Offline-First UI */}
      <div className="bg-green-50 py-2 px-4 border-b border-green-100 flex justify-center items-center space-x-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-[10px] font-bold text-green-700 uppercase tracking-widest">Village Sync Active • Working Offline</span>
      </div>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&q=80&w=1920" 
            alt="African Farm" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white z-20">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1 bg-yellow-400 text-green-950 font-black rounded-full text-[10px] uppercase tracking-widest mb-6">
              VIRTUAL WANG-OO
            </span>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Smart Farming <br/>
              <span className="text-yellow-400">Made Simple.</span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed font-medium">
              We help you grow more, sell better, and protect your soil using village wisdom and digital tools.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/market" className="bg-yellow-400 text-green-950 px-8 py-4 rounded-2xl font-bold hover:bg-white transition-all shadow-xl">
                Check Market Prices
              </Link>
              <Link to="/forum" className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all">
                Ask the Community
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Dashboard for Low-Literacy Support */}
      <section className="py-20 px-4 -mt-20 relative z-30">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <QuickAction icon="🌱" title="My Crops" desc="Planting calendar" to="/library" color="bg-green-100" />
            <QuickAction icon="💰" title="Best Prices" desc="Today's market" to="/market" color="bg-yellow-100" />
            <QuickAction icon="🌦️" title="Weather" desc="Local alerts" to="/forum" color="bg-blue-100" />
            <QuickAction icon="🤝" title="Find Help" desc="Extension services" to="/referrals" color="bg-orange-100" />
          </div>
        </div>
      </section>

      {/* Direct Human Support Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto bg-clay rounded-[4rem] p-10 md:p-20 text-white flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-black mb-6">Real Help from <br/> Real People</h2>
            <p className="text-orange-100 text-lg mb-8 leading-relaxed">
              Don't struggle alone. Our hub links you directly with Village Extension Officers and verified veteran farmers in Gulu.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-2xl">
                <span className="text-2xl">📢</span>
                <span className="font-bold">Voice Assistance Available via Aki AI</span>
              </div>
              <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-2xl">
                <span className="text-2xl">✅</span>
                <span className="font-bold">Verified Expert Advice Only</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-3xl text-center">
              <div className="text-clay font-black text-3xl mb-1">200+</div>
              <div className="text-gray-500 text-xs font-bold uppercase">Local Experts</div>
            </div>
            <div className="bg-white p-6 rounded-3xl text-center">
              <div className="text-clay font-black text-3xl mb-1">50+</div>
              <div className="text-gray-500 text-xs font-bold uppercase">Villages Linked</div>
            </div>
          </div>
        </div>
      </section>

      {/* Acknowledgement Section */}
      <section className="py-24 px-4 bg-gray-50/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-4 bg-green-100 rounded-2xl mb-8">
            <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-8 tracking-tight">Acknowledgement</h2>
          <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-sm border border-gray-100 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-green-950 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
              Partner Recognition
            </div>
            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              We gratefully acknowledge the support, collaboration, and contributions of our partner organizations based in Uganda. In particular, we recognize the <span className="text-green-800 font-bold">Professor Kupuliano Odaet Foundation (PKOF)</span>, the <span className="text-green-800 font-bold">Intercultural Development Agency (IDA)</span>, and <span className="text-green-800 font-bold">Esspys Cleaning Services Limited</span> for their commitment to community development, innovation, and sustainable impact. Their collective efforts continue to strengthen local initiatives and improve livelihoods across the communities we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Call To Action (CTA) Section */}
      <section className="py-24 px-4 bg-white relative">
        <div className="max-w-5xl mx-auto">
          <div className="bg-clay p-10 md:p-20 rounded-[4rem] text-white shadow-2xl relative overflow-hidden border-8 border-yellow-400/20">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">Call To Action (CTA)</h2>
              
              <div className="space-y-4 mb-12">
                <p className="text-xl md:text-2xl font-bold text-yellow-400">Keep our apps free for every user.</p>
                <p className="text-lg md:text-xl font-medium text-orange-50">Help us grow thriving communities together. ✨</p>
                <p className="text-lg md:text-xl font-medium text-orange-50">Support our work in AGRITECH and community initiatives.</p>
              </div>

              <div className="mb-12">
                <a 
                  href="https://idawellness.vendblue.store/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-yellow-400 text-green-950 px-10 py-6 rounded-3xl font-black text-xl hover:bg-white transition-all transform hover:-translate-y-2 shadow-xl"
                >
                  <span>👉 Purchase the eBook and invest in AGRITECH</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              <div className="max-w-2xl mx-auto">
                <p className="text-orange-100/80 text-sm leading-relaxed italic border-t border-white/10 pt-8">
                  Every contribution from friends around the world helps us expand community initiatives, create jobs, and strengthen local food systems. Your generosity helps us go further.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
