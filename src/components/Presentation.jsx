import React from 'react';
import '../styles/Presentation.css';
import perfil from '../assets/images/perfil.jpeg';
import { textPresentation } from '../constantes/constantes';

export const Presentation = () => {
  return (
    <div className="presentation-content">
      <section className="img-section">
        <img src={perfil} alt="Foto de perfil" />
        <div className="social-links">
          <a href="https://www.linkedin.com/in/lucas-aguilar-5b5412249/" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/icons/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/LucasAguilar647" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/icons/github (2).png" alt="GitHub" />
          </a>
          <a href="mailto:lucas.aguilar@email.com" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/icons/gmail.png" alt="Gmail" />
          </a>
        </div>
      </section>
      <div>
      <div align="center">
          <img
            src="https://readme-typing-svg.herokuapp.com?color=%D6BD98&size=32&center=true&vCenter=true&width=600&height=50&lines=Hola,soy Lucas Aguilar"
            alt="Typing animation"
          />
        </div>
        <p>{textPresentation}</p>
      </div>

    </div>
  );
};
