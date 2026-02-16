import Link from "next/link";
import Image from "next/image";

export default function CategorySection() {
  const categories = [
    {
      name: "Short tenure",
      slug: "short-tenure",
      img: "https://davf9otgz7zc8.cloudfront.net/images//Short_tenure_web_46f6cf4e7c.png",
    },
    {
      name: "Invest with ₹1k",
      slug: "invest-with-1k",
      img: "https://davf9otgz7zc8.cloudfront.net/images//Invest_with_1k_web_efe34b4c24.png",
    },
    {
      name: "Big brands",
      slug: "big-brands",
      img: "https://davf9otgz7zc8.cloudfront.net/images//Big_Brands_web_b074f61bea.png",
    },
    {
      name: "High rated",
      slug: "high-rated",
      img: "https://davf9otgz7zc8.cloudfront.net/images//High_rated_web_49f6f877c9.png",
    },
    {
      name: "Monthly interest",
      slug: "monthly-interest",
      img: "https://davf9otgz7zc8.cloudfront.net/images//Monthly_interest_web_e2f7c68d4f.png",
    },
    {
      name: "High returns",
      slug: "high-returns",
      img: "https://davf9otgz7zc8.cloudfront.net/images//High_YTM_web_141a4ab2c5.png",
    },
    {
      name: "Tax benefit",
      slug: "tax-benefit",
      img: "https://davf9otgz7zc8.cloudfront.net/images//Tax_Saver_Light_With_BG_1_30cbd15521.png",
    },
  ];

  return (
    <div className="mb-8">
      <p className="mb-4 text-xs font-bold  tracking-widest text-slate-600 uppercase">
        SELECT A CATEGORY
      </p>

      <div className="grid grid-cols-4 md:grid-cols-7 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/bonds-list?category=${cat.slug}`}
            className="group flex flex-col items-center text-center"
          >
            {/* icon tile */}
            <div
              className="
                h-14 w-14 md:h-16 md:w-16
                rounded-xl bg-white
                ring-1 ring-slate-200/70
                shadow-sm
                flex items-center justify-center
                transition
                group-hover:shadow-md group-hover:-translate-y-0.5
              "
            >
              <Image
                src={cat.img}
                alt={cat.name}
                width={40}
                height={40}
                className="h-9 w-9 md:h-10 md:w-10 object-contain"
                unoptimized
              />
            </div>

            {/* label */}
            <span className="mt-3 text-sm font-medium text-slate-600 leading-snug">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
