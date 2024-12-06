import React from 'react';
import '../styles/Projects.css';
import { CardProjects } from './CardProjects';
import GIFA from '../assets/images/GIFA.png'
import TypeFast from '../assets/images/TypeFast.png'
import BlocNotas from '../assets/images/BlocNotas.png'


export const Projects = () => {
    return (
        <>
            <h1 className="h1-projects">Proyectos</h1>
            <div className="projects-section">
                <CardProjects
                    img={GIFA}
                    alt="GIFA"
                    titulo="GIFA"
                    desc="Es un proyecto de la universidad"
                    demo={"https://lucasaguilar647.github.io/GIFA/"}
                    codigo={"https://github.com/LucasAguilar647/GIFA"}
                />
                <CardProjects
                    img={TypeFast}
                    alt="TypeFast"
                    titulo="TypeFast"
                    desc="Otro proyecto similar"
                    demo={"https://lucasaguilar647.github.io/TypeFast.App/"}
                    codigo={"https://github.com/LucasAguilar647/TypeFast.App"}
                />
                <CardProjects
                    img={BlocNotas}
                    alt="BlocNotas"
                    titulo="Bloc de Notas"
                    desc="Un proyecto de ejemplo"
                    demo={"https://play.google.com/store/apps/details?id=com.TrustM3Block.TrustM3Notes"}
                    codigo={null}
                />
                <CardProjects
                    img={null}
                    alt="git"
                    titulo="Proyecto 4"
                    desc="Proyecto de demostración"
                    demo={"https://github.com/LucasAguilar647"}
                    codigo={"https://github.com/LucasAguilar647/React-TA_TE_TI"}
                />
            </div>
        </>
    );
};
