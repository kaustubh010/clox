/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import { useState } from 'react'
import Product from '../../models/Product'
import mongoose from "mongoose";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';
import Error from 'next/error'

const Post = ({ addToCart, product, buynow, error}) => {
    const router = useRouter()
    const { slug } = router.query
    const [pin, setPin] = useState()
    const [service, setService] = useState()
    const checkpincode = async () => {
        let a = await fetch(`https://api.postalpincode.in/pincode/${pin}`, {
            method: 'GET',
        })
        let pincodes = await a.json()
        if (pincodes[0].Status == "Success") {
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
        else if (pincodes[0].Status == "Error") {
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
        else if (!pin) {
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
    if (error == 404) {
        return <Error statusCode={404} />
      }

    return <>
        <Head>
            <title>{`Clox Buy ${product.title}`}</title>
            <meta name="description" content={`Clox Buy ${product.title}`} />
        </Head>
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
            <div className="container px-5 py-24 mx-auto flex items-center">
                <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center items-center">
                    <img alt="ecommerce" width={160} height={400} src={product.img} />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">Clox</h2>
                        <h1 className="mb-4 text-gray-900 text-3xl title-font font-medium">{product.title}</h1>
                        <p className="mb-4 leading-relaxed">{product.desc}</p>
                        <div className="flex items-center">
                            {product.availableQty > 0 && <span className="title-font font-medium text-2xl text-gray-900">₹{product.price}</span>}
                            {product.availableQty <= 0 && <span className="title-font font-medium md:text-2xl text-gray-900 mr-2">Out of Stock!</span>}
                            <button disabled={product.availableQty <= 0} onClick={() => { buynow(slug, 1, product.price, product.title) }} className="disabled:bg-red-300 flex ml-6 md:ml-20 text-white bg-red-500 border-0 py-2 px-2 md:px-2 focus:outline-none hover:bg-red-600 rounded">Buy Now</button>
                            <button disabled={product.availableQty <= 0} onClick={() => { addToCart(slug, 1, product.price, product.title) }} className="disabled:bg-red-300 flex ml-4 text-white bg-red-500 border-0 py-2 px-2 md:px-2 focus:outline-none hover:bg-red-600 rounded">Add to Cart</button>
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
    let error = null;
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGODB_URI)
    }
    let product = await Product.findOne({ slug: context.query.slug })
    if(product == null){
        return {
            props: {error: 404 } // will be passed to the page component as props
        }
    }
    return {
        props: {error: error, product: JSON.parse(JSON.stringify(product)) } // will be passed to the page component as props
    }
}

export default Post