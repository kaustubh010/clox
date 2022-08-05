import React, { useRef } from 'react'
import Link from 'next/link'
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
        <div className="lg:hidden z-10">
            <div className="bg-white md:hidden fixed bottom-0 w-full">
                <hr />
                <ul className="h-14 flex px-6 items-center justify-between">
                    <li onClick={toggleNav} className='text-2xl'><GiHamburgerMenu /></li>
                    <Link href={'/'}><li className='text-2xl'><AiFillHome /></li></Link>
                    <Link href={'/shop'}><li className='text-2xl'><AiOutlineShoppingCart /></li></Link>
                    <Link href={'/'}><li className='text-2xl'><FaUserCircle /></li></Link>
                </ul>
            </div>
            <div ref={ref} className="Nav z-10 top-0 left-0 p-10 transform transition-transform -translate-x-full bg-white w-full h-full fixed">
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
    )
}

export default Mobnavbar