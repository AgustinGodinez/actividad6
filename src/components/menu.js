'use client'
import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';
import { FaHamburger } from "react-icons/fa";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Link from 'next/link'
import Nav from 'react-bootstrap/Nav';

function Menu() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar bg="dark" variant="dark" expand='md' sticky="top">
                <Container fluid>
                    <Col sm="1">
                        <Button>
                            <Link variant="primary" href="/" style={{ color: "white" }}>inicio</Link>
                        </Button>
                    </Col>
                    <Col sm="1">
                        <Button>
                            <Link variant="primary" href="/login" style={{ color: "white" }}>sign in</Link>
                        </Button>
                    </Col>
                    <Col sm="1">
                        <Button>
                            <Link variant="primary" href="/register" style={{ color: "white" }}>sign up</Link>
                        </Button>
                    </Col>
                    <Col sm="1">
                        <Form.Control
                            type="search"
                            placeholder="Buscar... "
                            aria-label="Search"
                        />
                    </Col>
                    <Col sm="6" className='text-center'>
                        <Navbar.Brand href="#home">
                            <h1 className="title" style={{ lineHeight: "18px", paddingTop: "1rem" }}>Changarrito</h1>
                        </Navbar.Brand>
                    </Col>
                    <Col sm="1">
                        <Button variant="outline-secondary" onClick={handleShow}><FaHamburger style={{ fontSize: "48px", color: "white" }} /></Button>
                    </Col>
                    <Navbar.Offcanvas show={show} onHide={handleClose} placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                                Menu
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="/users">Usuarios</Nav.Link>
                        </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default Menu;