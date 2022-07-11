import React, {useRef, useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {SubmitHandler, useForm} from "react-hook-form";

import styles from "./UserRegister.module.css";
import {apiUrl} from "../../config/api";

// @TODO if reusable just move to folder utils
interface FormRegisterType {
    username: string;
    email: string;
    password: string;
    RePassword: string;
}

const UserRegister = () => {
    const {register, formState: {errors}, handleSubmit, watch} = useForm<FormRegisterType>();
    const password = useRef<HTMLInputElement | string>();
    password.current = watch("password", "");

    const [loading, setLoading] = useState(false);
    const [id, setId] = useState('');

    const onSubmit: SubmitHandler<FormRegisterType> = async (data) => {
        const {RePassword, ...respondeData} = data;
        setLoading(true);

        try {
            const res = await fetch(`${apiUrl}/user/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...respondeData,
                }),
            });

            const dataForm = await res.json();

            setId(dataForm.id);
        } finally {
            setLoading(false);
        }
    }
    // @TODO Add spinner for improve user experience
    if (loading) {
        return <h2>Trwa proces rejestracji...</h2>;
    }
    // @TODO New component UserRegisterSuccess.tsx for redirect to Login site
    if (id) {
        return <h2>Twoje konto u numerze <br/> ID: {id} <br/> zostało utworzone.</h2>
    }

    return (
        <>
            <Container fluid={"sm"} className={`${styles.container} shadow p-3 mb-5 bg-body rounded`} >
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className={"mt-4"}>Zarejestruj się: </h2>

                    <Form.Group as={Row} className="mb-3 mt-3" controlId="formHorizontalUsername">
                        <Form.Label >
                            Nazwa użytkownika:
                        </Form.Label>
                        <Col sm={12}>
                            <Form.Control type="text" placeholder="nazwa użytkownika" {...register('username', {
                                required: "To pole nie może być puste!",
                                minLength: {
                                    value: 4,
                                    message: "Nazwa użytkownika musi mieć minimum 4 znaków.",
                                },
                                maxLength: {
                                    value: 25,
                                    message: "Nazwa użytkownika musi mieć maxymalnie 25 znaków"
                                },
                            })}/>
                            {errors.username && <p className={styles.errorP}>{errors.username.message}</p>}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label>
                            Email:
                        </Form.Label>
                        <Col sm={12}>
                            <Form.Control type="email" placeholder="Email" {...register('email', {
                                required: "To pole nie może być puste!",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Wprowadziłeś niepoprawny adres mailowy."
                                }
                            })}/>
                            {errors.email && <p className={styles.errorP}>{errors.email.message}</p>}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                        <Form.Label>
                            Hasło:
                        </Form.Label>
                        <Col sm={12}>
                            <Form.Control type="password" placeholder="Hasło"
                                          {...register('password', {
                                              required: "To pole nie może być puste!",
                                              minLength: {
                                                  value: 8,
                                                  message: "Hasło musi mieć conajmniej 8 znaków.",
                                              },
                                              maxLength: {
                                                  value: 32,
                                                  message: "Hasło nie może mieć więcej niż 32 znaki."
                                              },
                                              validate: {
                                                  isUpper: (value) => /(?=.*[A-Z])/.test(value) || "Hasło musi zawierać conajmniej jedną dużą litere",
                                                  isLower: (value) => /(?=.*[a-z])/.test(value) || "Hasło musi zawierać conajmniej jedną małą litere",
                                                  isSpecialChar: (value) => /(?=.*[@#$%^&+=!_~])/.test(value) || "Hasło musi zawierać conajmniej jeden znak specjalny",
                                              },
                                          })}
                                          />
                            {errors.password && <p className={styles.errorP}>{errors.password.message}</p>}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalRepeatPassword">
                        <Form.Label >
                            Powtórz Hasło:
                        </Form.Label>
                        <Col sm={12}>
                            <Form.Control type="password" placeholder="Powtórz Hasło" {...register('RePassword', {
                                validate: value =>
                                    value === password.current || "Hasło jest nieprawidłowe"
                            })}/>
                            {errors.RePassword && <p className={styles.errorP}>{errors.RePassword.message}</p>}
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
