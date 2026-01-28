import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const tags = ["Design", "Full-stack", "Java", "Remote", "iGaming"];

  return (
    <section className="w-full bg-white">
      {/* Hero background with white content block */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-white">
        {/* Left side - White content block */}
        <div className="bg-white px-16 py-12 md:py-24 flex flex-col justify-between">
          <div>
            <p className="text-right text-xs md:text-sm text-gray-800 mb-12 font-medium">
              <span className="font-semibold">403</span> jobs in{" "}
              <span className="font-semibold">25</span> countries
            </p>
            <h1 className="text-6xl md:text-7xl xl:text-8xl font-bold text-gray-900 mb-12 leading-tight">
              Clear career
            </h1>
          </div>

          {/* Search section */}
          <div className="space-y-6">
            {/* Search input with border */}
            <div className="border-b-2 border-black pb-4">
              <div className="flex items-center justify-between gap-4">
                <input
                  type="text"
                  placeholder="Find your role"
                  className="flex-1 text-base bg-transparent outline-none placeholder-gray-600 font-medium"
                />
                <button className="bg-black text-white p-4 hover:bg-gray-800 transition-colors flex-shrink-0">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-2 bg-gray-100 text-gray-900 text-sm rounded hover:bg-gray-200 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right side - Image/Gradient */}
        <div className="hidden md:block bg-gradient-to-br from-gray-200 to-gray-400"></div>
      </div>
    </section>
  );
}
