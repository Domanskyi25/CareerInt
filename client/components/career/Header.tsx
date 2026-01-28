import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "About", href: "#about" },
    { label: "Careers", href: "/career" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="w-full px-16">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-gray-900">
              intellias
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex gap-4">
            <button className="px-6 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 rounded transition-colors">
              Sign in
            </button>
            <button className="px-6 py-2 text-sm font-medium bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors">
              Get started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="text-gray-900" />
            ) : (
              <Menu size={24} className="text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden border-t border-gray-200 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-gray-200 pt-3 space-y-2">
              <button className="w-full px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 rounded transition-colors">
                Sign in
              </button>
              <button className="w-full px-4 py-2 text-sm font-medium bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors">
                Get started
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
