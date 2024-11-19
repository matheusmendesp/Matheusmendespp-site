import React from 'react';
import './style.css'; 

const projects = [
  {
    title: "The Avengers Initiative",
    description: "Aplicativo que mostra os vingadores.",
    technologies: "Swift",
    github: "https://github.com/matheusmendesp/TheAvengersInitiative",
  },
  {
    title: "Pokedex app",
    description: "Aplicativo que mostra os pokemons existentes.",
    technologies: "Swift, SwiftUI",
    github: "https://github.com/matheusmendesp/PokedexApp",
  },
  {
    title: "The Movie",
    description: "Aplicativo que pega os filmes atraves da api do IMDB",
    technologies: "Swift",
    github: "https://github.com/matheusmendesp/MoviesApp",
  },
  {
    title: "Chat app",
    description: "Aplicativo de chat para conectar pessoas que querem conversar.",
    technologies: "React-native, Firebase",
    github: "https://github.com/matheusmendesp/ChatApp",
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
