import { useRouter } from 'next/router'
import { React, useEffect, useState } from 'react'
import Link from 'next/link'

const Orders = () => {
  const router = useRouter()
  const [orders, setOrders] = useState({})
  useEffect(() => {
    const fetchOrders = async () => {
      let a = await fetch('/api/myorders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: localStorage.getItem('token') })
      })
      let res = await a.json()
      setOrders(res.orders)
    }
    if (!localStorage.getItem('token')) {
      router.push('/')
    }
    else {
      fetchOrders()
    }
  }, [])

  return (
    <div className='mx-auto my-20 min-h-screen'>
      <h1 className='text-2xl font-bold p-8 text-center'>My Orders</h1>
      <div className="container mx-auto">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-white border-b">
                    <tr>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        #OrderId
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Email
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Amount
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(orders).map((item) => {
                      return <tr key={orders[item]._id} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{orders[item].orderId}</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {orders[item].email}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        ₹ {orders[item].amount}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <Link href={'/order?id=' + orders[item]._id}><a>Details</a></Link>
                        </td>
                      </tr>
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orders