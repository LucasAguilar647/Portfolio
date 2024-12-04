import React from 'react';
import '../styles/CardProjects.css';

export const CardProjects = ({ img, alt, titulo, desc }) => {
  return (
    <div className="card">
      <div className="card-inner">
       
        <div className="card-front">
          <img src={img} alt={alt} />
        </div>

      
        <div className="card-back">
          <h2>{titulo}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};
