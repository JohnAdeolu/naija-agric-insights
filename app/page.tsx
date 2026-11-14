
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
        <section className="mb-9">
          <p className="mb-2 text-xs font-bold tracking-[3px] text-[#267447]">
            AGRICULTURE NEWS. KNOWLEDGE. OPPORTUNITIES.
          </p>
          <h2 className="max-w-3xl text-3xl font-black leading-tight md:text-5xl">
            Everything Happening in Agriculture,{" "}
            <span className="text-[#267447]">In One Place.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
            Your gateway to agricultural news, agribusiness developments,
            food security updates and opportunities across Nigeria, Africa
            and the world.
          </p>
        </section>

        {/* Featured story */}
        <section className="grid gap-6 lg:grid-cols-3">
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm lg:col-span-2">
            <div className="flex min-h-[290px] items-center justify-center bg-gradient-to-br from-[#123c2b] via-[#23734a] to-[#a4b96a] p-8 text-center">
              <div>
                <div className="mb-5 text-7xl">🌍🌾</div>
                <p className="text-xs font-bold tracking-[4px] text-green-100">
                  AGRICULTURE CONNECTS US ALL
                </p>
                <h3 className="mt-4 text-3xl font-black text-white md:text-4xl">
                  THE FUTURE OF AFRICAN AGRICULTURE
                </h3>
              </div>
            </div>
            <div className="p-7">
              <span className="text-xs font-bold text-[#267447]">
                EDITOR'S PICK
              </span>
              <h3 className="mt-3 text-2xl font-bold leading-tight">
                Building a More Productive, Profitable and Sustainable
                Agricultural Sector
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Discover the ideas, people and developments shaping
                agriculture across Africa.
              </p>
              <p className="mt-4 text-xs text-gray-400">
                NAIJA AGRIC INSIGHTS · DEMONSTRATION CONTENT
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="rounded-2xl bg-[#174b32] p-7 text-white">
            <p className="text-xs font-bold tracking-[3px] text-green-200">
              WHY WE EXIST
            </p>
            <h3 className="mt-5 text-3xl font-black">
              Agriculture Deserves a Bigger Conversation.
            </h3>
            <p className="mt-5 leading-7 text-green-100">
              We bring agricultural stories, market developments,
              research and opportunities together to help people
              make informed decisions.
            </p>
            <div className="mt-8 border-t border-green-700 pt-6">
              <p className="text-sm font-bold">Our coverage</p>
              <p className="mt-2 text-sm leading-6 text-green-100">
                Nigeria · Africa · International
              </p>
            </div>
          </aside>
        </section>

        {/* News section */}
        <section id="news" className="mt-14">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-bold tracking-[3px] text-[#267447]">
                STAY INFORMED
              </p>
              <h2 className="mt-2 text-3xl font-black">
                Latest Agricultural Stories
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Sample stories for our first design preview.
              </p>
            </div>
            <span className="rounded-full bg-green-100 px-4 py-2 text-xs font-bold text-green-800">
              NEWSROOM PREVIEW
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stories.map((story) => (
              <article
                key={story.title}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`flex h-40 items-center justify-center bg-gradient-to-br ${story.color}`}
                >
                  <span className="text-6xl">{story.symbol}</span>
                </div>
                <div className="p-5">
                  <p className="text-[10px] font-black tracking-wider text-[#267447]">
                    {story.category}
                  </p>
                  <h3 className="mt-3 text-lg font-bold leading-6">
                    {story.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {story.description}
                  </p>
                  <div className="mt-5 border-t border-gray-100 pt-4 text-xs text-gray-400">
                    {story.source} · {story.time}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="mt-16 rounded-2xl bg-[#e7efe7] px-7 py-12 text-center md:px-16">
          <p className="text-xs font-bold tracking-[3px] text-[#267447]">
            THE AGRICULTURAL INFORMATION YOU NEED
          </p>
          <h2 className="mt-4 text-3xl font-black">
            Don't Miss an Agricultural Update.
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-600">
            Join our community and stay informed about agriculture,
            agribusiness, food security and emerging opportunities.
          </p>
          <p className="mt-6 text-sm font-bold text-[#174b32]">
            Newsletter subscriptions coming soon.
          </p>
        </section>
      </div>

      {/* Footer */}
      <footer className="mt-14 bg-[#123c2b] px-5 py-10 text-center text-white">
        <h2 className="text-xl font-black">NAIJA AGRIC INSIGHTS</h2>
        <p className="mt-3 text-sm text-green-100">
          Connecting Agricultural News, Knowledge and Opportunities.
        </p>
        <p className="mt-6 text-xs text-green-200">
          © {new Date().getFullYear()} Naija Agric Insights. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
