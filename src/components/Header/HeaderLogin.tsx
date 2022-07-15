import React from "react";
import {Container, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

import styles from "./Header.module.css";

const HeaderLogin = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark" className={'sticky-top'}>
                <Container fluid className={styles.container}>
                    <Navbar.Brand className={'fs-2 '} as={Link} to='/'>Services-Sender</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export {
    HeaderLogin
}
