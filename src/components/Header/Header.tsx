import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

import styles from './Header.module.css'

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid className={styles.container}>
                    <Navbar.Brand href="#home">Services-Sender</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-5">
                            <Nav.Link href="#features">Złóż Zamówienie</Nav.Link>
                            <Nav.Link href="#pricing">Twoje Zamówienia</Nav.Link>
                            <Nav.Link href="#a">Zapytaj o dostępnść</Nav.Link>
                            <Nav.Link href="#b">Twoje Zapytania</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto">
                            <NavDropdown title="TwojaNazwa" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Zmiana Nicku</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Zmiana Hasła</NavDropdown.Item>

                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Wyloguj</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export {
    Header,
}
