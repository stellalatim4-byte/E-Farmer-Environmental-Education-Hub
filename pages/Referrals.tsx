import React, { useEffect } from 'react';
import { SERVICE_REFERRALS } from '../constants';
import { Language } from '../types';
import { Link, useLocation } from 'react-router-dom';

interface ReferralsProps {
  language: Language;
}

const Referrals: React.FC<ReferralsProps> = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  const loanPartners = [
    {
      name: 'AgriConnect',
      link: 'https://www.udbl.co.ug/service/agriconnect/',
      description: 'A digital lending solution launched in partnership with Ensibuuko FinTech, Uganda Development Bank (UDB), FAO, and UNCDF. This platform provides short-term seasonal loans and savings products specifically for Village Savings and Loan Associations (VSLAs) and smallholder farmers.'
    },
    {
      name: 'Emata',
      link: 'https://www.emata.io/',
      description: 'A digital platform (agri-fintech) that offers affordable loans to smallholder farmers, particularly in the dairy sector. They partner with cooperatives and offer competitive rates to help farmers invest in tools like irrigation systems and high-quality inputs.'
    },
    {
      name: 'Uganda Microcredit Foundation Ltd (UMF)',
      link: 'https://umf.co.ug/',
      description: 'Provides agriculture loans to individual farmers and registered groups/cooperatives, with fast processing times (within 3 business days).'
    },
    {
      name: 'AFRICE',
      link: 'https://africeug.org/',
      description: 'A non-profit that offers a "seed loaning system," which acts as a form of soft loan where farmers borrow indigenous seeds, plant them, and return a portion of the harvest.'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Linkages & Capacity Building</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Our hub acts as a bridge to specialized apps and services designed for livelihood improvement 
            and social wellbeing in the post-conflict context of Northern Uganda.
          </p>
        </div>

        {/* Top Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {SERVICE_REFERRALS.map(item => {
            const isExternal = item.link.startsWith('http');
            const buttonText = item.name === "Market Hub" ? "Visit Fromy Farm" : "Launch Service";

            return (
              <div key={item.id} className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col hover:-translate-y-1">
                <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center text-3xl mb-6 group-hover:bg-green-100 transition shadow-inner">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">{item.name}</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">{item.description}</p>
                
                {isExternal ? (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-green-700 transition-colors text-center shadow-lg"
                  >
                    {buttonText}
                  </a>
                ) : (
                  <Link 
                    to={item.link.replace('#', '')}
                    className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-green-700 transition-colors text-center shadow-lg"
                  >
                    {buttonText}
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* Detailed Micro-Loans Section */}
        <div id="loans" className="mb-24 scroll-mt-32">
          <div className="flex items-center space-x-4 mb-10">
            <div className="h-10 w-2 bg-yellow-500 rounded-full"></div>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Micro-Loans (Agri-Finance)</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {loanPartners.map((partner, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col hover:border-green-200 transition-colors group">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-bold text-green-800 group-hover:text-green-700 transition-colors">{partner.name}</h3>
                  <div className="bg-green-50 text-green-700 p-2 rounded-lg group-hover:bg-green-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                  {partner.description}
                </p>
                <a 
                  href={partner.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center space-x-2 text-green-700 font-bold hover:text-green-900 transition-colors group"
                >
                  <span>Visit {partner.name} Platform</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 p-8 md:p-10 rounded-[2.5rem] border border-yellow-100 shadow-inner">
            <p className="text-gray-800 leading-relaxed text-lg italic mb-4">
              "These platforms often focus on providing loans without traditional collateral, using digital technology for faster approval and disbursement."
            </p>
            <p className="text-gray-700 leading-relaxed border-t border-yellow-200/50 pt-4">
              Other possible financers include: <span className="font-bold text-green-800">FINCA Uganda</span> (Offers mobile loans and specific agricultural loans for farmers, with access to funds through USSD code *203 or their app), <span className="font-bold text-green-800">Opportunity Bank Uganda</span> (Provides Individual Agriculture Loan and Group Agriculture Trust Loan) and <span className="font-bold text-green-800">Stanbic Bank Uganda</span> (Offers agricultural loans through its Economic Enterprise Restart Fund (EERF)).
            </p>
          </div>
        </div>

        {/* Updated Government Resources Section */}
        <div className="mt-20 bg-green-950 rounded-[3rem] p-10 md:p-16 text-white overflow-hidden relative shadow-2xl">
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold mb-10 tracking-tight text-center md:text-left">National & Institutional Resources</h2>
            
            <div className="space-y-8">
              {/* Primary Uganda Block */}
              <div className="bg-white/5 p-8 md:p-10 rounded-[2.5rem] backdrop-blur-md border border-white/10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-green-950 font-black text-xs">UG</div>
                  <h4 className="font-black text-2xl text-yellow-400 uppercase tracking-wider">Uganda</h4>
                </div>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4 group">
                    <div className="bg-green-800/50 p-2 rounded-lg mt-1 group-hover:bg-yellow-500 group-hover:text-green-950 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                    </div>
                    <div>
                      <h5 className="font-bold text-white text-lg">Ministry of Agriculture, Animal Industry and Fisheries (MAAIF)</h5>
                      <p className="text-green-100/60 text-sm mt-1">National policy and technical support for agricultural production.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="bg-green-800/50 p-2 rounded-lg mt-1 group-hover:bg-yellow-500 group-hover:text-green-950 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                        <h5 className="font-bold text-white text-lg">ICT4Farmers Platform</h5>
                        <a 
                          href="https://play.google.com/store/apps/details?id=net.eighttechnologes.ict4farmers" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-[10px] bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full font-black uppercase tracking-widest hover:bg-yellow-500 hover:text-green-950 transition-all border border-yellow-500/20"
                        >
                          Install via Play Store ↗
                        </a>
                      </div>
                      <p className="text-green-100/70 text-sm leading-relaxed">
                        Led by the <span className="text-yellow-400/80">Uganda National Farmers Federation (UNFFE)</span> and the <span className="text-yellow-400/80">Uganda Communications Commission (UCC)</span>, this initiative provides digital skilling, market information, and farming tips, targeting enhanced digital engagement among farmers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recovery Context Note */}
              <div className="text-center">
                <p className="text-green-100/40 text-xs italic">
                  * These institutions are selected for their focus on post-conflict recovery and digital transformation in Northern Uganda.
                </p>
              </div>
            </div>
          </div>
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500 rounded-full blur-[150px] opacity-10 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Referrals;