import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa los estilos de AOS
import styles from './ExperienceStyles.module.css';

function Experience() {
  const [experienceData, setExperienceData] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inicializa AOS con una duración de animación de 1000ms

    const fetchExperienceData = () => {
      fetch('/project/experience.json')
        .then(response => response.json())
        .then(data => setExperienceData(data))
        .catch(error => console.error('Error fetching experience data:', error));
    };

    fetchExperienceData(); // Fetch inicial
    const intervalId = setInterval(fetchExperienceData, 5000); // Fetch cada 5 segundos

    return () => clearInterval(intervalId); // Limpieza del intervalo al desmontar el componente
  }, []);

  return (
    <section id="experience" className={styles.container}>
      <h1 className="sectionTitle">Experiencia</h1>
      {experienceData.map((experience, index) => (
        <div key={index} className={styles.experienceItem} data-aos="fade-down">
          <div className={styles.date}>
            <p>{experience.date}</p>
          </div>
          <div className={styles.details}>
            <h2>{experience.position}</h2>
            <h3>{experience.company}</h3>
            <p>{experience.responsibilities}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Experience;
