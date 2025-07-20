import React from 'react';

const MainContent = () => (
  <main className="main-content">
    <section className="featured-jobs">
      <h2>Featured Jobs</h2>
      <div className="card-list">
        <div className="card">SSC CHSL Online Form 2025</div>
        <div className="card">Bihar Police Admit Card 2025</div>
        <div className="card">RRB Technician Online Form 2025</div>
      </div>
    </section>
    <section className="latest-news">
      <h2>Latest News</h2>
      <ul>
        <li>SSC MTS Havaldar Online Form 2025</li>
        <li>BPSC LDC Online Form 2025</li>
        <li>Rajasthan High Court Peon Form</li>
      </ul>
    </section>
    <section className="important-links">
      <h2>Important Links</h2>
      <ul>
        <li><a href="#">Admit Card</a></li>
        <li><a href="#">Results</a></li>
        <li><a href="#">Syllabus</a></li>
      </ul>
    </section>
  </main>
);

export default MainContent; 