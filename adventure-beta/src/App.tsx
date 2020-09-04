import React from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://tq-template-server-sample.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

const handleOnSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  client
    .mutate({
      mutation: gql`
        mutation {
          login(data: { email: "admin@taqtile.com.br", password: "1234qwer" }) {
            token
          }
        }
      `,
    })
    .then((resp) => {
      localStorage.setItem("@adventure-beta/token", resp.data.login.token);
    })
    .catch((err) => {
      alert(err);
    });
};

function App() {
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
          />
        </label>

        <label>
          {"Senha"}

          <input
            type="password"
            required={true}
            pattern="(?=.*\d)(?=.*[a-z]).{7,}"
            title=" A sua senha deve ter pelo menos 7 caracteres e conter pelo menos:
            uma letra minúscula e um dígito. "
          />
        </label>

        <input type="submit" value="Entrar" />
      </form>
    </div>
  );
}

export default App;
