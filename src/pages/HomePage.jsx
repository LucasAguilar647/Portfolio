import React from 'react'
import { NavBar } from '../components/NavBar';
import { Presentation } from '../components/Presentation';
import { Herramientas } from '../components/Herramientas';

export const HomePage = () => {
  return (
    <>
        <NavBar/>
        <Presentation/>
        <Herramientas/>
    
    </>
  )
}

export default HomePage;