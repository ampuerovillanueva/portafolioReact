import React, { useEffect, useState } from 'react';
import styles from './SkillsStyles.module.css';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch('/project/skills.json')
        .then(response => response.json())
        .then(data => setSkillsData(data))
        .catch(error => console.error('Error fetching skills:', error));
    };

    fetchData(); // Initial fetch
    const intervalId = setInterval(fetchData, 5000); // Fetch every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Habilidades</h1>
      {skillsData.map((category, index) => (
        <div key={index}>
          <h2>{category.category}</h2>
          <div className={styles.skillList}>
            {category.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className={styles.skillItem}>
                <img src={skill.icon} alt={skill.name} className={styles.icon} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
          <hr />
        </div>
      ))}
    </section>
  );
}

export default Skills;
