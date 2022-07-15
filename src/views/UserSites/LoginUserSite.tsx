import React, {useEffect, useState} from "react";

import {UserLogin} from "../../components/User/UserLogin/UserLogin";
import {HeaderLogin} from "../../components/Header/HeaderLogin";
import {apiUrl} from "../../config/api";
import {useNavigate} from "react-router-dom";


const LoginUserSite = () => {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`${apiUrl}/user/auth`, {
                    credentials: "include",
                });
                const data = await res.json();

                if (data.message !== 'Brak autentykacji') {
                    navigate("/", {replace: true});
                }
            } finally {
                setIsLoading(false);
            }

        })();
    }, []);


    return (
        <>
            {isLoading?(<></>):(
                <>
                    <HeaderLogin />
                    <UserLogin />
                </>
            )}

        </>
    );
}

export {
    LoginUserSite,
}
