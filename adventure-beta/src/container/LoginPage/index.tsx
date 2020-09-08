import React, { useState } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useHistory } from "react-router-dom";

const client = new ApolloClient({
  uri: "https://tq-template-server-sample.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

function LoginPage() {
  const [loginInput, setLogin] = useState<string>("");
  const [passwordInput, setPassword] = useState<string>("");


  const history = useHistory();

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    client
      .mutate({
        mutation: gql`
          mutation {
            login(data: { email: "${loginInput}", password: "${passwordInput}" }) {
              token
            }
          }
        `,
      })
      .then((resp) => {
        localStorage.setItem("@adventure-beta/token", resp.data.login.token);
        history.push("/home");
      })
      .catch((err) => {
        alert(err);
      });
  };

  const handleLoginInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLogin(event.target.value);
  };

  const handlePasswordInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <h1>Bem vindo(a) à Taqtile!</h1>
      <form onSubmit={handleOnSubmit}>
        <label>
          {"E-mail"}

          <input
            type="email"
            required={true}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            onChange={handleLoginInputChange}
            value={loginInput}
          />
        </label>

        <label>
          {"Senha"}

          <input
            type="password"
            required={true}
            pattern="(?=.*\d)(?=.*[a-z]).{7,}"
            onChange={handlePasswordInputChange}
            value={passwordInput}
            title=" A sua senha deve ter pelo menos 7 caracteres e conter pelo menos:
            uma letra minúscula e um dígito. "
          />
        </label>

        <input type="submit" value="Entrar" />
      </form>
    </div>
  );
}

export default LoginPage;
