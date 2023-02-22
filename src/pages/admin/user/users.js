'use client'

/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import apiClient from '@/apiClient';
import { BsEraser } from "react-icons/bs";


export default function Login() {
    const [nombre, setNombre] = React.useState([]);

    useEffect( () =>{
        //Recuperar los datos del Api
        apiClient.get('/user')
        .then(response =>{
            setNombre(response.data);
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
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        nombre.map( (item) => {
                        return [(
                            <tr key={item.id} item>
                                <td>{item.id}</td>
                                <td>{item.nombre}</td>
                                <td>{item.apellido_paterno}</td>
                                <td>{item.apellido_materno}</td>
                                <td>{item.calle} #{item.num_ext}</td>
                                <td> <BsEraser onClick={handlerDelete}/></td>
                            </tr>
                            )]
                        })
                    }
                </tbody>
            </Table>
          </Row>
        </Container>
        </>
    );
}