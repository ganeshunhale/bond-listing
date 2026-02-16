import Link from "next/link";
import Image from "next/image";

const rankAssets = {
  1: {
    numSvg: "http://d1c9xn9tvapvue.cloudfront.net/homePage/Number1Illustration.svg",
    bg: "https://d1c9xn9tvapvue.cloudfront.net/homePage/AssetCardGradient1.png",
  },
  2: {
    numSvg: "https://d1c9xn9tvapvue.cloudfront.net/homePage/Number2Illustration.svg",
    bg: "https://d1c9xn9tvapvue.cloudfront.net/homePage/AssetCardGradient2.png",
  },
  3: {
    numSvg: "https://d1c9xn9tvapvue.cloudfront.net/homePage/Number3Illustration.svg",
    bg: "https://d1c9xn9tvapvue.cloudfront.net/homePage/AssetCardGradient3.png",
  },
};

function safe(v, fallback = "—") {
  if (v === null || v === undefined) return fallback;
  const s = String(v).trim();
  return s ? s : fallback;
}

export default function InvestorsPicks({ investorPicks = [] }) {
  const picks = investorPicks.slice(0, 3);

  return (
    <section className="mb-8">
      {/* header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-[11px] tracking-widest font-semibold text-slate-500 uppercase">
            Investors Picks
          </p>
          <h2 className="text-[28px] leading-tight font-serif font-semibold text-slate-900">
            Popular on Wint
          </h2>
        </div>

        <Link
          href="/bonds-list"
          className="text-[14px] font-medium text-emerald-600 hover:text-emerald-700"
        >
          View all
        </Link>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {picks.map((bond, idx) => {
          const rank = idx + 1;
          const assets = rankAssets[rank];

          const issuer = safe(bond?.issuer_name ?? bond?.name ?? "—");
          const issuerLogo = bond?.issuer_logo; // optional
          const ytm = bond?.yield; // e.g. 11.25
          const oldYtm = bond?.old_yield; // e.g. 11
          const tenure = safe(bond?.maturity ?? bond?.tenure ?? "—"); // "3-12 months"

          return (
            <Link
              key={bond?.id ?? rank}
              href={`/bonds/${bond?.id}`}
              className="group"
            >
              <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-[0_1px_0_rgba(15,23,42,0.04)] hover:shadow-md transition-shadow">
                {/* top gradient header */}
                <div className="relative h-[50px]">
                  {/* gradient bg image */}
                  <div
                    className="absolute inset-0 bg-center bg-cover"
                    style={{ backgroundImage: `url(${assets.bg})` }}
                  />

                  {/* number illustration */}
                  <div className="absolute left-3 top-2">
                    <Image
                      src={assets.numSvg}
                      alt={`Rank ${rank}`}
                      width={50}
                      height={50}
                      className="select-none"
                      draggable={false}
                    />
                  </div>

                  {/* optional tag like "15 G/H Available" for rank 2 (if you want) */}
                  {bond?.badge && (
                    <div className="absolute left-20 top-[14px]">
                      <span className="px-3 py-1 rounded-md bg-[#1D4ED8] text-white text-[12px] font-semibold">
                        {bond.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* body */}
                <div className="p-4">
                  {/* issuer row */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-8 w-8 rounded-md bg-slate-50 border border-slate-200 flex items-center justify-center overflow-hidden">
                      {issuerLogo ? (
                        <Image
                          src={issuerLogo}
                          alt={issuer}
                          width={24}
                          height={24}
                        />
                      ) : (
                        <span className="text-[11px] font-semibold text-slate-500">
                          {issuer?.[0]?.toUpperCase() ?? "—"}
                        </span>
                      )}
                    </div>
                    <p className="text-[14px] font-medium text-slate-700">
                      {issuer}
                    </p>
                  </div>

                  {/* yield */}
                  <div className="flex items-baseline gap-2">
                    <p className="text-[28px] font-semibold text-slate-900">
                      {ytm ?? "—"}%
                    </p>
                    {oldYtm ? (
                      <p className="text-[14px] text-slate-400 line-through">
                        {oldYtm}%
                      </p>
                    ) : null}
                  </div>

                  {/* tenure */}
                  <p className="mt-2 text-[13px] text-slate-500">{tenure}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
