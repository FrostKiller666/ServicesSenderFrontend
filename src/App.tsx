import React from 'react';
import {MainUserSite} from "./views/MainUserSite";
import {UserLogin} from "./components/UserLogin/UserLogin";
import {LoginUserSite} from "./views/LoginUserSite";
import {RegisterUserSite} from "./views/RegisterUserSite";

function App() {
  return (
    <>
       {/*<MainUserSite />*/}
     {/* <LoginUserSite />*/}
        <RegisterUserSite />
    </>
  );
}

export {
  App,
}
