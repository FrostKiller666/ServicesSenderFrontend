import React from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import styles from "../UserLogin/UserLogin.module.css";

const UserRegister = () => {
    return (
        <>
            <Container fluid={"sm"} className={`${styles.container} shadow p-3 mb-5 bg-body rounded`} >
                <Form >
                    <h2 className={"mt-4"}>Zarejestruj się: </h2>

                    <Form.Group as={Row} className="mb-3 mt-3" controlId="formHorizontalUsername">
                        <Form.Label >
                            Nazwa użytkownika:
                        </Form.Label>
                        <Col sm={12}>
                            <Form.Control type="text" placeholder="nazwa użytkownika" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label>
                            Email:
                        </Form.Label>
                        <Col sm={12}>
                            <Form.Control type="email" placeholder="Email" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                        <Form.Label>
                            Hasło:
                        </Form.Label>
                        <Col sm={12}>
                            <Form.Control type="password" placeholder="Hasło"
                                          />

                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalRepeatPassword">
                        <Form.Label >
                            Powtórz Hasło:
                        </Form.Label>
                        <Col sm={12}>
                            <Form.Control type="password" placeholder="Powtórz Hasło"/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{span: 10}}>
                            <Button type="submit">Zarejestruj</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Container>
        </>
    );
}

export {
    UserRegister
}
