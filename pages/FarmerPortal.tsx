
import React, { useState } from 'react';
import { Language } from '../types';

interface FarmerPortalProps {
  language: Language;
}

const FarmerPortal: React.FC<FarmerPortalProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<'profiling' | 'tracking' | 'risk' | 'nature'>('profiling');
  const [plotSize, setPlotSize] = useState<string>('');
  const [yieldKg, setYieldKg] = useState<string>('');
  const [inputKg, setInputKg] = useState<string>('');
  const [alertType, setAlertType] = useState<string>('drought');

  // Simple Nature Capital Accounting Logic
  const dieselSavings = (Number(yieldKg) || 0) * 0.15; // Mock calculation
  const co2Saved = dieselSavings * 2.68; // Standard conversion factor

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header with Investor Context */}
      <div className="bg-green-900 py-12 px-4 border-b-8 border-yellow-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-white">
            <h1 className="text-4xl font-black tracking-tight mb-2">Impact Data Portal</h1>
            <p className="text-green-100/70 max-w-xl font-medium">
              Transforming smallholder wisdom into high-integrity data feeds
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 text-white w-full md:w-auto">
            <div className="text-[10px] uppercase font-black text-yellow-400 mb-2">Village Dealflow Status</div>
            <div className="flex items-center space-x-4">
              <div className="h-2 flex-grow bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-yellow-400 w-3/4"></div>
              </div>
              <span className="font-bold">Cohort 7 (Active)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Interface */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="space-y-2">
            {[
              { id: 'profiling', icon: '📍', label: 'Plot Profiling', desc: 'GPS & Soil Baselines' },
              { id: 'tracking', icon: '📈', label: 'Yield Tracker', desc: 'Gap & Input Analytics' },
              { id: 'risk', icon: '🌩️', label: 'Risk Profile', desc: 'Climate Exposure Alert' },
              { id: 'nature', icon: '🌿', label: 'Nature Capital', desc: 'Carbon & Accounting' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full flex items-center space-x-4 p-5 rounded-[2rem] transition-all text-left border-2 ${
                  activeTab === tab.id 
                  ? 'bg-white border-green-700 shadow-xl scale-105' 
                  : 'bg-transparent border-transparent text-gray-500 hover:bg-gray-100'
                }`}
              >
                <span className="text-3xl">{tab.icon}</span>
                <div>
                  <div className={`font-black uppercase text-[10px] tracking-widest ${activeTab === tab.id ? 'text-green-700' : 'text-gray-400'}`}>
                    {tab.label}
                  </div>
                  <div className="text-xs font-bold opacity-70">{tab.desc}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-[3.5rem] shadow-sm border border-gray-100 p-8 md:p-12">
              {activeTab === 'profiling' && (
                <div className="animate-in fade-in duration-500">
                  <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                    <span className="mr-3">📍</span> Digital Plot Profiling
                  </h2>
                  <p className="text-gray-600 mb-10 font-medium">De-risk investments by providing precise GPS tagging and ownership status.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div className="space-y-4">
                      <label className="block text-xs font-black uppercase tracking-widest text-gray-400">Plot Size (Acres)</label>
                      <input 
                        type="number" 
                        value={plotSize}
                        onChange={(e) => setPlotSize(e.target.value)}
                        placeholder="e.g. 5.5"
                        className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl p-4 focus:border-green-700 focus:outline-none font-bold"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="block text-xs font-black uppercase tracking-widest text-gray-400">Land Tenure Status</label>
                      <select className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl p-4 focus:border-green-700 focus:outline-none font-bold">
                        <option>Customary (Northern Uganda)</option>
                        <option>Leasehold</option>
                        <option>Freehold</option>
                        <option>Communal</option>
                      </select>
                    </div>
                  </div>

                  <div className="bg-green-50 p-8 rounded-3xl border-2 border-dashed border-green-200">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                        🛰️
                      </div>
                      <div>
                        <div className="font-black text-xs uppercase text-green-700">GPS Validation</div>
                        <div className="text-[10px] text-green-600 font-bold">Required for impact dealflow</div>
                      </div>
                    </div>
                    <button className="bg-green-700 text-white px-8 py-4 rounded-2xl font-black hover:bg-green-800 transition shadow-lg">
                      Pin Current Coordinates
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'tracking' && (
                <div className="animate-in fade-in duration-500">
                  <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                    <span className="mr-3">📈</span> Yield Gap & Input Tracker
                  </h2>
                  <p className="text-gray-600 mb-10 font-medium">Tracking nutrient density and yield efficiency for transparency at scale.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div className="space-y-4">
                      <label className="block text-xs font-black uppercase tracking-widest text-gray-400">Total Harvest (KG)</label>
                      <input 
                        type="number" 
                        value={yieldKg}
                        onChange={(e) => setYieldKg(e.target.value)}
                        placeholder="e.g. 1200"
                        className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl p-4 focus:border-green-700 focus:outline-none font-bold"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="block text-xs font-black uppercase tracking-widest text-gray-400">Nutrients Applied (KG/HA)</label>
                      <input 
                        type="number" 
                        value={inputKg}
                        onChange={(e) => setInputKg(e.target.value)}
                        placeholder="e.g. 8.5"
                        className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl p-4 focus:border-green-700 focus:outline-none font-bold"
                      />
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-blue-900 text-xs font-bold leading-relaxed">
                    🚨 Note: Current regional average input is under 10kg/ha. Increasing input efficiency is a key KPI for impact deals.
                  </div>
                </div>
              )}

              {activeTab === 'risk' && (
                <div className="animate-in fade-in duration-500">
                  <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                    <span className="mr-3">🌩️</span> Climate Exposure Risk Profile
                  </h2>
                  <p className="text-gray-600 mb-10 font-medium">Real-time parish-level reporting of climate shocks to update investor impact baselines.</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                    {['Drought', 'Flood', 'Pests', 'Irregular Rain'].map(type => (
                      <button 
                        key={type}
                        onClick={() => setAlertType(type.toLowerCase())}
                        className={`p-6 rounded-3xl border-4 transition-all flex flex-col items-center ${
                          alertType === type.toLowerCase() 
                          ? 'border-clay bg-orange-50 scale-105' 
                          : 'border-transparent bg-gray-50 hover:bg-gray-100'
                        }`}
                      >
                        <span className="text-3xl mb-3">{type === 'Drought' ? '☀️' : type === 'Flood' ? '🌊' : type === 'Pests' ? '🐜' : '🌦️'}</span>
                        <span className="font-black uppercase text-[9px] tracking-widest text-clay">{type}</span>
                      </button>
                    ))}
                  </div>

                  <button className="w-full bg-clay text-white py-5 rounded-[2rem] font-black text-lg shadow-xl hover:-translate-y-1 transition-all">
                    Broadcast Parish-Level Alert
                  </button>
                </div>
              )}

              {activeTab === 'nature' && (
                <div className="animate-in fade-in duration-500">
                  <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                    <span className="mr-3">🌿</span> Nature Capital Accounting
                  </h2>
                  <p className="text-gray-600 mb-10 font-medium">Accounting for externalities and quantifying regenerative impact.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div className="bg-green-950 p-10 rounded-[3rem] text-white relative overflow-hidden">
                      <div className="relative z-10">
                        <div className="text-[10px] font-black uppercase text-yellow-400 tracking-widest mb-2">Carbon Offset Metric</div>
                        <div className="text-4xl font-black mb-1">{co2Saved.toFixed(2)} KG</div>
                        <div className="text-xs text-green-100/60 font-bold uppercase tracking-widest">Estimated CO2 Saved</div>
                        <div className="mt-8 text-[10px] text-green-100/40 leading-relaxed italic">
                          Calculated based on transition from diesel pumps to solar irrigation systems.
                        </div>
                      </div>
                      <div className="absolute top-0 right-0 p-8 opacity-10">
                        ☀️
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                        <h4 className="font-bold text-gray-900 mb-2">Regenerative Indicators</h4>
                        <div className="space-y-4">
                          <label className="flex items-center space-x-3 cursor-pointer group">
                            <input type="checkbox" className="w-5 h-5 rounded-lg border-2 border-gray-300 text-green-700 focus:ring-green-700" />
                            <span className="text-sm font-bold text-gray-600 group-hover:text-gray-900">Biochar Application?</span>
                          </label>
                          <label className="flex items-center space-x-3 cursor-pointer group">
                            <input type="checkbox" className="w-5 h-5 rounded-lg border-2 border-gray-300 text-green-700 focus:ring-green-700" />
                            <span className="text-sm font-bold text-gray-600 group-hover:text-gray-900">Intercropping Practiced?</span>
                          </label>
                        </div>
                      </div>
                      <button className="w-full border-4 border-green-700 text-green-700 py-4 rounded-2xl font-black hover:bg-green-700 hover:text-white transition-all uppercase tracking-widest text-xs">
                        Generate Nature Capital Report
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerPortal;
