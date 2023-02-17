'use client'

/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import apiClient from '@/apiClient';


export default function Login() {
    const [users, setUsers] = useState([]);

    useEffect( () =>{
        //Recuperar los datos del Api
        apiClient.get('/user')
        .then(response =>{
            console.log(response.data);
            setUsers(response.data);
        })
        .catch(error =>{
          console.error(error);
        })
    },[]);

    return (
        <>
        <Breadcrumb className='mx-md-5'>
            <Breadcrumb.Item href="#">Inicio</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/" active>
                Usuarios
            </Breadcrumb.Item>
        </Breadcrumb>   
        <h1 className='mx-md-5'> Usuarios registrados </h1>

        <Container className='mx-md-5'>
            
          <Row>
          <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Apellido Paterno</th>
                        <th>Apellido Materno</th>
                        <th>Domicilio</th>
                    </tr>
                </thead>
                <tbody>
                    { users.map( (user) => {
                        <tr key={user.id}>
                            <td>{user.nombre}</td>
                            <td>{user.apellido_paterno}</td>
                            <td>{user.apellido_materno}</td>
                            <td>{user.calle}  {user.num_ext}</td>
                        </tr>
                        })
                    }
                </tbody>
            </Table>
          </Row>
        </Container>
        </>
    );
}