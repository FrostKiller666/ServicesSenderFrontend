import React from "react";

import {QuestionEntityForUser} from 'types';
import {Button, Container, Table} from "react-bootstrap";
import styles from "../../Order/OrderSenderForm/OrderSenderForm.module.css";

interface Props {
    listOfUserQuestion: QuestionEntityForUser[] | null;
}

const QuestionListTableElements = (props: Props) => {
    if(props.listOfUserQuestion === null) {
        return <h2>Twoje zapytania są puste, jeśli masz pytania dotyczące dostępnośći danej części wejdż w zakłądkę "Zapytaj o dostępność" .</h2>
    }

    const elementList = props.listOfUserQuestion.map((data, index) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        data.color === '' ? data.color = 'BRAK' : data.color;
        return (
            <tbody key={data.id}>
            <tr>
                <td>{index + 1}</td>
                <td >{data.pointName}</td>
                <td >{data.model}</td>
                <td >{data.part}</td>
                <td >{data.color}</td>
                <td >{data.quality}</td>
                <td ><Button className={`float-end ${styles.customStyleButtonQuestion}`} size="sm" variant="dark" >TAK/NIE</Button></td>
            </tr>
            </tbody>
        );
    });

    return (
        <>
            <Container fluid={"sm"} className={`${styles.container} shadow p-4 mb-5 bg-body rounded table-responsive-md`}>
                <h2 className={"mt-2 mb-4"}>Twoje Zapytania: </h2>
                <Table striped>
                    <thead>
                    <tr>
                        <th >#</th>
                        <th >Punkt zamówienia</th>
                        <th >Nazwa modelu</th>
                        <th >Nazwa części</th>
                        <th >Kolor</th>
                        <th >Stan części</th>
                        <th >Otrzymałeś odpowiedź zwrotną</th>
                    </tr>
                    </thead>
                    {elementList}
                </Table>
            </Container></>
    );
}

export {
    QuestionListTableElements,
}
