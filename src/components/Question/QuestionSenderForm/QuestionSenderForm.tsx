import React, {useState} from "react";
import styles from "../../Order/OrderSenderForm/OrderSenderForm.module.css";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {apiUrl} from "../../../config/api";
import {LoadingSuccess} from "../../Loadingsuccess/LoadingSuccess";


interface FormRegisterType {
    pointName: string;
    model: string;
    part: string;
    color: string;
    quality: string;
    information: string;
}

interface Props {
    resId: string;
}


const QuestionSenderForm = (props: Props) => {
    const navigate = useNavigate();
    const {register, formState: {errors}, handleSubmit} = useForm<FormRegisterType>();
    const [loading, setLoading] = useState(false);
    const [emailSent, setEmailSent] = useState('');

    const onSubmit: SubmitHandler<FormRegisterType> = async (data) => {

        setLoading(true);

        try {
            const res = await fetch(`${apiUrl}/question/new-question`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: props.resId,
                    ...data
                })
            });

            const dataForm = await res.json();

            if(dataForm.message !== 'Dane zostały, przygotowane do wysłania. Wiadomość zachwilę powinna dotrzeć do odbiorcy.') {
                //@ TODO Obsługa błedu dla uzytkownika.
                console.log(dataForm.message);
            } else {

                const res = await fetch(`${apiUrl}/question/new-question/send-email`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        ...data
                    })
                });
                const resEmail = await res.json()
                setEmailSent(resEmail.message);
            }

        } finally {
            setLoading(false);
        }
    }

    // @TODO Add spinner for improve user experience
    if (loading) {
        return <h2>Trwa proces zamawiania...</h2>;
    }

    if (emailSent === 'Email został wysłany.') {
        return <LoadingSuccess message={emailSent}/>
    }

    return (
        <>
            <Container fluid={"sm"} className={`${styles.container} shadow p-4 mb-5 bg-body rounded`}>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className={"mt-2 mb-4"}>Zapytaj o dostępność części: </h2>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridPointName">
                            <Form.Label>Nazwa Punktu:</Form.Label>
                            <Form.Control {...register('pointName', {
                                required: "To pole nie może być puste!",
                            })}/>
                            {errors.pointName && <p className={styles.errorP}>{errors.pointName.message}</p>}
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridModel">
                            <Form.Label>Nazwa modelu:</Form.Label>
                            <Form.Control {...register('model', {
                                required: "To pole nie może być puste!",
                            })}/>
                            {errors.model && <p className={styles.errorP}>{errors.model.message}</p>}
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPart">
                            <Form.Label>Nazwa części:</Form.Label>
                            <Form.Control {...register('part', {
                                required: "To pole nie może być puste!",
                            })}/>
                            {errors.part && <p className={styles.errorP}>{errors.part.message}</p>}
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridColor">
                            <Form.Label>Kolor:</Form.Label>
                            <Form.Control placeholder="Podaj jeśli wymagane" {...register('color')}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridQuality">
                            <Form.Label>Stan części:</Form.Label>
                            <Form.Select defaultValue="Oryginał" {...register('quality')}>
                                <option>Oryginał</option>
                                <option>Zamiennik</option>
                                <option>Refabrykowany</option>
                                <option>Pulled</option>
                                <option>Obojętne</option>
                            </Form.Select>
                        </Form.Group>

                    </Row>

                    <Form.Group className="mb-3" controlId="formTextAreaInformation">
                        <Form.Label>Dodatkowe informacje:</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Uwagi do zapytania." {...register('information')}/>
                    </Form.Group>

                    <Form.Group as={Col} className={'mt-4'} controlId="formButtonGroup">
                        <Button className={`me-2 ${styles.customStyleButton}`} variant="primary" type="submit">
                            Wyślij
                        </Button>
                        <Button className={`float-end ${styles.customStyleButton}`} variant="secondary" type="button" onClick={() => navigate("/")}>
                            Anuluj
                        </Button>
                    </Form.Group>

                </Form>
            </Container>
        </>
    );
}

export {
    QuestionSenderForm,
}
