import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import {Header} from "../components/Header/Header";
import {MainSiteInformation} from "../components/MainSiteInformation/MainSiteInformation";
import {apiUrl} from "../config/api";

const MainUserSite = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [isFetched, setIsFetched] = useState(false);

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
            } finally {
                setIsFetched(true);
            }

        })();
    }, []);

    return (
        <>
            <Header isFetched={isFetched} username={username}/>
            <MainSiteInformation/>
        </>


    );
}

export {
    MainUserSite,
}
