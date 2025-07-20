import React from 'react';
// ResultsList: Displays latest results
const results = [
  'Bihar CET B.Ed 2nd Merit List 2025 – Out',
  'Bihar Diploma DECE LE 2025 1st Round Allotment Result – Out',
  'MP MPESB ADDET Result 2025 – Out',
  'NTA UGC NET June Result 2025 – Soon',
  'IIT JEE Advanced Score Card 2025 – Out',
];

const ResultsList = () => (
  <section className="results-list" aria-label="Results">
    <h2 className="results-list__title">Results</h2>
    <ul className="results-list__ul">
      {results.map((result, idx) => (
        <li className="results-list__item" key={idx}>{result}</li>
      ))}
    </ul>
    <a href="#" className="results-list__view-more view-more">View More</a>
  </section>
);

export default ResultsList; 