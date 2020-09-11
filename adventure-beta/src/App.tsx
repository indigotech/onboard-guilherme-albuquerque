import React, { useState } from "react";
import LoginPage from "./container/LoginPage/index";
import UsersPage from "./container/UsersPage/index";
import NewUser from "./container/NewUserPage/index";
import UserDetails from "./container/UserDetails/index";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export interface AppState {
  id: string;
}

function App() {
  const [idUser, setId] = useState<AppState | Object>();

  const handleSelectId = (id: string) => {
    setId(id);
  };

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
          <UsersPage selectedId={handleSelectId} />
        </Route>

        <Route exact path={"/user-details"}>
          <UserDetails id={idUser} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
