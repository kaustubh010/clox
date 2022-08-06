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
                                <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block" src="/bathroom cleaning spray.png" />
                            </a>
                            <div className="mt-4 text-center md:text-left">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">Bathroom Cleaning Spray.png</h2>
                                <p className="mt-1">₹ 499</p>
                            </div>
                        </div></Link>
                        <Link href={'/product/shampoo'}><div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg mx-5 my-2">
                            <a className="block relative rounded overflow-hidden">
                                <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block" src="/dish wash gel.png" />
                            </a>
                            <div className="mt-4 text-center md:text-left">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">Dish Wash Gel</h2>
                                <p className="mt-1">₹ 499</p>
                            </div>
                        </div></Link>
                        <Link href={'/product/shampoo'}><div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg mx-5 my-2">
                            <a className="block relative rounded overflow-hidden">
                                <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block" src="/floor cleaner.png" />
                            </a>
                            <div className="mt-4 text-center md:text-left">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">Floor Cleaner</h2>
                                <p className="mt-1">₹ 499</p>
                            </div>
                        </div></Link>
                        <Link href={'/product/shampoo'}><div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg mx-5 my-2">
                            <a className="block relative rounded overflow-hidden">
                                <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block" src="/glass cleaner.png" />
                            </a>
                            <div className="mt-4 text-center md:text-left">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">Glass Cleaner</h2>
                                <p className="mt-1">₹ 499</p>
                            </div>
                        </div></Link>
                        <Link href={'/product/shampoo'}><div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg mx-5 my-2">
                            <a className="block relative rounded overflow-hidden">
                                <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block" src="/toilet bowl cleaner.png" />
                            </a>
                            <div className="mt-4 text-center md:text-left">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">Toilet Bowl Cleaner</h2>
                                <p className="mt-1">₹ 499</p>
                            </div>
                        </div></Link>
                        <Link href={'/product/shampoo'}><div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg mx-5 my-2">
                            <a className="block relative rounded overflow-hidden">
                                <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block" src="/toilet cleaner.png" />
                            </a>
                            <div className="mt-4 text-center md:text-left">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">Toilet Cleaner</h2>
                                <p className="mt-1">₹ 499</p>
                            </div>
                        </div></Link>
                        <Link href={'/product/shampoo'}><div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg mx-5 my-2">
                            <a className="block relative rounded overflow-hidden">
                                <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block" src="/utencil cleaning spray.png" />
                            </a>
                            <div className="mt-4 text-center md:text-left">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">Utencil Cleaning Spray</h2>
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