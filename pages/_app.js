import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar'
import LoadingBar from 'react-top-loading-bar'
import Head from 'next/head'
import '../styles/globals.css'
import { useState, useEffect } from 'react'
import ProfileDD from '../src/layouts/header/ProfileDD'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)
  const [user, setUser] = useState({ value: null })
  const [key, setKey] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setProgress(40)
    })
    router.events.on('routeChangeComplete', () => {
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
    const myuser = JSON.parse(localStorage.getItem('myuser'))
    if (myuser) {
      setUser({ value: myuser.token, email: myuser.email })
    }
    setKey(Math.random())
  }, [router.query])

  const logout = () => {
    localStorage.removeItem('myuser')
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
    if(Object.keys(cart).length == 0){
      setKey(Math.random())
    }
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
    let newCart = {}
    newCart[itemCode] =  { qty: 1, price, name }
    setCart(newCart)
    saveCart(newCart)
    router.push('/checkout')
  }

  const removeFromCart = (itemCode, qty, price, name) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty
      if (newCart[itemCode].qty == 0) {
        delete newCart[itemCode];
      }
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
      <meta name="google-site-verification" content="hB6P-uuOyotYMJbRaFz-Wcqs1H7OphvGYh6lrL_N_po" />
    </Head>
    <LoadingBar
      color='#f11946'
      height={3}
      waitingTime={400}
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
    />
    <Navbar logout={logout} user={user} key={key} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
    <Component user={user} cart={cart} buynow={buynow} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
    <Footer />
  </>
}

export default MyApp
