
import React, { useState } from 'react';
import { Language, ForumPost } from '../types';

interface ForumProps {
  language: Language;
}

const MOCK_POSTS: ForumPost[] = [];

const Forum: React.FC<ForumProps> = () => {
  const [posts] = useState<ForumPost[]>(MOCK_POSTS);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Visual Categories for navigation */}
      <div className="flex flex-wrap gap-4 mb-12 justify-center">
        {[
          { icon: '🐜', name: 'Pest Control' },
          { icon: '🐄', name: 'Livestock' },
          { icon: '💰', name: 'Prices' },
          { icon: '🚜', name: 'Equipment' },
          { icon: '🤝', name: 'Cooperatives' }
        ].map(cat => (
          <button key={cat.name} className="flex flex-col items-center p-4 bg-white rounded-3xl shadow-sm border border-gray-100 hover:border-green-600 transition-all w-28">
            <span className="text-3xl mb-2">{cat.icon}</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">{cat.name}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">Village Square</h1>
            <button className="bg-green-700 text-white px-6 py-3 rounded-2xl font-bold hover:bg-green-800 shadow-lg">
              Post a Question
            </button>
          </div>

          {posts.length === 0 && (
            <div className="text-center py-24 bg-white rounded-[3rem] border-4 border-dashed border-gray-100">
              <div className="text-6xl mb-6">🌳</div>
              <p className="text-gray-400 font-bold text-xl mb-4">The Wang-oo is ready for your stories.</p>
              <p className="text-gray-400 text-sm max-w-xs mx-auto">Click "Post a Question" to start a conversation with other farmers in Gulu.</p>
            </div>
          )}
        </div>

        {/* Accountability & Human Support Sidebar */}
        <div className="space-y-8">
          <div className="bg-clay p-8 rounded-[3rem] text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-black text-xl mb-4 tracking-tight">Expert Corner</h3>
              <p className="text-orange-100 text-sm mb-6 leading-relaxed">
                Questions tagged with #AskExpert are reviewed by local extension officers from MAAIF.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 bg-white/10 p-3 rounded-2xl">
                  <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-green-950 font-bold text-xs">A</div>
                  <div>
                    <span className="block font-bold text-xs">Aguti Martha</span>
                    <span className="text-[9px] uppercase font-black text-orange-200 tracking-widest">Extension Officer</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 p-3 rounded-2xl">
                  <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-green-950 font-bold text-xs">O</div>
                  <div>
                    <span className="block font-bold text-xs">Okello Peter</span>
                    <span className="text-[9px] uppercase font-black text-orange-200 tracking-widest">Coffee Specialist</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-sm">
            <h3 className="font-black text-gray-900 mb-4 uppercase tracking-[0.2em] text-[10px]">Community Safety</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-green-600">✓</span>
                <span className="text-xs text-gray-600 font-medium leading-relaxed">Report "fake news" or bad advice instantly.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-green-600">✓</span>
                <span className="text-xs text-gray-600 font-medium leading-relaxed">Always check the Expert Badge before acting.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forum;
