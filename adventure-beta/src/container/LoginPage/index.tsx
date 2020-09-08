import React, { useState } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { loginRequisition } from "./services/queryGQL";

const client = new ApolloClient({
  uri: "https://tq-template-server-sample.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

function LoginPage() {
  const [loginInput, setLogin] = useState<string>("");
  const [passwordInput, setPassword] = useState<string>("");
  const [loadingLogin, setLoading] = useState<boolean>(false);

  const history = useHistory();

  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await loginRequisition(loginInput, passwordInput);
      history.push("/home");
    } catch (err) {
      setLoading(false);
      alert(err);
    }
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
            title="A sua senha deve ter pelo menos 7 caracteres e conter pelo menos:
            uma letra minúscula e um dígito. "
          />
        </label>

        <input type="submit" value={loadingLogin ? "Carregando" : "Entrar"} />
      </form>
    </div>
  );
}

export default LoginPage;
