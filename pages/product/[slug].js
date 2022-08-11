/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import { useState } from 'react'
import Product from '../../models/Product'
import mongoose from "mongoose";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Post = ({ addToCart, product, clearCart, buynow }) => {
    const router = useRouter()
    const { slug } = router.query
    const [pin, setPin] = useState()
    const [service, setService] = useState()
    const checkpincode = async () => {
        let pins = await fetch('/api/pincode')
        let pinJson = await pins.json()
        if (pinJson.includes(parseInt(pin))) {
            setService(true);
            toast.success('Your Pincode is Servicealble!', {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
        else {
            setService(false)
            toast.error('Sorry! Pincode not Serviceable', {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    }

    const onChangePin = (e) => {
        setPin(e.target.value)
    }

    return <>
        <ToastContainer
            position="top-left"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center items-center">
                    <img alt="ecommerce" className="lg:w-[40vh] w-full lg:h-auto h-full object-cover object-center rounded" src={product.img} />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
                        <div className="flex mb-4">
                            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                <a className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                </a>
                            </span>
                        </div>
                        <p className="mb-4 leading-relaxed">{product.desc}</p>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">₹{product.price}</span>
                            <button onClick={() => { buynow(slug, 1, product.price, product.title) }} className="flex ml-6 md:ml-20 text-white bg-red-500 border-0 py-2 px-2 md:px-2 focus:outline-none hover:bg-red-600 rounded">Buy Now</button>
                            <button onClick={() => { addToCart(slug, 1, product.price, product.title) }} className="flex ml-4 text-white bg-red-500 border-0 py-2 px-2 md:px-2 focus:outline-none hover:bg-red-600 rounded">Add to Cart</button>
                        </div>
                        <div className="pin mt-6 flex space-x-2 text-sm">
                            <input placeholder='Enter Your Pincode' onChange={onChangePin} className='border-2 border-slate-300 px-2 rounded-md' type="text" />
                            <button onClick={checkpincode} className="flex ml-4 text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded">Check</button>
                        </div>
                        {!service && service != null && <div className="text-red-700 mt-3">
                            Sorry! We do not deliver to this Pincode
                        </div>}
                        {service && service != null && <div className="text-green-700 mt-3">
                            Yey! This Pincode is Serviceable
                        </div>}
                    </div>
                </div>
            </div>
        </section>
    </>
}

export async function getServerSideProps(context) {
    await mongoose.connect(process.env.MONGODB_URI)
    let product = await Product.findOne({ slug: context.query.slug })
    return {
        props: { product: JSON.parse(JSON.stringify(product)) } // will be passed to the page component as props
    }
}

export default Post