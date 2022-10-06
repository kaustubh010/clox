import React, { useState, useEffect } from 'react'
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import FullLayout from "../../src/layouts/FullLayout";
import Head from 'next/head';
import Order from '../../models/Order';
import mongoose from "mongoose";

const View = ({ order }) => {
  const [date, setDate] = useState()
  useEffect(() => {
    const d = new Date(order.createdAt)
    setDate(d)
  }, [])

  const products = order.products

  return (
    <>
      <Head><title>{'Admin -- Edit Product'}</title></Head>
      <ThemeProvider theme={theme}>
        <style jsx global>{`
            footer {
            display: none;
            }
            header {
              display: none;
              }
      `}</style>
        <FullLayout>
        <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
            <div className="w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 mx-auto flex justify-center items-center flex-col">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">CLOX</h2>
              <h1 className="text-gray-900 text-xl md:text-3xl title-font font-medium mb-4">Order id: #{order.orderId}</h1>
              <p className="leading-relaxed mb-2 font-medium text-xl"><span className={'text-black font-semibold'}>Name:</span> {order.name}</p>
              <p className="leading-relaxed mb-2 font-medium text-xl"><span className={'text-black font-semibold'}>Phone:</span> {order.phone}</p>
              <p className="leading-relaxed mb-2 font-medium text-xl"><span className={'text-black font-semibold'}>Email:</span> {order.email}</p>
              <p className="leading-relaxed mb-2 font-medium text-xl"><span className={'text-black font-semibold'}>Address:</span> {order.address}, {order.district}, {order.state}, {order.pincode} </p>
              <p className="leading-relaxed mb-2 font-medium text-xl"><span className={'text-black font-semibold'}>Payment Info:</span> {order.paymentInfo} </p>
              <p className="leading-relaxed mb-2 font-medium text-xl"><span className={'text-black font-semibold'}>Order Placed on:</span> <span className='font-semibold text-slate-500'>{date && date.toLocaleDateString("en-IN", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span></p>
              <p className='text-xl py-4'><span className={'text-black font-semibold'}>Order Status is</span> <span className='text-xl py-4 font-semibold text-red-700'>{order.status}.</span></p>
              <div className="flex mb-4 m-auto space-x-40">
                <a className="flex-grow py-2 px-1 m-auto text-2xl">Item Description</a>
                <a className="flex-grow py-2 px-1 m-auto text-2xl">Quantity</a>
                <a className="flex-grow py-2 px-1 m-auto text-2xl">item Total</a>
              </div>
              {Object.keys(products).map((key) => {
                return <div key={key} className="space-x-40 flex border-t border-b text-xl border-gray-200 py-2 m-auto">
                  <span className="text-gray-900 m-auto text-2xl">{products[key].name}</span>
                  <span className="text-gray-900 m-auto text-2xl">{products[key].qty}</span>
                  <span className="text-gray-900 m-auto text-2xl">₹{products[key].price} X {products[key].qty} = ₹{products[key].price * products[key].qty}</span>
                </div>
              })}
              <div className="my-10">
                <span className="title-font font-medium text-2xl text-gray-900">SubTotal: ₹{order.amount}</span>
                <button className="flex text-white bg-red-500 border-0 py-2 my-6 px-6 focus:outline-none hover:bg-red-600 rounded">Delevired ?</button>
              </div>
            </div>
          </div>
      </section>
        </FullLayout>
      </ThemeProvider>
    </>
  );
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGODB_URI)
  }
  let order = await Order.findById(context.query.id)
  return {
    props: { order: JSON.parse(JSON.stringify(order)) } // will be passed to the page component as props
  }
}

export default View