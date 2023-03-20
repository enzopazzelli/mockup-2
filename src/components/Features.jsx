import React from 'react'

const Features = () => {
    return (
        <div name='features' className='mx-auto grid md:grid-cols-3 gap-8 bg-[#040f2a] text-white'>
            <div className='w-full shadow-xl flex flex-col items-center p-4 my-4 rounded-lg hover:scale-95 duration-300'>
                <img src="" alt="" />
                <h3 className='border-b-2 border-red-500'>
                    Capacitación
                </h3>
                <p className='font-bold text-2xl'>
                    A traves de nuestros cursos, aprende los conocimientos necesarios para dar tus primeros pasos en la industria.
                </p>
            </div>
            <div className='w-full shadow-xl flex flex-col items-center p-4 my-4 rounded-lg hover:scale-95 duration-300'>
                <img src="" alt="" />
                <h3 className='border-b-2 border-red-500'>
                    Formación y Aceleración
                </h3>
                <p className='font-bold text-2xl'>
                Experiencia e Impacto real, las claves para dar el siguiente paso.
                </p>
            </div>
            <div className='w-full shadow-xl flex flex-col items-center p-4 my-4 rounded-lg hover:scale-95 duration-300'>
                <img src="" alt="" />
                <h3 className='border-b-2 border-red-500'>
                    Inserción
                </h3>
                <p className='font-bold text-2xl'>
                Acompañamiento y Acercamiento para iniciar tu camino en la Industria.
                </p>
            </div>
        </div>
    )
}

export default Features