'use client'

import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';

export default function Footer() {
    return (
        <>
        <style type='text/css'>
            {`
            #footer {
             background-color: #fe6763;
             color: white;
            }
            
            `}
        </style>

        <Container id='footer' fluid className='footer' >
            <Row className='text-center'>
                <Col >
                    <h1 className="title"style={{ lineHeight: '140px', fontSize: '80px' }}>Changarrito</h1>
                </Col>
                <Col >
                    <h3 className="title">Unete a Changarrito</h3>
                    <p>Registra tu restaurante</p>
                    <p>trabaja con nosotros</p>
                    <p>Registra tu tienda</p>
                </Col>
                <Col >
                    <h3 className="title">Sobre Changarrito</h3>
                    <p>Términos y Condiciones</p>
                    <p>Políticas de privacidad</p>
                    <p>Tratamiento de datos</p>
                </Col>
            </Row>
        </Container>
        </>
    );
}