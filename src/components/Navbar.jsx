import React from 'react'

export default function Navbar() {
    return (
        <div className='animate-slide-in-top fixed w-full py-4 md:py-0 top-5 left-1/2 -translate-x-1/2 flex justify-center gap-x-4 md:gap-x-10 items-center md:px-6 tracking-wide md:tracking-wider font-semibold text-white z-50 bg-white/50 backdrop-blur-xl'>
            <a href="#" className='text-center py-3 hover:scale-110 hover:duration-300 hover:text-purple-800'>Quien Soy</a>
            <a href="#Recorrido" className='text-center py-3 hover:scale-110 hover:duration-300 hover:text-purple-800'>Recorrido</a>
            <a href="#Propuestas" className='text-center py-3 hover:scale-110 hover:duration-300 hover:text-purple-800'>Propuestas</a>
            <a href="#Redes Sociales" className='text-center py-3 hover:scale-110 hover:duration-300 hover:text-purple-800'>Redes Sociales</a>
        </div>
    )
}