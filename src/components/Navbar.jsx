import React, { useState } from 'react';
import logo from '../assests/WhatsApp Image 2025-07-22 at 15.15.25_d4648bd3.jpg';
const navLinks = [
  { label: 'Home', href: '#', active: true },
  { label: 'Latest Jobs', href: '#' },
  { label: 'Admit Card', href: '#' },
  { label: 'Result', href: '#' },
  { label: 'Answer Key', href: '#' },
  { label: 'News', href: '#' },
  { label: 'Syllabus', href: '#' },
  { label: 'Contact Us', href: '#' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative z-50">
      {/* Gradient top line */}
      <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600" />

      {/* Navbar container */}
      <div className="backdrop-blur-md bg-white/80 shadow-md fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center z-50">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-xl font-bold text-gray-800">
          <img src={logo} alt="Sarkari Exam Logo" style={{ width: '48px', height: '48px', borderRadius: '50%' }} />
        </a>

        {/* Hamburger for mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden focus:outline-none"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-gray-900 rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block h-0.5 w-6 bg-gray-900 rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-gray-900 rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </div>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex items-center gap-6 font-medium text-gray-700">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`px-2 py-1 transition-all duration-200 border-b-2 transform hover:scale-120 hover:scale-125 hover:text-blue-600 hover:border-blue-600 ${
                  link.active
                    ? 'text-blue-600 border-blue-600 font-semibold'
                    : 'border-transparent'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-black bg-opacity-40 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl px-6 pt-6 pb-8 transition-transform duration-300 z-50 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Icon */}
        <button
          className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-red-500 transition"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          &times;
        </button>

        <ul className="flex flex-col gap-4 text-gray-800 font-semibold mt-12">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`block px-3 py-2 rounded-md transition-all duration-150 transform hover:scale-120 hover:scale-125 hover:text-blue-600 hover:bg-blue-50 ${
                  link.active ? 'text-blue-600 bg-blue-50' : ''
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
