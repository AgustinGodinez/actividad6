
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
import apiClient from '@/apiClient';


export default function Products() {
    const [users, setUsers] = React.useState([]);

    useEffect( () =>{
        //Recuperar los datos del Api
        apiClient.get('/user')
        .then(response =>{
            setUsers(response.data);
        })
        .catch(error =>{
          console.error(error);
        })
    },[]);

    const handlerDelete = (e) =>{
        console.log(e);
    }

  return (
    <>
        <Container className="mx-md-5 my-md-5">
            <h1 className="title" style={{ marginleft: "48px"}}>Lista de Usuarios</h1>
        </Container>
        <Container>
            <Row>
                <Col sm={8}>
                    <Form>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Buscar usuario"
                                name="usuario"
                            />
                            <InputGroup.Text><AiOutlineSearch/></InputGroup.Text>
                        </InputGroup>
                    </Form>
                </Col>
                <Col sm={4} className="centerContent">
                    <Button variant="primary" className='btnAdd'>
                        <AiOutlinePlus/>
                        Agregar Usuario
                    </Button>
                </Col>
            </Row>
        </Container>
      <Container className='mb-md-5'>
        <Table striped>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Domicilio</th>
                <th>Email</th>
                <th>Celular</th>
                <th>Tipo Usuario</th>
                <th>Configuracion</th>
            </tr>
        </thead>
        <tbody>
            { 
                users.map( (item) => {
                return [(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.nombre} {item.apellido_paterno}</td>
                        <td>{item.calle} #  {item.num_ext} CP:  {item.codigo_postal}</td>
                        <td>{item.email}</td>
                        <td>{item.celular}</td>
                        <td>
                            <spa>Admin</spa>
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
                    )]
                })
            }
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