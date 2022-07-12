import React, {useRef, useState} from "react";
import styles from "../UserRegister/UserRegister.module.css";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {SubmitHandler, useForm} from "react-hook-form";
import {apiUrl} from "../../config/api";
import {useNavigate} from "react-router-dom";

interface FormRegisterType {
    oldPassword: string;
    password: string;
    RePassword: string;
}

interface Props {
    resPassword: string;
    resUsername: string;
}

const UserChangePassword = (props: Props) => {
    const {register, formState: {errors}, handleSubmit, watch} = useForm<FormRegisterType>();
    const password = useRef<HTMLInputElement | string>();
    password.current = watch("password", "");
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const [resError, setResError] = useState('');

    const onSubmit: SubmitHandler<FormRegisterType> = async (data) => {

        const {RePassword, ...respondeData} = data;
        setLoading(true);
        try {

            const res = await fetch(`${apiUrl}/user/change-password`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...respondeData,
                    resPassword: props.resPassword,
                    resUsername: props.resUsername
                }),
            });

            const dataForm = await res.json();

            if(dataForm !== 'Hasło zostało pomyślnie zmienione, dziękujemy.'){
                setResError(dataForm.message);
            }
            setSuccess(dataForm.message);

        } finally {
            setLoading(false);
        }
    }
    // @TODO Add spinner for improve user experience
    if (loading) {
        return <h2>Trwa proces zmiany hasła...</h2>;
    }
    // @TODO New component for redirect to Login site
    if (success) {
        return <h2>{success}</h2>
    }

    return (
        <>
            <Container fluid={"sm"} className={`${styles.container} shadow p-3 mb-5 bg-body rounded`} >
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className={"mt-4"}>Zmień Hasło: </h2>

                    <Form.Group as={Row} className="mb-3 mt-3" controlId="formHorizontalOldPassword">
                        <Form.Label >
                            Stare Hasło:
                        </Form.Label>
                        <Col sm={12}>
                            <Form.Control type="password" placeholder="Poprzednie Hasło" {...register('oldPassword', {
                                required: "To pole nie może być puste!",
                            })}/>
                            {resError === 'Twoje stare hasło było inne, spróbuj jeszcze raz.' && <p className={styles.errorP}>{resError}</p>}
                            {errors.oldPassword && <p className={styles.errorP}>{errors.oldPassword.message}</p>}
                        </Col>
                    </Form.Group>
                    <p className={'mt-0'}>Nie pamiętasz hasła? <a href={'/'}>Zresetuj</a> </p>
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
                        <Col  className={'d-grid gap-2 col-6 mx-auto'} sm={{span: 10}}>
                            <Button className={'mt-4'} type="submit">Zmień Hasło</Button>
                            <Button variant="secondary" type="button" onClick={() => navigate("/",{replace: true})}>Anuluj</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Container>
        </>
    );
}

export {
    UserChangePassword,
}
