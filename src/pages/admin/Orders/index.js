
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
import TableOrden from '../../../components/admin/TableOrden';


export default function Products() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [datos, setDatos] = React.useState({
        id: Math.random(),
        producto: '',
        cantidad: '',
        direccion: '',
        fecha: '22/02/23',
        costo: '',
        estado: 'pendiente',
    })
    const [productos, setProductos] = useState([
        { title: 'Huevos Rancheros/Divorciados', costo: '50' },
        { title: 'Molletes', costo: '75' },
        { title: 'Panuchos de Cochinita Pibil', costo: '55' },
        { title: 'Taco de torta de papa con arroz', costo: '70' },
        { title: 'Chile Relleno', costo: '65' }
    ])
    const [orden, setOrden] = useState([
        { id: 423, producto: "enchiladas", cantidad: '3', fecha: '20/02/2023', direccion: "Ley Agraria #73 Axochiapan Morelos", costo: '80', estado: 'pendiente' },
        { id: 322, producto: "hamburguesa", cantidad: '2', fecha: '10/02/2023', direccion: "Ley Agraria #73 Axochiapan Morelos", costo: '60', estado: 'pendiente' },
        { id: 323, producto: "Pastas", cantidad: '1', fecha: '05/02/2023', direccion: "Ley Agraria #73 Axochiapan Morelos", costo: '80', estado: 'canceladado' },
        { id: 145, producto: "cerveza corona", cantidad: '2', fecha: '02/02/2023', direccion: "Ley Agraria #73 Axochiapan Morelos", costo: '30', estado: 'recibido' },
    ]);
    const [costos, setCostos] = useState()
    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
        setCostos(datos.costo)
        console.log(datos);
    }

    const handleDelete = (index) => {
        const ordenCopy = [...orden];
        ordenCopy.splice(index, 1)
        setOrden([...ordenCopy])
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        const ordenCopy = [...orden];
        ordenCopy.push(datos)
        setOrden([...ordenCopy])
        handleClose()
    }

    return (
        <>
            <Container className="mx-md-5 my-md-5">
                <h1 className="title" style={{ marginleft: "48px" }}>Lista de tus ordenes</h1>
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
                            Agregar Pedido
                        </Button>
                    </Col>
                </Row>
            </Container>
            <Container className='mb-md-5'>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Orden ID</th>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Fecha</th>
                            <th>Dirreccion</th>
{/*                             <th>Costo</th>
 */}                            <th>Estado</th>
                            <th>Configuracion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orden.map((item, index) => [
                            <tr key={item.id}>
                                <TableOrden
                                    orden={item}
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
                    <Modal.Title>Agregar Orden </Modal.Title>
                </Modal.Header>
                <Modal.Body className=' text-center' >
                    <Row className='mb-4'>
                        <Col>
                            <Form.Select aria-label="Default select example" name="producto" onChange={handleInputChange}>
                                <option>selecione su pedido</option>
                                {productos.map((item, index) => [
                                    <>
                                        <option key={index} value={item.title} >{item.title}, precio: ${item.costo}</option>
                                    </>
                                ])}
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row className='mb-4'>
                        <Col className=' col-4'>
                            <Form.Control type="number" placeholder="Cantidad" name='cantidad' onChange={handleInputChange} />
                        </Col>
                        <Col >
                            <Form.Control type="text" placeholder="Dirreccion" name='direccion' onChange={handleInputChange} />
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