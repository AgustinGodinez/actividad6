'use client'

/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import { Button, Form, Stack } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup';
import { HiUserCircle } from 'react-icons/hi';
import { RiLockPasswordFill } from 'react-icons/ri';
import { IconContext } from "react-icons";
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { MdOutlineCancel } from 'react-icons/md';

export default function Login() {

    const [enviare, setEnviare] = useState(false)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();



    const getUsuarioForm = (data) => {
        console.log(data);
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
                    {errors.password?.type === 'maxLength' && <span style={{ color: 'red' }}>El campo password es maximo 10 caracteres</span>}
                    {errors.password?.type === 'pattern' && <span style={{ color: 'red' }}>la contraseña es invalidad por caracteres especiales</span>}

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
                            maxLength: 10,
                            pattern: /^[A-Za-z0-9!?-]+$/,
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
        </div>
    )
}