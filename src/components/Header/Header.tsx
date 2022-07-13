import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';


import styles from './Header.module.css'
import {Link} from "react-router-dom";
import {apiUrl} from "../../config/api";

interface Props {
    username: string;
    isFetched: boolean;
}

const Header = (props: Props) => {

    const  logoutHandler = async () => {
        const res = await fetch(`${apiUrl}/user/clear-cookie`, {
            credentials: "include",
        });
        await res.json();
    }

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
                                <NavDropdown.Item  className={'fs-5'} as={Link} to='/user/change-username'>Zmiana Nicku</NavDropdown.Item>
                                <NavDropdown.Item  className={'fs-5'} as={Link} to='/user/change-password'>Zmiana Hasła</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item  className={'fs-5'} as={Link} onClick={logoutHandler} to='/user/login'>Wyloguj</NavDropdown.Item>
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
