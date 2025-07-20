import React from 'react';
// HeroSection: Main hero/banner area with tagline and action buttons
const HeroSection = () => (
  <section className="hero-section" aria-label="Sarkari Result Hero">
    <div className="hero-section__container">
      <h2 className="hero-section__title">Welcome to India's #1 Government Job Portal</h2>
      <p className="hero-section__desc">Find the latest government jobs, results, admit cards, answer keys, and more—all in one place. Stay ahead in your career journey with trusted updates and resources.</p>
      <div className="hero-section__buttons">
        <button className="hero-section__btn hero-section__btn--whatsapp">Join WhatsApp</button>
        <button className="hero-section__btn hero-section__btn--tools">SarkariResult Tools</button>
      </div>
    </div>
  </section>
);

export default HeroSection; 