import React from 'react';
// AdmissionsList: Displays latest admissions
const admissions = [
  'Bihar DCECE Polytechnic PP/ PMM Seat Matrix, Counselling/ Choice Filling',
  'SAV Bihar Class 11 Admission Online Form 2025',
  'BCECE-LE Online Counselling/ Choice Filling 2025',
  'UP Polytechnic JEECUP Online Counseling 2025',
  'NVS Class 6 Admission Online Form 2026',
];

const AdmissionsList = () => (
  <section className="admissions-list" aria-label="Admissions">
    <h2 className="admissions-list__title">Admissions</h2>
    <ul className="admissions-list__ul">
      {admissions.map((admission, idx) => (
        <li className="admissions-list__item" key={idx}>{admission}</li>
      ))}
    </ul>
    <a href="#" className="admissions-list__view-more view-more">View More</a>
  </section>
);

export default AdmissionsList; 