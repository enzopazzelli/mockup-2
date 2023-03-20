import React from 'react'
import gear from '../assets/gear.png'
import { BsGear } from 'react-icons/bs'



const Cards = () => {

    const cursos = [
        {
            id: 1,
            link: "",
            img: "https://www.nicepng.com/png/detail/4-48214_black-gears-png-transparent-background-gear-clipart.png",
            name: "Prepwork",
            descripcion: "La nivelación y orientación que necesitas. Aprende lo necesario para decidir desde dónde queres formar parte"

        },
        {
            id: 2,
            link: "",
            img: "https://www.nicepng.com/png/detail/4-48214_black-gears-png-transparent-background-gear-clipart.png",
            name: "Modulo 1",
            descripcion: "Capacitación más específica, conocimientos técnicos y prácticos asociados a la elección de carrera."

        },
        {
            id: 3,
            link: "",
            img: "https://www.nicepng.com/png/detail/4-48214_black-gears-png-transparent-background-gear-clipart.png",
            name: "Modulo 2",
            descripcion: "Continuación de la capacitación, profundización y diferentes aplicaciones de los conocimientos adquiridos."

        }
    ]

    const handleStart = () => {
        alert("Empezar prepwork")
    }

    return (
        <div name='cursos' className='w-full h-full py-[10rem] px-4 mb-10 bg-white text-center'>
            <h2 className='text-4xl sm:text-4xl font-bold text-[#040f2a] mb-8'>Nuestros cursos</h2>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                {cursos.map(({ id, link, name, img, descripcion }, index) => (
                    <div key={id} className='w-full shadow-xl flex flex-col items-center p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                        <img
                            src={img}
                            alt={name}
                            className='w-20 mx-auto mt-[-3rem] bg-white' />
                        <h2 className='text-2xl font-bold text-center py-6'>{name}</h2>
                        <p>
                            {descripcion}
                        </p>{index === 0 && (
                            <button 
                            onClick={()=>handleStart()}
                            className='text-white w-fit px-6 py-3 my-4 flex items-center rounded-full bg-gradient-to-r from-red-500 to-red-700 cursor-pointer'>
                                Empezar aquí
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cards;


