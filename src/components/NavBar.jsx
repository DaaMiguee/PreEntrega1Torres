import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import UserButton from './UserButton';
const NavBar = () => {
    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#">TecnoMania</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#">Móviles</Nav.Link>
                            <Nav.Link href="#">TV & AV</Nav.Link>
                            <Nav.Link href="#">Auriculares</Nav.Link>
                            <Nav.Link href="#">Electrodomésticos</Nav.Link>
                            <Nav.Link href="#">Soporte</Nav.Link>
                            <NavDropdown title="Categorias" id="basic-nav-dropdown" className='dropdown'>
                                <NavDropdown.Item href="#">opcion 1</NavDropdown.Item>
                                <NavDropdown.Item href="#">
                                    opcion 2
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#">opcion 3</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <CartWidget/>
                <UserButton/>
            </Navbar>
        </header>
    )
}

export default NavBar