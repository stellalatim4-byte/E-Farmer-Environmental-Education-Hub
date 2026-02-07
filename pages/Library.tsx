
import React, { useState } from 'react';
import { LIBRARY_ITEMS, LANGUAGES } from '../constants';
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
          <h1 className="text-4xl font-bold text-gray-900">E-Library: Knowledge Hub</h1>
          <p className="mt-4 text-gray-600">Access best practices, research, and lessons learnt translated into local languages.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {['all', 'cooperative', 'refugee', 'vsla', 'household'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium capitalize transition ${
                filter === cat 
                  ? 'bg-green-700 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col border border-gray-100">
              <div className="h-3 bg-green-700"></div>
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded uppercase">
                    {item.category}
                  </span>
                  <div className="flex -space-x-2">
                    {item.languages.map(lang => (
                      <div key={lang} className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[10px] font-bold" title={lang}>
                        {lang.substring(0,2).toUpperCase()}
                      </div>
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-6">{item.description}</p>
                <button className="w-full flex items-center justify-center space-x-2 bg-gray-50 text-gray-700 py-3 rounded-xl border-2 border-dashed border-gray-200 hover:bg-green-50 hover:border-green-200 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Download Resources</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Translation Call-to-action */}
        <div className="mt-16 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Help us Translate!</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            We are looking for volunteers to help translate agricultural content into 
            <strong> Acholi, Luganda, Madi, Runyakitara, Lumasaba, Kupsabiny, and Ateso</strong>.
          </p>
          <button className="bg-green-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-800 transition">
            Apply as Volunteer Translator
          </button>
        </div>
      </div>
    </div>
  );
};

export default Library;
