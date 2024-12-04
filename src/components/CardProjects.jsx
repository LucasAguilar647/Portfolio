import React from 'react'


export const CardProjects = ({ img, alt, titulo, desc }) => {
    return (
        <section className='card'>
            <img src={img} alt={alt} />
            <h2> {titulo} </h2>
            <p> {desc} </p>
        </section>
    )
}
