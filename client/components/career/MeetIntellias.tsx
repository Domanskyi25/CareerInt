export default function MeetIntellias() {
  return (
    <section className="w-full bg-white">
      <div className="px-16 py-20 md:py-32">
        <div className="space-y-16">
          {/* Header */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-[#00EF99] text-black px-4 py-2 text-sm font-medium">
                Meet Intellias
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div></div>
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight">
                Intellias is an AI-enabled product engineering and digital
                solutions partner. We work with Fortune 500 companies worldwide
                to deliver mission-
                <span className="text-gray-600">
                  critical projects and measurable outcomes that drive lasting
                  change.
                </span>
              </h2>
              <p className="text-gray-700 text-lg font-light leading-relaxed">
                With over two decades of experience, we transform digital
                landscapes for industry leaders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
