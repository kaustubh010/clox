/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {MdLocalShipping} from 'react-icons/md'
import {BiDonateHeart} from 'react-icons/bi'
import {AiTwotoneStar} from 'react-icons/ai'
import Product from '../models/Product';
import mongoose from "mongoose";

export default function Home({products}) {
  return (
    <div>
      <Head>
        <title>Clox.com 100% Natural 0% Harmful</title>
        <meta name="description" content="Clox.com 100% Natural 0% Harmful" />
      </Head>
      <div className='z-0 pt-28 md:pt-20'>
        <Image src="/home.jpg" alt="" width={1500} height={800} />
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col">
            <div className="flex flex-wrap sm:flex-row flex-col mb-2">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-3xl mb-2 sm:mb-0">Our Latest Products</h1>
            </div>
            <div className="h-1 w-20 rounded overflow-hidden mb-8">
              <div className="w-20 h-full bg-red-500"></div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center space-x-0 md:space-x-20 sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-60 sm:mb-0 flex flex-col pt-4 rounded-lg justify-center items-center mb-6 bg-slate-100">
              <div className="h-96 w-40 bg-slate-200 overflow-hidden">
                <Link href={`/product/${products[0].slug}`}><img alt="content" className="cursor-pointer object-cover object-center h-96 w-40" src={products[0].img} /></Link>
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{products[0].name}</h2>
              <p className="text-base leading-relaxed mt-2">Eum odit similique rerum.</p>
            </div>
            <div className="p-4 md:w-60 sm:mb-0 flex flex-col pt-4 rounded-lg justify-center items-center mb-6 bg-slate-100">
              <div className="h-96 w-40 bg-slate-200 overflow-hidden">
                <Link href={`/product/${products[1].slug}`}><img alt="content" className="cursor-pointer object-cover object-center h-96 w-40" src={products[1].img} /></Link>
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{products[1].name}</h2>
              <p className="text-base leading-relaxed mt-2">Quo at autem laborum.</p>
            </div>
            <div className="p-4 md:w-60 sm:mb-0 flex flex-col pt-4 rounded-lg justify-center items-center mb-6 bg-slate-100">
              <div className="h-96 w-40 bg-slate-200 overflow-hidden">
                <Link href={`/product/${products[2].slug}`}><img alt="content" className="cursor-pointer object-cover object-center h-96 w-40" src="/floor cleaner.png" /></Link>
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{products[2].name}</h2>
              <p className="text-base leading-relaxed mt-2">Llit. Quia sint asperiores minima?</p>
            </div>
            <div className="p-4 md:w-60 sm:mb-0 flex flex-col pt-4 rounded-lg justify-center items-center mb-6 bg-slate-100">
              <div className="h-96 w-40 bg-slate-200 overflow-hidden">
                <Link href={`/product/${products[3].slug}`}><img alt="content" className="cursor-pointer object-cover object-center h-96 w-40" src={products[3].img} /></Link>
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{products[2].name}</h2>
              <p className="text-base leading-relaxed mt-2">Sequi minima nostrum totam.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center items-center">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg  flex flex-col justify-center items-center">
                <div className="text-2xl w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4">
                  <AiTwotoneStar/>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Quality Products</h2>
                <p className="leading-relaxed text-base">Our Products are 100% natural products</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg  flex flex-col justify-center items-center">
                <div className="text-2xl w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4">
                  <MdLocalShipping/>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Free delivery</h2>
                <p className="leading-relaxed text-base">We Provide free delivery all over india</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg  flex flex-col justify-center items-center">
                <div className="text-2xl w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4">
                  <BiDonateHeart/>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Natural</h2>
                <p className="leading-relaxed text-base">Our Natural products are not harmfull</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export async function getServerSideProps(context) {
  await mongoose.connect(process.env.MONGODB_URI)
  let products = await Product.find()
  return {
      props: {products: JSON.parse(JSON.stringify(products))} // will be passed to the page component as props
  }
}