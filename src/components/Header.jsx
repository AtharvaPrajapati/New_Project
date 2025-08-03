import React from 'react';
// Header: Top site branding
const Header = () => (
  <header className="header bg-gradient-to-r from-blue-600 to-purple-500 text-white py-8 shadow-lg" aria-label="Site Header">
    <div className="header__content max-w-3xl mx-auto text-center">
      <h1 className="header__title text-4xl md:text-5xl font-extrabold mb-2 tracking-tight drop-shadow-lg">Sarkari Result</h1>
      <p className="header__tagline text-lg md:text-xl font-semibold text-white/90">India's No.1 Government Job Portal (Modern UI)</p>
    </div>
  </header>
);

export default Header; 