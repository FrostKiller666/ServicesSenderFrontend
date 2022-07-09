import React from 'react';
import {MainUserSite} from "./views/MainUserSite";
import {UserLogin} from "./components/UserLogin/UserLogin";
import {LoginUserSite} from "./views/LoginUserSite";

function App() {
  return (
    <>
       {/*<MainUserSite />*/}
      <LoginUserSite />
    </>
  );
}

export {
  App,
}
