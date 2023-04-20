import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Link from 'next/link'
import Stack from 'react-bootstrap/Stack'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { useSession, signIn, signOut } from "next-auth/react"
import Menu from '@components/Nav/opciones'

const expand = "true"

export default function OpcionesMenu({menu}) {
    const { data: session } = useSession()
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
                {
                    session?.user?.image==null
                    ? <Image src={`https://ui-avatars.com/api/?name=${session?.user?.name}`}  alt="Logo" width="60" height="60" style={{borderRadius: '50%'}} />
                    : <Image src={session.user?.image} alt="Logo" width="60" height="60" style={{borderRadius: '50%'}} />
                }
                {
                    false
                    ? <h3 className='title'>{ session?.user?.name }</h3>
                    : <h3 className='title'>Changarrito</h3>
                }
                </Stack>
            </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link href={`/admin/user/${1}`} className='MenuItem' passHref legacyBehavior>
                <Nav.Link>Mi Perfil</Nav.Link>
                </Link>
                <hr></hr>
                <NavDropdown.Divider />
                { Menu.map( (item) => (
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
                        <Button variant="light" onClick={ () => signOut()}>Cerrar Sesion</Button>
                    </Nav.Link>
                }
                
                </Link>
            </Nav>
            </Offcanvas.Body>
        </Navbar.Offcanvas>
    </>
  )
}