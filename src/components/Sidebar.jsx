import React from 'react';
// Sidebar: Quick links and social media
const Sidebar = () => (
  <aside className="sidebar" aria-label="Sidebar">
    <section className="sidebar__quick-links">
      <h3 className="sidebar__section-title">Quick Links</h3>
      <ul className="sidebar__list">
        <li className="sidebar__item"><a className="sidebar__link" href="#">Latest Jobs</a></li>
        <li className="sidebar__item"><a className="sidebar__link" href="#">Admit Card</a></li>
        <li className="sidebar__item"><a className="sidebar__link" href="#">Results</a></li>
      </ul>
    </section>
    <section className="sidebar__social-media">
      <h3 className="sidebar__section-title">Follow Us</h3>
      <ul className="sidebar__list">
        <li className="sidebar__item"><a className="sidebar__link" href="#">Telegram</a></li>
        <li className="sidebar__item"><a className="sidebar__link" href="#">WhatsApp</a></li>
        <li className="sidebar__item"><a className="sidebar__link" href="#">Facebook</a></li>
        <li className="sidebar__item"><a className="sidebar__link" href="#">Twitter</a></li>
        <li className="sidebar__item"><a className="sidebar__link" href="#">Instagram</a></li>
      </ul>
    </section>
  </aside>
);

export default Sidebar; 