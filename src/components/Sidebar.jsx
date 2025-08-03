import React from 'react';
import logo from '../assests/WhatsApp Image 2025-07-22 at 15.15.25_d4648bd3.jpg';

// Sidebar: Quick links and social media
const Sidebar = () => (
  <aside className="sidebar flex flex-col gap-8" aria-label="Sidebar">
    <section className="sidebar__quick-links bg-white/90 rounded-2xl shadow-lg p-7 border border-blue-100">
      <h3 className="sidebar__section-title text-lg font-bold mb-4 text-blue-700">Quick Links</h3>
      <ul className="sidebar__list flex flex-col gap-2">
        <li className="sidebar__item"><a className="sidebar__link text-blue-600 hover:text-purple-600 font-semibold transition" href="#">Latest Jobs</a></li>
        <li className="sidebar__item"><a className="sidebar__link text-blue-600 hover:text-purple-600 font-semibold transition" href="#">Admit Card</a></li>
        <li className="sidebar__item"><a className="sidebar__link text-blue-600 hover:text-purple-600 font-semibold transition" href="#">Results</a></li>
      </ul>
    </section>
    <section className="sidebar__social-media bg-white/90 rounded-2xl shadow-lg p-7 border border-blue-100">
      <h3 className="sidebar__section-title text-lg font-bold mb-4 text-blue-700">Follow Us</h3>
      <div className="flex flex-col items-center mb-4">
        <img src={logo} alt="Sarkari Exam Logo" className="w-24 h-24 rounded-full shadow-md border-4 border-blue-100" />np
      </div>
      <ul className="sidebar__list flex flex-col gap-2">
        <li className="sidebar__item">
          <a className="sidebar__link text-blue-600 hover:text-purple-600 font-semibold transition" href="https://t.me/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {/* Telegram Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#229ED9" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.93 7.36l-1.6 7.56c-.12.54-.44.67-.89.42l-2.46-1.81-1.19 1.15c-.13.13-.24.24-.5.24l.18-2.53 4.61-4.16c.2-.18-.04-.28-.31-.1l-5.7 3.59-2.45-.77c-.53-.16-.54-.53.11-.78l9.56-3.69c.44-.16.82.1.68.77z"/></svg>
            Telegram
          </a>
        </li>
        <li className="sidebar__item">
          <a className="sidebar__link text-blue-600 hover:text-purple-600 font-semibold transition" href="https://wa.me/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {/* WhatsApp Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#25D366" viewBox="0 0 24 24"><path d="M12.004 2.003c-5.523 0-9.997 4.474-9.997 9.997 0 1.762.463 3.484 1.34 4.997l-1.409 5.151 5.287-1.389c1.478.805 3.153 1.241 4.779 1.241 5.523 0 9.997-4.474 9.997-9.997s-4.474-9.997-9.997-9.997zm0 18.181c-1.438 0-2.85-.377-4.073-1.09l-.292-.172-3.142.825.837-3.073-.19-.314c-.813-1.345-1.242-2.892-1.242-4.457 0-4.411 3.588-7.999 7.999-7.999s7.999 3.588 7.999 7.999-3.588 7.999-7.999 7.999zm4.406-5.845c-.242-.121-1.434-.707-1.655-.787-.222-.08-.384-.121-.545.121-.16.242-.625.787-.767.949-.141.161-.282.181-.524.06-.242-.121-1.022-.377-1.947-1.201-.72-.642-1.207-1.434-1.35-1.676-.141-.242-.015-.373.106-.494.109-.108.242-.282.363-.423.121-.141.161-.242.242-.403.08-.161.04-.302-.02-.423-.06-.121-.545-1.312-.747-1.797-.197-.474-.398-.41-.545-.418l-.463-.008c-.161 0-.423.06-.646.282-.222.222-.848.828-.848 2.018s.868 2.345.988 2.507c.121.161 1.707 2.607 4.141 3.553.579.199 1.029.317 1.38.406.579.147 1.106.127 1.523.077.465-.056 1.434-.586 1.637-1.152.202-.566.202-1.051.141-1.152-.06-.101-.221-.161-.463-.282z"/></svg>
            WhatsApp
          </a>
        </li>
        <li className="sidebar__item">
          <a className="sidebar__link text-blue-600 hover:text-purple-600 font-semibold transition" href="https://www.facebook.com/share/v/19WfEvWQ2m/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {/* Facebook Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#1877F3" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
            Facebook
          </a>
        </li>
        <li className="sidebar__item">
          <a className="sidebar__link text-blue-600 hover:text-purple-600 font-semibold transition" href="https://twitter.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {/* Twitter Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#1DA1F2" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg>
            Twitter
          </a>
        </li>
        <li className="sidebar__item">
          <a className="sidebar__link text-blue-600 hover:text-purple-600 font-semibold transition" href="https://instagram.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {/* Instagram Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#E4405F" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.425 3.678 1.406c-.98.98-1.274 2.092-1.334 3.374C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.06 1.282.354 2.394 1.334 3.374.98.98 2.092 1.274 3.374 1.334C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.282-.06 2.394-.354 3.374-1.334.98-.98 1.274-2.092 1.334-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.06-1.282-.354-2.394-1.334-3.374-.98-.98-2.092-1.274-3.374-1.334C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
            Instagram
          </a>
        </li>
      </ul>
    </section>
  </aside>
);

export default Sidebar; 