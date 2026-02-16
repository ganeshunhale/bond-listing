'use client';

import { useSelector } from 'react-redux';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import CategorySection from '@/components/categories/CategorySelector'
import WintTrustBar from '@/components/wintrustBar/WintTrustBar'
import InvestorPicks from '@/components/investorsPicks/InvestorsPicks'
import WhyTrustUs from '@/components/whyTrustUs/WhyTrustUs'
import Image from 'next/image';
import { ArrowUpRight } from "lucide-react";
export default function Page() {
  const { featuredBond, investorPicks } = useSelector((state: any) => state.bonds);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Header />

      <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8">

        {/* Main Content - Left */}
        <div className="flex-1">

          {/* Exclusive Offer Banner */}
          <div className="flex items-center justify-between  rounded-xl  pb-4">

            <img
              src="/exclusive-banner.png"
              alt="Exclusive Offer"
              className=" w-full h-auto object-contain rounded-xl"
            />

            {/* Your text content here */}
          </div>

          {/* Featured Bond Section */}
          {featuredBond && (
            <div className="mb-8">


              <Link
                href={`/bonds/${featuredBond.id}`}
                className="block group"
              >
                <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 bg-white cursor-pointer">

                  <div className="grid md:grid-cols-2 grid-cols-1">

                    {/* LEFT SIDE - YTM CARD */}
                    <div
                      className="relative p-6 flex flex-col justify-between
        bg-[url('https://d1c9xn9tvapvue.cloudfront.net/Bonds/heroCardBondsWeb.svg')]
        bg-cover bg-center bg-no-repeat text-white"
                    >
                      {/* Dark overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/20"></div>

                      <div className="relative z-10">

                        {/* Badge */}
                        <span className="inline-block bg-yellow-300 text-black text-xs font-semibold px-3 py-1 rounded-md mb-4">
                          Highest YTM
                        </span>

                        {/* Yield */}
                        <div className="flex items-end gap-3">
                          <h1
                            className="
      text-6xl font-bold leading-none
      bg-[linear-gradient(99deg,_rgb(232,211,172)_-3.32%,_rgb(255,248,238)_40.72%,_rgb(192,179,151)_83.88%)]
      bg-clip-text
      text-transparent
    "
                          >
                            {featuredBond.yield}%
                          </h1>

                          <span className="text-lg font-bold leading-none
      bg-[linear-gradient(99deg,_rgb(232,211,172)_-3.32%,_rgb(255,248,238)_40.72%,_rgb(192,179,151)_83.88%)]
      bg-clip-text
      text-transparent ">
                            14.75%
                            <p className="text-sm uppercase tracking-wide text-gray-200 mt-1">
                              YTM
                            </p>
                          </span>

                        </div>



                        {/* Maturity */}
                        <p className="text-sm text-gray-200 mt-6">
                          Maturity: {featuredBond.maturity}
                        </p>
                      </div>
                    </div>

                    {/* RIGHT SIDE - DETAILS */}
                    <div className="p-6 flex flex-col justify-between">

                      <div>
                        {/* Sold Out Top */}
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-sm font-semibold text-gray-700">
                            99% sold out
                          </span>
                        </div>

                        {/* Bond Name */}
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {featuredBond.name}
                        </h3>

                        <p className="text-sm text-gray-500 mb-4">
                          Min. ₹10k
                        </p>

                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                          <div
                            className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                            style={{ width: "99%" }}
                          ></div>
                        </div>
                      </div>

                      {/* View Details */}
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-blue-600 font-semibold text-sm group-hover:underline">
                          View details
                        </span>

                        <span className="text-blue-600 text-xl group-hover:translate-x-1 transition">
                          →
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Category Selector */}
          <CategorySection />

          {/* KYC Banner */}
          {/* KYC Banner */}
          <div className="mb-8">
            <div className="relative overflow-hidden rounded-md border border-[#f0e6d4] bg-[#fbf6ef] px-6 py-6 md:px-8">
              {/* faint background watermark (right side) */}
              <img
                src="https://d1c9xn9tvapvue.cloudfront.net/homePage/SecureProcessIcon.svg"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute right-6 top-1/2 hidden w-[220px] -translate-y-1/2 opacity-10 md:block"
              />

              <div className="flex items-center justify-between gap-6">
                {/* Left content */}
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold tracking-widest ">
                    JUST TAKES 2 MINS
                  </p>

                  <h3 className="mt-2 text-[22px] leading-snug text-[#745513]">
                    Complete KYC to invest in <br className="hidden sm:block" />
                    bonds
                  </h3>

                  <button
                    type="button"
                    className="mt-4 inline-flex items-center gap-2 text-base font-medium  hover:opacity-80"
                  >
                    Complete KYC
                    <span className="text-lg leading-none">›</span>
                  </button>
                </div>

                {/* Right info card */}
                <div className="relative shrink-0">
                  <div className="rounded-md border border-[#efe3cf] bg-white px-4 py-3 shadow-sm">
                    <div className="flex items-start gap-3">
                      <img
                        src="https://d1c9xn9tvapvue.cloudfront.net/homePage/SecureProcessIcon.svg"
                        alt="Shield"
                        className="mt-0.5 h-6 w-6"
                      />
                      <div className="min-w-0">
                        <p className="text-xs text-slate-600">Simple &amp; Quick</p>
                        <p className="mt-1 text-[13px] font-semibold text-slate-800">
                          DIGILOCKER
                        </p>
                        <p className="text-[13px] font-semibold text-slate-800">
                          VERIFIED
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* What Trust */}
          <WintTrustBar />

          {/* Investors Picks */}
          <InvestorPicks investorPicks={investorPicks} />


          {/* Sell Anytime Banner */}
          <div className="relative bg-black rounded-2xl overflow-hidden mb-8 min-h-[140px] flex items-center p-6">

            <Image
              src="/sell-anytime-bg.png"
              alt="Sell Anytime"
              fill
              className="object-contain object-right opacity-90"
            />

            <div className="relative z-10 text-white">
              <h3 className="text-xl font-semibold mb-2">Sell anytime</h3>
              <p className="text-gray-300 text-sm">
                Get money in your bank by next working day.
              </p>
            </div>
          </div>

          <div className="max-w-4xl ">
            <WhyTrustUs />
          </div>




          {/* Help Section */}
          <div className="w-full bg-white  px-12 py-10 flex items-center justify-between mb-12">
            {/* Left Content */}
            <div className="max-w-md">
              <h2 className="text-[20px] leading-[28px] font-semibold text-gray-900 mb-2">
                Got questions? We'll help
              </h2>

              <p className="text-[13px] leading-[20px] text-gray-600 mb-6">
                Explore FAQs or contact our support team
              </p>

              <button className="inline-flex items-center gap-2 border border-gray-300 rounded-md px-4 py-[10px] text-[13px] font-semibold text-gray-900 hover:bg-gray-50 transition">
                <span>Get help</span>

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.75}
                  className="translate-y-[1px]"
                />
              </button>
            </div>

            {/* Right Illustration */}
            <div className="hidden md:block">
              <img
                src="https://d1c9xn9tvapvue.cloudfront.net/homePage/contact_banner_desk.svg"
                alt="Help illustration"
                className="w-[280px]"
              />
            </div>
          </div>


        </div>

        {/* Sticky Sidebar - Right */}
        <div className="hidden lg:block lg:w-64 flex-shrink-0">
          <div className="sticky top-20 space-y-4">
            {/* Repayments Overall */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-center mb-3">
                <p className="font-semibold text-gray-900 text-sm">Repayments Overall</p>
                <p className="text-gray-600 text-xs">↗</p>
              </div>
              <div className="border-t border-gray-200 pt-3">
                <p className="text-gray-600 text-xs mb-1">Year upcoming</p>
                <p className="text-gray-900 font-bold text-lg">₹0</p>
              </div>
            </div>

            {/* Bonds Portfolio */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-center mb-3">
                <p className="font-semibold text-gray-900 text-sm">Bonds portfolio</p>
                <p className="text-gray-600 text-xs">↗</p>
              </div>
              <div className="space-y-3 border-t border-gray-200 pt-3">
                <div className="flex justify-between items-center">
                  <p className="text-gray-600 text-xs">Current value</p>
                  <p className="text-gray-900 font-bold">₹0</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-600 text-xs">Gains</p>
                  <p className="text-gray-900 font-bold">+₹0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
