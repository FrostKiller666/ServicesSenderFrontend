import React, {useEffect, useState} from "react";
import {OrderListTableElements} from "./OrderListTableElements";

import {OrderEntityForUser} from 'types';
import {apiUrl} from "../../config/api";

interface Props {
    userId: string;
}

const OrderListTable = (props: Props) => {
    const [dataOfUserList, setDataOfUserList] = useState<OrderEntityForUser[] | null>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errRes, setErrRes] = useState('');

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`${apiUrl}/order/order-list`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userId: props.userId,
                    })
                });
                const data = await res.json();

                setErrRes(data.message)
                setDataOfUserList(data);


            } finally {

                setIsLoading(false);
            }

        })();
    }, []);
    if(errRes === 'Ptoblem z bazą danych, spróbuj za kilka chwil.') {
        return <h1>{errRes}</h1>
    }
    return (
        <>
        {isLoading ? (<></>) : (
                <>
      <OrderListTableElements listOfUserOrder={dataOfUserList}/>
                </>
            )}
        </>
    );
}

export {
    OrderListTable,
}
