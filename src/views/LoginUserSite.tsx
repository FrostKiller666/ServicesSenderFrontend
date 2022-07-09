import React from "react";

import {UserLogin} from "../components/UserLogin/UserLogin";
import {HeaderLogin} from "../components/Header/HeaderLogin";
import styles from './LoginUserSite.module.css'

const LoginUserSite = () => {
    return (
        <div className={styles.mainBackground}>
            <HeaderLogin />
            <UserLogin />
        </div>
    );
}

export {
    LoginUserSite,
}
