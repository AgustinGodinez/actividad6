import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { getCsrfToken, signIn, getSession } from "next-auth/react"
import { Button, Form, InputGroup, Stack } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { IconContext } from 'react-icons'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { HiUserCircle } from 'react-icons/hi'
import { MdOutlineCancel } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'
import { useForm } from "react-hook-form"
import Link from 'next/link'
import Swal from 'sweetalert2'



export default function Login({csrfToken}) {
    const router = useRouter()

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const [enviare, setEnviare] = useState(false)

    useEffect(() => {
        if (router.query.error) {
            Swal.fire({
                position: 'center',
                title: `Changarrito`,
                text: ` ${router.query.error}`,
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
            .then(() => {
                // Borrar parámetros de consulta de la URL
                router.replace(router.pathname);
            })
        }
    });

    // esta funcion sirve para rescatar los datos del input email
    const getUsuarioForm = async (data) => {
        await signIn('credentials', { email: data.email, password: data.password })
    }

    return (
        <>
            <div className="container w-75 body-form bg-white mt-4 mb-4 rounded-3 shadow">
                <div className="row">
                    <div className="col bg d-none d-lg-block col-sm-3 d-col-md-4 d-col-lg-5 col-xl-6 ">

                    </div>
                    <div className="col m-4 rounded-5">
                        <div className="text-end" style={{display:'none'}}>
                            <Image src="/Changarrito.png" width="80" alt="logo" />
                        </div>
                        <h2 className="fw-bold text-center  pt-3">Bienvenido</h2>
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
                                })} />
                            </InputGroup>
                            <div className="d-grid gap-2">
                                <Button className="title mb-5" style={{color:'white'}} size='lg' variant='primary' type="submit" onClick={e => setEnviare(true)}>
                                    Entrar
                                </Button>
                            </div>
                        </Form>
                        <Stack direction="horizontal" gap={1}>
                            <div className='title-card'>
                                <h5 className="title"><Link href="/register">Regístrate aquí</Link></h5>
                                <h5 className="title"><Link href="/resetPass" >Olvidaste tu contraseña?</Link></h5>
                            </div>
                            <div className=' ms-auto'>
                            </div>
                        </Stack>
                    </div>
                </div >
            </div >
        </>
    )
}

// si logra ser autenticado, regresarlo a la página que intentó acceder
export const getServerSideProps = async ({ req, query }) => {
    const session = await getSession({ req });
  
    const { p = '/' } = query;
  
    if ( session ) {
      return {
        redirect: {
          destination: p.toString(),
          permanent: false
        }
      }
    }
  
    return {
      props: { }
    }
  }