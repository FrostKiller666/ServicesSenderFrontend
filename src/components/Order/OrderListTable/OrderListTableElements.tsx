import React, {useState} from "react";
import {OrderEntityForUser} from 'types';
import {Button, Container, Table} from "react-bootstrap";
import styles from "../OrderSenderForm/OrderSenderForm.module.css";

interface Props {
    listOfUserOrder: OrderEntityForUser[] | null;
}

const OrderListTableElements = (props: Props) => {
    const [dataForDisable, setDataForDisable] = useState(props.listOfUserOrder?.map(el => [el.id, false]));

    if (props.listOfUserOrder === null) {
        return <h2>Twoje zamówienia są puste, warto było by coś zamówic i naprawić.</h2>
    }

    const handleButtonClick = (id: string) => {
        setDataForDisable(dataForDisable?.map((row) => {
            if (row[0] === id) {
                return [id, !row[1]];
            }
            return row;
        }));
    };

    const elementList = props.listOfUserOrder.map((data, index) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        data.color === '' ? data.color = 'BRAK' : data.color;
        const isDisabled = dataForDisable?.find((row) => row[0] === data.id)?.[1] as boolean;

        return (
            <tbody key={data.id}>
            <tr className={isDisabled ? ('text-decoration-line-through') : ''}>
                <td>{index + 1}</td>
                <td>{data.pointName}</td>
                <td>{data.model}</td>
                <td>{data.part}</td>
                <td>{data.color}</td>
                <td>{data.quality}</td>
                <td>{data.price} zł</td>
                <td>{data.guarantee}</td>
                <td><Button style={{
                    width: '100%',
                }} size="sm" variant="dark"
                            disabled={isDisabled}
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
            <Container fluid={"sm"}
                       className={`${styles.container} shadow p-4 mb-5 bg-body rounded table-responsive-md`}>
                <h2 className={"mt-2 mb-4"}>Twoje Zamówienia: </h2>
                <Table striped>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Punkt zamówienia</th>
                        <th>Nazwa modelu</th>
                        <th>Nazwa części</th>
                        <th>Kolor</th>
                        <th>Stan części</th>
                        <th>Cena dla klienta</th>
                        <th>Gwarancja</th>
                        <th>Dotarło</th>
                    </tr>
                    </thead>
                    {elementList}
                </Table>
            </Container>
        </>
    );
}

export {
    OrderListTableElements,
}
