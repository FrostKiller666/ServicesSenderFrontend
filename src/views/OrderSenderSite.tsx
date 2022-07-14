import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import {HeaderLogin} from "../components/Header/HeaderLogin";
import {OrderSenderForm} from "../components/OrderSenderForm/OrderSenderForm";
import {apiUrl} from "../config/api";
import {UserEntity} from 'types';

const OrderSenderSite = () => {
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
                    <OrderSenderForm resId={userData.id}/>
                </>
            )}
        </>
    );
}

export {
    OrderSenderSite,
}
