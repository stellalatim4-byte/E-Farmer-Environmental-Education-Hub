
import React, { useState } from 'react';
import { LIBRARY_ITEMS, ERASMUS_TOOLKIT_URL } from '../constants';
import { Language } from '../types';

interface LibraryProps {
  language: Language;
}

const Library: React.FC<LibraryProps> = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredItems = filter === 'all' 
    ? LIBRARY_ITEMS 
    : LIBRARY_ITEMS.filter(item => item.category === filter);

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-green-100 text-green-700 font-bold rounded-full text-[10px] uppercase tracking-widest mb-4">
            Knowledge Hub
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">E-Library Resources</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Access and view verified agricultural guides directly on host platforms. Translated for Gulu District.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {['all', 'cooperative', 'refugee', 'vsla', 'household'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${
                filter === cat 
                  ? 'bg-green-700 text-white shadow-lg scale-105' 
                  : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Resource Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-[2.5rem] shadow-sm overflow-hidden flex flex-col border border-gray-100 hover:shadow-xl transition-all group">
              <div className="h-3 bg-green-700 group-hover:h-4 transition-all"></div>
              <div className="p-8 flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-green-50 text-green-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                    {item.category}
                  </span>
                  <div className="flex -space-x-2">
                    {item.languages.map(lang => (
                      <div key={lang} className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[10px] font-black text-gray-500" title={lang}>
                        {lang.substring(0,2).toUpperCase()}
                      </div>
                    ))}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-8 leading-relaxed font-medium">{item.description}</p>
                
                <a 
                  href={item.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-3 py-4 rounded-2xl border-2 transition-all font-bold bg-gray-50 text-gray-800 border-dashed border-gray-200 hover:bg-green-50 hover:border-green-700 hover:text-green-700 group"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span>View on Host Site</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Section: EU Erasmus+ Humanness Toolkit */}
        <div className="mb-20 bg-blue-900 rounded-[3.5rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl border-8 border-white/5">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <svg className="w-48 h-48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/3">
              <div className="flex items-center space-x-4 mb-6">
                <span className="bg-yellow-400 text-blue-950 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                  Featured Resource
                </span>
                <span className="text-blue-200 text-xs font-bold border-l border-blue-700 pl-4">
                  EU Erasmus+ Funded
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">EU Erasmus+ <br/><span className="text-yellow-400">Humanness Toolkit</span></h2>
              <p className="text-blue-100 text-lg mb-10 leading-relaxed font-medium max-w-2xl">
                A comprehensive set of tools and methodologies for fostering human-centric values and collaborative social skills in agricultural settings. Access the official toolkit folder via our partner network.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href={ERASMUS_TOOLKIT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-xl flex items-center space-x-3 bg-yellow-400 text-blue-950 hover:bg-white active:scale-95 transform hover:-translate-y-1"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span>View Humanness Toolkit</span>
                </a>
              </div>
            </div>
            <div className="lg:w-1/3 flex justify-center">
              <div className="w-64 h-64 bg-white/10 rounded-[3rem] backdrop-blur-md flex items-center justify-center border border-white/20 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="text-center p-6">
                  <div className="text-6xl mb-4 drop-shadow-lg">🤝</div>
                  <div className="font-black text-[10px] uppercase tracking-[0.2em] text-yellow-400">Unity • Empathy • Growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-white p-10 md:p-16 rounded-[3rem] border border-gray-100 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Accessing these files offline?</h3>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto font-medium leading-relaxed">
            If you have limited internet access, visit your local community hub where these resources are pre-loaded on local servers and available for free printing.
          </p>
          <button className="bg-green-700 text-white px-10 py-4 rounded-2xl font-black hover:bg-green-800 transition shadow-xl hover:-translate-y-1">
            Find Local Community Hub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Library;
