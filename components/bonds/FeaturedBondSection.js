'use client';

import Link from 'next/link';

export function FeaturedBondSection({ bond }) {
  if (!bond) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {/* Featured Bond Card - Left */}
      <div 
        className="rounded-lg overflow-hidden p-6 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(/backgrounds/featured-bond-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-600 opacity-60"></div>
        <div className="h-48 flex flex-col justify-between relative z-10">
          <div>
            <p className="text-blue-100 text-xs font-bold mb-4">YTRA × Maturity</p>
            <h1 className="text-5xl font-bold text-white mb-2">{bond.yield}<span className="text-3xl">.25%</span></h1>
            <p className="text-blue-100 text-sm">ytm</p>
          </div>
          <div>
            <p className="text-blue-100 text-xs font-semibold">{bond.maturity}</p>
            <p className="text-white font-semibold">{bond.name}</p>
          </div>
        </div>
      </div>

      {/* Maturity Info and Action - Right */}
      <div className="space-y-4">
        {/* Maturity Box */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <p className="text-gray-600 text-xs font-semibold mb-1">YTRA × Maturity</p>
              <p className="text-gray-900 font-bold text-lg">{bond.yield}.25%</p>
            </div>
            <div>
              <p className="text-gray-600 text-xs font-semibold mb-1">YTRA × 12 months</p>
              <p className="text-gray-900 font-bold text-lg">₹1,000</p>
            </div>
            <div className="text-right">
              <div className="bg-yellow-100 text-yellow-800 px-3 py-2 rounded inline-block">
                <span className="font-bold text-lg">💰</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-900 text-white rounded px-3 py-2 text-xs font-semibold">
            ✓ Backed by Gold Loans.
          </div>
        </div>

        {/* Action Box */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <p className="text-gray-600 text-xs font-semibold mb-2">NOW SHOWING</p>
          <p className="text-gray-900 font-bold text-2xl mb-4">₹1,089.75</p>
          
          <div className="mb-4">
            <label className="text-gray-600 text-xs font-semibold mb-2 block">SELECT TENURE @</label>
            <button className="bg-blue-600 text-white px-4 py-1.5 rounded text-xs font-bold hover:bg-blue-700">
              Popular
            </button>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">6% 11.25% YTM</span>
              <span className="text-gray-600 text-xs">3 months</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">12% 11.25% YTM</span>
              <span className="text-gray-600 text-xs">12 months</span>
            </div>
          </div>

          <Link href={`/bonds/${bond.id}`}>
            <button className="w-full bg-black text-white py-3 rounded font-bold text-sm hover:bg-gray-800 transition">
              Begin XYC
            </button>
          </Link>
          <p className="text-center text-gray-600 text-xs mt-2">98 % Sold Out</p>
        </div>
      </div>
    </div>
  );
}
