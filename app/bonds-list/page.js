'use client';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Header } from '@/components/layout/Header';
import { BondCard } from '@/components/bonds/BondCard';
import Link from 'next/link';

export default function BondsListPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeStatus, setActiveStatus] = useState('all');
  const [selectedFilters, setSelectedFilters] = useState(new Set());

  const { allBonds } = useSelector(state => state.bonds);

  const filterOptions = [
    { id: 'short-tenure', label: 'Short tenure', icon: '📋' },
    { id: 'invest-1k', label: 'Invest with 1k', icon: '💰' },
    { id: 'big-brands', label: 'Big brands', icon: '🏢' },
    { id: 'high-yield', label: 'High yield', icon: '📈' },
    { id: 'monthly', label: 'Monthly', icon: '📅' },
    { id: 'high-returns', label: 'High returns', icon: '💎' },
    { id: 'tax-benefit', label: 'Tax benefit', icon: '⚖️' },
  ];

  const toggleFilter = (filterId) => {
    const newFilters = new Set(selectedFilters);
    if (newFilters.has(filterId)) {
      newFilters.delete(filterId);
    } else {
      newFilters.add(filterId);
    }
    setSelectedFilters(newFilters);
  };

  // Apply search filter
  let displayBonds = allBonds.filter(bond => {
    return bond.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           bond.category.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Apply status filter
  if (activeStatus === 'live') {
    displayBonds = displayBonds.filter(bond => bond.soldOut < 100);
  } else if (activeStatus === 'fully-repaid') {
    displayBonds = displayBonds.filter(bond => bond.category?.includes('repaid'));
  } else if (activeStatus === 'sold-out') {
    displayBonds = displayBonds.filter(bond => bond.soldOut >= 100);
  }

  // Apply category filters
  if (selectedFilters.size > 0) {
    if (selectedFilters.has('short-tenure')) {
      displayBonds = displayBonds.filter(bond => 
        bond.tenure?.includes('3') || bond.tenure?.includes('6')
      );
    }
    if (selectedFilters.has('invest-1k')) {
      displayBonds = displayBonds.filter(bond => 
        bond.minimumInvestment <= 1000
      );
    }
    if (selectedFilters.has('big-brands')) {
      displayBonds = displayBonds.filter(bond => 
        bond.name.toLowerCase().includes('muthoot') ||
        bond.name.toLowerCase().includes('gold') ||
        bond.name.toLowerCase().includes('hdfc')
      );
    }
    if (selectedFilters.has('high-yield')) {
      displayBonds = displayBonds.filter(bond => bond.yield >= 11);
    }
    if (selectedFilters.has('monthly')) {
      displayBonds = displayBonds.filter(bond => 
        bond.name.toLowerCase().includes('monthly')
      );
    }
    if (selectedFilters.has('high-returns')) {
      displayBonds = displayBonds.filter(bond => bond.yield >= 12);
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-7xl mx-auto px-4">
        {/* Purple Banner */}
        <div className="flex items-center justify-between  rounded-xl  py-2">

            <img
              src="/exclusive-banner.png"
              alt="Exclusive Offer"
              className=" w-full h-36 object-contain rounded-xl"
            />

            {/* Your text content here */}
          </div>

        {/* Sticky Search and Status Bar */}
        <div className="sticky top-14 bg-white border-b border-gray-200 z-40 py-3 -mx-4 px-4">
          <div className="max-w-7xl mx-auto flex justify-between ">
            {/* Search Input */}
            

            {/* Status Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto">
              <button
                onClick={() => setActiveStatus('all')}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                  activeStatus === 'all'
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Bonds
              </button>
              <button
                onClick={() => setActiveStatus('live')}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                  activeStatus === 'live'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Live
              </button>
              <button
                onClick={() => setActiveStatus('fully-repaid')}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                  activeStatus === 'fully-repaid'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Fully repaid
              </button>
              <button
                onClick={() => setActiveStatus('sold-out')}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                  activeStatus === 'sold-out'
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Sold out
              </button>
            </div>
            <div className="flex items-center gap-2 ">
              <input
                type="text"
                placeholder="Search bonds..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 border border-gray-300 rounded px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-black text-white px-4 py-2 rounded text-xs font-semibold hover:bg-gray-800">
                Search
              </button>
             
            </div>
          </div>
        </div>

        <div className="flex gap-6 py-6">
          {/* Left Sidebar - Filters */}
          <div className="w-52 flex-shrink-0">
            <div className="sticky top-40 bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-3 text-xs uppercase tracking-wider">Filters</h3>

              <div className="space-y-1.5">
                {filterOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => toggleFilter(option.id)}
                    className={`w-full text-left px-2.5 py-2 rounded text-xs font-semibold transition-colors flex items-center gap-2 ${
                      selectedFilters.has(option.id)
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span>{option.icon}</span>
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>

              
            </div>
          </div>

          {/* Main Content - Bonds List */}
          <div className="flex-1 min-w-0">
            {displayBonds.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-sm">No bonds found matching your filters</p>
              </div>
            ) : (
              <>
                {/* Bonds List */}
                <div>
                  
  {displayBonds.map((bond, index) => (
    <div
      key={bond.id}
      className={index !== displayBonds.length - 1 ? "mb-3" : ""}
    >
      <BondCard bond={bond} />
    </div>
  ))}
</div>

                {/* Sell Anytime Banner */}
                <div 
                  className="my-8 text-white rounded-lg p-6 flex items-center justify-between bg-cover bg-center relative overflow-hidden"
                  style={{
                    backgroundImage: 'url(/backgrounds/sell-anytime-bg.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                  <div className="relative z-10">
                    <h3 className="font-bold text-sm mb-1">Sell anytime</h3>
                    <p className="text-xs text-gray-300">Get money to your bank by next working day</p>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mt-8 mb-8">
                  <h2 className="text-xs font-bold text-gray-900 mb-3 uppercase tracking-wider">Frequently Asked Questions</h2>
                  <div className="space-y-2">
                    <div className="bg-white p-3 rounded border border-gray-200 cursor-pointer hover:shadow-sm transition">
                      <p className="font-semibold text-gray-900 text-xs">How do I start investing in bonds?</p>
                    </div>
                    <div className="bg-white p-3 rounded border border-gray-200 cursor-pointer hover:shadow-sm transition">
                      <p className="font-semibold text-gray-900 text-xs">What is the minimum investment amount?</p>
                    </div>
                    <div className="bg-white p-3 rounded border border-gray-200 cursor-pointer hover:shadow-sm transition">
                      <p className="font-semibold text-gray-900 text-xs">Can I sell my bonds before maturity?</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
