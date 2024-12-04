import React, { useState, useEffect } from 'react';
import '../styles/Herramientas.css';
import { fetchTools } from '../hooks/FetchTools';


export const Herramientas = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetchTools(setTools);
  }, [])
  

  return (
    <>
    <h1 className='h1-tools'>Herrramientas</h1>
    <div className="tools-container">
      {tools.map((tool) => (
        <div className="tool" key={tool.id}>
          <img src={tool.image} alt={tool.name} />
        </div>
      ))}
    </div>
    </>
  );
};
