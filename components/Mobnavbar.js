import React, { useRef } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaUserCircle } from 'react-icons/fa'
import { AiOutlineClose, AiFillHome, AiOutlineShoppingCart } from 'react-icons/ai'

const Mobnavbar = () => {
    const ref = useRef()
    const toggleNav = () => {
        if (ref.current.classList.contains('-translate-x-full')) {
            ref.current.classList.remove('-translate-x-full')
            ref.current.classList.add('translate-x-0')
        }
        else if (!ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('-translate-x-full')
        }
    }
    return (
        <div className="lg:hidden">
            <div className="bg-white md:hidden fixed bottom-0 w-full">
                <hr />
                <ul className="h-14 flex px-6 items-center justify-between">
                    <li onClick={toggleNav} className='text-2xl'><GiHamburgerMenu /></li>
                    <li className='text-2xl'><AiFillHome /></li>
                    <li className='text-2xl'><AiOutlineShoppingCart /></li>
                    <li className='text-2xl'><FaUserCircle /></li>
                </ul>
            </div>
            <div ref={ref} className="Nav z-10 top-0 left-0 p-10 transform transition-transform -translate-x-full bg-white w-full h-full fixed">
                <div className="items w-full flex justify-between items-center relative ps-5 md:ps-7 py-0.5 border-b border-gray-100">
                    <h2 className='font-bold text-xl'>Menu</h2>
                    <span onClick={toggleNav} className="text-2xl text-black py-6 lg:py-8 focus:outline-none transition-opacity hover:opacity-60"><AiOutlineClose/></span>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Shop</li>
                        <li>Blog</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Mobnavbar