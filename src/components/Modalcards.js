import React, { useState } from 'react';
import { Card, Col, Form, InputGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { IconContext } from 'react-icons';
import { AiFillStar, AiOutlineCheckCircle, AiOutlineStar } from 'react-icons/ai';
import { useForm } from "react-hook-form";
import { BsFileEarmarkImage, BsFillTelephoneInboundFill } from 'react-icons/bs';
import { MdEqualizer, MdFastfood, MdOutlineCancel, MdOutlinePriceChange, MdOutlineSubtitles } from 'react-icons/md';
import { HiUserCircle } from 'react-icons/hi';


export const Modalcards = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [enviare, setEnviare] = useState(false)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();



    const getUsuarioForm = (data) => {
        console.log(data);
    }

    return (
        <div>
            <Button variant="primary" className='mx-5 mt-3 title ' style={{ color: 'white' }} onClick={handleShow}>
                Agregar Comida
            </Button>

            <Modal show={show} onHide={handleClose} backdrop="static" size="lg">
                <Form onSubmit={handleSubmit(getUsuarioForm)}>
                    <Modal.Header closeButton>
                        <Modal.Title className='title'>Agregar Comida</Modal.Title>
                    </Modal.Header>
                    <Card className='my-2 bold' >
                        <Row>
                            <Form.Group as={Col} className='mx-3'>

                                {errors.image?.type === 'required' && <span style={{ color: 'red', fontSize: '15px', fontWeight: 'bold' }}>es requerido</span>}
                                {errors.image?.type === 'maxLength' && <span style={{ color: 'red', fontSize: '15px', fontWeight: 'bold' }}>maximo 252 caracteres</span>}
                                {errors.image?.type === 'pattern' && <span style={{ color: 'red', fontSize: '15px', fontWeight: 'bold' }}>la URL no es valido</span>}
                                <InputGroup className="mb-5  borderline" >
                                    <InputGroup.Text id="basic-addon1" >
                                        <IconContext.Provider value={{ size: '25px' }}>
                                            <BsFileEarmarkImage />
                                            {(!enviare == true) ? '' : (
                                                errors.image ?
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
                                    <Form.Control className="text-center  labelformme " type="text" {...register("image", {
                                        required: true,
                                        maxLength: 252,
                                        pattern: /(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/,
                                    })} placeholder="URL de la imagen"></Form.Control>
                                </InputGroup>
                            </Form.Group>
                        </Row>

                        <Card.Body>
                            <Card.Title >
                                <Row>
                                    <Form.Group as={Col}>
                                        <div>
                                            {errors.title?.type === 'required' && <span style={{ color: 'red', fontSize: '13px' }}>es requerido</span>}
                                            {errors.title?.type === 'minLength' && <span style={{ color: 'red', fontSize: '13px' }}>minimo 3 caracteres</span>}
                                            {errors.title?.type === 'maxLength' && <span style={{ color: 'red', fontSize: '13px' }}>maximo 42 caracteres</span>}
                                            {errors.title?.type === 'pattern' && <span style={{ color: 'red', fontSize: '13px' }}>el titulo no es valido</span>}
                                            <InputGroup className="mb-5  borderline" >
                                                <InputGroup.Text id="basic-addon1" >

                                                    <IconContext.Provider value={{ size: '25px' }}>
                                                        <MdOutlineSubtitles />
                                                        {(!enviare == true) ? '' : (
                                                            errors.title ?
                                                                <IconContext.Provider value={{ size: '26px', color: 'red' }}>
                                                                    <MdOutlineCancel />
                                                                </IconContext.Provider>
                                                                :
                                                                <IconContext.Provider value={{ size: '25px', color: 'green' }}>
                                                                    <AiOutlineCheckCircle />
                                                                </IconContext.Provider>
                                                        )
                                                        }
                                                    </IconContext.Provider>                                     </InputGroup.Text>

                                                <Form.Control className="text-center  labelformme " type="text" {...register("title", {
                                                    required: true,
                                                    minLength: 3,
                                                    maxLength: 42,
                                                    pattern: /^[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?(( |\-)[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?)*$/,
                                                })} placeholder="Titulo de la comida"></Form.Control>
                                            </InputGroup>

                                        </div>
                                    </Form.Group>
                                    <Form.Group as={Col}>

                                        <div className="ms-auto shadow-text fw-bold" >
                                            {errors.price?.type === 'required' && <span style={{ color: 'red', fontSize: '13px' }}>es requerido</span>}
                                            {errors.price?.type === 'minLength' && <span style={{ color: 'red', fontSize: '13px' }}> minimo 3 caracteres $ 0.00</span>}
                                            {errors.price?.type === 'maxLength' && <span style={{ color: 'red', fontSize: '13px' }}>maximo 10 caracteres</span>}
                                            {errors.price?.type === 'pattern' && <span style={{ color: 'red', fontSize: '13px' }}>no son numeros e.j 1 o 1.00 validos</span>}
                                            <InputGroup className="mb-5  borderline" >
                                                <InputGroup.Text id="basic-addon1" >

                                                    <IconContext.Provider value={{ size: '25px' }}>
                                                        <MdOutlinePriceChange />
                                                        {(!enviare == true) ? '' : (
                                                            errors.price ?
                                                                <IconContext.Provider value={{ size: '26px', color: 'red' }}>
                                                                    <MdOutlineCancel />
                                                                </IconContext.Provider>
                                                                :
                                                                <IconContext.Provider value={{ size: '25px', color: 'green' }}>
                                                                    <AiOutlineCheckCircle />
                                                                </IconContext.Provider>
                                                        )
                                                        }
                                                    </IconContext.Provider>                                     </InputGroup.Text>
                                                <Form.Control className="text-center  labelformme " type="text" {...register("price", {
                                                    required: true,
                                                    minLength: 3,
                                                    maxLength: 200,
                                                    pattern: /^[0-9]+([.])?([0-9]+)?$/
                                                })} placeholder="$  Precio de la comida"></Form.Control>
                                            </InputGroup>

                                        </div>
                                    </Form.Group>

                                </Row>
                            </Card.Title>
                            <Row>
                                <Form.Group as={Col}>
                                    <div className="shadow-text fw-bold mx-2 " style={{ fontSize: '20px' }}>
                                        {errors.start?.type === 'required' && <span style={{ color: 'red', fontSize: '13px' }}>es requerido</span>}
                                        {errors.start?.type === 'min' && <span style={{ color: 'red', fontSize: '13px' }}> minima calif. 1</span>}
                                        {errors.start?.type === 'max' && <span style={{ color: 'red', fontSize: '13px' }}>maxima calif. 10</span>}
                                        {errors.start?.type === 'pattern' && <span style={{ color: 'red', fontSize: '13px' }}>no son numeros e.j 1 o 1.00 validos</span>}
                                        <InputGroup className="mb-5  borderline" >
                                            <InputGroup.Text id="basic-addon1" >

                                                <IconContext.Provider value={{ size: '25px' }}>
                                                    <MdEqualizer />
                                                    {(!enviare == true) ? '' : (
                                                        errors.start ?
                                                            <IconContext.Provider value={{ size: '26px', color: 'red' }}>
                                                                <MdOutlineCancel />
                                                            </IconContext.Provider>
                                                            :
                                                            <IconContext.Provider value={{ size: '25px', color: 'green' }}>
                                                                <AiOutlineCheckCircle />
                                                            </IconContext.Provider>
                                                    )
                                                    }
                                                </IconContext.Provider>                                     </InputGroup.Text>
                                            <Form.Control className="text-center  labelformme " type="text" {...register("start", {
                                                required: true,
                                                min: 1,
                                                max: 10,
                                                pattern: /^[0-9]+([.])?([0-9]+)?$/
                                            })} placeholder="Calificacion de la comida"></Form.Control>
                                        </InputGroup>
                                    </div>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <div className="shadow-text fw-bold mx-2 " style={{ fontSize: '20px' }}>
                                        {errors.ranking?.type === 'required' && <span style={{ color: 'red', fontSize: '13px' }}>es requerido</span>}
                                        {errors.ranking?.type === 'min' && <span style={{ color: 'red', fontSize: '13px' }}> minima calif. 1</span>}
                                        {errors.ranking?.type === 'max' && <span style={{ color: 'red', fontSize: '13px' }}>maxima calif. 5</span>}
                                        {errors.ranking?.type === 'pattern' && <span style={{ color: 'red', fontSize: '13px' }}>no son numeros e.j 1 o 1.00 validos</span>}
                                        <InputGroup className="mb-5  borderline" >
                                            <InputGroup.Text id="basic-addon1" >

                                                <IconContext.Provider value={{ size: '25px' }}>
                                                    <MdEqualizer />
                                                    {(!enviare == true) ? '' : (
                                                        errors.ranking ?
                                                            <IconContext.Provider value={{ size: '26px', color: 'red' }}>
                                                                <MdOutlineCancel />
                                                            </IconContext.Provider>
                                                            :
                                                            <IconContext.Provider value={{ size: '25px', color: 'green' }}>
                                                                <AiOutlineCheckCircle />
                                                            </IconContext.Provider>
                                                    )
                                                    }
                                                </IconContext.Provider>                                     </InputGroup.Text>
                                            <Form.Control className="text-center  labelformme " type="text" {...register("ranking", {
                                                required: true,
                                                min: 1,
                                                max: 5,
                                                pattern: /^[0-9]+([.])?([0-9]+)?$/
                                            })} placeholder="Ranking de la comida"></Form.Control>
                                        </InputGroup>
                                    </div>
                                </Form.Group>

                            </Row>
                            <Card.Text style={{ margin: '20px' }}>
                                <div >
                                    {errors.description?.type === 'required' && <span style={{ color: 'red', fontSize: '13px' }}>es requerido</span>}
                                    {errors.description?.type === 'minLength' && <span style={{ color: 'red', fontSize: '13px' }}>minimo 3 caracteres</span>}
                                    {errors.description?.type === 'maxLength' && <span style={{ color: 'red', fontSize: '13px' }}>maximo 200 caracteres</span>}
                                    {errors.description?.type === 'pattern' && <span style={{ color: 'red', fontSize: '13px' }}>el titulo no es valido</span>}
                                    <InputGroup className="mb-5  borderline" >
                                        <InputGroup.Text id="basic-addon1" >

                                            <IconContext.Provider value={{ size: '25px' }}>
                                                <MdFastfood />
                                                {(!enviare == true) ? '' : (
                                                    errors.description ?
                                                        <IconContext.Provider value={{ size: '26px', color: 'red' }}>
                                                            <MdOutlineCancel />
                                                        </IconContext.Provider>
                                                        :
                                                        <IconContext.Provider value={{ size: '25px', color: 'green' }}>
                                                            <AiOutlineCheckCircle />
                                                        </IconContext.Provider>
                                                )
                                                }
                                            </IconContext.Provider>                                     </InputGroup.Text>
                                        <Form.Control className="text-center  labelformme " as="textarea" type="text" {...register("description", {
                                            required: true,
                                            minLength: 3,
                                            maxLength: 200,
                                            pattern: /^[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?(( |\-)[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?)*$/,
                                        })} placeholder="Description de la comida"></Form.Control>
                                    </InputGroup>
                                </div>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Modal.Footer>
                        <Button variant="secondary" className='title' onClick={handleClose}>
                            cancelar
                        </Button>
                        <Button variant='success' type="submit" onClick={e => setEnviare(true)}>
                            Entrar
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    )
}
