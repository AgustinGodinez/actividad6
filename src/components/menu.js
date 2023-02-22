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
import OpcionesMenu from './menuItems'

const menu = [
{path: '/admin/category',name: 'Categorias de Productos'},
{id: 1, path: '/admin/product', name: 'Lista de Productos'},
{id: 2, path: '/admin/Orders/', name: 'Pedidos'},
{id: 3, path: '/admin/Reviews/',name: 'Reviews'},
{id: 4, path: '/admin/sellers',name: 'Vendedores'},
{id: 5, path: '/admin/user',name: 'Usuarios'},
{id: 6, path: '/admin/earnings',name: 'Ventas'}
]
const expand = "true"
export default function OffcanvasExample() {
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