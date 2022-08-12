import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar'
import LoadingBar from 'react-top-loading-bar'
import Head from 'next/head'
import '../styles/globals.css'
import { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)
  const [user, setUser] = useState({ value: null })
  const [key, setKey] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    router.events.on('routeChangeStart', ()=>{
      setProgress(40)
    })
    router.events.on('routeChangeComplete', ()=>{
      setProgress(100)
    })
    try {
      if (localStorage.getItem('cart')) {
        setCart(JSON.parse(localStorage.getItem('cart')))
        saveCart(JSON.parse(localStorage.getItem('cart')))
      }
    } catch (error) {
      console.error(error);
      localStorage.clear()
    }
    const token = localStorage.getItem('token')
    if (token) {
      setUser({ value: token })
      setKey(Math.random())
    }
  }, [router.query])

  const logout = () => {
    localStorage.removeItem('token')
    setUser({ value: null })
    setKey(Math.random())
  }

  const saveCart = (myCart) => {
    localStorage.setItem('cart', JSON.stringify(myCart))
    let subt = 0;
    let keys = Object.keys(myCart)
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]]['price'] * myCart[keys[i]].qty;
    }
    setSubTotal(subt)
  }

  const addToCart = (itemCode, qty, price, name) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty
    }
    else {
      newCart[itemCode] = { qty: 1, price, name }
    }
    setCart(newCart)
    saveCart(newCart)
  }

  const buynow = (itemCode, qty, price, name) => {
    let newCart = { itemCode: { qty: 1, price, name } }
    setCart(newCart)
    saveCart(newCart)
    router.push('/checkout')
  }

  const removeFromCart = (itemCode, qty, price, name) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty
    }
    else {
      newCart[itemCode] = { qty: 1, price, name }
    }
    setCart(newCart)
    saveCart(newCart)
  }

  const clearCart = () => {
    setCart({})
    saveCart({})
  }

  return <>
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
    <LoadingBar
        color='#f11946'
        height={3}
        waitingTime={400}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    <Navbar logout={logout} user={user} key={key} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
    <Component cart={cart} buynow={buynow} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
    <Footer />
  </>
}

export default MyApp
