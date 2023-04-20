/* eslint-disable jsx-a11y/alt-text */

import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Layout from '@components/layout'
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
import { uploadImageAndGetUrl } from '@/firebase/config'
import Swal from 'sweetalert2'
import apiClient from '@/apiClient'


export default function Categories({categories}) {
    const [show, setShow] = useState(false)

    /** Mostrar y Ocultar la modal */
    const handleClose = () => {
        setShow(false)
        setImagePrev()
        setDatos()
    }
    const handleShow = () => {
        setShow(true)
    }

    const [imagePrev, setImagePrev] = useState(null) //Preview de imagen

    const [datosFile, setDatosFile] = useState(null)
    const [nameFile, setNameFile] = useState(null)
    const [checked, setChecked] = useState(true)
    const [category_id, setID] = useState()
    const [isLoading, setLoading] = useState(false)
    const [categorias, setCategorias] = useState(null)

    const [datos, setDatos] = useState(null)
    const [busqueda, setBusqueda] = useState('')

    //Evento para Previsualizacion de imagen
    const handleInputChange = async (event) => {
        if (event.target.files) {
            const reader = new FileReader()
            reader.readAsDataURL(event.target.files[0])
            reader.onload = event => {
                event.preventDefault()
                setImagePrev(event.target.result)
            }
            setNameFile(event.target.files[0]?.name)
            setDatosFile(event.target.files[0])
        }
    }

    // Metodo para guardar los datos de una categoria
    const enviarDatos = async(e) => {
        e.preventDefault()
        let imageUrl
        /*Falta validar si es un cambio de imagen reemplazar el anterior*/
        if(category_id){ // Se trada de un cambio
            if (imagePrev) {
                imageUrl = await uploadImageAndGetUrl('categorias',datosFile, nameFile)
            }
            apiClient.put(`/api/category_product`,{ 'id': category_id, 'nombre':datos,'url_image':imageUrl})
                .then(response =>{
                    console.log(response)
                    let index = array.findIndex(obj => obj.id === category_id)
                    const categoriasCopy = [...categorias]
                    categoriasCopy.splice(index, 1)
                    categoriasCopy.push(response.data.Categorys)
                    setCategorias([...categoriasCopy])
                    
                    Swal.fire({
                        position: 'center',
                        title: `Changarrito`,
                        text: response.data.message,
                        icon: 'success',
                        confirmButtonText: 'Aceptar'
                    })
                    handleClose()
                })
                .catch(error =>{
                    Swal.fire({
                        position: 'center',
                        title: `Changarrito`,
                        text: `Servicio no disponible, favor de intentar mas tarde.`,
                        icon: 'error',
                        confirmButtonText: 'Aceptar'
                    })
                })
        }else{ // Se trata de un nuevo registro
            if (imagePrev) {
                imageUrl = await uploadImageAndGetUrl('categorias',datosFile, nameFile)
            }
            apiClient.post(`/api/category_product`,{ 'nombre':datos,'url_image':imageUrl})
                .then(response =>{
                    console.log(response)
                    categorias.push(response.data.Categorys)
                    Swal.fire({
                        position: 'center',
                        title: `Changarrito`,
                        text: response.data.message,
                        icon: 'success',
                        confirmButtonText: 'Aceptar'
                    })
                    handleClose()
                })
                .catch(error =>{
                    Swal.fire({
                        position: 'center',
                        title: `Changarrito`,
                        text: `Servicio no disponible, favor de intentar mas tarde.`,
                        icon: 'error',
                        confirmButtonText: 'Aceptar'
                    })
                })
        }
    }
    // Evento para borrar una categoria
    const handleDelete = (index) => {
        Swal.fire({
            position: 'center',
            title: `Changarrito`,
            text: `¿Desea borrar la categoria seleccionada?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
        })
        .then((result) => {
            if (result.isConfirmed) {
                apiClient.delete(`/api/category_product?id=${categorias[index].id}`)
                .then( response=>{
                    const categoriasCopy = [...categorias]
                    categoriasCopy.splice(index, 1)
                    setCategorias([...categoriasCopy])
                    Swal.fire({
                        position: 'center',
                        title: `Changarrito`,
                        text: response.data.message,
                        icon: 'success',
                        confirmButtonText: 'Aceptar'
                    })
                })
                .catch(error =>{
                    Swal.fire({
                        position: 'center',
                        title: `Changarrito`,
                        text: `Servicio no disponible, favor de intentar mas tarde.`,
                        icon: 'error',
                        confirmButtonText: 'Aceptar'
                    })
                })
            }
        })
    }
    // Evento para actualizar una categoria
    const handleUpdate = (index)  => {
        setDatos(categorias[index].nombre)
        setImagePrev(categorias[index].url_image)
        setID(categorias[index].id)
        setShow(true)
    }
    // Evento para cambiar el estado de la categoria Activa/Inhactiva
    const handleActive = async (index, val) =>{
        console.log("ID: "+categorias[index].id)
        Swal.fire({
            position: 'center',
            title: `Changarrito`,
            text: `¿Desea ${categorias[index].active?`inactivar`:`activar`} la categoria seleccionada?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
        })
        .then((result) => {
            if (result.isConfirmed) {
                apiClient.put(`/api/category_product?id=${categorias[index].id}`,{ 'active': val})
                .then( response=>{
                    const categoriasCopy = [...categorias]
                    const cate = categorias[index]
                    cate.active = val
                    categoriasCopy.splice(index, 1)
                    categoriasCopy.push(cate)
                    setCategorias([...categoriasCopy])
                    Swal.fire({
                        position: 'center',
                        title: `Changarrito`,
                        text: response.data.message,
                        icon: 'success',
                        confirmButtonText: 'Aceptar'
                    })
                })
                .catch(error =>{
                    Swal.fire({
                        position: 'center',
                        title: `Changarrito`,
                        text: `Servicio no disponible, favor de intentar mas tarde.`,
                        icon: 'error',
                        confirmButtonText: 'Aceptar'
                    })
                })
            }
            
        })
    }
    useEffect(() => {
        setCategorias(categories)
    }, [])

    const handleFind = async (e) =>{
        setBusqueda(e.target.value)
        /*
        if (busqueda.length > 0) {
            apiClient.get(`/api/category_product?filtro=${busqueda}`)
            .then(response =>{
                console.log(response)
                setCategorias(response)
            })
        }else{
            apiClient.get(`/api/category_product`)
            .then(response =>{
                setCategorias(response)
            })
        }*/
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
                                    onChange={handleFind}
                                    value={busqueda}
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
             {/* Tabla de resultados */}
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
                        {categorias  &&
                            categorias?.map((item, index) => [
                                <tr key={item.id}>
                                    <TableCategory
                                        categorias={item}
                                        index={index}
                                        onDelete={handleDelete}
                                        onUpdate={handleUpdate}
                                        onActive={handleActive}
                                    />
                                </tr>
                            ])
                        }
                    </tbody>
                </Table>
            </Container>
             {/* Modal para Insertar y/o Actualizar */}
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{!category_id? 'Nueva ': 'Modificando '}Categoria </Modal.Title>
                </Modal.Header>
                <Form onSubmit={enviarDatos}>
                    <Modal.Body  >
                        <Row className='mb-4'>
                            <input name="id" type="hidden" value={category_id} />
                        </Row>
                        <Row className='mb-4'>
                            <Col>
                                <FloatingLabel label="Categoria:" >
                                    <Form.Control type="text" name="nombre" value={datos} onChange={(e) => setDatos(e.target.value)} required/>
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='col-8'>
                                <Form.Group controlId="formFileSm" className="mb-3">
                                    <Form.Label >Seleccionar imagen</Form.Label>
                                    <Form.Control type="file" size="sm" accept="image/jpeg,image/png,image/jpg,image/bmp" onChange={handleInputChange} />
                                </Form.Group>
                            </Col>
                            <Col className='col-4'>
                                <Image src={imagePrev} style={{ width: '100px', height: '100px', objectFit: 'cover' }}></Image>
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
// Seleccion dinamica del Layout
Categories.getLayout = function getLayout(page) {
    return (
        <Layout>{page}</Layout>
    )
}
// Obtenemos la Data antes de cargar la pantalla
export async function getStaticProps(){
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/category_product`)
    const categories = await res.json()
    return {
      props: {
        categories,
      },
    }
  }