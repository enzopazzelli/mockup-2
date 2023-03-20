import React from 'react'
import rocket from '../assets/rocket.png';
import { BsRocketTakeoff } from 'react-icons/bs'


const Hero = () => {
    return (
        <header name='home' className='w-full h-auto pt-20 md:pt-[100px]'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center  h-full'>
                    <p className='max-w-md font-bold'>Impulsa tu futuro</p>
                    <h2 className='text-4xl sm:text-7xl font-bold text-[#090318]'>
                        Formate para los trabajos de la Industria del Software
                    </h2>
                    <p className='py-4 max-w-md'>
                        El futuro de la tecnología comienza en el Norte. Raise se compromete a capacitar a talentos emergentes en el interior del país y conectarlos con empresas líderes en tecnología en todo el mundo
                    </p>
                    <div>
                        <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-full bg-gradient-to-r from-red-500 to-red-700 cursor-pointer'>
                            Contactanos   
                            <span className='group-hover:rotate-45 duration-300'>
                               <BsRocketTakeoff size={20} 
                               className='ml-2'/>
                            </span>
                        </button>
                    </div>
                </div>
                <div>
                    <img
                    src={rocket}
                    alt=""
                    className='rounded-3xl mx-auto w-2/3 md:w-full' />
                </div>
            </div>
        </header>
    )
}

export default Hero