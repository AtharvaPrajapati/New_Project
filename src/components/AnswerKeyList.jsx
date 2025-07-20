import React from 'react';
// AnswerKeyList: Displays latest answer keys
const answerKeys = [
  'NTA ICAR AIEEA PG and PhD Answer Key 2025 – Out',
  'DFCCIL MTS, Executive & Jr. Manager Answer Key 2025 – Out',
  'Bihar SHSB CHO Answer Key 2025 – Out',
  'CBSE Junior Assistant & Superintendent Tier-2 Answer Key 2025 – Out',
  'CPCB Various Post Answer Key 2025',
];

const AnswerKeyList = () => (
  <section className="answer-key-list" aria-label="Answer Keys">
    <h2 className="answer-key-list__title">Answer Keys</h2>
    <ul className="answer-key-list__ul">
      {answerKeys.map((key, idx) => (
        <li className="answer-key-list__item" key={idx}>{key}</li>
      ))}
    </ul>
    <a href="#" className="answer-key-list__view-more view-more">View More</a>
  </section>
);

export default AnswerKeyList; 