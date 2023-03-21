/* eslint-disable jsx-a11y/alt-text */

import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import { FloatingLabel, Modal, Stack } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye, AiOutlinePlus, AiOutlineSearch } from "react-icons/ai"
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Image from 'react-bootstrap/Image'
import TableCategory from '../../../components/admin/TableCategory'
import { uploadfile } from '@/firebase/config'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/router'


export default function Categories() {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const router = useRouter()

    const [imagePrev, setImagePrev] = useState()
    const [datosFile, setDatosFile] = useState(null)
    const [nameFile, setNameFile] = useState(null)
    const [checked, setChecked] = useState()
    const [imagenNueva, setImagenNueva] = useState()
    const [categorias, setCategorias] = useState([
        { id: 233, name: "Pastas", src: "/categorias/pasta.jpg", ruta: "", activo: true },
        { id: 2321232, name: "Mexicana", src: "/categorias/Mexicana.jpg", ruta: "mexicana", activo: true },
        { id: 7656, name: "Postres", src: "/categorias/postre.jpg", ruta: "", activo: false },
        { id: 6432, name: "Saludable", src: "/categorias/Saludable.jpg", ruta: "", activo: true },
        { id: 42325, name: "Hanburguesas", src: "/categorias/Hamburguesa.jpg", ruta: "", activo: true },
        { id: 7895543, name: "Tacos", src: "/categorias/tacos.jpg", ruta: "", activo: true }
    ])

    const [datos, setDatos] = useState({
        id: Math.random(),
        name: '',
        src: '',
        ruta: '',
        activo: checked,
    })

    const { status } = useSession({
        required: true,
        onUnauthenticated() {
          // The user is not authenticated, handle it here.
          return router.push('/api/auth/signin')
        },
    })

  
    const handleInputChange = async (event) => {
        setChecked(event.target.checked)
        setDatos({
            ...datos,
            [event.target.name]: event.target.value,
            activo: checked
        })
        if (event.target.files) {
            changeImage(event)
            setNameFile(event.target.files[0].name)
            setDatosFile(event.target.files[0])
        }
        /* esta parte obtiene la url de la imagen ingresada */
        const result = await uploadfile(datosFile, nameFile)
        /* almacenamos la url en un usestate */
        console.log(result)
        setImagenNueva(result)
    }

    const enviarDatos = (e) => {
        e.preventDefault()
        const categoriasCopy = [...categorias]
        categoriasCopy.push(datos)
        setCategorias([...categoriasCopy])
        console.log(categorias)
        handleClose()
    }
    const handleDelete = (index) => {
        const categoriasCopy = [...categorias]
        categoriasCopy.splice(index, 1)
        setCategorias([...categoriasCopy])
    }

    const changeImage = (e) => {
        const reader = new FileReader()
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
            reader.onload = e => {
                e.preventDefault()
                setImagePrev(e.target.result)
            }
        }
    }

    /** Validando usuario con sesion iniciada */
    /*
    const { data: session, status } = useSession()
    if (status === "loading") {
        return null
    }
    
    if (session === null) {
        return router.push('/api/auth/signin')
    }
    */
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
                <Form onSubmit={enviarDatos}>

                    <Modal.Body  >
                        <Row className='mb-4'>
                            <Col>
                                <FloatingLabel label="nombre de la categoria" >
                                    <Form.Control type="text" name="name" value={categorias.name} style={{ height: '50px', maxWidth: '300px', minWidth: '100px' }} onChange={handleInputChange} />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='col-8'>
                                <Form.Control type="file" id='file-2' name="src" className="inputfile inputfile-2" onChange={handleInputChange} />
                                <Form.Label htmlFor="file-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="iborrainputfile" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg>
                                    <span className="iborrainputfile">Seleccionar archivo</span>
                                </Form.Label>
                            </Col>
                            <Col className='col-4'>
                                <Image src={imagePrev} style={{ width: '100px', height: '100px', objectFit: 'cover' }}></Image>
                            </Col>
                        </Row>
                        <Row className='mb-3'>
                            <Col>
                                <Form.Label >Activa o Desactva el catalgo</Form.Label>

                                <Form.Check
                                    type="switch"
                                    name='activo'
                                    defaultChecked={checked}
                                    onClick={handleInputChange}
                                />
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancelar
                        </Button>
                        <Button variant="success" type='submit'>Guardar</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}

Categories.auth = true