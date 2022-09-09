import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <div className="m-10 rounded-xl container p-28 bg-slate-100 flex justify-center items-center flex-col">
      <Image src={'/logo.png'} width={140} height={100} alt={''} />
      <h1 className='mt-5 text-3xl font-sans font-bold'>Welcome to Clox</h1>
      <p className='mt-5 mx-48'>Clox makes clean and Hygiene products for your home and office. that keeps your home germ free and desiese free. we are to help you and make your home clean.</p>
      <button className="flex mt-5 text-white bg-red-500 border-0 py-2 px-2 md:px-2 focus:outline-none hover:bg-red-600 rounded"><Link href="/shop">Start Shopping</Link></button>
    </div>
  )
}

export default About