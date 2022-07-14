import React from 'react';
import {Route, Routes} from "react-router";

import {MainUserSite} from "./views/MainUserSite";
import {RegisterUserSite} from "./views/RegisterUserSite";
import {LoginUserSite} from "./views/LoginUserSite";
import {PasswordUserSite} from "./views/PasswordUserSite";
import {NickUserSite} from "./views/NickUserSite";
import {OrderSenderSite} from "./views/OrderSenderSite";


function App() {

  return (
    <>
        <Routes>
            <Route path={'/'} element={<MainUserSite/>}/>
            <Route path={'/user/login'} element={<LoginUserSite/>}/>
            <Route path={'/user/register'} element={<RegisterUserSite/>}/>
            <Route path={'/user/change-password'} element={<PasswordUserSite/>}/>
            <Route path={'/user/change-username'} element={<NickUserSite/>}/>
            <Route path={'/order/new-order'} element={<OrderSenderSite/>}/>
        </Routes>
    </>
  );
}

export {
  App,
}
