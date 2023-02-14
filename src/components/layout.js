import Navbar from './menu'
import Head from 'next/head'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
          <title>Changarrito</title>
          <meta name="description" content="Portal de comida" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}