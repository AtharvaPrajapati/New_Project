import React from 'react';
// FeaturedForms: Displays important/featured forms as cards
const forms = [
  'SSC MTS / Havildar Online Form 2025',
  'RRB Technician Form (6238 Post)',
  'IB ACIO Grade-II Form (3717 Posts)',
  'BOB LBO Online Form (2500 Post)',
  'UP Police Constable Form (19,220 Post)',
  'Army School AWES TGT, PGT, PRT Form',
  'IBPS PO 15th Form (5208 Posts)',
  'Rajasthan High Court Peon Form',
];

const FeaturedForms = () => (
  <section className="featured-forms" aria-label="Important Forms">
    <h2 className="featured-forms__title">Important Forms</h2>
    <div className="featured-forms__list">
      {forms.map((form, idx) => (
        <div className="featured-forms__card" key={idx}>{form}</div>
      ))}
    </div>
  </section>
);

export default FeaturedForms; 