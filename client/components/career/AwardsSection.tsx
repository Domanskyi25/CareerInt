import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AwardsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const awards = [
    {
      id: 1,
      title: "Gartner",
      description: "Gartner Acknowledges for AI Expertise in Banking",
    },
    {
      id: 2,
      title: "Everest Group",
      description:
        "Intellias Highlighted for Product Engineering Services in Everest PEAK Matrix",
    },
    {
      id: 3,
      title: "Frost & Sullivan",
      description:
        "Intellias Featured in Global AI Reported by Frost & Sullivan",
    },
    {
      id: 4,
      title: "Zinnov",
      description:
        "Intellias Recognized by Zinnia for Engineering R&D Excellence in 16 Categories",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16 py-20 md:py-32">
        <div className="space-y-20">
          {/* Header */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-[#00EF99] text-black px-4 py-2 text-sm font-medium">
                Awards
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight">
              Awards & recognitions
            </h2>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            >
              {awards.map((award) => (
                <div
                  key={award.id}
                  className="flex-shrink-0 w-full md:w-96 bg-gray-50 rounded-lg p-8 space-y-4 border border-gray-200"
                >
                  <div className="w-full h-32 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-gray-600 font-semibold">
                      {award.title} Logo
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {award.title}
                    </h3>
                    <p className="text-gray-600">{award.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => scroll("left")}
                className="p-3 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
                aria-label="Previous awards"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-3 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
                aria-label="Next awards"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
