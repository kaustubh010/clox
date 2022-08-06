import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import '../styles/globals.css'
import Mobnavbar from '../components/Mobnavbar'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
    <Navbar />
    <Mobnavbar />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp