import React, {useState} from "react";

import {QuestionEntityForUser} from 'types';
import {Button, Container, Table} from "react-bootstrap";
import styles from "../../Order/OrderSenderForm/OrderSenderForm.module.css";
import {apiUrl} from "../../../config/api";

interface Props {
    listOfUserQuestion: QuestionEntityForUser[] | null;
}

const QuestionListTableElements = (props: Props) => {
    const [dataForDisable, setDataForDisable] = useState(props.listOfUserQuestion?.map(el => [el.id, el.arrived]));
    if(props.listOfUserQuestion === null) {
        return <h2>Twoje zapytania są puste, jeśli masz pytania dotyczące dostępnośći danej części wejdż w zakłądkę "Zapytaj o dostępność" .</h2>
    }

    const handleButtonClick = async (id: string) => {

        setDataForDisable(dataForDisable?.map((row: any) => {
            if (row[0] === id) {
                return [id, 1];
            }
            return row;
        }));

        await fetch(`${apiUrl}/question/question-list`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id,
                arrived: 1
            }),
            credentials: "include",
        });

    };

    const elementList = props.listOfUserQuestion.map((data, index) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        data.color === '' ? data.color = 'BRAK' : data.color;
        const isDisabled = dataForDisable?.find((row) => row[0] === data.id)?.[1] === 1;
        return (
            <tbody key={data.id}>
            <tr className={isDisabled ? ('text-decoration-line-through') : ''}>
                <td>{index + 1}</td>
                <td >{data.pointName}</td>
                <td >{data.model}</td>
                <td >{data.part}</td>
                <td >{data.color}</td>
                <td >{data.quality}</td>
                <td ><Button className={`float-end ${styles.customStyleButtonQuestion}`} size="sm" variant="dark" disabled={isDisabled}
                             onClick={() => {
                                 handleButtonClick(data.id);
                             }
                             }>{isDisabled ? 'Tak' : 'Nie'}</Button></td>
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
