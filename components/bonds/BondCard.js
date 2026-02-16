'use client';

import Link from 'next/link';

export function BondCard({ bond }) {
  const categoryColors = {
    'Gold-backed': 'bg-yellow-500',
    'Gold': 'bg-yellow-600',
    'Sri Chit': 'bg-yellow-600',
    'Fully-repaid': 'bg-gray-500',
    'Fully Repaid': 'bg-gray-500',
    'Fixed-arm': 'bg-teal-500',
    'Corporate': 'bg-green-500',
    'Municipal': 'bg-blue-500',
    'Government': 'bg-red-500',
  };

  const ratingColors = {
    'AAA': 'text-green-600',
    'AA': 'text-green-600',
    'A+': 'text-blue-600',
    'A': 'text-blue-600',
    'BBB+': 'text-orange-600',
    'B+': 'text-orange-600',
  };

  return (
    <Link href={`/bonds/${bond.id}`}>
      <div className="bg-white border border-gray-200 rounded overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
        {/* Header with color bar and name */}
        <div className={`${categoryColors[bond.category] || 'bg-gray-400'} text-white px-3 py-2 flex items-center justify-between`}>
          <span className="font-bold text-xs">{bond.name}</span>
          <span className="text-xs font-semibold bg-black bg-opacity-25 px-1.5 py-0.5 rounded">VIEW</span>
        </div>

        {/* Content Row - Single line layout */}
        <div className="px-3 py-2 flex items-center justify-between gap-3">
          {/* Yield */}
          <div className="min-w-max">
            <p className="text-gray-500 text-xs font-semibold">Yield</p>
            <p className="text-green-600 font-bold text-sm">{bond.yield}%</p>
          </div>

          {/* Rating */}
          <div className="min-w-max">
            <p className="text-gray-500 text-xs font-semibold">Rating</p>
            <p className={`font-bold text-xs ${ratingColors[bond.rating] || 'text-gray-600'}`}>{bond.rating}</p>
          </div>

          {/* Tenure */}
          <div className="min-w-max">
            <p className="text-gray-500 text-xs font-semibold">Tenure</p>
            <p className="text-gray-900 font-bold text-xs">{bond.tenure || bond.maturity}</p>
          </div>

          {/* Maturity */}
          <div className="min-w-max">
            <p className="text-gray-500 text-xs font-semibold">Maturity</p>
            <p className="text-gray-900 font-bold text-xs">{bond.maturity}</p>
          </div>

          {/* Status Badge */}
          <div className="text-right ml-auto">
            <span className="inline-block bg-green-100 text-green-800 px-1.5 py-0.5 rounded text-xs font-bold">LIVE</span>
          </div>
        </div>

        {/* Sold Out Progress Bar */}
        {bond.soldOut && (
          <div className="px-3 py-2 border-t border-gray-100">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-600 font-semibold">Sold Out</span>
              <span className="text-green-600 font-bold">{bond.soldOut}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div
                className="bg-teal-500 h-1.5 rounded-full transition-all"
                style={{ width: `${Math.min(bond.soldOut, 100)}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
