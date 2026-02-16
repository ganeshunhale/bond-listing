import { useEffect, useMemo, useRef, useState } from "react";

const TRUST_CARDS = [
  {
    tag: "WE INVEST WITH YOU",
    text: (
      <>
        We invest <span className="text-white">2%</span> in the bonds we bring
      </>
    ),
    img: "https://d1c9xn9tvapvue.cloudfront.net/Bonds/carouselMoney.svg",
  },
  {
    tag: "100% ON-TIME REPAYMENTS",
    text: (
      <>
        All repayments have been made on-time.
        <br />
        Zero delays
      </>
    ),
    img: "https://d1c9xn9tvapvue.cloudfront.net/Bonds/carouselCalender.svg",
  },
  {
    tag: "SELL ANYTIME",
    text: <>Your money is always within your reach</>,
    img: "https://d1c9xn9tvapvue.cloudfront.net/Bonds/carouselCoins.svg",
  },
  {
    tag: "HANDPICKED BONDS",
    text: (
      <>
        Only few make it –
        <br />
        we filter hundreds of bonds to bring you the best
      </>
    ),
    img: "https://d1c9xn9tvapvue.cloudfront.net/Bonds/carouselLadder.svg",
  },
];

function ChevronBtn({ dir = "left", disabled, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={[
        "h-8 w-8 rounded-full grid place-items-center",
        "border border-gray-200 bg-white",
        "text-gray-500 hover:text-gray-700 hover:bg-gray-50",
        "disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white",
      ].join(" ")}
      aria-label={dir === "left" ? "Previous" : "Next"}
    >
      <span className="text-lg leading-none">{dir === "left" ? "‹" : "›"}</span>
    </button>
  );
}

function TrustCard({ tag, text, img }) {
  return (
    <div className="relative h-[260px] rounded-2xl overflow-hidden bg-[#0B0B0D] shadow-sm">
      {/* subtle vignette like screenshot */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/70" />
      <div className="absolute inset-0">
        <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -right-24 -bottom-24 h-56 w-56 rounded-full bg-white/5 blur-3xl" />
      </div>

      {/* text */}
      <div className="relative z-10 p-6">
        <p className="text-[11px] font-extrabold tracking-wide text-white">
          {tag}
        </p>
        <p className="mt-2 text-[18px] leading-snug font-[500] text-gray-300">
          {text}
        </p>
      </div>

      {/* bottom image */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
        <img
          src={img}
          alt=""
          className="h-[120px] w-auto select-none pointer-events-none drop-shadow-[0_20px_30px_rgba(0,0,0,0.55)]"
          draggable={false}
        />
      </div>

      {/* bottom fade for depth */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 to-transparent" />
    </div>
  );
}

export default function WhyTrustUs() {
  const viewportRef = useRef(null);
  const [startIndex, setStartIndex] = useState(0);

  // always 3 visible (matches your screenshot)
  const visible = 3;
  const maxIndex = Math.max(0, TRUST_CARDS.length - visible);

  // measure card width so the slide distance is EXACT even if container changes
  const [metrics, setMetrics] = useState({ cardW: 0, gap: 16 });

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const compute = () => {
      const gap = 16; // gap-4 => 16px
      const w = el.clientWidth;
      const cardW = (w - gap * (visible - 1)) / visible;
      setMetrics({ cardW, gap });
    };

    compute();

    const ro = new ResizeObserver(compute);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const translateX = useMemo(() => {
    return (metrics.cardW + metrics.gap) * startIndex;
  }, [metrics, startIndex]);

  const onPrev = () => setStartIndex((i) => Math.max(0, i - 1));
  const onNext = () => setStartIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <div className="mb-8 w-full min-w-0">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-900">
          Why should you trust us
        </h2>

        <div className="flex items-center gap-2">
          <ChevronBtn dir="left" disabled={startIndex === 0} onClick={onPrev} />
          <ChevronBtn
            dir="right"
            disabled={startIndex === maxIndex}
            onClick={onNext}
          />
        </div>
      </div>

      {/* viewport */}
      <div className="w-full min-w-0 overflow-hidden" ref={viewportRef}>
  <div
    className="flex gap-4 transition-transform duration-500 ease-out will-change-transform"
    style={{ transform: `translateX(-${translateX}px)` }}
  >
    {TRUST_CARDS.map((c, idx) => (
      <div
        key={idx}
        className="shrink-0"
        style={{ width: metrics.cardW ? `${metrics.cardW}px` : "33.3333%" }}
      >
        <TrustCard {...c} />
      </div>
    ))}
  </div>
</div>
    </div>
  );
}
