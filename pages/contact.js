import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

const Contact = () => {
    return (
        <><Head>
            <title>{'Contact Us -- Clox'}</title>
            <meta name="description" content={'Contact Us'} />
        </Head><div className="md:m-10 m-32 rounded-xl container md:p-28 p-4 bg-slate-100 flex justify-center items-center flex-col mx-auto">
                <h1 className='mb-5 md:text-3xl text-2xl font-sans font-bold'>Lets talk about everything!</h1>
                <Image height={100} width={150} src="/logo.png" alt="" />
                <span className='mt-5 text-2xl font-sans font-semibold'>Feel free to ask us anything!</span>
                <p className='mt-5'>If you have any questions regarding your order, feel free to send email, call or Whatsapp us on our support number</p>
                <div className="items flex justify-center items-center md:space-x-96 space-x-4 mt-10">
                    <div className="box flex flex-col">
                        <span className='font-bold'>Corporate Address</span>
                        <span>Clox Solutions</span>
                        <span>95, Govind Vihar, Hathoj, Kalwar Rd</span>
                        <span>Jaipur, Rajasthan 302012</span>
                    </div>
                    <div className="box flex flex-col">
                        <span className='font-bold'>Customer Support</span>
                        <span>Call/Whatsapp: +91 9929099100</span>
                        <span>Email: care@clox.in</span>
                        <span>Morning: 9AM - 6PM</span>
                    </div>
                </div>
            </div></>
    )
}

export default Contact