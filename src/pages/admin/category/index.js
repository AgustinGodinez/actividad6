
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Stack } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Layout from '../../../components/layout'
import Button from 'react-bootstrap/Button';
import { AiOutlineDelete, AiOutlineEdit,AiOutlineEye, AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Image from 'react-bootstrap/Image'


export default function Products() {
  
  return (
    <>
        <Container className="mx-md-5 my-md-5">
            <h1 className="title" style={{ marginleft: "48px"}}>Lista de Categorias</h1>
        </Container>
        <Container>
            <Row>
                <Col sm={8}>
                    <Form>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Buscar categoria"
                                name="categoria"
                            />
                            <InputGroup.Text><AiOutlineSearch/></InputGroup.Text>
                        </InputGroup>
                    </Form>
                </Col>
                <Col sm={4} className="centerContent">
                    <Button variant="primary" className='btnAdd'>
                        <AiOutlinePlus/>
                        Agregar Categoria
                    </Button>
                </Col>
            </Row>
        </Container>
      <Container className='mb-md-5'>
        <Table striped>
        <thead>
            <tr>
                <th>ID</th>
                <th>Categoria</th>
                <th>Imagen</th>
                <th>Activo</th>
                <th>Configuracion</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>#ce8d812a</td>
                <td>Comida Mexicana</td>
                <td>
                    <Image roundedCircle={true} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Mexican_food_icon.png/800px-Mexican_food_icon.png" width="30" height="30"/>
                </td>
                <td>
                    <Form>
                        <Form.Check 
                            type="switch"
                            id="custom-switch"
                            defaultChecked={true}
                        />
                    </Form>
                </td>
                <td>
                    <Button variant="light" >
                        <AiOutlineDelete className='iconAction'/>
                    </Button>
                    <Button variant="light">
                        <AiOutlineEdit className='iconAction'/>
                    </Button>
                    <Button variant="light">
                        <AiOutlineEye className='iconAction'/>
                    </Button>
                </td>
            </tr>
            <tr>
                <td>Tacos al pastos</td>
                <td>Comida Mexicana</td>
                <td>
                <Image roundedCircle={true} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Mexican_food_icon.png/800px-Mexican_food_icon.png" width="30" height="30"/>
                </td>
                <td>
                    <Form>
                        <Form.Check 
                            type="switch"
                            id="custom-switch"
                            defaultChecked={true}
                        />
                    </Form>
                </td>
                <td>
                    <Button variant="light" >
                        <AiOutlineDelete className='iconAction'/>
                    </Button>
                    <Button variant="light">
                        <AiOutlineEdit className='iconAction'/>
                    </Button>
                    <Button variant="light">
                        <AiOutlineEye className='iconAction'/>
                    </Button>
                </td>
            </tr>
        </tbody>
        </Table>
      </Container>
    </>
  )
}


Products.getLayout = function getLayout(page) {
  return (
      <Layout>{page}</Layout>
  )
}