import React from 'react';

const Licenses: React.FC = () => {
  return (
    <section id="licenses">
      <h2>Licenses &amp; Certifications</h2>
      <div className="cert-grid">
        <div className="cert-card">
          <h3>AWS Educate Machine Learning Foundations</h3>
          <p>Amazon Web Services (AWS)</p>
        </div>
        <div className="cert-card">
          <h3>Accelerating Deep Learning with GPUs</h3>
          <p>Cognitive Class</p>
        </div>
      </div>
    </section>
  );
};

export default Licenses;
