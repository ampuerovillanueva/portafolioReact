import React from 'react';
import styled from 'styled-components';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import logo from '../../assets/logo.png'; // Importa la imagen del logo
import { useTheme } from '../../common/ThemeContext';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--background-color);
  color: var(--footer-text-color);
  padding: 20px;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const LogoImage = styled.img`
  width: 100px;
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  a {
    color: var(--footer-text-color);
    text-decoration: none;
    transition: color 0.3s;
  }

  a:hover {
    color: var(--hover-color);
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  a {
    transition: transform 0.3s;
  }

  a:hover {
    transform: scale(1.1);
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SocialIcon = styled.img`
  width: 30px;
`;

const Copy = styled.p`
  margin-top: 20px;
  font-size: 0.9em;
`;

const Footer = () => {
  const { theme } = useTheme();
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <Container id="footer">
      <Content>
        <LogoContainer>
          <LogoImage src={logo} alt="Logo" />
        </LogoContainer>
        <LinksContainer>
          <a href="#hero">Inicio</a>
          <a href="#projects">Proyectos</a>
          <a href="#experience">Experiencia</a>
          <a href="#skills">Habilidades</a>
          <a href="#contact">Contacto</a>
        </LinksContainer>
        <SocialContainer>
          
          <a href="https://github.com/ampuerovillanueva" target="_blank" rel="noopener noreferrer">
            <SocialIcon src={githubIcon} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/ampuerovillanueva/" target="_blank" rel="noopener noreferrer">
            <SocialIcon src={linkedinIcon} alt="LinkedIn" />
          </a>
        </SocialContainer>
      </Content>
      <Copy>
        &copy; 2024 Jose Ampuero. <br />
        Todos los derechos reservados.
      </Copy>
    </Container>
  );
}

export default Footer;
