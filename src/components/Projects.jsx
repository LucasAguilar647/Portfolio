import React from 'react';
import '../styles/Projects.css';
import { CardProjects } from './CardProjects';
import GIFA from '/images/GIFA.png'
import TypeFast from '/images/TypeFast.png'
import BlocNotas from '/images/BlocNotas.png'
import BlackJack from '/images/BlackJack.png'


export const Projects = () => {
    return (
        <>
            <h1 className="h1-projects">Proyectos</h1>
            <div className="projects-section">
                <CardProjects
                    img={GIFA}
                    alt="GIFA"
                    titulo="GIFA"
                    desc="GIFA (Gestión Integral de Flota Automotor) es un sistema diseñado para la gestión y optimización de flotas vehiculares. Mi participación se centró en el desarrollo del frontend, implementando una interfaz web responsive y funcionalidades como gestión de vehículos, control de stock y visualización de reportes dinámicos."
                    demo={"https://lucasaguilar647.github.io/GIFA/"}
                    codigo={null}
                />
                <CardProjects
                    img={TypeFast}
                    alt="TypeFast"
                    titulo="TypeFast"
                    desc="TypeFast es una aplicación web que te permite practicar y mejorar tu velocidad de escritura en teclado. Con un diseño minimalista y atractivo."
                    demo={"https://lucasaguilar647.github.io/TypeFast.App/"}
                    codigo={"https://github.com/LucasAguilar647/TypeFast.App"}
                />
                <CardProjects
                    img={BlocNotas}
                    alt="BlocNotas"
                    titulo="Bloc de Notas"
                    desc="Bloc de Notas es una aplicacion android para mantener tus ideas y tareas organizadas con esta app intuitiva y funcional. Personaliza tus notas con fuentes, tamaños y colores; protégelas con contraseña y establece recordatorios integrados con tu calendario. Gestiona, edita y comparte tus notas fácilmente, todo desde una interfaz amigable y adaptable. ¡La herramienta perfecta para tu día a día!"
                    demo={"https://play.google.com/store/apps/details?id=com.TrustM3Block.TrustM3Notes"}
                    codigo={null}
                />
               <CardProjects
                    img={BlackJack}
                    alt="BlackJack"
                    titulo="BlackJack"
                    desc="Es un proyecto que actualmente esta en desarrollo, es un juego de cartas en el que el jugador compite contra el crupier. El objetivo del juego es vencer al crupier sin pasarse de 21. Se juega con una baraja de 52 cartas. El crupier reparte dos cartas al jugador y dos a sí mismo."
                    demo={"https://lucasaguilar647.github.io/BlackJack-game/"}
                    codigo={"https://github.com/LucasAguilar647/BlackJack-game"}
                />
            </div>
        </>
    );
};
