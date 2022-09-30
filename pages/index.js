/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { MdLocalShipping } from 'react-icons/md'
import { BiDonateHeart } from 'react-icons/bi'
import { AiTwotoneStar } from 'react-icons/ai'
import Product from '../models/Product';
import mongoose from "mongoose";

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Clox</title>
        <meta name="description" content="Clox 100% Natural 0% Harmful. We sell Natural cleaning Products for your home and Office to keep your home clean and hygienic. Because your safety is our responsibility." />
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
          <div className="flex flex-wrap -m-4">
            {products.length == 0 && <div className='container flex justify-center items-center'><p className='text-center text-xl text-red-500'>Sorry! Nothing to show</p></div>}
            {products.length == 1 && <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 cursor-pointer p-6 rounded-lg">
                <Link href={`/product/${products[0].slug}`}><img alt="content" className="rounded w-full object-cover object-top mb-6" src={products[0].img} /></Link>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{products[0].title}</h2>
              </div>
            </div>}
            {products.length == 2 && <><div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 cursor-pointer p-6 rounded-lg">
                <Link href={`/product/${products[0].slug}`}><img alt="content" className="rounded w-full object-cover object-top mb-6" src={products[0].img} /></Link>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{products[0].title}</h2>
              </div>
            </div><div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 cursor-pointer p-6 rounded-lg">
                  <Link href={`/product/${products[1].slug}`}><img alt="content" className="rounded w-full object-cover object-top mb-6" src={products[1].img} /></Link>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{products[1].title}</h2>
                </div>
              </div></>}
            {products.length == 3 && <><div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 cursor-pointer p-6 rounded-lg">
                <Link href={`/product/${products[0].slug}`}><img alt="content" className="rounded w-full object-cover object-top mb-6" src={products[0].img} /></Link>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{products[0].title}</h2>
              </div>
            </div><div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 cursor-pointer p-6 rounded-lg">
                  <Link href={`/product/${products[1].slug}`}><img alt="content" className="rounded w-full object-cover object-top mb-6" src={products[1].img} /></Link>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{products[1].title}</h2>
                </div>
              </div><div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 cursor-pointer p-6 rounded-lg">
                  <Link href={`/product/${products[2].slug}`}><img alt="content" className="rounded w-full object-cover object-top mb-6" src={products[2].img} /></Link>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{products[2].title}</h2>
                </div>
              </div></>}
            {products.length >= 4 && <><div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 cursor-pointer p-6 rounded-lg">
                <Link href={`/product/${products[0].slug}`}><img alt="content" className="rounded w-full object-cover object-top mb-6" src={products[0].img} /></Link>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{products[0].title}</h2>
              </div>
            </div><div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 cursor-pointer p-6 rounded-lg">
                  <Link href={`/product/${products[1].slug}`}><img alt="content" className="rounded w-full object-cover object-top mb-6" src={products[1].img} /></Link>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{products[1].title}</h2>
                </div>
              </div><div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 cursor-pointer p-6 rounded-lg">
                  <Link href={`/product/${products[2].slug}`}><img alt="content" className="rounded w-full object-cover object-top mb-6" src={products[2].img} /></Link>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{products[2].title}</h2>
                </div>
              </div><div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 cursor-pointer p-6 rounded-lg">
                  <Link href={`/product/${products[3].slug}`}><img alt="content" className="rounded w-full object-cover object-top mb-6" src={products[3].img} /></Link>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{products[3].title}</h2>
                </div>
              </div></>}
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center items-center">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg  flex flex-col justify-center items-center">
                <div className="text-2xl w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4">
                  <AiTwotoneStar />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Quality Products</h2>
                <p className="leading-relaxed text-base">Our Products are 100% natural products</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg  flex flex-col justify-center items-center">
                <div className="text-2xl w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4">
                  <MdLocalShipping />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Free delivery</h2>
                <p className="leading-relaxed text-base">We Provide free delivery all over india</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg  flex flex-col justify-center items-center">
                <div className="text-2xl w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4">
                  <BiDonateHeart />
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
    props: { products: JSON.parse(JSON.stringify(products)) } // will be passed to the page component as props
  }
}