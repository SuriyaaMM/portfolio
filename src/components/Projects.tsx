import React, { useEffect, useState } from 'react';

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
}

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/SuriyaaMM/repos?sort=updated&per_page=6')
      .then(response => response.json())
      .then(data => setRepos(data))
      .catch(error => console.error('Error fetching GitHub repos:', error));
  }, []);

  return (
    <section id="projects">
      <h2>Featured Projects</h2>
      <div className="project-grid main-projects">
        <a href="https://github.com/SuriyaaMM/VisionTransformer-Jax" target="_blank" rel="noopener noreferrer" className="project-card main-project">
          <h3>Vision Transformer (ViT)</h3>
          <p>A from-scratch implementation of the Vision Transformer (ViT) model in JAX, complete with a FastAPI backend for serving predictions and a CI/CD pipeline for automated deployment.</p>
        </a>
        <a href="https://github.com/SuriyaaMM/Raptor" target="_blank" rel="noopener noreferrer" className="project-card main-project">
          <h3>Raptor</h3>
          <p>A comprehensive pipeline for automated financial news extraction, web content scraping, and advanced NLP analysis to analyze market sentiment and predict stock trends.</p>
        </a>
      </div>
      <h2 className="sub-heading">Other Projects</h2>
      <div className="other-projects-grid">
        <a href="https://github.com/SuriyaaMM/Platypus" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Platypus-00F7FF?style=for-the-badge&logo=github&logoColor=white" alt="Platypus Project"/></a>
        <a href="https://github.com/codeclubiittp/Parallel-Computing-GANs" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/ML_Layers_in_CUDA-00F7FF?style=for-the-badge&logo=github&logoColor=white" alt="Machine Learning Layers in CUDA Project"/></a>
      </div>
    </section>
  );
};

export default Projects;
