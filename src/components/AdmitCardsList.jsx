import React from 'react';
// AdmitCardsList: Displays latest admit cards
const admitCards = [
  'NTA CSIR UGC NET June Exam City Details 2025 – Out',
  'NEET PG Exam City Details 2025',
  'MPESB PAT Admit Card 2025 – Out',
  'BPSC AEE & Other Post Admit Card Date 2025',
  'Bihar Vidhan Sabha Junior Clerk 02/2024 Admit Card 2025 – Out',
];

const AdmitCardsList = () => (
  <section className="admit-cards-list" aria-label="Admit Cards">
    <h2 className="admit-cards-list__title">Admit Cards</h2>
    <ul className="admit-cards-list__ul">
      {admitCards.map((card, idx) => (
        <li className="admit-cards-list__item" key={idx}>{card}</li>
      ))}
    </ul>
    <a href="#" className="admit-cards-list__view-more view-more">View More</a>
  </section>
);

export default AdmitCardsList; 