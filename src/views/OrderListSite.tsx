import React, {useEffect, useState} from "react";
import {Header} from "../components/Header/Header";
import {OrderListTable} from "../components/OrderListTable/OrderListTable";
import {useNavigate} from "react-router-dom";
import {apiUrl} from "../config/api";

const OrderListSite = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [userId, setUserID] = useState('');
    const [isFetched, setIsFetched] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`${apiUrl}/user/auth`, {
                    credentials: "include",
                });
                const data = await res.json();

                if (data.message === 'Brak autentykacji') {
                    navigate("/user/login", {replace: true});
                }
                setUsername(data.username);
                setUserID(data.id)
            } finally {
                setIsFetched(true);
                setIsLoading(false);
            }

        })();
    }, []);
    return (
        <>
            {isLoading ? (<></>) :
                (
                    <>
            <Header isFetched={isFetched} username={username} />
            <OrderListTable userId={userId}/>
                    </>
                )}
        </>
    );
}

export {
    OrderListSite,
}
