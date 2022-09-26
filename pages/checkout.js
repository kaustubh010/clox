import { React, useState, useEffect } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
import Head from 'next/head';

const Checkout = ({ cart, clearCart, removeFromCart, addToCart, subTotal }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [pincode, setPincode] = useState('')
    const [disabled, setDisabled] = useState(true)
    const [state, setState] = useState('')
    const [district, setDistrict] = useState('')
    const [user, setUser] = useState()

    useEffect(() => {
        const myuser = JSON.parse(localStorage.getItem('myuser'))
        if (myuser && myuser.token) {
            setUser(myuser)
            setEmail(myuser.email)
            fetchData(myuser.token)
        }
    }, [])

    useEffect(() => {
        if (name.length > 3 && email.length > 3 && address.length > 3 && phone.length > 9 && pincode.length > 5) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }, [name, email, pincode, address, phone])


    const fetchData = async (token) => {
        let data = { token: token }
        let a = await fetch('/api/getuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        let response = await a.json()
        setName(response.name)
        setAddress(response.address)
        setPhone(response.phone)
        setPincode(response.pincode)
        getpincode(response.pincode)
    }

    const router = useRouter()
    const initiateOrder = async () => {
        let oid = Math.floor(Math.random() * Date.now());
        const data = { cart, subTotal, oid, email: email, name, address, pincode, phone, state, district }
        // Initiate order api
        let a = await fetch('/api/initiateorder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        let response = await a.json()

        if (response.succses) {
            toast.success('Order Placed Successfully', {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setTimeout(() => {
                clearCart()
                router.push('/order?id=' + response.order)
            }, 1000);
        }
        else {
            if (response.clear) {
                clearCart()
            }
            toast.error(response.error, {
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

    const getpincode = async (pins) => {
        let a = await fetch(`https://api.postalpincode.in/pincode/${pins}`, {
            method: 'GET',
        })
        let pin = await a.json()
        if (pin[0].Status == "Success") {
            setState(pin[0].PostOffice[0].Circle)
            setDistrict(pin[0].PostOffice[0].District)
        }
        else {
            setState('')
            setDistrict('')
        }
    }

    const handleChange = async (e) => {
        if (e.target.name == 'name') {
            setName(e.target.value)
        }
        else if (e.target.name == 'email') {
            setEmail(e.target.value)
        }
        else if (e.target.name == 'address') {
            setAddress(e.target.value)
        }
        else if (e.target.name == 'phone') {
            setPhone(e.target.value)
        }
        else if (e.target.name == 'pincode') {
            setPincode(e.target.value)
            if (e.target.value.length == 6) {
                getpincode(e.target.value)
            }
            else {
                setState('')
                setDistrict('')
            }
        }
    }

    return (
        <>
            <Head>
                <title>{'Checkout -- Clox'}</title>
                <meta name="description" content={'Checkout'} />
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
                pauseOnHover />
            <div className='container mx-auto mt-20 p-2'>
                <h1 className='font-bold text-3xl my-8 text-center'>Checkout</h1>
                <h2 className='font-semibold text-xl'>1. Delivery Details</h2>
                <div className="mx-auto flex my-2">
                    <div className="px-2 w-1/2">
                        <div className="mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input onChange={handleChange} value={name} type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <div className="px-2 w-1/2">
                        <div className="mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            {user ? <input value={email} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" readOnly={true} /> : <input onChange={handleChange} value={email} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />}
                        </div>
                    </div>
                </div>
                <div className="px-2 w-full">
                    <div className="mb-4">
                        <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
                        <textarea onChange={handleChange} value={address} name="address" id="address" cols="30" rows="2" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                </div>
                <div className="mx-auto flex my-2">
                    <div className="px-2 w-1/2">
                        <div className="mb-4">
                            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone Number</label>
                            <input onChange={handleChange} value={phone} type="phone" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <div className="px-2 w-1/2">
                        <div className="mb-4">
                            <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">PinCode</label>
                            <input onChange={handleChange} value={pincode} type="text" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                </div>
                <div className="mx-auto flex my-2">
                    <div className="px-2 w-1/2">
                        <div className="mb-4">
                            <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
                            <input onChange={handleChange} value={state} type="text" id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <div className="px-2 w-1/2">
                        <div className="mb-4">
                            <label htmlFor="district" className="leading-7 text-sm text-gray-600">District</label>
                            <input onChange={handleChange} value={district} type="text" id="district" name="district" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                </div>
                <h2 className='font-semibold text-xl'>2. Review Cart Items & Pay</h2>
                <div className="Nav z-10 px-10 py-2 mb-4 mt-2 bg-red-100">
                    <nav className="mt-10 MuiList-root MuiList-padding MuiList-subheader css-5xiesr" aria-labelledby="nested-list-subheader">
                        <ol className='list-decimal font-semibold'>
                            {Object.keys(cart).length == 0 && <div className='font-semibold ml-4'>Your cart is Empty!</div>}
                            {Object.keys(cart).map((k) => {
                                return <li key={k}>
                                    <div className="item flex my-5">
                                        <div className="font-semibold">{cart[k].name}</div>
                                        <div className="flex font-semibold items-center justify-center w-1/3 text-lg">
                                            <AiFillMinusCircle onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name); }} className='cursor-pointer text-red-500' />
                                            <span className='mx-2 text-sm'>{cart[k].qty}</span> <AiFillPlusCircle onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name); }} className='cursor-pointer text-red-500' />
                                        </div>
                                    </div>
                                </li>;
                            })}
                        </ol>
                        <p className='text-lg mt-6 font-bold mb-4'>Subtotal: ₹{subTotal}</p>
                    </nav>
                </div>
                <button onClick={initiateOrder} disabled={disabled} className="disabled:bg-red-300 mt-4 mb-4 font-semibold flex justify-center items-center ml-4 text-white bg-red-500 border-0 py-2 px-2 focus:outline-none hover:bg-red-600 rounded">
                    <span className='text-xl mr-2'><FaShoppingCart /></span> Pay ₹{subTotal} COD
                </button>
            </div></>
    )
}

export default Checkout