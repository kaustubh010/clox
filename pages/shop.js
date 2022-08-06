/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

const Shop = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap cursor-pointer -m-4">
                        <Link href={'/product/shampoo'}><div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg mx-5 my-2">
                            <a className="block relative rounded overflow-hidden">
                                <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block" src="https://images-eu.ssl-images-amazon.com/images/I/51MBJhwifzL._SX300_SY300_QL70_FMwebp_.jpg" />
                            </a>
                            <div className="mt-4 text-center md:text-left">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">Hand Wash</h2>
                                <p className="mt-1">₹ 499</p>
                            </div>
                        </div></Link>
                        <Link href={'/product/shampoo'}><div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg mx-5 my-2">
                            <a className="block relative rounded overflow-hidden">
                                <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block" src="https://images-eu.ssl-images-amazon.com/images/I/31V4e3EJQpL._SX300_SY300_QL70_FMwebp_.jpg" />
                            </a>
                            <div className="mt-4 text-center md:text-left">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">Shampoo</h2>
                                <p className="mt-1">₹ 499</p>
                            </div>
                        </div></Link>
                        <Link href={'/product/shampoo'}><div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg mx-5 my-2">
                            <a className="block relative rounded overflow-hidden">
                                <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block" src="https://rukminim1.flixcart.com/image/416/416/l41n2q80/bathroom-floor-cleaner/o/h/l/floor-cleaner-floral-fresh-1000-floor-cleaner-floral-fresh-1000-original-imagff62twyrhgat.jpeg?q=70" />
                            </a>
                            <div className="mt-4 text-center md:text-left">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">Cleaner</h2>
                                <p className="mt-1">₹ 499</p>
                            </div>
                        </div></Link>
                        <Link href={'/product/shampoo'}><div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg mx-5 my-2">
                            <a className="block relative rounded overflow-hidden">
                                <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block" src="https://rukminim1.flixcart.com/image/416/416/kt4ozgw0/perfume/f/7/y/100-whisky-smoke-edp-100-ml-eau-de-parfum-beardo-men-original-imag6jnjcywmxgeq.jpeg?q=70" />
                            </a>
                            <div className="mt-4 text-center md:text-left">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">Perfume</h2>
                                <p className="mt-1">₹ 499</p>
                            </div>
                        </div></Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Shop