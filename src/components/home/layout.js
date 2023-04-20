import OpcionesMenu from '@components/menuItems'
import Head from 'next/head'
import Footer from '../footer'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Link from 'next/link'

const expand = 'true'

export default function Layout({ children }) {
  return (
    <>
      <Head>
          <title>Bienvenido - Changarrito</title>
          <meta name="description" content="Portal de comida" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
      <Footer />
    </>
  )
}