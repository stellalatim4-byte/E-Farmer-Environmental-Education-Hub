
import React, { useState } from 'react';
import { Language } from '../types';

interface FarmerPortalProps {
  language: Language;
}

const FarmerPortal: React.FC<FarmerPortalProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<'profiling' | 'tracking' | 'risk' | 'nature' | 'revenue' | 'verification'>('profiling');
  const [plotSize, setPlotSize] = useState<string>('');
  const [yieldKg, setYieldKg] = useState<string>('');
  const [processingFees, setProcessingFees] = useState<string>('5000');
  const [alertType, setAlertType] = useState<string>('drought');

  // Simple Nature Capital Accounting Logic
  const dieselSavings = (Number(yieldKg) || 0) * 0.15;
  const co2Saved = dieselSavings * 2.68;

  // Revenue Share Logic
  const totalFees = Number(processingFees) || 0;
  const revolvingFundAllocation = totalFees * 0.20; // 20% to fund

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header with Impact Context */}
      <div className="bg-green-900 py-12 px-4 border-b-8 border-yellow-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-white">
            <h1 className="text-4xl font-black tracking-tight mb-2">Impact Data Portal</h1>
            <p className="text-green-100/70 max-w-xl font-medium">
              Transforming smallholder wisdom into high-integrity data feeds for venture-scale impact.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 text-white w-full md:w-auto">
            <div className="text-[10px] uppercase font-black text-yellow-400 mb-2">Village Dealflow Status</div>
            <div className="flex items-center space-x-4">
              <div className="h-2 flex-grow bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-yellow-400 w-3/4"></div>
              </div>
              <span className="font-bold whitespace-nowrap">Cohort 7 (Active)</span>
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
              { id: 'revenue', icon: '💰', label: 'Revenue Share', desc: 'Machine Fee Tracking' },
              { id: 'verification', icon: '🎓', label: 'VC Verification', desc: 'Readiness Certification' },
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
            <div className="bg-white rounded-[3.5rem] shadow-sm border border-gray-100 p-8 md:p-12 min-h-[500px]">
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

                  <div className="bg-green-50 p-8 rounded-3xl border-2 border-dashed border-green-200 text-center">
                    <button className="bg-green-700 text-white px-8 py-4 rounded-2xl font-black hover:bg-green-800 transition shadow-lg">
                      Pin Current GPS Coordinates
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'revenue' && (
                <div className="animate-in fade-in duration-500">
                  <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                    <span className="mr-3">💰</span> Revenue-Share Calculator
                  </h2>
                  <p className="text-gray-600 mb-10 font-medium">Track earnings from value-addition machinery to prove the viability of a revolving impact fund.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div className="space-y-4">
                      <label className="block text-xs font-black uppercase tracking-widest text-gray-400">Service Fees Generated ($)</label>
                      <input 
                        type="number" 
                        value={processingFees}
                        onChange={(e) => setProcessingFees(e.target.value)}
                        className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl p-4 focus:border-green-700 focus:outline-none font-bold"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="block text-xs font-black uppercase tracking-widest text-gray-400">Machinery Asset</label>
                      <select className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl p-4 focus:border-green-700 focus:outline-none font-bold">
                        <option>Grain-Processing Mill</option>
                        <option>Solar Irrigation Pump</option>
                        <option>Oil Seed Press</option>
                      </select>
                    </div>
                  </div>

                  <div className="bg-green-950 p-8 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between border-4 border-yellow-400/20">
                    <div>
                      <div className="text-[10px] font-black uppercase text-yellow-400 tracking-[0.2em] mb-2">Revolving Fund Allocation (20%)</div>
                      <div className="text-5xl font-black">${revolvingFundAllocation.toLocaleString()}</div>
                    </div>
                    <div className="mt-6 md:mt-0 text-right">
                      <div className="text-xs font-bold text-green-200">Earned Income Stream Verified</div>
                      <div className="text-[10px] text-green-100/40 uppercase tracking-widest mt-1">Status: Growable</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'verification' && (
                <div className="animate-in fade-in duration-500">
                  <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                    <span className="mr-3">🎓</span> VC-Ready Verification
                  </h2>
                  <p className="text-gray-600 mb-10 font-medium">Institutional certification of youth cohorts for Investment Readiness Training.</p>
                  
                  <div className="space-y-4">
                    {[
                      { inst: 'Gulu University', module: 'Financial Literacy & Agri-Biz', date: 'Jan 2026', status: 'Verified' },
                      { inst: 'PKOF Innovation Lab', module: 'Climate Adaptation Tech', date: 'Dec 2025', status: 'Verified' },
                      { inst: 'Acholi Vocational Institute', module: 'Value-Chain Operations', date: 'In Progress', status: 'Pending' },
                    ].map((cert, i) => (
                      <div key={i} className="flex items-center justify-between p-6 bg-gray-50 rounded-3xl border border-gray-100">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl shadow-sm border border-gray-100">
                            📜
                          </div>
                          <div>
                            <div className="font-bold text-gray-900">{cert.module}</div>
                            <div className="text-[10px] uppercase font-black text-gray-400 tracking-widest">{cert.inst} • {cert.date}</div>
                          </div>
                        </div>
                        <span className={`px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                          cert.status === 'Verified' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {cert.status}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col items-center">
                    <div className="text-center mb-6">
                      <div className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">Institutional Signature</div>
                      <div className="w-48 h-1 bg-gray-200 mx-auto rounded-full"></div>
                    </div>
                    <button className="bg-clay text-white px-8 py-4 rounded-2xl font-black shadow-lg hover:scale-105 transition-all uppercase tracking-widest text-xs">
                      Request Partner Verification
                    </button>
                  </div>
                </div>
              )}

              {/* Keep other existing tabs implementation for completeness if needed */}
              {activeTab === 'tracking' && (
                <div className="animate-in fade-in duration-500">
                  <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                    <span className="mr-3">📈</span> Yield Gap & Input Tracker
                  </h2>
                  <p className="text-gray-600 mb-10 font-medium">Tracking nutrient density and yield efficiency for transparency at scale.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="space-y-4">
                        <label className="block text-xs font-black uppercase tracking-widest text-gray-400">Total Harvest (KG)</label>
                        <input type="number" value={yieldKg} onChange={(e) => setYieldKg(e.target.value)} placeholder="e.g. 1200" className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl p-4 font-bold" />
                     </div>
                     <div className="space-y-4">
                        <label className="block text-xs font-black uppercase tracking-widest text-gray-400">Crop Type</label>
                        <select className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl p-4 font-bold">
                           <option>Maize</option>
                           <option>Avocado</option>
                           <option>Chili</option>
                        </select>
                     </div>
                  </div>
                </div>
              )}

              {activeTab === 'risk' && (
                <div className="animate-in fade-in duration-500">
                  <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                    <span className="mr-3">🌩️</span> Climate Risk Profile
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['Drought', 'Flood', 'Pests', 'Rain Shift'].map(t => (
                      <button key={t} className="p-6 bg-gray-50 rounded-3xl border-2 border-transparent hover:border-clay flex flex-col items-center">
                        <span className="text-2xl mb-2">{t === 'Drought' ? '☀️' : '🌧️'}</span>
                        <span className="text-[9px] font-black uppercase tracking-widest text-clay">{t}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'nature' && (
                <div className="animate-in fade-in duration-500">
                  <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                    <span className="mr-3">🌿</span> Nature Capital
                  </h2>
                  <div className="bg-green-950 p-10 rounded-[3rem] text-white">
                    <div className="text-[10px] font-black uppercase text-yellow-400 mb-2">Carbon Offset</div>
                    <div className="text-4xl font-black">{co2Saved.toFixed(2)} KG Saved</div>
                    <div className="mt-4 text-xs text-green-100/60 leading-relaxed italic">
                      Accounting for externalities via solar-transition metrics.
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
