import Image from "next/image";

const trustItems = [
  {
    label: "Zero defaults",
    img: "https://d1c9xn9tvapvue.cloudfront.net/Bonds/ZeroDefaultIcon.svg",
  },
  {
    label: "Handpicked bonds",
    img: "https://d1c9xn9tvapvue.cloudfront.net/Bonds/flowerIcon.svg",
  },
  {
    label: "SEBI registered",
    img: "https://d1c9xn9tvapvue.cloudfront.net/Bonds/goldenShield.svg",
  },
  {
    label: "We invest 2% with you",
    img: "https://d1c9xn9tvapvue.cloudfront.net/Bonds/goldenWallet.svg",
  },
];

export default function WintTrustBar() {
  return (
    <div className="mb-8">
      <div className="relative">
        {/* Floating header */}
        <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2 bg-white px-4">
          {/* ✅ Use your SVG here */}
          {/* Example: <WintTrustHeaderSvg className="h-6 w-auto" /> */}
          <img
            src="/wint-trust.png"
            alt="WINT TRUST"
            className="h-10 w-auto"
          />
        </div>

        {/* Border bar */}
        <div className="rounded-md border border-slate-200 bg-white px-6 py-5">
          <div className="flex items-center justify-between">
            {trustItems.map((it, idx) => (
              <div key={it.label} className="flex items-center">
                {/* Item */}
                <div className="flex min-w-[140px] flex-col items-center text-center">
                  <div className="h-7 w-7">
                    <Image
                      src={it.img}
                      alt={it.label}
                      width={28}
                      height={28}
                      className="h-7 w-7 object-contain"
                      unoptimized
                    />
                  </div>
                  <p className="mt-2 text-xs font-medium text-slate-900">
                    {it.label}
                  </p>
                </div>

                {/* Dot separator */}
                {idx !== trustItems.length - 1 && (
                  <span className="mx-6 block h-1 w-1 rounded-full bg-slate-200" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* small faint bottom divider like screenshot */}
        <div className="mx-auto mt-6 h-[2px] w-16 rounded-full bg-slate-200/70" />
      </div>
    </div>
  );
}
