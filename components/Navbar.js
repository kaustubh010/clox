import { React, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/dist/client/image'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaUserCircle } from 'react-icons/fa'
import { AiOutlineClose, AiFillHome, AiOutlineShoppingCart } from 'react-icons/ai'

const Navbar = () => {
    const ref = useRef()
    const toggleCart = () => {
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')
        }
        else if (!ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('translate-x-full')
        }
    }
    const navref = useRef()
    const toggleNav = () => {
        if (navref.current.classList.contains('-translate-x-full')) {
            navref.current.classList.remove('-translate-x-full')
            navref.current.classList.add('translate-x-0')
        }
        else if (!navref.current.classList.contains('translate-x-full')) {
            navref.current.classList.remove('translate-x-0')
            navref.current.classList.add('-translate-x-full')
        }
    }
    return (
        <>
            <header className="text-gray-600 body-font fixed top-0 bg-white z-10 w-full">
                <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center h-20 mt-8 md:mt-0">
                    <Link href={'/'}><a><Image src={'/logo.png'} alt={'logo'} width={120} height={60} /></a></Link>
                    <nav className="hidden md:ml-auto md:flex flex-wrap items-center text-base justify-center">
                        <li className='flex h-20 items-center relative text-lg lg:text-xl'><Link href={'/'}><a className="hover:text-red-500 mr-5 flex h-20 items-center relative text-lg lg:text-xl">Home</a></Link></li>
                        <li className='flex h-20 items-center relative text-lg lg:text-xl'><Link href={'/about'}><a className="hover:text-red-500 mr-5 flex h-20 items-center relative text-lg lg:text-xl">About</a></Link></li>
                        <li className='flex h-20 items-center relative text-lg lg:text-xl'><Link href={'/contact'}><a className="hover:text-red-500 mr-5 flex h-20 items-center relative text-lg lg:text-xl">Contact Us</a></Link></li>
                        <li className='flex h-20 items-center relative text-lg lg:text-xl'><Link href={'/shop'}><a className="hover:text-red-500 mr-5 flex h-20 items-center relative text-lg lg:text-xl">Shop</a></Link></li>
                    </nav>
                    <button className="hidden md:block bg-red-500 px-2 py-1 pb-1.5 rounded-md text-sm text-white mx-3 cursor-pointer">Login</button>
                    <button onClick={toggleCart} className="hidden md:block px-2 py-1 pb-1.5 text-red-500 text-2xl bg-white border-slate-100 rounded-2xl border-2 mx-3 cursor-pointer"><AiOutlineShoppingCart /></button>
                </div>
                <div ref={ref} className="Nav z-10 top-0 right-0 p-10 transform transition-transform translate-x-full bg-white w-full md:w-[50%] h-full fixed">
                    <div className="w-full flex justify-between items-center relative ps-5 md:ps-7 py-0.5 border-b border-gray-100">
                        <h2 className='font-bold text-xl md:text-2xl m-0 text-heading'>Shoping Cart</h2>
                        <button onClick={toggleCart} className="text-2xl text-black py-6 lg:py-8 focus:outline-none transition-opacity hover:opacity-60"><AiOutlineClose /></button>
                    </div>
                    <nav className="mt-10 MuiList-root MuiList-padding MuiList-subheader css-5xiesr" aria-labelledby="nested-list-subheader">
                    </nav>
                </div>
            </header>
            <div className="lg:hidden z-10">
                <div className="bg-white md:hidden fixed bottom-0 w-full">
                    <hr />
                    <ul className="h-14 flex px-6 items-center justify-between">
                        <li onClick={toggleNav} className='text-2xl'><GiHamburgerMenu /></li>
                        <Link href={'/'}><li className='text-2xl'><AiFillHome /></li></Link>
                        <li onClick={toggleCart} className='text-2xl'><AiOutlineShoppingCart /></li>
                        <Link href={'/'}><li className='text-2xl'><FaUserCircle /></li></Link>
                    </ul>
                </div>
                <div ref={navref} className="Nav z-10 top-0 left-0 p-10 transform transition-transform -translate-x-full bg-white w-full h-full fixed">
                    <div className="w-full flex justify-between items-center relative ps-5 md:ps-7 py-0.5 border-b border-gray-100">
                        <h2 className='font-bold text-xl md:text-2xl m-0 text-heading'>Menu</h2>
                        <button onClick={toggleNav} className="text-2xl text-black py-6 lg:py-8 focus:outline-none transition-opacity hover:opacity-60"><AiOutlineClose /></button>
                    </div>
                    <nav className="mt-10 MuiList-root MuiList-padding MuiList-subheader css-5xiesr" aria-labelledby="nested-list-subheader">
                        <div className="p-4 w-[60%] hover:bg-slate-100 MuiListItemButton-root MuiListItemButton-gutters MuiButtonBase-root mb-4 css-1uwabd6" tabIndex="0"
                            role="button">
                            <div className="MuiListItemText-root css-1tsvksn"><Link href={'/'}><span onClick={toggleNav}
                                className="left-0 text-xl MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-yb0lig">Home</span></Link>
                            </div><span className="MuiTouchRipple-root css-w0pj6f"></span>
                        </div>
                        <div className="p-4 w-[60%] hover:bg-slate-100 MuiListItemButton-root MuiListItemButton-gutters MuiButtonBase-root mb-4 css-1uwabd6" tabIndex="0"
                            role="button">
                            <div className="MuiListItemText-root css-1tsvksn"><Link href={'/about'}><span onClick={toggleNav}
                                className="left-0 text-xl MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-yb0lig">About</span></Link></div>
                            <span className="MuiTouchRipple-root css-w0pj6f"></span>
                        </div>
                        <div className="p-4 w-[60%] hover:bg-slate-100 MuiListItemButton-root MuiListItemButton-gutters MuiButtonBase-root mb-4 css-1uwabd6" tabIndex="0"
                            role="button">
                            <div className="MuiListItemText-root css-1tsvksn"><Link href={'/shop'}><span onClick={toggleNav}
                                className="left-0 text-xl MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-yb0lig">Shop</span></Link>
                            </div><span className="MuiTouchRipple-root css-w0pj6f"></span>
                        </div>
                        <div className="p-4 w-[60%] hover:bg-slate-100 MuiListItemButton-root MuiListItemButton-gutters MuiButtonBase-root mb-4 css-1uwabd6" tabIndex="0"
                            role="button">
                            <div className="MuiListItemText-root css-1tsvksn"><Link href={'/contact'}><span onClick={toggleNav}
                                className="left-0 text-xl MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-yb0lig">Contact Us</span></Link>
                            </div><span className="MuiTouchRipple-root css-w0pj6f"></span>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar