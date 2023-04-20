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
import OpcionesMenu from '@components/menuItems'


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
                <OpcionesMenu/>
            </Container>
            </Navbar>
        </>
    )
}