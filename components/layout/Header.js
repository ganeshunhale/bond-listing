'use client';

import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="flex h-16 items-center justify-between">
          
          {/* LEFT: Logo + Nav */}
          <div className="flex items-center gap-10">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/bonds-india-logo.png"
                alt="BondsIndia"
                width={170}
                height={40}
                priority
                className="object-contain"
              />
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <Link href="/" className="text-black">
                Bonds
              </Link>

              <Link href="#" className="text-gray-600 hover:text-black transition">
                FDs
              </Link>

              <Link href="#" className="text-gray-600 hover:text-black transition">
                SIPs
              </Link>

              {/* Yield Badge */}
              <span className="flex items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 text-xs font-semibold text-green-700">
                ↑ 0.5%
              </span>
            </nav>
          </div>

          {/* RIGHT: Actions */}
          <div className="flex items-center gap-6 text-sm font-medium">
            <button className="flex items-center gap-2 text-gray-700 hover:text-black transition">
              <span>🎁</span>
              Refer and Earn
              <span className="ml-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                1
              </span>
            </button>

            <button className="flex items-center gap-2 text-gray-700 hover:text-black transition">
              <span>▦</span>
              Portfolio
            </button>

            <div className="h-5 w-px bg-gray-300" />

            {/* Profile */}
            <button className="flex h-9 w-9 items-center justify-center rounded bg-black text-xs font-bold text-white">
              GU
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
