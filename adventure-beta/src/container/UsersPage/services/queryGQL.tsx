import {
  ApolloClient,
  InMemoryCache,
  gql,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://tq-template-server-sample.herokuapp.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("@adventure-beta/token");
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const getAllUsers = (): Promise<any> => {
  return client
    .query({
      query: gql`
        query getUsers{
          users(pageInfo : {offset:${0}, limit:${10}}){
            nodes {
              name
              email
            }
          }
        }
      `,
    })
    .then((resp) => {
      return resp.data.users.nodes;
    })
    .catch((err) => {
      throw err;
    });
};
