import React from 'react';
import {Route, Routes} from "react-router";

import {MainUserSite} from "./views/UserSites/MainUserSite";
import {RegisterUserSite} from "./views/UserSites/RegisterUserSite";
import {LoginUserSite} from "./views/UserSites/LoginUserSite";
import {PasswordUserSite} from "./views/UserSites/PasswordUserSite";
import {NickUserSite} from "./views/UserSites/NickUserSite";
import {OrderSenderSite} from "./views/OrderSites/OrderSenderSite";
import {OrderListSite} from "./views/OrderSites/OrderListSite";
import {QuestionSenderSite} from "./views/QuestionSites/QuestionSenderSite";
import {QuestionListSide} from "./views/QuestionSites/QuestionListSide";


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
            <Route path={'/order/order-list'} element={<OrderListSite/>}/>
            <Route path={'/question/new-question'} element={<QuestionSenderSite/>}/>
            <Route path={'/question/question-list'} element={<QuestionListSide/>}/>
        </Routes>
    </>
  );
}

export {
  App,
}
