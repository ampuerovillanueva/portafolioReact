import React, { useEffect, useState } from 'react';
import styles from './ProjectsStyles.module.css';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = () => {
      fetch('/project/projects.json')
        .then(response => response.json())
        .then(data => setProjects(data))
        .catch(error => console.error('Error fetching projects:', error));
    };

    fetchProjects(); // Initial fetch
    const intervalId = setInterval(fetchProjects, 5000); // Fetch every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Proyectos</h1>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <img src={project.image} alt={project.title} className={styles.image} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.repository} target="_blank" rel="noopener noreferrer">Ver repositorio</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
