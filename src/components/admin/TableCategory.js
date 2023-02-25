/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Image } from 'react-bootstrap'
import { AiOutlineCheck, AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from 'react-icons/ai'
import { FcCancel } from 'react-icons/fc'
import Layout from '../layout'
import { uploadfile } from '@/firebase/config'

export default function TableCategory({ index, categorias, onDelete }) {
    const [edit, setEdit] = React.useState(false)
    const [data, setData] = React.useState(categorias)
    const [newData, setNewData] = React.useState(data)

    const handleEdit = () => {
        setEdit(!edit)
    }
    const handleDelete = () => {
        //llamar a la accion que elimine el registros
        onDelete(index)
    }

    const mostrar = () => {
        console.log(data);
    }

    const handleChanges = (e) => {
        let nombreFoto;
        let datoFotos;
        setData({
            ...data,
            [e.target.name]: e.target.value,
            /* activo:true */
        })
        setNewData(data)
        nombreFoto = e.target.files[0].name;
        datoFotos = e.target.files
        uploadfile(datoFotos,nombreFoto)
    }


    const handleCancel = () => {
        setData({ ...newData })
        setEdit(!edit)
    }

    return (
        <>
            {!edit ?
                <td>{data.id} </td>
                :
                <td style={{ maxWidth: "10px" }}>
                    <FloatingLabel label="ID" >
                        <Form.Control type="number" name='id' value={data.id} style={{ height: '50px', maxWidth: '200px', minWidth: '100px' }} onChange={handleChanges} />
                    </FloatingLabel>
                </td>
            }
            {!edit ?
                <td>{data.name} </td>
                :
                <td style={{ maxWidth: "10px" }}>
                    <FloatingLabel label="nombre de la categoria" >
                        <Form.Control type="text" name='name' value={data.name} style={{ height: '50px', maxWidth: '300px', minWidth: '100px' }} onChange={handleChanges} />
                    </FloatingLabel>
                </td>
            }
            {!edit ?
                <td
                    className=' text-center'>
                    <Image src={data.src} style={{ width: '60px', height: '60px' }}></Image>
                </td>
                :
                <td style={{ maxWidth: '150px', minWidth: '100px' }}>
                    <Form.Control type="file" multiple name='src' size="sm" style={{ maxWidth: '300px', minWidth: '100px' }} onChange={handleChanges} />
                </td>

            }
            <td>
                <Form>
                    <Form.Check
                        type="switch"
                        name='activo'
                        defaultChecked={data.activo}
                        onChange={handleChanges}
                    />
                </Form>
            </td>
            {!edit ?
                <td>
                    <Button variant="light">
                        <AiOutlineDelete className='iconAction' onClick={handleDelete} />
                    </Button>
                    <Button variant="light">
                        <AiOutlineEdit className='iconAction' onClick={handleEdit} />
                    </Button>
                    {/*                     <Button variant="light">
                        <AiOutlineEye className='iconAction' onClick={mostrar} />
                    </Button> */}
                </td>
                :
                <td>
                    <Button variant="light">
                        <AiOutlineCheck className='iconAction' onClick={handleEdit} />
                    </Button>
                    <Button variant="light">
                        <FcCancel className='iconAction' onClick={handleCancel} />
                    </Button>
                </td>
            }
        </>
    )
}