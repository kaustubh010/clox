import React from 'react'
import Image from 'next/image'

const Contact = () => {
    return (
        <div className="m-10 rounded-xl container p-28 bg-slate-100 flex justify-center items-center flex-col">
            <h1 className='mb-5 text-3xl font-sans font-bold'>Lets talk about everything!</h1>
            <Image height={100} width={150} src="/logo.png" alt="" />
            <span className='mt-5 text-2xl font-sans font-semibold'>Feel free to ask us anything!</span>
            <p className='mt-5'>If you have any questions regarding your order, feel free to send email, call or Whatsapp us on our support number</p>
            <div className="items flex justify-center items-center space-x-96 mt-10">
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
        </div>
    )
}

export default Contact