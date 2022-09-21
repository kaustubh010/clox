import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

const About = () => {
  return (
    <><Head>
    <title>{'Clox -- About us'}</title>
    <meta name="description" content={'About us'} />
</Head><div className="md:m-10 mt-32 rounded-xl container md:p-28 p-0 bg-slate-100 flex justify-center items-center flex-col">
        <Image src={'/logo.png'} width={140} height={100} alt={''} />
        <h1 className='mt-5 text-3xl font-sans font-bold'>Welcome to Clox</h1>
        <p className='mt-5 md:mx-48 mx-10'>Clox makes clean and Hygiene products for your home and office. that keeps your home germ free and desiese free. we are to help you and make your home clean.</p>
        <button className="mb-5 flex mt-5 text-white bg-red-500 border-0 py-2 px-2 md:px-2 focus:outline-none hover:bg-red-600 rounded"><Link href="/shop">Start Shopping</Link></button>
      </div></>
  )
}

export default About