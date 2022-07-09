import React from "react";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";

import styles from "./UserLogin.module.css";

const UserLogin = () => {
    return (
        <>
            <Container fluid={"sm"} className={`${styles.container} shadow p-3 mb-5 bg-body rounded`} >
                        <Form >
                            <h2 className={"mt-4"}>Zaloguj się: </h2>
                            <Form.Group as={Row} className="mb-3 mt-3" controlId="formHorizontalEmail">
                                <Form.Label  sm={4}>
                                    Email:
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="email" placeholder="Email" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                <Form.Label sm={4}>
                                    Hasło:
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="password" placeholder="Hasło" />
                                </Col>
                            </Form.Group>
                            <p className={'mb-0 '}>Nie masz konta? <a href={'/'}>Załóż Nowe</a></p>
                            <p className={'mb-4 '}>Nie pamiętasz hasła? <a href={'/'}>Zresetuj</a> </p>
                            <Form.Group as={Row} className="mb-3">
                                <Col sm={{span: 10}}>
                                    <Button type="submit">Zaloguj</Button>
                                </Col>
                            </Form.Group>
                        </Form>
            </Container>
        </>
    );
}

export {
    UserLogin,
}
