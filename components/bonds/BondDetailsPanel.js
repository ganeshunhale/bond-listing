'use client';

import { useState } from 'react';

export function BondDetailsPanel({ bond }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedTenure, setSelectedTenure] = useState('popular');

  const totalAmount = quantity * (bond.currentPrice || 1000);

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-24">
      <div className="mb-6">
        <h3 className="text-gray-600 text-sm font-medium mb-2">Current Price</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-gray-900">₹{bond.currentPrice || 1000}</span>
          <span className="text-green-600 font-semibold">↑</span>
        </div>
      </div>

      <div className="mb-6 pb-6 border-b">
        <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded font-semibold text-sm">
          Popular
        </span>
      </div>

      <div className="mb-6">
        <h3 className="text-gray-600 text-sm font-medium mb-3">SELECT TENURE @</h3>
        <div className="space-y-2">
          <label className="flex items-center p-3 border border-gray-200 rounded cursor-pointer hover:bg-gray-50">
            <input
              type="radio"
              name="tenure"
              value="popular"
              checked={selectedTenure === 'popular'}
              onChange={(e) => setSelectedTenure(e.target.value)}
              className="mr-3"
            />
            <div>
              <p className="font-semibold text-gray-900">Popular</p>
              <p className="text-xs text-gray-500">{bond.maturity}</p>
            </div>
          </label>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600">Interest</span>
          <span className="text-sm text-gray-600">{bond.yield}% YTM</span>
        </div>
        <div className="flex justify-between items-center mb-4 pb-4 border-b">
          <span className="text-sm font-medium text-gray-600">Timeline</span>
          <span className="text-sm text-gray-600">{bond.maturity}</span>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium text-gray-600">Units</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
            >
              −
            </button>
            <span className="w-8 text-center font-semibold">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="mb-6 p-4 bg-gray-50 rounded">
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Total Amount</span>
          <span className="font-bold text-gray-900">₹{totalAmount.toLocaleString()}</span>
        </div>
      </div>

      <div className="space-y-3">
        <button className="w-full border-2 border-gray-300 text-gray-900 py-3 rounded font-semibold hover:border-blue-600 transition-colors">
          Begin KYC
        </button>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold transition-colors">
          Invest Now
        </button>
      </div>

      <p className="text-xs text-gray-500 mt-4 text-center">
        95% Sold Out
      </p>
    </div>
  );
}
