import Layout from '@/components/layout'
import React, { useState, useEffect } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { IconContext } from 'react-icons'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { HiUserCircle } from 'react-icons/hi'
import { MdOutlineCancel } from 'react-icons/md'
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2'


export default function ResetPass() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const [enviare, setEnviare] = useState(false)
    const [datos, setDatos] = useState()

    // esta funcion sirve para rescatar los datos del input email
    const getUsuarioForm = (data) => {
        console.log(data)
        setDatos(data)
    }

    //esta es la alerta en caso de que haya sido un exito el reseteo
    const alertCorrecto = () => {
        //solo necesitaras esta parte si quieres mudar o agragar en otra funcion para la conexion al backend
        Swal.fire({
            position: 'center',
            title: `revise el correo escrito para el cambio de contraseña`,
            text: `correo: ${datos.email}`,
            icon: 'success',
            confirmButtonText: 'Aceptar'
        })
    }

    // en caso de error
    const alertError = () => {
        //solo necesitaras esta parte si quieres mudar o agragar en otra funcion para la conexion al backend
        Swal.fire({
            position: 'center',
            title: `Ha ocurido un error para el reseteo de contreaseña`,
            text: `no se ha podido enviar el correo para cambiar la contraseña a: ${datos.email}`,
            icon: 'error',
            confirmButtonText: 'Aceptar'
        })
    }

    return (
        <>
            <div className="container w-75 body-form bg-white mt-4 mb-4 rounded-3 shadow">
                <div className="row">
                    <div className="col bg d-none d-lg-block col-sm-3 d-col-md-4 d-col-lg-5 col-xl-6 ">

                    </div>
                    <div className="col m-4 rounded-5">
                        <div className="text-end">
                            <Image src="/Changarrito.png" width="80" alt="logo" />
                        </div>
                        <h2 className="fw-bold text-center  pt-3">Resetear contraseña</h2>
                        <h5 className="text-start">Ingrese la dirección de correo electrónico verificada de su cuenta de usuario y le enviaremos un enlace para restablecer la contraseña</h5>
                        <Form onSubmit={handleSubmit(getUsuarioForm)}>
                            {errors.email?.type === 'required' && <span style={{ color: 'red' }}>El campo email es requerido</span>}
                            {errors.email?.type === 'pattern' && <span style={{ color: 'red' }}>El campo email es invalido</span>}
                            <InputGroup className="mb-5 mt-5" style={{ borderBottom: '5px solid rgba(255, 23, 68, 0.71)' }} >
                                <InputGroup.Text id="basic-addon1" >
                                    <IconContext.Provider value={{ size: '50px' }}>
                                        <HiUserCircle />
                                        {(!enviare == true) ? '' : (
                                            errors.email ?
                                                <IconContext.Provider value={{ size: '51px', color: 'red' }}>
                                                    <MdOutlineCancel />
                                                </IconContext.Provider>
                                                :
                                                <IconContext.Provider value={{ size: '51px', color: 'green' }}>
                                                    <AiOutlineCheckCircle />
                                                </IconContext.Provider>
                                        )
                                        }
                                    </IconContext.Provider>
                                </InputGroup.Text>
                                <Form.Control style={{ backgroundColor: 'rgba(217, 217, 217, 0.65)', borderradius: '10px 10px 0px 0px', height: '80px', color: '#000000', fontSize: '24px', fontWeight: '400', color: 'dark' }} className="text-center" placeholder="Email" {...register("email", {
                                    required: true,
                                    pattern: /^[a-z0-9_\-]+(\.[_a-z0-9\-]+)*@([_a-z0-9\-]+\.)+([a-z]{2}|aero|asia|arpa|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|xxx)$/,
                                })}></Form.Control>
                            </InputGroup>
                            <div className="d-grid">
                                <Button className="title mb-5" variant='primary' type="submit" onClick={e => setEnviare(true)}>Solicitar reseteo de Contraseña</Button>
                            </div>
                        </Form>
                        <Button className="title mb-5" variant='primary' onClick={alertError}>Alerta de error</Button>
                        <Button className="title mb-5" variant='primary' onClick={alertCorrecto}>Alerta de correcto</Button>

                    </div>


                </div >
            </div >
        </>
    )
}

ResetPass.getLayout = function getLayout(page) {
    return (
        <Layout>{page}</Layout>
    )
}