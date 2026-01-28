export default function SocialResponsibility() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16 py-20 md:py-32">
        <div className="space-y-16">
          {/* Header */}
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight">
            Social responsibility
          </h2>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="w-full aspect-video bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/19e862a54f37bd0fce39e3c06e104381f01a9aff?width=1296"
                alt="Team meeting"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-medium text-gray-900">
                Fundraising & volunteering
              </h3>
              <p className="text-lg text-gray-700 font-light leading-relaxed">
                We stand by things that matter to us and make an impact through
                fundraising and volunteering. Our commitment to social
                responsibility goes beyond the workplace, touching communities
                and causes we believe in.
              </p>
              <button className="px-8 py-3 bg-[#00EF99] text-black font-semibold rounded hover:bg-emerald-500 transition-colors">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
