import React from 'react';
import '../styles/CardProjects.css';
import Icons from '../data/ImportIcons';

export const CardProjects = ({ img, alt, titulo, desc, demo, codigo }) => {
  return (
    <div className="card">
      <div className="card-inner">

        <div className="card-front">
          <div>
            <img src={img} alt={alt} />
          </div>
          <h2> {titulo} </h2>
  
        </div>


        <div className="card-back">
          <h2>{titulo}</h2>
          <p>{desc}</p>
          <section className='card-back-section'>

            { codigo &&
              <a href={codigo} target="_blank" rel="noopener noreferrer">
              <img src={Icons.githubIcon} alt="GitHub" />
            </a>}

            <a href={demo} target="_blank" rel="noopener noreferrer">
              <img src={Icons.demoIcon} alt="Web" />
            </a>

          </section>
        </div>
      </div>
    </div>
  );
};
