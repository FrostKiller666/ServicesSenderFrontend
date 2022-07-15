import React, {useEffect, useState} from "react";

import {QuestionEntityForUser} from 'types'
import {apiUrl} from "../../../config/api";
import {QuestionListTableElements} from "./QuestionListTableElements";

interface Props {
    userId: string;
}

const QuestionListTable = (props: Props) => {

    const [dataOfUserList, setDataOfUserList] = useState<QuestionEntityForUser[] | null>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errRes, setErrRes] = useState('');

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`${apiUrl}/question/question-list`, {
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
                    <QuestionListTableElements listOfUserQuestion = {dataOfUserList}/>
                </>
            )}
        </>
    );
}

export {
    QuestionListTable,
}
