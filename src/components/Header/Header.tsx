import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';

import styles from './Header.module.css'
import {Link} from "react-router-dom";

interface Props {
    username: string;
    isFetched: boolean;
}

const Header = (props: Props) => {
    return (
        <>
            <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark" className={'sticky-top'}>
                <Container fluid className={styles.container}>
                    <Navbar.Brand className={'fs-2 '} as={Link} to='/' >Services-Sender</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-5 fs-5 p-0">
                            <Nav.Link className="mx-1" href="#features">Złóż Zamówienie</Nav.Link>
                            <Nav.Link className="mx-1" href="#pricing">Twoje Zamówienia</Nav.Link>
                            <Nav.Link className="mx-1" href="#a">Zapytaj o dostępnść</Nav.Link>
                            <Nav.Link className="mx-1" href="#b">Twoje Zapytania</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto">
                            {props.isFetched ? (<NavDropdown className={'fs-4'} title={props.username} id="collasible-nav-dropdown">
                                <NavDropdown.Item  className={'fs-5'} href="#action/3.1">Zmiana Nicku</NavDropdown.Item>
                                <NavDropdown.Item  className={'fs-5'} href="#action/3.2">Zmiana Hasła</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item  className={'fs-5'} href="#action/3.4">Wyloguj</NavDropdown.Item>
                            </NavDropdown>) : <Nav.Link className={'fs-4'} ><Spinner animation="grow" /></Nav.Link>}

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
