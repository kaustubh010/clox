import { React, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/dist/client/image'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaUserCircle, FaShoppingCart } from 'react-icons/fa'
import { AiOutlineClose, AiFillHome, AiOutlineShoppingCart, AiFillMinusCircle, AiFillPlusCircle, AiFillBook } from 'react-icons/ai'
import { FiLogOut } from 'react-icons/fi'

const Navbar = ({ logout, user, cart, addToCart, removeFromCart, clearCart, subTotal }) => {
    const ref = useRef()
    const [dropdown, setDropdown] = useState(false)
    const toogleDropdown = () => {
        setDropdown(!dropdown)
    }
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
                    {dropdown && <div className="absolute right-28 w-50 text-md flex bg-white top-16 rounded-md px-5 shadow-slate-600 shadow-md">
                        <ul className='hidden md:block'>
                            <Link href={'/account'}><li className='hover:bg-slate-100 cursor-pointer items-center flex text-md font-semibold'><FaUserCircle className='m-4 text-2xl text-red-500' />My Account</li></Link>
                            <Link href={'/orders'}><li className='hover:bg-slate-100 cursor-pointer items-center flex text-md font-semibold'><AiFillBook className='m-4 text-2xl text-red-500' />Orders</li></Link>
                            <hr />
                            <li onClick={logout} className='hover:bg-slate-100 cursor-pointer items-center flex text-md font-semibold'><FiLogOut className='m-4 text-2xl' />Log out</li>
                        </ul>
                    </div>}
                    {user.value && <FaUserCircle onClick={toogleDropdown} className='hidden md:block text-xl md:text-2xl mx-2 text-red-500 cursor-pointer' />}
                    {!user.value && <Link href={'/login'}><button className="hidden md:block bg-red-500 px-2 py-1 pb-1.5 rounded-md text-sm text-white mx-3 cursor-pointer">Login</button></Link>}
                    <button onClick={toggleCart} className="hidden md:block px-2 py-1 pb-1.5 text-red-500 text-2xl bg-white border-slate-100 rounded-2xl border-2 mx-3 cursor-pointer"><AiOutlineShoppingCart /></button>
                </div>
                <div ref={ref} className={`sideCart z-10 top-0 right-0 p-10 transform transition-transform ${Object.keys(cart).length !== 0 ? 'translate-x-0' : 'translate-x-full'} bg-white w-full md:w-[50%] h-full fixed`}>
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
                {dropdown && <div className="z-50 w-[100vh] h-[vh] text-md flex bg-white bottom-0 fixed rounded-md px-5 shadow-slate-600 shadow-md">
                    <ul>
                        <Link href={'/account'}><li className='hover:bg-slate-100 cursor-pointer items-center flex text-md font-semibold'><FaUserCircle className='m-4 text-2xl text-red-500' />My Account</li></Link>
                        <Link href={'/orders'}><li className='hover:bg-slate-100 cursor-pointer items-center flex text-md font-semibold'><AiFillBook className='m-4 text-2xl text-red-500' />Orders</li></Link>
                        <hr />
                        <li onClick={logout} className='hover:bg-slate-100 cursor-pointer items-center flex text-md font-semibold'><FiLogOut className='m-4 text-2xl' />Log out</li>
                    </ul>
                </div>}
                <div className="bg-white md:hidden fixed bottom-0 w-full">
                    <hr />
                    <ul className="h-14 flex px-6 items-center justify-between">
                        <li onClick={toggleNav} className='text-2xl'><GiHamburgerMenu /></li>
                        <Link href={'/'}><li className='text-2xl'><AiFillHome /></li></Link>
                        <li onClick={toggleCart} className='text-2xl'><AiOutlineShoppingCart /></li>
                        {!user.value && <Link href={'/login'}><li className='text-2xl'><FaUserCircle /></li></Link>}
                        {user.value && <li onClick={toogleDropdown} className='text-2xl'><FaUserCircle /></li>}
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