'use client'

/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import { Button, Form, Row, Stack } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup';
import { HiUserCircle } from 'react-icons/hi';
import { RiLockPasswordFill } from 'react-icons/ri';
import { IconContext } from "react-icons";
import { AiOutlineCheckCircle, AiTwotoneMail } from 'react-icons/ai';
import { BsFillTelephoneInboundFill } from 'react-icons/bs';
import { GiModernCity } from 'react-icons/gi';
import { MdOutlineCancel } from 'react-icons/md';
import Col from 'react-bootstrap/Col';
import '../styles/Home.module.css'
import { FaAddressCard, FaCity } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import { Modalcards } from '@/components/Modalcards';

export default function Register() {

    const [enviare, setEnviare] = useState(false)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();



    const getUsuarioForm = (data) => {
        console.log(data);
    }
    return (
        <div className='container mt-5 bg-danger bg-opacity-25 mb-5 rounded-4' >
            <Form onSubmit={handleSubmit(getUsuarioForm)}>
            <Modalcards/>
                <h1 className="title mb-5 "> Personal</h1>
                <hr></hr>
                <Row className="mb-3">

                    {/* inicio de un imput diferente */}
                    <Form.Group as={Col} >
                        {errors.nombre?.type === 'required' && <span style={{ color: 'red' }}>El campo nombre es requerido</span>}
                        {errors.nombre?.type === 'pattern' && <span style={{ color: 'red' }}>El campo nombre no es valido</span>}
                        {errors.apellidos?.type === 'minLength' && <span style={{ color: 'red' }}>El campo nombre es de minimo 3 letras</span>}
                        {errors.apellidos?.type === 'maxLength' && <span style={{ color: 'red' }}>El campo nombre es de maximo 62 letras</span>}
                        <InputGroup className="mb-5  borderline" >

                            <InputGroup.Text id="basic-addon1" >
                                <IconContext.Provider value={{ size: '25px' }}>
                                    <HiUserCircle />
                                    {(!enviare === true) ? '' : (
                                        errors.nombre ?
                                            <IconContext.Provider value={{ size: '26px', color: 'red' }}>
                                                <MdOutlineCancel />
                                            </IconContext.Provider>
                                            :
                                            <IconContext.Provider value={{ size: '25px', color: 'green' }}>
                                                <AiOutlineCheckCircle />
                                            </IconContext.Provider>
                                    )
                                    }
                                </IconContext.Provider>
                            </InputGroup.Text>
                            <Form.Control className="text-center  labelformme" type="text" {...register("nombre", {
                                required: true,
                                minLength: 3,
                                maxLength: 42,
                                pattern: /^[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?(( |\-)[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?)*$/,
                            })} placeholder="Nombre"></Form.Control>

                        </InputGroup>
                    </Form.Group>
                    {/* fin de este input */}

                    {/* inicio de un input diferente */}
                    <Form.Group as={Col} >
                        {errors.apellidos?.type === 'required' && <span style={{ color: 'red' }}>El campo apellidos es requerido</span>}
                        {errors.apellidos?.type === 'minLength' && <span style={{ color: 'red' }}>El campo apellidos es de minimo 3 letras</span>}
                        {errors.apellidos?.type === 'maxLength' && <span style={{ color: 'red' }}>El campo apellidos es de maximo 62 letras</span>}
                        {errors.apellidos?.type === 'pattern' && <span style={{ color: 'red' }}>El campo apellidos no es valido</span>}

                        <InputGroup className="mb-5  borderline" >
                            <InputGroup.Text id="basic-addon1" >
                                <IconContext.Provider value={{ size: '25px' }}>
                                    <HiUserCircle />
                                    {(!enviare == true) ? '' : (
                                        errors.apellidos ?
                                            <IconContext.Provider value={{ size: '26px', color: 'red' }}>
                                                <MdOutlineCancel />
                                            </IconContext.Provider>
                                            :
                                            <IconContext.Provider value={{ size: '25px', color: 'green' }}>
                                                <AiOutlineCheckCircle />
                                            </IconContext.Provider>
                                    )
                                    }
                                </IconContext.Provider>
                            </InputGroup.Text>
                            <Form.Control className="text-center  labelformme" type="text" {...register("apellidos", {
                                required: true,
                                minLength: 3,
                                maxLength: 62,
                                pattern: /^[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?(( |\-)[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?)*$/,
                            })} placeholder="apellidos"></Form.Control>
                        </InputGroup>
                    </Form.Group>
                    {/* fin de este input */}

                    {/* inicio de un input diferente */}
                    <Form.Group as={Col} >
                        {errors.fechaNacimiento?.type === 'required' && <span style={{ color: 'red' }}>El campo fechaNacimiento es requerido</span>}
                        <InputGroup className="mb-5  borderline" >
                            <InputGroup.Text id="basic-addon1" >
                                <IconContext.Provider value={{ size: '25px' }}>
                                    <HiUserCircle />
                                    {(!enviare == true) ? '' : (
                                        errors.fechaNacimiento ?
                                            <IconContext.Provider value={{ size: '26px', color: 'red' }}>
                                                <MdOutlineCancel />
                                            </IconContext.Provider>
                                            :
                                            <IconContext.Provider value={{ size: '25px', color: 'green' }}>
                                                <AiOutlineCheckCircle />
                                            </IconContext.Provider>
                                    )
                                    }
                                </IconContext.Provider>
                            </InputGroup.Text>
                            <Form.Control className="text-center  labelformme" type="date" {...register("fechaNacimiento", {
                                required: true,
                            })} placeholder="Fecha de nacimiento"></Form.Control>
                        </InputGroup>
                    </Form.Group>
                    {/* fin de este input */}
                </Row>
                <h1 className="title mn-5 ">Cuenta</h1>
                <hr></hr>
                <Row className="mb-3">

                    {/* inicio de un imput diferente */}
                    <Form.Group as={Col} >
                        {errors.email?.type === 'required' && <span style={{ color: 'red' }}>El campo email es requerido</span>}
                        {errors.email?.type === 'pattern' && <span style={{ color: 'red' }}>El campo email es invalido</span>}
                        <InputGroup className="mb-5  borderline" >
                            <InputGroup.Text id="basic-addon1" >
                                <IconContext.Provider value={{ size: '25px' }}>
                                    <AiTwotoneMail />
                                    {(!enviare == true) ? '' : (
                                        errors.email ?
                                            <IconContext.Provider value={{ size: '26px', color: 'red' }}>
                                                <MdOutlineCancel />
                                            </IconContext.Provider>
                                            :
                                            <IconContext.Provider value={{ size: '25px', color: 'green' }}>
                                                <AiOutlineCheckCircle />
                                            </IconContext.Provider>
                                    )
                                    }
                                </IconContext.Provider>
                            </InputGroup.Text>
                            <Form.Control className="text-center  labelformme"  {...register("email", {
                                required: true,
                                pattern: /^[a-z0-9_\-]+(\.[_a-z0-9\-]+)*@([_a-z0-9\-]+\.)+([a-z]{2}|aero|asia|arpa|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|xxx)$/,
                            })} placeholder="Email"></Form.Control>
                        </InputGroup>
                    </Form.Group>
                    {/* fin de este input */}

                    {/* inicio de un input diferente */}
                    <Form.Group as={Col} >
                        {errors.password?.type === 'required' && <span style={{ color: 'red' }}>El campo password es requerido</span>}
                        {errors.password?.type === 'minLength' && <span style={{ color: 'red' }}>El campo password es minimo 8 caracteres</span>}
                        {errors.password?.type === 'maxLength' && <span style={{ color: 'red' }}>El campo password es maximo 10 caracteres</span>}
                        {errors.password?.type === 'pattern' && <span style={{ color: 'red' }}>la contraseña es invalidad por caracteres especiales</span>}
                        <InputGroup className="mb-5  borderline" >
                            <InputGroup.Text id="basic-addon1" >
                                <IconContext.Provider value={{ size: '25px' }}>
                                    <RiLockPasswordFill />
                                    {(!enviare == true) ? '' : (
                                        errors.password ?
                                            <IconContext.Provider value={{ size: '26px', color: 'red' }}>
                                                <MdOutlineCancel />
                                            </IconContext.Provider>
                                            :
                                            <IconContext.Provider value={{ size: '25px', color: 'green' }}>
                                                <AiOutlineCheckCircle />
                                            </IconContext.Provider>
                                    )
                                    }
                                </IconContext.Provider>
                            </InputGroup.Text>
                            <Form.Control className="text-center  labelformme" type="password" {...register("password", {
                                required: true,
                                minLength: 8,
                                maxLength: 10,
                                pattern: /^[A-Za-z0-9!?-]+$/,
                            })} placeholder="Contraseña"></Form.Control>
                        </InputGroup>
                    </Form.Group>
                    {/* fin de este input */}
                </Row>
                <h1 className="title mn-5 ">Contacto</h1>
                <hr></hr>
                <Row className="mb-3">

                    {/* inicio de un imput diferente */}
                    <Form.Group as={Col} >
                        {errors.direccion?.type === 'required' && <span style={{ color: 'red' }}>El campo direccion es requerido</span>}
                        {errors.direccion?.type === 'pattern' && <span style={{ color: 'red' }}>Debe ser dirrecion validad calle y Num. Exterior</span>}
                        <InputGroup className="mb-5  borderline" >
                            <InputGroup.Text id="basic-addon1" >
                                <IconContext.Provider value={{ size: '25px' }}>
                                    <FaAddressCard />
                                    {(!enviare == true) ? '' : (
                                        errors.direccion ?
                                            <IconContext.Provider value={{ size: '26px', color: 'red' }}>
                                                <MdOutlineCancel />
                                            </IconContext.Provider>
                                            :
                                            <IconContext.Provider value={{ size: '25px', color: 'green' }}>
                                                <AiOutlineCheckCircle />
                                            </IconContext.Provider>
                                    )
                                    }
                                </IconContext.Provider>
                            </InputGroup.Text>
                            <Form.Control className="text-center  labelformme" type='text' {...register("direccion", {
                                required: true,
                                pattern: /^[a-zA-Z1-9À-ÖØ-öø-ÿ]+\.?(( |\-)[a-zA-Z1-9À-ÖØ-öø-ÿ]+\.?)* (((#|[nN][oO]\.?) ?)?\d{1,4}(( ?[a-zA-Z0-9\-]+)+)?)$/,
                            })} placeholder="Dirección "></Form.Control>
                        </InputGroup>
                    </Form.Group>
                    {/* fin de este input */}

                    {/* inicio de un input diferente */}
                    <Form.Group as={Col} >
                        {errors.telefono?.type === 'required' && <span style={{ color: 'red' }}>El campo telefono es requerido</span>}
                        {errors.telefono?.type === 'pattern' && <span style={{ color: 'red' }}>El campo telefono no es valido</span>}
                        {errors.telefono?.type === 'minLength' && <span style={{ color: 'red' }}>El telefono debe de ser minimo 10 numeros</span>}
                        {errors.telefono?.type === 'maxLength' && <span style={{ color: 'red' }}>El telefono debe de ser maximo 10 numeros</span>}
                        <InputGroup className="mb-5  borderline" >
                            <InputGroup.Text id="basic-addon1" >
                                <IconContext.Provider value={{ size: '25px' }}>
                                    <BsFillTelephoneInboundFill />
                                    {(!enviare == true) ? '' : (
                                        errors.telefono ?
                                            <IconContext.Provider value={{ size: '26px', color: 'red' }}>
                                                <MdOutlineCancel />
                                            </IconContext.Provider>
                                            :
                                            <IconContext.Provider value={{ size: '25px', color: 'green' }}>
                                                <AiOutlineCheckCircle />
                                            </IconContext.Provider>
                                    )
                                    }
                                </IconContext.Provider>
                            </InputGroup.Text>
                            <Form.Control className="text-center  labelformme" type="tel" {...register("telefono", {
                                required: true,
                                minLength: 10,
                                maxLength: 10,
                                pattern: /^0{0,2}([\+]?[\d]{1,3} ?)?([\(]([\d]{2,3})[)] ?)?[0-9][0-9 \-]{6,}( ?([xX]|([eE]xt[\.]?)) ?([\d]{1,5}))?$/,
                            })} placeholder="Telefono"></Form.Control>
                        </InputGroup>
                    </Form.Group>
                    {/* fin de este input */}
                </Row>
                <Row className="mb-3">
                    {/* inicio de un imput diferente */}
                    <Form.Group as={Col} >
                        {errors.estado?.type === 'required' && <span style={{ color: 'red' }}>El campo estado es requerido</span>}
                        {errors.estado?.type === 'minLength' && <span style={{ color: 'red' }}>El campo estado es minimo 3 letras</span>}
                        {errors.estado?.type === 'maxLength' && <span style={{ color: 'red' }}>El campo estado es maximo 20 letras</span>}
                        {errors.estado?.type === 'pattern' && <span style={{ color: 'red' }}>El campo estado es invalido</span>}
                        <InputGroup className="mb-5  borderline" >
                            <InputGroup.Text id="basic-addon1" >
                                <IconContext.Provider value={{ size: '25px' }}>
                                    <GiModernCity />
                                    {(!enviare == true) ? '' : (
                                        errors.estado ?
                                            <IconContext.Provider value={{ size: '26px', color: 'red' }}>
                                                <MdOutlineCancel />
                                            </IconContext.Provider>
                                            :
                                            <IconContext.Provider value={{ size: '25px', color: 'green' }}>
                                                <AiOutlineCheckCircle />
                                            </IconContext.Provider>
                                    )
                                    }
                                </IconContext.Provider>
                            </InputGroup.Text>
                            <Form.Control className="text-center  labelformme" type='text' {...register("estado", {
                                required: true,
                                minLength: 3,
                                maxLength: 20,
                                pattern: /^[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?(( |\-)[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?)*$/,
                            })} placeholder="Estados"></Form.Control>
                        </InputGroup>
                    </Form.Group>
                    {/* fin de este input */}

                    {/* inicio de un input diferente */}
                    <Form.Group as={Col} >
                        {errors.ciudad?.type === 'required' && <span style={{ color: 'red' }}>El campo ciudad es requerido</span>}
                        {errors.ciudad?.type === 'minLength' && <span style={{ color: 'red' }}>El campo ciudad es minimo 3 letras</span>}
                        {errors.ciudad?.type === 'maxLength' && <span style={{ color: 'red' }}>El campo ciudad es maximo 20 letras</span>}
                        {errors.ciudad?.type === 'pattern' && <span style={{ color: 'red' }}>El campo ciudad es invalido</span>}
                        <InputGroup className="mb-5  borderline" >
                            <InputGroup.Text id="basic-addon1" >
                                <IconContext.Provider value={{ size: '25px' }}>
                                    <FaCity />
                                    {(!enviare == true) ? '' : (
                                        errors.ciudad ?
                                            <IconContext.Provider value={{ size: '26px', color: 'red' }}>
                                                <MdOutlineCancel />
                                            </IconContext.Provider>
                                            :
                                            <IconContext.Provider value={{ size: '25px', color: 'green' }}>
                                                <AiOutlineCheckCircle />
                                            </IconContext.Provider>
                                    )
                                    }
                                </IconContext.Provider>
                            </InputGroup.Text>
                            <Form.Control className="text-center  labelformme" type="text" {...register("ciudad", {
                                required: true,
                                minLength: 3,
                                maxLength: 20,
                                pattern: /^[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?(( |\-)[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?)*$/,
                            })} placeholder="Ciudad"></Form.Control>
                        </InputGroup>
                    </Form.Group>
                    {/* fin de este input */}

                    {/* inicio de un input diferente */}
                    <Form.Group as={Col} >
                        {errors.postal?.type === 'required' && <span style={{ color: 'red' }}>El campo postal es requerido</span>}
                        {errors.postal?.type === 'maxLength' && <span style={{ color: 'red' }}>la postal debe ser maximo 6</span>}
                        {errors.postal?.type === 'minLength' && <span style={{ color: 'red' }}>la postal debe ser minimo 4</span>}
                        {errors.postal?.type === 'pattern' && <span style={{ color: 'red' }}>El campo postal no es valido</span>}
                        <InputGroup className="mb-5  borderline" >
                            <InputGroup.Text id="basic-addon1" >
                                <IconContext.Provider value={{ size: '25px' }}>
                                    <HiUserCircle />
                                    {(!enviare == true) ? '' : (
                                        errors.postal ?
                                            <IconContext.Provider value={{ size: '26px', color: 'red' }}>
                                                <MdOutlineCancel />
                                            </IconContext.Provider>
                                            :
                                            <IconContext.Provider value={{ size: '25px', color: 'green' }}>
                                                <AiOutlineCheckCircle />
                                            </IconContext.Provider>
                                    )
                                    }
                                </IconContext.Provider>
                            </InputGroup.Text>
                            <Form.Control className="text-center  labelformme" type="tel"  {...register("postal", {
                                required: true,
                                maxLength: 6,
                                minLength: 4,
                                pattern: /^[0-9]+$/
                            })} placeholder="Codigo Postal"></Form.Control>
                        </InputGroup>
                    </Form.Group>
                    {/* fin de este input */}
                </Row>
                <Button className="titne mb-5 boton" variant='primary' type="submit" onClick={e =>setEnviare(true)}>
                    Entrar
                </Button>
            </Form>
        </div>
    )
}
