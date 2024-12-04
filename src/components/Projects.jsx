import React from 'react';
import '../styles/Projects.css';
import { CardProjects } from './CardProjects';


export const Projects = () => {
    return (
        <>
            <h1 className="h1-projects">Proyectos</h1>
            <div className="projects-section">
                <CardProjects
                    img={null}
                    alt="git"
                    titulo="GIFA"
                    desc="Es un proyecto creado con React subido a Git"
                />
                <CardProjects
                    img={null}
                    alt="git"
                    titulo="Proyecto 2"
                    desc="Otro proyecto similar"
                />
                <CardProjects
                    img={null}
                    alt="git"
                    titulo="Proyecto 3"
                    desc="Un proyecto de ejemplo"
                />
                <CardProjects
                    img={null}
                    alt="git"
                    titulo="Proyecto 4"
                    desc="Proyecto de demostración"
                />
            </div>
        </>
    );
};
