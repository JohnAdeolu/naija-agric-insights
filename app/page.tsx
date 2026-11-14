import Image from "next/image";
import NewsletterForm from "./NewsletterForm";
const categories = [
  "Nigeria",
  "Africa",
  "International",
  "Agribusiness",
  "Technology",
  "Food Security",
  "Agricultural Finance",
  "Livestock",
];

const stories = [
  {
    category: "AGRIBUSINESS",
    title: "The Future of Agribusiness: Building a Stronger Agricultural Economy",
    source: "Naija Agric Insights",
    time: "Featured story",
    description:
      "Explore the opportunities, challenges and innovations shaping the future of agricultural businesses.",
    color: "from-green-900 to-emerald-600",
    symbol: "🌱",
  },
  {
    category: "CROP PRODUCTION",
    title: "How Modern Farming Practices Can Improve Crop Productivity",
    source: "Sample story",
    time: "Latest",
    description:
      "A closer look at practical approaches to improving agricultural production.",
    color: "from-lime-800 to-green-500",
    symbol: "🌾",
  },
  {
    category: "AGRICULTURAL TECHNOLOGY",
    title: "Technology and Innovation Are Reshaping Agriculture",
    source: "Sample story",
    time: "Latest",
    description:
      "Discover how digital tools can support farmers and agricultural value chains.",
    color: "from-blue-950 to-teal-600",
    symbol: "🚜",
  },
  {
    category: "FOOD SECURITY",
    title: "Why Stronger Food Supply Chains Matter for Africa",
    source: "Sample story",
    time: "Latest",
    description:
      "Understanding the role of storage, logistics and market access in food security.",
    color: "from-amber-900 to-orange-500",
    symbol: "🌽",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f8f5] text-gray-900">
      {/* Top announcement */}
      <div className="bg-[#123c2b] px-4 py-2 text-center text-xs text-white">
        YOUR DAILY SOURCE FOR AGRICULTURAL NEWS, INSIGHTS AND OPPORTUNITIES
      </div>

      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-5">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#174b32] text-2xl">
              🌱
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tight text-[#174b32]">
                NAIJA AGRIC INSIGHTS
              </h1>
              <p className="text-[10px] font-semibold tracking-[2px] text-gray-500">
                AGRICULTURE • BUSINESS • FOOD SECURITY
              </p>
            </div>
          </a>

          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-gray-500 sm:block">
              Independent Agricultural News Platform
            </span>
            <button className="rounded-lg bg-[#174b32] px-5 py-3 text-sm font-bold text-white">
              Subscribe
            </button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl gap-7 overflow-x-auto px-5 py-4 text-sm font-semibold whitespace-nowrap">
          <a href="#" className="text-[#174b32]">Home</a>
          {categories.map((category) => (
            <a
              href="#news"
              key={category}
              className="text-gray-600 transition hover:text-[#174b32]"
            >
              {category}
            </a>
          ))}
        </div>
      </nav>

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-5 py-10">

        {/* Welcome section */}
      
{/* Welcome / Hero section */}
<section className="relative mb-10 overflow-hidden rounded-3xl bg-[#123c2b] px-7 py-14 text-white md:px-14 md:py-20">
  <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-[#267447] opacity-30 blur-3xl" />

  <div className="relative grid items-center gap-10 lg:grid-cols-2">
    <div>
      <span className="inline-flex rounded-full border border-green-300/30 bg-green-400/10 px-4 py-2 text-xs font-bold tracking-wider text-green-200">
        YOUR AGRICULTURAL INFORMATION HUB
      </span>

      <h2 className="mt-7 max-w-2xl text-4xl font-black leading-tight md:text-6xl">
        Everything Happening in Agriculture,
        <span className="text-[#a4c878]"> In One Place.</span>
      </h2>

      <p className="mt-6 max-w-xl text-base leading-8 text-green-100 md:text-lg">
        Discover agricultural news, expert insights, agribusiness
        opportunities, research and innovations shaping Nigeria,
        Africa and the global agricultural economy.
      </p>

      <div className="mt-9 flex flex-wrap gap-4">
        <a
          href="#news"
          className="rounded-lg bg-white px-6 py-4 text-sm font-bold text-[#174b32] transition hover:bg-green-100"
        >
          Explore Latest Stories →
        </a>

        <a
          href="#newsletter"
          className="rounded-lg border border-white/40 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/10"
        >
          Join Our Community
        </a>
      </div>

      <p className="mt-8 text-xs font-semibold tracking-wider text-green-200">
        NIGERIA • AFRICA • INTERNATIONAL
      </p>
    </div>

    <div className="flex min-h-[280px] items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-[#267447] via-[#527f43] to-[#a4b96a] p-8">
      <div className="text-center">
        <div className="text-8xl md:text-9xl">🌾</div>
        <h3 className="mt-5 text-2xl font-black text-white">
          GROWING AGRICULTURE.
        </h3>
        <p className="mt-2 text-sm text-green-50">
          Inspiring Knowledge. Connecting Opportunities.
        </p>
      </div>
    </div>
  </div>
</section>


        {/* Featured story */}
        
{/* Featured Agricultural Stories */}
<section className="grid gap-7 lg:grid-cols-3">

  {/* Main Featured Story */}
  <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm lg:col-span-2">
    <div className="relative h-[300px] overflow-hidden md:h-[390px]">
      <img
        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200"
        alt="Green agricultural farmland"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 p-7 text-white md:p-10">
        <span className="rounded-full bg-[#267447] px-4 py-2 text-xs font-bold">
          EDITOR'S FEATURE
        </span>
        <h2 className="mt-5 max-w-2xl text-3xl font-black leading-tight md:text-4xl">
          Building a More Productive and Sustainable African Agricultural Sector
        </h2>
        <p className="mt-3 text-sm text-green-50">
          Exploring the people, ideas and innovations transforming agriculture.
        </p>
      </div>
    </div>

    <div className="p-7">
      <p className="text-xs font-bold tracking-wider text-[#267447]">
        AGRICULTURE • AFRICA
      </p>
      <p className="mt-3 leading-7 text-gray-600">
        Agriculture is central to Africa's economic development, employment
        and food security. Discover the opportunities and challenges shaping
        the continent's agricultural future.
      </p>
      <a href="#news" className="mt-5 inline-block text-sm font-bold text-[#174b32] hover:text-[#267447]">
        Explore agricultural stories →
      </a>
      <p className="mt-4 text-xs text-gray-400">
        Naija Agric Insights · Editorial feature preview
      </p>
    </div>
  </article>

  {/* Supporting Stories */}
  <aside className="flex flex-col gap-6">

    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <img
        src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800"
        alt="Farmer working in a crop field"
        className="h-44 w-full object-cover"
      />
      <div className="p-5">
        <p className="text-[10px] font-black tracking-wider text-[#267447]">
          CROP PRODUCTION
        </p>
        <h3 className="mt-2 text-xl font-bold leading-7">
          Improving Agricultural Productivity Through Better Farming Practices
        </h3>
        <p className="mt-3 text-sm leading-6 text-gray-500">
          Practical approaches to improving production and supporting farmers.
        </p>
        <a href="#news" className="mt-4 inline-block text-sm font-bold text-[#174b32]">
          Explore story →
        </a>
      </div>
    </article>

    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <img
        src="https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?w=800"
        alt="Agricultural crops growing in a field"
        className="h-44 w-full object-cover"
      />
      <div className="p-5">
        <p className="text-[10px] font-black tracking-wider text-[#267447]">
          FOOD SECURITY
        </p>
        <h3 className="mt-2 text-xl font-bold leading-7">
          Strengthening Food Systems and Agricultural Value Chains in Africa
        </h3>
        <p className="mt-3 text-sm leading-6 text-gray-500">
          Understanding how production, storage and distribution contribute
          to food security.
        </p>
        <a href="#news" className="mt-4 inline-block text-sm font-bold text-[#174b32]">
          Explore story →
        </a>
      </div>
    </article>

  </aside>
</section>


        {/* News section */}
       
{/* Latest Agricultural Stories */}
<section id="news" className="mt-16">

  {/* Section Heading */}
  <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
    <div>
      <p className="text-xs font-bold tracking-[3px] text-[#267447]">
        THE LATEST FROM AGRICULTURE
      </p>
      <h2 className="mt-2 text-3xl font-black md:text-4xl">
        Latest Agricultural Stories
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-500">
        Stay informed with agricultural developments, industry analysis,
        innovations and opportunities shaping Nigeria and Africa.
      </p>
    </div>

    <a href="#newsletter"
      className="rounded-lg bg-[#174b32] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#267447]">
      Join Our Newsletter →
    </a>
  </div>

  {/* Category Labels */}
  <div className="mb-8 flex flex-wrap gap-3">
    {["ALL STORIES", "NIGERIA", "AFRICA", "AGRIBUSINESS",
      "TECHNOLOGY", "FOOD SECURITY", "AGRICULTURAL FINANCE"].map((item) => (
      <a
        key={item}
        href="#news"
        className="rounded-full border border-gray-200 bg-white px-4 py-2 text-[11px] font-bold tracking-wide text-gray-600 transition hover:border-[#267447] hover:bg-green-50 hover:text-[#174b32]"
      >
        {item}
      </a>
    ))}
  </div>

  {/* News Cards */}
  <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg">
      <img
        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700"
        alt="Agricultural farmland"
        className="h-48 w-full object-cover"
      />
      <div className="p-5">
        <p className="text-[10px] font-black tracking-wider text-[#267447]">
          AGRIBUSINESS
        </p>
        <h3 className="mt-3 text-lg font-bold leading-6">
          Building a Stronger Agricultural Economy in Nigeria
        </h3>
        <p className="mt-3 text-sm leading-6 text-gray-500">
          Explore the opportunities for farmers, entrepreneurs and
          agribusiness investors.
        </p>
        <a href="#news" className="mt-5 inline-block text-sm font-bold text-[#174b32]">
          Read Article →
        </a>
        <p className="mt-4 border-t border-gray-100 pt-3 text-xs text-gray-400">
          Naija Agric Insights · Preview
        </p>
      </div>
    </article>

    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg">
      <img
        src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=700"
        alt="Crop production and farming"
        className="h-48 w-full object-cover"
      />
      <div className="p-5">
        <p className="text-[10px] font-black tracking-wider text-[#267447]">
          CROP PRODUCTION
        </p>
        <h3 className="mt-3 text-lg font-bold leading-6">
          Improving Crop Productivity Through Modern Farming
        </h3>
        <p className="mt-3 text-sm leading-6 text-gray-500">
          Understand practical approaches to better agricultural
          production and farm management.
        </p>
        <a href="#news" className="mt-5 inline-block text-sm font-bold text-[#174b32]">
          Read Article →
        </a>
        <p className="mt-4 border-t border-gray-100 pt-3 text-xs text-gray-400">
          Naija Agric Insights · Preview
        </p>
      </div>
    </article>

    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg">
      <img
        src="https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?w=700"
        alt="Green agricultural crops"
        className="h-48 w-full object-cover"
      />
      <div className="p-5">
        <p className="text-[10px] font-black tracking-wider text-[#267447]">
          FOOD SECURITY
        </p>
        <h3 className="mt-3 text-lg font-bold leading-6">
          Strengthening Food Supply Chains Across Africa
        </h3>
        <p className="mt-3 text-sm leading-6 text-gray-500">
          Discover why storage, transportation and market access
          matter for food security.
        </p>
        <a href="#news" className="mt-5 inline-block text-sm font-bold text-[#174b32]">
          Read Article →
        </a>
        <p className="mt-4 border-t border-gray-100 pt-3 text-xs text-gray-400">
          Naija Agric Insights · Preview
        </p>
      </div>
    </article>

    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg">
      <img
        src="https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?w=700"
        alt="Agricultural farm landscape"
        className="h-48 w-full object-cover"
      />
      <div className="p-5">
        <p className="text-[10px] font-black tracking-wider text-[#267447]">
          AGRICULTURAL TECHNOLOGY
        </p>
        <h3 className="mt-3 text-lg font-bold leading-6">
          How Technology Is Transforming African Agriculture
        </h3>
        <p className="mt-3 text-sm leading-6 text-gray-500">
          Explore the role of digital innovation in farming
          and agricultural value chains.
        </p>
        <a href="#news" className="mt-5 inline-block text-sm font-bold text-[#174b32]">
          Read Article →
        </a>
        <p className="mt-4 border-t border-gray-100 pt-3 text-xs text-gray-400">
          Naija Agric Insights · Preview
        </p>
      </div>
    </article>

  </div>
</section>


        <NewsletterForm />
      
</div>


      {/* Footer */}
      <footer className="mt-14 bg-[#123c2b] px-5 py-10 text-center text-white">
        <h2 className="text-xl font-black">NAIJA AGRIC INSIGHTS</h2>
        <p className="mt-3 text-sm text-green-100">
          Connecting Agricultural News, Knowledge and Opportunities.
        </p>
        <p className="mt-6 text-xs text-green-200">
          © 2026 Naija Agric Insights. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
