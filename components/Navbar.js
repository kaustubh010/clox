import React from 'react'
import Link from 'next/link'
import Image from 'next/dist/client/image'

const Navbar = () => {
    return (
        <>
            <header className="text-gray-600 body-font fixed top-0 bg-white z-10 w-full">
                <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center h-20 mt-8 md:mt-0">
                    <Link href={'/'}><a><Image src={'/logo.png'} alt={'logo'} width={100} height={40} /></a></Link>
                    <nav className="hidden md:ml-auto md:flex flex-wrap items-center text-base justify-center">
                        <li className='flex h-20 items-center relative text-lg lg:text-xl'><Link href={'/'}><a className="hover:text-red-500 mr-5 flex h-20 items-center relative text-lg lg:text-xl">Home</a></Link></li>
                        <li className='flex h-20 items-center relative text-lg lg:text-xl'><Link href={'/about'}><a className="hover:text-red-500 mr-5 flex h-20 items-center relative text-lg lg:text-xl">About</a></Link></li>
                        <li className='flex h-20 items-center relative text-lg lg:text-xl'><Link href={'/contact'}><a className="hover:text-red-500 mr-5 flex h-20 items-center relative text-lg lg:text-xl">Contact Us</a></Link></li>
                        <li className='flex h-20 items-center relative text-lg lg:text-xl'><Link href={'/shop'}><a className="hover:text-red-500 mr-5 flex h-20 items-center relative text-lg lg:text-xl">Shop</a></Link></li>
                    </nav>
                    <button className="hidden md:block bg-red-500 px-2 py-1 pb-1.5 rounded-md text-sm text-white mx-3 cursor-pointer">Login</button>
                </div>
            </header>
        </>
    )
}

export default Navbar