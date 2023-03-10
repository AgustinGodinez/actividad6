import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Link from 'next/link'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { useSession, signIn, signOut } from "next-auth/react"

const menu = [
{id: 1,path: '/admin/category',name: 'Categorias de Productos'},
{id: 2, path: '/admin/product', name: 'Lista de Productos'},
{id: 3, path: '/admin/Orders/', name: 'Pedidos'},
{id: 4, path: '/admin/Reviews/',name: 'Reviews'},
{id: 5, path: '/admin/sellers',name: 'Vendedores'},
{id: 6, path: '/admin/user',name: 'Usuarios'},
{id: 7, path: '/admin/earnings',name: 'Ventas'}
]

const expand = 'true'

export default function OffcanvasExample() {
    const { data: session } = useSession()
    return (
        <>
            <Navbar expand={expand} className="MenuAll">
            <Container fluid>
                <Container>
                    <Row>
                        <Col xs={6}>
                            <Link href="/">
                                <Navbar.Brand>
                                    <img src="/Changarrito.png" alt="Logo" width="60" height="60" style={{borderRadius: '50%'}} />
                                </Navbar.Brand>
                            </Link>
                        </Col>
                        <Col className='MenuItemAllAlign'>
                            <Link href="/" className='MenuItemAll'>
                                Inicio
                            </Link>
                        </Col>
                        <Col className='MenuItemAllAlign'> 
                            <Link href="about" className='MenuItemAll' style={{textAlign: 'center'}}>
                                Nosotros
                            </Link>
                        </Col>
                        <Col className='MenuItemAllAlign'>
                            <Link href="contact" className='MenuItemAll'>
                                Contacto
                            </Link>
                        </Col>
                    </Row>
                </Container>
                
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}  className="menuBotton"/>
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                        <Stack direction="horizontal" gap={3}>
                        {
                            session?.user?.image==null
                            ? <Image src={`https://ui-avatars.com/api/?name=${session?.user?.name}`}  alt="Logo" width="60" height="60" style={{borderRadius: '50%'}} />
                            : <Image src={session.user?.image} alt="Logo" width="60" height="60" style={{borderRadius: '50%'}} />
                        }
                        {
                            session?.user?.image==null
                            ? <h3 className='title'>{ session?.user?.name }</h3>
                            : <h3 className='title'>Changarrito</h3>
                        }
                        </Stack>
                    </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        {/*
                            <Link href={session?user?.name == null ? `/admin/user/${1}`: '' } className='MenuItem' passHref legacyBehavior>
                                session?user?.name==null
                                ?  <Nav.Link>Perfil</Nav.Link>
                                :  <span></span>
                            </Link>
                            */
                        }
                        <hr></hr>
                        <NavDropdown.Divider />
                        { menu.map( (item) => (
                        <Link key={item.id} href={item.path} passHref legacyBehavior>
                            <Nav.Link>{item.name}</Nav.Link>
                        </Link>
                        ))}
                        <hr></hr>
                        <Link href="" className='MenuItem' passHref legacyBehavior>
                        {
                            session == null
                            ?<Nav.Link>
                                <Button variant="light" onClick={ () => signIn()}>Iniciar Sesion</Button>
                            </Nav.Link>
                            :<Nav.Link>
                                <Button variant="light" onClick={ () => signOut({redirect: false})}>Cerrar Sesion</Button>
                            </Nav.Link>
                        }
                        
                        </Link>
                    </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
        </>
    )
}