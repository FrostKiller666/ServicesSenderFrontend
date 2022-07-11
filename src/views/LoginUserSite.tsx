import React from "react";

import {UserLogin} from "../components/UserLogin/UserLogin";
import {HeaderLogin} from "../components/Header/HeaderLogin";


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
