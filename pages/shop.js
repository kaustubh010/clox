/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import Product from '../models/Product';
import mongoose from "mongoose";
import Head from 'next/head';

const Shop = ({ products }) => {
    return (
        <>
        <Head>
        <title>Clox Shop</title>
        <meta name="description" content="We sell Natural cleaning Products for your home and Office to keep your home clean and hygienic. Because your safety is our responsibility." />
        </Head><div>
                <section className="text-gray-600 body-font mt-6 m-auto">
                    <div className="container md:px-28 py-24 mx-auto">
                        <div className="flex flex-wrap cursor-pointer -m-4">
                            {products.map((item) => {
                                return <Link key={item._id} href={`/product/${item.slug}`}><div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg mx-5 my-2">
                                    <a className="block relative rounded overflow-hidden">
                                        <img alt="ecommerce" className="-z-10 relative m-auto md:mx-0 h-[30vh] md:h-[36vh] block" src={item.img} />
                                    </a>
                                    <div className="mt-4 text-center md:text-left">
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                                        <p className="mt-1">₹{item.price}</p>
                                    </div>
                                </div></Link>;
                            })}
                        </div>
                    </div>
                </section>
            </div></>
    )
}

export async function getServerSideProps(context) {
    await mongoose.connect(process.env.MONGODB_URI)
    let products = await Product.find()
    return {
        props: { products: JSON.parse(JSON.stringify(products)) } // will be passed to the page component as props
    }
}

export default Shop