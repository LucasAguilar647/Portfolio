import React from 'react';
import '../styles/Presentation.css';
import perfil from '../assets/images/perfil.jpeg';
import { textPresentation } from '../constantes/constantes';

export const Presentation = () => {
  return (
    <div className="presentation-content">
      <section className="img-section">
        <img src={perfil} alt="Foto de perfil" />
      </section>
      <div>
        <h1>Soy Lucas Aguilar</h1>
        <p>
        {textPresentation}
        </p>
      </div>
    </div>
  );
};
