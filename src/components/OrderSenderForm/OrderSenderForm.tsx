import React, {useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {SubmitHandler, useForm} from "react-hook-form";

import styles from "./OrderSenderForm.module.css"
import {apiUrl} from "../../config/api";
import {useNavigate} from "react-router-dom";

interface FormRegisterType {
    pointName: string;
    model: string;
    part: string;
    color: string;
    quality: string;
    price: string;
    information: string;
    guarantee: string | boolean;
}

interface Props {
    resId: string;
}

const OrderSenderForm = (props: Props) => {
    const navigate = useNavigate();
    const {register, formState: {errors}, handleSubmit, reset} = useForm<FormRegisterType>();
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState('');


    const onSubmit: SubmitHandler<FormRegisterType> = async (data) => {
        if(data.guarantee === false) {
            data.guarantee = 'NIE'
        }
        if(data.guarantee === true) {
            data.guarantee = 'Tak'
        }

        setLoading(true);

        try {
            const res = await fetch(`${apiUrl}/order/new-order`, {
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

                    const res = await fetch(`${apiUrl}/order/new-order/send-email`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            ...data
                        })
                    });
                    console.log(await res.json());
            }

        } finally {
            setLoading(false);
        }
    }


    // @TODO Add spinner for improve user experience
    if (loading) {
        return <h2>Trwa proces zamawiania...</h2>;
    }
    // @TODO New component UserRegisterSuccess.tsx for redirect to Login site
    // if (id) {
    //     return <h2>Twoje konto u numerze <br/> ID: {id} <br/> zostało utworzone.</h2>
    // }

    return (
        <>
            <Container fluid={"sm"} className={`${styles.container} shadow p-4 mb-5 bg-body rounded`}>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className={"mt-2 mb-4"}>Złóż Zamówienie: </h2>
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

                        <Form.Group as={Col} controlId="formGridPrice">
                            <Form.Label>Cena dla klienta:</Form.Label>
                            <Form.Control placeholder="Wpisz 0 jeśli gwarancja" type="number" {...register('price', {
                                required: "To pole nie może być puste!",
                                min: 0,
                            })}/>
                            {errors.price && <p className={styles.errorP}>{errors.price.message}</p>}
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formTextAreaInformation">
                        <Form.Label>Dodatkowe informacje:</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Uwagi do zamówienia." {...register('information')}/>
                    </Form.Group>

                    <Form.Group className="mb-3" id="formGridCheckboxGuarantee">
                        <Form.Check type="checkbox"  label="Czy część będzie użyta w ramach gwarancji ?"{...register('guarantee')}/>
                    </Form.Group>

                    <Form.Group as={Col} className={'mt-4'} controlId="formButtonGroup">
                        <Button className={'me-2'} variant="primary" type="submit">
                            Wyślij
                        </Button>
                        <Button className={'me-2'} variant="primary" type="submit" >
                            Dodaj nowe zamówienie
                        </Button>
                        <Button className={'float-end'} variant="secondary" type="button" onClick={() => navigate("/",{replace: true})}>
                            Anuluj
                        </Button>
                    </Form.Group>

                </Form>
            </Container>
        </>
    );
}

export {
    OrderSenderForm,
}