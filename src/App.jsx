import React from 'react'
import Navbar from './components/Navbar'
import perfil from "./images/perfil.jpg"

export default function App() {
  return (
    <div className='bg-white dark:bg-slate-900 transition-colors'>
      <Navbar />

      {/* SECCIÓN: QUIÉN SOY */}
      <section id='Quien Soy' className='dark:text-white w-full min-h-screen flex flex-col items-center justify-center pt-24 md:pt-32 px-6'>
        <div className='flex md:pb-32 flex-col items-center justify-center gap-y-10 max-w-4xl'>
          <img src={perfil} alt="Isabella Rojas" className='w-48 h-48 md:w-64 md:h-64 animate-zoom-in rounded-full shadow-2xl object-cover border-4 border-purple-500' />
          
          <div className='flex flex-col items-center text-center gap-y-5 animate-fade-in'>
            <h1 className='font-bold tracking-wider text-4xl md:text-6xl'>
              Isabella Sofía <br className='md:hidden' /> Rojas Acosta
            </h1>
            <p className='px-4 md:px-10 font-medium tracking-wide text-lg md:text-xl text-gray-700 dark:text-gray-300 italic'>
              "Compromiso, vocación y amor por nuestro colegio."
            </p>
            <p className='px-4 pb-18 md:px-12 font-normal tracking-wide text-lg text-justify md:text-center leading-relaxed'>
              Estudiante de 11° con una trayectoria de vida en La Presentación, caracterizada por la lealtad y una profunda vocación de servicio. Mi objetivo es transformar el liderazgo estudiantil en un ejercicio de bienestar común, donde cada voz sea representada con justicia y cercanía.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN: RECORRIDO Y HABILIDADES */}
      <section id='Recorrido' className='dark:text-white py-28 md:py-32 w-full py-20 bg-gray-50 dark:bg-slate-800/50'>
        <div className='max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12'>
          
          {/* Reconocimientos */}
          <div className='space-y-6'>
            <h2 className='text-3xl font-bold border-b-4 border-purple-600 inline-block'>Mi Recorrido</h2>
            <ul className='space-y-4 text-lg'>
              <li className='flex items-start gap-3'><span>🏆</span> Graduada con honores en liderazgo.</li>
              <li className='flex items-start gap-3'><span>📜</span> Reconocimientos por compromiso comunitario y participación activa.</li>
              <li className='flex items-start gap-3'><span>🧠</span> Distinciones en el área de Filosofía.</li>
              <li className='flex items-start gap-3'><span>🤝</span> Respaldo y acompañamiento de docentes de la institución.</li>
            </ul>
          </div>

          {/* Habilidades */}
          <div className='space-y-6'>
            <h2 className='text-3xl font-bold border-b-4 border-purple-600 inline-block'>Habilidades</h2>
            <div className='flex flex-wrap gap-3'>
              {['Liderazgo', 'Comunicación', 'Trabajo en equipo', 'Responsabilidad', 'Empatía', 'Sentido de Pertenencia'].map((skill) => (
                <span key={skill} className='text-md px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full font-semibold shadow-sm'>
                  {skill}
                </span>
              ))}
            </div>
            <div className='mt-6 p-4 bg-white dark:bg-slate-700 rounded-xl shadow-md border-l-4 border-purple-500'>
              <h3 className='font-bold mb-2 text-xl'>¿Por qué quiero ser personera?</h3>
              <p className='text-lg leading-relaxed'>
                Deseo representar a mis compañeros de forma responsable, escuchándolos y defendiendo sus ideas. Después de 11 años aquí, busco generar un cambio real que deje una huella positiva.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN: PROPUESTAS */}
      <section id='Propuestas' className='dark:text-white w-full py-20 px-6'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-extrabold mb-4'>Propuestas Personería #02</h2>
            <p className='text-purple-600 font-bold tracking-widest uppercase'>Transformando ideas en acciones</p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>

            {/* Recreacionales */}
            <div className='bg-blue-50 dark:bg-blue-900/10 p-8 rounded-3xl shadow-lg hover:scale-105 transition-transform'>
              <h3 className='text-3xl font-bold mb-6 text-blue-700 dark:text-blue-400'>🎮 Recreacionales</h3>
              <ul className='space-y-2 text-lg'>
                <li>• Día del juguete y Día dulce (Primaria).</li>
                <li>• Juguetes por sonrisas (Donaciones).</li>
                <li>• Torneo de videojuegos y Voleibol.</li>
                <li>• Baile de graduación.</li>
                <li>• Salón recreativo y Radio Escolar.</li>
                <li>• Alianza con <strong>Black Project</strong> (Servicio social).</li>
              </ul>
            </div>

            {/* Ambientales */}
            <div className='bg-green-50 dark:bg-green-900/10 p-8 rounded-3xl shadow-lg hover:scale-105 transition-transform'>
              <h3 className='text-3xl font-bold mb-6 text-green-700 dark:text-green-400'>🌿 Ambientales</h3>
              <ul className='space-y-4  text-lg'>
                <li><strong>Patitas por tapitas:</strong> Reciclaje para alimento animal.</li>
                <li><strong>Planta durante el año:</strong> Cuidado de vida verde por cursos.</li>
              </ul>
            </div>

            {/* Académicas */}
            <div className='bg-orange-50 dark:bg-orange-900/10 p-8 rounded-3xl shadow-lg hover:scale-105 transition-transform'>
              <h3 className='text-3xl font-bold mb-6 text-orange-700 dark:text-orange-400'>📚 Académicas</h3>
              <ul className='space-y-4  text-lg'>
                <li><strong>Día de la profesión:</strong> Inspiración para el futuro.</li>
                <li><strong>Día del emprendimiento:</strong> Fomento de la creatividad.</li>
                <li><strong>Padrino académico:</strong> Apoyo entre compañeros.</li>
                <li><strong>Ballet y Acrobacia:</strong> Expresión artística.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN: REDES SOCIALES */}
<footer id='Redes Sociales' className='bg-purple-800 dark:bg-slate-950 text-white py-20 px-6 text-center'>
  <h2 className='text-3xl font-bold mb-10'>¡Conéctate con mi campaña!</h2>
  
  <div className='flex flex-col md:flex-row justify-center items-center gap-y-8 md:gap-x-12'>
    
    {/* INSTAGRAM */}
    <a 
      href="https://instagram.com/TU_USUARIO_AQUI" 
      target="_blank" 
      rel="noopener noreferrer" 
      className='flex items-center gap-x-3 hover:text-pink-400 transition-all transform hover:scale-110'
    >
      <i className="fab fa-instagram text-4xl"></i>
      <span className='text-xl font-medium'>@02.isapersonera</span>
    </a>

    {/* TIKTOK */}
    <a 
      href="https://tiktok.com/@TU_USUARIO_AQUI" 
      target="_blank" 
      rel="noopener noreferrer" 
      className='flex items-center gap-x-3 hover:text-cyan-400 transition-all transform hover:scale-110'
    >
      <i className="fab fa-tiktok text-4xl"></i>
      <span className='text-xl font-medium'>@02.isapersonera</span>
    </a>

  </div>

  <div className='mt-12 pt-8 border-t border-purple-700/50 max-w-2xl mx-auto'>
    <p className='text-gray-300'>© 2026 Isabella Sofía Rojas - Candidata #02</p>
    <p className='text-gray-400 text-sm mt-2'>Institución Educativa La Presentación</p>
  </div>
</footer>
    </div>
  )
}