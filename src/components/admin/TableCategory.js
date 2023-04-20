/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import { Button, Col, FloatingLabel, Form, Image, Modal, Row } from 'react-bootstrap'
import { AiOutlineCheck, AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from 'react-icons/ai'
import { FcCancel } from 'react-icons/fc'
import Layout from '../layout'
import { uploadfile } from '@/firebase/config'
import { Switch } from 'antd'

export default function TableCategory({ index, categorias, onDelete, onUpdate, onActive }) {
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

    //Eliminar Registro
    const handleDelete = () => {
        onDelete(index)
    }

    const mostrar = () => {
        onUpdate(index);
    }

    const handleChanges = () =>{
        let check = !data.active
        onActive(index, check)
    }

    /*
    // esta funcion sirve para dar una previsualizacion de la imagen puesta en el modal de modificar
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
    */


    /* 
    //esta es la funcion importante
    const handleSend = async e => {
        e.preventDefault();
        // recopila todos los datos
        let datos = e.target;
        let categoria = {
            id: datos.id.value,
            name: datos.name.value,
            // guarda el estado del check y de la url
            src: imagenNueva,
            activo: checked,
        };
        // cualquier llamado a categoria contiene el array de todos los datos incluyendo el url
        setData(categoria)
        setNewData(categoria)
        console.log(categoria);
        handleClose()
    }
    */


    const handleCancel = () => {
        setData({ ...newData })
        handleClose()
    }

    return (
            <>
            <td>{data.id} </td>
            <td>{data.nombre} </td>
            <td
                className=' text-center'>
                <Image src={data.url_image} style={{ width: '60px', height: '60px' }}></Image>
            </td>

            <td>
                <Form.Check
                    type="switch"
                    name='activo'
                    defaultChecked={data.active}
                    onChange={handleChanges}
                    />
            </td>

            <td>
                <Button variant="light">
                    <AiOutlineDelete className='iconAction' onClick={handleDelete} />
                </Button>
                <Button variant="light">
                    <AiOutlineEdit className='iconAction' onClick={mostrar} />
                </Button>
            </td>
        </>
    )
}