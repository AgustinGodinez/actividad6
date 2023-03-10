
import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { FaHamburger } from "react-icons/fa"
import Container from 'react-bootstrap/Container'
import { Image, Stack } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import apiClient from '@/apiClient'
import { Modalcards } from '@/components/Modalcards'
import Layout from '../components/home/layout'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Link from 'next/link'
import { AiOutlineShopping } from "react-icons/ai"
import OpcionesMenu from '@/components/menuItems'
import { CarouselComponent } from '@/components/CarouselComponent'
import { CarouselCard } from '@/components/CarouselCard'

const categorias = [
  { id: 1, name: "Pastas", src: "categorias/pasta.jpg", ruta: "" },
  { id: 3, name: "Mexicana", src: "categorias/Mexicana.jpg", ruta: "mexicana" },
  { id: 6, name: "Postres", src: "categorias/postre.jpg", ruta: "" },
  { id: 7, name: "Saludable", src: "categorias/Saludable.jpg", ruta: "" },
  { id: 8, name: "Hanburguesas", src: "categorias/Hamburguesa.jpg", ruta: "" },
  { id: 10, name: "Tacos", src: "categorias/tacos.jpg", ruta: "" }
]

const expand = "true"

export default function Home() {
  const [products, setProducts] = useState([])

  const [busqueda, setBusqueda] = useState([])
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    event.preventDefault()
    if (form.checkValidity() === false) {
      event.stopPropagation()
    }
    console.log(form.filtro.value)
    setValidated(true)
  }


  useEffect(() => {
    //Recuperar los datos del Api
    apiClient.get('/products')
      .then(response => {
        // console.log(response.data)
        setProducts(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  /*const handleFindProduct = (data) =>{
    setBusqueda(this.busqueda)
    console.log("ejecutando busqueda")
    apiClient.get(`/products?filtro=${busqueda}`)
      .then(response =>{
        setProducts(response.data)
      })
      .catch(error =>{
        console.error(error)
      })
  }*/

  return (
    <>
      <Container fluid id='img_home'>
        <Navbar expand={expand} id="Menu" fixed="top">
          <Container fluid>
            <Container>
              <Row>
                <Col xs={6}>
                  <Link href="/">
                    <Navbar.Brand>
                      <Image src="changarrito.png" alt="Logo" width="60" height="60" style={{ borderRadius: '50%' }} />
                    </Navbar.Brand>
                  </Link>
                </Col>
                <Col className='MenuItemAlign'>
                  <Link href="/" className='MenuItem'>
                    Inicio
                  </Link>
                </Col>
                <Col className='MenuItemAlign'>
                  <Link href="about" className='MenuItem' style={{ textAlign: 'center' }}>
                    Nosotros
                  </Link>
                </Col>
                <Col className='MenuItemAlign'>
                  <Link href="contact" className='MenuItem'>
                    Contacto
                  </Link>
                </Col>
              </Row>
            </Container>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <OpcionesMenu />
          </Container>
        </Navbar>
        <Stack gap={2} className="col-md-6 mx-auto">
          <h1 id='home-title' className="title">
            <span>
              Busca comida
            </span><br></br>
            <span className='ms-5'>
              cerca de tí...
            </span>
          </h1>
          <Form validated={validated} onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <Form.Control type='text' required placeholder='Comida, antojitos y más...' name="filtro" />
              <Form.Control.Feedback type="invalid">
                Ingresa al menos una palabra
              </Form.Control.Feedback>
              <Button variant="primary" id="button-addon2" type="submit">
                <FaHamburger style={{ fontSize: "40px", color: "white" }} />
                <span className='mx-md-2' style={{ fontSize: "20px", color: "white" }}>Buscar</span>
              </Button>
            </InputGroup>
          </Form>
        </Stack>
      </Container>

      { /*<Modalcards/>*/}
      <h1 className='title mt-5 ms-5' > Categorías Top</h1>
      <CarouselComponent categorias={categorias} />
      <h1 className='title mt-5 ms-5' >Listar Productos</h1>
      <CarouselCard products={products} ></CarouselCard>
      <Container className="mx-md-5 my-md-5">
        <h1 className="title" style={{ marginleft: "48px" }}> Unete A Changarrito</h1>
      </Container>
      <Container className='mb-5'>
        <Row>
          <Col>
            <Card className='card-info' style={{ width: '24rem', height: "480px" }} >
              <Card.Img className='card-imag' variant="top" src="registra.jpg" />
              <Card.Body>
                <Card.Title >
                  <div >
                    <p className='title-card text-center'>Registra tu restaurante o fonda</p>
                  </div>
                </Card.Title>
                <Card.Text >
                  Descubre los beneficios de socios que ya trabajan con la plataforma.
                </Card.Text>
                <Stack direction="horizontal" gap={1}>
                  <div className=' ms-auto'>
                    <Button variant="primary" style={{ borderradius: '18px', color: '#FFFFFF', fontWeight: 'bolder', fontSize: '19px', padding: '15px' }}>
                      Mas información
                    </Button>
                  </div>
                </Stack>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='card-info' style={{ width: '24rem', height: "480px" }} >
              <Card.Img className='card-imag' variant="top" src="tienda.jpg" />
              <Card.Body>
                <Card.Title >
                  <div >
                    <p className='title-card text-center'>Registra tu tienda</p>
                  </div>
                </Card.Title>
                <Card.Text >
                  Promociona tu tiendita desde nuestra aplicación y accede a más clientes
                </Card.Text>
                <Stack direction="horizontal" gap={1}>
                  <div className=' ms-auto'>
                    <Button variant="primary" style={{ borderradius: '18px', color: '#FFFFFF', fontWeight: 'bolder', fontSize: '19px', padding: '15px' }}>
                      Mas información
                    </Button>
                  </div>
                </Stack>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='card-info' style={{ width: '24rem', height: "480px" }} >
              <Card.Img className='card-imag' variant="top" src="cafeteria.jpg" />
              <Card.Body>
                <Card.Title >
                  <div >
                    <p className='title-card text-center'>Registra tu Bar o Cafetería</p>
                  </div>
                </Card.Title>
                <Card.Text >
                  Tienes ventas bajas, utiliza nuestra plataforma y consigue nuevos clientes.
                </Card.Text>
                <Stack direction="horizontal" gap={1}>
                  <div className=' ms-auto'>
                    <Button variant="primary" style={{ borderradius: '18px', color: '#FFFFFF', fontWeight: 'bolder', fontSize: '19px', padding: '15px' }}>
                      Mas información
                    </Button>
                  </div>
                </Stack>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>{page}</Layout>
  )
}
