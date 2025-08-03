import React from 'react';
// Footer: Site footer with copyright and links
const Footer = () => (
  <footer className="footer bg-gray-900 text-white py-8 mt-auto" aria-label="Site Footer">
    <div className="footer__content max-w-4xl mx-auto flex flex-col items-center gap-4">
      <p className="footer__copyright font-semibold text-base">© 2025 Sarkari Result • Modern Redesign</p>
      <ul className="footer__links flex gap-6">
        <li className="footer__item"><a className="footer__link text-blue-400 hover:text-purple-400 font-semibold transition" href="#">Privacy Policy</a></li>
        <li className="footer__item"><a className="footer__link text-blue-400 hover:text-purple-400 font-semibold transition" href="#">Disclaimer</a></li>
        <li className="footer__item"><a className="footer__link text-blue-400 hover:text-purple-400 font-semibold transition" href="#">Contact Us</a></li>
      </ul>
    </div>
  </footer>
);

export default Footer; 