import React, {useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {SubmitHandler, useForm} from "react-hook-form";

import styles from "./UserLogin.module.css";
import {apiUrl} from "../../config/api";

interface FormRegisterType {
    email: string;
    password: string;
}

interface ResDataUser {
    userId: string;
    message?: string;
}

const UserLogin = () => {
    const {register, formState: {errors}, handleSubmit} = useForm<FormRegisterType>();
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState('');
    const [errorRes, setErrorRes] = useState<boolean | string | undefined>(false);

    const onSubmit: SubmitHandler<FormRegisterType> = async (data) => {
        setLoading(true);

        try {
            const res = await fetch(`${apiUrl}/user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    data,
                }),
                credentials: "include",
            });

            const dataLogin: ResDataUser = await res.json();
            setErrorRes(dataLogin.message);
            setId(dataLogin.userId);

        } finally {
            setLoading(false);
        }
    }


    if (id) {
        return <h2>ZUżytkownik o numerze <br/> ID: {id} <br/>został pomyślnie zalogowany.</h2>
    }
    // @TODO Its make only sens for users who's got very slow internet, probably i will delete it.
    if (loading) {
        return <h2>Trwa proces logowania...</h2>;
    }

    return (
        <>
            <Container fluid={"sm"} className={`${styles.container} shadow p-3 mb-5 bg-body rounded`} >
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <h2 className={"mt-4"}>Zaloguj się: </h2>
                            <Form.Group as={Row} className="mb-3 mt-3" controlId="formHorizontalEmail">
                                <Form.Label  sm={4}>
                                    Email:
                                </Form.Label>
                                <Col sm={12}>
                                    <Form.Control type="email" placeholder="Email" {...register('email')}/>
                                    {errorRes === 'Taki adres mailowy nie istnieje.' && <p className={styles.errorP}>{errorRes}</p>}
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                <Form.Label sm={4}>
                                    Hasło:
                                </Form.Label>
                                <Col sm={12}>
                                    <Form.Control type="password" placeholder="Hasło" {...register('password')}/>
                                    {errorRes === 'Hasła są nieprawidłowe, spróbuj jeszcze raz.'&& <p className={styles.errorP}>{errorRes}</p>}
                                </Col>
                            </Form.Group>
                            <p className={'mb-0 '}>Nie masz konta? <a href={'/user/register'}>Załóż Nowe</a></p>
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
