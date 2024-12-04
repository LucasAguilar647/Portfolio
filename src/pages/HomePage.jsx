import React from 'react'
import { NavBar } from '../components/NavBar';
import { Presentation } from '../components/Presentation';
import { Herramientas } from '../components/Herramientas';
import { Projects } from '../components/Projects';

export const HomePage = () => {
  return (
    <>
    
        <Presentation/>
        <Herramientas/>
        <Projects/>
    
    </>
  )
}

export default HomePage;