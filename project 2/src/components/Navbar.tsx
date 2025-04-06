import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const { pathname } = useLocation();
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'The Odyssey', href: '/the-odyssey' },
    { label: 'Operations', href: '/operations' },
    { label: 'About Us', href: '/about-us' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div>
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-heading font-semibold text-blue-900 border border-orange-500 px-2">ODYSSEON</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-12">
            {navItems.map(({ label, href }) => (
              <Link
                key={href}
                to={href}
                className={`nav-link ${pathname === href ? 'active' : ''}`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;