import React from 'react';
import '../styles/CardProjects.css';

export const CardProjects = ({ img, alt, titulo, desc, demo, codigo }) => {
  return (
    <div className="card">
      <div className="card-inner">

        <div className="card-front">
          <img src={img} alt={alt} />
        </div>


        <div className="card-back">
          <h2>{titulo}</h2>
          <p>{desc}</p>
          <section className='card-back-section'>

            <a href={codigo} target="_blank" rel="noopener noreferrer">
              <img src="src/assets/icons/github (2).png" alt="GitHub" />
            </a>

            <a href={demo} target="_blank" rel="noopener noreferrer">
              <img src="src/assets/icons/demo.png" alt="Web" />
            </a>

          </section>
        </div>
      </div>
    </div>
  );
};
