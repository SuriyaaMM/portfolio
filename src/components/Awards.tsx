import React from 'react';

const Awards: React.FC = () => {
  return (
    <section id="awards">
      <h2>Honors &amp; Awards</h2>
      <div className="awards-grid">
        <div className="award-card">
          <h3>Lunar Data Analysis</h3>
          <p>Secured 11th Position of 23 Participated IITs for ISRO problem statement in Inter IIT 2024 held at IIT Bombay</p>
        </div>
        <div className="award-card">
          <h3>JEE Advanced</h3>
          <p>Secured 11256th Position in CRL in JEE Advanced Examination</p>
        </div>
        <div className="award-card">
          <h3>JEE Mains</h3>
          <p>Secured 7662nd Position in CRL in JEE Mains examination</p>
        </div>
      </div>
    </section>
  );
};

export default Awards;
