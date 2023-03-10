'use client'

/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import { Button, Form, Stack } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup'
import { HiUserCircle } from 'react-icons/hi'
import { RiLockPasswordFill } from 'react-icons/ri'
import { IconContext } from "react-icons"
import Link from 'next/link'
import { useForm } from "react-hook-form"
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { MdOutlineCancel } from 'react-icons/md'
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useRouter } from 'next/router'
import Layout from '../components/login/_layout'
import { useAuth } from '@/hooks/useAuth'


export default function Login() {

    const [enviare, setEnviare] = useState(false)
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const [show, setShow] = useState(false)
    const [messageNoti, setmessageNoti] = useState("")
    const router = useRouter()
    const auth = useAuth()

    const getUsuarioForm = (data) => {
        auth.signIn(data.email,data.password).then(() => {
            router.push('/')
        }).catch(error =>{
            if(error) {
                setShow(true)
                setmessageNoti(error?.response?.data?.message)
            }
            // console.log(error.response.data.message)
        })
    }

    return (
        
        <div>
            
            <div className='container mt-5'>
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
                        <Form.Control style={{ backgroundColor: 'rgba(217, 217, 217, 0.65)', borderradius: '10px 10px 0px 0px', height: '80px', color: '#000000', fontSize: '32px', fontWeight: '400', color: 'dark' }} className="text-center" placeholder="Email" {...register("email", {
                            required: true,
                            pattern: /^[a-z0-9_\-]+(\.[_a-z0-9\-]+)*@([_a-z0-9\-]+\.)+([a-z]{2}|aero|asia|arpa|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|xxx)$/,
                        })}></Form.Control>
                    </InputGroup>
                    {errors.password?.type === 'required' && <span style={{ color: 'red' }}>El campo password es requerido</span>}
                    {errors.password?.type === 'minLength' && <span style={{ color: 'red' }}>El campo password es minimo 8 caracteres</span>}
                    {errors.password?.type === 'maxLength' && <span style={{ color: 'red' }}>El campo password es maximo 30 caracteres</span>}
                    {errors.password?.type === 'pattern' && <span style={{ color: 'red' }}>El Password debe contener mínimo ocho caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial</span>}

                    <InputGroup className="mb-5 mt-5" style={{ borderBottom: '5px solid rgba(255, 23, 68, 0.71)' }} >

                        <InputGroup.Text id="basic-addon1" >
                            <IconContext.Provider value={{ size: '50px' }}>
                                <RiLockPasswordFill />
                                {(!enviare == true) ? '' : (
                                    errors.password ?
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
                        <Form.Control style={{ backgroundColor: 'rgba(217, 217, 217, 0.65)', borderradius: '10px 10px 0px 0px', height: '80px', color: '#000000', fontSize: '32px', textTransform: 'capitalize', fontWeight: '400', color: 'dark' }} className="text-center" type="password" placeholder="Contraseña" {...register("password", {
                            required: true,
                            minLength: 8,
                            maxLength: 30,
                            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}/,
                        })} />
                    </InputGroup>

                    <Stack direction="horizontal" gap={1}>
                        <div className='title-card'>
                            <h1 className="title"><Link href="/register">Regístrate aquí</Link></h1>
                            <h1 className="title">Olvidaste tu contraseña?</h1>
                        </div>
                        <div className=' ms-auto'>
                            <Button className="title" href="/" variant='person1' style={{ borderradius: '18px', color: '#FFFFFF', fontWeight: 'bolder', fontSize: '19px', padding: '15px', width: '200px' }}>
                                Entrar
                            </Button>
                        </div>
                    </Stack>
                    <Button className="title mb-5 boton" variant='primary' type="submit" onClick={e => setEnviare(true)}>
                        Entrar
                    </Button>
                </Form>
            </div>
            <>
            <Row>
                <Col xs={6}>
                    <ToastContainer className="p-3" position="middle-center">
                        <Toast onClose={() => setShow(false)} show={show} delay={6000} autohide bg="Danger" >
                        <Toast.Header>
                            <Image
                            src="changarrito.png"
                            className="rounded me-2"
                            alt=""
                            width="20" height="20"
                            />
                            <strong className="me-auto"> Changarrito</strong>
                            <small>just now</small>
                        </Toast.Header>
                        <Toast.Body>{messageNoti}</Toast.Body>
                        </Toast>
                    </ToastContainer>
                </Col>
            </Row>
            </>
        </div>
    )
}

Login.getLayout = function getLayout(page) {
    return (
        <Layout>{page}</Layout>
    )
}