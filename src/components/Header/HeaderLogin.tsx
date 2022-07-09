import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

import styles from "./Header.module.css";

const HeaderLogin = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark" className={'sticky-top'}>
                <Container fluid className={styles.container}>
                    <Navbar.Brand className={'fs-2 '} href="#home">Services-Sender</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export {
    HeaderLogin
}
