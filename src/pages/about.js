
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Stack } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Layout from '../components/layout'


export default function Nosotros() {
  
  return (
    <>
      <Container fluid id='img_home'>
        <Stack gap={2} className="col-md-6 mx-auto">
            <h1 id='home-title' className="title">
              <span>
                Qué es Changarrito?
              </span><br></br>
            </h1>
            <h4>
                <span className='ms-5'>
                    Es la forma mas facil de encontrar la comida que te gusta cerca de tu ubicación.
                </span>
            </h4>
        </Stack>
      </Container>
      
      <Container className="mx-md-5 my-md-5">
       <h1 className="title" style={{ marginleft: "48px"}}> Cómo usar Changarrito</h1>
      </Container>
      <Container className='mb-5'>
          <Row>
            <Col>
              <Card className='card-info' style={{ width: '24rem', height: "480px" }} >
                <Card.Img className='card-imag' variant="top" src="hamburguesa-texas.jpg" />
                <Card.Body>
                    <Card.Title >Explora</Card.Title>
                    <Card.Text >
                        Puedes elegir entre cientos de opciones. Abre la app y 
                        desplázate para inspirarte o busca un restaurante o un tipo 
                        de comida en particular. Si encuentras algo que te gusta, 
                        toca el artículo para agregarlo a tu pedido.
                    </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='card-info' style={{ width: '24rem', height: "480px" }} >
                <Card.Img className='card-imag' variant="top" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_276,h_184/v1588108669/assets/2a/861fdc-5d81-44c2-94cb-d87f395da1ef/original/Order_content-item-DESKTOP-TABLET-MOBILE-3x2.jpg" />
                <Card.Body>
                    <Card.Title >Realiza un pedido</Card.Title>
                    <Card.Text >
                        Cuando estés listo para pagar, verás tu dirección, 
                       precio del pedido, 
                        incluidos los impuestos y el costo de envío. 
                        Si está todo bien, toca Realizar pedido y listo.
                    </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='card-info' style={{ width: '24rem', height: "480px" }} >
                <Card.Img className='card-imag' variant="top" src="mapa.jpg" />
                <Card.Body>
                    <Card.Title >Sigue el pedido</Card.Title>
                    <Card.Text >
                        Haz el seguimiento en la app. Primero verás que el restaurante 
                        acepta tu pedido y comienza a prepararlo. Luego, cuando el pedido 
                        esté casi listo, un repartidor cercano irá al restaurante a 
                        recolectarlo y lo entregará en tu ubicación. 
                    </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
      </Container>
    </>
  )
}


Nosotros.getLayout = function getLayout(page) {
  return (
      <Layout>{page}</Layout>
  )
}