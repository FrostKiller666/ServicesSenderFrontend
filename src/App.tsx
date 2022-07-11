import React from 'react';
import {Route, Routes} from "react-router";

import {MainUserSite} from "./views/MainUserSite";
import {RegisterUserSite} from "./views/RegisterUserSite";
import {LoginUserSite} from "./views/LoginUserSite";


function App() {

  return (
    <>

        <Routes>
            <Route path={'/'} element={<MainUserSite/>}/>
            <Route path={'/user/login'} element={<LoginUserSite/>}/>
            <Route path={'/user/register'} element={<RegisterUserSite/>}/>
        </Routes>
    </>
  );
}

export {
  App,
}
