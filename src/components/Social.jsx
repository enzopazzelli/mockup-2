import React from 'react'
import { BsFacebook,
    BsWhatsapp,
    BsLinkedin,
    BsTwitter,
    BsInstagram } from 'react-icons/bs'

const Social = () => {
    return (
        <div name='social' className='w-full flex bg-[#040f2a] text-white justify-center py-16 text-2xl'>
            <BsFacebook className='mx-5 cursor-pointer hover:scale-200'/>
            <BsInstagram className='mx-5 cursor-pointer hover:scale-200'/>
            <BsTwitter className='mx-5 cursor-pointer hover:scale-200'/>
            <BsWhatsapp className='mx-5 cursor-pointer hover:scale-200'/>
            <BsLinkedin className='mx-5 cursor-pointer hover:scale-200' />
        </div>
    )
}

export default Social