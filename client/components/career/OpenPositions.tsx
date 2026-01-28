import { useState } from "react";
import { MapPin } from "lucide-react";

export default function OpenPositions() {
  const [activeTab, setActiveTab] = useState("engineering");

  const categories = ["engineering", "qa", "design", "non-tech"];

  const positions = {
    engineering: [
      {
        id: 1,
        title: "Senior Database Expert",
        category: "Engineering",
        locations: "Bulgaria, Croatia, Poland, Portugal, Spain, Ukraine",
        urgent: true,
      },
      {
        id: 2,
        title: "Senior Database Expert",
        category: "Engineering",
        locations: "Bulgaria, Croatia, Poland, Portugal, Spain, Ukraine",
        urgent: true,
      },
    ],
    qa: [
      {
        id: 3,
        title: "QA Engineer",
        category: "QA",
        locations: "Bulgaria, Croatia, Poland, Portugal, Spain, Ukraine",
        urgent: false,
      },
    ],
    design: [
      {
        id: 4,
        title: "UX/UI Designer",
        category: "Design",
        locations: "Remote",
        urgent: true,
      },
    ],
    "non-tech": [
      {
        id: 5,
        title: "Project Manager",
        category: "Non-tech",
        locations: "Bulgaria, Poland",
        urgent: false,
      },
    ],
  };

  const currentPositions = positions[activeTab as keyof typeof positions] || [];

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16 py-20 md:py-32">
        <div className="space-y-16">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="bg-[#00EF99] text-black px-4 py-2 text-sm font-medium">
                  Our vacancies
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight">
                Recent open positions
              </h2>
            </div>
            <button className="px-8 py-3 bg-gray-900 text-white font-semibold rounded hover:bg-gray-800 transition-colors w-fit">
              Explore all vacancies
            </button>
          </div>

          {/* Tabs and Positions */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Category Tabs */}
            <div className="flex md:flex-col gap-2 border-l border-gray-300 md:border-l md:border-gray-300">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-6 py-4 text-left font-medium transition-all border-l-4 ${
                    activeTab === category
                      ? "border-l-gray-900 text-gray-900 bg-white"
                      : "border-l-transparent text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            {/* Position Cards */}
            <div className="md:col-span-3 space-y-4">
              {currentPositions.length > 0 ? (
                currentPositions.map((position) => (
                  <div
                    key={position.id}
                    className="border border-gray-200 rounded-lg p-6 space-y-4 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 space-y-2">
                        <p className="text-sm text-gray-600">
                          {position.category}
                        </p>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {position.title}
                        </h3>
                      </div>
                      {position.urgent && (
                        <span className="px-3 py-1 bg-[#00EF99] text-black text-xs font-semibold rounded">
                          Urgent
                        </span>
                      )}
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex items-start gap-2 text-sm text-gray-600">
                        <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                        <span>{position.locations}</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-600 text-center py-8">
                  No positions available for this category.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
