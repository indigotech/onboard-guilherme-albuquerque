import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://tq-template-server-sample.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

export function loginRequisition(
  loginInput: string,
  passwordInput: string
): Promise<void> {
  return client
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
    })
    .catch((err) => {
      throw err;
    });
}
