import React from 'react'
import logo2 from '../assets/Raise.png';
import { ImInfinite } from 'react-icons/im'
// import { BsRocketTakeoff } from 'react-icons/bs'

const MetodoRaise = () => {
    return (
        <div name='metodo raise' className='flex w-auto py-28 md:pt-[100px] bg-[#040f2a] text-center'>
            <div className='max-w-screen-lg mx-auto items-center justify-center h-full py-26 px-4 md:flex-row'>

                <h3 className='text-4xl sm:text-5xl font-bold font-signature text-white'>
                    El método {" "}
                    {/* <span className='font-signature font-bold text-red-600'>Raise</span> */}
                    <img src={logo2} alt="" />
                </h3>
                {/* <div className='justify-center'>
                    <ImInfinite size={400}
                    color={"red"}
                    className=''/>
                </div> */}
            </div>
        </div>
    )
}

export default MetodoRaise