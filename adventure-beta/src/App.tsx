import React from "react";
import LoginPage from "./container/LoginPage/index";
import UsersPage from "./container/UsersPage/index";
import NewUser from "./container/NewUserPage/index";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <LoginPage />
        </Route>

        <Route exact path={"/new-user"}>
          <NewUser />
        </Route>

        <Route exact path={"/home"}>
          <UsersPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
