import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { Menu, X, Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Book", path: "/book" },
    { name: "Shop", path: "/shop" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-rose/30 selection:text-black">
      {/* Navigation */}
        <header className="sticky top-0 z-50 w-full bg-cream backdrop-blur-md border-b border-rose/10 transition-all duration-300">        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="text-2xl font-serif text-black hover:opacity-80 transition-opacity">
              Deedees Glam
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm tracking-wide uppercase font-medium transition-colors hover:text-rose ${
                    location.pathname === link.path ? "text-rose" : "text-black/70"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/book"
                className="bg-rose hover:bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 uppercase tracking-wider"
              >
                Book Now
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-20 bg-cream z-40 flex flex-col p-6 animate-in fade-in slide-in-from-top-4 duration-300 md:hidden">
            <nav className="flex flex-col gap-6 items-center pt-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-serif text-black hover:text-rose transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/book"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-6 bg-rose hover:bg-black text-white px-8 py-3 rounded-full text-lg font-medium transition-colors w-full text-center uppercase tracking-wider"
              >
                Book Now
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-black text-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="text-3xl font-serif mb-4 block">
                Deedees Glam
              </Link>
              <p className="text-cream/70 text-sm font-serif italic mb-6">
                "Flawless glam for every occasion"
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-rose transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-rose transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-rose transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-serif mb-6 uppercase tracking-wider text-gold">Quick Links</h4>
              <ul className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-cream/70 hover:text-rose transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-1 md:col-span-2">
              <h4 className="text-lg font-serif mb-6 uppercase tracking-wider text-gold">Contact Us</h4>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-rose shrink-0" />
                  <a href="tel:+447447499118" className="text-cream/70 hover:text-rose transition-colors text-sm">
                    +44 7447499118
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-rose shrink-0" />
                  <a href="mailto:deedeesglam@gmail.com" className="text-cream/70 hover:text-rose transition-colors text-sm">
                    deedeesglam@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-rose shrink-0" />
                  <span className="text-cream/70 text-sm">
                    East London, UK<br />
                    Available for travel
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-cream/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/50 text-sm">
              © {new Date().getFullYear()} Jinie Tech for Deedees Glam. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}