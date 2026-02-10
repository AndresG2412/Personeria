import React, { useState } from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='fixed top-0 md:top-5 left-0 md:left-1/2 md:-translate-x-1/2 w-full md:w-[90%] lg:w-[70%] z-50'>
            {/* Contenedor principal */}
            <div className='bg-white/30 dark:bg-black/20 backdrop-blur-lg border border-white/20 shadow-lg md:rounded-full px-6 py-3 flex justify-between items-center text-white'>
                
                {/* Logo a la izquierda - Solo visible en móvil o según prefieras */}
                <div className='text-2xl font-black tracking-tighter text-purple-200'>
                    02ISA
                </div>

                {/* Menú Desktop (se oculta en móvil) */}
                <div className='hidden md:flex gap-x-8 items-center'>
                    <a href="#" className='hover:scale-110 transition-all hover:text-purple-300'>Quien Soy</a>
                    <a href="#Recorrido" className='hover:scale-110 transition-all hover:text-purple-300'>Recorrido</a>
                    <a href="#Propuestas" className='hover:scale-110 transition-all hover:text-purple-300'>Propuestas</a>
                    <a href="#Redes Sociales" className='hover:scale-110 transition-all hover:text-purple-300'>Redes Sociales</a>
                </div>

                {/* Botón Hamburguesa (solo visible en móvil) */}
                <div className='md:hidden flex items-center'>
                    <button onClick={toggleMenu} className='text-3xl focus:outline-none'>
                        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>
                </div>
            </div>

            {/* Menú Desplegable Móvil */}
            <div className={`${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-purple-900/90 backdrop-blur-xl mt-2 mx-4 rounded-2xl`}>
                <div className='flex flex-col items-center py-6 gap-y-6 font-bold'>
                    <a href="#" onClick={toggleMenu} className='text-xl hover:text-purple-300'>Quien Soy</a>
                    <a href="#Recorrido" onClick={toggleMenu} className='text-xl hover:text-purple-300'>Recorrido</a>
                    <a href="#Propuestas" onClick={toggleMenu} className='text-xl hover:text-purple-300'>Propuestas</a>
                    <a href="#Redes Sociales" onClick={toggleMenu} className='text-xl hover:text-purple-300'>Redes Sociales</a>
                </div>
            </div>
        </nav>
    )
}