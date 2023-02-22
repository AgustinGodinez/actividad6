import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Link from 'next/link'
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image'

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

export default function OpcionesMenu() {
  return (
    <>
        <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
        >
            <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <Stack direction="horizontal" gap={3}>
                <Image src="/Changarrito.png" alt="Logo" width="60" height="60" style={{borderRadius: '50%'}} />
                <h3 className='title'>Changarrito</h3>
                </Stack>
            </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link href="login" className='MenuItem' passHref legacyBehavior>
                <span>Login</span>
                </Link>
                <Link href={`/admin/user/${1}`} className='MenuItem' passHref legacyBehavior>
                <Nav.Link>Perfil</Nav.Link>
                </Link>
                <hr></hr>
                <NavDropdown.Divider />
                { menu.map( (item) => (
                <Link key={item.id} href={item.path} passHref legacyBehavior>
                    <Nav.Link>{item.name}</Nav.Link>
                </Link>
                ))}
                <hr></hr>
                <Link href="" className='MenuItem' passHref legacyBehavior>
                <Nav.Link>Cerrar Sesión</Nav.Link>
                </Link>
            </Nav>
            </Offcanvas.Body>
        </Navbar.Offcanvas>
    </>
  )
}