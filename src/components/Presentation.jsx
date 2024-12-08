import React, { useCallback } from 'react';
import '../styles/Presentation.css';
import perfil from '/images/perfil1.jpeg';
import { textPresentation } from '../constantes/constantes';
import Icons from '../data/ImportIcons';

export const Presentation = () => {

  const handleDownload = useCallback(() => {
    const link = document.createElement('a');
    link.href = 'LucasAguilar.cv.pdf';
    link.download = 'Lucas Aguilar.pdf';
    link.click();
  }, []);

  /*<button 
            className="social-button" 
            onClick={handleDownload} 
            aria-label="Download Resume"
          >
            <img src={Icons.resumeIcon} alt="Resume" />
          </button>*/ 

  return (
    <div className="presentation-content">
   
      <section className="img-section">
        <img src={perfil} alt="Lucas Aguilar - Foto de perfil" /> 
        
        
        <div className="social-links">
          <a 
            href="https://www.linkedin.com/in/lucas-aguilar-5b5412249/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <img src={Icons.linkedinIcon} alt="LinkedIn" />
          </a>
          <a 
            href="https://github.com/LucasAguilar647" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <img src={Icons.githubIcon} alt="GitHub" />
          </a>
          
        </div>
      </section>
      <div>
        <div align="center">
          <img
            className="typing-image"
            src="https://readme-typing-svg.herokuapp.com?color=%23D6BD98&&center=true&vCenter=true&width=600&height=50&lines=¡Hola,soy Lucas Aguilar!;¡Desarrollador+Frontend!"
            alt="Texto animado: ¡Hola, soy Lucas Aguilar! ¡Desarrollador Frontend!"  
          />
        </div>
      </div>
    </div>
  );
};
