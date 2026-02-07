import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Forum from './pages/Forum';
import Library from './pages/Library';
import Market from './pages/Market';
import Referrals from './pages/Referrals';
import AIAssistant from './components/AIAssistant';
import { LANGUAGES } from './constants';
import { Language } from './types';

const App: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<Language>(Language.ENGLISH);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col relative">
        {/* Navigation */}
        <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100 h-24 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Link to="/" className="flex items-center space-x-4">
                  <div className="bg-green-700 text-white p-3 rounded-[1.25rem] shadow-xl shadow-green-700/20">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-extrabold text-2xl text-green-900 leading-none tracking-tight">E-Farmer Hub</span>
                    <span className="text-[10px] text-clay font-bold tracking-[0.2em] uppercase mt-1.5">Gulu District • Uganda</span>
                  </div>
                </Link>
              </div>

              {/* Desktop Nav */}
              <div className="hidden lg:flex items-center space-x-10">
                <Link to="/" className="text-gray-700 hover:text-green-700 font-bold text-sm transition-colors uppercase tracking-widest">Home</Link>
                <Link to="/forum" className="text-gray-700 hover:text-green-700 font-bold text-sm transition-colors uppercase tracking-widest">Village Forum</Link>
                <Link to="/library" className="text-gray-700 hover:text-green-700 font-bold text-sm transition-colors uppercase tracking-widest">Library</Link>
                <Link to="/market" className="text-gray-700 hover:text-green-700 font-bold text-sm transition-colors uppercase tracking-widest">Market</Link>
                <Link to="/referrals" className="text-gray-700 hover:text-green-700 font-bold text-sm transition-colors uppercase tracking-widest">Services</Link>
                
                <div className="h-8 w-px bg-gray-200"></div>

                <select 
                  value={currentLang}
                  onChange={(e) => setCurrentLang(e.target.value as Language)}
                  className="bg-gray-50 border border-gray-200 text-[10px] font-black rounded-xl focus:ring-green-500 focus:border-green-500 p-3 cursor-pointer uppercase tracking-widest"
                >
                  {LANGUAGES.map(lang => (
                    <option key={lang.code} value={lang.code}>{lang.name}</option>
                  ))}
                </select>

                <button className="bg-clay text-white px-8 py-3 rounded-2xl font-bold hover:bg-green-800 transition-all shadow-xl shadow-clay/20 text-sm">
                  Login
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden flex items-center">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 p-3 hover:bg-gray-100 rounded-2xl transition">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white border-t border-gray-100 p-8 space-y-8 shadow-2xl absolute top-full left-0 w-full animate-in fade-in slide-in-from-top-4 duration-300">
              <div className="grid grid-cols-2 gap-4">
                <Link to="/" onClick={() => setIsMenuOpen(false)} className="p-6 bg-gray-50 rounded-3xl text-center font-bold text-gray-700">Home</Link>
                <Link to="/forum" onClick={() => setIsMenuOpen(false)} className="p-6 bg-gray-50 rounded-3xl text-center font-bold text-gray-700">Forum</Link>
                <Link to="/library" onClick={() => setIsMenuOpen(false)} className="p-6 bg-gray-50 rounded-3xl text-center font-bold text-gray-700">Library</Link>
                <Link to="/market" onClick={() => setIsMenuOpen(false)} className="p-6 bg-gray-50 rounded-3xl text-center font-bold text-gray-700">Market</Link>
              </div>
              <div className="pt-2">
                <select 
                  value={currentLang}
                  onChange={(e) => setCurrentLang(e.target.value as Language)}
                  className="w-full bg-gray-50 border border-gray-200 text-sm font-bold rounded-2xl p-5 uppercase tracking-widest"
                >
                  {LANGUAGES.map(lang => (
                    <option key={lang.code} value={lang.code}>{lang.name}</option>
                  ))}
                </select>
              </div>
              <button className="w-full bg-clay text-white px-4 py-5 rounded-3xl font-extrabold shadow-xl text-lg">Login to Portal</button>
            </div>
          )}
        </nav>

        {/* Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home language={currentLang} />} />
            <Route path="/forum" element={<Forum language={currentLang} />} />
            <Route path="/library" element={<Library language={currentLang} />} />
            <Route path="/market" element={<Market language={currentLang} />} />
            <Route path="/referrals" element={<Referrals language={currentLang} />} />
          </Routes>
        </main>

        {/* Floating AI Assistant */}
        <AIAssistant language={currentLang} />

        {/* Footer with African Savanna Motif */}
        <footer className="bg-green-950 text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 african-pattern pointer-events-none"></div>
          
          {/* Subtle Hut Ornaments in Footer */}
          <div className="absolute bottom-0 right-0 w-1/4 h-32 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
              <path d="M50 100 L250 100 L150 0 Z" fill="white" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 text-center md:text-left relative z-10">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-8 justify-center md:justify-start">
                <div className="bg-white/10 p-3 rounded-2xl">
                  <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black tracking-tight">E-Farmer Hub</h3>
              </div>
              <p className="text-green-100/60 text-lg max-w-md leading-relaxed">
                Solidarity Learning and Exchange rooted in Gulu-Northern Uganda, serving the Savanna. Empowering different communities through sustainable conservation.
              </p>
            </div>
            
            <div>
              <h4 className="text-yellow-400 font-bold mb-8 uppercase tracking-[0.3em] text-xs">Directory</h4>
              <ul className="space-y-5 text-sm font-semibold">
                <li><Link to="/forum" className="hover:text-yellow-400 transition-colors">Village Forum</Link></li>
                <li><Link to="/library" className="hover:text-yellow-400 transition-colors">E-Library</Link></li>
                <li><Link to="/market" className="hover:text-yellow-400 transition-colors">Digital Market</Link></li>
                <li><Link to="/referrals" className="hover:text-yellow-400 transition-colors">Social Services</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-yellow-400 font-bold mb-8 uppercase tracking-[0.3em] text-xs">Follow us</h4>
              <div className="text-green-100/80 text-sm space-y-4 font-bold leading-relaxed flex flex-col items-center md:items-start">
                {/* TikTok */}
                <div className="flex items-center space-x-3 group cursor-default">
                  <div className="bg-white/10 p-2 rounded-lg group-hover:bg-yellow-400 group-hover:text-green-950 transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.59-1.01V14.5c.03 5.38-4.43 9.77-9.81 9.77-5.38 0-9.74-4.38-9.74-9.76 0-5.38 4.36-9.75 9.74-9.75.11 0 .22 0 .33.01V8.84c-1.43-.22-2.92.17-3.95 1.22-1.03 1.05-1.42 2.54-1.2 3.97.22 1.43 1.17 2.66 2.5 3.19 1.33.53 2.87.35 3.97-.54.67-.54 1.07-1.34 1.07-2.18V.02z"/>
                    </svg>
                  </div>
                  <span className="group-hover:text-white transition-colors">@ida_uganda</span>
                </div>
                
                {/* Instagram */}
                <div className="flex items-center space-x-3 group cursor-default">
                  <div className="bg-white/10 p-2 rounded-lg group-hover:bg-yellow-400 group-hover:text-green-950 transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </div>
                  <span className="group-hover:text-white transition-colors">@ida_uganda</span>
                </div>

                {/* X (Twitter) */}
                <div className="flex items-center space-x-3 group cursor-default">
                  <div className="bg-white/10 p-2 rounded-lg group-hover:bg-yellow-400 group-hover:text-green-950 transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153ZM17.61 20.644h2.039L6.486 3.24H4.298l13.312 17.404Z"/>
                    </svg>
                  </div>
                  <span className="group-hover:text-white transition-colors">IDA_Uganda</span>
                </div>

                {/* Youtube */}
                <div className="flex items-center space-x-3 group cursor-default">
                  <div className="bg-white/10 p-2 rounded-lg group-hover:bg-yellow-400 group-hover:text-green-950 transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505a3.017 3.017 0 0 0-2.122 2.136C0 8.055 0 12 0 12s0 3.945.501 5.814a3.017 3.017 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.945 24 12 24 12s0-3.945-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <span className="group-hover:text-white transition-colors">@idauganda7590</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20 pt-10 border-t border-white/5 text-center">
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-green-100/40 text-[10px] font-bold uppercase tracking-[0.4em]">
                © 2026 Intercultural Development Agency (IDA). All rights reserved.
              </p>
              <p className="text-green-100/30 text-[11px] leading-relaxed italic">
                This app is provided free of charge. Its content, design, and software may not be reproduced, modified, redistributed, or used for commercial purposes without prior written permission.
              </p>
              <p className="text-green-100/20 text-[9px] uppercase tracking-widest mt-4">
                Supporting SDGs 1.5, 4, 5, 17 and UNFCCC Article 7 Adaptation Goals.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;