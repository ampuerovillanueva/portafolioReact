import React, { useState } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: #333;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  z-index: 1000;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavLink = styled.a`
  color: white;
  margin: 0 15px;
  text-decoration: none;
  font-size: 1.2em;

  &:hover {
    color: #ddd;
  }

  @media (max-width: 800px) {
    margin: 10px 0;
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5em;
  cursor: pointer;
  display: none;

  @media (max-width: 800px) {
    display: block;
    align-self: flex-end;
    margin-right: 30px; /* Ajusta el margen según sea necesario */
  }
`;

const MenuLinks = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;

  @media (max-width: 800px) {
    display: ${props => (props.open ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    align-items: center; /* Cambia align-items a center para centrar los enlaces */
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Nav>
      <MenuButton onClick={toggleMenu}>
        ☰
      </MenuButton>
      <MenuLinks open={menuOpen}>
        <NavLink href="#hero">Inicio</NavLink>
        <NavLink href="#projects">Proyectos</NavLink>
        <NavLink href="#experience">Experiencia</NavLink>
        <NavLink href="#skills">Habilidades</NavLink>
        <NavLink href="#contact">Contacto</NavLink>
      </MenuLinks>
    </Nav>
  );
};

export default Navbar;
