import React, {useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {Button, Col, Container, Form, Row} from "react-bootstrap";

import styles from "../UserRegister/UserRegister.module.css";
import {apiUrl} from "../../../config/api";
import {LoadingSuccess} from "../../Loadingsuccess/LoadingSuccess";

interface FormRegisterType {
    username: string;
}

interface Props {
    resId: string;
    resUsername: string;
}


const UserChangeNick = (props: Props) => {
    const {register, formState: {errors}, handleSubmit} = useForm<FormRegisterType>();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const [resError, setResError] = useState('');

    const onSubmit: SubmitHandler<FormRegisterType> = async (data) => {
        setLoading(true);
        try {

            const res = await fetch(`${apiUrl}/user/change-username`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...data,
                    resId: props.resId
                }),
                credentials: "include",
            });

            const dataForm = await res.json();

            if(dataForm.message !== 'Nick został pomyślnie zmieniony.'){
                setResError(dataForm.message);
            } else {
                setSuccess(dataForm.message);
            }


        } finally {
            setLoading(false);
        }
    }
// @TODO Add spinner for improve user experience
    if (loading) {
        return <h2>Trwa proces zmiany nicku...</h2>;
    }

    if (success) {
        return <LoadingSuccess message={success}/>
    }


    return (
        <>
            <Container fluid={"sm"} className={`${styles.container} shadow p-3 mb-5 bg-body rounded`} >
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className={"mt-4"}>Zmień Swój Nick: </h2>

                    <Form.Group as={Row} className="mb-3 mt-3" controlId="formHorizontalOldUsername">
                        <Form.Label >
                            Stara nazwa użytkownika:
                        </Form.Label>
                        <Col sm={12}>
                            <Form.Control type="text" value={props.resUsername} disabled/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 mt-3" controlId="formHorizontalUsername">
                        <Form.Label >
                            Nowa nazwa użytkownika:
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
                            {resError === 'Ten nick jest zajęty.' && <p className={styles.errorP}>{resError}</p>}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Col  className={'d-grid gap-2 col-6 mx-auto'} sm={{span: 10}}>
                            <Button className={'mt-4'} type="submit">Zmień Nick</Button>
                            <Button variant="secondary" type="button" onClick={() => navigate("/",{replace: true})}>Anuluj</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Container>
        </>
    );
}

export {
    UserChangeNick,
}
