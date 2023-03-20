import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll'
import logo from '../assets/R.png';



const Navbar = () => {

    const [nav, setNav] = useState(false);

    /** */
   
    const navRef = useRef(null);
    const menuRef = useRef(null);
  
    useEffect(() => {
      function handleClickOutside(event) {
        if (
          navRef.current &&
          !navRef.current.contains(event.target) &&
          (!menuRef.current || !menuRef.current.contains(event.target))
        ) {
          setNav(false);
        }
      }
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [navRef, menuRef]);
    /** */

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'cursos'
        },
        {
            id: 3,
            link: 'metodo raise'
        },
        {
            id: 4,
            link: 'contacto'
        }

    ];

    return (
        <nav className='flex justify-between items-center w-full h-20 p-4 min-h-[60px] text-black  border-b-2'>
            <div>
                <h1 className='text-5xl font-signature ml-3 text-red-600'>
                    <img src={logo} alt="logo" width={35} className='inline' />aise
                </h1>
            </div>

            <ul className='hidden md:flex'>
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className='px-4 cursor-pointer capitalize font-medium text-black-400 hover:scale-105 duration-200'>
                        <Link to={link} smooth duration={500}>{link}</Link> 
                    </li>
                ))}
            </ul>

            <div
        ref={navRef} /** Solucion OpenAI */
        onClick={() => setNav(!nav)}
        className='cursor-pointer pr-4 z-10 text-white md:hidden lg:hidden'
      >
        {nav ? <FaTimes size={20} /> : <FaBars size={20} color={'black'} />}
      </div>

            {nav && (
                <ul
                ref={menuRef}
                className='flex flex-col justify-center items-center absolute top-0 left-0 h-screen w-full bg-gradient-to-b from-black to-[#040f2a] text-gray-300'
                >
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className='px-4 cursor-pointer capitalize py-6 text-2xl'>
                            <Link to={link} smooth duration={500}>{link}</Link> 
                        </li>
                    ))}
                </ul>
            )}

            {/* <div>
                <button>
                    Contactanos
                </button>
            </div> */}


        </nav>
    )
}

export default Navbar;