import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { AiOutlineClose, AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import Link from 'next/link'

const Checkout = ({ cart, clearCart, removeFromCart, addToCart, subTotal }) => {
    return (
        <div className='container mx-auto mt-20 p-2'>
            <h1 className='font-bold text-3xl my-8 text-center'>Checkout</h1>
            <h2 className='font-semibold text-xl'>1. Delivery Details</h2>
            <div className="mx-auto flex my-2">
                <div className="px-2 w-1/2">
                    <div className="mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div className="px-2 w-1/2">
                    <div className="mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
            </div>
            <div className="px-2 w-full">
                <div className="mb-4">
                    <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
                    <textarea name="address" id="address" cols="30" rows="2" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
                </div>
            </div>
            <div className="mx-auto flex my-2">
                <div className="px-2 w-1/2">
                    <div className="mb-4">
                        <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone Number</label>
                        <input type="phone" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div className="px-2 w-1/2">
                    <div className="mb-4">
                        <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">PinCode</label>
                        <input type="text" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
            </div>
            <div className="mx-auto flex my-2">
                <div className="px-2 w-1/2">
                    <div className="mb-4">
                        <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
                        <input type="text" id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div className="px-2 w-1/2">
                    <div className="mb-4">
                        <label htmlFor="district" className="leading-7 text-sm text-gray-600">District</label>
                        <input type="text" id="district" name="district" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
            </div>
            <h2 className='font-semibold text-xl'>2. Review Cart Items & Pay</h2>
            <div className="Nav z-10 px-10 py-2 mb-4 mt-2 bg-red-100">
                <nav className="mt-10 MuiList-root MuiList-padding MuiList-subheader css-5xiesr" aria-labelledby="nested-list-subheader">
                    <ol className='list-decimal font-semibold'>
                        {Object.keys(cart).length == 0 && <div className='font-semibold ml-4'>Your cart is Empty!</div>}
                        {Object.keys(cart).map((k) => {
                            return <li key={k}>
                                <div className="item flex my-5">
                                    <div className="font-semibold">{cart[k].name}</div>
                                    <div className="flex font-semibold items-center justify-center w-1/3 text-lg">
                                        <AiFillMinusCircle onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name) }} className='cursor-pointer text-red-500' />
                                        <span className='mx-2 text-sm'>{cart[k].qty}</span> <AiFillPlusCircle onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name) }} className='cursor-pointer text-red-500' />
                                    </div>
                                </div>
                            </li>
                        })}
                    </ol>
                    <p className='text-lg mt-6 font-bold mb-4'>Subtotal: ₹{subTotal}</p>
                </nav>
            </div>
            <button className="mt-4 mb-4 font-semibold flex justify-center items-center ml-4 text-white bg-red-500 border-0 py-2 px-2 focus:outline-none hover:bg-red-600 rounded">
                <span className='text-xl mr-2'><FaShoppingCart /></span> Pay ₹{subTotal}
            </button>
        </div>
    )
}

export default Checkout