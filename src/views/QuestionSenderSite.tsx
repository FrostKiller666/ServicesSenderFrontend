import React, {useEffect, useState} from "react";
import {HeaderLogin} from "../components/Header/HeaderLogin";
import {useNavigate} from "react-router-dom";

import {apiUrl} from "../config/api";
import {UserEntity} from 'types';
import {QuestionSenderForm} from "../components/QuestionSenderForm/QuestionSenderForm";

const QuestionSenderSite = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState<UserEntity>({
        id: '',
        password: '',
        username: '',
        email: ''
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`${apiUrl}/user/auth`, {
                    credentials: "include",
                });
                const data = await res.json();
                if (data.message === 'Brak autentykacji') {
                    navigate("/user/login",{replace: true});
                }
                setUserData(data);
            } finally {
                setIsLoading(false);
            }

        })();
    }, []);

    return (
        <>
            {isLoading ? (<></>) : (
                <>
                    <HeaderLogin />
                    <QuestionSenderForm resId={userData.id}/>
                </>
            )}
        </>
    );
}

export {
    QuestionSenderSite,
}
