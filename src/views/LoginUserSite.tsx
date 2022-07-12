import React, {useEffect} from "react";

import {UserLogin} from "../components/UserLogin/UserLogin";
import {HeaderLogin} from "../components/Header/HeaderLogin";
import {apiUrl} from "../config/api";
import {useNavigate} from "react-router-dom";


const LoginUserSite = () => {
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
                const res = await fetch(`${apiUrl}/user/auth`, {
                    credentials: "include",
                });
                const data = await res.json();

                if (data.message !== 'Brak autentykacji') {
                    navigate("/", {replace: true});
                }
        })();
    }, []);


    return (
        <>
            <HeaderLogin />
            <UserLogin />
        </>
    );
}

export {
    LoginUserSite,
}
