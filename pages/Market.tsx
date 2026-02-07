
import React from 'react';
import { Language } from '../types';

const PriceTicker = () => (
  <div className="bg-gray-900 py-3 overflow-hidden whitespace-nowrap border-b border-gray-800">
    <div className="inline-block animate-marquee hover:pause flex items-center space-x-12">
      {[
        { crop: 'Maize', price: '1,200 UGX/kg', trend: 'up' },
        { crop: 'Simsim', price: '4,500 UGX/kg', trend: 'down' },
        { crop: 'Shea Nuts', price: '3,200 UGX/kg', trend: 'up' },
        { crop: 'Coffee (Robusta)', price: '6,800 UGX/kg', trend: 'stable' },
        { crop: 'Beans (Nambale)', price: '2,500 UGX/kg', trend: 'up' }
      ].map((item, i) => (
        <div key={i} className="inline-flex items-center space-x-2 text-[11px] font-black uppercase tracking-widest text-white">
          <span className="text-yellow-400">{item.crop}</span>
          <span className="text-gray-400">{item.price}</span>
          <span className={item.trend === 'up' ? 'text-green-500' : item.trend === 'down' ? 'text-red-500' : 'text-blue-500'}>
            {item.trend === 'up' ? '▲' : item.trend === 'down' ? '▼' : '●'}
          </span>
        </div>
      ))}
    </div>
    <style dangerouslySetInnerHTML={{ __html: `
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-marquee {
        display: inline-flex;
        animation: marquee 30s linear infinite;
        width: max-content;
      }
    `}} />
  </div>
);

const Market: React.FC<{ language: Language }> = () => {
  return (
    <div className="bg-white min-h-screen">
      <PriceTicker />

      {/* Search Header */}
      <div className="bg-green-700 py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 african-pattern"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-1 bg-yellow-400 text-green-900 font-bold rounded-full text-xs uppercase tracking-widest mb-6">
            Transparent Market Access
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Cut the Middleman.</h1>
          <p className="text-green-100 mb-8 text-lg font-medium">See real prices in Gulu and link directly with verified buyers.</p>
          
          <div className="bg-white p-2 rounded-3xl shadow-2xl flex flex-col md:flex-row gap-2 border-4 border-white/20 max-w-2xl mx-auto">
            <input 
              type="text" 
              placeholder="What are you harvesting? (e.g. Maize)" 
              className="flex-grow p-4 rounded-2xl focus:outline-none font-bold text-gray-800"
            />
            <button className="bg-green-700 text-white px-8 py-4 rounded-2xl font-black hover:bg-green-800 transition">
              Find Buyers
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Verification & Trust Gaps addressed here */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-blue-50 border border-blue-100 p-8 rounded-[3rem] text-center">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="font-black text-blue-900 uppercase tracking-widest text-xs mb-2">Verified Buyers Only</h3>
            <p className="text-blue-800 text-sm">Every trader on our platform is vetted by local cooperatives to ensure fair and timely payment.</p>
          </div>
          <div className="bg-green-50 border border-green-100 p-8 rounded-[3rem] text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="font-black text-green-900 uppercase tracking-widest text-xs mb-2">Digital Escrow</h3>
            <p className="text-green-800 text-sm">Payments are held securely and released only when the produce reaches the collection point.</p>
          </div>
          <div className="bg-yellow-50 border border-yellow-100 p-8 rounded-[3rem] text-center">
            <div className="text-4xl mb-4">📦</div>
            <h3 className="font-black text-yellow-900 uppercase tracking-widest text-xs mb-2">Group Selling</h3>
            <p className="text-yellow-800 text-sm">Pool your harvest with neighbors to get bulk transport rates and higher prices from big traders.</p>
          </div>
        </div>

        {/* Featured Section */}
        <div className="bg-gray-50 rounded-[4rem] p-10 md:p-16 flex flex-col lg:flex-row items-center gap-12 border border-gray-100">
           <div className="lg:w-1/2">
             <h2 className="text-4xl font-black text-gray-900 mb-6">Join the <span className="text-green-700">Digital Supply Chain</span></h2>
             <p className="text-gray-600 text-lg mb-8 leading-relaxed">
               Powered by **Fromy Farm**, we give you a digital profile that tracks your yields and reputation. High ratings from buyers mean easier access to seasonal loans.
             </p>
             <a 
               href="https://www.fromyfarm.app/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-block bg-green-700 text-white px-10 py-5 rounded-2xl font-black shadow-xl hover:-translate-y-1 transition-all"
             >
               Start Selling Now
             </a>
           </div>
           <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              {[
                { name: "John O.", crop: "Maize", rating: "4.9/5", status: "Verified Farmer" },
                { name: "Gulu Millers", crop: "Buyer", rating: "4.8/5", status: "Verified Buyer" },
              ].map((user, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-green-500">⭐</span>
                    <span className="font-black text-sm">{user.rating}</span>
                  </div>
                  <h4 className="font-bold text-gray-900">{user.name}</h4>
                  <p className="text-gray-500 text-xs mb-3">{user.crop}</p>
                  <span className="text-[10px] font-black uppercase text-green-700 bg-green-50 px-2 py-1 rounded-full">
                    {user.status}
                    {/* Fixed: Replaced incorrect closing </div> with </span> */}
                  </span>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
