export default function NumbersSection() {
  const stats = [
    {
      id: 1,
      number: "20+",
      label: "Years of experience",
    },
    {
      id: 2,
      number: "25",
      label: "Countries with clients",
    },
    {
      id: 3,
      number: "60%",
      label: "Senior engineering",
    },
    {
      id: 4,
      number: "3000+",
      label: "Specialists on board",
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16 py-20 md:py-32">
        <div className="space-y-20">
          {/* Header */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-[#00EF99] text-black px-4 py-2 text-sm font-medium">
                Our numbers
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight">
              Numbers speak for themselves
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {stats.map((stat) => (
              <div key={stat.id} className="space-y-4">
                <div className="text-7xl md:text-9xl font-light text-gray-900 leading-none">
                  {stat.number}
                </div>
                <p className="text-lg text-gray-600 font-light">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
