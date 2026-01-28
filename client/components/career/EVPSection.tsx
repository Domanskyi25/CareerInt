export default function EVPSection() {
  const services = [
    {
      id: 1,
      title: "Mobility",
      description: "Powering 170 million vehicles navigating worldwide",
      gradient: "bg-gradient-to-br from-gray-200 to-gray-300",
    },
    {
      id: 2,
      title: "Retail",
      description:
        "Elevating retailers and brands to double-digit revenue growth",
      gradient: "bg-gradient-to-br from-gray-200 to-gray-300",
    },
    {
      id: 3,
      title: "iGaming",
      description:
        "Deliver secure, engaging, and user-centric iGaming experiences",
      gradient: "bg-gradient-to-br from-gray-200 to-gray-300",
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="px-16 py-20 md:py-32">
        <div className="space-y-20">
          {/* Header */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-[#00EF99] text-black px-4 py-2 text-sm font-medium">
                What makes us different
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight max-w-3xl">
              We bring clarity to your career
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="space-y-4">
                {/* Image Placeholder */}
                <div
                  className={`${service.gradient} w-full aspect-square rounded-lg flex items-end justify-start p-4`}
                >
                  <div className="bg-white px-5 py-3 rounded font-semibold text-gray-900 text-lg">
                    {service.title}
                  </div>
                </div>
                {/* Description */}
                <p className="text-xl font-light text-gray-900 leading-tight">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
