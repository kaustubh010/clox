import React, { useEffect, useState } from 'react'
import Order from '../models/Order'
import mongoose from "mongoose"

const MyOrder = (order) => {
  order = order.order
  const products = order.products
  const [date, setDate] = useState()
  useEffect(() => {
    const d = new Date(order.createdAt)
    setDate(d)
  }, [])
  
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">CLOX</h2>
            <h1 className="text-gray-900 text-xl md:text-3xl title-font font-medium mb-4">Order id: #{order.orderId}</h1>
            <p className="leading-relaxed mb-2 text-green-500">Yayy!! Your order has been Succesfully placed.</p>
            <p className="leading-relaxed mb-2">Order Placed on: <span className='font-semibold text-slate-500'>{date && date.toLocaleDateString("en-IN", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span></p>
            <p>Your Payment Status is <span className='font-semibold text-red-700'>{order.status}.</span></p>
            <div className="flex mb-4 m-auto">
              <a className="flex-grow py-2 text-lg px-1 m-auto">Item Description</a>
              <a className="flex-grow py-2 text-lg px-1 m-auto">Quantity</a>
              <a className="flex-grow py-2 text-lg px-1 m-auto">item Total</a>
            </div>
            {Object.keys(products).map((key)=>{
              return <div key={key} className="flex border-t border-b border-gray-200 py-2 m-auto">
              <span className="text-gray-900 m-auto">{products[key].name}</span>
              <span className="text-gray-900 m-auto">{products[key].qty}</span>
              <span className="text-gray-900 m-auto">₹{products[key].price} X {products[key].qty} = ₹{products[key].price * products[key].qty}</span>
            </div>
            })}
            <div className="my-10">
              <span className="title-font font-medium text-2xl text-gray-900">SubTotal: ₹{order.amount}</span>
              <button className="flex text-white bg-red-500 border-0 py-2 my-6 px-6 focus:outline-none hover:bg-red-600 rounded">Track Order</button>
            </div>
          </div>
          <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="/order.png" />
        </div>
      </div>
    </section>
  )
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

export default MyOrder