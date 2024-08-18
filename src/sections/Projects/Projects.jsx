import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa los estilos de AOS
import styles from './ProjectsStyles.module.css';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inicializa AOS con una duración de animación de 1000ms

    const fetchProjects = () => {
      fetch('/project/projects.json')
        .then(response => response.json())
        .then(data => setProjects(data))
        .catch(error => console.error('Error fetching projects:', error));
    };

    fetchProjects(); // Fetch inicial
    const intervalId = setInterval(fetchProjects, 5000); // Fetch cada 5 segundos

    return () => clearInterval(intervalId); // Limpieza del intervalo al desmontar el componente
  }, []);

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Proyectos</h1>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card} data-aos="fade-down">
            <div className={`${styles.face} ${styles.face1}`}>
              <div className={styles.content}>
                <img src={project.image} alt={project.title} className={styles.image} />
              </div>
            </div>
            <div className={`${styles.face} ${styles.face2}`}>
              <div className={styles.content}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.repository} target="_blank" rel="noopener noreferrer">Ver repositorio</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
