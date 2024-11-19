import React from 'react';
import './style.css'; // Estilos separados em um arquivo CSS

// Dados dos projetos
const projects = [
  {
    title: "Weather App",
    description: "Aplicativo de clima em React Native com OpenWeatherMap API.",
    technologies: "React Native, Expo, OpenWeatherMap",
    github: "https://github.com/seurepositorio/weather-app",
    demo: "https://seusite/weather-app",
  },
  {
    title: "Finance Tracker",
    description: "Aplicativo para gestão financeira e registro de gastos.",
    technologies: "React Native, Firebase",
    github: "https://github.com/seurepositorio/finance-tracker",
  },
];

const Project = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p><strong>Tecnologias:</strong> {project.technologies}</p>
            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
