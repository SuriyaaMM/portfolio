import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Co Coordinator</h3>
            <p className="company">Digital Wizards, IIT Tirupati</p>
            <p className="date">Jun 2025 - Present</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Core Member</h3>
            <p className="company">Sigma Squad - IIT Tirupati's AI/ML Club</p>
            <p className="date">Jun 2025 - Present</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Internship Student Head</h3>
            <p className="company">Career Development Centre - IIT Tirupati</p>
            <p className="date">Apr 2025 - Present</p>
            <p>Facilitating the end-to-end internship process and acting as the liaison between students, CDC, and visiting companies.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Contingent Member</h3>
            <p className="company">Inter IIT Tech Meet 13.0</p>
            <p className="date">Nov 2024 - Dec 2024</p>
            <p>Analyzed a large dataset of spectral data to extract compositional ratios, which were then overlaid on a lunar base map to effectively visualize the elemental distribution on the Moon's surface.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
