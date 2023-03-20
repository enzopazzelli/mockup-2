import React from 'react'

const Contacto = () => {
  return (
    
    <div name='contacto' className='w-full bg-gradient-to-b from-white to-[#040f2a] p-4 text-black'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-red-500 '>Contacto</p>
          <p className='py-6'>Completa el formulario para ponerte en contacto</p>
        </div>

        <div className='flex justify-center items-center'>
          <form action="" method='POST' className='flex flex-col w-full md:w-1/2'>
            <input type="text" name='name' placeholder='Escribe tu nombre' className='p-2 bg-white border-2 rounded-lg text-white focus:outline-none'/>
            <input type="text" name='email' placeholder='Escribe tu correo' className='my-4 p-2 bg-white border-2 rounded-lg text-white focus:outline-none'/>
            <textarea name="message" placeholder='Escribe tu mensaje' rows="10" className='p-2 bg-white border-2 rounded-lg text-white focus:outline-none'></textarea>
            <button className='text-white w-fit px-6 py-3 my-4 flex items-center rounded-full bg-gradient-to-r from-red-500 to-red-700 cursor-pointer'>Hablemos!</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contacto