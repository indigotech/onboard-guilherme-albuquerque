import React from "react";
import LoginPage from "./container/LoginPage/index";
import BlankPage from "./container/BlankPage/index";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <LoginPage />
        </Route>

        <Route exact path={"/home"}>
          <BlankPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
