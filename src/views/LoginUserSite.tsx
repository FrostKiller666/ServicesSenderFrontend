import React, {useEffect} from "react";

import {UserLogin} from "../components/UserLogin/UserLogin";
import {HeaderLogin} from "../components/Header/HeaderLogin";
import {apiUrl} from "../config/api";


const LoginUserSite = () => {

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
