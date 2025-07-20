import React from 'react';
// LatestJobsList: Displays latest jobs
const jobs = [
  'Bank Of Baroda BOB LBO Online Form 2025 – Start',
  'Bihar BSEB Sakshamta Pariksha Phase 4th & 5th Online Form 2025 – Date Extend',
  'SSC MTS / Havildar Online Form 2025 – Start',
  'IB ACIO Grade-II / Executive Online Form 2025 – Start',
  'Railway ICF Trade Apprentice Online Form 2025',
];

const LatestJobsList = () => (
  <section className="latest-jobs-list" aria-label="Latest Jobs">
    <h2 className="latest-jobs-list__title">Latest Jobs</h2>
    <ul className="latest-jobs-list__ul">
      {jobs.map((job, idx) => (
        <li className="latest-jobs-list__item" key={idx}>{job}</li>
      ))}
    </ul>
    <a href="#" className="latest-jobs-list__view-more view-more">View More</a>
  </section>
);

export default LatestJobsList; 