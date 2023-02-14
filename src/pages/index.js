
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaHamburger } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import { Stack } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { AiOutlineStar } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import apiClient from '@/apiClient';
import { Modalcards } from '@/components/Modalcards';


const categorias = [
  { id: 1,name: "Pastas", src: "categorias/pasta.jpg", ruta: "" },
  { id: 3,name: "Mexicana", src: "categorias/Mexicana.jpg", ruta: "mexicana" },
  { id: 6,name: "Postres", src: "categorias/postre.jpg", ruta: "" },
  { id: 7,name: "Saludable", src: "categorias/Saludable.jpg", ruta: "" },
  { id: 8,name: "Hanburguesas", src: "categorias/Hamburguesa.jpg", ruta: "" },
  { id: 10,name: "Tacos", src: "categorias/tacos.jpg", ruta: "" }
];

export default function Home() {
  const [products, setProducts] = useState(
    []
  );

  const [busqueda, setBusqueda] = useState([])

  useEffect( () =>{
    //Recuperar los datos del Api
    apiClient.get('/products')
    .then(response =>{
      setProducts(response.data);
    })
    .catch(error =>{
      console.error(error);
    })
  },[]);

  const findProduct = (e) =>{
    setBusqueda(e.target.value)
    console.log("ejecutando busqueda");
    apiClient.get(`/products?filtro=${busqueda}`)
      .then(response =>{
        setProducts(response.data);
      })
      .catch(error =>{
        console.error(error);
      });
  };

  return (
    <>
      <Container fluid id='img_home'>
        <Stack gap={2} className="col-md-6 mx-auto">
            <h1 id='home-title' className="title">
              <span>
                Busca comida 
              </span><br></br>
              <span className='ms-5'>
                cerca de tí... 
              </span>
            </h1>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <FaHamburger style={{ fontSize:"48px", color: "#fe6763"}}/>
              </InputGroup.Text>
              <Form.Control  type='text' placeholder='Comida, antojitos y más...' value={busqueda} onChange={findProduct}/>
              <Button variant="primary" id="button-addon2">
                Buscar
              </Button>
            </InputGroup>
        </Stack>
      </Container>
      <Modalcards/>
      <h1 className='title mt-5 ms-5' > Categorías</h1>
  
      <Stack direction="horizontal" gap={3} className="mx-sm-5">
          { categorias.map( (categoria) => (
                <Card key={categoria.id} href={categoria.ruta} style={{ width: '18rem', height:"205px", marginTop:"20px", marginBottom:"20px"}}>
                  <Card.Img variant="top" src={categoria.src} />
                  <Card.Body>
                    <Card.Title>
                      {categoria.name}
                    </Card.Title>
                  </Card.Body>
                </Card>
          ))}
      </Stack>

      <Container>
        <Row>
          {
            products.map( (product) => (
              <Col key={product.id}>
                <Card className='my-2' style={{ width: '24rem' }}>
                  <Card.Img variant="top" src={product.image} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                  <Card.Body>
                    <Card.Title >
                      <Stack direction="horizontal" gap={2}>
                        <div>
                          <div className='title-card'>{product.title}</div>
                        </div>
                        <div className="ms-auto shadow-text fw-bold" >$ {product.price}</div>
                      </Stack>
                    </Card.Title>
                    <Stack direction="horizontal" gap={1}>
                      {}
                      <IconContext.Provider value={{ color: "red", size: '20px' }} >
                        <div className=" ms-auto">
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiOutlineStar />
                        </div>
                      </IconContext.Provider>

                      <div className="shadow-text fw-bold mx-2 "  style={{fontSize:'20px'}}>{product.start}</div>
                    </Stack>
                    <Card.Text style={{ margin: '20px' }}>
                      <div style={{fontWeight:'600'}}>
                        {product.description}
                      </div>
                    </Card.Text>
                    <Stack direction="horizontal" gap={1}>
                      <div>
                      </div>
                      <div className='ms-auto'>
                        <button variant="link">
                          Ver mas
                        </button>
                      </div>
                    </Stack>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
        </Row>
      </Container>
    </>
  )
}
