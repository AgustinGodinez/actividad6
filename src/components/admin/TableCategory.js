/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import { Button, Col, FloatingLabel, Form, Image, Modal, Row } from 'react-bootstrap'
import { AiOutlineCheck, AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from 'react-icons/ai'
import { FcCancel } from 'react-icons/fc'
import Layout from '../layout'
import { uploadfile } from '@/firebase/config'
import { Switch } from 'antd'

export default function TableCategory({ index, categorias, onDelete }) {
    const [data, setData] = React.useState(categorias)
    const [newData, setNewData] = React.useState(categorias)
    const [imagePrev, setImagePrev] = useState(data.src)
    const [checked, setChecked] = React.useState(data.activo);
    const [datosFile, setDatosFile] = useState(null)
    const [nameFile, setNameFile] = useState(null)
    const [imagenNueva, setImagenNueva] = useState()

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = () => {
        //llamar a la accion que elimine el registros
        onDelete(index)
    }

    const mostrar = () => {
        console.log(data);
    }

    /* esta funcion sirve para dar una previsualizacion de la imagen puesta en el modal de modificar */
    const changeImage = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = e => {
                e.preventDefault();
                setImagePrev(e.target.result)
            }
        }
    }

    const handleChanges = async (e) => {
        /* almacena el valor del check */
        setChecked(e.target.checked)
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
        /* esta parte le los datos de la imagen del input file */
        if (e.target.files) {
            changeImage(e)
            setNameFile(e.target.files[0].name);
            setDatosFile(e.target.files[0])
        }
        /* esta parte obtiene la url de la imagen ingresada */
        const result = await uploadfile(datosFile, nameFile)
        /* almacenamos la url en un usestate */
        setImagenNueva(result);
    }
    /* esta es la funcion importante */
    const handleSend = async e => {
        e.preventDefault();
        /* recopila todos los datos */
        let datos = e.target;
        let categoria = {
            id: datos.id.value,
            name: datos.name.value,
            /* guarda el estado del check y de la url */
            src: imagenNueva,
            activo: checked,
        };
        /* cualquier llamado a categoria contiene el array de todos los datos incluyendo el url */
        setData(categoria)
        setNewData(categoria)
        console.log(categoria);
        handleClose()
    }


    const handleCancel = () => {
        setData({ ...newData })
        handleClose()
    }

    return (
        <>
            <td>{data.id} </td>
            <td>{data.name} </td>
            <td
                className=' text-center'>
                <Image src={data.src} style={{ width: '60px', height: '60px' }}></Image>
            </td>
            <td>
                <Form.Check
                    disabled
                    type="switch"
                    name='activo'
                    defaultChecked={data.activo}
                    onChange={handleChanges}
                />
            </td>
            <td>
                <Button variant="light">
                    <AiOutlineDelete className='iconAction' onClick={handleDelete} />
                </Button>
                <Button variant="light">
                    <AiOutlineEdit className='iconAction' onClick={handleShow} />
                </Button>
                {/*                     <Button variant="light">
                        <AiOutlineEye className='iconAction' onClick={mostrar} />
                    </Button> */}
            </td>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Actualizar Categoria</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSend}>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <FloatingLabel className='mb-4' label="ID" >
                                <Form.Control type="number" name='id' value={data.id} onChange={handleChanges} />
                            </FloatingLabel>
                            <FloatingLabel className='mb-4' label="nombre de la categoria" >
                                <Form.Control type="text" name='name' value={data.name} onChange={handleChanges} />
                            </FloatingLabel>
                            <Row>
                                <Col className='col-8'>
                                    <Form.Control type="file" id='file-2' name="src" className="inputfile inputfile-2" onChange={handleChanges} />
                                    <Form.Label htmlFor="file-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="iborrainputfile" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg>
                                        <span className="iborrainputfile">Seleccionar archivo</span>
                                    </Form.Label>
                                </Col>
                                <Col className='col-4'>
                                    <Image src={imagePrev} style={{ width: '100px', height: '100px', objectFit: 'cover' }}></Image>
                                </Col>
                            </Row>
                            <Form.Label >Activa o Desactva el catalgo</Form.Label>
                            <Form.Check

                                type="switch"
                                name='activo'
                                defaultChecked={data.activo}
                                onClick={handleChanges}
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCancel}>
                            Cerrar
                        </Button>
                        <Button variant="success" type="submit">
                            Guardar Cambios
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )


}
{/* <td style={{ maxWidth: "10px" }}>
            <FloatingLabel label="ID" >
                <Form.Control type="number" name='id' value={data.id} onChange={handleChanges} />
            </FloatingLabel>
        </td>
        <td style={{ maxWidth: "10px" }}>
            <FloatingLabel label="nombre de la categoria" >
                <Form.Control type="text" name='name' value={data.name} onChange={handleChanges} />
            </FloatingLabel>
        </td>
        <td style={{ maxWidth: '150px', minWidth: '100px' }}>
            <Form.Control type="file" name='src' size="sm" onChange={handleChanges} />
        </td>
        <td>
            <Form onSubmit={handleSend}>
                <Form.Check
                    type="switch"
                    name='activo'
                    Checked={data.activo}
                    onChange={handleChanges}
                />
                <button type="submit">
                    Submit
                </button>
            </Form>
        </td>
        <td>
            <Button variant="light" type="submit" value="enviar" name="enviar">
                <AiOutlineCheck className='iconAction' />
            </Button>
            <Button variant="light">
                <FcCancel className='iconAction' onClick={handleCancel} />
            </Button>
        </td> */}