'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'next/navigation';
import { getBondById } from '@/store/slices/bondsSlice';
import { Header } from '@/components/layout/Header';
import { BondDetailsPanel } from '@/components/bonds/BondDetailsPanel';
import Link from 'next/link';

export default function BondDetailPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const { selectedBond, allBonds } = useSelector(state => state.bonds);
  const [expandedSection, setExpandedSection] = useState(null);

  useEffect(() => {
    dispatch(getBondById(params.id));
  }, [params.id, dispatch]);

  if (!selectedBond) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center h-96">
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const relatedBonds = allBonds.filter(b => 
    b.id !== selectedBond.id && b.category === selectedBond.category
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <Link href="/bonds-list" className="hover:text-blue-600">Bonds</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{selectedBond.name}</span>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Content */}
          <div className="lg:col-span-2">
            {/* Bond Header */}
            <div className="mb-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{selectedBond.name}</h1>
                  <p className="text-gray-600">Bond ID: {selectedBond.id}</p>
                </div>
                <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded font-bold">
                  {selectedBond.rating}
                </span>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 text-sm mb-1">YTM</p>
                <p className="text-2xl font-bold text-green-600">{selectedBond.yield}%</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 text-sm mb-1">Maturity</p>
                <p className="text-lg font-bold text-gray-900">{selectedBond.maturity}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 text-sm mb-1">Category</p>
                <p className="text-lg font-bold text-gray-900">{selectedBond.category}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 text-sm mb-1">Sold Out</p>
                <p className="text-lg font-bold text-gray-900">{selectedBond.soldOut}%</p>
              </div>
            </div>

            {/* Repayment Schedule */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Repayments</h2>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Interest</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Principal</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedBond.repayments?.map((rep, idx) => (
                      <tr key={idx} className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 text-gray-900">{rep.date}</td>
                        <td className="px-4 py-3 text-gray-900">{rep.interest}</td>
                        <td className="px-4 py-3 text-gray-900">{rep.principal}</td>
                        <td className="px-4 py-3">
                          <span className="text-gray-600 text-sm">{rep.type}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Company Information */}
            {selectedBond.companyHistory && (
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Company Information</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-4">{selectedBond.companyName}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <div>
                      <p className="text-gray-600 text-sm mb-1">Founded</p>
                      <p className="font-semibold text-gray-900">{selectedBond.companyHistory.founded}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm mb-1">Headquarters</p>
                      <p className="font-semibold text-gray-900">{selectedBond.companyHistory.headquarters}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm mb-1">Employees</p>
                      <p className="font-semibold text-gray-900">{selectedBond.companyHistory.employees}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm mb-1">On-time Payments</p>
                      <p className="font-semibold text-green-600">{selectedBond.companyHistory.onTimePayments}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm mb-1">Default Rate</p>
                      <p className="font-semibold text-gray-900">{selectedBond.companyHistory.defaultRate}%</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Highlights */}
            {selectedBond.highlights && (
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Highlights</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-600 text-sm mb-2">Security Cover</p>
                    <p className="font-bold text-gray-900">{selectedBond.highlights.securityCover}</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-600 text-sm mb-2">SEBI Registration</p>
                    <p className="font-bold text-green-600">{selectedBond.highlights.sebiRegistration ? '✓' : '✗'}</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-600 text-sm mb-2">Handpicked</p>
                    <p className="font-bold text-green-600">{selectedBond.highlights.handpickedBonds ? '✓' : '✗'}</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-600 text-sm mb-2">Zero Defaults</p>
                    <p className="font-bold text-green-600">{selectedBond.highlights.zeroDefaults ? '✓' : '✗'}</p>
                  </div>
                </div>
              </div>
            )}

            {/* More Info Accordion */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">More Info</h2>
              <div className="space-y-3">
                {[
                  { title: 'Comforts & Risks', content: 'This bond carries market risk and credit risk.' },
                  { title: 'Taxation', content: 'Interest is fully taxable. TDS of 10% is applicable if interest exceeds ₹40,000 per financial year.' },
                  { title: 'Other Bond Details', content: 'Bond type: Fixed income security. Issued by registered entities.' }
                ].map((item, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setExpandedSection(expandedSection === idx ? null : idx)}
                      className="w-full px-4 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900">{item.title}</span>
                      <span className="text-xl">{expandedSection === idx ? '−' : '+'}</span>
                    </button>
                    {expandedSection === idx && (
                      <div className="px-4 py-4 bg-gray-50 border-t">
                        <p className="text-gray-600">{item.content}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar - Investment Panel */}
          <div className="lg:col-span-1">
            <BondDetailsPanel bond={selectedBond} />
          </div>
        </div>

        {/* Related Bonds */}
        {relatedBonds.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Bonds</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBonds.map(bond => (
                <Link key={bond.id} href={`/bonds/${bond.id}`}>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer">
                    <h3 className="font-semibold text-gray-900 mb-2">{bond.name}</h3>
                    <p className="text-sm text-green-600 font-bold mb-3">{bond.yield}% YTM</p>
                    <p className="text-xs text-gray-600">{bond.maturity}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
