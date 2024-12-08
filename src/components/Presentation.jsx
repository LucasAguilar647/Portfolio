import React from 'react';
import '../styles/Presentation.css';
import perfil from '/images/perfil.jpeg';
import { textPresentation } from '../constantes/constantes';
import Icons from '../data/ImportIcons';


export const Presentation = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'LucasAguilar.cv.pdf';
    link.download = 'Lucas Aguilar.pdf';
    link.click();
  };


  return (
    <div className="presentation-content">
      <section className="img-section">
        <img src={perfil} alt="Foto de perfil" />
        <div className="social-links">
          <a href="https://www.linkedin.com/in/lucas-aguilar-5b5412249/" target="_blank" rel="noopener noreferrer">
            <img src={Icons.linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://github.com/LucasAguilar647" target="_blank" rel="noopener noreferrer">
            <img src={Icons.githubIcon} alt="GitHub" />
          </a>
          <button className='social-button' onClick={handleDownload}>
            <img src={Icons.resumeIcon} alt="Resume" />
          </button>
        </div>
      </section>
      <div>
        <div align="center" >
          <img
            className="typing-image"
            src="https://readme-typing-svg.herokuapp.com?color=%23D6BD98&&center=true&vCenter=true&width=600&height=50&lines=¡Hola,soy Lucas Aguilar!;¡Desarrollador+Frontend!"
            alt="Typing animation"
          />
        </div>

       
      </div>
    </div>
  );
};
