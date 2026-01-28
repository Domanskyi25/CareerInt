import { Mail, Phone } from "lucide-react";

export default function CareerFooter() {
  const footerLinks = {
    contact: {
      title: "Contact us",
      items: [
        {
          label: "Email",
          value: "info@intellias.com",
          href: "mailto:info@intellias.com",
        },
        { label: "Phone", value: "+1 857 444 0442", href: "tel:+18574440442" },
      ],
    },
    social: {
      title: "Social media",
      items: [
        "Facebook",
        "Instagram",
        "LinkedIn",
        "Twitter",
        "Telegram",
        "YouTube",
      ],
    },
    services: {
      title: "Services",
      items: [
        "AI services",
        "Digital Transformation",
        "Software Engineering",
        "Product Innovation",
      ],
    },
    industries: {
      title: "Industries",
      items: [
        "Mobility",
        "Retail",
        "Healthcare",
        "iGaming",
        "Agriculture",
        "High-Tech",
        "Travel & Hospitality",
        "FS&I",
      ],
    },
    about: {
      title: "About",
      items: ["Who we are", "Newsroom", "Innovations", "Clients"],
    },
    careers: {
      title: "Careers",
      items: [
        "How we hire",
        "All jobs",
        "Why Intellias",
        "Highlights",
        "Relocate to Portugal",
      ],
    },
  };

  return (
    <footer className="w-full bg-gray-950 text-white">
      {/* Top Footer */}
      <div className="px-6 sm:px-8 md:px-12 lg:px-16 py-20 border-b border-gray-800">
        <div className="mx-auto max-w-6xl space-y-16">
          {/* Newsletter */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left - Contact */}
            <div className="space-y-12 border-r border-gray-700 pr-12">
              <div className="space-y-3">
                <h3 className="text-gray-400 text-lg">
                  {footerLinks.contact.title}
                </h3>
                <div className="space-y-2">
                  {footerLinks.contact.items.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      className="block text-white text-sm hover:underline transition-colors"
                    >
                      {item.value}
                    </a>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-gray-400 text-lg">
                  {footerLinks.social.title}
                </h3>
                <div className="space-y-2">
                  {footerLinks.social.items.map((item, idx) => (
                    <div key={idx} className="text-white text-sm">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Links Grid */}
            <div className="grid grid-cols-2 gap-8 pl-12">
              {Object.entries(footerLinks).map(
                ([key, section]) =>
                  !["contact", "social"].includes(key) && (
                    <div key={key} className="space-y-3">
                      <h3 className="text-gray-400 text-lg font-medium">
                        {section.title}
                      </h3>
                      <div className="space-y-2">
                        {Array.isArray(section.items) &&
                          section.items.map((item, idx) => (
                            <div
                              key={idx}
                              className="text-white text-sm hover:text-emerald-400 transition-colors cursor-pointer"
                            >
                              {item}
                            </div>
                          ))}
                      </div>
                    </div>
                  ),
              )}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="border-t border-gray-800 pt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Logo Section */}
              <div className="flex items-center">
                <span className="text-3xl font-bold tracking-tight">
                  intellias
                </span>
              </div>

              {/* Newsletter Form */}
              <div className="space-y-6">
                <div className="border-b border-gray-800 pb-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full bg-transparent text-white placeholder-gray-600 outline-none text-sm"
                  />
                </div>
                <button className="w-full bg-white text-gray-950 font-semibold py-3 rounded hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
                <label className="flex items-start gap-3 text-gray-500 text-xs">
                  <input
                    type="checkbox"
                    className="mt-1 rounded border-gray-600"
                  />
                  <span className="leading-relaxed">
                    I agree to receive future job offers and commercial
                    communications, including marketing information, as
                    specified in Intellias Privacy Policy.
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="px-6 sm:px-8 md:px-12 lg:px-16 py-6 border-t border-gray-800">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
            <span className="text-gray-700">|</span>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Cookie Policy
            </a>
            <span className="text-gray-700">|</span>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Imprint
            </a>
          </div>
          <p>2002-2026 Intellias. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
