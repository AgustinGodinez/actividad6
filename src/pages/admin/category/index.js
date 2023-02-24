
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { FloatingLabel, Modal, Stack } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Layout from '../../../components/layout'
import Button from 'react-bootstrap/Button';
import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye, AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Image from 'react-bootstrap/Image'
import TableCategory from '../../../components/admin/TableCategory';


export default function Products() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [datos, setDatos] = React.useState({
        id: Math.random(),
        name: '',
        src: '',
        ruta: '',
        activo: false,
    })
    const [categorias, setCategorias] = useState([
        { id: 233, name: "Pastas", src: "/categorias/pasta.jpg", ruta: "", activo: true },
        { id: 2321232, name: "Mexicana", src: "/categorias/Mexicana.jpg", ruta: "mexicana", activo: true },
        { id: 7656, name: "Postres", src: "/categorias/postre.jpg", ruta: "", activo: false },
        { id: 6432, name: "Saludable", src: "/categorias/Saludable.jpg", ruta: "", activo: true },
        { id: 42325, name: "Hanburguesas", src: "/categorias/Hamburguesa.jpg", ruta: "", activo: true },
        { id: 7895543, name: "Tacos", src: "/categorias/tacos.jpg", ruta: "", activo: true }
    ]);

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const handleDelete = (index) => {
        const categoriasCopy = [...categorias];
        categoriasCopy.splice(index, 1)
        setCategorias([...categoriasCopy])
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        const categoriasCopy = [...categorias];
        categoriasCopy.push(datos)
        setCategorias([...categoriasCopy])
        handleClose()
    }

    return (
        <>
            <Container className="mx-md-5 my-md-5">
                <h1 className="title" style={{ marginleft: "48px" }}>Lista de Categorias</h1>
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
                                <InputGroup.Text><AiOutlineSearch /></InputGroup.Text>
                            </InputGroup>
                        </Form>
                    </Col>
                    <Col sm={4} className="centerContent">
                        <Button variant="primary" className='btnAdd' onClick={handleShow}>
                            <AiOutlinePlus />
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
                        {categorias.map((item, index) => [
                            <tr key={item.id}>
                                <TableCategory
                                    categorias={item}
                                    index={index}
                                    onDelete={handleDelete}
                                />
                            </tr>
                        ])}
                    </tbody>
                </Table>
            </Container>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Agregar Categoria </Modal.Title>
                </Modal.Header>
                <Modal.Body  className=' text-center' >
                    <Row className='mb-4'>

                        <Col>
                            <FloatingLabel label="nombre de la categoria" >
                                <Form.Control type="text" name="name" value={categorias.name} style={{ height: '50px', maxWidth: '300px', minWidth: '100px' }} onChange={handleInputChange} />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row className='mb-3'>
                        <Col>
                            <Form.Control type="file" name='src' size="sm" style={{ maxWidth: '400px', minWidth: '400px' }} onChange={handleInputChange} />
                        </Col>
                    </Row>
                    <Row className='mb-3'>
                        <Col>
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                name='activo'
                                defaultChecked={categorias.activo}
                                onChange={handleInputChange}
                            />
                        </Col>
                    </Row>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="success" onClick={enviarDatos}>Guardar</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}


Products.getLayout = function getLayout(page) {
    return (
        <Layout>{page}</Layout>
    )
}