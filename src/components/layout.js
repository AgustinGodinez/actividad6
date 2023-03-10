import Navbar from './menu'
import Head from 'next/head'
import Footer from './footer'

const siteTitle = "Bienvenido a Changarrito"

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
          <title>{!title ? siteTitle: title}</title>
          <meta name="description" content="Portal de comida" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}