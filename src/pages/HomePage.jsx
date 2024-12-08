import React from 'react'
import { NavBar } from '../components/NavBar';
import { Presentation } from '../components/Presentation';
import { Herramientas } from '../components/Herramientas';
import { Projects } from '../components/Projects';
import { Footer } from '../components/Footer';
import { SobreMi } from '../components/SobreMi';

export const HomePage = () => {
    return (
        <>

            <Presentation />
            <SobreMi />
            <Herramientas />
            <Projects />
            <Footer />

        </>
    )
}

export default HomePage;