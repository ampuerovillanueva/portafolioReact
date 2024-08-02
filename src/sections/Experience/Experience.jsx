import React, { useEffect, useState } from 'react';
import styles from './ExperienceStyles.module.css';

function Experience() {
  const [experienceData, setExperienceData] = useState([]);

  useEffect(() => {
    const fetchExperienceData = () => {
      fetch('/project/experience.json')
        .then(response => response.json())
        .then(data => setExperienceData(data))
        .catch(error => console.error('Error fetching experience data:', error));
    };

    fetchExperienceData(); // Initial fetch
    const intervalId = setInterval(fetchExperienceData, 5000); // Fetch every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <section id="experience" className={styles.container}>
      <h1 className="sectionTitle">Experiencia</h1>
      {experienceData.map((experience, index) => (
        <div key={index} className={styles.experienceItem}>
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
