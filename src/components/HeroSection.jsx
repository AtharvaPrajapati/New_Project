import React from 'react';
// HeroSection: Main hero/banner area with tagline and action buttons
const HeroSection = () => (
  <section className="hero-section bg-gradient-to-br from-blue-500 via-purple-400 to-pink-300 text-white py-16 rounded-b-3xl shadow-xl" aria-label="Sarkari Result Hero">
    <div className="hero-section__container pt-3 max-w-2xl mx-auto text-center">
      <h2 className="hero-section__title text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg tracking-tight">Welcome to India's #1 Government Job Portal</h2>
      <p className="hero-section__desc text-lg md:text-xl font-medium mb-8 text-white/90">Find the latest government jobs, results, admit cards, answer keys, and more—all in one place. Stay ahead in your career journey with trusted updates and resources.</p>
      <div className="hero-section__buttons flex flex-col sm:flex-row justify-center gap-4">
        <button className="hero-section__btn bg-white text-blue-600 font-bold px-7 py-3 rounded-lg shadow-md hover:bg-blue-50 hover:text-blue-700 transition-all text-lg">Join WhatsApp</button>
        <button className="hero-section__btn bg-gradient-to-r from-blue-600 to-purple-500 text-white font-bold px-7 py-3 rounded-lg shadow-md hover:from-blue-700 hover:to-purple-600 transition-all text-lg">SarkariResult Tools</button>
      </div>
    </div>
  </section>
);

export default HeroSection; 