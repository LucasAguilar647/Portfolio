import React from 'react'
import { textPresentation } from '../constantes/constantes'
import '../styles/SobreMi.css'

export const SobreMi = () => {
  return (
    <div className='presentation-content'>
        <h1>Sobre mi</h1>
        <p>{textPresentation}</p>

    </div>
  )
}
