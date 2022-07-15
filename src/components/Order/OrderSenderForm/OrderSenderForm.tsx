import React, {useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {SubmitHandler, useForm} from "react-hook-form";

import styles from "./OrderSenderForm.module.css"
import {apiUrl} from "../../../config/api";
import {useNavigate} from "react-router-dom";
import {LoadingSuccess} from "../../Loadingsuccess/LoadingSuccess";

interface FormRegisterType {
    pointName: string;
    model: string;
    part: string;
    color: string;
    quality: string;
    price: string;
    information: string;
    guarantee: string | boolean;
    userId: string;
}

interface Props {
    resId: string;
}

const defaultState = {
    pointName: "",
    model: "",
    part: "",
    color: "",
    quality: "Oryginał",
    price: "",
    information: "",
    guarantee: false
}

const OrderSenderForm = (props: Props) => {
    const navigate = useNavigate();
    const {register, formState: {errors}, handleSubmit, reset, watch} = useForm<FormRegisterType>();
    const [loading, setLoading] = useState(false);
    const [emailSent, setEmailSent] = useState('');
    const [orders, setOrders] = useState<FormRegisterType[]>([]);
    const watchAllFields = watch();

     const handleAddOrder = () => {
         const guarantee = watchAllFields.guarantee ? 'TAK' : 'NIE'
         setOrders([...orders, {...watchAllFields, userId: props.resId, guarantee }])
     }

    const onSubmit: SubmitHandler<FormRegisterType> = async (data) => {
         const guarantee = data.guarantee ? 'TAK' : 'NIE';

        setLoading(true);
        const ordersToSend = orders;
        ordersToSend.push({...watchAllFields, userId: props.resId, guarantee});

        try {
            const res = await fetch(`${apiUrl}/order/new-order`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...ordersToSend
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
                        ...ordersToSend
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
                    <h2 className={"mt-2 mb-4"}>Złóż Zamówienie: </h2>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridPointName">
                            <Form.Label>Nazwa Punktu:</Form.Label>
                            <Form.Control {...register('pointName', {
                                required: "To pole nie może być puste!",
                                maxLength: 30,
                                minLength: 4
                            })}/>
                            {errors.pointName && <p className={styles.errorP}>{errors.pointName.message}</p>}
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridModel">
                            <Form.Label>Nazwa modelu:</Form.Label>
                            <Form.Control {...register('model', {
                                required: "To pole nie może być puste!",
                                maxLength: 45,
                                minLength: 5
                            })}/>
                            {errors.model && <p className={styles.errorP}>{errors.model.message}</p>}
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPart">
                            <Form.Label>Nazwa części:</Form.Label>
                            <Form.Control {...register('part', {
                                required: "To pole nie może być puste!",
                                maxLength: 70,
                                minLength: 4
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
                                max: 9999
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
                        <Button className={'me-2'} variant="primary" type="button" onClick={() => {
                            handleAddOrder();
                            reset(defaultState, {
                                keepErrors: false
                            });
                        }}>
                            Dodaj nowe zamówienie
                        </Button>
                        <Button className={'float-end'} variant="secondary" type="button" onClick={() => {
                            navigate("/",{replace: true})
                        }} >
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
