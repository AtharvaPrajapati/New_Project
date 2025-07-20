import React from 'react';
// DocumentsList: Displays document-related services
const documents = [
  'UPSC OTR Online Form 2025',
  'SSC OTR Online Form 2025 – Re-Open',
  'PAN Card Registration, Correction & Other Service 2025',
  'Aadhar Card Download, Correction, Status 2025',
  'UP Income, Cast, Residential Certificate Online Verification 2025',
];

const DocumentsList = () => (
  <section className="documents-list" aria-label="Documents">
    <h2 className="documents-list__title">Documents</h2>
    <ul className="documents-list__ul">
      {documents.map((doc, idx) => (
        <li className="documents-list__item" key={idx}>{doc}</li>
      ))}
    </ul>
    <a href="#" className="documents-list__view-more view-more">View More</a>
  </section>
);

export default DocumentsList; 