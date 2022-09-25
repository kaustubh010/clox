import { React, useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/dist/client/image'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaUserCircle, FaShoppingCart } from 'react-icons/fa'
import { AiOutlineClose, AiFillHome, AiOutlineShoppingCart, AiFillMinusCircle, AiFillPlusCircle, AiFillBook } from 'react-icons/ai'
import { FiLogOut } from 'react-icons/fi'
import { useRouter } from 'next/router'
import ProfileDD from '../src/layouts/header/ProfileDD'
import {Button} from "@mui/material";

const Navbar = ({ logout, user, cart, addToCart, removeFromCart, clearCart, subTotal }) => {
    const router = useRouter()
    useEffect(() => {
        Object.keys(cart).length !== 0 && setSidebar(true)
        let excluded = ['/checkout', '/order', '/orders', '/account', '/login', '/signup', '/forgot', '/shop']
        if (excluded.includes(router.pathname)) {
            setSidebar(false)
        }
    }, [])

    const ref = useRef()
    const [sidebar, setSidebar] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const toogleDropdown = () => {
        setDropdown(!dropdown)
    }
    const toggleCart = () => {
        setSidebar(!sidebar)
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
                    {user.value && <span className='hidden md:block'><ProfileDD logout={logout} /></span>}
                    {!user.value && <Link href={'/login'}><button className="hidden md:block bg-red-500 px-2 py-1 pb-1.5 rounded-md text-sm text-white mx-3 cursor-pointer">Login</button></Link>}
                    <button onClick={toggleCart} className="hidden md:block px-2 py-1 pb-1.5 text-red-500 text-2xl bg-white border-slate-100 rounded-2xl border-2 mx-3 cursor-pointer"><AiOutlineShoppingCart /></button>
                </div>
                <div ref={ref} className={`sideCart z-10 top-0 p-10 transition-all ${sidebar ? 'right-0' : '-right-full'} bg-white w-full md:w-[50%] h-full fixed`}>
                    <div className="w-full flex justify-between items-center relative ps-5 md:ps-7 py-0.5 border-b border-gray-100">
                        <h2 className='font-bold text-xl md:text-2xl m-0 text-heading'>Shoping Cart</h2>
                        <button onClick={toggleCart} className="text-2xl text-black py-6 lg:py-8 focus:outline-none transition-opacity hover:opacity-60"><AiOutlineClose /></button>
                    </div>
                    <nav className="mt-10 MuiList-root MuiList-padding MuiList-subheader css-5xiesr" aria-labelledby="nested-list-subheader">
                        <ol className='list-decimal font-semibold'>
                            {Object.keys(cart).length == 0 && <div className='font-semibold ml-4'>Your cart is Empty!</div>}
                            {Object.keys(cart).map((k) => {
                                return <li key={k}>
                                    <div className="item flex my-5">
                                        <div className="w-2/3 font-semibold">{cart[k].name}</div>
                                        <div className="flex font-semibold items-center justify-center w-1/3 text-lg">
                                            <AiFillMinusCircle onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name) }} className='cursor-pointer text-red-500' />
                                            <span className='mx-2 text-sm'>{cart[k].qty}</span> <AiFillPlusCircle onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name) }} className='cursor-pointer text-red-500' />
                                        </div>
                                    </div>
                                </li>
                            })}
                        </ol>
                        <p className='text-lg mt-6 font-bold'>Subtotal: ₹{subTotal}</p>
                        <div className="buttons flex">
                            <Link href={'/checkout'}><button disabled={Object.keys(cart).length == 0 ? true : false} className="disabled:bg-red-300 mt-4 flex justify-center items-center ml-4 text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded">
                                <span className='text-xl mr-2'><FaShoppingCart /></span> Checkout
                            </button></Link>
                            <button onClick={clearCart} disabled={Object.keys(cart).length == 0 ? true : false} className="disabled:bg-red-300 mt-4 flex justify-center items-center ml-4 text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded">Clear Cart</button>
                        </div>
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
                        {!user.value && <Link href={'/login'}><li className='text-2xl'><FaUserCircle /></li></Link>}
                        {user.value && <ProfileDD logout={logout} />}
                    </ul>
                </div>
                <div ref={navref} className="Nav z-10 top-0 left-0 p-10 transform transition-transform -translate-x-full bg-white w-full h-full fixed">
                    <div className="w-full flex justify-between items-center relative ps-5 md:ps-7 py-0.5 border-b border-gray-100">
                        <h2 className='font-bold text-xl md:text-2xl m-0 text-heading'>Menu</h2>
                        <button onClick={toggleNav} className="text-2xl text-black py-6 lg:py-8 focus:outline-none transition-opacity hover:opacity-60"><AiOutlineClose /></button>
                    </div>
                    <nav className="mt-10 MuiList-root MuiList-padding MuiList-subheader css-5xiesr" aria-labelledby="nested-list-subheader">
                        <Link href={'/'}><Button className='text-xl mb-4 text-black w-full'><span>Home</span></Button></Link>
                        <Link href={'/about'}><Button className='text-xl mb-4 text-black w-full'><span>About</span></Button></Link>
                        <Link href={'/shop'}><Button className='text-xl mb-4 text-black w-full'><span>Shop</span></Button></Link>
                        <Link href={'/contact'}><Button className='text-xl mb-4 text-black w-full'><span>Contact</span></Button></Link>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar