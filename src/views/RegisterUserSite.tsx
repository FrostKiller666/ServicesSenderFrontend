import React from "react";
import {HeaderLogin} from "../components/Header/HeaderLogin";
import {UserRegister} from "../components/UserRegister/UserRegister";

const RegisterUserSite = () => {
    return (
        <>
            <HeaderLogin />
            <UserRegister />
        </>
    );
}

export {
    RegisterUserSite
}
