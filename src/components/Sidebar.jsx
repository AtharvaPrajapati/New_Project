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
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1rem' }}>
        <img src="/sarkari-exam-logo.png" alt="Sarkari Exam Logo" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
      </div>
      <ul className="sidebar__list">
        <li className="sidebar__item"><a className="sidebar__link" href="#">Telegram</a></li>
        <li className="sidebar__item"><a className="sidebar__link" href="#">WhatsApp</a></li>
        <li className="sidebar__item">
          <a className="sidebar__link" href="https://www.facebook.com/share/v/19WfEvWQ2m/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#1877F3" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
            Facebook
          </a>
        </li>
        <li className="sidebar__item"><a className="sidebar__link" href="#">Twitter</a></li>
        <li className="sidebar__item"><a className="sidebar__link" href="#">Instagram</a></li>
      </ul>
    </section>
  </aside>
);

export default Sidebar; 